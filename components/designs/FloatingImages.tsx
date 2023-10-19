"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

export interface FloatingImagesProps {
  altText: string;
  mainImage: string;

}

const Floatingvideo = ({
  altText,
  mainImage,

}: FloatingImagesProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative py-8 inline-block">
      <video ref={videoRef} width={720} height={600} autoPlay loop>
        <source src={mainImage} type="video/mp4" />
        
      </video>
    </div>
  );
};

export { Floatingvideo };
