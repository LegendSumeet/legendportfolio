import { Job as JobType } from '@/types';
import classNames from 'classnames';
import { ContentBlock } from '../content/ContentBlock';
import { Job } from './Job';

export interface WorkExperienceProps {
  jobs: JobType[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
  const Spacer = () => <div className="md:w-1/8 w-12 shrink-0 grow-0" />;

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative -mx-4  snap-x snap-center gap-6 pb-14 lg:mx-0 sm:flex lg:w-full">
        <Spacer />
        {jobs.map(({ company, jobTitle, fromDate, toDate, skills, description }) => (
          <div
            className={classNames(
              'flex  shrink-0 transform snap-center transition-all md:w-3/4 lg:w-1/3'
            )}
            key={`${company} ${jobTitle}`}
          >
            <Job
              company={company}
              jobTitle={jobTitle}
              fromDate={fromDate}
              toDate={toDate}
              skills={skills}
            >
              <ContentBlock value={description} />
            </Job>
          </div>
       ) )}
        <Spacer />
      </div>
    </div>
  );
};

export { WorkExperience };
