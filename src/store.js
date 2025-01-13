import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Components/Slice/userSlice'

export default configureStore({
  reducer: {
    currentUser: userSlice
  }
})