import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import tweetSlice from "./tweetSlice.js";

export const store = configureStore({
  reducer: {
    // slices
    user: userSlice,
    tweet: tweetSlice,
  },
});
