---
name: project-review
description: Take finished work through code review, the pull request, reviewer comments, CI and conflicts, and review teammates' PRs. Use when the user asks to review the diff or open a PR, address or assess PR comments ("WDYT about <reviewer>'s comment?"), resolve conflicts on a PR, asks why CI is failing on a PR, asks to update or slim the PR description, asks "is this ready?", or links a teammate's PR asking if it's sensible or what to comment on.
---

# Reviewing

Get finished work reviewed, opened and through feedback. The user picks every fix and posts every reply. Use the repo's own PR, review and CI skills where they exist, but this skill still decides when to push, post or write to a tracker.

_Lifecycle: **project-scope** → **project-prototype** (if the core claim is unproven) → **project-implement** → **project-review**, with **project-reconcile** at natural breaks._

1. **Review the diff** with the repo's review skill if it has one, otherwise the agent's built-in reviewer (the `code-review` skill in Claude Code, the `review-agent` skill in Codex), against an explicit target: a branch, a PR number or one PR in a stack. If the user moves to open a PR and nothing has reviewed the current diff, ask whether to review first.

2. **Give findings as one numbered list,** out-of-scope ones separate, and fix only what the user picks, as new commits. Out-of-scope keepers become drafted tickets.

3. **Open the PR when asked,** with the repo's PR skill or the code host's CLI, with the body in a file. Body: the problem and what the PR does in plain prose, how we checked it's safe (with measured numbers, such as test or eval results), and anything to do before merging last. For UI, include before and after screenshots. Asking for the PR approves its first push; every later push needs human approval, and picking a fix doesn't approve pushing it.

4. **Keep the description true.** Re-read the live body before every edit, because the user hand-edits it. After pushing fixes, say if it's now wrong and propose a targeted edit.

5. **Assess reviewer comments,** from bots or people, against the current code. Give a numbered verdict per comment (valid, false positive, judgement call) with evidence. Fix what the user picks, and draft one reply per thread ("Fixed in `<sha>`: …") for them to post.

6. **CI:** say whether the PR caused the failure or it's flaky or unrelated. Fix the PR's own failures; unrelated ones become drafted tickets.

7. **Conflicts:** keep what both sides intended unless told otherwise. If migrations clash, renumber the feature branch's, never main's.

**Someone else's PR:** read the diff and ticket, test the user's suspicion first, and give a short verdict plus numbered `file:line` spots, each with a draft comment. Don't touch their branch.

Never post comments or reviews, approve, or resolve threads on the code host. Give the user drafts.
