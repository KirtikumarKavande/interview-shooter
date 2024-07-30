"use client";

import React, { useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import { useSelector } from "react-redux";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";

const StartInterview = () => {
  const [interviewData, setInterviewData] = useState([]);
  const interviewInfo = useSelector((store) => store.interviewInfo);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    if (interviewInfo?.jsonMockQuestion) {
      setInterviewData(JSON.parse(interviewInfo?.jsonMockQuestion));
    }
  }, [interviewInfo?.mockId]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <QuestionSection
          interviewInfo={interviewData}
          activeQuestionIndex={activeQuestionIndex}
        />
        <RecordAnswerSection />

      </div>
      <div className="hidden lg:flex justify-end -mt-14 ">
        <Button className="bg-blue-600 text-white hover:bg-blue-500" onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>{activeQuestionIndex===interviewData?.length-1?"Finish":"Next Question"}</Button>
      </div>
      <div className="flex lg:hidden justify-end my-2 ">
        <Button className="bg-blue-600 text-white hover:bg-blue-500" onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>{activeQuestionIndex===interviewData?.length-1?"Finish":"Next Question"}</Button>
      </div>
    </div>
  );
};

export default StartInterview;
