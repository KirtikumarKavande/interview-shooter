import React from "react";

const QuestionSection = ({ interviewInfo,activeQuestionIndex }) => {
  console.log("kirti",interviewInfo)
 
  return (
    <div className="p-5 border rounded-lg my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {interviewInfo.length>0 &&interviewInfo?.map((item,index) => (
          <h2
            className={`${activeQuestionIndex===index && "bg-blue-600 text-white"} p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer
          `}
          >
            Question #{index+1}
          </h2>
        ))}

       
      </div>
      <h2 className="my-5 text-md md:text-lg font-semibold">{interviewInfo[activeQuestionIndex].question}</h2>
    </div>
  );
};

export default QuestionSection;
