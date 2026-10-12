#!/bin/zsh
set -e
cd "$(dirname "$0")/city"
if ! command -v node >/dev/null 2>&1; then
  echo "请先安装 Node.js 22.12 或更高版本，再重新打开生命群岛。"
  read -r "reply?按回车关闭窗口…"
  exit 1
fi
if [ ! -d node_modules ]; then
  npm ci
fi
if curl -fsS http://127.0.0.1:5173/ 2>/dev/null | grep -q 'Metabolis'; then
  open http://127.0.0.1:5173/
  exit 0
fi
if lsof -iTCP:5173 -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "5173 端口被另一个应用占用。请关闭该应用后重新打开生命群岛。"
  read -r "reply?按回车关闭窗口…"
  exit 1
fi
(sleep 2; open http://127.0.0.1:5173/) &
echo "生命群岛正在启动。游玩时请保留此窗口，按 Control+C 停止。"
npm run dev -- --port 5173 --strictPort
