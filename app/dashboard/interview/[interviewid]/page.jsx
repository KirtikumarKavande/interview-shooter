"use client";
import { addInterviewInfo } from "@/app/_store/interviewInfo.slice";
import axios from "axios";
import Link from 'next/link';
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Interview = ({ params }) => {
  const dispatch = useDispatch()
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
      dispatch(addInterviewInfo(response.data))
    } catch (error) {
      toast.error("something went wrong");
    }
  }
  return (
    <div>
      <Link href={`/dashboard/interview/${params.interviewid}/start`}>
        start Interview
      </Link>
    </div>
  );
};

export default Interview;
