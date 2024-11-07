import { createSlice } from '@reduxjs/toolkit'
 
export const educationDetailsSlice = createSlice({
  name: 'basicDetails',
  initialState: {
    educationDetails: null, 
  },
  reducers: {
    storeEducationDetails: (state, action) => {
      state.educationDetails = action.payload; 
    },
    clearEducationDetails: (state) => {
      state.educationDetails = null;
    },
  },
});


export const { storeEducationDetails, clearEducationDetails } = educationDetailsSlice.actions;

export default educationDetailsSlice.reducer;
