import { Container } from "@/components/Header/Container/Container";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { ContactForm } from "@/components/contant/ContactForm";


export const metadata = {
	title: 'Contact Sumeet - Software Engineer in the India',
	description:
		'This is a comprehensive list of tech equipment and software I use for my day-to-day work as a software engineer in the india.',
};

const ContactPage = () => {
	return (
		<AnimatePage>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
					Contact
				</h1>

				<ContactForm />
			</Container>
		</AnimatePage>
	);
};

export default ContactPage;
