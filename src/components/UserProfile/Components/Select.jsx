import React from "react";
import Select from "react-select";

function CustomSelect({ value, options, onChange }) {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      className={"custom-select"}
      classNamePrefix={"custom-select"}
    />
  );
}

export default CustomSelect;
