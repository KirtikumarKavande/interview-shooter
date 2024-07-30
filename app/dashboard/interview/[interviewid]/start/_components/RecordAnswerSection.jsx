import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import toast from "react-hot-toast";
import { Dot } from "lucide-react";

const RecordAnswerSection = () => {
  const {
    error,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  if (error) {
    toast.error("Web Speech API is not available in this browser");
  }
const[userSpeech,setUserSpeech]=useState("")
  useEffect(()=>{
    {results.map((result) => {
      setUserSpeech(userSpeech+result.transcript)
    })}
  },[results.length])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col  justify-center mt-5 items-center bg-secondary rounded-lg p-5">
        <img
          src="/images/webcam.jpg"
          width={"500rem"}
          height={"300rem"}
          className="absolute "
        />
        <Webcam
          mirrored={true}
          style={{ height: 300, width: "100%,", zIndex: 10 }}
        />
      </div>
      <Button
        onClick={isRecording ? stopSpeechToText : startSpeechToText}
        variant="outline"
        className="mt-5"
      >
        {" "}
        {isRecording ?<div className="flex  items-center ">
          <span>Stop Recording</span>
        </div> : "Start Recording"}
      </Button>
       <ul>
        {results.map((result) => (
          <li key={result.timestamp}>{result.transcript}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecordAnswerSection;
