import { useState } from "react";
import { ProjectCard, ProjectProps } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const allProjects: ProjectProps[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A full-featured online shopping experience with cart functionality, payment processing, and order management.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "E-commerce",
      categoryColor: "primary",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      projectUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/janedoe/ecommerce"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Data visualization platform with real-time updates, customizable widgets, and exportable reports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Dashboard",
      categoryColor: "secondary",
      technologies: ["Vue.js", "Express", "D3.js", "Firebase"],
      projectUrl: "https://example.com/dashboard",
      githubUrl: "https://github.com/janedoe/dashboard"
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      description: "Mobile application to track workouts, set goals, and monitor progress with detailed statistics.",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Mobile App",
      categoryColor: "accent",
      technologies: ["React Native", "GraphQL", "AWS", "Redux"],
      projectUrl: "https://example.com/fitness",
      githubUrl: "https://github.com/janedoe/fitness"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Community platform with user profiles, real-time chat, and content sharing capabilities.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Social",
      categoryColor: "primary",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      projectUrl: "https://example.com/social",
      githubUrl: "https://github.com/janedoe/social"
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Productivity tool for teams with task assignments, deadlines, and progress tracking.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Productivity",
      categoryColor: "secondary",
      technologies: ["Angular", "TypeScript", "Node.js", "PostgreSQL"],
      projectUrl: "https://example.com/tasks",
      githubUrl: "https://github.com/janedoe/tasks"
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Weather application with detailed forecasts, location-based services, and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Utility",
      categoryColor: "accent",
      technologies: ["React", "OpenWeatherAPI", "Mapbox", "PWA"],
      projectUrl: "https://example.com/weather",
      githubUrl: "https://github.com/janedoe/weather"
    }
  ];
  
  const displayedProjects = allProjects.slice(0, visibleProjects);
  
  const showMoreProjects = () => {
    setVisibleProjects(allProjects.length);
  };
  
  const showLessProjects = () => {
    setVisibleProjects(3);
  };
  
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Featured Projects</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore a selection of my recent work showcasing my skills, creativity, and problem-solving capabilities.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {displayedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          {visibleProjects < allProjects.length ? (
            <Button variant="outline" onClick={showMoreProjects}>
              View All Projects <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button variant="outline" onClick={showLessProjects}>
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
