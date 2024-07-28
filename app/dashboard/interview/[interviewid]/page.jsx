"use client";
import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Interview = ({ params }) => {
  useEffect(() => {
    if (params?.interviewid) {
      getQuestionAndAnswer();
    }
  }, [params.interviewid]);
  async function getQuestionAndAnswer() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/addjobinfo/${params.interviewid}`
      );
      console.log("my response",response);
    } catch (error) {
      toast.error("something went wrong");
    }
  }
  return <div>Interview</div>;
};

export default Interview;
