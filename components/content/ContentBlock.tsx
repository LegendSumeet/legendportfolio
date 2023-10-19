import { BlockContent } from '@/types/blockContent';


import { PortableText, PortableTextReactComponents } from '@portabletext/react';


import Image from 'next/image';
import Link from 'next/link';



const components: Partial<PortableTextReactComponents> = {

	list: {
		bullet: ({ children }) => (
			<ul className="ml-6 list-disc text-white space-y-2 py-4 text-lg">{children}</ul>
		),
		number: ({ children }) => (
			<ol className="mt-lg list-decimal text-lg">{children}</ol>
		),
	},

	listItem: ({ children }) => (
		<li className="text-base leading-6">{children}</li>
	),

	block: {
		h1: ({ children }) => (
			<h1 className="py-4 text-5xl text-white font-bold">{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className="py-4 text-4xl text-white font-bold">{children}</h2>
		),
		h3: ({ children }) => (
			<h3 className="py-4 text-3xl text-white font-bold">{children}</h3>
		),
		h4: ({ children }) => (
			<h4 className="py-4 text-2xl text-white font-bold">{children}</h4>
		),
		normal: ({ children }) => (
			<p className="py-2 text-lg text-white leading-8">{children}</p>
		),
		blockquote: ({ children }) => (
			<blockquote className="mx-4 text-white my-4 rounded-md border-x-4 border-x-grey-500 bg-grey-300 px-4 py-2 font-serif text-lg italic dark:border-x-off-white dark:bg-grey-700">
				{children}
			</blockquote>
		),
	},

	marks: {
		link: ({ children, value }) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined;

			if (!rel) {
				return (
					<Link
						href={value.href}
						className="underlined relative border-b-2 border-grey-300 font-bold hover:border-b-0 dark:border-grey-700"
					>
						{children}
					</Link>
				);
			}

			return (
				<a
					href={value.href}
					rel={rel}
					className="underlined relative font-bold"
				>
					{children}
				</a>
			);
		},
		span: ({ children }) => <span>{children}</span>,
		strong: ({ children }) => <strong className="font-bold">{children}</strong>,
		em: ({ children }) => <em className="italic">{children}</em>,
	},
};

interface ContentBlockProps {
	value: BlockContent[];
}

export const ContentBlock = ({ value }: ContentBlockProps) => {
	return <PortableText value={value} components={components} />;
};
