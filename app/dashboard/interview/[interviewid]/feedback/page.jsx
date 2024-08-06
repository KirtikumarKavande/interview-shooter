'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Feedback = ({ params }) => {
  const [feedbackData, setFeedbackData] = useState([]);
const router=useRouter()
  useEffect(() => {
    const fetchFeedbackAccordingToMockId = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/feedback/${params.interviewid}`
        );
        const data = response.data[0];
        if (data) {
          const parsedData = parseInterviewData(data);
          setFeedbackData(parsedData);
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedbackAccordingToMockId();
  }, [params.interviewid]);

  const parseInterviewData = (data) => {
    const questions = JSON.parse(data.jsonMockQuestion);
    const feedbackMap = new Map(
      data.feedbacks.map(feedback => [feedback.question, feedback])
    );

    return questions.map((q, index) => {
      const questionNumber = index + 1;
      const feedbackData = feedbackMap.get(questionNumber);

      let idealAnswer = "";
      let rating = "";
      let feedbackText = "";

      if (feedbackData) {
        try {
          const parsedFeedback = JSON.parse(feedbackData.feedback);
          idealAnswer = parsedFeedback.idealAnswer || "";
          rating = parsedFeedback.rating || "";
          feedbackText = parsedFeedback.feedback || "";
        } catch (e) {
          feedbackText = feedbackData.feedback || "";
        }
      }

      return {
        question: q.question,
        idealAnswer: idealAnswer || "",
        rating: rating || "",
        feedback: feedbackText || ""
      };
    });
  };

  return (
    <div className="p-10 space-y-2">
      <h2 className="font-bold text-3xl text-green-500">Congratulations</h2>
      <h2 className="font-bold text-2xl">Here is your Interview feedback </h2>
      
      <h2 className="text-gray-500 text-sm">
        Find Question, its ideal answer, rating according to your answer & area
        of improvement{" "}
      </h2>
      {feedbackData.map((item, index) => (
        <Collapsible key={index}>
          <CollapsibleTrigger className="p-2 w-full bg-blue-50 rounded-lg my-2 text-left flex justify-between gap-7 items-center">
            {item.question} <ChevronDown className="h-5 w-5 " />
          </CollapsibleTrigger>
          <CollapsibleContent>
            {item.rating === "" && item.feedback === "" && item.idealAnswer === "" ? (
              <div className="p-2 border rounded-lg bg-yellow-50 text-sm text-yellow-900">
                You didn't attempt to answer this question. No feedback is available.
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <h2 className="text-red-500 p-2 border rounded-lg">
                  <strong>Rating:</strong> {item.rating}
                </h2>
                <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                  <strong>Feedback:</strong> {item.feedback}
                </h2>
                <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                  <strong>Ideal Answer:</strong> {item.idealAnswer}
                </h2>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      ))}
      
      <Button onClick={()=>{router.push("/dashboard")}}>Go Home</Button>
    </div>
  );
};

export default Feedback;