import React from "react";

const VideoCard = ({ info }) => {
  // console.log({ info });
  // Check if info is not undefined
  if (!info) {
    return null; // Render nothing if info is undefined
  }

  const { snippet, statistics } = info;
  // Check if snippet is not undefined
  if (!snippet) {
    return null; // Render nothing if snippet is undefined
  }

  const { channelTitle, title, thumbnails } = snippet;

  // Check if thumbnails is not undefined
  if (!thumbnails) {
    return null; // Render nothing if thumbnails is undefined
  }
  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails.high.url}
        alt="thumbnailImages"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
