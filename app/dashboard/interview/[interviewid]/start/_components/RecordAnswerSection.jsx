import { Button } from "@/components/ui/button";
import React from "react";
import Webcam from "react-webcam";

const RecordAnswerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="flex flex-col  justify-center mt-5 items-center bg-secondary rounded-lg p-5">
      <img
        src="/images/webcam.jpg"
        width={"500rem"}
        height={"300rem"}
        className="absolute "
      />
      <Webcam mirrored={true} style={{height:300,width:"100%,",zIndex:10}} />
    </div>
    <Button variant="outline"className="mt-5" >Record Interview</Button>
    </div>
  );
};

export default RecordAnswerSection;
