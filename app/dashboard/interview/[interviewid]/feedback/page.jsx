"use client";
import axios from "axios";
import React, { useEffect } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Feedback = ({ params }) => {
  useEffect(() => {
    fetchFeedbackAccordingToMockId();
  }, []);

  async function fetchFeedbackAccordingToMockId() {
    const responseData = await axios.get(
      `http://localhost:3000/api/feedback/${params.interviewid}`
    );
    console.log("feedback response", responseData);
  }

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl text-green-500">Congratulations</h2>
      <h2 className="font-bold text-2xl">Here is your Interview feedback </h2>
      <h2 className="text-blue-600 text-lg my-3">
        Your Overall Rating: <strong>7/10</strong>
      </h2>
      <h2 className="text-gray-500 text-sm">
        Find Question, its ideal answer, rating according to your answer & area
        of improvement{" "}
      </h2>
      <Collapsible>
        <CollapsibleTrigger className="p-2 w-full bg-blue-50 rounded-lg my-2 text-left flex justify-between gap-7 items-center">
          Find Question, its ideal answer, rating according to your answer &
          area of improvement <ChevronDown className="h-5 w-5 " />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-col gap-2">
            <h2 className="text-red-500 p-2 border rounded-lg">
              <strong>Rating:</strong>4
            </h2>
            <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
              <strong>Feedback:</strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              praesentium nemo consequuntur ut iste nam officia asperiores, quas
              atque cupiditate cumque impedit porro? Quasi debitis, placeat
              beatae veniam totam saepe laborum maxime repellendus nostrum ipsa
              aliquid, autem voluptas suscipit provident.
            </h2>
            <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
              <strong>Ideal Answer:</strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              praesentium nemo consequuntur ut iste nam officia asperiores, quas
              atque cupiditate cumque impedit porro? Quasi debitis, placeat
              beatae veniam totam saepe laborum maxime repellendus nostrum ipsa
              aliquid, autem voluptas suscipit provident.
            </h2>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="p-2 w-full bg-blue-50 rounded-lg my-2 text-left flex justify-between gap-7 items-center">
          Find Question, its ideal answer, rating according to your answer &
          area of improvement <ChevronDown className="h-5 w-5 " />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-col gap-2">
            <h2 className="text-red-500 p-2 border rounded-lg">
              <strong>Rating:</strong>4
            </h2>
            <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
              <strong>Feedback:</strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              praesentium nemo consequuntur ut iste nam officia asperiores, quas
              atque cupiditate cumque impedit porro? Quasi debitis, placeat
              beatae veniam totam saepe laborum maxime repellendus nostrum ipsa
              aliquid, autem voluptas suscipit provident.
            </h2>
            <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
              <strong>Ideal Answer:</strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              praesentium nemo consequuntur ut iste nam officia asperiores, quas
              atque cupiditate cumque impedit porro? Quasi debitis, placeat
              beatae veniam totam saepe laborum maxime repellendus nostrum ipsa
              aliquid, autem voluptas suscipit provident.
            </h2>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="p-2 w-full bg-blue-50 rounded-lg my-2 text-left flex justify-between gap-7 items-center">
          Find Question, its ideal answer, rating according to your answer &
          area of improvement <ChevronDown className="h-5 w-5 " />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-col gap-2">
            <h2 className="text-red-500 p-2 border rounded-lg">
              <strong>Rating:</strong>4
            </h2>
            <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
              <strong>Feedback:</strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              praesentium nemo consequuntur ut iste nam officia asperiores, quas
              atque cupiditate cumque impedit porro? Quasi debitis, placeat
              beatae veniam totam saepe laborum maxime repellendus nostrum ipsa
              aliquid, autem voluptas suscipit provident.
            </h2>
            <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
              <strong>Ideal Answer:</strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              praesentium nemo consequuntur ut iste nam officia asperiores, quas
              atque cupiditate cumque impedit porro? Quasi debitis, placeat
              beatae veniam totam saepe laborum maxime repellendus nostrum ipsa
              aliquid, autem voluptas suscipit provident.
            </h2>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Feedback;
