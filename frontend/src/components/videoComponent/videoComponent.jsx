import React, { useState, useEffect } from 'react';

const VideoLoop = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoUrls = [
    'natural vedio.mp4',
    'natural vedio.mp4'
  ];

  useEffect(() => {
    const videoElement = document.getElementById('video');

    const handleEnded = () => {
      // Move to the next video in the array
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    };

    videoElement.addEventListener('ended', handleEnded);

    // Ensure the next video plays when component mounts or current video changes
    videoElement.src = videoUrls[currentVideoIndex];
    console.log("ENterd")
    console.log(currentVideoIndex)

    return () => {
      videoElement.removeEventListener('ended', handleEnded);
      console.log("Exited")
    };
  }, [currentVideoIndex, videoUrls]);

  return (
    <video id="video" width={"100%"} autoPlay muted >
      <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoLoop;
