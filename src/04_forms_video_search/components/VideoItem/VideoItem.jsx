import React from 'react';
import styles from './VideoItem.module.css';

const VideoItem = ({ video, onVideoSelect }) => (
  <div className={styles['video-item']} onClick={() => onVideoSelect(video)}>
      <div className={styles['video-item__img']}>
        <img src={ video.snippet.thumbnails.medium.url } alt={video.snippet.title} />
      </div>
      <div className={styles['video-item__cnt']}>
          <h3>{ video.snippet.title}</h3>
      </div>
  </div>
);

export default VideoItem;