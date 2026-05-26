import { Reveal } from "./Reveal";

const groups = [
  {
    label: "what I reach for first",
    sub: "the trusted ones",
    items: ["TypeScript (always)", "React + Next.js", "TailwindCSS", "Python", "Three.js"],
  },
  {
    label: "what I'm fluent in",
    sub: "shipped real things with these",
    items: ["Node.js", "tRPC / GraphQL", "Prisma / Drizzle", "AWS / Cloudflare", "Docker", "GSAP"],
  },
  {
    label: "what I'm currently nerding on",
    sub: "evenings & weekends",
    items: [
      "Linux (slowly getting it)",
      "Computer Vision",
      "Local-first apps",
      "CRDT internals",
      "Electron (just for fun)",
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <div className="font-mono text-xs text-primary mb-3">// 02 — my toolbox</div>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The <span className="text-gradient">tools</span> I love
              <br />
              <span className="italic font-light text-muted-foreground">(this week)</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              I'm not religious about any of these. The right tool is the one that ships.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 120}>
              <div className="glass relative h-full rounded-2xl p-7 transition-all hover:border-primary/40 hover:-translate-y-1">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center font-mono text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {g.label}
                    </h3>
                    <p className="font-mono text-[10px] text-muted-foreground">{g.sub}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="h-px w-4 bg-primary/40" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
