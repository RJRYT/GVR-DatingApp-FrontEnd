import React from "react";

import { notifications } from "../../../constants/notification";
import ListLeftSection from "./ListLeftSection";
import ListRightSection from "./ListRightSection";

function NotificationsList() {
  const orange = "#FF5400";
  const yellow = "#FFDB4D";
  const violat = "#5856D6";
  return (
    <div className="xl:w-[80%] pb-5 mt-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wider">
        Notification Management
      </h1>
      <div className="my-10 grid">
        <div className="p-5 md:p-10 bg-white grid gap-5 rounded-t-lg shadow">
          <h1 className="text-lg text-customOrange font-semibold tracking-wider">
            Notifications
          </h1>
          {notifications.map((obj, index) => (
            <div key={index} className="p-2 md:p-0 grid md:flex md:justify-between items-center gap-3 border md:border-none rounded-lg">
              <ListLeftSection object={obj} index={index} />
              <ListRightSection />
            </div>
          ))}
        </div>
        <div className="w-full p-3 md:p-5 bg-standard border-t-4 border-t-primary  rounded-b-lg">
          <h3 className="font-semibold tracking-wider mt-5">Previous Notifications</h3>
        </div>
      </div>
    </div>
  );
  
}

export default NotificationsList;