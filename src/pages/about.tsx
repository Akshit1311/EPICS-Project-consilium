import PersonCard from "@components/About/PersonCard";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="my-8 pl-32 text-white">
        <div className="letter font-raleway text-7xl font-black tracking-[-.1em]">
          About Us
          <div className="h-2 w-full bg-gradient-to-r from-[white] via-[#D7B605] to-[#D7B605]"></div>
        </div>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tristique augue. Sed
          quis lorem dolor. Aliquam cursus eleifend erat, at consequat justo sodales ut. Duis
          ullamcorper iaculis dolor at rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quisque nec tristique augue. Sed quis lorem dolor. Aliquam cursus eleifend erat, at
          consequat justo sodales ut. Duis ullamcorper iaculis dolor at rutrum.
        </p>
      </div>

      <div className="mx-2 mt-16 grid grid-cols-4 gap-y-16">
        {Array.from(Array(4).keys()).map((key, index) => (
          <PersonCard key={key} index={index + 1} name="Andry Ford" />
        ))}
        {Array.from(Array(4).keys()).map((key, index) => (
          <PersonCard key={key} index={index + 1} name="Andry Ford" />
        ))}
      </div>
    </div>
  );
};

export default About;
