import { noteText } from "@/app/_utilis/constants";
import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const QuestionSection = ({ interviewInfo, activeQuestionIndex }) => {
const textToSpeech=(text)=>{
  if('speechSynthesis' in window){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }else{
    toast.error("your browser does not support speech synthesis");
  }

}

  return (
    <div className="p-5 border rounded-lg my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {interviewInfo.length > 0 &&
          interviewInfo?.map((item, index) => (
            <h2
              className={`${
                activeQuestionIndex === index ? "bg-blue-600 text-white":"bg-secondary"
              } p-2  rounded-full text-xs md:text-sm text-center cursor-pointer
          `}
            >
              Question #{index + 1}
            </h2>
          ))}
      </div>
      <h2 className="my-5 text-md md:text-lg font-semibold">
        {interviewInfo[activeQuestionIndex]?.question}
      </h2>
      <Volume2 className="cursor-pointer" onClick={()=>{
        textToSpeech(interviewInfo[activeQuestionIndex]?.question)
      }}/>
      <div className="border rounded-lg p-5 bg-blue-100 mt-10">
        <h2 className="flex gap-2 items-center text-blue-700">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className="text-sm text-blue-800 my-2">{noteText}</h2>
      </div>
    </div>
  );
};

export default QuestionSection;
