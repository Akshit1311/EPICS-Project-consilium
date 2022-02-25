import MentorGrid from "@components/Mentors/MentorGrid";
import PageHeader from "@components/PageHeader";
import React from "react";

const Mentors = () => {
  return (
    <div>
      <div className="my-8 pl-32 text-white">
        <PageHeader title="Mentors" />
      </div>

      <MentorGrid />
    </div>
  );
};

export default Mentors;
