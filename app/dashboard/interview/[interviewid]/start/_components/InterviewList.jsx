"use client";
import InterviewItemCard from "@/app/_components/InterviewItemCard";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";

const InterviewList = () => {
  const [interview, setInterview] = useState([]);
  useEffect(() => {
    getInterViewList();
  }, []);

  const { user } = useUser();
  const getInterViewList = async () => {
    let res = await axios.post("http://localhost:3000/api/getjobinfo", {
      email: user?.primaryEmailAddress?.emailAddress,
    });
    setInterview(res.data);
  };
  console.log("ccc",interview)
  return (
    <div>
      <h2 className="font-medium text-xl pt-2">Previous Interview List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interview.length > 0 &&
          interview.map((item, index) => (
           <InterviewItemCard key={index} interviewInfo={item}/>
          ))}
      </div>
    </div>
  );
};

export default InterviewList;
