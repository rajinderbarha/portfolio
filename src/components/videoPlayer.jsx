import React from 'react'

const VideoPlayer = ({ videoUrl, onEnded }) => {
    return (
        <video
            src={videoUrl}
            controls
            muted
            autoPlay
            onEnded={onEnded}
            style={{ width: "70%", height: "70%", }}
        />
    );
};

export default VideoPlayer;

