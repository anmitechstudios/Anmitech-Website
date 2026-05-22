import { ImageSlot } from "./ImageSlot";
import { motion, fadeUp, stagger, Reveal } from "./motion";

const principles = [
  "Senior-led, always.",
  "No handoffs, no fluff.",
  "Craft over speed.",
  "Outcomes, not deliverables.",
];

export const About = () => {
  return (
    <section id="about" className="py-[120px] bg-surface/30">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left */}
          <Reveal variants={stagger} className="md:col-span-5 space-y-10">
            <motion.div variants={fadeUp}>
              <span className="badge">Studio</span>
              <h2 className="text-display text-4xl md:text-5xl font-semibold text-ink mt-5 leading-[1.05]">
                A small studio with a long memory of what good looks like.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp}>
              <ImageSlot
                label="Studio / team photo"
                hint="Portrait · 4:5"
                aspect="aspect-[4/5]"
                tone="ink"
              />
            </motion.div>
          </Reveal>

          {/* Right */}
          <Reveal variants={stagger} className="md:col-span-6 md:col-start-7 space-y-8">
            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We&apos;re a multidisciplinary team of designers, engineers, and
              strategists collaborating with founders and growing companies. Our
              practice sits at the intersection of brand, product, and
              technology — quiet on the surface, deeply considered underneath.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Every project is led by a senior partner. From first conversation
              to final launch, the same people who understand your vision are the
              ones building it.
            </motion.p>

            {/* Divider + stats */}
            <motion.div variants={fadeUp} className="border-t border-border pt-8 mt-8">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-display text-2xl md:text-3xl font-semibold text-ink">Lagos · Remote</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2">
                    Headquarters
                  </p>
                </div>
                <div>
                  <p className="text-display text-2xl md:text-3xl font-semibold text-ink">Worldwide</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2">
                    Working with
                  </p>
                </div>
              </div>

              {/* Principles list */}
              <div className="space-y-3">
                {principles.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-ink">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
