"use client";

import React, { useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import { useSelector } from "react-redux";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import { jobFeedBack } from "@/app/_utilis/helper";
import axios from "axios";
import { useRouter } from "next/navigation";

const StartInterview = ({params}) => {
  const [interviewData, setInterviewData] = useState([]);
  const interviewInfo = useSelector((store) => store.interviewInfo);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userSpeech, setUserSpeech] = useState("");
  const jobInfo = useSelector(state => state.interviewInfo)
  const router=useRouter()
  useEffect(() => {
    if (interviewInfo?.jsonMockQuestion) {
      setInterviewData(JSON.parse(interviewInfo?.jsonMockQuestion));
    }
  }, [interviewInfo?.mockId]);
  const generateFeedbackFromGemini = async () => {
    let parsedResponse = JSON.parse(jobInfo.jsonMockQuestion)
    const geminiResponse = await jobFeedBack(parsedResponse[activeQuestionIndex].question, userSpeech)
    const data = await axios.post("http://localhost:3000/api/feedback", {
      geminiResponse: geminiResponse.replace("```json", "").replace("```", ""),
      mockInterviewId: interviewInfo.mockId,
      question: activeQuestionIndex + 1
    })

    setUserSpeech("")
  }
function nextQuestion(){
  setActiveQuestionIndex(activeQuestionIndex + 1)
  if(activeQuestionIndex===interviewData?.length-1){
    router.push(`/dashboard/interview/${params.interviewid}/feedback`)
  }
}
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <QuestionSection
          interviewInfo={interviewData}
          activeQuestionIndex={activeQuestionIndex}
          setActiveQuestionIndex={setActiveQuestionIndex}

        />
        <RecordAnswerSection setUserSpeech={setUserSpeech} userSpeech={userSpeech} />

      </div>
      <div onClick={generateFeedbackFromGemini} >
        <div className="hidden lg:flex justify-end -mt-14 " >
          <Button className="bg-blue-600 text-white hover:bg-blue-500" onClick={nextQuestion}>{activeQuestionIndex === interviewData?.length - 1 ? "Finish" : "Next Question"}</Button>
        </div>
        <div className="flex lg:hidden justify-end my-2 ">
          <Button className="bg-blue-600 text-white hover:bg-blue-500" onClick={nextQuestion}>{activeQuestionIndex === interviewData?.length - 1 ? "Finish" : "Next Question"}</Button>
        </div>

      </div>
    </div>
  );
};

export default StartInterview;
