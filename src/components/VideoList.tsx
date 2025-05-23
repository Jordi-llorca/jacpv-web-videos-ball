import { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import type { Video } from "../types/Video";
import { VideosJSON } from "../data/videos";

export const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  useEffect(() => {
    // Combine all videos from different categories
    const allVideos = Object.values(VideosJSON).flat();
    setVideos(allVideos);
  }, []);

  // Get unique video types from the data
  const videoTypes = [...new Set(videos.map((video) => video.type))];

  const filteredVideos = videos.filter((video) => {
    const searchMatch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = selectedType === "all" || video.type === selectedType;
    return searchMatch && typeMatch;
  });

  return (
    <div className="video-list">
      <div className="filters-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="type-filter">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="type-select"
          >
            <option value="all">All Types</option>
            {videoTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="videos-container">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))
        ) : (
          <div className="no-results">
            No videos found for your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};
