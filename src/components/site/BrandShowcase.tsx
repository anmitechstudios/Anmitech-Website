import { motion, fadeUp, stagger, Reveal } from "./motion";
import fullLogoWhite from "@/images/full logo white.svg";
import fullLogoOrange from "@/images/full logo orange.svg";
import iconOrange from "@/images/icon orange.svg";
import iconWhite from "@/images/icon white.svg";
import iconBlue from "@/images/icon blue.svg";
import elementOrange from "@/images/element orange.svg";
import elementWhite from "@/images/element white.svg";
import elementYellow from "@/images/element yellow.svg";
import wordmarkWhite from "@/images/wordmark white.svg";
import wordmarkOrange from "@/images/wordmark orange.svg";
import maderaImg from "@/images/Madera.jpg";

/* ── individual mockup card ─────────────────────────────────────── */
interface CardDef {
  bg: string;
  asset: string;
  alt: string;
  aspect: string;
  imgSize?: string;
  cover?: boolean;
}

const MockupCard = ({ bg, asset, alt, aspect, imgSize = "w-1/2", cover }: CardDef) => (
  <div className={`relative ${bg} ${aspect} rounded-2xl overflow-hidden flex items-center justify-center shrink-0`}>
    {cover ? (
      <img src={asset} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    ) : (
      <img src={asset} alt={alt} className={`${imgSize} object-contain`} />
    )}
  </div>
);

/* ── column definitions ─────────────────────────────────────────── */
const col1: CardDef[] = [
  { bg: "bg-ink",        asset: fullLogoWhite,  alt: "Full logo white",   aspect: "aspect-[4/5]" },
  { bg: "bg-primary/10", asset: iconOrange,     alt: "Icon orange",       aspect: "aspect-square" },
  { bg: "",              asset: maderaImg,      alt: "Madera",            aspect: "aspect-[4/5]",  cover: true },
  { bg: "bg-yellow/20",  asset: elementOrange,  alt: "Element orange",    aspect: "aspect-[4/5]" },
  { bg: "bg-blue/10",    asset: iconBlue,       alt: "Icon blue",         aspect: "aspect-square" },
];

const col2: CardDef[] = [
  { bg: "bg-background border border-border", asset: fullLogoOrange, alt: "Full logo orange",  aspect: "aspect-[4/5]" },
  { bg: "bg-ink",                             asset: wordmarkWhite,  alt: "Wordmark white",    aspect: "aspect-[4/3]", imgSize: "w-3/5" },
  { bg: "",                                   asset: maderaImg,      alt: "Madera",            aspect: "aspect-[4/5]", cover: true },
  { bg: "bg-primary/10",                      asset: iconOrange,     alt: "Icon orange",       aspect: "aspect-[4/5]" },
  { bg: "bg-yellow/20",                       asset: elementYellow,  alt: "Element yellow",    aspect: "aspect-square" },
  { bg: "bg-ink",                             asset: elementWhite,   alt: "Element white",     aspect: "aspect-[4/5]" },
];

const col3: CardDef[] = [
  { bg: "bg-primary/10",                      asset: fullLogoOrange, alt: "Full logo orange",  aspect: "aspect-[4/5]" },
  { bg: "bg-ink",                             asset: iconWhite,      alt: "Icon white",        aspect: "aspect-square" },
  { bg: "",                                   asset: maderaImg,      alt: "Madera",            aspect: "aspect-[4/5]", cover: true },
  { bg: "bg-surface border border-border",    asset: wordmarkOrange, alt: "Wordmark orange",   aspect: "aspect-[4/5]", imgSize: "w-3/5" },
  { bg: "bg-yellow/20",                       asset: iconOrange,     alt: "Icon orange",       aspect: "aspect-square" },
];

/* ── scrolling column ───────────────────────────────────────────── */
interface ScrollColProps {
  cards: CardDef[];
  direction: "up" | "down";
  duration: string;
}

const ScrollCol = ({ cards, direction, duration }: ScrollColProps) => {
  const doubled = [...cards, ...cards];
  return (
    <div className="overflow-hidden flex-1">
      <div
        className="flex flex-col gap-4 scroll-pause"
        style={{ animation: `scroll-${direction} ${duration} linear infinite` }}
      >
        {doubled.map((card, i) => (
          <MockupCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

/* ── section ────────────────────────────────────────────────────── */
export const BrandShowcase = () => {
  return (
    <section id="brand" className="py-28 md:py-36 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">

        {/* Header */}
        <Reveal variants={stagger} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <motion.div variants={fadeUp}>
            <span className="badge">Brand in the wild</span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-5">
              The mark, applied.
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="md:max-w-sm text-base text-muted-foreground leading-relaxed">
            A peek at how the Anmitech identity lives across surfaces — from
            stationery to product UI.
          </motion.p>
        </Reveal>
      </div>

      {/* Scroll columns — full bleed for edge-to-edge feel */}
      <div className="relative h-[680px] md:h-[780px]">
        {/* Top + bottom fade masks */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-background to-transparent z-10" />

        <div className="container-px mx-auto max-w-7xl h-full flex gap-4 md:gap-5">
          {/* Col 1 — scroll up */}
          <ScrollCol cards={col1} direction="up"   duration="30s" />
          {/* Col 2 — scroll down (opposite) */}
          <ScrollCol cards={col2} direction="down" duration="24s" />
          {/* Col 3 — scroll up */}
          <ScrollCol cards={col3} direction="up"   duration="38s" />
        </div>
      </div>
    </section>
  );
};
