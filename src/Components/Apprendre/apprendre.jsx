import React, { useState, useEffect } from "react";
import axios from "axios";

const YouTubePlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const apiKey = 'AIzaSyCMc7I02qQPleaJEdY52QAR_ch9t-VWnzs'; 
  const playlistId = 'PLBiybDe-xtLPEJQdfsU4CNkw_PCATbklz';

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet",
              playlistId,
              maxResults: 10,
              key: apiKey,
            },
          }
        );
        setVideos(response.data.items);
        setError(null);
      } catch (err) {
        setError("Failed to load playlist. Please try again later.");
        console.error("Error fetching playlist:", err);
      }
    };

    fetchPlaylistItems();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  if (error) {
    return <div className="text-red-500 text-center mt-8">{error}</div>;
  }

  if (videos.length === 0) {
    return <div className="text-gray-500 text-center mt-8">Loading...</div>;
  }

  const currentVideo = videos[currentIndex];
  const nextVideo = videos[(currentIndex + 1) % videos.length];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-5xl h-[428px] overflow-hidden">
        {/* Current Video */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-600 rounded-lg shadow-lg">
          <img
            src={currentVideo.snippet.thumbnails.high.url}
            alt={currentVideo.snippet.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-[#0daabc] bg-opacity-95 text-white p-4 rounded-lg  w-full">
            <h2 className="text-lg font-semibold">{currentVideo.snippet.title}</h2>
            <p className="text-sm">
              {currentVideo.snippet.channelTitle} • Published on{" "}
              {new Date(currentVideo.snippet.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Next Video */}
        <div className="absolute right-0 top-1/4 w-80 h-48 bg-gray-800 rounded-lg shadow-lg hidden h-full lg:flex flex-col items-start p-4">
          <img
            src={nextVideo.snippet.thumbnails.medium.url}
            alt={nextVideo.snippet.title}
            className="w-full h-45 object-cover rounded-lg"
          />
          <h3 className="mt-2 text-sm font-medium text-white">
            {nextVideo.snippet.title}
          </h3>
          <p className="text-xs text-gray-400">
            {nextVideo.snippet.channelTitle}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={handleNext}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Next Video
      </button>
    </div>
  );
};

export default YouTubePlaylist;
