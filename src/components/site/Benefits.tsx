import { Lightbulb, Layers, Award, TrendingUp, Puzzle, Target } from "lucide-react";
import { motion, fadeUp, stagger, Reveal } from "./motion";

const benefits = [
  {
    icon: Lightbulb,
    title: "Product-First Thinking",
    desc: "Every project starts by understanding the problem before proposing solutions.",
  },
  {
    icon: Layers,
    title: "Strategy + Design + Development",
    desc: "Everything needed to move from concept to launch under one roof.",
  },
  {
    icon: Award,
    title: "Senior-Led Execution",
    desc: "Work directly with experienced product builders from start to finish.",
  },
  {
    icon: TrendingUp,
    title: "Built for Scale",
    desc: "Products designed to grow alongside your business.",
  },
  {
    icon: Puzzle,
    title: "Flexible Engagement",
    desc: "From discovery workshops to full product partnerships.",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    desc: "Success is measured by business impact — not deliverables.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-[120px] bg-surface/30">
      <div className="container-px mx-auto max-w-7xl">

        {/* Header */}
        <Reveal variants={stagger} className="mb-14 md:mb-20">
          <motion.div variants={fadeUp} className="text-center">
            <span className="badge">Why us</span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-5">
              What makes the difference.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Building a product requires more than beautiful screens. Here's what you get when you partner with Anmitech
            </p>
          </motion.div>
        </Reveal>

        {/* 6-card grid */}
        <Reveal variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="group flex flex-col gap-5 rounded-2xl border border-border bg-background p-7 md:p-8 hover:border-primary/30 hover:shadow-soft transition-all duration-500"
              >
                <span className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-display text-lg font-semibold text-ink mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
