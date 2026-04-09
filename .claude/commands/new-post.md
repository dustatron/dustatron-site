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

## Step 2: Interview (one question at a time)

Ask Dusty what the tip is. Accept a one-sentence topic.

Then ask follow-ups **one at a time**. Wait for each answer before asking the next. Never dump a numbered list of questions on him — that produces shallow answers and reads like a form. Pick each follow-up based on the most interesting or unclear thing he just said.

Useful probes (choose what fits, never fire them all):
- "Walk me through what you actually did, step by step."
- "What's a specific moment where this paid off or broke?"
- "What other things did you try first?"
- "Were there any numbers attached — time saved, errors fixed, tokens, anything?"
- "What did you feel when this clicked? Was there an aha moment, or did it just gradually work?"
- "Anything you'd warn people about — gotchas, edge cases, things that didn't work?"
- "Any code, config, or command snippets to include?"
- "Any specific moment or screenshot that would make a good image?"

Keep going until you have enough real material to draft honestly. If you don't, the post is shorter — that's fine.

## Step 3: Draft

Write the post following the post-creation-guide. Hard rules:

- **400-600 words.** Hard ceiling 800. Count.
- **3-beat structure:** the setup (why) → what it does → setup steps. Use the **default skeleton** in the guide unless the post calls for something different (H1, bold subtitle, header image, collapsible Definitions, sectioned body, one-line close).
- **No fabrication.** If Dusty didn't say it, don't write it. Even "confident guesses" count — flag them as suggestions for him to confirm during review, don't slip them in as fact.
- **Voice:** friend-at-the-next-desk. First person. Dry, slightly sarcastic, opinionated.
- **Inclusivity:** define jargon on first use (inline or in a collapsible Definitions block). No unexplained insider references — if you mention a tool/joke not widely known, link it with one line of context or cut it.
- **Code:** real fenced blocks with language tags, copy-pasteable. Short visual code blocks (like a one-line `/plugin`) are OK as layout breaks even when slightly redundant with the surrounding sentence.
- **Images:** mark inline placeholders in the format `![IMAGE: clear specific description]()` — never invent or generate images. Plan for 2-4 images per post (header + 2-3 inline).
- **Closing:** one direct sentence on why the reader should try it. Then stop. No CTA, no "let me know what you think."
- **Apply the humanize-writing skill rules.** Especially: kill significance inflation, no AI vocabulary (delve/leverage/realm/journey/seamless/robust/etc.), vary sentence rhythm, no inline-header bullet lists, no tidy-bow endings.
- **Self-check before showing:** scan your draft for the "Phrases to never use" list and the no-fabrication rule. If any are present, rewrite.

## Step 4: Review

Show Dusty the draft inline (don't write to disk yet). Ask if it needs changes. Iterate until he approves.

## Step 5: Commit

Once approved:

1. From the repo root:
   - `git checkout main && git pull` to make sure you're up to date
   - `git checkout -b post/<slug>` (slug from frontmatter)
2. Write the draft to `src/content/blog/<slug>.mdx` with valid frontmatter (title, description, pubDate, tags, `draft: false`). The H1 in the post body should match the frontmatter `title` unless there's a specific reason to differ.
3. `git add` the new file and commit with message: `post: <title>` (concise, no Co-Authored-By line in commit body unless asked).
4. **Do not push. Do not open a PR.** Tell Dusty the branch and file are ready, and remind him to run `/publish-post` when he's ready to ship.

## Notes

- If Dusty hasn't given you a topic yet, start by asking what the tip is.
- If the tip is too vague or sounds like two posts, push back and ask him to narrow it.
- If he's stuck on a topic, offer to read `the-dusty-lab/context/post Ideas.md` from the obsidian vault and suggest one.
- Default `draft: false`. Branch isolation already keeps in-progress posts off the live site — they only deploy when the PR merges.
- After Dusty drops images into `public/blog/<slug>/`, run `ls` on that folder and replace placeholder image markers with real markdown image tags using descriptive alt text (not "screenshot 1").
