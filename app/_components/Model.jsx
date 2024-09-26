import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Model = ({ children, isOpen, setIsOpen }) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen} >
        <DialogContent>
          <DialogHeader>
            <DialogDescription>{children}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Model;
