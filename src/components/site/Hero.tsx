import { ArrowUpRight, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-glow" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-yellow/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -top-20 -right-32 h-[480px] w-[480px] rounded-full bg-blue/10 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="flex items-center gap-2 mb-8 reveal" style={{ animationDelay: "0.05s" }}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-[12.5px] uppercase tracking-[0.18em] text-muted-foreground">
            Available for new projects · 2026
          </span>
        </div>

        <h1
          className="text-display text-[clamp(2.75rem,8vw,7.5rem)] font-semibold text-ink reveal"
          style={{ animationDelay: "0.15s" }}
        >
          Shaping your
          <br />
          <span className="relative inline-block">
            digital{" "}
            <span className="relative">
              future
              <svg
                viewBox="0 0 300 18"
                className="absolute left-0 -bottom-2 md:-bottom-4 w-full h-3 md:h-4 text-primary"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14 C 80 2, 160 2, 298 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </span>
        </h1>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-end">
          <p
            className="md:col-span-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl reveal"
            style={{ animationDelay: "0.3s" }}
          >
            Anmitech Studios is a digital product studio crafting bold brands,
            considered interfaces, and software that moves businesses forward.
          </p>

          <div
            className="md:col-span-6 flex flex-wrap items-center gap-4 md:justify-end reveal"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-ink-foreground text-sm font-medium hover:bg-primary transition-all duration-500 shadow-soft"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-ink text-sm font-medium hover:border-ink transition-colors duration-500"
            >
              See our work
              <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 border-t border-border pt-10 reveal"
          style={{ animationDelay: "0.55s" }}
        >
          {[
            { k: "120+", v: "Products shipped" },
            { k: "08 yrs", v: "Crafting digital" },
            { k: "30+", v: "Global partners" },
            { k: "99%", v: "Client retention" },
          ].map((s) => (
            <div key={s.v} className="flex flex-col gap-1">
              <span className="text-display text-3xl md:text-4xl font-semibold text-ink">
                {s.k}
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
