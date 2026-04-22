const items = [
  "Brand Systems",
  "Product Design",
  "Web Engineering",
  "Mobile Apps",
  "AI Integration",
  "Design Ops",
  "Motion & 3D",
  "Strategy",
];

export const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <section className="py-10 border-y border-border bg-surface/60 overflow-hidden">
      <div className="relative">
        <div className="flex gap-12 whitespace-nowrap marquee-track">
          {loop.map((it, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <span className="text-display text-2xl md:text-3xl font-medium text-ink/80">
                {it}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  );
};
