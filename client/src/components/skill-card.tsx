import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "framer-motion";

interface SkillProps {
  name: string;
  proficiency: number;
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  iconClass: string;
  skills: SkillProps[];
}

export function SkillCard({ title, icon, iconClass, skills }: SkillCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className={`w-14 h-14 ${iconClass} rounded-lg flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
        <ul className="space-y-4">
          {skills.map((skill) => (
            <ProgressBar key={skill.name} skill={skill} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ProgressBar({ skill }: { skill: SkillProps }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      setWidth(skill.proficiency);
    }
  }, [isInView, skill.proficiency]);

  return (
    <li ref={ref}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
        <div 
          className="h-1.5 rounded-full bg-primary transition-all duration-1500 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </li>
  );
}
