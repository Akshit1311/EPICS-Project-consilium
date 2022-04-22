import icons from "@assets/icons";
import Image from "next/image";
import React, { useState } from "react";

const Lessons = () => {
  const [likes, setLikes] = useState(20);
  const [disLikes, setDisLikes] = useState(6);

  return (
    <div>
      <iframe
        className="mx-auto aspect-video"
        width="60%"
        src="https://www.youtube.com/embed/plmtgZhMwUI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      <div className="flex gap-4 p-16 text-white">
        <Image
          src="https://avatars.githubusercontent.com/u/34763983?v=4"
          height="100"
          width="100"
          className="mr-4 rounded-full"
        />
        <div className="flex-1">
          <div className="mb-4 text-2xl">Guide to How 11yr olds are becoming rich via NFTs</div>
          <a
            href="https://github.com/Akshit1311"
            className="text-slate-500 hover:text-slate-400"
            target="_blank"
          >
            @Akshit1311
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => setLikes((prev) => prev + 1)}
          >
            {icons.like} {likes}
          </div>
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => setDisLikes((prev) => prev + 1)}
          >
            {icons.dislike} {disLikes}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard");
            }}
          >
            {icons.share}
          </div>
        </div>
      </div>
      <div className="px-16 text-white">
        NFTs are Non-fungible tokens, where fungible means replaceable and tokens are generally
        assets. In this session, we will:
        <ul>
          <li> Get an introduction to blockchain</li>
          <li> The rise of Bitcoin</li>
          <li> Importance of blockchain</li>
          <li> Opportunities and tools</li>
          <li> Prerequisites to getting started</li>
          <li> How to install and set up development environment (Truffle)</li>
        </ul>
      </div>
    </div>
  );
};

export default Lessons;
