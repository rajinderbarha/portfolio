import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./videoPlayer";


const VideoTabComponent = ({ data }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRefs = useRef([]);
    const [reverse, setReverse] = useState(false);


    // const playNextVideo = () => {
    //     setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % data.length);
    // };
    const playNextVideo = () => {
        setCurrentVideoIndex((prevIndex) => {
            if (!reverse) {
                // Forward direction
                if (prevIndex < data.length - 1) {
                    return prevIndex + 1;
                } else {
                    setReverse(true); // Switch to reverse direction when at the last video
                    return prevIndex - 1;
                }
            } else {
                // Reverse direction
                if (prevIndex > 0) {
                    return prevIndex - 1;
                } else {
                    setReverse(false); // Switch back to forward direction when at the first video
                    return prevIndex + 1;
                }
            }
        });
    };

    const handleVideoSelect = (index) => {
        setCurrentVideoIndex(index);
    };

    useEffect(() => {
        if (videoRefs.current[currentVideoIndex]) {
            videoRefs.current[currentVideoIndex].scrollIntoView({ behavior: "smooth" });
        }
    }, [currentVideoIndex]);

    return (
        <div className="main-container"
        // style={{ display: "flex", height: "100%" }}
        >
            <div   className="btn-tab"
            // style={{ width: "200px", overflowY: "auto", borderRight: "1px solid #ccc" }}
            >
                <div 
                    // style={{
                    //     width: "100%",
                    //     overflowX: "auto",
                    //     whiteSpace: "nowrap",
                    //     borderBottom: "1px solid #ccc",
                    //     padding: "10px",

                    // }}
                >
                    {data.map((video, index) => (
                        <div

                            key={video.id}
                            ref={(el) => (videoRefs.current[index] = el)}
                            onClick={() => handleVideoSelect(index)}
                            style={{
                                padding: currentVideoIndex === index ? "25px 45px" : "20px 40px",
                                cursor: "pointer",
                                backgroundColor: currentVideoIndex === index ? "#e0f7fa" : "#ffffff",
                                fontWeight: currentVideoIndex === index ? "bold" : "normal",
                                fontSize: currentVideoIndex === index ? "1.1em" : "1em",
                                borderRadius: currentVideoIndex === index ? "8px" : "0px",
                                margin: currentVideoIndex === index ? "10px 0" : "5px 0",
                                boxShadow: currentVideoIndex === index
                                    ? "0 4px 8px rgba(0, 150, 136, 0.5)"
                                    : "none",
                                transition: "all 0.3s ease",
                            }}

                        >
                            {video.title}
                        </div>
                    ))}
                </div>
            </div>
<div className="video-container-div">

            <div className="video-div">
                <VideoPlayer
                    videoUrl={data[currentVideoIndex].videoUrl}
                    onEnded={playNextVideo}
                    />
            </div>
                    </div>
        </div>
    );
};

export default VideoTabComponent;

