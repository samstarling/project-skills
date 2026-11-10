// Checks each skill against the limits in the README's Editing section.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, normalize } from "node:path";

const MAX_DESCRIPTION = 600;
const MAX_LINES = 40;
const errors = [];

for (const dir of readdirSync("skills")) {
  const root = join("skills", dir);
  if (!statSync(root).isDirectory()) continue;
  const fail = (message) => errors.push(`${root}: ${message}`);

  const file = join(root, "SKILL.md");
  if (!existsSync(file)) {
    fail("missing SKILL.md");
    continue;
  }
  const text = readFileSync(file, "utf8");
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatter) {
    fail("missing frontmatter");
    continue;
  }
  const field = (key) =>
    frontmatter[1].match(new RegExp(`^${key}: (.*)$`, "m"))?.[1];

  const name = field("name");
  if (name !== dir) fail(`name "${name}" doesn't match the folder`);

  const description = field("description");
  if (!description) fail("missing description");
  else {
    if (description.length > MAX_DESCRIPTION)
      fail(
        `description is ${description.length} characters (max ${MAX_DESCRIPTION})`,
      );
    // Some installers reject anything that looks like an XML tag.
    if (/<[^>\s]+>/.test(description))
      fail("description contains an angle-bracket placeholder");
  }

  const lines = text.trimEnd().split("\n").length;
  if (lines > MAX_LINES) fail(`SKILL.md is ${lines} lines (max ${MAX_LINES})`);

  // Installers copy one folder at a time, so every referenced file must be inside it.
  for (const md of readdirSync(root, { recursive: true }).filter((f) =>
    f.endsWith(".md"),
  )) {
    const body = readFileSync(join(root, md), "utf8");
    const refs = [
      ...body.matchAll(/`([\w./-]+\/[\w.-]+\.\w+)`|\]\(([^)#\s]+)\)/g),
    ]
      .map((m) => m[1] ?? m[2])
      .filter((ref) => !/^[a-z]+:/.test(ref));
    for (const ref of refs) {
      const target = normalize(join(root, ref));
      if (!target.startsWith(root + "/") || !existsSync(target))
        fail(`${md} references ${ref}, which isn't in the skill's folder`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Skills OK");
