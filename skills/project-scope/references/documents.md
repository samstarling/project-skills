# Project documents

These are defaults. If the user or team already has a structure (an existing technical scope, a project template), follow theirs.

| Document      | Answers                             | Needed for                             |
| ------------- | ----------------------------------- | -------------------------------------- |
| Project brief | Why, and what does done look like?  | Any project                            |
| Product spec  | What are we building, and for whom? | User-facing projects                   |
| Tech spec     | How are we building it?             | Any project with real engineering risk |

A single ticket needs none: its **Background** and **Approach** sections do the job. Don't create a document the work doesn't need. Put documents where the team keeps them (the tracker's project docs, or a path the user names).

## Project brief

Summary (one or two sentences), problem and why now, goals, non-goals, how we'll know it worked, milestones, links.

## Product spec

Who it's for, what we're building (behaviour and key flows), what changes for users, in and out of scope, open questions.

## Tech spec

Problem (linking to the brief for the why), the chosen solution in a paragraph, the high-level approach (data model, components, deploy order where it matters), risks and how each will be retired. Push detail down into tickets.

## Milestones and tickets

- 2–4 milestones, ordered by dependency. Each is an observable outcome named for what it unlocks, not a bucket of tasks.
- Every ticket is one small outcome in exactly one milestone, with blockers matching dependency order.
- Goals, non-goals, milestones and product scope are the user's decision. Raise changes to them prominently. Tickets and tech details you can propose freely.
