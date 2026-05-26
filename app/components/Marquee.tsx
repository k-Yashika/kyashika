export function Marquee() {
  const items = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Three.js",
    "Rust",
    "GraphQL",
    "Docker",
    "AWS",
    "Tailwind",
    "Prisma",
  ];
  const all = [...items, ...items];
  return (
    <div className="relative border-y border-border/40 bg-card/30 py-6 overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 font-mono text-2xl text-muted-foreground/60 md:text-4xl">
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            {t}
            <span className="text-primary/60">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
