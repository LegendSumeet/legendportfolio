import React from "react";
import { Container } from "@/components/Header/Container/Container";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { CaseStudyss } from "@/components/CaseStudy/CaseStudy";

import { Company, CaseStudy } from "@/types";

const caseStudiesData: CaseStudy[] = [
	
		{
		  "body": "Content of case study 1",
		  "client": {
			"name": "Client 1",
			"url": "https://www.client1.com",
			"logo": "https://sumeet.netlify.app/static/media/codehub.6ebac7405ae13158f6fe.jpg"
		  },
		  "mainImage": "https://sumeet.netlify.app/static/media/codehub.6ebac7405ae13158f6fe.jpg",
		  "publishedAt": "2023-01-15",
		  "secondaryImages": ["/Photo.png", "/Photo.png"],
		  "seoDescription": "Description for SEO 1",
		  "skills": ["Skill 1", "Skill 2"],
		  "slug": "sample-case-study-1",
		  "title": "Sample Case Study 1",
		  "url": "https://www.samplecasestudy1.com"
		},
		{
		  "body": "Content of case study 2",
		  "client": {
			"name": "Client 2",
			"url": "https://www.client2.com",
			"logo": "/Photo.png"
		  },
		  "mainImage": "https://sumeet.netlify.app/static/media/photo.2fbc295cf275f682fb0a.png",
		  "publishedAt": "2023-02-20",
		  "secondaryImages": ["/Photo.png", "/Photo.png"],
		  "seoDescription": "Description for SEO 2",
		  "skills": ["Skill 3", "Skill 4"],
		  "slug": "sample-case-study-2",
		  "title": "Sample Case Study 2",
		  "url": "https://www.samplecasestudy2.com"
		}
	  
	  
]

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = caseStudiesData;

  return (
    <AnimatePage>
      <Container>
        <h1 className="headline mt-8 pb-8 text-3xl md:text-5xl lg:text-6xl">
          Case Studies
        </h1>
        {caseStudies.map((caseStudy, i) => (
          <CaseStudyss key={caseStudy.slug} {...caseStudy} index={i} />
        ))}
      </Container>
    </AnimatePage>
  );
};

export default CaseStudiesPage;
