import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className="rounded-full w-14 h-14 absolute border-4 border-gray-200"></div>
        <div className="rounded-full w-14 h-14 absolute border-4 border-rose-600 animate-spin  border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Spinner;
