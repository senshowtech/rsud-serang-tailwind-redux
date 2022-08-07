import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { user: "sena" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      state.value = { user: "hargi" };
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
