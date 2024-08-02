'use client'
import axios from "axios";
import React, { useEffect } from "react";

const Feedback = ({params}) => {
  useEffect(()=>{
    fetchFeedbackAccordingToMockId()
  },[])
async function fetchFeedbackAccordingToMockId(){
 await axios.get(`http://localhost:3000/api/feedback/${params.interviewid}`  )
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
    </div>
  );
};

export default Feedback;
