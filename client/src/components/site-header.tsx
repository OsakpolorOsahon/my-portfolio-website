import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, MenuIcon, XIcon, DownloadIcon } from "lucide-react";
import { useResumeModal } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className="relative text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors nav-link"
      onClick={onClick}
    >
      {label}
    </a>
  );
}

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { openResumeModal } = useResumeModal();
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-xl">
            <a href="#home" className="text-primary">
              Jane<span className="text-accent">Doe</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#home" label="Home" />
              <NavLink href="#about" label="About" />
              <NavLink href="#skills" label="Skills" />
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#contact" label="Contact" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
            
            <Button
              variant="default"
              onClick={openResumeModal}
              className="hidden md:inline-flex"
            >
              Resume <DownloadIcon className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle mobile menu"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="#home" label="Home" onClick={closeMobileMenu} />
              <NavLink href="#about" label="About" onClick={closeMobileMenu} />
              <NavLink href="#skills" label="Skills" onClick={closeMobileMenu} />
              <NavLink href="#projects" label="Projects" onClick={closeMobileMenu} />
              <NavLink href="#contact" label="Contact" onClick={closeMobileMenu} />
              <a
                href="#resume"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  openResumeModal();
                }}
              >
                Resume <DownloadIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
