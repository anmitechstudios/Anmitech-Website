interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 group ${className ?? ""}`}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-ink overflow-hidden">
        <span className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative font-display font-bold text-ink-foreground text-sm tracking-tight">A</span>
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
      </span>
      <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
        Anmitech<span className="text-muted-foreground font-normal"> Studios</span>
      </span>
    </a>
  );
};
