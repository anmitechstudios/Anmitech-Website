import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion, fadeUp, stagger, Reveal } from "./motion";

const faqs = [
  {
    q: "How fast will I receive the work?",
    a: "Most design deliverables land within 3–5 business days. For larger scopes like full brand systems or web builds, we'll agree a clear timeline before we start — and we stick to it.",
  },
  {
    q: "How does onboarding work?",
    a: "After an initial call we send a short brief document. Once that's signed off, we kick off within 48 hours. No lengthy discovery phases — we get to work fast.",
  },
  {
    q: "Who works on my project?",
    a: "A senior partner leads every engagement from first call to final delivery. Your project is never handed to a junior or outsourced — you always know who you're working with.",
  },
  {
    q: "Is there a limit to how many revisions I can request?",
    a: "We work in collaborative feedback loops, not round-based revision counts. We iterate until it's right — most projects land in two to three rounds naturally.",
  },
  {
    q: "What if I need to pause or stop the engagement?",
    a: "We work on project-based agreements. If circumstances change, we'll wrap up the current sprint cleanly and hand over all work in progress with full source files.",
  },
  {
    q: "Can you handle full websites or complex apps?",
    a: "Yes — web builds and product design are core capabilities. We scope these as structured projects with defined milestones and clear deliverables at each stage.",
  },
  {
    q: "What tools do you use?",
    a: "Figma for design, React and modern web stacks for engineering, Framer for marketing sites where appropriate. We share all source files and hand off in formats your team can use.",
  },
  {
    q: "How do I get started?",
    a: "Hit the 'Start a project' button, or email hello@anmitech.studio. We'll schedule a call, understand your goals, and come back with a clear proposal within 48 hours.",
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
                href="mailto:hello@anmitech.studio"
                className="text-ink hover:text-primary transition-colors duration-300 link-underline"
              >
                hello@anmitech.studio
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
