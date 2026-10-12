import { execFileSync } from 'node:child_process';
import { cpSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const git = (args, cwd = project) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
const remote = git(['remote', 'get-url', '--push', 'origin']);
const source = git(['rev-parse', '--short', 'HEAD']);
const author = git(['config', 'user.name']);
const email = git(['config', 'user.email']);

if (git(['status', '--porcelain', '--', '.'])) {
  throw new Error('Commit the city/ changes before publishing so the site has an identifiable source version.');
}

console.log(`Publishing ${source} to ${remote} (gh-pages).`);
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
execFileSync(npm, ['test'], { cwd: project, stdio: 'inherit', shell: process.platform === 'win32' });
execFileSync(npm, ['run', 'build'], { cwd: project, stdio: 'inherit', shell: process.platform === 'win32' });

const staging = mkdtempSync(join(tmpdir(), 'metabolis-pages-'));
try {
  const existing = git(['ls-remote', '--heads', remote, 'gh-pages']);
  if (existing) {
    git(['clone', '--quiet', '--single-branch', '--branch', 'gh-pages', '--depth', '1', remote, staging]);
    for (const entry of readdirSync(staging)) {
      if (entry !== '.git') rmSync(join(staging, entry), { recursive: true, force: true });
    }
  } else {
    git(['init', '--quiet', '--initial-branch=gh-pages', staging]);
    git(['remote', 'add', 'origin', remote], staging);
  }
  cpSync(join(project, 'dist'), staging, { recursive: true });
  writeFileSync(join(staging, '.nojekyll'), '');
  git(['add', '--all'], staging);
  if (git(['diff', '--cached', '--name-only'], staging)) {
    git(['-c', `user.name=${author}`, '-c', `user.email=${email}`, 'commit', '--quiet', '-m', `Deploy Metabolis from ${source}`], staging);
    // A concurrent deployment is rejected instead of rewriting published history.
    execFileSync('git', ['push', 'origin', 'HEAD:gh-pages'], { cwd: staging, stdio: 'inherit' });
  } else {
    console.log('The published files already match this build.');
  }
} finally {
  rmSync(staging, { recursive: true, force: true });
}
