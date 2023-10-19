import Image from 'next/image';

export interface FloatingImagesProps {
	altText: string;
	mainImage: string;

}

const FloatingImages = ({
	altText,
	mainImage,
}: FloatingImagesProps) => {
	return (
		<div className="relative py-8 inline-block">
			<Image src={mainImage} width={1080} height={1920} alt={altText} />
			
		</div>
	);
};

export { FloatingImages };
