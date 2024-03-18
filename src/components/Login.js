import { useState } from "react";

import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <div className="absolute right-0 left-0 p-12 m-auto my-36 w-3/12 bg-black/70 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        <form className="flex-col">
          {isSignInForm && (
            <input
              type="text"
              placeholder="Enter username"
              className="p-4 my-2 w-full bg-gray-700 rounded-sm"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          />
          <button className="p-2 my-4 w-full bg-red-600 rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "Already registered? Sign In Now"
              : "New to Netflix? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
