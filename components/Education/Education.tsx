import { Company } from '@/types/company';

import classNames from 'classnames';
import { School } from './School';



 interface Education {
	course: string;
	courseContents: string[];
	date: string;
	institution: Company;
}
export interface EducationProps {
	education: Education[];
}

const Education = ({ education }: EducationProps) => {
	return (
		<>
			{education.map(({ course, date, institution, courseContents }) => (
				<div
					className={classNames(
						'flex transform transition-all md:hover:scale-[1.01]'
					)}
					key={course}
				>
					<School
						course={course}
						date={date}
						institution={institution}
						courseContents={courseContents}
					/>
				</div>
			))}
		</>
	);
};

export { Education };
