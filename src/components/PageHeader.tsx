import Head from "next/head";
import React from "react";

const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="letter font-raleway text-7xl font-black tracking-[-.1em]">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {title}
      <div className="h-2 w-full bg-gradient-to-r from-[white] via-[#D7B605] to-[#D7B605]"></div>
    </div>
  );
};

export default PageHeader;
