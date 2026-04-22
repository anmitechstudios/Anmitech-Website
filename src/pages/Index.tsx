import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { BrandShowcase } from "@/components/site/BrandShowcase";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Anmitech Studios — Shaping your digital future";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Anmitech Studios is a digital product studio crafting bold brands, considered interfaces, and software that moves businesses forward.",
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <BrandShowcase />
      <Process />
      <About />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
