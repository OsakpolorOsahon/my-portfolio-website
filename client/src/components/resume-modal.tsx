import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, FileText, FileCode } from "lucide-react";

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
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Download Resume</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Please select the format in which you'd like to download my resume:
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center h-24 gap-2 hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => window.open('/path/to/resume.pdf', '_blank')}
          >
            <FileText className="h-8 w-8 text-red-500" />
            <span className="font-medium">PDF Format</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center h-24 gap-2 hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => window.open('/path/to/resume.docx', '_blank')}
          >
            <FileCode className="h-8 w-8 text-blue-500" />
            <span className="font-medium">Word Format</span>
          </Button>
        </div>
        
        <div className="flex justify-center">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
