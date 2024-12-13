import React, { useState, useEffect } from "react";
import axios from "axios";

const YouTubePlaylist = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    setIsPlaying(false);  // Reset to thumbnail on next video
  };

  if (error) {
    return <div className="text-red-500 text-center mt-8">{error}</div>;
  }

  if (videos.length === 0) {
    return <div className="text-gray-500 text-center mt-8">Loading...</div>;
  }

  const currentVideo = videos[currentIndex];
  const nextVideo = videos[(currentIndex + 1) % videos.length];
  const videoId = currentVideo.snippet.resourceId.videoId;

  return (
    <div className="flex flex-col items-center justify-center p-4">
              <h3 className="m-4">Decouvrez Nous modules educatif :</h3>
      <div className="relative w-full max-w-5xl h-[428px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg shadow-lg">
          
          {!isPlaying ? (
            // Show the thumbnail until clicked
            <img
              src={currentVideo.snippet.thumbnails.high.url}
              alt={currentVideo.snippet.title}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => setIsPlaying(true)}
            />
          ) : (
            // Play the video in an iframe once clicked
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={currentVideo.snippet.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}

          {/* Video Info Overlay */}
          {!isPlaying && (
            <div className="absolute bottom-4 left-4 bg-[#0daabc] bg-opacity-95 text-white p-4 rounded-lg w-full">
              <h2 className="text-lg font-semibold">{currentVideo.snippet.title}</h2>
              <p className="text-sm">
                {currentVideo.snippet.channelTitle} • Published on{" "}
                {new Date(currentVideo.snippet.publishedAt).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>

        {/* Next Video Thumbnail Preview */}
        <div className="absolute right-0 top-1/4 w-80 bg-gray-800 rounded-lg shadow-lg hidden lg:flex flex-col items-start p-4">
          <img
            src={nextVideo.snippet.thumbnails.medium.url}
            alt={nextVideo.snippet.title}
            className="w-full h-32 object-cover rounded-lg"
          />
          <h3 className="mt-2 text-sm font-medium text-white">
            {nextVideo.snippet.title}
          </h3>
          <p className="text-xs text-gray-400">
            {nextVideo.snippet.channelTitle}
          </p>
        </div>
      </div>

      {/* Navigation Button */}
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
