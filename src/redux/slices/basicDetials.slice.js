import { createSlice } from '@reduxjs/toolkit'
 
export const basicDetailsSlice = createSlice({
  name: 'basicDetails',
  initialState: {
    user: null, 
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload; 
    },
    clearUserDetails: (state) => {
      state.user = null;
    },
  },
});

// Action creators
export const { setUserDetails, clearUserDetails } = basicDetailsSlice.actions;

export default basicDetailsSlice.reducer;
