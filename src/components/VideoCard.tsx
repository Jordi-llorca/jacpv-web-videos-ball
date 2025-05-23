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
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };

  return (
    <div className="video-card">
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};
