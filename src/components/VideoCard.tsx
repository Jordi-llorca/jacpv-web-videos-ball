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

  const opts = {
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };

  return (
    <div className="video-card">
      <div className="video-header">
        <h2>{video.title}</h2>
        <span className="video-type">
          {video.type.charAt(0).toUpperCase() + video.type.slice(1)}
        </span>
      </div>
      <p>{video.description}</p>
      <div className="video-wrapper">
        <YouTube videoId={videoId} opts={opts} className="video-player" />
      </div>
    </div>
  );
};
