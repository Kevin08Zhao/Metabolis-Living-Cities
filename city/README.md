# Metabolis · Living Cities

[Play online](https://kevin08zhao.github.io/Metabolis-Living-Cities/) · [Project overview and screenshots](../README.md) · [Browser-game repository](https://github.com/Kevin08Zhao/Metabolis-Living-Cities)

A city-planning game inspired by human body systems. Start in a buildable heart–lung district: place Cell Homes, lay blood vessels, expand heart–lung support, and test your plans through six everyday-life challenges, from a walk to a lantern festival. The original six detailed cities, resident stories, and Exploration Journal remain available in **Explore the Islands**.

The building journey is designed for computers and tablets and includes six complete chapters, an ending, and free building. You manage one town that gradually brings all six systems online; six separate cities provide detailed scenes for sightseeing and exploration.

**Language:** this guide is in English. The published game interface uses Chinese. Interface labels and story titles below are English translations for reference; character names are romanized.

## Start playing

Double-click the macOS launcher **启动生命群岛.command** in the repository root, or run these commands in this directory:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173/. You need a modern browser with WebGL and Node.js 22.12 or later. The local server listens only on your machine by default. Artwork, fallback fonts, and sound run locally without PixelLab or online asset services.

## Build Life · A Day in the Body

This single-player building journey has an introduction, six challenges, permanent growth, and an ending. Construction takes place in one persistent heart–lung town, gradually adding digestive, renal, neural, and immune facilities. The original six detailed cities remain freely explorable.

On your first visit, Xiaohong introduces **Build → Connect → Live**. The **Your Next Step** panel on the left updates based on your actual layout, materials, connections, supply, and reserves. It identifies a location and cost and highlights the corresponding spot on the map. Click to carry out the suggested action, or choose facilities from the toolbar, place buildings and roads freely, and turn guidance off from the menu.

| Chapter | Working mechanics | Lasting additions to the scene |
| --- | --- | --- |
| The First Road Home | Establish two Cell Homes and use the Muscle Workshop for a walk; blood vessels share capacity and heart–lung support provides upstream supply | Homecoming Tree; 12 materials |
| Breakfast on Every Street | The Villus Kitchen produces nutrient reserves consumed by working districts and everyday events | Breakfast Market and three new east-bank plots; 14 materials |
| A Cool Afternoon | The Nephron Water Garden recovers water and reduces metabolic load; hot weather increases water demand | Water Garden Fountain; 14 materials |
| Learning a Melody Together | Neural Signal Towers coordinate nearby working districts; coverage depends on placement, distance, and supply | Cell Bandstand and four new south-bank plots; 16 materials |
| Caring for a Little Wound | The Immune Patrol Station repairs the street corner with oxygen, nutrients, and signal support | Guardian Streetlight; 16 materials |
| The Living Town Lantern Festival | Maintain supply, reserves, coverage, and repair while keeping a garden | Lanterns, completion album, and free building; 20 materials |

The initial nine plots gradually expand to sixteen. Each chapter preserves your layout and introduces a new mechanic and companion. Challenges last 60–100 simulation seconds; you set the pace for preparation, adjustments, observation, and replays. Progress through several chapters in a 15–30-minute session, or save and leave at any time.

### Clear goals and feedback

- Keep the first homes stably supplied for five consecutive seconds to receive six materials from the residents and unlock the Muscle Workshop. Later chapters list their building, connection, and peak-supply goals.
- From the breakfast chapter onward, a mid-chapter decision changes resources, later transport demand, or first-completion rewards. Challenges and resources pause while you choose, so taking time to read does not cause failure.
- The first star marks chapter completion, the second requires stable operation for at least 95% of the challenge, and the third depends on a chapter-specific goal. Earn up to 18 stars across six chapters, plus 10 permanent badges.
- Results show stable operating time, average oxygen supply, material rewards, new keepsakes, and the next chapter. After completing the story, continue building, take photos, rename the town, or replay chapters for full stars. Replays preserve your best rating and do not award the same materials again.
- Failure preserves your entire layout and materials. Adjust and retry for free, or end an attempt early from the menu while keeping the layout. Supply cards explain oxygen shortages, broken connections, low reserves, and insufficient coverage.

### Building and observation

- Road capacity is shared through actual connections. Upgrading upstream capacity cannot remove a downstream bottleneck. Couriers follow calculated routes, and disconnected districts receive no deliveries.
- Kitchens, Water Gardens, Signal Towers, and Patrol Stations have distinct 3D models. Water wheels and Signal Towers operate according to their supply. Selecting a Signal Tower or playing the melody chapter shows actual coverage with yellow lines. A repair crew appears at the street corner, and the lantern festival has its own evening palette.
- Recycling buildings and roads returns their full cost. Heart–lung support can be recycled one level at a time, and moving buildings is free. Undo up to 30 building actions. Milestone rewards and the start of a challenge reset undo history so an earlier action cannot overwrite a reward.
- Membrane Gardens provide living space without increasing oxygen supply. Click a building to approach its district, or click Xiaohong or **Follow Xiaohong** to follow deliveries. Drag the camera to stop following.
- Use manual 360° orbit, overhead views, zoom, pause, and 0.5× / 1× / 2× speed. You can build and observe while paused. Opening the game menu, achievements, or results pauses automatically; closing them restores the previous running state.
- Reserves refill quickly during preparation. Challenge progress stops when you leave building mode, wait for an event choice, or close the page. Resources are not consumed while offline.

### Saves and recovery

Building progress is stored in the current browser under `metabolis.planning.v2`. It is saved after each building action, choice, milestone, page exit, and every five simulation seconds. Refreshing restores the chapter, layout, resources, and pending events. Earlier `metabolis.planning.v1` saves migrate automatically, preserving buildings, materials, and first-chapter completion without overwriting exploration or harbor-story progress.

**Build Another Town** in the menu backs up the current town to `metabolis.planning.previous-city` before starting a new one. **Switch to the Previous Town** swaps between the two saves. A message appears if browser storage is unavailable. Photos can be downloaded; building progress is currently stored only in this browser.

All capacities, materials, durations, and coverage distances are game-balance values rather than physiological measurements. Supply and return flow are simplified into a paired connection built together. The fixed main circuit preserves the order **right heart → lungs → left heart → tissues → right heart**. Water recovery, replenishment, and resource reserves use simplified models.

## Explore the Islands

- Drag to pan and use the scroll wheel or a two-finger gesture to zoom. Zoom and overview buttons are also available on the right.
- Click a city landmark or a city-list entry to enter its complete district, with distinct building zones, dedicated two-way transport lanes, paths, cell residents, and working equipment.
- In a district, drag with the left mouse button or one finger for unrestricted horizontal 360° orbit. Use the right mouse button or two fingers to pan, and the scroll wheel or a two-finger gesture to zoom. Vertical camera angles are limited to prevent movement below ground.
- Click a landmark or district-directory entry to move closer and read how it works. Switch between whole-city, district, and overhead views.
- Choose **Street-Corner Life** to visit cell neighborhoods with supply shops, bookshops, balconies, courtyards, bus shelters, and street-side seats. Residents have different clothes, walking speeds, destinations, and stopping patterns, with scenes of reading, conversation, shopping, and rest.
- Enable automatic orbit or choose **Expand the View** to collapse the information panel. Landmark labels can be hidden separately. Manual observation remains available while paused.
- Click Xiaohong to follow the five-stop circuit: **right heart → lungs → left heart → brain tissue → right heart**.
- Select rest, walking, eating, or sleep to observe changes in heartbeat, breathing, blood flow, and nutrient activity.
- Pause, adjust the speed, or enable the gentle heartbeat and city ambience. Space pauses; Esc returns to the overview.
- Visits are saved in the current browser. Exploration still works when local storage is disabled.

## Additional exploration experiences

- **Residents and Discoveries:** Each city has three named residents. Click a resident or vehicle on the street to see its current status, destination, and cargo, or follow its movement. Residents follow authored walking and stopping routines along existing streets; they do not offer open-ended conversation.
- **Deliver Oxygen with Xiaohong:** An automatic five-stop journey through the right heart, lungs, left heart, brain tissue, and right heart. The camera follows the city transitions. Pause, skip to the next stop, or end early. Completion is recorded in the journal. Explanations at each stop use compressed timing.
- **Little Encounters:** Each city has a short three-phase event with visual cues. Events last 24 seconds before everyday activity resumes. Observe the handover phase on site to earn a discovery.
- **Follow the Body’s Changes:** Choose rest, walking, eating, or sleep in **Residents and Discoveries**, then follow three explanatory stops as the simulated state changes. Ending the experience can restore the previous life state. The explanation order does not represent the order of real physiological responses.
- **Body Observation Window:** Drag a simplified structural diagram or move it with the arrow keys. It updates the displayed name near landmarks, covers all six systems, and records discoveries in the journal. It is an explanatory illustration, not a medical image or a true 3D view through the body.
- **Street-Life Experiences:** Stroll along the streets, sit by the roadside, or ride a slow cell shuttle. Drag the camera to stop following. After enabling ambience, hear synthesized street cues that vary with direction and distance.
- **Postcards and Viewpoints:** Photo mode hides the interface. Photos and camera viewpoints are stored in this browser’s Exploration Journal. Download photos and revisit viewpoints. Keep up to four photos and eight viewpoints; new entries beyond those limits replace the oldest. A message appears if browser storage fails.
- **Exploration Journal:** Records residents you have met, events, structural discoveries, completed journeys, and state observations independently of the original six-city visit history. Records remain available after refresh, and invalid or corrupted entries are filtered out.

## Alveolar Harbor · A Day with Xiaohong

Enter **Alveolar Harbor** and select **Go to Work with Xiaohong**, or start from **Residents and Discoveries** in any city. The harbor includes paths connected to the neighborhood, a gas-exchange counter, a waiting area, wind chimes, a flower shop, and benches.

The story includes departure, waiting, meeting the exchange partner, gas exchange, returning to the street corner, and an after-work gathering. Characters lead the way, wave, queue, carry supplies, and sit down. Before the exchange, identify Yunyun by clicking a resident in the scene or a name card. An incorrect choice gives a hint without a penalty. Other sections advance automatically, or you can select **Skip Ahead**. At normal speed, the story takes about three minutes, depending on reading and pauses.

The story shares the global simulation clock. Pausing stops movement and timing; leaving Alveolar Harbor saves progress. Saves occur on stage changes, when leaving the city or closing the page, and every five seconds while the story is running. An unexpected browser exit can lose at most the latest five seconds of progress. Return to the story entrance to continue.

After completion, residents use familiar greetings and the journal records your experience. Select **Take a Group Photo** to enter photo mode, then **Capture This Moment** to save. The photo appears in the frame beside the flower shop; select **Harbor Memories** to view or download it. Workday progress, completion count, and the latest harbor group photo are stored separately under `metabolis.harbor.workday.v1`, so rotating the postcard list does not remove them. Replaying preserves the memories already established.

This is an authored everyday-life story. Real gas exchange happens continuously without queues or manual handling; counters, boxes, and rest scenes are personifications. Paopao, Xiaoqing, and Yunyun in the harbor are the same characters shown in the resident menu.

## Design and science communication

The artwork uses original procedural 3D models: cream-colored membrane-like cell homes, organ landmarks, branching neurons, smooth pipes, and cell residents. The six cities represent the circulatory, nervous, respiratory, digestive, urinary, and immune systems.

Each city has five or six main functional landmarks for close observation and surrounding residential streets. The heart is a four-chamber, two-circuit pump station; the brain is a radial communication network; the lungs form a branching, two-sided exchange harbor; the digestive city follows a winding processing route; the kidneys form paired nephron canals; and the immune city is a hexagonal lymphatic fortress. Vehicles of different types and speeds travel both ways in dedicated lanes. Cell buses stop at stations, while following vehicles keep their distance and slow down to wait. Residents walk in both directions, stop along the way, and rest near shops and trees. Traffic, walking, everyday actions, and vegetation movement share one simulation clock with pause and speed controls.

Homes face the streets at irregular intervals, with entrance paths connected to the main road. Each city’s neighborhood has its own signs and housing combinations, including the alveolar flower shop, neural bookshop, nutrient market, and renal waterfront footbridge. Warm side lighting becomes dimmer during sleep, while windows glow. These everyday scenes extend the artistic metaphor of a city within the body.

Only the detailed district currently being viewed is loaded. Switching districts releases models, materials, shadows, shop-sign textures, and interaction resources. Static buildings are merged by material, while vehicles and residents share models. Cars, city gates, and paths are visual metaphors for physiological activity rather than literal anatomy or traffic rules.

City scale and geography are artistic interpretations. Red and blue roads represent relative oxygen levels; real blood does not turn blue. Pulmonary arteries carry oxygen-poor blood and pulmonary veins carry oxygen-rich blood, while the other depicted systemic branches have the reverse oxygen relationship. The liver station inside the nutrient city represents portal-vein processing. Systems, branches, and lymphatic return routes not shown are simplified. Animations use trend models, and displayed values are not personal measurements. Sleep mode illustrates quiet non-REM sleep.

In-game **About This World** links to educational resources from NIH institutes.

## Development and validation

```sh
npm test       # Supply, building costs, challenges, saves, exploration, street life, and story regressions
npm run build  # Strict TypeScript checks and production build
npm run preview
```

`src/model.ts` manages educational content, routes, and simulation rules; `src/world.ts` manages the islands and scene transitions; `src/city-plans.ts` defines streets and functional districts for the six cities; `src/district.ts` manages district artwork, equipment animation, and orbit cameras; `src/street-life.ts` handles vehicle following, stops, and pedestrian timing; `src/experience.ts` manages residents, events, journeys, and journal data; `src/explore-ui.ts` manages exploration interactions; `src/observation.ts` manages the structural observation window; and `src/soundscape.ts` manages synthesized positional sound. `src/workday.ts` manages workday progress and saves, `src/harbor.ts` manages harbor scenes and character actions, and `src/workday-ui.ts` handles story, exchange, and group-photo interactions. `src/main.ts` and `src/style.css` manage the interface, travel, and responsive layouts.

The building module is separate from exploration. `src/planning.ts` manages the supply network, materials, and project progress; `src/planning-scene.ts` renders actual connections and transport routes as a district; `src/planning-ui.ts` manages building interactions, undo, and saves; `src/campaign.ts` defines the six chapters, choices, and badges; and `src/planning-guide.ts` generates next-step suggestions from the actual layout. `src/planning.css` and `src/campaign-ui.css` manage desktop, tablet, and narrow-screen layouts.

The browser-game source is entirely within `city/`; the launcher is in the repository root.
