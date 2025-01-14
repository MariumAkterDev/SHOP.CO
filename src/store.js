import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Components/Slice/userSlice'
import counterSlice  from './Components/Slice/counterSlice'

export default configureStore({
  reducer: {
    currentUser: userSlice,
    count: counterSlice
  }
})