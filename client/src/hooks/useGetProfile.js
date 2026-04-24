import axios from "axios";
import { USER_API_END_POINT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";


export const useGetProfile = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const userData = await axios.get(`${USER_API_END_POINT / id}`, {
          withCredentials: true, // To send the cookies via. axios call.
        });
        console.log(userData);
        dispatch(getUser(userData?.data.user));
      } catch (error) {
        console.log(error);
      }
    };

    // Calling the above defined function.
    fetchMyProfile();
  }, [id]);
};
