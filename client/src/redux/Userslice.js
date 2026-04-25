import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    profile: null,
    otherUsers: null,
  },
  reducers: {
    // multiple actions
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
  },
});

export const { setUser, setOtherUsers } = userSlice.actions;
export default userSlice.reducer;
