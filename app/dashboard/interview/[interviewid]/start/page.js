"use client";

import React, { useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import { useSelector } from "react-redux";
import RecordAnswerSection from "./_components/RecordAnswerSection";

const StartInterview = () => {
  const [interviewData, setInterviewData] = useState([]);
  const interviewInfo = useSelector((store) => store.interviewInfo);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(2);
  useEffect(() => {
    if (interviewInfo?.jsonMockResp) {
      setInterviewData(JSON.parse(interviewInfo?.jsonMockResp));
    }
  }, [interviewInfo?.mockId]);

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <QuestionSection
          interviewInfo={interviewData}
          activeQuestionIndex={activeQuestionIndex}
        />
        <RecordAnswerSection />
      </div>
  );
};

export default StartInterview;
