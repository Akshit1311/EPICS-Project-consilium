import icons from "@assets/icons";
import React, { useState } from "react";
import PurpleButton from "./PurpleButton";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="mt-32  items-center overflow-hidden bg-purple-900 p-16">
      <div className="mx-auto flex w-10/12">
        <div className="mr-4">{icons.logo}</div>

        <div className="flex w-full items-center rounded-full bg-white px-2 ">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 py-2 pl-4 outline-none"
            placeholder="Email"
          />

          <div className="ml-auto w-fit">
            <PurpleButton>Subscribe</PurpleButton>
          </div>
        </div>
      </div>

      <div className="px-32 pt-16 text-white">
        <div className="font-bold">Help Menu</div>

        <div className="mt-4 flex gap-32">
          <div>
            About
            <br />
            Features
            <br />
            Works
            <br />
            Career
          </div>
          <div>
            Contact
            <br />
            Help & Support
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
