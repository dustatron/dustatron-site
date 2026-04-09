# AI Field Notes by Dusty McCord — Post Backlog

**Tagline:** *“Claude handles the mechanical work. You make the creative calls.”*

A running list of post ideas. Add rough notes, flesh out later.

-----

## Queue

### 1. LSP Servers in Claude Code

**Hook:** Claude plugins + LSP servers give Claude Code real IDE-level navigation — and the result is dramatically fewer TypeScript errors making it into commits.
**Angle:** Most devs don’t know this exists. Concrete before/after story.
**Notes:** Cover how to set it up, what LSP servers to use for TS, why it matters for code quality.

-----

### 2. Build Skills Around CLIs, Not MCP Servers

**Hook:** If a CLI exists for a tool, a Claude skill wrapping that CLI will be faster and cheaper than an MCP server.
**Angle:** Practical performance + token cost argument. Counterintuitive to the “just use MCP” crowd.
**Notes:** Show a real example comparison. Maybe a before/after token count.

-----

### 3. Have Claude Audit Your Own Claude Setup

**Hook:** Point Claude at your global `~/.claude` folder and ask it to review your workflow — it’ll suggest improvements and plugins you didn’t know existed.
**Angle:** Meta and a little mind-bending. Very shareable.
**Notes:** Share actual output / suggestions received. What changed as a result.

-----

### 4. True Adversarial Reviews — Using a Different Model Entirely

**Hook:** Everyone talks about adversarial review agents, but they’re just the same model with a different prompt. You can use curl + a skill to call Gemini or ChatGPT directly from the Claude CLI and pipe that review back into your conversation.
**Angle:** This is genuinely different and more useful than same-model adversarial review. The disagreements are real.
**Notes:** Cover the curl + skill setup. Show an example conversation where Claude and Gemini disagree and you interrogate why.

-----

### 5. Tmux Review — A Developer’s Honest Take

**Hook:** Tmux is everywhere in dev circles but nobody writes an honest pros/cons from a daily driver perspective.
**Angle:** What’s great, what’s annoying, what took time to click. Not a tutorial — a field review.
**Notes:** Cover session management, pane workflow, the learning curve, what it replaced, what it didn’t.

-----

### 6. How I Built My Own Publishing Pipeline with Claude Code

**Hook:** I got tired of copy-pasting blog posts to three platforms, so I built a pipeline in Claude Code to automate it. Here’s how it went.
**Angle:** Meta post — using the tool to write about the tool. Documents the real messy process, not a polished tutorial.
**Notes:** Pull from PRD + build journal as it happens. Cover decisions made, dead ends, what Claude got right and wrong. This one gets written *while* building — update PRD with journal notes throughout.

-----

### 7. Obsidian as a Developer’s Second Brain — Now With Claude Code

**Hook:** Obsidian has been a great dev knowledge base for a while, but the new terminal plugin changes everything — you can run Claude Code in the same window and actually interact with your notes through it.
**Angle:** Not just “use Obsidian” — specifically the workflow unlocked by having Claude co-located with your notes. Practical and personal.
**Notes:** Cover the terminal plugin setup, using Claude to query/improve your notes, storing interesting prompts as notes, building personal learning programs in folder structures. The “living knowledge base that talks back” angle.

-----

### 8. My Favorite CLAUDE.md Tweaks

**Hook:** A few small lines in CLAUDE.md dramatically change how Claude Code behaves. Here are the ones I keep coming back to.
**Angle:** Personal and opinionated — not a comprehensive guide, just the tweaks that actually stuck.
**Notes:** Cover:

- “Be concise, sacrifice grammar for concision”
- “Ask me questions one at a time”
- Starting project ideas from mobile — the one-question-at-a-time format turns Claude into a great thinking partner for fleshing out ideas conversationally
- The phone → conversation → plan doc → Claude Code handoff workflow
- Why this matters: CLAUDE.md is underrated, most people treat it as a rules file not a personality/workflow config

-----

### 9. Using Claude Code for TTRPG Prep Without Losing Your Creative Voice

**Hook:** Claude can do the mechanical busy work of game prep — parsing PDFs, converting stat blocks, reformatting adventures — but the trick is keeping it out of your creative decisions.
**Angle:** Specific and personal. Not “AI for D&D” clickbait — a real workflow from an experienced GM.
**Notes:** Cover:

- Ingesting PDF sourcebooks → searchable markdown (huge for session prep)
- Building large context documents so Claude understands the system deeply
- Conversion agents: taking a D&D adventure and converting to Shadowdark stat blocks, spells, encounter math
- The key distinction: Claude handles the *mechanical* translation, you make the *creative* calls
- Where Claude tries to overstep and how to push back
- Possible example: Obojima sourcebook conversion workflow

-----

### 10. Mining Open Source Projects for Features with Claude

**Hook:** Found a feature in a Python or Go project you want in your TypeScript app? Feed the repo to Claude and have it build a conversion plan. Language doesn’t matter anymore.
**Angle:** Practical and underused. Most devs either rewrite from scratch or abandon the idea. This is a third path.
**Notes:** Cover:

- Finding OSS projects with the feature you want (any language)
- Feeding the relevant code + your project context to Claude
- Asking Claude to locate the feature, understand it, then plan a TypeScript port
- Where this works well vs. where it gets messy (complex deps, side effects, etc.)
- Real example from a side project

-----

### 11. The Claude Status Bar — Know Before Your Buddy Loses Its Mind

**Hook:** There’s a little status bar in the Claude Code terminal that shows your context window usage, current folder, Claude version, and token count. It’s the difference between a smooth session and suddenly wondering why Claude forgot everything.
**Angle:** Small tip, high value. Very relatable pain point for anyone who’s hit context limit mid-session without realizing it.
**Notes:** Cover:

- What the status bar shows and how to read it
- Why context window management matters (the “losing its mind” moment)
- Practical habits around it — when to start a new session, how to summarize before you hit the limit
- Any config or plugin involved in enabling it

-----

## Icebox / Future Ideas

*(dump rough ideas here, promote to Queue when ready)*

-----

## Published

*(move posts here when live, with link)*