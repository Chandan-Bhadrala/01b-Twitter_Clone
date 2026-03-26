import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* Left Section */}
      <div className="flex flex-1 justify-center">
        <FaXTwitter size="360px" />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col">
        <h1 className="mb-12 text-8xl font-bold">Happening now</h1>
        <h3 className="text-4xl font-extrabold">Join today.</h3>

        {/* Signin Button */}
        <div className="mt-8 flex w-fit cursor-pointer items-center gap-12 rounded-4xl bg-black px-8 py-4 text-xl text-white">
          <button>Sign in with Google </button>
          <span>
            <FcGoogle size="32" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
