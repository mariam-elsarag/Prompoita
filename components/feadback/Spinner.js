import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`rounded-full animate-spin border-t-transparent w-12 h-12  border-2 border-primary-orange`}
      ></div>
    </div>
  );
};

export default Spinner;
