import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading";

import Phone from "../../assets/login/phone.png";
import Google from "../../assets/login/google.png";
import Illustration from "../../assets/login/illustration.png";

function Login() {
  const { authState, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!loading && authState.isAuthenticated) navigate("/dashboard");
  },[navigate, loading, authState]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center h-screen m-0 font-sans bg-white">
      <div className="relative w-[300px] max-w-md">
        <img src={Illustration} alt="Illustration" className="w-full" />
      </div>
      <div className="my-5 text-2xl text-center text-gray-800">
        Let’s meet new <br /> people around you
      </div>
      <div className="flex flex-col items-center">
        <Link
          to="#"
          className="flex items-center justify-around w-48 h-10 my-2 font-bold text-white bg-[#b84eb9] rounded-full"
        >
          <img
            src={Phone}
            alt="Phone Icon"
            className="w-7 h-7 p-1 bg-white rounded-full"
          />
          Login with Email/Phone
        </Link>
        <Link
          to="#"
          className="flex items-center justify-around w-48 h-10 my-2 font-bold text-[#4b164c] bg-[#fcf3fa] rounded-full"
        >
          <img
            src={Google}
            alt="Google Icon"
            className="w-7 h-7 p-1 bg-white rounded-full"
          />
          Login with Google
        </Link>
      </div>
      <div className="mt-5 text-sm text-gray-600">
        Don't have an account?{" "}
        <button className="text-pink-500">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;