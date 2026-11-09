---
name: project-prototype
description: Prove an approach with a disposable, end-to-end prototype on real data before hardening it into mergeable PRs, including eval loops when the risk is AI output quality. Use when the user says "prototype it", "build a thin skeleton", "run ahead and build a working prototype", "try the risky part first", "can we prove this works?", "can we prove the AI output is good enough?" or "how can I try this against production data?", or when scoping hands over work whose core claim is unproven.
---

# Prototyping

Prove the risky part before hardening anything: answer "does this approach work, and is it the right one?" quickly, with measured evidence rather than reasoning. Prototypes are labelled as such and disposable.

_Lifecycle: **project-scope** → **project-prototype** (if the core claim is unproven) → **project-implement** → your agent's code review and the PR, with **project-reconcile** at natural breaks._

1. **Propose the design and wait for OK.** In a few bullets: the claim being tested, the result that would prove or kill it, a time-box, what's real versus stubbed, the data source, and what it won't cover. "Run ahead" means build autonomously _after_ this OK. A "skeleton" wires up every moving part minimally.

2. **Test the riskiest assumption first,** by hand on one real example, then a few. Ask whether that validates enough before building tooling. "Revert, then make the smallest change knowing what we know now" is a normal outcome.

3. **Build fast;** it's disposable, so speed beats polish.

4. **Use real data:** read-only production queries, a copy of a real record, or realistic seeded data. No mocks.

5. **Make it visible.** For UI, show the user every state in the real page. For LLM output, show real examples. Expect many short feedback rounds.

6. **Interview for taste.** Show real outputs and have the user label them good or bad. The labels become eval cases.

7. **Eval loop for AI-quality claims:** turn the labelled outputs into a suite, take a repeated baseline, and hill-climb pass rate, cost and latency. Revert ideas the numbers don't justify.

8. **Keep it disposable:** its own branch, never merged. Side issues become drafted tickets.

9. **Report:** what works, the measured evidence, what didn't, open risks and next steps. Record the verdict (proven, disproven or pivot) and its evidence in the project doc or ticket, and note anything else it changes.

10. **Carve out mergeable work when asked.** Find the lowest-risk independent slice (often data collection, a behaviour-neutral skeleton, or schema and API before UI), list other salvageable parts, and draft tickets for the rest. Each slice goes to **project-implement**, carrying the numbers forward.

Don't keep throwaway scaffolding "just in case".
