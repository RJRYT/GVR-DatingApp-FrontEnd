import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading";
import LoadingOverlay from "../Loading/LoadingOverlay";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
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
  
  const navigate = useNavigate();
  const { authState, checkAuthStatus, loading } = useContext(AuthContext);
  const [pageLoading, setPageLoading] = useState(false);
  const [professionType, setProfessionType] = useState("");
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
    if (!authState.isAuthenticated) {
      window.location.href = `${process.env.REACT_APP_API_URL}/api/auth/google/login`;
      return;
    }
    checkRegistrationStatus();
    toast.success("You are already loggined. Proceed to next step...");
  };

  const handleLoginClick = () => {
    if (!authState.isAuthenticated) return ToggleModel("Login");
    checkRegistrationStatus();
    toast.success("You are already loggined. Proceed to next step...");
  };

  const handleSignUpClick = () => {
    if (!authState.isAuthenticated) return ToggleModel("Signup");
    checkRegistrationStatus();
    toast.success("You are already loggined. Proceed to next step...");
  };

  const checkRegistrationStatus = () => {
    setPageLoading(true);
    try {
      if (!loading && authState.isAuthenticated) {
        if (
          authState.user.personalInfoSubmitted &&
          authState.user.professionalInfoSubmitted &&
          authState.user.purposeSubmitted
        ) {

          if(authState.user.twoFA ===  "True"){
          
            console.log("2fa is enabled");
            return navigate("/dashboard");
            //return navigate("/twoFAcheck");
          }
          else{
            return navigate("/dashboard");}
        }
        if (!authState.user.personalInfoSubmitted) return ToggleModel("Personal");
        if (!authState.user.professionalInfoSubmitted)
          return ToggleModel("JobStatus");
        if (!authState.user.purposeSubmitted) return ToggleModel("RelationShip");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const check2faEnabled = Cookies.get("accessToken");
    

    console.log("cookies",check2faEnabled)
    if (token) {
      checkAuthStatus();
      checkRegistrationStatus();
      navigate( (check2faEnabled==="true")? "/login/2fa":"/login");
    }
  }, []);

  useEffect(() => {
    if (!loading && authState.isAuthenticated) checkRegistrationStatus();
  }, [loading, authState]);

  if (loading) return <Loading />;

  return (
    <>
      {pageLoading && <LoadingOverlay />}
      <div className="flex flex-col items-center justify-center h-screen m-0 font-sans bg-white">
        <div className="relative w-[300px] max-w-md">
          <img src={Illustration} alt="Illustration" className="w-full" />
        </div>
        <div className="my-5 text-2xl text-center text-gray-800">
          Let’s meet new <br /> people around you
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={handleLoginClick}
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
          <button onClick={handleSignUpClick} className="text-pink-500">
            Sign Up
          </button>
        </div>
        {modelShown.Login && (<ModelLogin
          isVisible={modelShown.Login}
          modelToggle={ToggleModel}
          setLoading={setPageLoading}
        />)}
        {modelShown.Signup && (<ModelSignUp
          isVisible={modelShown.Signup}
          modelToggle={ToggleModel}
          setLoading={setPageLoading}
        />)}
        {modelShown.Personal && (<ModelPersonal
          isVisible={modelShown.Personal}
          modelToggle={ToggleModel}
          setLoading={setPageLoading}
        />)}
        {modelShown.JobStatus && (<ModelJobStatus
          isVisible={modelShown.JobStatus}
          modelToggle={ToggleModel}
          setLoading={setPageLoading}
          setProfessionType={setProfessionType}
        />)}
        {modelShown.JobDetails1 && (<ModelJobDetails1
          isVisible={modelShown.JobDetails1}
          modelToggle={ToggleModel}
          setLoading={setPageLoading}
          professionType={professionType}
        />)}
        {modelShown.JobDetails2 && (<ModelJobDetails2
          isVisible={modelShown.JobDetails2}
          modelToggle={ToggleModel}
          setLoading={setPageLoading}
          professionType={professionType}
        />)}
        {modelShown.RelationShip && (<ModelRelationShip
          isVisible={modelShown.RelationShip}
          modelToggle={ToggleModel}
          setLoading={setPageLoading}
        />)}
        {modelShown.Intersted && (<ModelInterested
          isVisible={modelShown.Intersted}
          modelToggle={ToggleModel}
          setLoading={setPageLoading}
        />)}
      </div>
    </>
  );
}

export default Login;
