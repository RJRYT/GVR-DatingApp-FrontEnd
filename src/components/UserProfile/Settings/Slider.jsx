import React from 'react'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function CustomSlider({onChange, value, min, max}) {
  return (
    <Slider
      range
      allowCross={false}
      defaultValue={[min, max]}
      value={value}
      min={min}
      max={max}
      trackStyle={{ backgroundColor: "#c09ec9", height: "7px" }}
      handleStyle={[
        {
          backgroundColor: "black",
          width: "20px",
          height: "20px",
          marginTop: "-6px",
          border: "none",
          opacity: 1,
        },
        {
          backgroundColor: "black",
          width: "20px",
          height: "20px",
          marginTop: "-6px",
          border: "none",
          opacity: 1,
        },
      ]}
      railStyle={{ backgroundColor: "grey", height: "7px" }}
      onChangeComplete={onChange}
    />
  );
}

export default CustomSlider;