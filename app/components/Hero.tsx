import { Nav } from "./Nav";
import { Scene3D } from "./ui/Scene3D";

export function Hero() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
  return (
    <>
    <Nav />
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-blob" />
      <div
        className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-32 pb-20 lg:grid-cols-2">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            it's {time} in Kolkata — probably making coffee
          </div>

          <div>
            <p className="font-mono text-sm text-muted-foreground mb-4">hey, I'm Yashika 👋</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              I build <span className="text-gradient">weird,</span>
              <br />
              <span className="italic font-light text-muted-foreground">wonderful</span> things
              <br />
              for the web.
            </h1>
          </div>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Fullstack dev with a soft spot for shaders, late-night refactors, and apps that feel a
            little bit alive. Currently freelancing — and looking for projects with{" "}
            <span className="text-foreground italic">interesting</span> problems hiding inside.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.85_0.18_175_/_0.6)]"
            >
              <span>see what I've made</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              or just say hi ↗
            </a>
          </div>

          <div className="flex gap-8 border-t border-border/50 pt-7 font-mono text-xs text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-foreground">6yrs</div>
              <div>writing code (badly, then well)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">∞</div>
              <div>cups of espresso</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">3am</div>
              <div>my best ideas show up</div>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] w-full lg:h-[600px]">
          <Scene3D />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-muted-foreground/70 max-w-[180px] text-right">
            ↑ this little guy is procedurally distorted. drag your cursor around — he reacts.
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground/70">
        scroll ↓ — there's more
      </div>
    </section>
    </>
  );
}
