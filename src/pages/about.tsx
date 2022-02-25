import PersonCard from "@components/About/PersonCard";
import PageHeader from "@components/PageHeader";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="my-8 pl-32 text-white">
        <PageHeader title="About Us" />
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
