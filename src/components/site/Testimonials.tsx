import { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame, fadeUp, stagger, Reveal } from "./motion";

const testimonials = [
  {
    quote: "We were struggling to present ourselves professionally until we worked with Anmitech. Now our brand looks like it belongs with the leaders in our space.",
    name: "Malik Johnson",
    role: "Founder",
    company: "GrowthLoop",
    accent: "bg-primary/15",
    light: true,
  },
  {
    quote: "Before, we wasted time going back and forth with designers. Now we get clean, clear visuals on the first try — which lets us focus on what really matters.",
    name: "Marcus Lee",
    role: "Product Manager",
    company: "NovaTech",
    accent: "bg-yellow/20",
    light: true,
  },
  {
    quote: "It's not just about looking good. It's about showing up confidently every time. That's what Anmitech helps us do — and it's changed how our team feels about our brand.",
    name: "Bruno Rivera",
    role: "Brand Strategist",
    company: "Studio Hive",
    accent: "bg-blue/15",
    light: true,
  },
  {
    quote: "As a non-designer, I finally felt in control. The layout just made sense and looked incredible. They translated my vision into something I couldn't have imagined alone.",
    name: "Rui Hachi",
    role: "Founder",
    company: "Solo SaaS Builder",
    accent: "bg-primary/15",
    light: true,
  },
  {
    quote: "Anmitech helped us look polished without hiring a whole design team. Our brand has never felt this aligned across every touchpoint.",
    name: "Michael Kith",
    role: "Co-founder",
    company: "Indie App Co.",
    accent: "bg-yellow/20",
    light: true,
  },
  {
    quote: "Launching our site felt effortless. The design was clean, fast, and surprisingly flexible. We went live in days, not weeks — and we've had compliments ever since.",
    name: "Ayla Noor",
    role: "Founder",
    company: "Sunday Studio",
    accent: "bg-blue/15",
    light: true,
  },
  {
    quote: "The attention to detail was unlike anything we'd experienced with previous agencies. Every pixel had a reason. Every choice had a rationale.",
    name: "James Okafor",
    role: "CEO",
    company: "Stackfield",
    accent: "bg-primary/15",
    light: true,
  },
  {
    quote: "We handed Anmitech a rough idea and they handed back a fully formed brand system. The process was smooth, fast, and the output exceeded every expectation.",
    name: "Priya Menon",
    role: "Head of Marketing",
    company: "Lightbase",
    accent: "bg-yellow/20",
    light: true,
  },
];

/* Split into two rows — row 2 starts from the middle so they feel distinct */
const row1 = testimonials;
const row2 = [...testimonials.slice(4), ...testimonials.slice(0, 4)];

/* ── single card ─────────────────────────────────────────────────── */
const TestimonialCard = ({
  quote,
  name,
  role,
  company,
  accent,
}: (typeof testimonials)[0]) => (
  <div className={`flex flex-col gap-5 ${accent} rounded-2xl p-6 w-[300px] md:w-[360px] shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft`}>
    <span className="text-3xl text-ink/30 font-serif leading-none select-none">"</span>
    <p className="text-[14px] md:text-[15px] text-ink leading-relaxed flex-1">{quote}</p>
    <div className="flex items-center gap-3 pt-4 border-t border-ink/10">
      <div className="h-8 w-8 rounded-full bg-ink/10 flex items-center justify-center shrink-0">
        <span className="text-[11px] font-semibold text-ink/50">{name.charAt(0)}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-ink leading-tight">{name}</p>
        <p className="text-[11px] text-ink/50 mt-0.5">{role} · {company}</p>
      </div>
    </div>
  </div>
);

/* ── scrolling row ───────────────────────────────────────────────── */
const ScrollRow = ({
  cards,
  direction,
  baseDuration,
}: {
  cards: typeof testimonials;
  direction: "left" | "right";
  baseDuration: number; // seconds
}) => {
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<number | null>(null); // null = not yet initialised
  const speedRef = useRef(0);                 // current lerped speed (px/ms)
  const x = useMotionValue(0);

  // Keep ref in sync so the animation frame closure always sees latest value
  hoveredRef.current = hovered;

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    if (halfWidth === 0) return;

    // Initialise position once we know the track width
    if (posRef.current === null) {
      posRef.current = direction === "right" ? -halfWidth : 0;
    }

    // Normal speed in px/ms; slow to ¼ on hover
    const normalSpeed = halfWidth / (baseDuration * 1000);
    const targetSpeed = hoveredRef.current ? normalSpeed / 4 : normalSpeed;

    // Lerp toward target — gives smooth ease-in/ease-out on hover
    speedRef.current += (targetSpeed - speedRef.current) * 0.08;

    const sign = direction === "left" ? -1 : 1;
    posRef.current += sign * speedRef.current * delta;

    // Seamless wrap
    if (direction === "left" && posRef.current <= -halfWidth) posRef.current += halfWidth;
    if (direction === "right" && posRef.current >= 0) posRef.current -= halfWidth;

    x.set(posRef.current);
  });

  const doubled = [...cards, ...cards];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div ref={trackRef} className="flex gap-5 w-max" style={{ x }}>
        {doubled.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </motion.div>
    </div>
  );
};

/* ── section ─────────────────────────────────────────────────────── */
export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-[120px] overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <Reveal variants={stagger} className="mb-14 md:mb-20 text-center">
          <motion.div variants={fadeUp}>
            <span className="badge">Testimonials</span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-5">
              We love what we do,
              <br className="hidden md:block" />
              {" "}and they love the results.
            </h2>
          </motion.div>
        </Reveal>
      </div>

      {/* Scroll rows — full bleed */}
      <div className="relative">
        {/* Left + right fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex flex-col gap-5">
          {/* Row 1 — scrolls left */}
          <ScrollRow cards={row1} direction="left"  baseDuration={40} />
          {/* Row 2 — scrolls right (opposite) */}
          <ScrollRow cards={row2} direction="right" baseDuration={34} />
        </div>
      </div>
    </section>
  );
};
