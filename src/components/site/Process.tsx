import { motion, fadeUp, stagger, Reveal } from "./motion";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We get under the skin of your business — the audience, the ambition, the constraints.",
  },
  {
    n: "02",
    title: "Define",
    desc: "Shaping a sharp strategy and design direction grounded in evidence and instinct.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Iterative craft across brand, product, and motion — converging fast on the right answer.",
  },
  {
    n: "04",
    title: "Deliver",
    desc: "Engineered, tested, and shipped with measurable outcomes from day one.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ Process
            </span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-4">
              Four moves, one outcome.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end text-base md:text-lg text-muted-foreground leading-relaxed">
            A focused engagement, designed to remove ambiguity and create
            momentum across every sprint.
          </p>
        </div>

        <Reveal variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative p-7 rounded-2xl border border-border bg-background hover:bg-ink hover:text-ink-foreground transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-[11px] tabular-nums tracking-[0.18em] text-muted-foreground group-hover:text-ink-foreground/60">
                  {s.n}
                </span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <h3 className="text-display text-2xl font-semibold mb-3">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-ink-foreground/70">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
