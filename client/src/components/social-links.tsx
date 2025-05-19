import { GitHubIcon, LinkedInIcon, TwitterIcon, DribbbleIcon } from "@/lib/icons";
import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

export function SocialLinks({ className = "", iconSize = "md" }: SocialLinksProps) {
  const getIconSize = () => {
    switch (iconSize) {
      case "sm":
        return "h-4 w-4";
      case "lg":
        return "h-6 w-6";
      case "md":
      default:
        return "h-5 w-5";
    }
  };
  
  const iconClass = `${getIconSize()} transition-colors`;
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon className={iconClass} />,
      url: "https://linkedin.com",
      color: "hover:text-[#0A66C2]"
    },
    {
      name: "GitHub",
      icon: <GitHubIcon className={iconClass} />,
      url: "https://github.com/OsakpolorOsahon",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "Twitter",
      icon: <TwitterIcon className={iconClass} />,
      url: "https://x.com/Jadon_the_grea",
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "Dribbble",
      icon: <DribbbleIcon className={iconClass} />,
      url: "https://dribble.com/osahon1224?onboarding=true&designer=true",
      color: "hover:text-[#EA4C89]"
    }
  ];
  
  return (
    <div className={`flex space-x-6 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`text-gray-600 ${social.color} dark:text-gray-400`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
