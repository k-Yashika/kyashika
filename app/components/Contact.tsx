import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative">
              <div className="font-mono text-xs text-primary mb-4">// 04 — let's chat</div>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Got something <br />
                <span className="text-gradient">cool to make?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
                I take on a couple of projects each quarter. Doesn't have to be fancy — just bring a
                problem you actually care about and we'll figure it out together.
              </p>
              <p className="mx-auto mt-3 max-w-lg font-mono text-xs text-muted-foreground/70">
                I reply to everything within ~24h. Even the spam, sometimes, by accident.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:kyashika.308@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-mono text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_50px_oklch(0.85_0.18_175_/_0.7)]"
                >
                  Email me
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="https://cal.com/k-yashika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-6 py-4 font-mono text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                >
                  or grab 20 mins on my calendar ↗
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-muted-foreground">
                {(() => {
                  const links: Record<'GitHub' | 'LinkedIn', string> = {
                    GitHub: 'https://github.com/k-Yashika',
                    LinkedIn: 'https://linkedin.com/in/k-yashika',
                  };

                  return (['GitHub', 'LinkedIn'] as Array<keyof typeof links>).map((s) => (
                    <a
                      key={s}
                      href={links[s]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      ↗ {s}
                    </a>
                  ));
                })()}
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 font-mono text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Yashika. handcoded · no trackers · no cookies</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            currently listening to: Noga Erez (shes great, really)
          </span>
        </footer>
      </div>
    </section>
  );
}
