import { Reveal } from "./Reveal";

const projects = [
  {
    n: "01",
    title: "CipherNest",
    tag: "Security tooling, but make it elegant",
    desc: "A lightweight security intelligence platform that monitors application logs, flags suspicious behavior in real time, and turns noisy alerts into incidents humans can actually understand.",
    stack: ["React", "Python", "PostgreSQL"],
    note: "another NDA, but ask me about it",
    color: "from-violet-400/20 to-fuchsia-500/10",
  },
  {
    n: "02",
    title: "Pulse Board",
    tag: "Internal tools, minus the pain",
    desc: "A full-stack operations dashboard that unifies project tracking, team metrics, and workflow automation into one place—because spreadsheets had their moment.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    note: "another NDA, sorry",
    color: "from-sky-400/20 to-indigo-500/10",
  },
  {
    n: "03",
    title: "AI Code Review Assistant",
    tag: "Side project · my favourite child",
    desc: "Catches bugs, spots security risks and gives your code the reality check you didnt know you needed.",
    stack: ["React", "Node.js"],
    note: "open source",
    href: "#", // replace with your project URL
    color: "from-violet-400/20 to-fuchsia-500/10",
  },
  {
    n: "04",
    title: "MacBook Pro Website Recreations",
    tag: "coolest animations and 3D stuff",
    desc: "built to capture Apple’s sleek style, smooth animations, and that unmistakable “I want one” feeling.",
    stack: ["Three.js", "React", "GSAP"],
    note: "open source",
    href: "#", // replace with your project URL
    color: "from-emerald-400/20 to-teal-500/10",
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="font-mono text-xs text-primary mb-3">// 01 — stuff I'm proud of</div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                A few <span className="italic font-light text-muted-foreground">things</span> I've
                built
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Not everything I've shipped — just the ones where the story is worth telling.
              </p>
            </div>
            <div className="hidden font-mono text-xs text-muted-foreground md:block">
              2022 → now
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${p.color} p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_oklch(0.85_0.18_175_/_0.3)]`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.n} / {p.tag}
                  </span>
                  <span className="opacity-0 transition-opacity group-hover:opacity-100 text-primary">
                    ↗
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-bold transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[10px]">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                  <span className="ml-auto italic text-muted-foreground/60">{p.note}</span>
                </div>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    View project ↗
                  </a>
                ) : null}
                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/20" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center font-mono text-xs text-muted-foreground/70">
            * there are also ~30 projects that died in my{" "}
            <code className="text-primary/70">~/projects/abandoned/</code> folder. RIP.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
