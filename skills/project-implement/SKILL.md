---
name: project-implement
description: Build agreed work into a small, verified, committed change, proposing the design first. Use whenever the user names a ticket to work on ("let's pick up ABC-123", "pick up ABC-123 from the tracker", "look at <ticket> and pick it up"), points at a brief or plan file to build ("read your brief at <path>"), says "let's build that", "crack on" or "let's do 1 and 3" after an agreed plan, asks for a fix whose cause is known, or asks to stack work on an open PR. Ends when the work is verified and committed locally, ready for review.
---

# Implementing

Build the smallest version that delivers the ticket's outcome, verify it, and leave it committed and ready for review.

_Lifecycle: **project-scope** → **project-prototype** (if the core claim is unproven) → **project-implement** → **project-review**, with **project-reconcile** at natural breaks._

1. **Get on the right branch.** Run `git status` and `git worktree list`. If you're already in a worktree for this ticket, use it. For ticket work from the main checkout, create a worktree with the repo's tooling and the tracker's branch name. Small fixes the user asks for in place can stay where they are, but create a branch before committing if that's the main branch, unless the user said to commit to main. Branch from the base PR's branch when stacking.

2. **Read the input in full:** the ticket with its comments and linked docs, or the whole brief. Treat a brief's constraints as hard rules. If the input is thin or disputed, or the cause is unknown, say so and switch to **project-scope**.

3. **Check the plan still stands.** Fetch main and search merged and open PRs _by subject_ for overlapping work or changed conventions.

4. **Read the code you'll change** and check every assumption you'll build on. Look for what already exists to reuse.

5. **Propose the design and wait for OK.** Naming the ticket is not approval.
   - **Small, obvious change:** two lines on what changes and how you'll check it.
   - **Anything bigger:** what changes and why; contract or schema changes; the tests you'd add; whether risky user-facing behaviour should go behind a flag; PR slices (schema and API first, UI on top, destructive steps last); a deploy order that's safe if producer and consumer ship separately; the simplest alternative you rejected.
   - **Already approved** this session (scope approved in project-scope, or "just do it"): skip the proposal and build.

6. **Build in small commits.** Once the design is approved, build without checking in at every step. Commit each logical step once lint and typecheck pass. Reuse existing names, helpers and the tested write path. Comments say why, never what, and stay sparser than the surrounding file. Add only the agreed tests.

7. **See it working.** For UI, use the user's running dev server, check every state in a browser with realistic data, and screenshot it. When the user iterates from screenshots, apply exactly what they ask and nothing else. For prompt or agent changes, use the eval loop in the **project-prototype** skill.

8. **Self-check.** Run lint, typecheck, the related tests and CI's format checks for every touched package. Re-read every comment you added. Check the diff holds only this work. Report pre-existing failures with their output and draft a ticket; don't fix them here.

9. **Report briefly:** what changed, how it was verified, remaining risk, branch and commits, drafted tickets, and anything that changes the ticket or project docs. Recommend the next step, usually **project-review**.

Don't rename migrations already on main. Don't change more UI than asked.
