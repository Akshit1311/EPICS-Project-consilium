import React from "react";

const PurpleButton: React.FC = ({ children }) => {
  return (
    <button className="rounded-full bg-gradient-to-br from-[#CD10FF] to-[#9F06FF] py-3 px-7 text-xs font-bold uppercase text-white">
      {children}
    </button>
  );
};

export default PurpleButton;
