# PixiJS + TypeScript — 12-Week Study Plan

## How to use this plan

- Each week has learning objectives, a day-by-day breakdown, exercises, and a self-check.
- **Always code along, never just read.** If a tutorial says "here's how to do X," open your editor and type it yourself.
- **Commit to Git daily.** Make a repo called `pixi-learning-journey` and push every day. You'll thank yourself in week 12.
- **Use AI to help, not to skip.** Ask Claude/ChatGPT to explain errors, review your code, suggest refactors. Don't ask it to write the code you're supposed to be learning.
- **Track hours honestly.** If you miss 2 days, extend the week by a day — don't compress.
- The 7th day of each week is a **rest/buffer day**. Use it to catch up or just rest.

---

## Phase 1 — TypeScript Foundations (Weeks 1–2)

You cannot skip TS. Pixi v8 is TS-first and all modern slot code is TS. Good news: as a C# dev, this will feel familiar fast.

---

### Week 1 — TypeScript Basics & Dev Environment

**Learning objectives**

- Set up a modern TS dev environment
- Understand all primitive types, arrays, tuples
- Use interfaces, type aliases, and literal/union types
- Write simple generic functions

**Day 1 — Setup (2.5 hrs)**

- Install: Node.js LTS (use `nvm` on Mac/Linux, installer on Windows), VS Code, Git
- VS Code extensions: ESLint, Prettier, Error Lens
- Install TS globally: `npm install -g typescript`
- Create your first project:
  ```
  mkdir ts-learning && cd ts-learning
  npm init -y
  tsc --init
  ```
- Write a `hello.ts`, compile with `tsc`, run with `node hello.js`
- Watch: Fireship "TypeScript in 100 Seconds" (YouTube, 2 min)
- Read: TS Handbook → "The Basics"

**Day 2 — Primitives and arrays (2.5 hrs)**

- Types: `string`, `number`, `boolean`, `null`, `undefined`, `any`, `unknown`, `never`
- Arrays (`number[]` vs `Array<number>`), tuples
- Type inference vs annotation
- `const` vs `let` and how they affect inference
- **Exercise**: Write 10 small typed functions (`sum`, `clamp`, `shuffle`, `pickRandom`, `formatMoney`, etc.)

**Day 3 — Interfaces & type aliases (2.5 hrs)**

- `interface` vs `type` (use interface for objects, type for unions/primitives as a rule of thumb)
- Optional properties (`?`), readonly, index signatures
- Extending interfaces
- **Exercise**: Model slot domain objects:
  ```ts
  interface Symbol {
    id: string;
    name: string;
    payouts: number[];
  }
  interface ReelStrip {
    symbols: Symbol[];
  }
  interface Paytable {
    /* your design */
  }
  ```

**Day 4 — Functions, generics intro (2.5 hrs)**

- Function type expressions
- Default and optional parameters, rest params
- Generics: `function identity<T>(x: T): T`
- Generic constraints (`<T extends ...>`)
- **Exercise**: Write `weightedRandom<T>(items: T[], weights: number[]): T`

**Day 5 — Unions, literals, narrowing (2.5 hrs)**

- String literal types: `"spin" | "idle" | "win"`
- Union and intersection types
- Type narrowing: `typeof`, `instanceof`, `in`, discriminated unions
- **Exercise**: Write a `GameState` type as a discriminated union and a function that handles each state with exhaustive narrowing

**Day 6 — Mini project: Slot Symbol Generator CLI (2.5 hrs)**

- Build a command-line tool that:
  - Reads a JSON config describing reel strips
  - Simulates N random spins
  - Prints results to console with simple win detection
  - All typed end-to-end, no `any`
- Push to GitHub

**Day 7 — Rest / catch up**

**Resources this week**

- TypeScript Handbook (free): https://www.typescriptlang.org/docs/handbook/intro.html — read "The Basics", "Everyday Types", "Narrowing"
- Matt Pocock's "Total TypeScript: Beginners" (free): https://www.totaltypescript.com/tutorials/beginners-typescript
- Fireship channel on YouTube for short conceptual videos

**Self-check — you should be able to**

- [ ] Explain when to use `interface` vs `type`
- [ ] Write a generic function with a constraint
- [ ] Narrow a union type using `typeof` and `in`
- [ ] Explain what `unknown` gives you that `any` doesn't

**Common pitfalls**

- Using `any` when you don't know the type → use `unknown` and narrow
- Forgetting return types on functions → always annotate return types
- Confusing `null` and `undefined` behavior — enable `strictNullChecks` (it's on by default with `strict: true`)

---

### Week 2 — TypeScript Intermediate

**Learning objectives**

- Write classes with proper TS idioms
- Understand modules and imports
- Use async/await confidently
- Apply generics in realistic scenarios
- Use utility types (`Partial`, `Pick`, `Omit`, `Record`)

**Day 1 — Classes (2.5 hrs)**

- Class syntax, constructors, access modifiers (`public`, `private`, `protected`, `readonly`)
- Parameter properties (C#-like shortcut)
- Inheritance and `super`
- Abstract classes
- Static members
- **Exercise**: Port a small C# class hierarchy you've written before into TS

**Day 2 — Generics in depth (2.5 hrs)**

- Generic classes
- Generic constraints with `keyof`
- Conditional types (intro only, don't go deep)
- **Exercise**: Build a typed `EventEmitter<TEvents>` class where `TEvents` is a map of event names to payload types

**Day 3 — Utility types & type-level tools (2.5 hrs)**

- `Partial<T>`, `Required<T>`, `Readonly<T>`
- `Pick<T, K>`, `Omit<T, K>`, `Record<K, V>`
- `ReturnType<T>`, `Parameters<T>`
- `as const` assertions
- **Exercise**: Given a full `GameConfig` interface, create `PartialGameConfig`, `RuntimeConfig` (omit dev-only fields), etc.

**Day 4 — Modules, tsconfig, and strict mode (2.5 hrs)**

- ES module syntax: `import`/`export`
- Default vs named exports
- Walk through every important option in `tsconfig.json` (strict, target, module, moduleResolution, paths)
- Path aliases
- **Exercise**: Split your week 1 CLI project into multiple files with clean imports

**Day 5 — Async/await and Promises (2.5 hrs)**

- Promises basics
- `async`/`await`
- Error handling with try/catch
- `Promise.all`, `Promise.race`
- **Exercise**: Write a `sleep(ms)` utility and use it to simulate an async asset loader

**Day 6 — Mini project: Probability Simulator (2.5 hrs)**

- Build a Monte Carlo simulator for a tiny slot:
  - Typed class hierarchy: `Reel`, `Symbol`, `SlotGame`, `SimulationRunner`
  - Runs 100k simulated spins
  - Reports RTP, hit frequency, max win
  - Uses async reporting (progress every 10k spins)
- This will also come in handy when you do math modeling later
- Push to GitHub

**Day 7 — Rest / catch up**

**Resources this week**

- TS Handbook: "Classes", "Modules", "Generics", "Utility Types"
- Matt Pocock's "Total TypeScript: Beginners" (continue)
- "TypeScript in 50 Lessons" by Stefan Baumgartner — optional, good reference

**Self-check**

- [ ] Write a generic class with constraints
- [ ] Explain the difference between `Partial<T>` and `Readonly<T>`
- [ ] Handle async errors correctly
- [ ] Set up a multi-file TS project with path aliases

---

## Phase 2 — Web Tooling + First PixiJS (Week 3)

---

### Week 3 — Vite, Browser Basics, Hello Pixi

**Learning objectives**

- Understand how modern web apps are built and served
- Set up a Vite + TypeScript + Pixi project from scratch
- Render your first Pixi scene
- Navigate Pixi's documentation comfortably

**Day 1 — Web fundamentals crash course (2.5 hrs)**

- How browsers work (very briefly): DOM, JS engine, rendering
- HTML5 `<canvas>` element
- Canvas 2D vs WebGL (conceptual)
- DevTools: Elements, Console, Network, Performance panels
- **Exercise**: Open any website, use DevTools to inspect, modify styles live, reload

**Day 2 — npm, bundlers, Vite (2.5 hrs)**

- What npm does, `package.json`, `node_modules`, `package-lock.json`
- Why bundlers exist (modules in browsers)
- Create first Vite project:
  ```
  npm create vite@latest my-first-pixi -- --template vanilla-ts
  cd my-first-pixi
  npm install
  npm run dev
  ```
- Play with HMR (hot module reload)
- **Exercise**: Modify the default Vite starter to display your name, commit

**Day 3 — Install Pixi, render first sprite (2.5 hrs)**

- `npm install pixi.js@^8`
- Minimal Pixi app: create `Application`, append canvas to DOM
- Load one image, display as `Sprite`
- **Exercise**: Get a sprite on screen, move it with `ticker`

Example starting code:

```ts
import { Application, Assets, Sprite } from "pixi.js";

const app = new Application();
await app.init({ background: "#1099bb", resizeTo: window });
document.body.appendChild(app.canvas);

const texture = await Assets.load("/bunny.png");
const bunny = new Sprite(texture);
bunny.anchor.set(0.5);
bunny.position.set(app.screen.width / 2, app.screen.height / 2);
app.stage.addChild(bunny);

app.ticker.add((ticker) => {
  bunny.rotation += 0.01 * ticker.deltaTime;
});
```

**Day 4 — Pixi display tree deep dive (2.5 hrs)**

- `Container`, `Sprite`, `Graphics`, `Text`
- Transform properties: position, scale, rotation, pivot, anchor
- Parent-child relationships and coordinate spaces
- Z-ordering (`zIndex`, `sortableChildren`)
- **Exercise**: Build a nested scene — container with 3 sprites, rotate the parent, observe children

**Day 5 — Browse Pixi examples (2.5 hrs)**

- Go to https://pixijs.com/examples
- Pick 5 that interest you (avoid filters/shaders today)
- Retype each from scratch — don't copy-paste
- **Exercise**: Combine two examples into one scene

**Day 6 — Mini project: Interactive scene (2.5 hrs)**

- Build a scene with:
  - A background (use `Graphics` for gradient or solid)
  - 3–5 sprites arranged artistically
  - Text title
  - Rotating/moving elements via ticker
- Deploy to Netlify or Vercel (free) — we'll get comfortable with deployment early
- Push repo to GitHub

**Day 7 — Rest / catch up**

**Resources this week**

- Vite docs: https://vitejs.dev/guide/
- Pixi.js docs: https://pixijs.com/guides and https://pixijs.com/8.x/guides
- Pixi.js examples: https://pixijs.com/examples
- YouTube: "Learn Pixi.js in X minutes" playlists for visual learners

**Self-check**

- [ ] Create a new Vite+TS+Pixi project from memory in under 5 min
- [ ] Explain the Pixi display tree (Container → Sprite/Graphics/Text)
- [ ] Deploy a Vite app to Netlify

---

## Phase 3 — PixiJS Core (Weeks 4–6)

---

### Week 4 — Display Objects, Graphics, Text

**Learning objectives**

- Master Container, Sprite, Graphics, Text, BitmapText
- Understand local vs global coordinates
- Build layered scenes confidently

**Day 1 — Container patterns (2.5 hrs)**

- Nested containers for scene organization
- Transform inheritance
- `toLocal()`, `toGlobal()`
- Pivot vs anchor (they're different!)
- **Exercise**: Build a "solar system" — sun, 3 planets orbiting, each planet with 1–2 moons

**Day 2 — Graphics API (2.5 hrs)**

- `Graphics` for procedural shapes: `rect`, `circle`, `poly`, `roundRect`
- Fills, strokes, gradients
- When to use Graphics vs Sprite (sprites are cheaper for repeated things)
- **Exercise**: Build a slot "frame" with Graphics — outer border, inner cells, payline slots

**Day 3 — Text and typography (2.5 hrs)**

- `Text` (uses canvas, heavy but easy)
- `BitmapText` (fast, pre-rendered, needs font file)
- Generating bitmap fonts with `BitmapFont.install`
- TextStyle: fill, stroke, drop shadow, gradient fills
- **Exercise**: Build a "BIG WIN" text with gradient, stroke, shadow

**Day 4 — Sprites deep dive (2.5 hrs)**

- Texture vs Sprite
- `Sprite.from(url)` vs loading via Assets
- Anchor and positioning
- Tinting (`sprite.tint = 0xff0000`)
- **Exercise**: Load 9 different symbol images, arrange in a 3x3 grid

**Day 5 — Coordinate systems & responsive layout (2.5 hrs)**

- Screen space vs world space
- Designing for fixed aspect ratios (slots are usually 16:9 landscape or 9:16 portrait)
- Resize handling
- Scale-to-fit patterns
- **Exercise**: Make your 3x3 grid responsive — fills screen nicely at any window size

**Day 6 — Mini project: Slot frame mockup (2.5 hrs)**

- Static slot scene:
  - Title text at top
  - 5x3 symbol grid (use placeholder colored rectangles if you don't have art)
  - Spin button (Graphics + Text)
  - Balance and bet displays
  - Background (gradient or simple pattern)
- Fully responsive
- No interactivity yet — just layout

**Day 7 — Rest / catch up**

**Self-check**

- [ ] Layer 3+ levels of containers with correct transforms
- [ ] Draw complex shapes with Graphics
- [ ] Build responsive layouts that work at 1920x1080 and 375x667 (phone portrait)

---

### Week 5 — Assets, Interaction, Ticker

**Learning objectives**

- Master the Assets API (loading, caching, unloading)
- Use spritesheets from TexturePacker
- Handle user input (pointer events)
- Understand the ticker and frame-based animation

**Day 1 — Assets API fundamentals (2.5 hrs)**

- `Assets.load()`, `Assets.add()`, `Assets.loadBundle()`
- Asset manifests
- Progress callbacks
- Unloading assets
- **Exercise**: Build a loading screen with progress bar for 10 assets

**Day 2 — Spritesheets and texture atlases (2.5 hrs)**

- Why atlases matter (draw call batching, GPU memory)
- Install TexturePacker (free version is fine to start), or use free online packer like `free-tex-packer.com`
- Generate an atlas from free assets (kenney.nl has tons)
- Load and use atlases in Pixi
- **Exercise**: Pack 8+ slot symbols into one atlas, load and display them

**Day 3 — Pointer events (2.5 hrs)**

- `eventMode`: `'static'`, `'dynamic'`, `'passive'`, `'none'`
- Events: `pointerdown`, `pointerup`, `pointerover`, `pointerout`, `pointertap`
- Hit area customization
- Cursor styles
- **Exercise**: Clickable button with hover/press states (scale change, tint)

**Day 4 — Ticker mastery (2.5 hrs)**

- `app.ticker` vs creating custom tickers
- `deltaTime` and why you must multiply by it
- FPS counter
- Time-based vs frame-based animation
- Pausing and resuming
- **Exercise**: Build a FPS counter + a bouncing ball using delta-time

**Day 5 — Animated sprites (2.5 hrs)**

- `AnimatedSprite` class
- Frame-based animation from spritesheet
- `loop`, `animationSpeed`, `onComplete`
- **Exercise**: Create a "coin spin" animation, play on button click

**Day 6 — Mini project: Interactive symbol grid (2.5 hrs)**

- Build on week 4's mockup:
  - Replace colored rectangles with real symbols from your atlas
  - Click a symbol → it animates (scale pulse + tint)
  - Spin button is now clickable and logs "spin!"
  - Loading screen plays before the game appears
- Deploy to Netlify

**Day 7 — Rest / catch up**

**Self-check**

- [ ] Load assets with progress tracking
- [ ] Build a clickable button with proper states
- [ ] Use `deltaTime` correctly in animation
- [ ] Create and play an AnimatedSprite

---

### Week 6 — Tweens, Animation Libraries, Effects

**Learning objectives**

- Use GSAP for smooth, chainable tweens
- Master easing functions for game feel
- Apply masks and filters
- Understand particles

**Day 1 — GSAP fundamentals (2.5 hrs)**

- Install: `npm install gsap`
- `gsap.to()`, `gsap.from()`, `gsap.fromTo()`
- Easing: `power1.out`, `back.out`, `elastic.out` — play with them all
- Timeline basics
- **Exercise**: Animate a sprite — pop-in, wiggle, fade-out sequence

**Day 2 — GSAP timelines and sequencing (2.5 hrs)**

- `gsap.timeline()`
- Position parameter (`"-=0.5"`, `">"`)
- Timeline callbacks
- Pausing, reversing, seeking
- **Exercise**: "Big win" sequence — text pops in, counter increments, particles burst, text fades

**Day 3 — Easing and game feel (2.5 hrs)**

- Why easing matters for "feel"
- Reel stop easing patterns (back-out with overshoot)
- Squash and stretch principles
- **Exercise**: Write 3 versions of a "symbol land" animation, compare which feels best

**Day 4 — Masks and filters (2.5 hrs)**

- Mask with Graphics or Sprite
- Built-in filters: `BlurFilter`, `ColorMatrixFilter`, `DropShadowFilter`
- Performance cost of filters (use sparingly)
- **Exercise**: Mask a "reel window" so symbols only show within a rectangle

**Day 5 — Particle effects (2.5 hrs)**

- Install `@pixi/particle-emitter`
- Understand emitter config (lifetime, spawn shape, forces)
- Use the online particle editor: https://pixijs.io/pixi-particles-editor/
- **Exercise**: Build a "coin shower" burst for big wins

**Day 6 — Mini project: Single reel with proper spin feel (2.5 hrs)**

- Build ONE reel that:
  - Has 3–5 visible symbols in a masked viewport
  - Spins on button click (infinite scroll, fake symbols cycling)
  - Stops with proper back-ease-out on a target symbol
  - Plays a "land" animation on the final symbols
- This is your foundation for next week — get it feeling good

**Day 7 — Rest / catch up**

**Self-check**

- [ ] Chain 3+ animations in a GSAP timeline
- [ ] Pick appropriate easings for different "feels"
- [ ] Mask a container properly
- [ ] Tune particle configs to match a specific effect

---

## Phase 4 — Slot Mechanics (Weeks 7–9)

---

### Week 7 — Multi-Reel Slot Mechanics

**Learning objectives**

- Build a full 5-reel slot skeleton
- Implement proper stop timing and anticipation
- Understand the data flow for a spin

**Day 1 — Reel abstraction (2.5 hrs)**

- Refactor your week 6 reel into a clean `Reel` class
- Properties: symbols, position, velocity, state (idle/spinning/stopping)
- Methods: `spin()`, `stop(targetSymbols)`, `update(dt)`
- **Exercise**: 5 independent reel instances, each spinnable

**Day 2 — Reel grid & synchronized spin (2.5 hrs)**

- `ReelGrid` class managing 5 reels
- Staggered start (each reel starts 100ms after previous)
- Staggered stop (same pattern)
- **Exercise**: 5-reel spin feels natural, cascading start and stop

**Day 3 — Spin result data flow (2.5 hrs)**

- Define `SpinResult` type: which symbols land where, any wins
- Mock "server response" — generate random outcomes client-side for now
- Reel reads from result and lands on correct symbols
- **Exercise**: Button triggers: generate result → spin → stop at predetermined positions

**Day 4 — Anticipation (2.5 hrs)**

- Anticipation = when 3 scatters are possible, slow down the 5th reel for drama
- Detect anticipation condition after reel 3 stops
- Apply slow-down modifier to remaining reels
- **Exercise**: Trigger anticipation if first 2 reels land a scatter, observe the dramatic effect

**Day 5 — Symbol refresh strategy (2.5 hrs)**

- Object pooling for symbols (don't create/destroy every spin)
- Symbol sprite recycling as they scroll off-screen
- **Exercise**: Profile with Chrome DevTools, ensure zero allocations during spin

**Day 6 — Mini project consolidation (2.5 hrs)**

- Clean up your 5-reel grid
- Add bet buttons (+/- with limits)
- Add balance display that decreases on spin
- Test on mobile (Chrome DevTools device emulation)

**Day 7 — Rest / catch up**

**Self-check**

- [ ] Explain the data flow from spin button to symbols landing
- [ ] Implement anticipation
- [ ] Run a spin cycle without allocating new objects

---

### Week 8 — Win Evaluation & Presentation

**Learning objectives**

- Evaluate paylines/ways for wins
- Present wins with clear, satisfying feedback
- Animate a win counter

**Day 1 — Payline math (2.5 hrs)**

- Understand line definitions (array of row positions per reel)
- Left-to-right evaluation rules
- Wild symbol substitution
- **Exercise**: Implement `evaluateLines(grid, paylines, paytable): WinResult[]`

**Day 2 — Win line visualization (2.5 hrs)**

- Draw payline overlays with Graphics
- Show lines cycling one at a time for multi-wins
- Highlight winning symbols (tint, scale, or glow)
- **Exercise**: 3 wins display sequentially, each line shown with matching symbols highlighted

**Day 3 — Symbol win animations (2.5 hrs)**

- Animated sprite for each symbol's "win state"
- Trigger only on winning symbols
- **Exercise**: When a line wins, the 3 matching symbols play a unique animation

**Day 4 — Counter animation (2.5 hrs)**

- "Count up" number animation (10 → 250 over 2 seconds)
- Tweened with GSAP or custom
- Audio ticks synced to counter (save audio for week 9)
- **Exercise**: Balance increases smoothly from old value to new value after win

**Day 5 — Big win sequences (2.5 hrs)**

- Thresholds: "Nice Win" (5x bet), "Big Win" (20x), "Mega Win" (50x)
- Different text/animations per tier
- Freeze reels during big win presentation
- **Exercise**: Each tier has distinct presentation

**Day 6 — Mini project: Complete base game (2.5 hrs)**

- By end of today you should have:
  - Working 5x3 slot with 10–20 paylines
  - Symbols from your atlas
  - Proper spin feel
  - Win evaluation and presentation
  - Balance tracking
- This is a major milestone — take screenshots, celebrate
- Push to GitHub

**Day 7 — Rest / catch up**

**Self-check**

- [ ] Evaluate paylines correctly including wilds
- [ ] Present multi-win scenarios clearly
- [ ] Differentiate win tiers

---

### Week 9 — Architecture, State, Sound

**Learning objectives**

- Organize code with a state machine
- Manage game scenes (splash, main, bonus)
- Implement sound correctly
- Refactor for maintainability

**Day 1 — State machine (2.5 hrs)**

- States: `Booting`, `Idle`, `Spinning`, `Stopping`, `Evaluating`, `WinPresentation`, `BonusTrigger`
- Transitions: what leads where
- Simple state machine implementation (or use `xstate` lightly)
- **Exercise**: Refactor your game into a state machine — every action goes through states

**Day 2 — Scene manager (2.5 hrs)**

- `Scene` base class
- SceneManager: push/pop/replace
- Transitions between scenes (fade, slide)
- **Exercise**: Build `BootScene`, `LoadingScene`, `MainGameScene`

**Day 3 — Event bus (2.5 hrs)**

- Decouple components via events
- Typed event emitter (remember from week 2)
- Events: `spinStarted`, `reelStopped`, `bigWin`, etc.
- **Exercise**: Refactor so reels and UI never directly call each other — only through events

**Day 4 — Sound with Howler.js (2.5 hrs)**

- `npm install howler` and `@types/howler`
- Background music, sound effects
- Spatial sound (not needed for slots)
- Volume control, mute
- **Exercise**: Add spin sound, reel-stop tick, win sound, big win fanfare, background music

**Day 5 — Config-driven design (2.5 hrs)**

- Move hardcoded values to config files (paytable, bet levels, sound paths)
- JSON-based asset manifest
- **Exercise**: Your game reads everything from `/config/game.json`

**Day 6 — Code review and refactor (2.5 hrs)**

- Read your own code from weeks 7–8
- Look for: duplication, long functions, magic numbers, poor naming
- Apply SOLID principles (you already know them)
- **Exercise**: Refactor one problem area per 30 min until time is up

**Day 7 — Rest / catch up**

**Self-check**

- [ ] Game flow is driven by a clean state machine
- [ ] No direct coupling between unrelated systems
- [ ] All content is config-driven, not hardcoded

---

## Phase 5 — Capstone Build (Weeks 10–12)

This is your portfolio piece. Take it seriously. Pick a theme you actually like — you'll spend 45 hours on it.

---

### Week 10 — Capstone Part 1: Design & Core

**Day 1 — Design document (2.5 hrs)**

- Pick a theme (e.g., "Cosmic Casino", "Ancient Egypt", "Pirate Treasure" — anything)
- Paytable: 9–11 symbols, payouts, wilds, scatters
- Features: free spins (must have), wilds (must have), one additional feature (multipliers, expanding wilds, re-spins, etc.)
- Target stats: ~96% RTP, moderate volatility
- Sketch the UI layout (paper or Figma)

**Day 2 — Asset gathering (2.5 hrs)**

- Free asset sources: kenney.nl, itch.io, opengameart.org
- Or use AI image generation for symbols (consistent theme is key)
- Pack into atlas
- Get background, symbols, UI elements

**Day 3 — Project scaffold (2.5 hrs)**

- Fresh Vite project with your standard structure
- Copy useful modules from previous projects (ReelGrid, WinEvaluator, EventBus)
- Set up folder structure: `/scenes`, `/systems`, `/config`, `/assets`, `/ui`

**Day 4 — Core game loop (2.5 hrs)**

- Boot → Loading → Main
- Base reel spin working end-to-end

**Day 5 — Paytable and win eval (2.5 hrs)**

- Full paytable from your design
- Wild substitution
- Scatter detection

**Day 6 — Base game polish (2.5 hrs)**

- Good spin feel
- Win presentation
- All sounds wired

**Day 7 — Rest / catch up**

---

### Week 11 — Capstone Part 2: Features & Polish

**Day 1 — Free spins feature: logic (2.5 hrs)**

- 3+ scatters = 10 free spins
- Separate game state
- Retrigger possible

**Day 2 — Free spins: presentation (2.5 hrs)**

- Transition animation into free spins
- Distinct background/music during free spins
- Spin counter UI
- End-of-feature summary

**Day 3 — Additional feature (2.5 hrs)**

- Implement your third feature (whatever you chose in week 10 design)
- Fully animated and presented

**Day 4 — Big win presentation polish (2.5 hrs)**

- 3 tiers with distinct animations and sounds
- Particles, screen flash, camera shake (fake it via stage scale)

**Day 5 — Responsive + mobile (2.5 hrs)**

- Test at 1920x1080, 1366x768, 375x667, iPad sizes
- Portrait layout if you want (optional, adds a lot of work)
- Fix any layout issues

**Day 6 — Bug-fixing day (2.5 hrs)**

- Play through 50 spins, note every issue
- Fix the top 10 most glaring issues
- Edge cases: spin during win, rapid clicking, resize during spin

**Day 7 — Rest / catch up**

---

### Week 12 — Polish, Deploy, Portfolio

**Day 1 — Performance pass (2.5 hrs)**

- Chrome DevTools Performance tab
- Target: 60 FPS consistent on mid-range laptops
- Target: 30+ FPS on 3-year-old phones
- Object pooling audit
- Texture size audit

**Day 2 — Asset optimization (2.5 hrs)**

- Compress textures (TinyPNG, Squoosh)
- Consider texture compression (KTX2 for production, optional)
- Audio: compress to OGG/MP3 at reasonable bitrate
- Bundle size check with Vite build analyzer

**Day 3 — Deployment (2.5 hrs)**

- Build production bundle: `npm run build`
- Deploy to Netlify or Vercel with custom domain or subdomain
- Test the deployed version on multiple devices
- Fix any production-only issues

**Day 4 — Documentation (2.5 hrs)**

- Write a proper README:
  - What the project is
  - Tech stack
  - How to run locally
  - Features list with screenshots
  - Architecture overview
- Clean up code comments
- Make the GitHub repo look professional

**Day 5 — Demo video + social post (2.5 hrs)**

- Record a 60-second demo with OBS or similar (free)
- Add a title card, include the URL
- Write a LinkedIn post: your journey, what you learned, link to demo
- Prepare a portfolio page or update your existing one

**Day 6 — Outreach prep (2.5 hrs)**

- Update LinkedIn headline: "Slot Prototype Developer | Unity + PixiJS + TypeScript"
- Identify 20 iGaming studios that use HTML5 / web tech
- Draft a cold outreach template
- Identify freelance platforms to post on

**Day 7 — Celebration / rest — you earned it**

---

## Portfolio checklist (end of week 12)

- [ ] Live deployed demo with custom URL
- [ ] GitHub repo with clean README
- [ ] 60-second demo video
- [ ] LinkedIn post with 500+ words on your journey
- [ ] Updated resume with new skills
- [ ] At least 3 supporting mini-projects (from weeks 1–9) also on GitHub

---

## Ongoing habits from day 1

- **Commit daily** with meaningful messages
- **Take notes** in a `learning-log.md` in your repo — what you learned, what confused you, what you want to revisit
- **Post progress weekly** on LinkedIn or Twitter — accountability and visibility
- **Join a Pixi community** — PixiJS Discord is active and helpful
- **Don't compare to others' polished projects** — your week 4 work won't look like a 5-year indie dev's work. That's fine.

---

## When you get stuck

1. Read the error message carefully — TS errors are often very specific
2. Check the Pixi docs — search for the class name
3. Check Pixi examples — there's almost always an example for common needs
4. Ask Claude/ChatGPT — paste the error and relevant code
5. Ask in PixiJS Discord — real humans, often the Pixi team members
6. Stack Overflow — older but still useful for conceptual questions

If you're stuck for more than 45 minutes on one problem, **change tack**: take a walk, try a different approach, or move on and come back.

---

## After week 12 — What's next

- Start math modeling (your other plan) in parallel with freelance work
- Learn Spine animation (runtime is easy to add to Pixi)
- Learn basic RGS/backend concepts so you can integrate with real servers
- Consider learning PlayCanvas or PhaserJS as a secondary engine

Good luck. Come back each week and re-read the week ahead before starting it. Adjust the plan as you go — it's yours.
