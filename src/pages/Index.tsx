import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Statement } from "@/components/site/Statement";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { BrandShowcase } from "@/components/site/BrandShowcase";
import { Benefits } from "@/components/site/Benefits";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { useEffect, useState } from "react";
import { Preloader } from "@/components/site/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />

      <AnimatePresence>
        {showTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 h-11 w-11 rounded-full bg-ink text-ink-foreground flex items-center justify-center shadow-elegant hover:bg-primary transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
      {/* Fixed bottom blur vignette */}
      <div className="fixed bottom-0 inset-x-0 h-20 pointer-events-none z-40 bg-gradient-to-t from-black/30 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_40%,transparent)]" />

      <main
        className="bg-background text-foreground"
        style={{ visibility: preloaderDone ? "visible" : "hidden" }}
      >
        <Header />
        <Hero />
        <Marquee />
        <Statement />
        <Services />
        <Work />
        <BrandShowcase />
        <Benefits />
        <Process />
        <Testimonials />
        <About />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
