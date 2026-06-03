import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion, fadeUp, stagger, Reveal } from "./motion";

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Most projects begin within one to two weeks after discovery and planning.",
  },
  {
    q: "What types of companies do you work with?",
    a: "We primarily work with startups, SaaS companies, AI businesses, and organizations building digital products.",
  },
  {
    q: "Can you help validate an idea before development?",
    a: "Yes. Product discovery and validation are often the first step in our process.",
  },
  {
    q: "Do you offer development as well as design?",
    a: "Absolutely. We provide end-to-end product support from strategy and design through development and launch.",
  },
  {
    q: "Can you build AI-powered products?",
    a: "Yes. We help teams identify opportunities for AI integration and design experiences that create real business value.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We collaborate with clients globally and operate remotely when needed.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-border">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-6 py-6 text-left group"
    >
      <span className="text-[15px] md:text-base font-medium text-ink group-hover:text-primary transition-colors duration-300">
        {q}
      </span>
      <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full border border-border text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-300">
        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq" className="py-[120px] bg-surface/30">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">

          {/* Left — heading */}
          <Reveal variants={fadeUp} className="md:col-span-4">
            <span className="badge">FAQ</span>
            <h2 className="text-display text-4xl md:text-4xl font-semibold text-ink mt-5 leading-[1.05]">
              Frequently asked
              <br />
              questions.
            </h2>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Still have something on your mind? Email us at{" "}
              <a
                href="mailto:info@anmitechstudios.com"
                className="text-ink hover:text-primary transition-colors duration-300 link-underline"
              >
                info@anmitechstudios.com
              </a>
            </p>
          </Reveal>

          {/* Right — accordion */}
          <Reveal variants={stagger} className="md:col-span-7 md:col-start-6">
            <div className="border-t border-border">
              {faqs.map((item, i) => (
                <FAQItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  isOpen={openIdx === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
