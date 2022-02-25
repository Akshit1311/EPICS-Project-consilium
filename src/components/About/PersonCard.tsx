import Image from "next/image";
import React from "react";

const PersonCard: React.FC<{ index: number; name: string }> = ({ index, name }) => {
  return (
    <div>
      <div className="relative h-[45vh] w-full">
        <Image src={`/About/person${index}.png`} layout="fill" className="object-contain" />
      </div>

      <div className="mt-4 text-center text-white">
        <div className="text-3xl">Andry Ford</div>
        <div className="text-2xl">CEO at Consillium</div>
      </div>
    </div>
  );
};

export default PersonCard;
