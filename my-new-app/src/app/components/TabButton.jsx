import React from "react";

const TabButton = ({ active, selecTab, childern }) => {
  const buttonClasses = active
    ? "text-white birder-b border-purple-500"
    : "text-[#ADB7BE]border-b  border-purple-500";
  return (
    <button onClick={selecTab}>
      <p className={`mr-3 font-semibold hover:text-white  ${buttonClasses}`}>
        {childern}
      </p>
    </button>
  );
};

export default TabButton;
