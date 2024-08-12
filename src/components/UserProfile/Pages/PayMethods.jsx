import React from "react";
import { RiCloseLine } from "react-icons/ri";
import MasterCard from "../../../assets/logo/MasterCard_Logo.svg.png";
import VISA from "../../../assets/logo/1-16404_visa-visa-logo-png-white-transparent-png.png";
import PetraStark from "../../../assets/logo/PetraStrack.png";
import dollar from "../../../assets/logo/dollar_icon.webp";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const PayMethods = () => {

return (  
    <>
  <div className="relative bg-white rounded-t-3xl min-h-[calc(100vh - 30px)] p-6 mt-4">
  
  <div className="flex items-center justify-between absolute top-5 left-0 right-0 px-6">
    <RiCloseLine className="text-black text-3xl cursor-pointer" />
    <span className="text-black font-mono text-xl">Done</span>
  </div>



<h1 className="mt-10 text-fuchsia-900 text-2xl font-medium text-center w-full max-w-screen-lg mx-auto pt-3 pb-4 tracking-wide">
        Payments methods
      </h1>
      <p className="text-left text-xs font-semibold ml-3 mr-1">choose desired payment type.We offer easy ways<br/> for payments on our app</p>
      <div className="mt-4 mx-3 p-4 border border-red-600 rounded-md flex items-center justify-center">
      <img src={MasterCard} className="w-[25%] mr-4" alt="MasterCard Logo" />
      <div className="text-left">
        <h4 className="text-black font-medium text-lg mb-1">**********4444</h4>
        <p className="text-gray-500 text-xs font-medium mt-[-0.8rem]">Expires 09/25</p>
      </div>
    </div>

    <div className="mt-4 mx-3 p-4 border border-gray-350 rounded-md flex items-center justify-center shadow-md">
      <img src={VISA} className="w-[25%] mr-4 bg-transparent" alt="VISA Logo" />
      <div className="text-left">
        <h4 className="text-black font-medium text-lg mb-1">**********3343</h4>
        <p className="text-gray-500 text-xs font-medium mt-[-0.8rem]">Expires 09/25</p>
      </div>
    </div>

    <div className="mt-4 mx-3 p-4 border border-gray-350 rounded-md flex items-center justify-center shadow-md">
      <img src={PetraStark} className="w-[25%] h-[16%] mr-4 bg-transparent ml-4" alt="P logo" />
      <div className="text-left">
        <h4 className="text-black font-medium text-sm mb-1 ml-8">Petra-stark@gmail.com</h4>
      </div>
    </div>

    <h3 className="transform uppercase font-medium ml-3 mt-10">Current Method</h3>

    <div className="mt-4 mx-3 p-4 border border-gray-350 rounded-md flex items-center justify-center relative shadow-md">
      <img src={dollar} className="w-[18%] h-[13%] mr-10 bg-transparent " alt="dollar Logo" />
      <div className="text-left">
        <h4 className="text-black font-medium text-sm mb-3  mr-10 ">Cash payment</h4>
        <p className="text-gray-500 text-xs font-medium mt-[-0.8rem]">Default method</p>


      </div>
      <IoIosArrowDropdownCircle className="text-indigo-900 absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />
    </div>

    <div className='px-8'>
    <button className='bg-fuchsia-950 w-full mt-16 mb-2 py-2 rounded-lg text-white text-md  transform uppercase'>Add Payment Method</button>
    </div>

    <div className="border-t border-indigo-900 mt-8 w-1/2 mx-auto"></div>

</div>
    
</>
);
};

export default PayMethods;