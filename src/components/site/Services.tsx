import { motion, fadeUp, stagger, Reveal } from "./motion";


const services = [
  {
    title: "Brand & Identity",
    desc: "We help founders shape how their brand looks, sounds, and feels — then build a system that scales with them.",
    features: ["Logo Design", "Colour Palette", "Brand Guidelines", "Business Collateral", "Brand Voice", "Social Templates", "Mockups"],
    accent: "bg-primary/10",
    dot: "bg-primary",
    imgBg: "radial-gradient(ellipse at 20% 80%, hsl(19 88% 52% / 0.65) 0%, transparent 55%), radial-gradient(ellipse at 80% 15%, hsl(53 84% 61% / 0.5) 0%, transparent 50%), linear-gradient(135deg, #131110 0%, hsl(19 88% 52% / 0.25) 100%)",
  },
  {
    title: "Product Design",
    desc: "We create intuitive, scalable interfaces that not only look good — they guide users to the right outcomes.",
    features: ["UX Research", "Wireframing", "UI Design", "Prototyping", "Design Systems", "Accessibility", "Handoff"],
    accent: "bg-yellow/15",
    dot: "bg-yellow",
    imgBg: "radial-gradient(ellipse at 70% 30%, hsl(53 84% 61% / 0.65) 0%, transparent 55%), radial-gradient(ellipse at 15% 80%, hsl(19 88% 52% / 0.4) 0%, transparent 50%), linear-gradient(135deg, #131110 0%, hsl(53 84% 61% / 0.2) 100%)",
  },
  {
    title: "Web & Engineering",
    desc: "We build performant, accessible web platforms and native-feeling apps on modern stacks.",
    features: ["Web Development", "Mobile Apps", "AI Integration", "API Design", "Performance", "CMS Setup", "Deployment"],
    accent: "bg-blue/10",
    dot: "bg-blue",
    imgBg: "radial-gradient(ellipse at 80% 50%, hsl(202 89% 52% / 0.65) 0%, transparent 55%), radial-gradient(ellipse at 10% 20%, hsl(202 89% 52% / 0.35) 0%, transparent 45%), linear-gradient(135deg, #131110 0%, hsl(202 89% 52% / 0.2) 100%)",
  },
  {
    title: "Motion & Interaction",
    desc: "We bring interfaces and brands to life through animation — from subtle micro-interactions to full cinematic sequences.",
    features: ["Micro-animations", "Page Transitions", "Scroll Effects", "Lottie / GSAP", "Brand Motion", "Video Intros", "Interactive UI"],
    accent: "bg-primary/10",
    dot: "bg-primary",
    imgBg: "radial-gradient(ellipse at 50% 0%, hsl(19 88% 52% / 0.7) 0%, transparent 55%), radial-gradient(ellipse at 90% 90%, hsl(53 84% 61% / 0.45) 0%, transparent 45%), linear-gradient(180deg, #131110 0%, hsl(19 88% 52% / 0.2) 100%)",
  },
  {
    title: "Content & Copy",
    desc: "Words that pull their weight. We write clear, intentional copy for every touchpoint — from hero headlines to onboarding flows.",
    features: ["Web Copy", "UX Writing", "Brand Messaging", "Landing Pages", "Email Flows", "Case Studies", "Blog Content"],
    accent: "bg-yellow/15",
    dot: "bg-yellow",
    imgBg: "radial-gradient(ellipse at 30% 40%, hsl(53 84% 61% / 0.6) 0%, transparent 55%), radial-gradient(ellipse at 85% 80%, hsl(19 88% 52% / 0.35) 0%, transparent 45%), linear-gradient(135deg, #131110 0%, hsl(53 84% 61% / 0.2) 100%)",
  },
  {
    title: "Growth & Analytics",
    desc: "We build the data layer and growth loops that help you acquire, retain, and truly understand your users.",
    features: ["SEO Strategy", "Analytics Setup", "A/B Testing", "CRO", "Funnel Design", "Dashboards", "Reporting"],
    accent: "bg-blue/10",
    dot: "bg-blue",
    imgBg: "radial-gradient(ellipse at 60% 20%, hsl(202 89% 52% / 0.6) 0%, transparent 55%), radial-gradient(ellipse at 10% 85%, hsl(202 89% 52% / 0.4) 0%, transparent 45%), linear-gradient(135deg, #131110 0%, hsl(202 89% 52% / 0.2) 100%)",
  },
];

const loop = [...services, ...services];

export const Services = () => {
  return (
    <section id="services" className="py-[120px]">

      {/* Header */}
      <div className="container-px mx-auto max-w-7xl">
        <Reveal variants={stagger} className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <motion.div variants={fadeUp} className="md:col-span-5">
            <span className="badge">Services</span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-5">
              Capabilities,{" "}
              <br />
              considered.
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We pair sharp strategy with elegant craft. Each engagement is
              shaped around a single outcome — momentum for your business.
            </p>
          </motion.div>
        </Reveal>
      </div>

      {/* Scrolling cards — full bleed */}
      <div className="relative overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          className="flex gap-5 marquee-track scroll-pause"
          style={{ width: "max-content", animationDuration: "55s" }}
        >
          {loop.map((s, i) => (
            <motion.div
              key={i}
              className="shrink-0 flex flex-row rounded-2xl border border-border bg-background overflow-hidden cursor-default"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Card content — fixed width */}
              <div className="w-[320px] shrink-0 p-8 flex flex-col">
                <div className={`h-10 w-10 rounded-xl ${s.accent} mb-7`} />
                <h3 className="text-display text-2xl font-semibold text-ink mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {s.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-[11.5px] text-muted-foreground font-medium"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${s.dot} opacity-70`} />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image — slides in from the right */}
              <motion.div
                variants={{ rest: { width: 0 }, hover: { width: 200 } }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 overflow-hidden"
                style={{ minWidth: 0 }}
              >
                <motion.div
                  variants={{ rest: { opacity: 0, x: 20 }, hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="h-full w-[200px]"
                  style={{ background: s.imgBg }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom value prop strip */}
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-2xl border border-border bg-background px-8 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <p className="text-display text-xl md:text-2xl font-semibold text-ink">
              Great design, done simply — delivered fast.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            {["Flat project pricing", "Senior-led always", "Pause anytime"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
