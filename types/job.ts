import { BlockContent } from "./blockContent";
import { Company } from "./company";

export interface Job {
	jobTitle: string;
	company: Company;
	description: BlockContent[];
	fromDate: string;
	toDate: string | null;
	skills: string[];
}
