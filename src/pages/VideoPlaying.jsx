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
    {
      loading && <Loading />;
    }
    fetchData(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
      console.log(res);
    });
  };

  const fetchRelatedVideos = () => {
    {
      loading && <Loading />;
    }
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedVideos(res.contents); // Accessing 'contents' array
      console.log(res);
    });
  };

  // Function to format likes
  const formatLikes = (likes) => {
    if (likes >= 1000000) {
      return (likes / 1000000).toFixed(1) + "M"; // Millions
    }
    if (likes >= 1000) {
      return (likes / 1000).toFixed(1) + "k"; // Thousands
    }
    return likes;
  };

  // Handle clicking on related video
  const handleRelatedVideoClick = (videoId) => {
    navigate(`/video/${videoId}`); // Navigate to the new video's route
  };

  return (
    <div className="md:flex items-start gap-3">
      {/* Video Player Section */}
      <div className="md:w-[65%] w-full">
        <div className="h-[200px] md:h-[400px] rounded-xl overflow-hidden">
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
        <div className="mt-2">
          <h1 className="text-2xl font-semibold">{video?.title}</h1>
          <div className="flex items-center justify-between mt-2">
            {/* Channel Profile and Subscribe Button */}
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt="Channel Avatar"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{video?.author?.title}</span>
                <span className="text-sm text-gray-600">
                  {video?.author?.stats?.subscribersText
                    ? video?.author?.stats?.subscribersText + " subscribers"
                    : null}
                </span>
              </div>
              <button className="bg-black px-3 py-1 text-white rounded-full ml-5 font-normal">
                Subscribe
              </button>
            </div>

            {/* Like, Dislike, Share Buttons */}
            <div className="flex gap-2">
              <div className="border px-3 py-1 bg-gray-200 flex items-center gap-2 rounded-full hover:bg-gray-300 cursor-pointer">
                <BiSolidLike className="text-xl" />
                <span className="border-r-[1.5px] pr-4 border-gray-400">
                  {formatLikes(video?.stats?.likes)}
                </span>
                <BiSolidDislike className="text-xl" />
              </div>
              <div className="border px-3 py-1 bg-gray-200 flex items-center gap-2 rounded-full hover:bg-gray-300 cursor-pointer">
                <PiShareFatThin className="text-xl" /> <span>Share</span>
              </div>
              <div className="bg-gray-200 hover:bg-gray-300 h-10 w-10 rounded-full flex items-center">
                <RxDotsHorizontal className="h-full w-full text-base p-2" />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-gray-200 w-full rounded-lg p-2 my-2">
            <p className="flex gap-2">
              <span>
                {video?.stats?.views
                  ? `${formatIndianNumber(video?.stats?.views)} views`
                  : ""}
              </span>
              <span>{video?.publishedDateTime}</span>
            </p>
            <span>{video?.description}</span>
          </div>

          {/* Comments */}
          <div className="">
            <span className="text-xl font-semibold">
              {video?.stats?.comments
                ? `${video?.stats?.comments} Comments`
                : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="md:w-[35%] w-full h-screen overflow-y-scroll  overflow-x-hidden">
        <h2 className="font-bold mb-4">Related Videos</h2>
        {relatedVideos?.map(
          (item, index) =>
            item.type === "video" && (
              <div
                key={index}
                className="mb-4 flex cursor-pointer"
                onClick={() => handleRelatedVideoClick(item.video.videoId)}
              >
                <img
                  className="rounded-lg"
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  width={168}
                  height={94}
                />
                <div className="ml-4">
                  <h3 className="text-sm font-semibold">{item.video.title}</h3>
                  <p className="text-xs text-gray-600">
                    {item.video.author.title}
                  </p>
                  <p className="text-xs">
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
