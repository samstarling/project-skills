---
name: project-implement
description: Build agreed work into a small, verified, committed change, proposing the design first. Use whenever the user names a ticket to work on ("let's pick up ABC-123", "look at ABC-123 and pick it up"), points at an agent brief or plan file to build ("read your brief at …"), says "let's build that" or "crack on" after an agreed plan, asks for a fix whose cause is known, asks to build the next slice on top of an open PR, or says "that's merged, what's next?" mid-ticket. Ends when the work is verified and committed locally, ready for review. Not for PR review comments or CI failures.
---

# Implementing

Build the smallest version that delivers the ticket's outcome, verify it, and leave it committed and ready for review.

_Lifecycle: **project-scope** → **project-prototype** (if the core claim is unproven) → **project-implement** → your agent's code review and the PR, with **project-reconcile** at natural breaks._

1. **Read the input in full:** the ticket with its comments and linked docs, or the whole agent brief. Treat its constraints as hard rules. If the input is thin or disputed, or the cause is unknown, say so and switch to **project-scope**.

2. **Work on the ticket's branch:** the tracker's branch name, based on the agent brief's base branch or the previous slice if it hasn't merged, otherwise main.

3. **Check the plan still stands.** Fetch main and search merged and open PRs _by subject_ for overlapping work or changed conventions.

4. **Propose the design and wait for OK.** Naming the ticket is not approval.
   - **Small, obvious change:** two lines on what changes and how you'll check it.
   - **Anything bigger:** what changes and why; contract or schema changes; the tests you'd add; whether risky user-facing behaviour should go behind a feature flag; PR slices (schema and API first, UI on top, destructive steps last); a deploy order that's safe if producer and consumer ship separately; the simplest alternative you rejected.
   - **Already approved** this session (scope approved in project-scope, or "just do it"): skip the proposal and build.

5. **Build the first slice.** Once the design is approved, build without checking in at every step, adding only the agreed tests, plus any eval cases the eval loop needs. Build later slices only if the user asked for them; otherwise draft or update their tickets. If the build shows the agreed plan is wrong, stop, explain what changed and re-propose.

6. **Check it delivers the ticket's outcome** with realistic data, in every UI state. For prompt or agent changes, use the eval loop (step 7) in **project-prototype**.

7. **Keep it to this ticket.** Draft a ticket for any side issue or pre-existing failure you find, with its output, rather than fixing it here.

8. **Report briefly:** what changed, how it was verified, remaining risk, branch and commits, drafted tickets, and anything that changes the ticket or project docs, offering to update them. Recommend the next step, usually a code review and then the PR.

**Between slices** ("that's merged, what's next?"): re-read the agreed slices and the ticket, check what has merged, and recommend the next slice and whether it stacks. Use **project-reconcile** only for a project-wide pass.

**Parking it:** if the user puts the ticket down, draft a short handover comment for it: what was tried and learned, branch state, and the next step.
