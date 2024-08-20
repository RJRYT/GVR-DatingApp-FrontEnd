import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import MasterCard from "../../../assets/logo/MasterCard_Logo.svg.png";
import VISA from "../../../assets/logo/1-16404_visa-visa-logo-png-white-transparent-png.png";
import PetraStark from "../../../assets/logo/PetraStrack.png";
import dollar from "../../../assets/logo/dollar_icon.webp";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const PayMethods = () => {
  return (
    <>
      <div className="relative bg-white rounded-t-3xl min-h-screen mt-4 space-y-6">
        <div className="flex items-center justify-between px-6 py-8 md:mx-16">
          <RiCloseLine className="text-black text-3xl cursor-pointer" />
          <h1 className=" text-fuchsia-900 text-2xl font-medium text-center mx-auto tracking-wide">
            Payments methods
          </h1>
          <span className="text-black font-mono text-xl">Done</span>
        </div>

        <p className="text-left text-xs font-semibold ml-3 mr-1 px-3 md:mx-16">
          choose desired payment type.We offer easy ways
          <br /> for payments on our app
        </p>
        <div className="mt-4 mx-3 md:mx-16 p-4 border border-red-600 rounded-md flex items-center justify-between">
          <img
            src={MasterCard}
            className="w-20 aspect-[3/2] object-contain"
            alt="MasterCard Logo"
          />
          <div className="text-left">
            <h4 className="text-black font-medium text-lg mb-1">
              **********4444
            </h4>
            <p className="text-gray-500 text-xs font-medium mt-[-0.8rem]">
              Expires 09/25
            </p>
          </div>
        </div>

        <div className="mt-4 mx-3 md:mx-16 p-4 border border-gray-350 rounded-md flex items-center justify-between shadow-md">
          <img
            src={VISA}
            className="w-20 aspect-[3/2] object-contain"
            alt="VISA Logo"
          />
          <div className="text-left">
            <h4 className="text-black font-medium text-lg mb-1">
              **********3343
            </h4>
            <p className="text-gray-500 text-xs font-medium mt-[-0.8rem]">
              Expires 09/25
            </p>
          </div>
        </div>

        <div className="mt-4 mx-3 md:mx-16 p-4 border border-gray-350 rounded-md flex items-center justify-between shadow-md">
          <img
            src={PetraStark}
            className="w-20 aspect-[3/2] object-contain"
            alt="P logo"
          />
          <div className="text-left">
            <h4 className="text-black font-medium text-sm mb-1 ml-8">
              Petra-stark@gmail.com
            </h4>
          </div>
        </div>

        <h3 className="transform px-3 md:mx-16 uppercase font-medium ml-3 mt-10">
          Current Method
        </h3>

        <div className="mt-4 mx-3 md:mx-16 p-4 border border-gray-350 rounded-md flex items-center justify-between relative shadow-md">
          <img
            src={dollar}
            className="w-20 aspect-[3/2] object-contain"
            alt="dollar Logo"
          />
          <div className="text-left">
            <h4 className="text-black font-medium text-sm mb-3  mr-10 ">
              Cash payment
            </h4>
            <p className="text-gray-500 text-xs font-medium mt-[-0.8rem]">
              Default method
            </p>
          </div>
          <IoIosArrowDropdownCircle className="text-indigo-900 absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />
        </div>

        <div className="text-center">
          <Link
            to={"/dashboard/@me/addcard"}
            className="bg-fuchsia-950 w-2/3 mt-10 mb-2 py-2 px-5 rounded-lg text-white text-xl font-bold"
          >
            Add Payment Method
          </Link>
        </div>
      </div>
    </>
  );
};

export default PayMethods;
