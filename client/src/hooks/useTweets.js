import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllTweets } from "../redux/tweetSlice";
import { TWEET_API_END_POINT } from "../utils/constants";

// In the below hook simply call axios inside the useEffect and dispatch the received data into the redux store.
export const useAllTweets = (page = 1) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        // Passing page as a query parameter.
        const tweets = await axios.get(`${TWEET_API_END_POINT}?page=${page}`, {
          withCredentials: true,
        });
        console.log(tweets);
        dispatch(setAllTweets(tweets?.data.tweets));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTweets();
  }, [page, dispatch]);
};

export const useFollowingTweets = (page) => {};
