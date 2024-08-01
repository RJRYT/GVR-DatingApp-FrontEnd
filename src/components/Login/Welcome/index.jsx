import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Phone from "../../../assets/login/phone.png";
import Google from "../../../assets/login/google.png";
import Illustration from "../../../assets/login/illustration.png";
import SignUp from './Model/SignUp';
import Login from './Model/Login';
import PersonalDetails from './Model/PersonalDetails';
import JobStatus from './Model/JobStatus';
import JobDetails from './Model/JobDetails';
import JobDetails2 from './Model/JobDetails2';
import RelationshipGoals from './Model/RelationshipGoals';

function Welcome() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoginModalVisible,setLoginModalVisible]=useState(false)
  const [isPersonalDetails,setPersonalDetails] = useState(false)
  const [isJobStatusModalVisible,setJobStatusModalVisible] = useState(false);
  const [isJobDetailsModalVisible,setJobDetailsModalVisible] = useState(false);
  const [isJobDetails2ModalVisible,setJobDetails2ModalVisible] = useState(false);
  const [isRelationshipModalVisible,setRelationshipModalVisible] = useState(false);


  const handleSignUpClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleLoginClick = () => {
    setLoginModalVisible(true);
  };
  const handleLoginClose =()=>{
    setLoginModalVisible(false)
  }
  const handleSwitchToLogin = () => {
    setModalVisible(false);
    setLoginModalVisible(true);
  };
  const handlePersonalDetailsClose=()=>{
    setPersonalDetails(false)
  }
  const handleSwitchToPersonalDetails=()=>{
    setLoginModalVisible(false)
    setPersonalDetails(true)
  }
  const handleSwitchToSignUp = () => {
    setLoginModalVisible(false);
    setModalVisible(true);
  };
  const handleSwitchToJobStatus =()=>{
    setPersonalDetails(false);
    setJobStatusModalVisible(true);
  }
  
  const handleJobStatusClose =()=>{
    setJobStatusModalVisible(false);
  }
  const handleSwitchToJobDetails=()=>{
    setJobStatusModalVisible(false);
    setJobDetailsModalVisible(true);
  }
  const handleJobDetailsClose =()=>{
    setJobDetailsModalVisible(false);
  }

  const handleSwitchToJobDetails2=()=>{
    setJobStatusModalVisible(false);
    setJobDetails2ModalVisible(true);
  }
  const handleJobDetails2Close =()=>{
    setJobDetails2ModalVisible(false);
  }
  const handleSwitchToRelationship=()=>{
    setJobDetailsModalVisible(false);
    setJobDetails2ModalVisible(false)
    setRelationshipModalVisible(true);
  }
  const handleRelationshipClose =()=>{
    setJobDetails2ModalVisible(false);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen m-0 font-sans bg-white">
      <div className="relative w-[300px] max-w-md">
        <img src={Illustration} alt="Illustration" className="w-full" />
      </div>
      <div className="my-5 text-2xl text-center text-gray-800">
        Let’s meet new <br /> people around you
      </div>
      <div className="flex flex-col items-center">
        <Link to="#" className="flex items-center justify-around w-48 h-10 my-2 font-bold text-white bg-pink-700 rounded-full">
          <img src={Phone} alt="Phone Icon" className="w-7 h-7 p-1 bg-white rounded-full" />
          Login with Phone
        </Link>
        <Link to="#" className="flex items-center justify-around w-48 h-10 my-2 font-bold text-pink-700 bg-pink-100 rounded-full">
          <img src={Google} alt="Google Icon" className="w-7 h-7 p-1 bg-white rounded-full" />
          Login with Google
        </Link>
      </div>
      <div className="mt-5 text-sm text-gray-600">
        Don't have an account? <button onClick={handleSignUpClick} className="text-pink-500">Sign Up</button>
      </div>
      <SignUp isVisible={isModalVisible} onClose={handleCloseModal} onSwitchToLogin={handleSwitchToLogin}/>
      <Login isVisible={isLoginModalVisible} onClose={handleLoginClose} onSwitchToPersonalDetails={handleSwitchToPersonalDetails} onSwitchToSignUp={handleSwitchToSignUp}/>
      <PersonalDetails isVisible={isPersonalDetails} onClose={handlePersonalDetailsClose} onSwitchToJobStatus={handleSwitchToJobStatus}/>
      <JobStatus isVisible={isJobStatusModalVisible} onClose={handleJobStatusClose} onSwitchToJobDetails={handleSwitchToJobDetails} onSwitchToJobDetails2={handleSwitchToJobDetails2}/>
      <JobDetails isVisible={isJobDetailsModalVisible} onClose={handleJobDetailsClose} onSwitchToRelationship={handleSwitchToRelationship}/>
      <JobDetails2 isVisible={isJobDetails2ModalVisible} onClose={handleJobDetails2Close} onSwitchToRelationship={handleSwitchToRelationship}/>
      <RelationshipGoals isVisible={isRelationshipModalVisible} onClose={handleRelationshipClose} />
    </div>
  );
}

export default Welcome;