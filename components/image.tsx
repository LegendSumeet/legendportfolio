import Image from 'next/image';

interface SVGImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const SVGImage: React.FC<SVGImageProps> = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default SVGImage;
