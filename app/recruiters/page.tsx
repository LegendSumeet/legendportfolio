import { Container } from "@/components/Header/Container/Container";
import { RecruiterForm } from "@/components/RecruiterForm/RecruiterForm";
import { AnimatePage } from "@/components/animate/AnimatePage";


;



export const metadata = {
	title: 'Recruiter Information about Sumeet',
	description:
		'Thank you for your interest in me for software engineering roles you are hiring me.',
};



const RecruitersPage = async () => {


	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
					Hi, I&apos;m Sumeet Vishwakarma!
				</h1>
				<p className="headline mb-16 text-xl md:text-2xl lg:text-3xl">
					Nice to meet you.
				</p>

				<p className="mb-8 text-lg text-white">
					Thank you for your interest in me for software engineering roles you
					are hiring for. ⁠I have created this page to save us both time and
					 you tell me  exactly what I am looking for in my next position.
				</p>

				

				<RecruiterForm />
			</Container>
		</AnimatePage>
	);
};

export default RecruitersPage;
