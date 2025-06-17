
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const CardModal = ({ isOpen, onClose, title, icon, children }: CardModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="sm:max-w-lg max-w-[95vw] max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200"
        aria-modal="true"
        role="dialog"
      >
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            {icon}
            {title}
          </DialogTitle>
          <DialogClose asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 w-6 p-0 rounded-full hover:bg-gray-100"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="space-y-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardModal;
