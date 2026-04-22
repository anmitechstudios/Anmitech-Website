import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Shaping your digital future — one carefully crafted product at a time.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Studio</p>
              <a href="#about" className="block text-sm text-ink hover:text-primary transition-colors">About</a>
              <a href="#process" className="block text-sm text-ink hover:text-primary transition-colors">Process</a>
              <a href="#work" className="block text-sm text-ink hover:text-primary transition-colors">Work</a>
            </div>
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Connect</p>
              <a href="#" className="block text-sm text-ink hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="block text-sm text-ink hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="block text-sm text-ink hover:text-primary transition-colors">Dribbble</a>
            </div>
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
              <a href="mailto:hello@anmitech.studio" className="block text-sm text-ink hover:text-primary transition-colors">hello@anmitech.studio</a>
              <p className="text-sm text-muted-foreground">Lagos · Remote</p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anmitech Studios. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with care · Shaping your digital future.
          </p>
        </div>
      </div>
    </footer>
  );
};
