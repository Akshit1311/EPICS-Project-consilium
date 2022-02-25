import React from "react";
import MentorCard from "./MentorCard";

const MentorGrid: React.FC = () => {
  return (
    <div className="mx-8 grid grid-cols-7 place-items-center gap-8">
      {Array.from(Array(21).keys()).map((key, index) => (
        <MentorCard />
      ))}
    </div>
  );
};

export default MentorGrid;
