import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      const current = elements.find((element) => {
        if (!element) return false;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      });
      
      if (current) {
        setActiveId(current.id);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids, offset]);
  
  return activeId;
}

export function useResumeModal() {
  const openResumeModal = () => {
    document.dispatchEvent(new CustomEvent('open-resume-modal'));
  };
  
  const closeResumeModal = () => {
    document.dispatchEvent(new CustomEvent('close-resume-modal'));
  };
  
  return { openResumeModal, closeResumeModal };
}
