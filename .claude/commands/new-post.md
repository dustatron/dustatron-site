---
description: Interview me and draft a new Dusty Lab blog post
---

You are helping Dusty write a new blog post for The Dusty Lab (dustymccord.com).

## Step 1: Load context

Read these files in order:

1. `.claude/post-creation-guide.md` (in this repo) — the source of truth for voice, format, and workflow. **Follow it strictly.**
2. `/Users/dusty/Library/CloudStorage/SynologyDrive-cloud/Obsidian/dusty-notes/the-dusty-lab/context/writing examples.md` — reference for Dusty's voice. Match this tone, NOT the structure (the example is a long personal narrative; tip posts are shorter and more direct).
3. `src/content.config.ts` — the Astro content schema. Frontmatter must validate against this.
4. Invoke the `humanize-writing` skill so its rules are loaded for the drafting step.

## Step 2: Interview

Ask Dusty what the tip is. Accept a one-sentence topic. Then ask **3 to 5 short follow-up questions** to extract the story. Pick from:

- What tool, model, or trick is this about?
- What problem were you trying to solve when you found it?
- What was annoying or broken before?
- What surprised you about it?
- Who's this for — Claude Code users, vibe coders, devs in general?
- Any code, config, or command snippets to include?
- Any specific moment or screenshot that would make a good image?

Keep the questions tight. Don't ask all 7. Pick the ones that matter for *this* tip.

## Step 3: Draft

Write the post following the post-creation-guide. Hard rules:

- **400-600 words.** Hard ceiling 800. Count.
- **3-beat structure:** what the tip is → what problem it solves → why to try it. No section headings unless absolutely needed.
- **Voice:** friend-at-the-next-desk. First person. Dry, slightly sarcastic, opinionated. Match the writing-examples tone.
- **Code:** real fenced blocks with language tags, copy-pasteable.
- **Images:** 1-2 inline placeholders in the format `![IMAGE: clear description]()` — never invent or generate images.
- **Closing:** one direct sentence on why the reader should try it. Then stop. No CTA, no "let me know what you think."
- **Apply the humanize-writing skill rules.** Especially: kill significance inflation, no AI vocabulary (delve/leverage/realm/journey/seamless/robust/etc.), vary sentence rhythm, no inline-header bullet lists, no tidy-bow endings.
- **Self-check before showing:** scan your draft for the "Phrases to never use" list in the post-creation-guide. If any are present, rewrite.

## Step 4: Review

Show Dusty the draft inline (don't write to disk yet). Ask if it needs changes. Iterate until he approves.

## Step 5: Commit

Once approved:

1. From the repo root:
   - `git checkout main && git pull` to make sure you're up to date
   - `git checkout -b post/<slug>` (slug from frontmatter)
2. Write the draft to `src/content/blog/<slug>.mdx` with valid frontmatter (title, description, pubDate, tags, draft: true).
3. `git add` the new file and commit with message: `post: <title>` (concise, no Co-Authored-By line in commit body unless asked).
4. **Do not push. Do not open a PR.** Tell Dusty the branch and file are ready, and remind him to run `/publish-post` when he's ready to ship.

## Notes

- If Dusty hasn't given you a topic yet, start by asking what the tip is.
- If the tip is too vague or sounds like two posts, push back and ask him to narrow it.
- If he's stuck on a topic, offer to read `the-dusty-lab/context/post Ideas.md` from the obsidian vault and suggest one.
- Default `draft: true` in frontmatter so half-written posts don't accidentally appear on the site.
