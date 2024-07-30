'use client'
import { createSlice } from "@reduxjs/toolkit"

const interViewInfoSlice = createSlice({
  name: "interviewInfo",
  initialState: {},
  reducers: {
    addInterviewInfo: (state, action) => {
      return action.payload
    },
  },
})
export const { addInterviewInfo } = interViewInfoSlice.actions

export default interViewInfoSlice.reducer

