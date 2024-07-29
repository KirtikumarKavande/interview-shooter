'use client'

import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection'
import { useSelector } from 'react-redux'

const StartInterview = () => {
  const [interviewData, setInterviewData] = useState([])
  const interviewInfo = useSelector(store => store.interviewInfo)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(2)
  useEffect(() => {
    if (interviewInfo?.jsonMockResp) {
      setInterviewData(JSON.parse(interviewInfo?.jsonMockResp))

    }
  }, [interviewInfo?.mockId])

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <QuestionSection interviewInfo={interviewData} activeQuestionIndex={activeQuestionIndex} />
      </div>
    </div>
  )
}

export default StartInterview