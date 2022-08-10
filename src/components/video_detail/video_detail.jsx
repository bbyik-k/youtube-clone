import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = (video) => (
  <section className={styles.detail}>
    <iframe
      title="youtubeFrame"
      className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </section>
);

export default VideoDetail;
