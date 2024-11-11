import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchData } from "../api/rapidapi";
import ReactPlayer from "react-player";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { RxDotsHorizontal } from "react-icons/rx";
import { useAuth } from "../context/AuthProvider";
import Loading from "../loader/Loading";

const VideoPlaying = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading } = useAuth();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
      console.log(res);
    });
  };

  const fetchRelatedVideos = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedVideos(res.contents); // Accessing 'contents' array
      console.log(res);
    });
  };

  const formatLikes = (likes) => {
    if (likes >= 1000000) {
      return (likes / 1000000).toFixed(1) + "M"; // Millions
    }
    if (likes >= 1000) {
      return (likes / 1000).toFixed(1) + "k"; // Thousands
    }
    return likes;
  };

  const handleRelatedVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-3 px-4 md:px-8">
      {/* Video Player Section */}
      <div className="md:w-[65%] w-full">
        <div className="h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            height="100%"
            width="100%"
            controls
            playing={true}
            style={{ backgroundColor: "#000000", borderRadius: "10px" }}
          />
        </div>

        {/* Video Details */}
        <div className="mt-3">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {video?.title}
          </h1>
          <div className="flex flex-col sm:flex-row justify-between mt-2">
            {/* Channel Profile and Subscribe Button */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full">
                <img
                  src={
                    video?.author?.avatar && video.author.avatar.length > 0
                      ? video.author.avatar[0].url
                      : "/path/to/default-avatar.jpg"
                  }
                  alt="Channel Avatar"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base">
                  {video?.author?.title}
                </span>
                <span className="text-xs sm:text-sm text-gray-600">
                  {video?.author?.stats?.subscribersText
                    ? video?.author?.stats?.subscribersText + " subscribers"
                    : null}
                </span>
              </div>
              <button className="bg-black px-2 sm:px-3 py-1 text-white rounded-full ml-5 text-xs sm:text-sm">
                Subscribe
              </button>
            </div>

            {/* Like, Dislike, Share Buttons */}
            <div className="flex gap-2 mt-2 sm:mt-0">
              <div className="border px-2 sm:px-3 py-1 bg-gray-200 flex items-center gap-2 rounded-full hover:bg-gray-300 cursor-pointer">
                <BiSolidLike className="text-lg sm:text-xl" />
                <span className="border-r-[1.5px] pr-2 sm:pr-4 border-gray-400">
                  {formatLikes(video?.stats?.likes)}
                </span>
                <BiSolidDislike className="text-lg sm:text-xl" />
              </div>
              <div className="border px-2 sm:px-3 py-1 bg-gray-200 flex items-center gap-2 rounded-full hover:bg-gray-300 cursor-pointer">
                <PiShareFatThin className="text-lg sm:text-xl" />{" "}
                <span>Share</span>
              </div>
              <div className="bg-gray-200 hover:bg-gray-300 h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center">
                <RxDotsHorizontal className="h-full w-full text-base p-2" />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-gray-200 w-full rounded-lg p-2 my-2">
            <p className="flex gap-2 text-sm sm:text-base">
              <span>
                {video?.stats?.views
                  ? `${formatIndianNumber(video?.stats?.views)} views`
                  : ""}
              </span>
              <span>{video?.publishedDateTime}</span>
            </p>
            <span className="text-sm sm:text-base">{video?.description}</span>
          </div>

          {/* Comments */}
          <div className="">
            <span className="text-lg sm:text-xl font-semibold">
              {video?.stats?.comments
                ? `${video?.stats?.comments} Comments`
                : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="md:w-[35%] w-full h-[400px] md:h-screen overflow-y-scroll overflow-x-hidden">
        {relatedVideos?.map(
          (item, index) =>
            item.type === "video" && (
              <div
                key={index}
                className="mb-4 flex cursor-pointer"
                onClick={() => handleRelatedVideoClick(item.video.videoId)}
              >
                <img
                  className="rounded-lg w-[120px] sm:w-[168px]"
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  height={94}
                />
                <div className="ml-4">
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {item.video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item.video.author.title}
                  </p>
                  <p className="text-xs sm:text-sm">
                    {formatIndianNumber(item.video.stats?.views)} views •{" "}
                    {item.video.publishedTimeText}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

// Format views into the Indian numbering system
const formatIndianNumber = (num) => {
  if (!num || isNaN(num)) {
    return "0"; // Fallback for undefined or invalid numbers
  }
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1) + " Cr";
  } else if (num >= 100000) {
    return (num / 100000).toFixed(1) + " Lakh";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + " K";
  } else {
    return num.toString();
  }
};

export default VideoPlaying;
