import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading";

import Phone from "../../assets/login/phone.png";
import Google from "../../assets/login/google.png";
import Illustration from "../../assets/login/illustration.png";

import ModelLogin from "./Model/Login";
import ModelSignUp from "./Model/SignUp";
import ModelPersonal from "./Model/PersonalDetails";
import ModelJobStatus from "./Model/JobStatus";
import ModelJobDetails1 from "./Model/JobDetails1";
import ModelJobDetails2 from "./Model/JobDetails2";
import ModelRelationShip from "./Model/RelationshipGoals";
import ModelInterested from "./Model/Interested";

function Login() {
  const { authState, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [modelShown, setModelShown] = useState({
    Login: false,
    Signup: false,
    Personal: false,
    JobStatus: false,
    JobDetails1: false,
    JobDetails2: false,
    RelationShip: false,
    Intersted: false,
  });

  const ToggleModel = (model = "") => {
    setModelShown((prevModelShown) => {
      const updatedModelShown = Object.keys(prevModelShown).reduce(
        (acc, key) => {
          acc[key] = false;
          return acc;
        },
        {}
      );
      if (model) updatedModelShown[model] = true;
      return updatedModelShown;
    });
  };

  const HandleGoogleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/api/auth/google/login`;
  };

  useEffect(() => {
    if (!loading && authState.isAuthenticated) navigate("/dashboard");
  }, [navigate, loading, authState]);

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
        <button
          onClick={() => {
            ToggleModel("Login");
          }}
          className="flex items-center text-sm px-2 justify-start gap-3 w-[225px] h-10 my-2 font-bold text-white bg-[#b84eb9] rounded-full"
        >
          <img
            src={Phone}
            alt="Phone Icon"
            className="w-7 h-7 p-1 bg-white rounded-full"
          />
          Login with Email/Phone
        </button>
        <button
          onClick={HandleGoogleLogin}
          className="flex items-center text-sm px-2 justify-start gap-3 w-[225px] h-10 my-2 font-bold text-[#4b164c] bg-[#fcf3fa] rounded-full"
        >
          <img
            src={Google}
            alt="Google Icon"
            className="w-7 h-7 p-1 bg-white rounded-full"
          />
          Login with Google
        </button>
      </div>
      <div className="mt-5 text-sm text-gray-600">
        Don't have an account?{" "}
        <button
          onClick={() => {
            ToggleModel("Signup");
          }}
          className="text-pink-500"
        >
          Sign Up
        </button>
      </div>
      <ModelLogin isVisible={modelShown.Login} modelToggle={ToggleModel} />
      <ModelSignUp isVisible={modelShown.Signup} modelToggle={ToggleModel} />
      <ModelPersonal
        isVisible={modelShown.Personal}
        modelToggle={ToggleModel}
      />
      <ModelJobStatus
        isVisible={modelShown.JobStatus}
        modelToggle={ToggleModel}
      />
      <ModelJobDetails1
        isVisible={modelShown.JobDetails1}
        modelToggle={ToggleModel}
      />
      <ModelJobDetails2
        isVisible={modelShown.JobDetails2}
        modelToggle={ToggleModel}
      />
      <ModelRelationShip
        isVisible={modelShown.RelationShip}
        modelToggle={ToggleModel}
      />
      <ModelInterested
        isVisible={modelShown.Intersted}
        modelToggle={ToggleModel}
      />
    </div>
  );
}

export default Login;
