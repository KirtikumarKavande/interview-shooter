import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import toast from "react-hot-toast";
import runGeminiScript from "./geminiHelper";

const JobInfoForm = () => {
  const [jobInfo, setJobInfo] = useState({
    jobPosition: "",
    jobDescription: "",
    yearOfExperience: "fresher",
  });
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
   const questionAnswer= await runGeminiScript(jobInfo.jobPosition,jobInfo.jobDescription,jobInfo.yearOfExperience)
  const cleanQuestionAnswer = questionAnswer.replace("```json","").replace("```","")
   console.log(JSON.parse(cleanQuestionAnswer)) 
   


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
                Start Interview
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobInfoForm;
