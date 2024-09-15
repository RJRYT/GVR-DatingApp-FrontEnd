import React from "react";
import {
  TopBar,
  EditProfile,
  AdminProfileCard,
  StaffsContainer,
  WorkDoneContainer,
} from "../../components/Admin";

function EditProfileScreen() {
  return (
    <div className="w-[calc(100vw-4rem)] h-screen  overflow-auto">
      <div className="w-full h-full flex">
        <div className="w-[70%] h-4/5 flex gap-6 items-start justify-center ">
          <AdminProfileCard />
          <EditProfile />
        </div>
        <div className="w-[28%] h-full ">
          <StaffsContainer />
          <WorkDoneContainer />
        </div>
      </div>
    </div>
  );
}

export default EditProfileScreen;