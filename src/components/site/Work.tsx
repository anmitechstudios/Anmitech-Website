import { ArrowUpRight } from "lucide-react";
import { motion, fadeUp, stagger, Reveal } from "./motion";

const projects = [
  {
    name: "Northwind Finance",
    tag: "Fintech · Web Platform",
    year: "2025",
    accent: "from-primary/15 to-primary/0",
    chip: "bg-primary",
  },
  {
    name: "Atlas Health",
    tag: "Healthcare · Mobile App",
    year: "2025",
    accent: "from-blue/20 to-blue/0",
    chip: "bg-blue",
  },
  {
    name: "Lumen Studio",
    tag: "Brand · Identity System",
    year: "2024",
    accent: "from-yellow/30 to-yellow/0",
    chip: "bg-yellow",
  },
  {
    name: "Orbit AI",
    tag: "SaaS · Product Design",
    year: "2024",
    accent: "from-ink/15 to-ink/0",
    chip: "bg-ink",
  },
];

export const Work = () => {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-surface/70">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ Selected Work
            </span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-4 max-w-2xl">
              A few things we&apos;ve been building.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
          >
            <span className="link-underline">View full archive</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <Reveal variants={stagger} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p) => (
            <motion.a
              key={p.name}
              href="#contact"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background hover:shadow-elegant transition-all duration-700"
            >
              <div
                className={`relative aspect-[5/4] md:aspect-[16/11] bg-gradient-to-br ${p.accent} overflow-hidden`}
              >
                {/* Composition mockup */}
                <div className="absolute inset-0 grain opacity-60" />
                <div className="absolute inset-8 md:inset-12 rounded-2xl bg-background/90 backdrop-blur shadow-soft p-6 md:p-8 flex flex-col justify-between transition-transform duration-700 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${p.chip}`} />
                      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {p.tag}
                      </span>
                    </div>
                    <span className="text-[11px] text-muted-foreground tabular-nums">
                      {p.year}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="h-2 w-16 rounded-full bg-ink/10" />
                      <div className={`h-2 w-8 rounded-full ${p.chip} opacity-70`} />
                    </div>
                    <div className="h-2 w-3/4 rounded-full bg-ink/10" />
                    <div className="h-2 w-1/2 rounded-full bg-ink/10" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 md:p-7">
                <div>
                  <h3 className="text-display text-xl md:text-2xl font-semibold text-ink">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.tag}</p>
                </div>
                <span className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-border text-ink transition-all duration-500 group-hover:bg-ink group-hover:text-ink-foreground group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
