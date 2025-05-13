import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { useResumeModal } from "@/lib/hooks";
import { motion } from "framer-motion";

export function AboutSection() {
  const { openResumeModal } = useResumeModal();
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">About Me</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            className="mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="My workspace" 
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working with a diverse range of clients and technologies. My journey began with a deep curiosity about how digital products are built, which led me to pursue a degree in Computer Science.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I specialize in creating responsive, accessible, and user-friendly websites and applications. My approach combines technical expertise with a keen eye for design, ensuring that every project not only functions flawlessly but also provides an exceptional user experience.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <span className="font-medium">BSc in Computer Science</span>
                    <p className="text-sm">Stanford University, 2018</p>
                  </li>
                  <li>
                    <span className="font-medium">Web Development Certification</span>
                    <p className="text-sm">Frontend Masters, 2019</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <span className="font-medium">Senior Developer</span>
                    <p className="text-sm">TechCorp Inc., 2020-Present</p>
                  </li>
                  <li>
                    <span className="font-medium">Web Developer</span>
                    <p className="text-sm">DigitalSolutions LLC, 2018-2020</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <Button onClick={openResumeModal} size="lg">
              Download Full Resume <DownloadIcon className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
