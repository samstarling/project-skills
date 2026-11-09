# project-skills

[Agent Skills](https://agentskills.io) for running software projects with a coding agent, from idea to merged PR. They work in Claude Code, Codex and any agent that reads `SKILL.md`, and were distilled from about 290 of my own sessions.

| Skill | Use it when |
| --- | --- |
| [project-scope](skills/project-scope/SKILL.md) | A ticket needs a plan, "what would it take…", an incident to explain, a new project |
| [project-prototype](skills/project-prototype/SKILL.md) | The core claim is unproven: AI quality, a risky assumption, a UI that needs seeing |
| [project-implement](skills/project-implement/SKILL.md) | The work is agreed: "let's pick up ABC-123" |
| [project-reconcile](skills/project-reconcile/SKILL.md) | "Rationalise the project", "what's next?", a status update |

## Always-on rules

[global/AGENTS.md](global/AGENTS.md) sets out the lifecycle, principles and rules that apply in every session, whether or not a skill loads. Code review and PRs have no skill; the rules cover them. They're written as you ("never push until I ask"), so change any you'd put differently, and keep general preferences such as writing style in your own global instructions.

## Install

```sh
npx skills add samstarling/project-skills -g -a claude-code codex
```

Update with `npx skills update -g`, then restart your agents. The rules are a manual step:

- **Claude Code:** clone this repo and add `@<path to your clone>/global/AGENTS.md` to `~/.claude/CLAUDE.md`.
- **Codex:** paste `global/AGENTS.md` into `~/.codex/AGENTS.md`, and re-paste it when it changes.

## Editing

- Skills assume the rules. Each ends with one guardrail line so it's safe installed on its own.
- A skill can only reference files in its own folder, because installers copy folders one at a time.
- Name the role, not one agent's tool. Where a name helps, give each agent's.
- Keep skills under about 40 lines and descriptions under about 600 characters, leading with phrases people actually say.
- Run `npm run format` before committing.
