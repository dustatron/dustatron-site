# The Dusty Lab — Post Creation Guide

This is the source of truth for how blog posts on dustymccord.com are written. The `/new-post` slash command reads this file. Edit it to change how posts get made.

---

## What a Dusty Lab post is

A short tip from a working developer to other developers and vibe coders. The voice is "I just learned this cool thing, lean over to the desk next to you and tell your coworker about it." Friendly, slightly silly, dry humor allowed, no breathlessness.

The reader should finish the post in 2 minutes — right before standup, on the bus, between meetings. They should walk away with one specific thing they could try today.

**Audience:** working devs and vibe coders who use AI tools every day.

**Goal of every post:** share one cool tip the reader didn't know. That's it.

---

## Length

400–600 words. Hard ceiling: 800. If it's getting longer, it's probably two posts.

---

## Structure (3 beats + close)

Every post hits these three beats in order:

1. **The setup** — Why were you looking for this? What problem was real and annoying? Specific: "I had ten thousand TypeScript errors at work" beats "I was struggling with productivity."
2. **The thing itself** — What's the tool/trick/plugin/setting? Name it. Explain what it does in plain terms. One paragraph of mechanism, one paragraph of why-it's-better.
3. **The setup steps** — How does someone actually try it? Numbered or labeled steps with copy-pasteable code blocks and screenshots.

Then a one-line close on why the reader should try it.

### Default skeleton (overrideable per post)

The first post worked well with this concrete shape. Use it as a starting point unless the post calls for something different:

```
# H1 title (matches frontmatter title)
**Bold subtitle / one-line hook**

![Header image](/blog/<slug>/header.png)

<details>
<summary><strong>Definitions</strong> (click to expand)</summary>
- term — plain-English definition
- term — plain-English definition
</details>

---
## The setup (the why)
1-2 paragraphs on the real problem.

---
## What it does (the thing)
1-3 paragraphs on what it is, mechanism, why it beats the alternative.

---
## Two steps to get it working (the setup)
**Step 1:** explanation + code block + screenshot
**Step 2:** explanation + code block + screenshot

---
One-line closing: "If you ___, install this tonight."
```

Section headings should describe what's in the section ("Two steps to get it working") rather than abstract labels ("Action items"). H2s for major sections, no H3s unless absolutely necessary.

### Code blocks serve layout, not just content

A short code block like ```/plugin``` may be redundant with the surrounding sentence — keep it anyway if it visually breaks up a wall of text. The blog rewards visual rhythm. Walls of paragraphs are skipped; pages with images, code, and headings get read.

### Inclusivity for jr devs and vibe coders

Every post should be readable by someone who just got into vibe coding. That means:
- **Define jargon on first use** — either inline ("an LSP, the thing your editor uses for red squiggles") or in a collapsible Definitions block at the top.
- **No unexplained insider references.** If you mention a tool/project/joke that isn't widely known, either link it with one line of context, or cut it. ("It's not as flashy as openClaw" is exactly the kind of line to cut — most readers have no idea what openClaw is.)
- **No assumed knowledge of obscure flags, configs, or commands.** If a step needs `npm install -g`, show the full command, don't say "install it globally."

---

## The no-fabrication rule (most important rule in this doc)

**Never invent details, anecdotes, opinions, numbers, or events.** If Dusty didn't say it, it does not go in the post. This includes:

- "I tried X, Y, and Z first" — only list things Dusty actually mentioned trying
- Specific numbers ("three times," "for two weeks," "ten attempts") unless Dusty stated them
- Emotional reactions or moments ("I was frustrated," "felt my soul leave my body") unless Dusty described that feeling
- Quotes from coworkers, conversations, or anyone else
- Tools, configs, or workflows Dusty didn't bring up
- Setup steps Dusty didn't walk through

If a detail would make the post better but Dusty didn't provide it, **ask for it.** Don't paper over the gap with plausible-sounding fiction. The whole point of this blog is real field notes from a real practitioner. Made-up color is worse than a shorter post.

When in doubt: **interview, don't invent.** Ask another question. Ask Dusty to expand. Ask "what did that actually look like?" If after probing he still doesn't have a detail, leave it out — don't fabricate to fill space. A 350-word honest post is better than a 600-word post with three made-up paragraphs.

### "Confident guess" is still fabrication

Even if you're pretty sure a generalization is true (e.g. "the noise dropped fast" or "weeks of saved time"), if Dusty didn't actually say it, **flag it as a guess and ask him to confirm.** Don't slip it into the draft as fact. The first Dusty Lab post had a closing paragraph I made up that turned out to be true — that's lucky, not honest, and we're not relying on luck. If you want to suggest a sentence, write it in the review step as: *"I'd add this sentence here: '...'. True?"* Let Dusty say yes or no before it lands in the draft.

### Interview style: ONE QUESTION AT A TIME

**Never dump a survey of questions on Dusty.** Ask one question, wait for the answer, then ask the next one based on what he said. This is non-negotiable. A list of 5 numbered questions is exactly the wrong shape — it feels like a form, the answers come back shallow, and you lose the chance to follow the interesting thread.

Good rhythm:
1. Ask what the tip is.
2. Wait for answer.
3. Pick the most interesting/unclear thing in his answer and ask one focused follow-up.
4. Wait.
5. Repeat until you have enough real material to draft honestly.

### Probing questions to choose from (one at a time)

If Dusty's first answer is thin, dig in with one of these — pick the one that matches the gap:
- "Walk me through what you actually did, step by step."
- "What's a specific moment where this paid off or broke?"
- "What other things did you try first?"
- "Were there any numbers attached — time saved, errors fixed, tokens, anything?"
- "What did you feel when this clicked? Was there an aha moment, or did it just gradually work?"
- "Anything you'd warn people about — gotchas, edge cases, things that didn't work?"

Keep asking until you have enough real material. If you still don't, the post is shorter. That's fine.

---

## Voice rules

- Write like you're talking to a friend at the next desk. First person. Conversational.
- Dry, slightly sarcastic, occasionally self-deprecating. Don't try to be funny on every line — earn it.
- No hype, no "game-changer," no "revolutionary," no "in today's fast-paced world."
- Have an opinion. If something's overhyped, say so. If you're not sure, say *that*.
- Specific over abstract. "Cut my context-switching from 8 tabs to 2" beats "improves focus."
- Sacrifice grammar for concision. Fragments are fine. Start sentences with "But" or "And."
- Write the way you talk: contractions, asides, the occasional rhetorical question.

### Phrases to never use
delve, leverage (verb), harness, navigate (figurative), realm, journey, tapestry, landscape (figurative), seamless, robust, cutting-edge, game-changer, paradigm shift, unlock the power of, in today's fast-paced world, "It's not just X, it's Y", "This is more than just a tool"

### Things AI writing does that we don't
- Five-bullet lists with bolded inline headers
- "In conclusion" / "To sum up" / "Moving forward"
- Em dashes injected mid-sentence for dramatic asides — like this — when a comma would do
- Forcing every section to end on a tidy takeaway
- Hedging every claim ("it could potentially be argued that...")
- Synonym cycling (calling Claude "the assistant," "the AI," "the model" in one paragraph — pick one)

---

## Code blocks

- Real fenced code blocks with language tags. Always.
- Copy-pasteable. If it's a config, show the full block, not a snippet with "..."
- Short. If a code sample is more than ~15 lines, ask whether it really belongs in the post or in a linked gist/repo.
- No screenshots of code. Ever.

Example:

````markdown
```yaml
mcpServers:
  filesystem:
    command: npx
    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/dusty/projects"]
```
````

---

## Images

2–4 per post is the sweet spot. Most posts get a header image plus 2-3 inline screenshots. Use them when:
- A screenshot makes the tip obviously clearer (a UI change, a before/after diff, a terminal output)
- There's a hero image that sets the tone at the top of the post

### Where images live

**Always under `public/blog/<slug>/` in the resume repo.** Anything in `public/` is served at the URL root, so a file at `public/blog/<slug>/foo.png` is accessible at `/blog/<slug>/foo.png` in the post.

Do **not** put images in `src/content/blog/`. The Astro content collection only expects `.mdx` files there.

### Filename convention

Number the images in display order, with a short descriptive name:

```
public/blog/<slug>/header.png
public/blog/<slug>/1.first-screenshot.png
public/blog/<slug>/2.second-screenshot.png
public/blog/<slug>/3.third-screenshot.png
```

The numeric prefix sorts the folder in display order, which makes it easy for Dusty to drop screenshots in and for Claude to wire them up without ambiguity.

### Drafting placeholders

When drafting before images exist, mark spots inline with a placeholder so Dusty can fill them in later:

```
![IMAGE: screenshot of Claude Code showing the /plugin menu]()
```

Don't try to find images automatically. Don't generate them. Just leave the placeholder with a clear, specific description of what the screenshot should show.

### Wiring images in after Dusty drops them

When Dusty says he's added the photos, run `ls public/blog/<slug>/` to see the actual filenames, then replace each placeholder with a real markdown image tag using a descriptive alt text (not "screenshot 1"):

```markdown
![Running /plugin in Claude Code](/blog/claude-code-lsp-plugin/1.code-cli-plugin.png)
```

---

## Closing

End with one sentence on **why you think the reader should try it.** Direct, no hedging. Not a question to readers, not a takeaway box, not "let me know what you think." Just: "If you've spent any time fighting context limits in Claude Code, this is worth ten minutes of your afternoon."

Then stop. No call-to-action paragraph.

---

## Title

Format: **[Specific Tool or Trick] + [Concrete Benefit]**

Good:
- "The MCP Filesystem Server Cut My Claude Code Setup Time in Half"
- "One Line in CLAUDE.md That Stopped Claude From Rewriting Files"
- "Why I Switched to Beads for Claude Code Ticket Tracking"

Bad:
- "A Tip About AI" (too vague)
- "🚀 Supercharge Your Workflow With This One Weird Trick" (cringe)
- "Reflections on My Journey With Claude" (no)

---

## Frontmatter

Required (matches site schema in `src/content.config.ts`):

```yaml
---
title: "..."
description: "..."  # one sentence, shows on homepage card
pubDate: 2026-04-08
tags: ["claude-code", "mcp"]
draft: false
---
```

**On `draft`:** default to `false`. Branch isolation already keeps in-progress posts off the live site (the post only deploys when its PR merges to `main`). Setting `draft: true` only hides the post from the local dev server's blog index, which is rarely what you want. Use `draft: true` only for the rare case where you want a post to live on `main` but stay hidden from the listing temporarily.

Optional (custom Dusty Lab fields, may not render until schema is updated):

```yaml
tools: ["Claude Code", "MCP filesystem server"]
models: ["claude-opus-4-6"]
heroImage: "/blog/<slug>/hero.png"
```

**Description** is the most-clicked piece of metadata on the homepage card. It should be one specific sentence that makes someone want to read the post. Don't repeat the title.

---

## Slug + filename

- Filename: `src/content/blog/<slug>.mdx`
- Slug: kebab-case, keyword-first, no clever wordplay
- Examples: `mcp-filesystem-server`, `claude-md-no-rewrites`, `beads-ticket-tracking`

---

## Workflow

When `/new-post` runs, the expected flow is:

1. Ask Dusty what the tip is (just the topic — single sentence is fine)
2. **Interview him one question at a time.** Wait for each answer before asking the next. Pick follow-ups based on what he just said, not from a fixed list. Keep going until you have enough real material to draft honestly.
3. Draft the post following this guide. Use the default skeleton unless the post calls for something different.
4. Self-check against the no-fabrication rule, the "Phrases to never use" list, and the humanize-writing skill rules.
5. Show the draft to Dusty inline for review. Don't write to disk yet.
6. On approval: create branch `post/<slug>` in `/Users/dusty/Code/dusty-mccord-resume`, write the file at `src/content/blog/<slug>.mdx`, commit. Do not push or open a PR — that's `/publish-post`'s job.

After Dusty drops images into `public/blog/<slug>/`, run `ls` on that directory and replace placeholder image markers with real markdown image tags using descriptive alt text.

---

## Reference files

- Voice example (use for tone, not format): `the-dusty-lab/context/writing examples.md`
- Post idea backlog: `the-dusty-lab/context/post Ideas.md`
- Site content schema: `/Users/dusty/Code/dusty-mccord-resume/src/content.config.ts`
