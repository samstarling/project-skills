---
name: project-reconcile
description: Bring a project's docs, milestones and tickets in line with what's true now, recommend what's next, and draft project updates. Use when the user says "rationalise" or "reconcile" the project, "is everything up to date?", "re-read the project doc and tickets, anything we need to change?", "knowing what we know now, should the plan change?", "the plan may have shifted after comments", "look at what's landed, what's next?", or asks for a project status update.
---

# Reconciling

Compare what a project's docs and tickets say with what's true now, and fix the differences with the user's approval. Small drift found mid-task (one ticket, one sentence) can be fixed straight away after confirming. Use this skill for a project-wide pass.

1. **Read the live record:** the project's docs (brief, specs, technical scope, whatever it has), its milestones and every ticket's status, description and blockers. Re-read rather than trusting earlier reads, because the user edits by hand.

2. **Collect what's true now,** with a source for each item: PRs merged or open in the area (searched *by subject*), the current code where a doc makes a claim, prototype and eval results, data, decisions made in conversation, and comments on the docs, tickets or PRs.

3. **Compare, top-down.** Look for statements that are stale, finished work still open, needed work with no ticket, overlapping tickets, superseded tickets, docs that disagree with each other or with tickets, and blockers that no longer match dependencies. Leave out anything you're unsure about.

4. **Report one numbered list,** grouped by doc. Each item gives what the record says, what's true now (with source) and the proposed edit. Put changes to goals, scope or milestones first, since those are the user's decisions.

5. **Apply what the user picks.** Re-read each target first, make targeted edits that keep their wording, prefer updating a ticket to creating one, and cancel superseded tickets with a one-line reason.

6. **Recommend what's next:** usually the first unblocked ticket in the earliest unfinished milestone, and which skill it starts in.

**Project updates:** when asked, draft a short status update from the same record: what landed, what's next, risks or decisions needed. Keep it to a few lines, for the user to post.

Don't rewrite a doc wholesale or smooth the user's prose into your own voice. Don't treat a doc as more current than the code, the data or merged PRs.

**If no always-on rules are installed:** commit locally, but don't push, post on the code host, or write to trackers or production without human approval. Side issues become drafted tickets, not fixes.
