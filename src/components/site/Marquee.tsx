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
    <section className="py-12 border-y border-border bg-surface/40 overflow-hidden relative">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="relative flex gap-12 whitespace-nowrap marquee-track">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-2xl md:text-3xl font-medium text-ink">
              {it}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
};
