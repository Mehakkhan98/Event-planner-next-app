import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthentication } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
