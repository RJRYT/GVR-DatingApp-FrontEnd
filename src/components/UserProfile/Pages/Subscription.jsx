import React from "react";
import { BiRupee } from "react-icons/bi";
import { BsCheck } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="items-center justify-center min-h-screen bg-fuchsia-950  ">
      <div className=" p-8 text-center">
        <h3 className=" text-white text-xl font-semibold">Subscription Plan</h3>
      </div>
      <div className="bg-black rounded-t-3xl min-h-screen p-8  mt-4 font-sans">
        <div className="flex text-white">
          <h4 className="text-3xl font-semibold">Prime Member</h4>
        </div>
        <div className="text-center text-5xl text-white font-bold flex pt-4 ">
          <BiRupee className="inline-block" />
          49/-<span className="text-3xl font-normal pt-2">Month</span>
        </div>
        <div className="space-y-4 p-8 text-white pb-4">
          <div className="flex items-start border-b ">
            <BsCheck className="mr-2 bg-white rounded-full text-black mt-2" />
            <div className="pl-2">
              <p className="text-lg font-semibold">Daily Limits</p>
              <p className="text-sm">View up to 15 profiles per day</p>
              <p className="text-sm pb-4">Send up to 15 requests per day</p>
            </div>
          </div>
          <div className="flex items-start border-b ">
            <BsCheck className="mr-2 bg-white rounded-full text-black mt-2" />
            <div className="pl-2">
              <p className="text-lg font-semibold">Weekly Limits</p>
              <p className="text-sm">View up to 90 profiles per week</p>
              <p className="text-sm pb-4">Send up to 90 requests per week</p>
            </div>
          </div>
          <div className="flex items-start border-b ">
            <BsCheck className="mr-2 bg-white rounded-full text-black mt-2" />
            <div className="pl-2">
              <p className="text-lg font-semibold">Monthly Limits</p>
              <p className="text-sm">View up to 300 profiles per month</p>
              <p className="text-sm pb-4">Send up to 300 requests per month</p>
            </div>
          </div>
          <div className="flex items-start">
            <BsCheck className="mr-2 bg-white rounded-full text-black mt-2" />
            <div className="pl-2">
              <p className="text-lg font-semibold">Premium Features</p>
              <p className="text-sm">Unlock Unlimited Messages</p>
              <p className="text-sm">Unlock Shortlist Page</p>
              <p className="text-sm">View Profiles Who Shortlisted You</p>
              <p className="text-sm">Sort & Filter Profiles</p>
            </div>
          </div>
        </div>
        <div className="text-center ">
          <Link
            to={"/dashboard/@me/payment"}
            className="text-white bg-neutral-700 px-24 py-4 rounded-full text-xl "
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
