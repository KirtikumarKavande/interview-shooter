'use client'
import { configureStore } from '@reduxjs/toolkit'

import interviewInfoReducer from './interviewInfo.slice'

const store = configureStore({
  reducer: {
    interviewInfoReducer:interviewInfoReducer
  },
})

export default store