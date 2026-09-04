import Section from "./Section";

const CORE = [
  { name: "HTML & CSS", note: "Flexbox, Grid, responsive layouts" },
  { name: "JavaScript", note: "DOM, events, working with APIs" },
  { name: "TypeScript", note: "Typed components and app logic" },
  { name: "React", note: "Component-driven UIs" },
  { name: "Next.js", note: "App router, API routes" },
  { name: "Node.js", note: "Server-side JavaScript" },
  { name: "Tailwind CSS", note: "Utility-first styling" },
  { name: "jQuery", note: "DOM work on legacy stacks" },
  { name: "Git & GitHub", note: "Version control, collaboration" },
];

const EXPANDING = [
  { name: "Postgres & Drizzle ORM", note: "Schema, queries, migrations" },
  { name: "better-auth", note: "Auth flows for a real app" },
  { name: "Vercel AI SDK", note: "Streaming a Claude-powered chat" },
];

function SkillCard({ name, note }: { name: string; note: string }) {
  return (
    <div className="group rounded-xl border border-line bg-paper-2/60 p-4 transition-colors hover:border-accent">
      <p className="font-display text-[15px] font-medium text-ink">{name}</p>
      <p className="mt-1 text-xs text-ink/60">{note}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" index="02" label="Skills">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Toolkit
      </h2>
      <p className="mt-4 max-w-xl text-[15px] text-ink/70">
        About two years of writing code, with one instinct carried over from
        four years of writing for people: make it easy to follow.
      </p>

      <div className="mt-10">
        <p className="mb-4 font-mono text-[11px] tracking-[0.15em] text-ink/50 uppercase">
          Core
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {CORE.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="mb-4 font-mono text-[11px] tracking-[0.15em] text-ink/50 uppercase">
          Picked up shipping the Ask Me Anything project
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {EXPANDING.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </Section>
  );
}
