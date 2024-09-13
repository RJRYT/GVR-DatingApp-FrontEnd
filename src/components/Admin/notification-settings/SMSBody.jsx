import React from "react";
import SettingsSelect from "./SettingsSelect";
import SettingsInput from "./SettingsInput";
import SettingsBtn from "./SettingsBtn";

function SMSBody() {
  return (
    <div className="ps-2 sm:px-4 py-8 grid gap-5">
      <SettingsSelect label={"SMS Driver"} option={"Twillo"} />
      <div className="grid md:grid-cols-2 gap-5 ">
        <SettingsInput
          label={"Twillo SID"}
          type={"text"}
          holder={"AC8f8f8f3e3r3fladf343d"}
        />
        <SettingsInput label={"Nexmo Key"} type={"text"} holder={"7e293ce"} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <SettingsInput
          label={"Twillo Auth Token"}
          type={"password"}
          holder={"aldjfldajldjfdflkjdf"}
        />
        <SettingsInput
          label={"Nexmo Secret"}
          type={"password"}
          holder={"aldjfldajldjfdflkjdf"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <SettingsInput
          label={"Twillo Sender Number"}
          type={"text"}
          holder={"+919745687820"}
        />
        <SettingsInput
          label={"Nexmo Sender Name"}
          type={"text"}
          holder={"ABCDE"}
        />
      </div>
      <SettingsBtn />
    </div>
  );
}

export default SMSBody;