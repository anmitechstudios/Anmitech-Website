import { motion, type Variants } from "framer-motion";
import type { ComponentProps } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type RevealProps = ComponentProps<typeof motion.div> & {
  variants?: Variants;
  amount?: number;
};

export const Reveal = ({
  variants = fadeUp,
  amount = 0.2,
  ...props
}: RevealProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount }}
    variants={variants}
    {...props}
  />
);

export { motion };
