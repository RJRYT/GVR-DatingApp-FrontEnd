import React from 'react'
import SettingsSelect from "./SettingsSelect";
import SettingsInput from "./SettingsInput";
import SettingsBtn from "./SettingsBtn";

function EmailBody() {
  return (
    <div className="ps-2 sm:px-4 py-8 grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <SettingsSelect label={"Mail Driver"} span={"*"} option={"SMTP"} />
        <SettingsInput label={"Mail Host"} span={"*"} type={"text"} holder={"smtp.mailtrap.io"} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <SettingsInput
          label={"Mail Port"}
          span={"*"}
          type={"text"}
          holder={"2525"}
        />
        <SettingsInput
          label={"Mail Username"}
          span={"*"}
          type={"text"}
          holder={"5b1c11edfg564"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <SettingsInput
          label={"Mail Password"} span={"*"} type={"password"}
          holder={"+919745687820"}
        />
        <SettingsSelect label={"Mail Encryption"} span={"*"} option={"TLS"} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <SettingsInput
          label={"Sender Email"}
          span={"*"}
          type={"text"}
          holder={"info@gmail.com"}
        />
        <SettingsInput
          label={"Sender Name"}
          span={"*"}
          type={"text"}
          holder={"infoCompany"}
        />
      </div>
      <SettingsBtn />
    </div>
  )
}

export default EmailBody