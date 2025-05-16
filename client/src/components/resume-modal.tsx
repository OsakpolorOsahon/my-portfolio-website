import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, FileText, ExternalLink } from "lucide-react";

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    // Listen for custom events to open/close the modal
    document.addEventListener('open-resume-modal', openModal);
    document.addEventListener('close-resume-modal', closeModal);
    
    return () => {
      document.removeEventListener('open-resume-modal', openModal);
      document.removeEventListener('close-resume-modal', closeModal);
    };
  }, []);

  const CV_URL = "https://docs.google.com/document/d/1zMZSgApd_iTq5OsX1eXhf7A6E2VUHQEYyELFWtHQuhE/edit?usp=sharing";
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">View CV</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Access Osakpolor Osahon's professional CV:
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-6">
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center h-24 gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 w-full"
            onClick={() => window.open(CV_URL, '_blank')}
          >
            <FileText className="h-8 w-8 text-primary" />
            <span className="font-medium">Open CV in Google Docs</span>
            <span className="text-xs text-gray-500">
              <ExternalLink className="inline h-3 w-3 mr-1" />
              External link
            </span>
          </Button>
        </div>
        
        <div className="flex justify-center">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
