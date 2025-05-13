import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterPhrase?: number;
  delayBeforePhrase?: number;
  className?: string;
}

export function Typewriter({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterPhrase = 1500,
  delayBeforePhrase = 500,
  className,
}: TypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        // Deleting text
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        
        // When finished deleting
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          timeout = setTimeout(handleTyping, delayBeforePhrase);
          return;
        }
        
        timeout = setTimeout(handleTyping, deletingSpeed);
      } else {
        // Typing text
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        
        // When finished typing current phrase
        if (currentText.length === currentPhrase.length) {
          setIsDeleting(true);
          timeout = setTimeout(handleTyping, delayAfterPhrase);
          return;
        }
        
        timeout = setTimeout(handleTyping, typingSpeed);
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentPhraseIndex,
    currentText,
    isDeleting,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayAfterPhrase,
    delayBeforePhrase,
  ]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {currentText}
      <span className="inline-block w-1 h-5 ml-1 bg-primary animate-pulse" />
    </motion.span>
  );
}
