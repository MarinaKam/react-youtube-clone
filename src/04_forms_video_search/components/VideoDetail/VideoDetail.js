import React from 'react';
import styles from './VideoDetail.module.css';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div className={styles['video-loader']}>
            Loading...
        </div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div className={styles['video-detail']}>
          <div className={styles['video-detail__video']}>
              <iframe title='video player'
                      src={videoSrc}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
              </iframe>
          </div>
          <div className={styles['video-detail__cnt']}>
              <h3>{ video.snippet.title}</h3>
              <p className={styles['video-item__cnt-txt']}> {video.snippet.description}</p>
          </div>
      </div>

    );

};


export default VideoDetail;