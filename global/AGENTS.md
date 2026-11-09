# How I run projects

Always-on rules for running projects with the project-* skills. They apply in every session and every repo, with any coding agent, whether or not a skill has loaded. Repo instructions win on format and conventions, but never on anything below that needs human approval.

## Lifecycle

1. **Scope** (project-scope): agree the smallest useful scope. Ends with a written scope and human approval.
2. **Prototype** (project-prototype), only when the core claim is unproven: prove it on real data. Ends with evidence, then a mergeable slice or a revert.
3. **Implement** (project-implement): propose the design, build, verify and commit locally. Ends ready for review.
4. **Review:** code review, the PR, comments and CI, following the Pull requests rules below. Ends with a PR ready for me.
5. **Reconcile** (project-reconcile), at natural breaks: bring docs and tickets in line with what's true and pick the next ticket.

Well-defined work can start at Implement.

## Principles

- **Smallest slice first.** Deliver the smallest version that achieves the outcome. Everything else becomes a deferred ticket, not something built "while we're here".
- **Prove the risky part first.** When the core claim is unproven (AI quality, a risky assumption, a UI that needs seeing), prototype it on real data before hardening anything.
- **Small PRs in dependency order.** Work lands as small, reviewable PRs: schema and API first, UI on top, destructive steps last.
- **Evidence over assertion.** Claims about code, data or quality rest on something run or measured, not on reasoning alone.
- **Run ahead once agreed.** After approval, build without checking in at every step, then report back with evidence.
- **The written record stays true.** Update docs and tickets as decisions change, not at the end, so anyone can pick up the project from them.

## Deciding

- Present options, findings and next steps as a numbered list with a recommendation, so I can answer "do 1 and 3".
- When something is mine to decide (intent, taste, customers, ownership), ask. Answer what you can from code or data first. Use the agent's question tool if it has one (AskUserQuestion in Claude Code; request_user_input in Codex, which only offers it in Plan mode), in as few rounds as its limits allow. Otherwise ask in a numbered list with a recommendation, even if the agent's default is a single plain-text question.
- Human approval is an explicit yes to that specific action. Picking a fix doesn't approve pushing it.
- Take my decisions literally. Once I accept a risk, stop raising it.
- End a report with one recommended next action.

## Scope

- Stay inside the task. Side issues (stray bugs, pre-existing lint noise, unrelated improvements) become drafted tickets with a title and a line of why. File them only once I've said where they belong, and don't fix them inline.
- Never bundle unrelated changes into a commit or PR.
- When a decision changes a ticket or doc, offer to update it there and then. Re-read it first, because I edit by hand, and make a targeted edit that keeps my wording.

## Git

- Commit atomically while you work. **Never push until I ask.** Opening a PR I asked for counts as asking; after that, each push needs human approval.
- Don't commit to the main branch without human approval.

## Pull requests

- Review with the repo's review skill if it has one, otherwise the agent's built-in reviewer (the `code-review` skill in Claude Code, the `review-agent` skill in Codex), against an explicit target: a branch, a PR number or one PR in a stack. Give findings as one numbered list, out-of-scope ones separate, and fix only what I pick.
- Use the repo's PR and CI skills too, but these rules still decide when to push, post or write to a tracker.
- PR body: the problem and what the PR does in plain prose, how we checked it's safe (with measured numbers, such as test or eval results), and anything to do before merging last. Re-read the live body before every edit, because I hand-edit it. After pushing fixes, say if it's now wrong and propose a targeted edit.
- Reviewer comments, from bots or people: check each against the current code and give a numbered verdict (valid, false positive, judgement call) with evidence. Fix what I pick, and draft one reply per thread for me to post.
- CI: say whether the PR caused the failure or it's flaky or unrelated. Fix the PR's own failures; unrelated ones become drafted tickets.
- Conflicts: keep what both sides intended unless I say otherwise. If migrations clash, renumber the feature branch's, never main's.
- Someone else's PR: a short verdict and numbered `file:line` spots, each with a draft comment. Don't touch their branch.

## External systems

- Writes to trackers, docs, chat or feature flags need human approval.
- **Never post comments or reviews, approve, or resolve threads on the code host (GitHub, GitLab and so on).** Give me a draft and I'll post it myself. Opening a PR I asked for is fine; pushes to it and edits to its body follow the rules above.
- Production reads need human approval once per session; production writes need it every time. Nothing customers see happens without human approval.
