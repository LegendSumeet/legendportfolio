import {
	IconBsky,
	IconGithub,
	IconInstagram,
	IconLinkedin,
	IconThreads,
	IconX,
} from './Icons';
import { Container } from '../Header/Container/Container';
import { SocialIcons } from './SocialIcons/SocialIcons';

const Footer = () => {
	return (
		<footer className="mt-8 py-8 md:mt-20 ">
			<Container className="flex flex-col-reverse gap-4 text-white md:flex-row md:justify-between">
				<span className="text-center md:text-left">
					&copy; {new Date().getFullYear()} Sumeet Vishwakarma
				</span>
				<SocialIcons
					profiles={[
						{
							name: 'Github',
							url: 'https://www.github.com/jakeherp',
							icon: <IconGithub />,
						},
						{
							name: 'LinkedIn',
							url: 'https://www.linkedin.com/in/jacobherper',
							icon: <IconLinkedin />,
						},
						{
							name: 'Instagram',
							url: 'https://www.instagram.com/jakeherp',
							icon: <IconInstagram />,
						},
						{
							name: 'X.com',
							url: 'https://twitter.com/jakeherp',
							icon: <IconX />,
						},
						{
							name: 'Threads',
							url: 'https://www.threads.net/@jakeherp',
							icon: <IconThreads />,
						},
						{
							name: 'Bluesky Social',
							url: 'https://bsky.app/profile/jakeherp.com',
							icon: <IconBsky />,
						},
					]}
					className="justify-center md:justify-end"
				/>
			</Container>
		</footer>
	);
};

export { Footer };
