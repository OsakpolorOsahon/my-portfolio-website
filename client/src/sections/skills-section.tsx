import { SkillCard } from "@/components/skill-card";
import { Code, Server, Palette } from "lucide-react";
import { 
  ReactIcon, 
  NodeJsIcon, 
  JavaScriptIcon, 
  Html5Icon, 
  CssIcon, 
  GitIcon 
} from "@/lib/icons";
import { motion } from "framer-motion";

export function SkillsSection() {
  const frontendSkills = [
    { name: "React", proficiency: 95 },
    { name: "JavaScript", proficiency: 90 },
    { name: "CSS/SCSS", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 }
  ];
  
  const backendSkills = [
    { name: "Node.js", proficiency: 90 },
    { name: "Express", proficiency: 85 },
    { name: "MongoDB", proficiency: 80 },
    { name: "PostgreSQL", proficiency: 75 }
  ];
  
  const designSkills = [
    { name: "Figma", proficiency: 85 },
    { name: "Git/GitHub", proficiency: 90 },
    { name: "Docker", proficiency: 70 },
    { name: "CI/CD", proficiency: 75 }
  ];
  
  const technologies = [
    { name: "React", icon: <ReactIcon className="text-3xl text-[#61DAFB]" /> },
    { name: "Node.js", icon: <NodeJsIcon className="text-3xl text-[#339933]" /> },
    { name: "JavaScript", icon: <JavaScriptIcon className="text-3xl text-[#F7DF1E]" /> },
    { name: "HTML5", icon: <Html5Icon className="text-3xl text-[#E34F26]" /> },
    { name: "CSS3", icon: <CssIcon className="text-3xl text-[#1572B6]" /> },
    { name: "Git", icon: <GitIcon className="text-3xl text-[#F05032]" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Skills & Expertise</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical toolkit has been refined over years of practical experience, continuous learning, and staying updated with industry trends.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants}>
            <SkillCard
              title="Frontend Development"
              icon={<Code className="text-xl" />}
              iconClass="bg-gray-200 dark:bg-gray-800/70 text-primary"
              skills={frontendSkills}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SkillCard
              title="Backend Development"
              icon={<Server className="text-xl" />}
              iconClass="bg-gray-300 dark:bg-gray-700/70 text-secondary"
              skills={backendSkills}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SkillCard
              title="Design & Tools"
              icon={<Palette className="text-xl" />}
              iconClass="bg-gray-200 dark:bg-gray-800/70 text-accent"
              skills={designSkills}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.name}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md mb-3">
                {tech.icon}
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
