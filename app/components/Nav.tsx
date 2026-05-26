export function Nav() {
  const links = [
    { href: "#work", label: "work" },
    { href: "#stack", label: "tools" },
    { href: "#about", label: "me" },
    { href: "#contact", label: "say hi" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-primary">/</span>yashika.dev
        </a>
        <ul className="hidden gap-7 font-mono text-xs text-muted-foreground md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <span className="text-primary/60">0{i + 1}.</span>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-mono text-xs rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_oklch(0.85_0.18_175_/_0.5)]"
        >
          Let's talk →
        </a>
      </nav>
    </header>
  );
}
