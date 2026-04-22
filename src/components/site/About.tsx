import { ImageSlot } from "./ImageSlot";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-surface/70">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
                ⟶ Studio
              </span>
              <h2 className="text-display text-4xl md:text-5xl font-semibold text-ink mt-4 leading-[1.05]">
                A small studio with a long memory of what good looks like.
              </h2>
            </div>
            <ImageSlot
              label="Studio / team photo"
              hint="Portrait · 4:5"
              aspect="aspect-[4/5]"
              tone="ink"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We&apos;re a multidisciplinary team of designers, engineers, and
              strategists collaborating with founders and growing companies. Our
              practice sits at the intersection of brand, product, and
              technology — quiet on the surface, deeply considered underneath.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Every project is led by a senior partner. No handoffs, no fluff —
              just the work, made well.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-display text-3xl font-semibold text-ink">Lagos · Remote</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2">
                  Headquarters
                </p>
              </div>
              <div>
                <p className="text-display text-3xl font-semibold text-ink">Worldwide</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2">
                  Working with
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
