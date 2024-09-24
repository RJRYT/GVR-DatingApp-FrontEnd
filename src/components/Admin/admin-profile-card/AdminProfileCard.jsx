import React, { useContext, useEffect, useState } from "react";
import adminProfile from "../../../assets/Admin/profile-images/adminProfile.jpg";
import { Image, Mail, Phone, User, User2 } from "lucide-react";
import { AdminContext } from "../../../contexts/AdminContext";

function AdminProfileCard() {
  const { authState , loading } = useContext(AdminContext)
  const [ admin , setAdmin ] =useState({
     userName:"",
     location:"",
     nationality:"",
     phoneNumber:"",
     email:""
  })
  
  useEffect(() => {
    if (!loading && authState.isAuthenticated) {
      const adminDetails = {
        userName: authState?.admin?.userName,
        location: authState?.admin?.location,
        nationality: authState?.admin?.nationality,
        phoneNumber: authState?.admin?.phoneNumber,
        email: authState?.admin?.email,
      };
      setAdmin(adminDetails);
    }
  }, [loading, authState]);

  return (
    <div className="w-1/4 h-[90%] bg-white p-5 rounded-2xl flex gap-6 flex-col overflow-auto">
      <div className="w-full h-max  grid gap-5 place-items-center mt-5 ">
        <div className="w-24 h-24 border-[3px] border-pink-600 rounded-full overflow-hidden">
        <img src={adminProfile} alt="profile image" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <h3 className="font-medium">{admin.userName}</h3>
          <p className="text-xs ">{admin.location}</p>
          <p className="text-xs ">{admin.nationality}</p>
        </div>
      </div>

      <div className="w-full h-[calc(100%-25%)] ">
        <div className="w-full h-12  text-start border-zinc-200 border-t border-b flex gap-3 items-center justify-center">
          <div className=" w-4/5  flex gap-3">
            <User2 size={16} />
            <h1 className="text-sm"> Administrator</h1>
          </div>
        </div>
        <div className="text-sm flex flex-col items-center  gap-6 mt-5">
          <div className="w-4/5 flex flex-col items-center  gap-6">
            <span className="w-full flex gap-3 items-center justify-start ">
              <Phone size={16} /> {admin.phoneNumber}
            </span>
            <span className="w-full flex gap-3 items-center justify-start">
              <Mail size={16} /> {admin.email}
            </span>
            <span className="w-full flex gap-3 items-center justify-start truncate">
              <Image size={16} /> PDT -1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfileCard;