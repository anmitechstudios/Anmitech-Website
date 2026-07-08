import { ArrowUpRight } from "lucide-react";
import { motion, fadeUp, stagger, Reveal } from "./motion";
import isecImg from "../../images/ISEC.png";
import kotrellImg from "../../images/Kotrell.png"
import nkwadoImg from "../../images/Nkwado 2.png"
import nkwadoImg2 from "../../images/Nkwado.png"

const projects = [
  {
    name: "International Sustainable Energy and Construction Ltd",
    tag: "Construction · Website",
    desc: "A leading engineering, construction, and energy development company delivering sustainable infrastructure, industrial projects, and innovative energy solutions across Africa.",
    year: "2025",
    accent: "from-blue/20 via-blue/8 to-transparent",
    chip: "bg-blue",
    chipText: "text-blue",
    span: "md:col-span-7",
    image: isecImg,
    link: "https://isec.com.ng",
  },
  {
    name: "Nkwado",
    tag: "E-commerce · Web Design",
    desc: "End-to-end web design for a commerce and delivery platform, focused on creating a secure, user-friendly experience that connects buyers, sellers, and delivery partners.",
    year: "2026",
    accent: "from-green/30 via-green/10 to-transparent",
    chip: "bg-green",
    chipText: "text-green-foreground",
    span: "md:col-span-5",
    image: nkwadoImg,
    link: "https://nkwado.com/",
  },
  {
    name: "Nkwado",
    tag: "Brand · Identity System",
    desc: "Full identity system for nkwado — logotype, colour system, motion language, and a comprehensive brand guidelines document.",
    year: "2026",
    accent: "from-green/30 via-green/10 to-transparent",
    chip: "bg-green",
    chipText: "text-green-foreground",
    span: "md:col-span-5",
    image: nkwadoImg2,
    link: "https://nkwado.com/",
  },
  {
    name: "Kotrell",
    tag: "Entertainment · Website",
    desc: "An artist-focused website experience crafted to connect audiences with Kotrell's music, performances, and creative journey through bold storytelling and interactive design.",
    year: "2026",
    accent: "from-yellow/30 via-yellow/10 to-transparent",
    chip: "bg-ink",
    chipText: "text-ink-foreground",
    span: "md:col-span-7",
    image: kotrellImg,
    link: "https://kotrell.com",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-[120px] bg-surface/30">
      <div className="container-px mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="badge">Selected Work</span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-5 max-w-2xl">
              Products built to solve{" "}
              <br className="hidden md:block" />
              real business problems.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink shrink-0"
          >
            <span className="link-underline">Start your project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Asymmetric grid — row 1 */}
        <Reveal variants={stagger} className="grid md:grid-cols-12 gap-5 mb-5">
          {projects.slice(0, 2).map((p) => (
            <motion.a
              key={p.name}
              href={p.link || "#"}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              className={`group ${p.span} rounded-3xl border border-border overflow-hidden bg-background hover:shadow-elegant transition-all duration-700 cursor-pointer`}
            >
              {/* Visual */}
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grain opacity-30" />
                {p.image ? (
                  <div className="absolute inset-6 md:inset-8 rounded-2xl overflow-hidden shadow-soft transition-transform duration-700 group-hover:-translate-y-2">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top" />
                  </div>
                ) : (
                  <div className="absolute inset-6 md:inset-8 rounded-2xl bg-background/90 backdrop-blur-sm shadow-soft p-5 md:p-7 flex flex-col justify-between transition-transform duration-700 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${p.chip}`} />

                      </div>
                      <span className="text-[11px] text-muted-foreground tabular-nums">{p.year}</span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="h-2 w-2/3 rounded-full bg-ink/10" />
                      <div className="h-2 w-1/2 rounded-full bg-ink/10" />
                      <div className="h-2 w-3/4 rounded-full bg-ink/10" />
                    </div>
                    <div className={`h-6 w-20 rounded-full ${p.chip} opacity-20`} />
                  </div>
                )}
              </div>
              {/* Footer */}
              <div className="p-6 md:p-7 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{p.tag}</span>
                  <h3 className="text-display text-xl font-semibold text-ink">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-snug">{p.desc}</p>
                </div>
                <span className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-full border border-border text-ink transition-all duration-500 group-hover:bg-ink group-hover:text-ink-foreground group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </Reveal>

        {/* Row 2 — reversed asymmetry */}
        <Reveal variants={stagger} className="grid md:grid-cols-12 gap-5">
          {projects.slice(2, 4).map((p) => (
            <motion.a
              key={p.name}
              href={p.link || "#"}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              className={`group ${p.span} rounded-3xl border border-border overflow-hidden bg-background hover:shadow-elegant transition-all duration-700 cursor-pointer`}
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grain opacity-30" />
                {p.image ? (
                  <div className="absolute inset-6 md:inset-8 rounded-2xl overflow-hidden shadow-soft transition-transform duration-700 group-hover:-translate-y-2">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top" />
                  </div>
                ) : (
                  <div className="absolute inset-6 md:inset-8 rounded-2xl bg-background/90 backdrop-blur-sm shadow-soft p-5 md:p-7 flex flex-col justify-between transition-transform duration-700 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${p.chip}`} />

                      </div>
                      <span className="text-[11px] text-muted-foreground tabular-nums">{p.year}</span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="h-2 w-2/3 rounded-full bg-ink/10" />
                      <div className="h-2 w-1/2 rounded-full bg-ink/10" />
                      <div className="h-2 w-3/4 rounded-full bg-ink/10" />
                    </div>
                    <div className={`h-6 w-20 rounded-full ${p.chip} opacity-20`} />
                  </div>
                )}
              </div>
              <div className="p-6 md:p-7 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{p.tag}</span>
                  <h3 className="text-display text-xl font-semibold text-ink">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-snug">{p.desc}</p>
                </div>
                <span className="shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-full border border-border text-ink transition-all duration-500 group-hover:bg-ink group-hover:text-ink-foreground group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
