import React from "react";

import { ChevronRight } from "lucide-react";
import { UserProfile } from "../../constants";
import { formList } from "../../constants";
import { checkBoxes, companyForm } from "../../constants/form-list";
import { CustomForm, OptionButtons, UserForm } from "../../components/Admin";
import TopBar from "../../components/Admin/top-bar/Topbar";

function UserProfileScreen() {
  return (
    <div className="w-[calc(100vw-4rem)] h-screen flex  gap-5 flex-col items-center overflow-auto ">
      <div className="w-[90%] h-max bg-white flex gap-32 rounded-2xl  ">
        <div className="w-1/4 h-[90%]   p-5 px-5 ml-8 flex gap-5 flex-col items-center">
          <div className="w-full grid place-items-center">
            <div className="w-32 h-32 overflow-hidden border-[3px]  border-pink-600 rounded-full">
              <img
                src={UserProfile}
                alt="user profile"
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full  border border-zinc-400  py-2 px-3 rounded-lg flex gap-5 items-center justify-center">
            <img
              src={UserProfile}
              alt="user-images/reels"
              className="w-16 h-16 rounded-lg"
            />
            <img
              src={UserProfile}
              alt="user-images/reels"
              className="w-16 h-16 rounded-lg"
            />
            <img
              src={UserProfile}
              alt="user-images/reels"
              className="w-16 h-16 rounded-lg"
            />
            <ChevronRight size={30} />
          </div>

          <div className="w-full h-max pb-5  ">
            <UserForm />
          </div>
        </div>
        <div className="w-1/4 h-full p-3 mt-20">
          <CustomForm inputs={formList} />
          <h1 className="font-medium my-3">Job title</h1>
          <CustomForm inputs={companyForm} />
          <h1 className="font-medium my-3">Registered in</h1>
          <CustomForm inputs={checkBoxes} />
          <h1 className="font-medium my-3">Subscribed in</h1>
          <CustomForm inputs={checkBoxes} />
          <OptionButtons />
        </div>
      </div>
    </div>
  );
}

export default UserProfileScreen;