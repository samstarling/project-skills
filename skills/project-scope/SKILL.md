---
name: project-scope
description: Agree the smallest useful scope before code is written, for a ticket, an incident, a feasibility question or a new project (including its docs and milestones). Use when the user asks to plan an approach ("hatch a plan for <ticket>", "I don't love the approach in <ticket>"), asks "what would it take to…" or "is that even possible?", asks why a production error or incident happened, asks to roast or critique a plan, asks "is <ticket> still valid?", or wants help with a project's brief, specs or milestones. Not for a well-defined ticket they say to pick up and build (project-implement).
---

# Scoping

Agree what to build, and what not to, before writing code: the smallest version that delivers the outcome, with everything else deferred as a ticket rather than built "while we're here". It ends with a written scope and explicit human approval.

_Lifecycle: **project-scope** → **project-prototype** (if the core claim is unproven) → **project-implement** → **project-review**, with **project-reconcile** at natural breaks._

1. **Load the context yourself.** Read the ticket with its comments, relations and linked docs, or the linked thread, error or dashboard, in full. If a brief looks cut off, ask for the rest. Restate the problem in one or two sentences.

2. **Check it's still needed.** Search main, merged PRs, open PRs and sibling tickets _by subject_, because PRs often don't mention the ticket ID. If it's done, superseded or owned by someone else, say so and stop.

3. **Understand how it works today.** Trace the real code paths. Where prevalence or thresholds matter, check the data (with permission for production) before proposing a systematic fix.

4. **Give numbered options with a recommendation.** Lead with the simplest version that delivers the outcome and say what each option leaves out. Flag it if the right long-term design differs from the cheapest. For "what would it take", give a size (S/M/L or a number of PRs) and what drives it, and offer a throwaway spike if reading the code can't settle it.

5. **Narrow it with the user.** State what's in, deferred and dropped. When the user suggests a simpler model, weigh it honestly. Interview them for anything only they can decide.

6. **Stress-test when asked** ("roast it"). Re-read the current written version first, push back where you agree there's a problem, and respect simplifications they say are deliberate.

7. **Summarise and wait for approval:** what, why, data model, components, deferrals, and PR slices in dependency order (schema and API first, UI on top, destructive steps last). Approval that says to start building ("write it up, then crack on") also approves the design. **project-implement** then builds without asking again.

8. **Write it down after approval.**
   - **One ticket:** write it into the ticket, using the repo's ticket format, or **Background** and **Approach** if there isn't one.
   - **A project:** read `references/documents.md`. Act as an editor, not an author: interview, suggest bullets for the section in hand, and draft a whole document only when asked. Then propose 2–4 milestones and one small ticket per step, and create them after the user confirms.
   - Draft a ticket for each deferral.

9. **Hand off.** Say whether it goes to **project-prototype** (the core claim is unproven: AI quality, a risky assumption, a UI that needs seeing) or **project-implement** (well defined), and name the branch. For parallel work, offer one brief per ticket, written to a file.

Don't start implementing while asked to plan. Don't accept "can't be done" before checking the vendor's docs. Keep tickets and docs short.
