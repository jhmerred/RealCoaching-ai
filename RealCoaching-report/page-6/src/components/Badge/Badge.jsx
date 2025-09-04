/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Badge = ({ colot, className }) => {
  return (
    <div
      className={`border border-solid w-[15px] h-[15px] rounded-[100px] ${colot === "red" ? "border-[#f67e76]" : "border-[#6bd763]"} ${colot === "red" ? "bg-[#ffa099]" : "bg-[#a3f08a]"} ${className}`}
    />
  );
};
