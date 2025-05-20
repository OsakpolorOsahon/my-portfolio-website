import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/typewriter";
import { SocialLinks } from "@/components/social-links";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="gradient-bg w-full h-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-base font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">Hello, I'm</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Osakpolor Osahon
            </h1>
            <div className="text-xl md:text-2xl font-medium text-primary mb-6">
              <Typewriter
                phrases={[
                  "Full Stack Developer",
                  "Software Developer",
                  "UI/UX Designer",
                  "Problem Solver",
                  "Tech Enthusiast"
                ]}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl">
              I create exceptional digital experiences through clean code and creative solutions.
              Specializing in modern web technologies with an eye for detail.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#projects">
                  View My Work <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild onClick={() => document.dispatchEvent(new CustomEvent('open-resume-modal'))}>
                <a href="#">Download CV</a>
              </Button>
            </div>
            
            <div className="mt-10">
              <SocialLinks />
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block relative mt-10 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <img 
                src="src/assets/models/luca-bravo-9l_326FISzk-unsplash.jpg" 
                alt="Programming Illustration" 
                className="rounded-2xl shadow-xl max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Open to Work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDownIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </a>
      </div>
    </section>
  );
}
