"use client";
import InterviewItemCard from "@/app/_components/InterviewItemCard";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";

const InterviewList = () => {
  const [interview, setInterview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      getInterViewList();
    }
  }, [isLoaded, user]);

  const getInterViewList = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getjobinfo`, {
        email: user.primaryEmailAddress?.emailAddress,
      });
      setInterview(res.data);
    } catch (err) {
      console.error("Error fetching interview list:", err);
      setError("Failed to fetch interview list. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) return <div className="mt-6 text-center">Loading user data...</div>;
  if (!user) return <div>Please log in to view your interviews.</div>;
  if (loading) return <div className="mt-6 text-center">Loading interviews...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="font-medium text-xl text-center pt-6">Previous Interview List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interview.length > 0 ? (
          interview.map((item, index) => (
            <InterviewItemCard key={index} interviewInfo={item} />
          ))
        ) : (
          <h2 className="text-center font-medium text-xl col-span-full text-red-500">No Interviews Found</h2>
        )}
      </div>
    </div>
  );
};

export default InterviewList;