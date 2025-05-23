import YouTube from "react-youtube";
import type { Video } from "../types/Video";

interface VideoCardProps {
  video: Video;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(video.youtubeUrl);

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div className="video-card">
      <h2>{video.title}</h2>
      <span className={`video-type ${video.type}`}>{video.type}</span>
      <div className="video-container">
        <YouTube videoId={videoId} className="youtube-player" />
      </div>
      <p className="description">{video.description}</p>
    </div>
  );
};
