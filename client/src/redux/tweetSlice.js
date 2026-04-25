import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    allTweets: [],
    followingTweet: [],
  },
  reducers: {
    // multiple actions
    setAllTweets: (state, action) => {
      state.allTweets = action.payload;
    },
    setFollowingTweets: (state, action) => {
      state.followingTweet = action.payload;
    },
    addTweet: (state, action) => {
      if (!action.payload) return; // ✅ prevent null
      state.allTweets.unshift(action.payload);
    },
  },
});

export const { setAllTweets,setFollowingTweets, addTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
