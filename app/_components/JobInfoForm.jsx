import React from "react";

const JobInfoForm = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Tell us about your job
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Add Details about Job Position,Your Skills and Year of Experience
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8"
          >
            <div>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Job Position/Role Name"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
              </div>
            </div>
            <textarea
              class="w-full rounded-lg border border-gray-200 p-3 text-sm"
              placeholder="Job Description/Tech Stack im Short"
              rows="8"
              id="message"
            ></textarea>
            <div>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="No of Year Experience"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobInfoForm;
