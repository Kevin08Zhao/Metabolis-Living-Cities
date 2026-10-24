<div align="center">

# Metabolis · Living Cities

### A city lives within you.

**Build a living town, explore six human body systems, and share an ordinary yet extraordinary day with its cell residents.**

A little world within — a 3D city-building and exploration game inspired by the human body.

[![Play online](https://img.shields.io/badge/Play_online-Living_Cities-607553?style=for-the-badge)](https://kevin08zhao.github.io/Metabolis-Living-Cities/)
[![Version](https://img.shields.io/badge/Version-1.0.0-d87565?style=for-the-badge)](city/package.json)
![Single player](https://img.shields.io/badge/Single_player-Chinese_interface-ca9748?style=for-the-badge)
![Browser](https://img.shields.io/badge/Browser-WebGL-559f9a?style=for-the-badge)

[Play](#play) · [Building](#build) · [Explore six cities](#explore) · [Harbor story](#story) · [Controls and saves](#controls) · [Run locally](#local) · [Development and deployment](#development)

<img src="docs/images/living-town.jpg" alt="An example completed Living Town: all six systems work together during the lantern festival" width="100%">

*A town built from dawn to the lantern festival. All screenshots show actual gameplay.*

</div>

## What is this game?

**Metabolis · Living Cities** is a 3D city-building and exploration game whose rules are inspired by cooperation between human body systems. You are both the town planner and a visitor to a microscopic world: give cells a home, connect blood vessels, manage oxygen and resources, then step into cities shaped by organs to meet residents, watch deliveries, and collect memories of your journey.

Everyday life makes your progress visible. The first road home, breakfast delivered to every street, and a melody learned together lead to a lantern festival for all the neighbors. Your plans produce visible changes, while residents’ daily lives help explain the connections between systems.

| Experience | What you will do |
| --- | --- |
| **Build Life · A Day in the Body** | Complete six chapters in one continuously growing town, bring all six systems online, and unlock the ending and free building. |
| **Explore the Islands** | Visit six separate, detailed cities and freely explore their landmarks, neighborhoods, and residents’ lives. |
| **Alveolar Harbor · A Day with Xiaohong** | Join Xiaohong the red blood cell at work, meet her exchange partner, complete a gas exchange, and take a group photo. |
| **Exploration Journal** | Record residents, events, structural discoveries, and journeys; collect postcards and favorite camera viewpoints. |

**This repository contains the newer browser game. All game source code is in `city/`.** The earlier project is maintained separately at [Metabolis_final](https://github.com/Kevin08Zhao/Metabolis_final). This version uses Three.js, TypeScript, and Vite; Godot is not required.

**Language:** this README is in English. The published game interface and the screenshots currently use Chinese. Interface labels and story titles below are English translations for reference; character names are romanized.

<a id="play"></a>

## Start playing

### [Enter Living Cities →](https://kevin08zhao.github.io/Metabolis-Living-Cities/)

Play directly in your browser, with no registration, sign-in, or API key setup. A modern desktop browser with WebGL and hardware acceleration is recommended. The building interface is designed primarily for computers and tablets. Smaller screens have a responsive layout, but a larger display is more comfortable for detailed planning.

Your first visit opens **Build Life**. Xiaohong introduces **Build → Connect → Live**:

1. Choose “Start with Xiaohong” and read **Your Next Step** on the left.
2. Build a Cell Home for the new neighbors, then connect a blood vessel to their door.
3. Keep both homes supplied continuously to earn materials and unlock the Muscle Workshop.
4. Follow the supply card’s suggestions to adjust blood vessel capacity and heart–lung support before the first walk.
5. Start the chapter challenge and watch supply during peak demand. Pause to rebuild whenever needed.
6. Collect the chapter rewards, then continue through breakfast, the afternoon, music, repair, and the lantern festival.

To look around first, switch to **Explore the Islands** at the top at any time. Building progress and exploration progress are saved separately.

<details>
<summary>View the introductory building interface</summary>

<img src="docs/images/planning-start.jpg" alt="Introductory building interface with next-step guidance, connected Cell Homes, and a live supply card" width="100%">

</details>

<a id="build"></a>

## Build Life: build a day in the body

### One continuously growing town

Building begins in a district where the heart and lungs work together: nine plots, one connected Cell Home, and 24 building materials. Add digestive, urinary, nervous, and immune facilities to the same layout as the town expands to sixteen plots.

All six chapters take place in **the same town**. The six cities in **Explore the Islands** provide separate, detailed scenes for observing and exploring each system.

| Chapter | The life you support | Core mechanics | Permanent additions and base rewards |
| --- | --- | --- | --- |
| **07:00 · The First Road Home** | Xiaohong and the new neighbors’ first walk | Homes, vessel connections, shared capacity, and heart–lung supply | Homecoming Tree; 12 materials |
| **09:00 · Breakfast for Every Street** | Yaya’s breakfast deliveries | Villus Kitchens, nutrient production, and reserves | Breakfast Market and three new east-bank plots; 14 materials |
| **12:30 · A Cool Afternoon** | Chengcheng and the neighbors in hot weather | Water recovery, reserves, and metabolic load | Water Garden Fountain; 14 materials |
| **15:00 · Learning a Melody Together** | Shanshan leads the neighborhood ensemble | Neural signal coverage, placement, and work coordination | Cell Bandstand and four new south-bank plots; 16 materials |
| **17:00 · Caring for a Little Wound** | Tuantuan and the street-corner repair crew | Oxygen, nutrients, and signals support repair together | Guardian Streetlight; 16 materials |
| **19:00 · The Living Town Lantern Festival** | A celebration for every neighbor | Combined supply, reserves, coverage, repair, and a garden | Lanterns, completion album, and free building; 20 materials |

Chapter times are part of the story. Each challenge lasts **60–100 simulation seconds**, while building and observation have no shared time limit. From the breakfast chapter onward, mid-chapter decisions change reserves, later demand, or first-completion rewards. The challenge and resources pause while you make a choice.

### Every facility has a role

| Building or upgrade | Materials | Role |
| --- | --- | --- |
| Cell Home | 4 | Houses residents and needs a continuous oxygen supply. |
| Muscle Workshop | 5 | Supports physical activity and needs more oxygen during busy periods. |
| Villus Kitchen | 6 | Produces nutrient reserves to supply working districts. |
| Nephron Water Garden | 6 | Recovers water and reduces metabolic load. |
| Neural Signal Tower | 7 | Coordinates nearby working districts; coverage depends on placement, distance, and its own supply. |
| Immune Patrol Station | 7 | Repairs the street corner with support from oxygen, nutrients, and signals. |
| Membrane Garden | 2 | Provides space for rest and daily life, and contributes to some chapter goals. |
| Blood vessels and heart–lung support | Varies by type and level | Connect districts, expand transport capacity, and improve upstream delivery and exchange. |

Facilities unlock as you progress. Gardens provide living space; they do not increase oxygen capacity.

### Your plan changes how the town works

- **Connect first, then supply.** Disconnected districts receive no deliveries. Couriers follow the routes calculated by the simulation.
- **Capacity is shared along the route.** Upgrading only the heart and lungs cannot clear a downstream bottleneck. Consider branches, routes, and capacity together.
- **Systems support one another.** Work consumes resources, signal towers need suitable locations, and immune repair needs steady supplies. Supply cards explain broken connections, oxygen shortages, low reserves, and coverage problems.
- **Guidance follows your layout.** **Your Next Step** provides a location, cost, and map highlight. Apply its suggestion in one click, or turn guidance off and plan freely.
- **There is room to revise.** Recycling buildings and roads returns their full cost; moving buildings is free, and heart–lung support can be recycled one level at a time. Undo up to 30 building actions. Starting a challenge or collecting milestone rewards resets the undo history.

### Stars, achievements, and free building

Earn up to **18 stars** across six chapters, plus **10 permanent badges**. The first star marks completion, the second requires stable operation for at least 95% of the challenge, and the third depends on a chapter-specific goal such as keeping a garden, maintaining reserves, or achieving full signal coverage.

Results show stable operating time, average oxygen supply, material rewards, and new keepsakes. Failure preserves your entire layout and materials; adjust and retry for free. You can also end an attempt early from the menu. Replays retain your best star rating and do not award the same materials again.

After completing the story, keep building freely, rename your town, take photos, or replay chapters for full stars and the **Life Architect** badge.

<a id="explore"></a>

## Explore the Islands: six cities, one life

<img src="docs/images/archipelago.jpg" alt="The Living Cities archipelago: heart, neural, alveolar, nutrient, renal, and immune cities linked by transport networks" width="100%">

| City | Body system | What you will discover |
| --- | --- | --- |
| **Heart Quarter** | Circulatory | A four-chamber, two-circuit pump station, one-way flow, and transport routes linking the lungs and body tissues. |
| **Neural Quarter** | Nervous | A radial communication network, branching neurons, and signal-transmission landmarks. |
| **Alveolar Harbor** | Respiratory | A branching, two-sided exchange harbor, alveolar exchange stations, and harbor life you can join. |
| **Nutrient Gardens** | Digestive | A winding processing route, a small-intestinal absorption district, and a liver station. |
| **Renal Springs** | Urinary | Paired nephron canals, filtration, reabsorption, and waterfront neighborhoods. |
| **Immune Sanctuary** | Immune | A hexagonal lymphatic fortress, patrols, and places to work together. |

Each city has five or six main functional landmarks and surrounding residential streets. Switch between whole-city, close-up, and overhead views, orbit through 360°, or hide the information panel and labels to watch quietly.

<table>
  <tr>
    <td width="50%"><img src="docs/images/heart-quarter.jpg" alt="Three-dimensional neighborhoods and functional landmarks in Heart Quarter"><br><b>Organs become cities</b><br>Streets, landmarks, and working equipment tell the story of each system.</td>
    <td width="50%"><img src="docs/images/living-street.jpg" alt="Cell homes, residents, and courtyards along a neighborhood street"><br><b>Bring the camera closer</b><br>Residents have daily routines in supply shops, bookshops, courtyards, and street-side seats.</td>
  </tr>
  <tr>
    <td><img src="docs/images/oxygen-journey.jpg" alt="Delivering oxygen with Xiaohong through a five-stop red blood cell circuit"><br><b>Deliver oxygen with Xiaohong</b><br>Travel from the right heart through the lungs, left heart, and brain tissue, then back to the right heart.</td>
    <td><img src="docs/images/harbor-day.jpg" alt="Xiaohong and friends meeting after work at Alveolar Harbor"><br><b>Make friends in the city</b><br>Share an exchange, a little waiting, and a lasting memory.</td>
  </tr>
</table>

### More than sightseeing

- **Meet residents and vehicles.** Each city has three named residents. Click residents or vehicles on the street to view their status, destination, and cargo, or follow their movement. Residents follow authored routines rather than offering open-ended conversation.
- **Enjoy street life.** Stroll, sit by the street, or take a slow cell shuttle. Watch residents read, shop, chat, and rest. Vehicles stop at stations, and following vehicles keep their distance and wait.
- **Take a five-stop oxygen journey.** The camera follows Xiaohong between cities. Pause, skip to the next stop, or finish early. Completed journeys appear in the Exploration Journal.
- **Try four life states.** Switch between rest, walking, eating, and sleep to observe changes in heartbeat, breathing, transport, and nutrient activity. Follow a three-stop explanation to see how systems cooperate.
- **Encounter little events.** Each city has a short three-phase event with visual cues. Visit and observe the handover phase to earn a discovery.
- **Use the body observation window.** Drag a simplified structural diagram, or move it with the arrow keys, to read explanations near landmarks and record discoveries.
- **Collect postcards and viewpoints.** Photo mode hides the interface. Download photos and return to saved viewpoints. The journal stores up to four postcards and eight viewpoints, replacing the oldest when a limit is reached.
- **Listen to the city.** Enable sound to hear a gentle heartbeat and synthesized street cues that vary with direction and distance.

<a id="story"></a>

## Alveolar Harbor · A Day with Xiaohong

Enter **Alveolar Harbor** and choose **Go to Work with Xiaohong**. You can also start this roughly three-minute story from **Residents and Discoveries** in any city.

**Departure → Waiting → Meet the exchange partner → Gas exchange → Back to the corner → After-work gathering**

Paopao leads the way, Yunyun handles the exchange, and Xiaoqing waits beside the flower shop. Xiaohong walks, waves, queues, carries supplies, and sits down in the scene. Before the exchange, identify Yunyun by clicking a resident or name card. An incorrect choice provides a hint without a penalty. The remaining sections advance automatically, or you can choose **Skip Ahead**.

The story shares the simulation clock, so pausing stops movement and timing. Leaving the harbor saves progress; return to the story entrance to continue. After completion, residents use familiar greetings and the journal records your visit. A group photo appears in the frame beside the flower shop, where you can view and download it again.

<a id="controls"></a>

## Controls and saves

### Common controls

| Action | How to use it |
| --- | --- |
| Select and build | Click a tool, plot, building, or road, or apply **Your Next Step**. |
| Move around the islands | Drag to pan; use the scroll wheel or a two-finger gesture to zoom. Buttons on the right also zoom or return to the overview. |
| District and building cameras | Drag with the left mouse button or one finger to orbit. In districts, use the right mouse button or two fingers to pan, and the scroll wheel or a two-finger gesture to zoom. |
| Approach a landmark | Click its scene label, the landmark itself, or its district-directory entry. |
| Stop following | Drag the camera to look around freely. |
| Pause and speed | Use the toolbar to pause or select 0.5× / 1× / 2× speed. Space pauses, except when a focused input or button handles the key. |
| Go back | During exploration, Esc returns to the overview; in photo mode, it exits photography; while building, it closes the current details. |
| Observation window | Drag the window or use the arrow keys. |

You can build and adjust the camera while paused. In building mode, opening the menu, achievements, or results automatically pauses the game; closing them restores the previous running state.

### Progress stays in the current browser

The game needs no server account and saves automatically in browser local storage. **Saves do not automatically follow you to a different browser, device, or site address, and are removed if you clear the site’s data.** The local development address and online game also have separate progress. Cloud sync and save-file export are not currently available.

| Content | How it is saved |
| --- | --- |
| Current town | After each building action, choice, milestone, page exit, and every five simulation seconds. Refreshing restores the layout, chapter, resources, and pending events. |
| Previous town | **Build Another Town** backs up the current town first. **Switch to the Previous Town** swaps between the two. |
| Six-city visits and Exploration Journal | Visits, residents, events, journeys, observations, photos, and viewpoints are saved separately. |
| Harbor workday | On stage changes, leaving the city, closing the page, and every five seconds while active. An unexpected browser exit can lose at most the latest five seconds of story progress. |
| Harbor group photo | Saved independently from ordinary postcards. Rotating the postcard collection does not delete the most recent harbor group photo. |

Challenges do not advance and building resources are not consumed while you are away. If the browser cannot save, the relevant building or photo interface displays a message. Building saves in `v1` format migrate to `v2`; these are save formats for this browser game, not for the earlier Godot project.

<details>
<summary>Local storage keys for troubleshooting or backups</summary>

| Key | Content |
| --- | --- |
| `metabolis.planning.v2` | Current town |
| `metabolis.planning.previous-city` | Previous town |
| `metabolis.explored.v1` | Visits to the six cities |
| `metabolis.journal.v2` | Exploration Journal, postcards, and viewpoints |
| `metabolis.harbor.workday.v1` | Harbor workday, completion count, and latest group photo |

</details>

## Art and science communication

Procedural 3D models create a warm microscopic world of cream-colored membrane houses, rounded organ landmarks, branching neurons, pipes, trees, and cell residents. Lights dim during sleep while windows glow warmly; the lantern festival has its own evening palette. Art and sound run locally without online asset services.

The cities are artistic metaphors for understanding cooperation between systems. Roads, vehicles, queues, counters, and repair crews are not anatomical structures. Capacity, materials, time, and coverage distances are game-balance values. The observation window is an explanatory diagram, and displayed values such as heart rate come from a trend simulation rather than personal measurements.

The game preserves the basic circuit **right heart → lungs → left heart → tissues → right heart**. Red and blue roads distinguish relative oxygen levels; real blood does not turn blue. Pulmonary arteries carry oxygen-poor blood and pulmonary veins carry oxygen-rich blood. Nutrient transport, lymphatic return, water recovery, and systems not shown are simplified. The harbor’s gas exchange is told through human-like characters; real exchange happens continuously without manual handling.

In-game **About This World** links to educational resources from the NIH institutes NHLBI, NIDDK, NINDS, and NIAID. The links are collected in [`city/src/model.ts`](city/src/model.ts).

<a id="local"></a>

## Run locally

**Node.js 24** is recommended; the minimum is **22.12.0**. The repository’s `city/.nvmrc` specifies Node.js 24.

```bash
git clone https://github.com/Kevin08Zhao/Metabolis-Living-Cities.git
cd Metabolis-Living-Cities/city
npm ci
npm run dev
```

Open **http://127.0.0.1:5173/** in your browser. The server listens only on the local machine by default. Installing dependencies for the first time requires internet access; afterward, the local game needs no online assets or API services.

After installing Node.js, macOS users can also double-click **启动生命群岛.command** in the repository root. This is the existing launcher’s filename. It installs dependencies on first launch and opens the browser. Keep the terminal window open while playing, and press `Control+C` to stop. If the downloaded file loses its executable permission, run this from the repository root:

```bash
chmod +x 启动生命群岛.command
```

Windows and Linux users can use the `npm` commands above. Serve a production build over HTTP; do not open `index.html` by double-clicking it.

<a id="development"></a>

## Development, validation, and deployment

### Technology

| Layer | Implementation |
| --- | --- |
| 3D world | Three.js, procedural geometry, scenes, and camera interaction |
| Game and interface | Strict TypeScript, native DOM, and responsive CSS |
| Development and build | Vite; relative asset paths support GitHub Pages project subdirectories |
| Audio and progress | Web Audio and browser local storage |
| Tests | Node.js built-in test runner; Playwright is available for browser checks |

### Project structure

```text
Metabolis-Living-Cities/
├── README.md                   # Game overview and project entry point
├── docs/images/                # Gameplay screenshots for this README
├── 启动生命群岛.command        # Existing macOS launcher
└── city/
    ├── README.md               # Detailed mechanics and implementation notes
    ├── package.json
    ├── package-lock.json       # Locked dependency versions
    ├── public/                 # Site icon
    ├── src/
    │   ├── main.ts             # Main interface, navigation, and simulation controls
    │   ├── planning*.ts        # Building rules, supply network, guidance, scene, and interactions
    │   ├── campaign.ts         # Six chapters, event choices, and badges
    │   ├── model.ts            # City content, circulation routes, and simulation rules
    │   ├── world.ts            # Islands and scene switching
    │   ├── city-plans.ts       # City streets and functional districts
    │   ├── district.ts         # District models, equipment animation, and cameras
    │   ├── street-life.ts      # Traffic, stops, and pedestrian movement
    │   ├── experience.ts       # Residents, events, journeys, and journal data
    │   ├── explore-ui.ts       # Exploration, photography, and journal interactions
    │   ├── observation.ts      # Body observation window
    │   ├── workday*.ts         # Harbor story, progress, and interactions
    │   ├── harbor.ts           # Harbor scene and character actions
    │   ├── soundscape.ts       # Synthesized street sounds
    │   └── *.css               # Building, exploration, and responsive styles
    ├── tests/                  # Rules, journeys, street life, and story regression tests
    ├── scripts/deploy-pages.mjs
    └── vite.config.ts
```

### Common commands

Run these commands inside `city/`:

```bash
npm test          # Game-logic regression tests
npm run build     # TypeScript checks and production build; output goes to dist/
npm run preview   # Preview the production build at http://127.0.0.1:4173/ by default
```

The current version includes **50 automated tests** covering all six chapters, 18 stars and the final badge, decision pauses and restoration, supply capacity and conservation, retries after failure, duplicate reward prevention, save migration, circulation routes, vehicle stops, resident timing, and the harbor story. Release checks also cover the building entry point, city switching, and story interactions in the browser.

### Deploy to GitHub Pages

The online version is served from this repository’s `gh-pages` branch. Source code stays on `main`; generated `dist/` and `node_modules/` directories are not committed to the source branch.

After committing the source, maintainers can run this inside `city/`:

```bash
npm run deploy
```

The script runs tests and a production build, then commits the static files to the remote repository’s `gh-pages` branch. It requires authenticated Git access, a configured commit identity, and push permission for this repository. For the initial setup, select **Settings → Pages → Deploy from a branch → gh-pages → / (root)** on GitHub. Later source commits do not update the website automatically; run the deployment command to publish a new build.

## Feedback and contributions

Use [Issues](https://github.com/Kevin08Zhao/Metabolis-Living-Cities/issues) to report problems or suggest gameplay improvements. For a runtime issue, include your browser, device, affected chapter or city, and reproduction steps. Preserve the current state before troubleshooting a save-related issue.

The repository does not currently specify an open-source license. Public source access does not grant unrestricted use, redistribution, or commercial-use rights; contact the maintainer for those permissions. Dependencies retain their respective licenses.

<div align="center">

**Every road leads to a little piece of life.**

[Enter Living Cities](https://kevin08zhao.github.io/Metabolis-Living-Cities/) · [View the earlier project](https://github.com/Kevin08Zhao/Metabolis_final)

</div>
