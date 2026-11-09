# Project workflow skills

How I take a piece of work from idea to merged, as [Agent Skills](https://agentskills.io) that work in Claude Code, Codex and any other agent that reads `SKILL.md`. They were derived from about 290 of my past sessions: what I asked for, what I corrected and what I approved.

| Skill | Use it when | Leaves behind |
| --- | --- | --- |
| [project-scope](skills/project-scope/SKILL.md) | A ticket needs a plan, "what would it take…", an incident to explain, a plan to roast, a new project | An agreed scope written down, deferrals drafted as tickets, a go |
| [project-prototype](skills/project-prototype/SKILL.md) | The core claim is unproven: AI quality, a risky assumption, a UI that needs seeing | Measured evidence on real data, then a first mergeable slice or a revert |
| [project-implement](skills/project-implement/SKILL.md) | The work is agreed: "let's pick up ABC-123" | An approved design, built, verified and committed locally, ready for review |
| [project-reconcile](skills/project-reconcile/SKILL.md) | "Rationalise the project", "what's next?", a status update | Docs, milestones and tickets that match reality, and the next ticket |

The usual path is project-scope → project-prototype (optional) → project-implement, with project-reconcile at natural breaks. Code review, the PR, comments and CI are covered by the always-on rules and each agent's own review command, so there's no skill for them.

## Always-on rules

[global/AGENTS.md](global/AGENTS.md) holds the principles and rules for running a project that apply in every session, whether or not a skill loads: smallest slice first, prove the risky part first, numbered options with a recommendation, side issues as tickets, never push until asked, never post on the code host, and how to handle PRs and review comments. It's written as you, the person running the project ("never push until I ask"), so change any rule you'd put differently. General preferences (writing style, shell, spelling) belong in your own global instructions, not here. The skills assume these rules and restate only what a step depends on, plus one closing line of guardrails (pushing, posting, tracker and production writes, side issues) so a skill installed on its own stays safe.

## Install

Install the skills with the [skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add <owner>/<repo> -g -a claude-code codex
```

Use a local path instead of `<owner>/<repo>` to install from a checkout. The CLI keeps one copy in `~/.agents/skills`, which Codex reads, and links `~/.claude/skills` to it. Add more agents with `-a`. After changes, run `npx skills update -g` (or re-run `add` for a local path) and restart the agents.

The always-on rules are a one-off manual step, because the CLI only installs skills:

- **Claude Code:** add `@<path to this repo>/global/AGENTS.md` to `~/.claude/CLAUDE.md`. It reads the file live, so edits apply straight away.
- **Codex:** paste the file into `~/.codex/AGENTS.md`, which has no imports. Re-paste it when the rules change.

## Writing for every agent

- Each skill folder is self-contained. Installers copy skill folders one at a time, so a skill can only reference files inside its own folder (for example `project-scope/references/documents.md`).
- Describe the role, not one agent's tool. Where a name helps, give each agent's name, for example "the agent's code-review command (`/code-review` in Claude Code, `/review` in Codex)".
- Keep each skill under about 40 lines and each description under about 600 characters. Lead the description with the phrases I actually use.

## Decisions baked in

- **Generic:** no company, tracker or repo names. Each skill defers to a repo's own skills for tickets, PRs, reviews and evals.
- **Atomic commits as you go, never pushed until asked.**
- **Propose a design and wait for OK:** two lines for a small change, skipped when the design was already approved this session.
- **Side issues are drafted as tickets,** never fixed inline.
