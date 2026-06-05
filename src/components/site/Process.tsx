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
    <section id="process" className="py-[120px]">
      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <span className="badge">Process</span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-5">
              Four moves, one outcome.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end text-base md:text-lg text-muted-foreground leading-relaxed">
             A 4-step approach designed to remove uncertainty and create momentum

          </p>
        </div>

        {/* Steps */}
        <Reveal variants={stagger} className="grid md:grid-cols-4 gap-4 md:gap-5 mt-14 md:mt-20">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="relative p-7 md:p-8 rounded-2xl border border-border bg-background group overflow-hidden hover:border-primary/40 hover:bg-surface/50 transition-all duration-500"
            >
              {/* Background step number */}
              <span className="text-display text-6xl md:text-7xl font-semibold text-ink/10 group-hover:text-primary/20 transition-colors duration-500 leading-none select-none">
                {s.n}
              </span>

              {/* Content on top */}
              <h3 className="text-display text-2xl font-semibold text-ink mt-4 mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>

              {/* Orange dot */}
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-6" />
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
