import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
const Hero = ({ video }) => {
  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M views"; // Format to millions
    }
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + "k views"; // Format to thousands
    }
    return views; // Return the original number for values below 1000
  };

  return (
    <div className="">
      {/* Adjust width for video card */}
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col gap-4">
          {/* Thumbnail Section */}
          <div className="w-full h-36 sm:h-44">
            <img
              src={video?.thumbnails[0]?.url}
              alt={video?.title}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          {/* Description Section */}
          <div className="flex justify-center items-start gap-2">
            {/* Avatar */}
            <div className="h-10 w-10  rounded-full overflow-hidden">
              <img
                src={video?.author?.avatar[0]?.url}
                alt={video?.author?.name}
                className="h-full w-full object-cover"
              />
            </div>
            {/* middle seciton */}
            <div className="flex flex-col flex-1 gap-1">
              {/* title  */}
              <p className="line-clamp-2 text-sm font-semibold leading-tight">
                {video?.title}
              </p>
              {/* channnel name */}
              <div className="flex items-center gap-1">
                <p className="text-sm text-gray-500">{video?.author?.title}</p>
                {video?.author?.badges[0]?.text === "Verified" ? (
                  <MdVerified className="text-gray-500" />
                ) : null}
              </div>
              {/* views section */}
              <div className="flex items-center gap-1 mb-1">
                <span className="text-sm text-gray-500">
                  {formatViews(video?.stats?.views)}
                </span>
                {video?.stats?.views && video?.publishedTimeText ? (
                  <span className="h-1 w-1 bg-gray-500 rounded-full text-center"></span>
                ) : null}
                <span className="text-sm text-gray-500">
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
            {/* three dot */}
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
