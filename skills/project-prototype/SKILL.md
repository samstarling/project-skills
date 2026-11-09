---
name: project-prototype
description: Prove an approach with a disposable, end-to-end prototype on real data before hardening it into mergeable PRs, including eval loops for prompt, agent and LLM-output quality. Use when the user says "prototype it", "build a thin skeleton", "run ahead and build a working prototype", "try the risky part first", "create evals and hill climb", "can we prove this works?" or "how can I try this against production data?", or when scoping hands over work whose core claim is unproven.
---

# Prototyping

Answer "does this approach work, and is it the right one?" quickly, with evidence. Prototypes are labelled as such and disposable.

1. **Propose the design and wait for OK.** In a few bullets: branch, architecture, what's real versus stubbed, the data source, what it won't cover. "Run ahead" means build autonomously *after* this OK. A "skeleton" wires up every moving part minimally.

2. **Test the riskiest assumption first,** by hand on one real example, then a few. Ask whether that validates enough before building tooling. "Revert, then make the smallest change knowing what we know now" is a normal outcome.

3. **Build fast.** Check for a library or vendor pattern before writing mechanism. Fan independent pieces out to subagents.

4. **Use real data:** permitted read-only production queries, a copy of a real record, or realistic seeded data. No mocks.

5. **Make it visible.** For UI, use the user's running dev server and screenshot every state in the real page. For LLM output, show real examples. Expect many short feedback rounds; change only what's asked.

6. **Interview for taste.** Show real outputs and have the user label them good or bad. The labels become eval cases.

7. **Eval loops for prompt, agent or LLM-output work.** Use the repo's eval tooling if it has some. Never put eval questions, answers or fixtures in the prompt being scored.
   - **Fixing one failure:** capture the case, confirm it fails (3–5 runs if flaky), make a *generic* fix, confirm it passes, and check related cases for regressions. Then test generalisation with a hidden case written in a separate session that never saw the fix. Only run it and report pass or fail; never read or tune against it.
   - **Improving a suite:** build it from real labelled outputs, take a repeated baseline, then hill-climb pass rate, cost and latency against a held-out split. Read raw outputs, not just scores, and revert ideas the numbers don't justify.

8. **Agree a finish line** for long runs (evals, model checking, device runs) up front. Cut to a subset rather than running overnight.

9. **Commit on the prototype branch** so ideas revert cleanly. Keep scratch scripts and dumps out of the repo. No PR unless asked.

10. **Report:** what works, the measured evidence, what didn't, open risks, and numbered next steps. Note anything that changes the project's docs or tickets.

11. **Carve out mergeable work when asked.** Find the lowest-risk independent slice (often data collection, a behaviour-neutral skeleton, or schema and API before UI), list other salvageable parts, and draft tickets for the rest. Each slice goes to **project-implement** on a fresh branch, carrying the numbers forward for the PR.

Don't trust one eval run or the aggregate score alone. Don't keep throwaway scaffolding "just in case".

**If no always-on rules are installed:** commit locally, but don't push, post on the code host, or write to trackers or production without human approval. Side issues become drafted tickets, not fixes.
