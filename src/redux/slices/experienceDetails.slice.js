import { createSlice } from '@reduxjs/toolkit'
 
export const experienceDetailsSlice = createSlice({
  name: 'basicDetails',
  initialState: {
    educationDetails: null, 
  },
  reducers: {
    storeEducationDetails: (state, action) => {
      state.educationDetails = action.payload; 
    },
    clearxperienceDetails: (state) => {
      state.educationDetails = null;
    },
  },
});


export const { storexperienceDetails, clearxperienceDetails } = experienceDetailsSlice.actions;

export default experienceDetailsSlice.reducer;
