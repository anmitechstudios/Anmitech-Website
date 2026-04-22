import { ArrowUpRight } from "lucide-react";
import { motion } from "./motion";

export const CTA = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-ink text-ink-foreground p-10 md:p-20"
        >
          {/* glow */}
          <div className="pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-primary/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-[320px] w-[320px] rounded-full bg-blue/20 blur-3xl" />

          <div className="relative grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <span className="text-[11.5px] uppercase tracking-[0.22em] text-ink-foreground/60">
                ⟶ Let&apos;s build
              </span>
              <h2 className="text-display text-4xl md:text-7xl font-semibold mt-4 leading-[1.02]">
                Have a project<br />
                in mind?
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg text-ink-foreground/70 leading-relaxed">
                Tell us where you&apos;re heading. We&apos;ll come back within
                two business days with thoughts, references, and a way forward.
              </p>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <motion.a
                href="mailto:hello@anmitech.studio"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-glow transition-colors duration-500 shadow-glow"
              >
                hello@anmitech.studio
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
