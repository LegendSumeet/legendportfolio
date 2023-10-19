'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MobileMenu } from './mobilemenu/MobileMenu';
import { Logo } from './Logo/Logo';
import { NavigationItem } from './NavItem';
import { useOnKeyDown } from './mobilemenu/useOnKeyDown';
import { BurgerIcon } from './BurgerIcon';
import Headroom from "react-headroom"
import { Container } from './Container';

export const navItems = [
	{
		href: '/about',
		title: 'About',
	},
	{
		href: '/designs',
		title: 'Designs',
	},
	
	{
		href: '/case-studies',
		title: 'Projects',
	},
	{
		href: 'https://dev.to/legendsumeet',
		title: 'Blog',
	},
	{
		href: '/contact',
		title: 'Contact',
	},
];

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	useOnKeyDown('Escape', () => setIsOpen(false));

	const navigationVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom },
		}),
	};

	return (
		<Headroom style={{ zIndex: 50 }}>
			<Container>
			<header className="relative z-50 py-8 bg-black">
					<div className="flex items-center justify-between">
						<Logo />
						<nav className="hidden md:block">
							<ul className="flex gap-8 text-lg">
								{navItems.map(({ href, title }, i) => (
									<NavigationItem
										href={href}
										title={title}
										key={href}
										variants={navigationVariants}
										initial="hidden"
										animate="visible"
										customDelay={(i + 1) * 0.1}
									/>
								))}
							</ul>
						</nav>
						<button
							className="absolute right-4 top-8 z-40 md:hidden"
							onClick={() => setIsOpen((prev) => !prev)}
							aria-label="Menu"
						>
							<BurgerIcon isOpen={isOpen} />
						</button>
					
					</div>
			</header>
			<MobileMenu isOpen={isOpen} />
			</Container>
		</Headroom>
	);
};
