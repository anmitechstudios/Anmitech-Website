import { Sparkles, Layers, Code2, Smartphone, Boxes, LineChart } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Brand & Identity",
    desc: "Distinctive visual systems and verbal identities engineered to scale.",
    accent: "bg-primary",
  },
  {
    icon: Layers,
    title: "Product Design",
    desc: "Interfaces with clarity, depth, and the kind of polish users feel.",
    accent: "bg-yellow",
  },
  {
    icon: Code2,
    title: "Web Engineering",
    desc: "Performant, accessible web platforms built on a modern stack.",
    accent: "bg-blue",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-feeling iOS & Android apps people return to every day.",
    accent: "bg-ink",
  },
  {
    icon: Boxes,
    title: "AI Integration",
    desc: "Practical, well-shaped AI features integrated into real products.",
    accent: "bg-primary",
  },
  {
    icon: LineChart,
    title: "Strategy & Ops",
    desc: "From discovery to launch — operating models that compound.",
    accent: "bg-yellow",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="md:col-span-5">
            <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ Services
            </span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-4">
              Capabilities, considered.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We pair sharp strategy with elegant craft. Each engagement is shaped
              around a single outcome — momentum for your business.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-surface"
              >
                <div className="flex items-center justify-between mb-12">
                  <span
                    className={`inline-flex items-center justify-center h-11 w-11 rounded-xl ${s.accent} text-ink-foreground transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    0{services.indexOf(s) + 1}
                  </span>
                </div>
                <h3 className="text-display text-xl md:text-2xl font-semibold text-ink mb-3">
                  {s.title}
                </h3>
                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
