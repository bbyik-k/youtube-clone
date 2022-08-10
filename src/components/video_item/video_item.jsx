import React from "react";
import styles from "./video_item.module.css";

// const VideoItem = (props) => (
const VideoItem = ({
  video,
  video: { snippet: selItem },
  onVideoClick,
  display,
}) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={selItem.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{selItem.title}</p>
          <p className={styles.channel}>{selItem.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
