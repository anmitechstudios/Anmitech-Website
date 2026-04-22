import { ImageSlot } from "./ImageSlot";

export const BrandShowcase = () => {
  return (
    <section id="brand" className="relative py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
              ⟶ Brand in the wild
            </span>
            <h2 className="text-display text-4xl md:text-6xl font-semibold text-ink mt-4 max-w-2xl">
              The mark, applied.
            </h2>
          </div>
          <p className="md:max-w-sm text-base text-muted-foreground leading-relaxed">
            A peek at how the Anmitech identity lives across surfaces — from
            stationery to product UI.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Hero brand mockup — large left */}
          <ImageSlot
            label="Logo lockup mockup"
            hint="Hero brand shot · 16:10"
            aspect="aspect-[16/10]"
            tone="ink"
            className="col-span-12 md:col-span-8"
          />

          {/* Tall right */}
          <ImageSlot
            label="Logo on stationery"
            hint="Business card · 4:5"
            aspect="aspect-[4/5]"
            tone="primary"
            className="col-span-12 md:col-span-4"
          />

          {/* Trio */}
          <ImageSlot
            label="Mobile app icon"
            hint="App icon mockup"
            aspect="aspect-square"
            tone="yellow"
            className="col-span-6 md:col-span-4"
          />
          <ImageSlot
            label="Product UI screenshot"
            hint="Dashboard · 4:3"
            aspect="aspect-[4/3]"
            tone="surface"
            className="col-span-12 md:col-span-4 order-last md:order-none"
          />
          <ImageSlot
            label="Branded merch"
            hint="T-shirt / tote"
            aspect="aspect-square"
            tone="blue"
            className="col-span-6 md:col-span-4"
          />
        </div>
      </div>
    </section>
  );
};
