import { configureStore } from '@reduxjs/toolkit'
import userInfo from './slices/userSlice';
import logPass from './slices/logPassSlice'




export const store = configureStore({
  reducer: {
    userInfo,
    logPass,
},
})