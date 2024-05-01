import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
 
  name: 'event',
  initialState:{
     eventInfo:[]
  },
  reducers: {
  
    setEventInfo: (state, action) => {
      console.log('gggggggg',action.payload)
      state.eventInfo = action.payload;
    },
  },
});

export const { setEventInfo } = eventSlice.actions;

export const selectEventInfo = (state) => state.event.eventInfo;

export default eventSlice.reducer;
