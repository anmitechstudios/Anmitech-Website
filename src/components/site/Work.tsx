import { ArrowUpRight } from "lucide-react";
import { motion, fadeUp, stagger, Reveal } from "./motion";

const projects = [
  {
    name: "Northwind Finance",
    tag: "Fintech · Web Platform",
    desc: "A comprehensive digital banking platform redesigned from the ground up — faster onboarding, clearer data, and a brand that commands trust.",
    year: "2025",
    accent: "from-primary/20 via-primary/8 to-transparent",
    chip: "bg-primary",
    chipText: "text-primary",
    span: "md:col-span-7",
  },
  {
    name: "Atlas Health",
    tag: "Healthcare · Mobile App",
    desc: "Patient-facing mobile app that reduced appointment no-shows by 60% through smart reminders and frictionless rescheduling.",
    year: "2025",
    accent: "from-blue/20 via-blue/8 to-transparent",
    chip: "bg-blue",
    chipText: "text-blue",
    span: "md:col-span-5",
  },
  {
    name: "Lumen Studio",
    tag: "Brand · Identity System",
    desc: "Full identity system for a creative agency — logotype, colour system, motion language, and a comprehensive brand guidelines document.",
    year: "2024",
    accent: "from-yellow/30 via-yellow/10 to-transparent",
    chip: "bg-yellow",
    chipText: "text-yellow-foreground",
    span: "md:col-span-5",
  },
  {
    name: "Orbit AI",
    tag: "SaaS · Product Design",
    desc: "End-to-end product design for an AI writing tool — from positioning and IA through to a polished, conversion-optimised web app.",
    year: "2024",
    accent: "from-ink/12 via-ink/5 to-transparent",
    chip: "bg-ink",
    chipText: "text-ink-foreground",
    span: "md:col-span-7",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-[120px] bg-surface/30">
      <div className="container-px mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="badge">Selected Work</span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-5 max-w-2xl">
              Collaboration that{" "}
              <br className="hidden md:block" />
              moved the needle.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink shrink-0"
          >
            <span className="link-underline">Start your project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Asymmetric grid — row 1 */}
        <Reveal variants={stagger} className="grid md:grid-cols-12 gap-5 mb-5">
          {projects.slice(0, 2).map((p) => (
            <motion.a
              key={p.name}
              href="#contact"
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              className={`group ${p.span} rounded-3xl border border-border overflow-hidden bg-background hover:shadow-elegant transition-all duration-700 cursor-pointer`}
            >
              {/* Visual */}
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grain opacity-30" />
                <div className="absolute inset-6 md:inset-8 rounded-2xl bg-background/90 backdrop-blur-sm shadow-soft p-5 md:p-7 flex flex-col justify-between transition-transform duration-700 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${p.chip}`} />
                      <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{p.tag}</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground tabular-nums">{p.year}</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 w-2/3 rounded-full bg-ink/10" />
                    <div className="h-2 w-1/2 rounded-full bg-ink/10" />
                    <div className="h-2 w-3/4 rounded-full bg-ink/10" />
                  </div>
                  <div className={`h-6 w-20 rounded-full ${p.chip} opacity-20`} />
                </div>
              </div>
              {/* Footer */}
              <div className="p-6 md:p-7 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-display text-xl font-semibold text-ink">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-snug max-w-xs">{p.desc}</p>
                </div>
                <span className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-full border border-border text-ink transition-all duration-500 group-hover:bg-ink group-hover:text-ink-foreground group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </Reveal>

        {/* Row 2 — reversed asymmetry */}
        <Reveal variants={stagger} className="grid md:grid-cols-12 gap-5">
          {projects.slice(2, 4).map((p) => (
            <motion.a
              key={p.name}
              href="#contact"
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              className={`group ${p.span} rounded-3xl border border-border overflow-hidden bg-background hover:shadow-elegant transition-all duration-700 cursor-pointer`}
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grain opacity-30" />
                <div className="absolute inset-6 md:inset-8 rounded-2xl bg-background/90 backdrop-blur-sm shadow-soft p-5 md:p-7 flex flex-col justify-between transition-transform duration-700 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${p.chip}`} />
                      <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{p.tag}</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground tabular-nums">{p.year}</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 w-2/3 rounded-full bg-ink/10" />
                    <div className="h-2 w-1/2 rounded-full bg-ink/10" />
                    <div className="h-2 w-3/4 rounded-full bg-ink/10" />
                  </div>
                  <div className={`h-6 w-20 rounded-full ${p.chip} opacity-20`} />
                </div>
              </div>
              <div className="p-6 md:p-7 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-display text-xl font-semibold text-ink">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-snug max-w-xs">{p.desc}</p>
                </div>
                <span className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-full border border-border text-ink transition-all duration-500 group-hover:bg-ink group-hover:text-ink-foreground group-hover:rotate-45">
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
