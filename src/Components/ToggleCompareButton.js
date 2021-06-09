import React from "react";

const ToggleCompareButton = ({ handleToggleCompareButtonClick, view }) => {
  console.log("BUTTON: ", view);

  const buttonName = view === "single" ? "Compare" : "Analysis";

  return (
    <div>
      <button onClick={handleToggleCompareButtonClick}>{buttonName}</button>
    </div>
  );
};

export default ToggleCompareButton;
