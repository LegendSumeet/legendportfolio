import Image from 'next/image';

export interface FloatingImagesProps {
	altText: string;
	mainImage: string;
	topFloatingImage: string;
	bottomFloatingImage: string;
}

const FloatingImages = ({
	altText,
	mainImage,
	topFloatingImage,
	bottomFloatingImage,
}: FloatingImagesProps) => {
	return (
		<div className="relative py-8 inline-block">
			<Image src={mainImage} width={475} height={275} alt={altText} />
			
		</div>
	);
};

export { FloatingImages };
