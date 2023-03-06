import React from "react";

const AccountSignIn = () => {
  return (
    <div className="px-6 my-6">
      <form className="flex flex-col mt-6">
        <label className="font-semibold mb-2 text-sm">Email Address</label>
        <input
          type="email"
          placeholder="abdelrahman.qassem@gmail.com"
          className="focus:outline-none outline-none text-sm focus:border-primary px-1 py-2  rounded-md border border-slake-200 text-md w-full "
        />
        <label className="font-semibold mt-4 mb-2 text-sm">Password</label>
        <input
          type="password"
          className="text-sm focus:outline-none outline-none focus:border-primary px-1 py-2 transition-all rounded-md border border-slake-200 text-md w-full"
        />
        <div className="flex mt-4 justify-between">
          <div className="flex gap-2 ">
            <input type="checkbox" value="remember" />
            <label>Remember me</label>
          </div>
          <p className="cursor-pointer text-primary">Forgot password?</p>
        </div>
      </form>
      <button className="bg-primary mt-6 px-2 py-3 text-faded  rounded-md drop-shadow-lg  text-sm hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100 w-full justify-center transform flex items-center gap-2">
        Sign in
      </button>
      <button className="bg-[#4285F4] mt-4 px-2 py-3 text-faded hover:text-[#4285F4] rounded-md drop-shadow-lg  text-sm hover:bg-white transition-all active:bg-[#4285F4] active:text-faded duration-300 active:drop-shadow-sm active:scale-100 w-full justify-center transform flex items-center gap-2">
        Sign in with Google
      </button>
    </div>
  );
};

export default AccountSignIn;
