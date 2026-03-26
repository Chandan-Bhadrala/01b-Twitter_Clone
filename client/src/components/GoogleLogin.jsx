import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api";
import { useNavigate } from "react-router-dom";

const GoogleLogin = ({ className = "", children = "Sign in with Google" }) => {
  const navigate = useNavigate();
 
  const responseGoogle = async (authResult) => {
    // Above authResult is populated by the useGoogleLogin hook.
    try {
      // console.log(authResult);
      if (authResult["code"]) {
       
        const result = await googleAuth(authResult["code"]);

        const { email, name, image } = result.data.user;
        // console.log(result.data.user);

        const { token } = result.data;
        // console.log(token)

        // Consolidating the received user data for storage in the FE cookies.
        const obj = { email, name, image, token };
        localStorage.setItem("user-info", JSON.stringify(obj));
        if (obj) navigate("/");
      }
    } catch (error) {
      console.error("Error while requesting google code: ", error);
    }
  };


  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div>
  
      <button onClick={googleLogin} className={`cursor-pointer ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default GoogleLogin;
