import React from "react";
import Select from "react-select";

function CustomSelect({ value, options, onChange, isMulti = false }) {
  return (
    <Select
      isClearable
      value={value}
      onChange={onChange}
      options={options}
      className={"custom-select"}
      classNamePrefix={"custom-select"}
      isMulti={isMulti}
    />
  );
}

export default CustomSelect;
