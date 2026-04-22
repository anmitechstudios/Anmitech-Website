import { ImageIcon } from "lucide-react";

interface ImageSlotProps {
  /** Optional image source. When omitted a styled placeholder is shown. */
  src?: string;
  alt?: string;
  /** Short label shown on the placeholder, e.g. "Logo on business card" */
  label?: string;
  /** Helper hint shown under the label */
  hint?: string;
  /** Aspect ratio class — defaults to a balanced 4/3 */
  aspect?: string;
  /** Background tint class for the placeholder */
  tone?: "surface" | "ink" | "primary" | "yellow" | "blue";
  className?: string;
  /** Show the subtle dot grid */
  grain?: boolean;
  rounded?: string;
}

const toneMap: Record<NonNullable<ImageSlotProps["tone"]>, string> = {
  surface: "bg-surface text-ink",
  ink: "bg-ink text-ink-foreground",
  primary: "bg-primary/10 text-ink",
  yellow: "bg-yellow/20 text-ink",
  blue: "bg-blue/15 text-ink",
};

export const ImageSlot = ({
  src,
  alt = "",
  label = "Image slot",
  hint = "Drop a brand mockup here",
  aspect = "aspect-[4/3]",
  tone = "surface",
  className = "",
  grain = true,
  rounded = "rounded-2xl",
}: ImageSlotProps) => {
  return (
    <div
      className={`relative overflow-hidden ${rounded} border border-border ${toneMap[tone]} ${aspect} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          {grain && <div className="absolute inset-0 grain opacity-70" />}
          {/* Corner crosshairs */}
          <span className="absolute top-3 left-3 h-3 w-3 border-l border-t border-current opacity-40" />
          <span className="absolute top-3 right-3 h-3 w-3 border-r border-t border-current opacity-40" />
          <span className="absolute bottom-3 left-3 h-3 w-3 border-l border-b border-current opacity-40" />
          <span className="absolute bottom-3 right-3 h-3 w-3 border-r border-b border-current opacity-40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-current/30 mb-3">
              <ImageIcon className="h-4 w-4 opacity-70" strokeWidth={1.6} />
            </span>
            <p className="text-[13px] font-medium tracking-tight">{label}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] opacity-60">
              {hint}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
