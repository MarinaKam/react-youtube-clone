import React  from 'react';
import VideoItem from "../VideoItem/VideoItem";
import styles from './VideoList.module.css';

const VideoList = ({ videos, onVideoSelect }) => {
    console.log(videos);
    const renderVideos = videos.map((video, i) => (
        <VideoItem
            key={video.etag + '-' + i}
            video={ video }
            onVideoSelect={onVideoSelect}
        />
    ));

    return(
        <div className={styles['video-list']}>
            { renderVideos }
        </div>
    );
};



export default VideoList;


