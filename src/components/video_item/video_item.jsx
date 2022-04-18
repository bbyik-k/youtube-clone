import React from "react";

// const VideoItem = (props) => (
const VideoItem = ({ video: { snippet: selItem } }) => (
  <li>
    <img src={selItem.thumbnails.medium.url} alt="video thumbnail" />
    <div>
      <p>{selItem.title}</p>
      <p>{selItem.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
