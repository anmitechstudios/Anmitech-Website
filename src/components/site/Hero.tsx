import { ArrowUpRight, Star } from "lucide-react";
import { Reveal, motion, fadeUp, stagger } from "./motion";

const stats = [
  { k: "120+", v: "Products shipped", cardHover: "hover:bg-blue/10", numHover: "group-hover:text-blue" },
  { k: "08 yrs", v: "Crafting digital", cardHover: "hover:bg-yellow/10", numHover: "group-hover:text-yellow" },
  { k: "30+", v: "Global partners", cardHover: "hover:bg-primary/10", numHover: "group-hover:text-primary" },
  { k: "99%", v: "Client retention", cardHover: "hover:bg-blue/10", numHover: "group-hover:text-blue" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 md:pt-48 pb-24 md:pb-32 overflow-hidden dark:bg-[#0d0c0b]">
      {/* Ambient glows */}
      {/* <div className="pointer-events-none absolute inset-0 bg-gradient-radial-glow" /> */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute -top-24 -right-32 h-[500px] w-[500px] rounded-full bg-blue/10 blur-[100px] animate-float-slow" style={{ animationDelay: "3s" }} />

      <div className="container-px mx-auto max-w-5xl relative text-center">

        {/* Rating badge */}
        <Reveal variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm text-[12px] text-muted-foreground font-medium shadow-soft">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
              ))}
            </span>
            <span className="text-ink font-semibold">4.9</span>
            <span className="w-px h-3 bg-border" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new projects · 2026
          </span>
        </Reveal>

        {/* Headline */}
        <Reveal variants={fadeUp}>
          <h1
            className="text-display font-semibold text-ink mx-auto"
            style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)", lineHeight: 0.93 }}
          >
            Shaping your
            <br />
            <span className="relative inline-block">
              digital{" "}
              <span className="relative">
                future
                <svg
                  viewBox="0 0 300 18"
                  className="absolute left-0 -bottom-1 md:-bottom-3 w-full h-3 md:h-5 text-primary"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 14 C 80 2, 160 2, 298 12"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal variants={fadeUp}>
          <p className="mt-8 md:mt-10 text-base md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Design and engineering for those who move fast and scale faster.
            We shape bold brands, considered products, and software that works.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal variants={stagger}>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ink text-ink-foreground text-[13.5px] font-medium hover:bg-primary transition-colors duration-500 shadow-soft"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-background text-ink text-[13.5px] font-medium hover:border-ink transition-colors duration-500"
            >
              See our work
            </motion.a>
          </motion.div>
        </Reveal>

        {/* Trust line */}
        {/* <Reveal variants={fadeUp}>
          <p className="mt-6 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by founders and teams around the world
          </p>
        </Reveal> */}
      </div>

      {/* Stats strip — full width */}
      <div className="container-px mx-auto max-w-7xl mt-20 md:mt-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col gap-1.5 bg-background p-8 md:p-10 transition-colors duration-500 cursor-default ${s.cardHover}`}
            >
              <span className={`text-display text-3xl md:text-5xl font-semibold text-ink transition-colors duration-500 ${s.numHover}`}>
                {s.k}
              </span>
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {s.v}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
