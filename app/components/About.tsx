import { Reveal } from "./Reveal";

export function About() {
  const timeline = [
    { y: "now", t: "Freelancing from Bankura. Long walks, longer compile times." },
    { y: "2023", t: "Moved to India. Fullstack developed for a small startup. Left in 2025." },
    { y: "2022", t: "Interned at a fin-tech startup. Left with some knowledge in Java." },
    {
      y: "2021",
      t: "Built a real-time data layer in University. Learned what 'load' actually means.",
    },
    { y: "2020", t: "First production deploy. Took down the site within an hour. Still proud." },
    { y: "2012", t: "13yo me discovers View Source. Game over." },
  ];
  const facts = [
    "I think semicolons are pretty",
    "tabs vs spaces — tabs (fight me)",
    "I've rewritten my own portfolio over 30 times",
    "I have a new hobby everyweek - this week its sketching on my tab",
  ];
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              <div className="font-mono text-xs text-primary mb-3">// 03 — a bit about me</div>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Just a person <br />
                <span className="italic font-light text-muted-foreground">who really likes </span>
                <span className="text-gradient">building things.</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I started coding because I wanted to make a Neopets fan site. 6 years later I'm
                still chasing that same feeling — making something out of nothing and watching it
                work.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                When I'm not at the keyboard you'll find me reading at a cafe, losing my mind to online tetris, or arguing about coffee beans.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                unimportant facts
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {facts.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary/60">→</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <ol className="relative border-l border-border/60 pl-8">
            {timeline.map((step, i) => (
              <li key={step.y} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                </span>
                <div className="font-mono text-xs text-primary">{step.y}</div>
                <p className="mt-2 text-lg font-medium text-foreground">{step.t}</p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  chapter_{String(timeline.length - i).padStart(2, "0")}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
