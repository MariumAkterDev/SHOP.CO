import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Components/Slice/counterSlice'


export default configureStore({
  reducer: {
    Data: counterSlice
  }
})