---
description: Push the current post branch and open a PR to publish
---

You are helping Dusty publish a Dusty Lab blog post that's already been drafted and committed to a `post/*` branch by `/new-post`.

## Step 1: Verify state

In `/Users/dusty/Code/dusty-mccord-resume`:

1. Run `git status` and `git branch --show-current`. Confirm:
   - Current branch starts with `post/`
   - Working tree is clean (no uncommitted changes — if there are, ask Dusty whether to commit them or stash)
2. Run `git log main..HEAD --oneline` to confirm there's at least one commit ahead of main.
3. Identify the new MDX file: `git diff main...HEAD --name-only --diff-filter=A | grep 'src/content/blog/.*\.mdx'`.
4. Read that MDX file and extract `title`, `description`, and `draft` from frontmatter.

If `draft: true`, ask Dusty: "This post is still marked `draft: true` — flip it to `false` before publishing? (recommended)" and wait for an answer. If yes, edit the file, commit the change with message `post: mark <slug> ready`. (Note: posts default to `draft: false` now, so this is rare — only relevant if Dusty deliberately set draft mode.)

## Step 2: Pre-flight checks

1. Run `pnpm astro check` (or `pnpm build` if check is unavailable) to catch frontmatter schema errors before pushing. If it fails, show the error to Dusty and stop — do not push a broken build.
2. Confirm the post still meets basic sanity: file exists, frontmatter validates, no obvious leftover placeholder text like "TODO" or "IMAGE: ..." that wasn't filled in. If image placeholders are still present, warn Dusty and ask if he wants to push anyway.

## Step 3: Push and open PR

1. `git push -u origin <branch>`
2. Open a PR with `gh pr create`:
   - **Title:** the post title from frontmatter (no `post:` prefix needed in the PR title — keep it the same as the published title)
   - **Body:** use a HEREDOC with this format:

   ```
   ## Summary
   New post: **<title>**

   <description from frontmatter>

   ## Checklist
   - [x] Frontmatter validates against content schema
   - [x] Build passes locally
   - [ ] Image placeholders replaced (if any)
   - [ ] Final read-through on preview deploy
   ```

3. Return the PR URL to Dusty.

## Step 4: Remind

After the PR is open, remind Dusty:

- Merging to main will trigger the GH Pages deploy automatically (existing `deploy.yml`)
- He can preview the build on the PR before merging
- If he's still iterating, he can keep pushing commits to the same branch
- Substack cross-post is not automated yet — if/when that's set up, it'll trigger on merge

## Notes

- **Never merge the PR yourself.** Always leave the merge to Dusty.
- **Never force-push.** If something's wrong, fix it with a new commit.
- If Dusty isn't on a `post/*` branch when he runs this command, stop and tell him — don't try to be clever about it.
