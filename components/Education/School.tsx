import { Company } from '@/types/company';

import Image from 'next/image';
import { Box } from './Box';
import format from 'date-fns/format';

export interface SchoolProps {
	institution: Company;
	course: string;
	date: string;
	courseContents: string[];
}

const School = ({ institution, course, date, courseContents }: SchoolProps) => {
	return (
		<Box className="w-full">
			<div className="flex items-center gap-4">
				{institution.logo && (
					<Image
						src={institution.logo}
						alt={institution.name}
						width={64}
						height={64}
						className="rounded-md"
					/>
				)}
				<div className="mb-2 w-full">
					<div className="flex justify-between">
						<h3 className="font-bold text-white">{course}</h3>
						<span className='text-white'>{format(new Date(date), 'MMM yyyy')}</span>
					</div>
					<h4 className='text-white'>
						{institution.url ? (
							<a
								href={institution.url}
								target="_blank"
								rel="noopener noreferrer"
								className="underlined relative"
							>
								{institution.name}
							</a>
						) : (
							<>{institution.name}</>
						)}
					</h4>
					<p className="text-sm text-white">
						<strong>Course Contents: </strong>
						{courseContents.join(', ')}
					</p>
				</div>
			</div>
		</Box>
	);
};

export { School };
