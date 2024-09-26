"use client";
import React, { useState } from "react";
import Model from "./Model";
import { Button } from "@/components/ui/button";
import JobInfoForm from "./JobInfoForm";

const AddNewInterView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div 
    onClick={handleDialogToggle}
    
    className="p-7 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all">
      <h2
        className="font-bold text-lg text-center flex items-center gap-4"
      >
        <img
          src="https://img.icons8.com/?size=100&id=24717&format=png&color=474ED6"
          className="h-8 font-bold"
        />
        Add Interview
      </h2>
      <Model  isOpen={isOpen} setIsOpen={setIsOpen}>
        <JobInfoForm />
      </Model>
    </div>
  );
};

export default AddNewInterView;
