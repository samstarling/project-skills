# project-skills

[Agent Skills](https://agentskills.io) for running software projects with a coding agent, from idea to a change ready for review. They work in Claude Code, Codex and any agent that reads `SKILL.md`, and were distilled from about 290 of my own sessions.

```sh
npx skills add samstarling/project-skills -g -a claude-code codex
```

Update with `npx skills update -g`, then restart your agents.

| Stage | Skill | Use it when |
| --- | --- | --- |
| 1 | [project-scope](skills/project-scope/SKILL.md) | A ticket needs a plan, "what would it take…", an incident to explain, a new project |
| 2 | [project-prototype](skills/project-prototype/SKILL.md) | The core claim is unproven: AI quality, a risky assumption, a UI that needs seeing |
| 3 | [project-implement](skills/project-implement/SKILL.md) | The work is agreed: "let's pick up ABC-123" |
| Any time | [project-reconcile](skills/project-reconcile/SKILL.md) | "Rationalise the project", "what's next?", a status update |

Prototyping is only for unproven ideas, and well-defined work can start at implement. Code review and the PR use your agent's own reviewer and PR tools.

## Principles

- **Smallest slice first.** Everything else, including side issues, becomes a drafted ticket.
- **Prove the risky part first,** on real data, before hardening anything.
- **Small PRs in dependency order:** schema and API first, UI on top, destructive steps last.
- **Evidence over assertion.** Claims rest on something run or measured.
- **Run ahead once agreed,** then report back with evidence.
- **The written record stays true,** so anyone can pick up the project from it.

The skills don't include general safety rules for pushing, posting or production access. Set those in your agent's permissions or your own instructions.

## Editing

- Each skill stands alone and carries the principles it needs.
- A skill can only reference files in its own folder, because installers copy folders one at a time.
- Name the role, not one agent's tool. Where a name helps, give each agent's.
- Keep skills under about 40 lines and descriptions under about 600 characters, leading with phrases people actually say.
- Run `npm run format` before committing.
