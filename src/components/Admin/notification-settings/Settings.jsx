import React from "react";
import SettingsTitle from "./SettingsTitle";
import SMSBody from "./SMSBody";
import EmailBody from "./EmailBody";

function Settings() {
  return (
    <div className="md:w-[80%] md:mx-auto py-14">
      <div className="grid gap-10">
        <div className="bg-white py-4 border-l-4 border-l-blue-100 shadow-lg">
          <SettingsTitle title={"Update SMS Setting"} />
          <SMSBody />
        </div>
        <div className="bg-white py-4 border-l-4 border-l-blue-100 shadow-lg">
          <SettingsTitle title={"Update Mail Setting"} />
          <EmailBody />
        </div>
      </div>
    </div>
  );
}

export default Settings;