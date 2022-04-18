import React from "react";
import styles from "./video_item.module.css";

// const VideoItem = (props) => (
const VideoItem = ({ video: { snippet: selItem } }) => (
  <li className={styles.video}>
    <img
      className={styles.thumbnail}
      src={selItem.thumbnails.medium.url}
      alt="video thumbnail"
    />
    <div>
      <p className={styles.title}>{selItem.title}</p>
      <p className={styles.channel}>{selItem.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
