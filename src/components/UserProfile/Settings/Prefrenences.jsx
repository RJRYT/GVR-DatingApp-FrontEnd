import React from "react";
import { FaSearch } from "react-icons/fa";
import Slider from "../Components/Slider";
import Select from "../Components/Select";
import Badge from "../Components/Badge";
import Navbar from "../../Dashboard/Navbar";

const locations = ["Kochi", "Kollam", "Aluva"];
const interests = ["yoga", "jazz", "reading"];

function PrefrenencesSettings() {
  return (
    <>
      <div className="items-center justify-center min-h-screen bg-fuchsia-950">
        <div className="flex p-6">
          <button className="rounded-full border-white border-2 p-2 bg-[#DD88CF] ml-4">
            <FaSearch className="text-white" />
          </button>
          <h3 className="flex-1 text-center text-white text-2xl font-bold">
            Preferences
          </h3>
        </div>
        <div className="bg-white rounded-t-3xl min-h-[calc(100vh - 30px)] p-6 mt-4">
          <div className="w-full flex justify-center mb-1">
            <div className="w-5 rounded-full md:w-10 lg:w-16 h-1 bg-gray-200 border-2"></div>
          </div>
          <div className="w-full flex justify-center mb-1">
            <div className="text-black mt-2 text-lg">Partner Preferences</div>
          </div>
          <div className="flex w-full md:w-[calc(100%-46px)] flex-col gap-5 items-center mx-0 md:mx-5">
            <div className="w-full md:w-2/3">
              <div className="flex">
                <span className="mr-auto">Age</span>
                <span className="ml-auto">18-35</span>
              </div>
              <Slider
                min={18}
                max={35}
                onChange={(e) => {
                  console.log(e);
                }}
              />
            </div>
            <div className="w-full md:w-2/3">
              Gender
              <Select
                onChange={(e) => {
                  console.log(e);
                }}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>
            <div className="w-full md:w-2/3">
              Loactions
              <div className="flex flex-wrap gap-2">
                {locations.map((loc, index) => (
                  <Badge key={index} name={loc} />
                ))}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              Interest & Hobbies
              <div className="flex flex-wrap gap-2">
                {interests.map((interst, index) => (
                  <Badge key={index} name={interst} />
                ))}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              Relationship Goals
              <Select
                onChange={(e) => {
                  console.log(e);
                }}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>
            <div className="w-full md:w-2/3">
              Education level
              <Select
                onChange={(e) => {
                  console.log(e);
                }}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex">
                <span className="mr-auto">Height</span>
                <span className="ml-auto">cm100-220</span>
              </div>
              <Slider
                min={100}
                max={220}
                onChange={(e) => {
                  console.log(e);
                }}
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex">
                <span className="mr-auto">Weight</span>
                <span className="ml-auto">kg40-150</span>
              </div>
              <Slider
                min={40}
                max={150}
                onChange={(e) => {
                  console.log(e);
                }}
              />
            </div>
            <div className="w-full md:w-2/3">
              Lifestyle choice
              <Select
                onChange={(e) => {
                  console.log(e);
                }}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>
            <div className="w-full md:w-2/3">
              Religion
              <Select
                onChange={(e) => {
                  console.log(e);
                }}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>
            <div className="w-full md:w-2/3 pb-24">
              Occupation
              <Select
                onChange={(e) => {
                  console.log(e);
                }}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default PrefrenencesSettings;
