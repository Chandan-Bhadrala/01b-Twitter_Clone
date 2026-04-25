import axios from "axios";
import { USER_API_END_POINT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

// In the below hook simply call axios inside the useEffect and dispatch the received data into the redux store.
export const useGetProfile = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const userData = await axios.get(`${USER_API_END_POINT / id}`, {
          withCredentials: true, // To send the cookies via. axios call.
        });
        console.log(userData);
        dispatch(setUser(userData?.data.user));
      } catch (error) {
        console.log(error);
      }
    };

    // Calling the above defined function.
    fetchMyProfile();
  }, [id]);
};
