import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const SearchCard = ({ video }) => {
  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M views"; // Format to millions
    }
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K views"; // Format to thousands
    }
    return views + " views "; // Return the original number for values below 1000
  };

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 p-4 border-b transition duration-150 ease-in-out">
      <Link
        to={`/video/${video?.videoId}`}
        className="flex flex-col sm:flex-row gap-4 w-full"
      >
        {/* Thumbnail Section */}
        <div className="relative flex-shrink-0 w-full sm:w-40 h-40 sm:h-24 md:h-32">
          <img
            src={video?.thumbnails[0]?.url}
            alt={video?.title}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Video Details Section */}
        <div className="flex flex-col gap-2 w-full">
          {/* Title */}
          <p className="line-clamp-2 text-base sm:text-xl font-semibold leading-tight">
            {video?.title}
          </p>
          {/* Channel and Details */}
          <div className="flex flex-col gap-2 sm:items-start text-sm text-black">
            <div className="line-clamp-2 sm:line-clamp-1">
              {video?.descriptionSnippet}
            </div>

            <div className="flex items-center gap-2 sm:gap-1">
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt={video?.author?.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-medium text-xs sm:text-sm">
                {video?.author?.title}
              </p>
              {video?.author?.badges[0]?.text === "Verified" && (
                <MdVerified className="text-gray-400" />
              )}
            </div>

            <div className="flex items-center gap-1 text-xs sm:text-sm">
              <span>{formatViews(video?.stats?.views)}</span>
              {video?.stats?.views && video?.publishedTimeText && (
                <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
              )}
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchCard;
