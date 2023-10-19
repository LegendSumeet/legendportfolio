'use client';


import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
	hideName?: boolean;
}

const Logo = ({ hideName }: LogoProps) => {
	return (
		<Link href="/" passHref>
			<motion.div
				className="group relative flex items-center gap-4 whitespace-nowrap text-2xl font-bold transition duration-300 hover:transition"
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
			>
				<Image
					src="https://png2.cleanpng.com/sh/c2a2742f5d85f9c4fffea791df22f70b/L0KzQYm3U8I6N5poj5H0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgV0baMyiOR4ZnnvdX73hgJ0d58yTdNrZEi4Q4HrUPE0PWMzSqIAMEO8Q4K4VcIzO2cAUKY5OEW3RnB3jvc=/kisspng-computer-icons-user-profile-person-5abd8530d0a352.2050393115223698408546.png"
					width={48}
					height={48}
					quality={100}
					alt="Vectorised image of Jacob Herper"
					className="h-12 w-12"
				/>
				{!hideName && (
					<>
						<span className="opacity-100 text-white transition duration-300 group-hover:opacity-0">
							@LegendSumeet
						</span>
						<span className="absolute text-xl left-16 from-blue-400 to-blue-700 opacity-0 transition duration-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:opacity-100">
							Sumeet Vishwakarma
						</span>
					</>
				)}
			</motion.div>
		</Link>
	);
};

export { Logo };
