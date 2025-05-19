import { Card } from "@/components/ui/card";
import { GitHubIcon } from "@/lib/icons";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden shadow-md bg-white dark:bg-gray-800">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-0 right-0 m-4">
            <Badge 
              variant="default" 
              className={`bg-${project.categoryColor} hover:bg-${project.categoryColor}/80`}
            >
              {project.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-blue-100/50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-none">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-between">
            <a 
              className="text-primary hover:text-blue-700 font-medium flex items-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coming Soon
            </a>
            <a 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
