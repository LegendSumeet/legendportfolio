import Image from 'next/image';

interface SVGImageProps {
  src: string;
  alt: string;
  
}

const SVGImage: React.FC<SVGImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={100} 
      height={100} 
    />
  );
};

export default SVGImage;
