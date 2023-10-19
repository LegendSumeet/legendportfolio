import React from "react";
import { Container } from "@/components/Header/Container/Container";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { CaseStudyss } from "@/components/CaseStudy/CaseStudy";

import { Company, CaseStudy } from "@/types";
import { ContainerD } from "@/components/designs/Container";

const caseStudiesData: CaseStudy[] = [
  {
    body: [
      {
        _key: "1",
        _type: "block",
        style: "normal",
        children: [
          {
            marks: [],
            _key: "2",
            _type: "span",
            text: "Worked on the development of web applications using modern technologies.Worked on the development of web applications using modern technologies.Worked on the development of web applications using modern technologies.Worked on the development of web applications using modern technologies.",
          },
        ],
        markDefs: [],
      },
    ],
    client: {
      name: "Client 1",
      url: "https://www.client1.com",
      logo: "/Photo.png",
    },
    mainImage:
      "https://sumeet.netlify.app/static/media/photo.2fbc295cf275f682fb0a.png",
    publishedAt: "2023-01-15",
    secondaryImages: ["/Photo.png", "/Photo.png"],
    seoDescription: "Description for SEO 1",
    skills: ["Skill 1", "Skill 2", "Skill 1", "Skill 2", "Skill 1", "Skill 2"],
    slug: "sample-case-study-1",
    title: "Sample Case Study 1",
    url: "https://www.samplecasestudy1.com",
  },
  {
    body: [
      {
        _key: "1",
        _type: "block",
        style: "normal",
        children: [
          {
            marks: [],
            _key: "2",
            _type: "span",
            text: "Worked on the development of web applications using modern technologies.Worked on the development of web applications using modern technologies.Worked on the development of web applications using modern technologies.Worked on the development of web applications using modern technologies.",
          },
        ],
        markDefs: [],
      },
    ],
    client: {
      name: "Client 2",
      url: "https://www.client2.com",
      logo: "/Photo.png",
    },
    mainImage:
      "https://sumeet.netlify.app/static/media/photo.2fbc295cf275f682fb0a.png",
    publishedAt: "2023-02-20",
    secondaryImages: ["/Photo.png", "/Photo.png"],
    seoDescription: "Description for SEO 2",
    skills: ["Skill 1", "Skill 2", "Skill 1", "Skill 2", "Skill 1", "Skill 2"],
    slug: "sample-case-study-2",
    title: "Sample Case Study 2",
    url: "https://www.samplecasestudy2.com",
  },
];

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = caseStudiesData;

  return (
    <AnimatePage>
      <ContainerD>
        <h1 className="headline mt-8 pb-8 text-3xl md:text-5xl lg:text-6xl">
          Projects
        </h1>
        {caseStudies.map((caseStudy, i) => (
          <CaseStudyss key={caseStudy.slug} {...caseStudy} index={i} />
        ))}
      </ContainerD>
    </AnimatePage>
  );
};

export default CaseStudiesPage;
