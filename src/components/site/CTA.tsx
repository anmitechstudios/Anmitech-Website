import { ArrowUpRight } from "lucide-react";
import { motion } from "./motion";
import elementWhite from "@/images/element white.svg";

export const CTA = () => {
  return (
    <section id="contact" className="py-[120px]">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-ink text-ink-foreground p-12 md:p-20 lg:p-24"
        >
          {/* Glows */}
          <div className="pointer-events-none absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-[400px] w-[400px] rounded-full bg-blue/15 blur-[80px]" />

          {/* Decorative element */}
          <img
            src={elementWhite}
            alt=""
            aria-hidden
            className="absolute top-8 right-8 md:top-12 md:right-12 w-24 md:w-32 opacity-10 pointer-events-none select-none"
          />

          {/* Content grid */}
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-foreground/20 text-[11px] uppercase tracking-[0.2em] text-ink-foreground/60 font-medium mb-6">
                Let&apos;s build
              </span>
              <h2 className="text-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95]">
                Have a project
                <br />
                in mind?
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg text-ink-foreground/70 leading-relaxed">
                Tell us where you&apos;re heading. We&apos;ll come back within
                two business days with thoughts, references, and a way forward.
              </p>
            </div>

            {/* Right */}
            <div className="md:col-span-4 md:col-start-9 flex flex-col items-start md:items-end gap-4">
              <motion.a
                href="mailto:hello@anmitech.studio"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-glow transition-colors duration-500 shadow-glow"
              >
                hello@anmitech.studio
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
              <a
                href="#contact"
                className="text-sm text-ink-foreground/50 hover:text-ink-foreground transition-colors duration-300 link-underline"
              >
                or book a call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
