import { Company } from "./company";

export interface Education {
	course: string;
	courseContents: string[];
	date: string;
	institution: Company;
}
