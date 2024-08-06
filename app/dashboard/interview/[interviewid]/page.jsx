"use client";
import { addInterviewInfo } from "@/app/_store/interviewInfo.slice";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Webcam from "react-webcam";

const Interview = ({ params }) => {
  const dispatch = useDispatch();
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const interViewInfo = useSelector((state) => state.interviewInfo);
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
      dispatch(addInterviewInfo(response.data));
    } catch (error) {
      toast.error("something went wrong");
    }
  }
  return (
    <div>
      <div className=""></div>
      <div className="my-10 flex justify-center flex-col items-center">
        <h2 className="font-bold text-2xl">Let's Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
          <div className="flex flex-col my-5 gap-5 p-5 rounded-lg border">
            <h2 className="text-lg">
              <strong>Job Role/Job Position</strong>:
              {interViewInfo?.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description/Tech Stack</strong>:
              {interViewInfo?.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Years of Experience </strong>:
              {interViewInfo?.jobExperience}
            </h2>
          </div>
          <div>
            {webcamEnabled ? (
              <Webcam
                onUserMedia={() => setWebcamEnabled(true)}
                onUserMediaError={() => setWebcamEnabled(false)}
                mirrored
                style={{
                  height: 300,
                  width: 300,
                }}
              />
            ) : (
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border " />
            )}
          </div>
        </div>
        <div className="flex space-x-8">
          <Button onClick={() => setWebcamEnabled(true)}>Enable Web Cam</Button>
          <Button>
            {" "}
            <Link href={`/dashboard/interview/${params.interviewid}/start`}>
              start Interview
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Interview;
