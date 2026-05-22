import { motion } from "./motion";

export const Statement = () => {
  return (
    <section className="py-24 md:py-32 border-y border-border bg-background overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-display font-semibold text-ink"
          style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)", lineHeight: 1.05 }}
        >
          We help brands show up with{" "}
          <span className="text-muted-foreground">clarity,</span>{" "}
          <span className="text-muted-foreground">confidence,</span>{" "}
          and design that{" "}
          <span className="relative inline-block">
            actually works
            <svg
              viewBox="0 0 300 14"
              className="absolute left-0 -bottom-1 md:-bottom-2 w-full h-2 md:h-3 text-primary"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 11 C 80 2, 200 2, 298 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            From early-stage startups to growing businesses — we bring the same
            level of craft and strategic thinking to every engagement.
          </p>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink shrink-0"
          >
            <span className="link-underline">Explore our services</span>
            <svg
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 13L13 3M13 3H6M13 3V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
