import icons from "@assets/icons";
import Image from "next/image";
import React from "react";

const MentorCard = () => {
  return (
    <div className="text-white">
      <Image src={`/Mentors/mentor1.png`} height="300" width="300" />
      <div className="text-lg font-medium">Olivia Rhye</div>
      <div className="flex items-center gap-1">{icons.link} Aiony Haust</div>
    </div>
  );
};

export default MentorCard;
