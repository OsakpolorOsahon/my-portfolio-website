import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ResumeModal } from "@/components/resume-modal";
import { HeroSection } from "@/sections/hero-section";
import { AboutSection } from "@/sections/about-section";
import { SkillsSection } from "@/sections/skills-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ContactSection } from "@/sections/contact-section";
import { Button } from "@/components/ui/button";
import { ChevronUpIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <div ref={mainRef} className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <SiteFooter />
      <ResumeModal />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="icon"
              aria-label="Scroll to top"
              onClick={scrollToTop}
              className="rounded-full shadow-lg"
            >
              <ChevronUpIcon className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
