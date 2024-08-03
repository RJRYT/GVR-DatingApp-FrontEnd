import React from "react";
import ProfileCard from "./ProfileCard";

// Import profile images
import m4 from "../../../assets/matches/profilePics/m4.jpg";
import m5 from "../../../assets/matches/profilePics/m5.jpg";
import m6 from "../../../assets/matches/profilePics/m6.jpg";
import w4 from "../../../assets/matches/profilePics/w4.jpg";
import w5 from "../../../assets/matches/profilePics/w5.jpg";
import w6 from "../../../assets/matches/profilePics/w6.jpg";

const profiles = [
  {
    name: "Sithara Nair",
    gender: "F",
    age: " 25yrs",
    occupation: "Developer",
    location: "Hyderabad",
    image: w4,
  },
  {
    name: "Christina",
    gender: "F",
    age: "18yrs",
    occupation: "Architect",
    location: "Hyderabad",
    image: w5,
  },
  {
    name: "Aleena",
    gender: "F",
    age: "23yrs",
    occupation: "Developer",
    location: "Hyderabad",
    image: w6,
  },
  {
    name: "Alex",
    gender: "M",
    age: "25yrs",
    occupation: "Designer",
    location: "Kerala",
    image: m4,
  },
  {
    name: "Chris",
    gender: "M",
    age: "19yrs",
    occupation: "Developer",
    location: "karnataka",
    image: m5,
  },
  {
    name: "John",
    gender: "M",
    age: "30yrs",
    occupation: "Teacher",
    location: "Bangalore",
    image: m6,
  },
];

const ProfileGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileGrid;
