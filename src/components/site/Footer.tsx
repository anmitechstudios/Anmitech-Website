import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaXTwitter, FaInstagram, FaDribbble, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "./motion";
import fullLogoWhite from "@/images/full logo white.svg";
import iconOrange from "@/images/icon orange.svg";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  { label: "X",         href: "https://x.com",            Icon: FaXTwitter    },
  { label: "Instagram", href: "https://instagram.com",     Icon: FaInstagram   },
  { label: "Dribbble",  href: "https://dribbble.com",      Icon: FaDribbble    },
  { label: "LinkedIn",  href: "https://linkedin.com",      Icon: FaLinkedinIn  },
];

function useLiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 10_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export const Footer = () => {
  const time = useLiveTime();

  return (
    <footer className="relative overflow-hidden bg-[#0d0c0b]">
      {/* Ambient colour blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-blue/10 blur-[120px]" />

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }} />

      {/* ── Top bar ─────────────────────────────────── */}
      <div className="relative border-b border-white/10">
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-14">
          <a href="#top" className="inline-flex items-center">
            <img src={fullLogoWhite} alt="Anmitech Studios" className="h-7 w-auto opacity-90" />
          </a>
          <span className="text-[12px] text-white/35 tracking-[0.14em] font-medium tabular-nums">
            Lagos (NG)&nbsp;&nbsp;{time}
          </span>
          <a
            href="#contact"
            className="group hidden md:inline-flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white/80 transition-colors duration-300 tracking-[0.1em] uppercase"
          >
            Start a project
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* ── Main body ───────────────────────────────── */}
      <div className="relative container-px mx-auto max-w-7xl pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="grid md:grid-cols-12 gap-16 md:gap-10">

          {/* Left — contact + tagline */}
          <div className="md:col-span-6 flex flex-col justify-between gap-14">
            {/* Email CTA */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/30 mb-5">
                Get in touch
              </p>
              <motion.a
                href="mailto:info@anmitechstudios.com"
                whileHover={{ x: 4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="group inline-flex items-end gap-3 text-white/80 hover:text-white transition-colors duration-300"
              >
                <span
                  className="font-headline font-semibold leading-none"
                  style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em" }}
                >
                  info@anmitechstudios.com
                </span>
                <ArrowUpRight
                  className="h-6 w-6 md:h-8 md:w-8 shrink-0 mb-0.5 text-primary transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </motion.a>
              <motion.a
                href="tel:+2349030308662"
                whileHover={{ x: 4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="group inline-flex items-end gap-3 text-white/50 hover:text-white transition-colors duration-300 mt-3"
              >
                <span
                  className="font-headline font-semibold leading-none"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 2rem)", letterSpacing: "-0.03em" }}
                >
                  +234 903 030 8662
                </span>
                <ArrowUpRight
                  className="h-5 w-5 md:h-6 md:w-6 shrink-0 mb-0.5 text-primary/60 transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </motion.a>
              <div className="mt-5 h-px w-full bg-white/10" />
            </div>

            {/* Quote / statement */}
            <div className="max-w-sm">
              <span className="text-4xl text-primary/60 font-serif leading-none select-none">"</span>
              <p className="text-[15px] md:text-base text-white/50 leading-relaxed -mt-2">
                Your next project deserves bold design and engineering that
                actually moves your business foward.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={iconOrange} alt="Anmitech" className="h-5 w-5 object-contain" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white/70 leading-tight">Anmitech Studios</p>
                  <p className="text-[11px] text-white/30 mt-0.5">Digital Product Studio · Lagos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — large nav links */}
          <nav className="md:col-span-5 md:col-start-8 flex flex-col justify-between">
            <div>
              {NAV.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                  className="group flex items-center justify-between py-4 border-b border-white/10 text-white/60 hover:text-white transition-colors duration-300"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span
                    className="font-headline font-semibold"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    {link.label}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-white/20 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </motion.a>
              ))}

              {/* CTA link */}
              <motion.a
                href="#contact"
                whileHover={{ x: 6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="group flex items-center justify-between py-4 text-primary hover:text-primary-glow transition-colors duration-300"
              >
                <span
                  className="font-headline font-semibold"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
                >
                  Start a project
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </motion.a>
            </div>
          </nav>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────── */}
      <div className="relative border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-5">
          <div className="flex items-center gap-6">
            <p className="text-[13px] text-white/25">
              © {new Date().getFullYear()} Anmitech Studios
            </p>
            <a href="#" className="text-[13px] text-white/25 hover:text-white/50 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-white/25 hover:text-white/50 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white/80 transition-colors duration-300"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Giant wordmark ──────────────────────────── */}
      <div className="relative overflow-hidden pointer-events-none select-none -mt-2" aria-hidden>
        {/* Line 1 — full white, left-flush */}
        <p
          className="font-headline font-semibold text-white leading-[0.88] whitespace-nowrap"
          style={{ fontSize: "clamp(3.5rem, 13vw, 13rem)", letterSpacing: "-0.04em" }}
        >
          ANMITECH
        </p>
        {/* Line 2 — dimmed, shifted right, bleeds off the edge */}
        <p
          className="font-headline font-semibold text-white/25 leading-[0.88] whitespace-nowrap -mt-[0.05em] mb-[1rem] text-right"
          style={{ fontSize: "clamp(3.5rem, 13vw, 13rem)", letterSpacing: "-0.04em" }}
        >
          STUDIOS
        </p>
      </div>
    </footer>
  );
};
