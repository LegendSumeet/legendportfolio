import { BlockContent } from "./blockContent";
import { Company } from "./company";

export interface CaseStudy {
	body: String;
	client: Company;
	mainImage: string;
	publishedAt: string;
	secondaryImages: string[];
	seoDescription: string;
	skills: string[];
	slug: string;
	title: string;
	url: string;
}
