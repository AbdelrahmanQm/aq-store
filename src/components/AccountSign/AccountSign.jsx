import React from "react";
import AccountSignIn from "../AccountSignIn/AccountSignIn";
import { ReactComponent as Close } from "../../svgs/close.svg";
import { ReactComponent as User } from "../../svgs/user.svg";
import { ReactComponent as Lock } from "../../svgs/lock.svg";
import AccountSignUp from "../AccountSignUp/AccountSignUp";
import { useState } from "react";
const AccountSign = ({ close }) => {
  const [signIn, setSignIn] = useState(true);
  const signInForm = () => setSignIn(true);
  const signUpForm = () => setSignIn(false);
  const closeSignIn = () => {
    close(false);
  };
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-[1000]">
      <div
        onClick={closeSignIn}
        className="blackOut fixed bg-black w-screen h-screen opacity-25"
      ></div>
      <div className="wrapper  overflow-hidden w-full max-w-[500px] fixed left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-xl">
        <div>
          <div className="header border-b border-slake-200 px-4 h-[60px] flex justify-between items-center bg-faded">
            <div className="controlaccount flex gap-6">
              <p
                onClick={signInForm}
                className={`cursor-pointer group hover:text-primary transition-all font-semibold flex items-center ${
                  signIn
                    ? "border-b-2 border-primary text-primary"
                    : "text-dark"
                }`}
              >
                <Lock className="w-6 h-6" /> Sign in
              </p>
              <p
                onClick={signUpForm}
                className={`cursor-pointer font-semibold h-[60px] flex items-center hover:text-primary transition ${
                  !signIn
                    ? "border-b-2 border-primary text-primary"
                    : "text-dark"
                }`}
              >
                <User className="w-6 h-6" />
                Sign up
              </p>
            </div>
            <Close
              onClick={closeSignIn}
              className="cursor-pointer hover:stroke-primary transition-all w-6 h-6"
            />
          </div>
          {signIn ? <AccountSignIn /> : <AccountSignUp />}
        </div>
      </div>
    </div>
  );
};

export default AccountSign;
