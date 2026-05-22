import { Clock, Zap, Award, TrendingUp, Fingerprint, LayoutDashboard } from "lucide-react";
import { motion, fadeUp, stagger, Reveal } from "./motion";

const benefits = [
  {
    icon: Clock,
    title: "Fixed project pricing",
    desc: "Pay a clear, agreed fee — no hourly surprises, no scope creep invoices. Predictable cost from day one.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    desc: "We move quickly without cutting corners. Most deliverables ship within days, not weeks.",
  },
  {
    icon: Award,
    title: "Senior-led quality",
    desc: "Every project is directed by a senior partner. Your work never gets handed to a junior and forgotten.",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    desc: "Systems, not one-offs. Everything we build is designed to grow with your team and product.",
  },
  {
    icon: Fingerprint,
    title: "Uniquely yours",
    desc: "Every project is crafted from scratch to reflect your brand's personality. No recycled templates.",
  },
  {
    icon: LayoutDashboard,
    title: "Full transparency",
    desc: "You see the work as it evolves — shared files, open feedback loops, no black-box delivery.",
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
              Stress-free, senior-quality digital work. Here's what you get
              when you partner with Anmitech.
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
