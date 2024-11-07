import { configureStore } from '@reduxjs/toolkit'
import  basicDetailsSlice from "./slices/basicDetials.slice" 
import educationDetailsSlice from "./slices/educationDetials.slice"
import experienceDetailsSlice from "./slices/experienceDetails.slice"
export default configureStore({
  reducer: {
    basicDetails:basicDetailsSlice,
    educationDetails:educationDetailsSlice,
    educationDetails:experienceDetailsSlice
  }
})