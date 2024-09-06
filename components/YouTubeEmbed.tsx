import React from 'react';

const YouTubeEmbed: React.FC<{ value: { url: string } }> = ({ value }) => {
  const { url } = value;
  if (!url) return null;

  // Extract video ID from URL
  const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/)?.[1];

  if (!videoId) return null;

  return (
    <div className="youtube-embed">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  );
};

export default YouTubeEmbed;
