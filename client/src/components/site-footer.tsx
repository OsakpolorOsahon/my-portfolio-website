import { SocialLinks } from "./social-links";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl mb-2">
              <a href="#home" className="text-primary">
                Osakpolor<span className="text-accent">Osahon</span>
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Creating exceptional digital experiences through clean code and creative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Dribbble</a></li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.dispatchEvent(new CustomEvent('open-resume-modal'))
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Osakpolor Osahon. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-400 mx-2">•</span>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
