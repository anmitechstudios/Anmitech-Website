import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMPANY = "Anmitech Studios";
const SUBTEXT = "Shaping your digital future";

const letterVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.25 + i * 0.04,
    },
  }),
};

const subtextVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.2 },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const exitVariants = {
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
};

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink overflow-hidden"
          variants={exitVariants}
          exit="exit"
        >
          {/* Orange progress line */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[3px] bg-primary origin-left"
            variants={lineVariants}
            initial="hidden"
            animate="show"
          />

          <div className="text-center select-none px-6">
            {/* Company name — letter by letter */}
            <div
              className="overflow-hidden"
              aria-label={COMPANY}
            >
              <div className="flex flex-wrap justify-center">
                {COMPANY.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="show"
                    className="inline-block font-headline font-semibold text-ink-foreground leading-none tracking-tight"
                    style={{
                      fontSize: "clamp(2.5rem, 8vw, 6rem)",
                      whiteSpace: char === " " ? "pre" : "normal",
                    }}
                  >
                    {char === " " ? " " : char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Subtext */}
            <motion.p
              variants={subtextVariants}
              initial="hidden"
              animate="show"
              className="mt-4 text-sm tracking-[0.25em] uppercase text-primary font-medium font-sans"
            >
              {SUBTEXT}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
