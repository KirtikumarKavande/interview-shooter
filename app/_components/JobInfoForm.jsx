import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import toast from "react-hot-toast";
import runGeminiScript from "./geminiHelper";
import { Loader } from "lucide-react";
import prisma from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { jobInformation } from "../_utilis/helper";

const JobInfoForm = () => {
  const [jobInfo, setJobInfo] = useState({
    jobPosition: "",
    jobDescription: "",
    yearOfExperience: "fresher",
  });
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      jobInfo.jobPosition === "" ||
      jobInfo.jobDescription === "" ||
      jobInfo.yearOfExperience === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setIsLoading(true);
    const questionAnswer = await jobInformation(
      jobInfo.jobPosition,
      jobInfo.jobDescription,
      jobInfo.yearOfExperience
    );
    console.log("hi there", questionAnswer);
    const cleanQuestionAnswer = questionAnswer
      .replace("```json", "")
      .replace("```", "");
    setIsLoading(false);
    if (!cleanQuestionAnswer) {
      toast.error("Something went wrong");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addjobinfo",
        {
          jobPosition: jobInfo.jobPosition,
          jobDescription: jobInfo.jobDescription,
          yearOfExperience: jobInfo.yearOfExperience,
          jsonMockQuestion: cleanQuestionAnswer,
          mockId: uuidv4(),
          createdBy: user?.primaryEmailAddress?.emailAddress,
        }
      );
      console.log("kk", response);
      if (response.data.mockId) {
        router.push(`/dashboard/interview/${response.data.mockId}`);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log("error occurred", error);
    }
  }
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <div className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Tell us about your job
          </div>

          <div className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Add Details about Job Position,Your Skills and Year of Experience
          </div>

          <form
            onSubmit={handleSubmit}
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8"
          >
            <div>
              <div className="relative">
                <input
                  value={jobInfo.jobPosition}
                  onChange={(e) => {
                    setJobInfo({ ...jobInfo, jobPosition: e.target.value });
                  }}
                  className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                  placeholder="Job Position/Role Name"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
              </div>
            </div>
            <textarea
              value={jobInfo.jobDescription}
              onChange={(e) => {
                setJobInfo({ ...jobInfo, jobDescription: e.target.value });
              }}
              class="w-full rounded-lg border border-gray-200 p-3 text-sm text-black"
              placeholder="Job Description/Tech Stack im Short"
              rows="8"
              id="message"
            ></textarea>
            <div>
              <div className="relative">
                <input
                  value={jobInfo.yearOfExperience}
                  onChange={(e) => {
                    setJobInfo({
                      ...jobInfo,
                      yearOfExperience: e.target.value,
                    });
                  }}
                  className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm text-black shadow-sm"
                  placeholder="No of Year Experience"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
              </div>
            </div>
            <div className="flex gap-5 mt-4 justify-end">
              <Button variant="ghost">Cancel</Button>
              <Button
                type="submit"
                variant="default"
                className=" bg-blue-800 hover:bg-blue-700"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" />
                    <span>Loading Questions</span>
                  </>
                ) : (
                  "Start Interview"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobInfoForm;
