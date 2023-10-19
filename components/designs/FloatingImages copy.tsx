"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

export interface FloatingImagesProps {
  altText: string;
  mainImage: string;

}

const Floatingvideos = ({
  altText,
  mainImage,

}: FloatingImagesProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Start playing the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative py-8 inline-block">
      <video ref={videoRef} width={1920} height={1080} autoPlay loop>
        <source src={mainImage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export { Floatingvideos };
