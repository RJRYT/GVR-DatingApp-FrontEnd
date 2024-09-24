import React from "react";

function SubscriptionAddInput({ label, name, value, onChange, type = "text", ...rest }) {
  return (
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="w-full px-4 py-3 border-2 border-gray-300 outline-none rounded-lg capitalize"
      {...rest}
    />
  );
}

export default SubscriptionAddInput;
