import React, { useState } from "react";
import Select from "react-select/creatable";

const customStyles = {
  control: (base, state) => ({
    ...base, 
    border: "0px solid transparent",
    borderRadius: "0px",
    backgroundColor: "transparent",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "pointer",
    },
  }),
  placeholder: (styles) => {
    return {
      ...styles,
      textAlign: "start",
      color: "#6b7280",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      textAlign: "start",
      color: "#6b7280",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      zIndex: "10",
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      color: "#6b7280",
      fontWeight: "bold",
    };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#f9d9df",
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#454545",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "#454545",
    ":hover": {
      backgroundColor: "#fdb7ef",
    },
  }),
};

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

const CustomSelect = ({
  Options,
  Placeholder,
  OnChange,
  name,
  ClassName
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(Options);
  const [value, setValue] = useState([]);

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    const newOption = createOption(inputValue);
    setOptions((prev) => [...prev, newOption]);
    handleInputChange([...value, newOption]);
  };

  const handleInputChange = (e) => {
    setIsLoading(true);
    setValue(e);
    const Obj = {
      target: {
        name,
        value: e,
      },
    };
    OnChange(Obj);
    setIsLoading(false);
  };

  return (
    <Select
      isMulti
      isClearable
      className={ClassName}
      classNamePrefix={"dropdown"}
      isLoading={isLoading}
      styles={customStyles}
      options={options}
      onCreateOption={handleCreate}
      placeholder={Placeholder}
      onChange={handleInputChange}
      value={value}
    />
  );
};

export default CustomSelect;
