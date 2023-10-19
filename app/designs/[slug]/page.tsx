import { Button } from "@/components/Button";
import { Container } from "@/components/Header/Container/Container";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { ContentBlock } from "@/components/content/ContentBlock";
import { Floatingvideos } from "@/components/designs/FloatingImages copy";
import { CaseStudy } from "@/types/caseStudy";
import React, { useEffect, useRef } from "react";

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
    mainImage: "/ui1.mp4",
    publishedAt: "2023-01-15",
    secondaryImages: [
      "https://cdn.sanity.io/files/r115idoc/production/b93de3c461d165c7178ec3e3f7ac7fe04756fe20.mp4",
      "https://cdn.sanity.io/files/r115idoc/production/b93de3c461d165c7178ec3e3f7ac7fe04756fe20.mp4",
    ],
    seoDescription: "Description for SEO 1",
    skills: ["Skill 1", "Skill 2"],
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
    skills: ["Skill 3", "Skill 4"],
    slug: "sample-case-study-2",
    title: "Sample Case Study 2",
    url: "https://www.samplecasestudy2.com",
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

const getData = (slug: string) => {
  const caseStudy = caseStudiesData.find((study) => study.slug === slug);
  return caseStudy || null;
};

const CaseStudyPage = async ({ params }: PageProps) => {
  const { slug } = params;

  try {
    const caseStudy = getData(slug);

    if (!caseStudy) {
      throw new Error("Case study not found");
    }

    const { title, client, skills, body, url, secondaryImages, mainImage } =
      caseStudy;

    return (
      <AnimatePage>
        <Container>
          <div className="-mb-8 md:mb-0">
            <Floatingvideos mainImage={mainImage} altText={title} />
          </div>
          <h1 className="headline mt-8  text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col-reverse justify-between md:mb-0 md:h-48 md:flex-row">
            <div className="flex h-full flex-col justify-center">
              <p className="w-80 text-sm text-white">
                <strong>Tech used: </strong>
                {skills.join(", ")}
              </p>
              {url && (
                <div className="mt-8 flex">
                  <Button href={url} target="_blank">
                    Visit project
                  </Button>
                </div>
              )}
            </div>
          </div>
          <ContentBlock value={body} />
        </Container>
      </AnimatePage>
    );
  } catch (error) {
    return (
      <div>
        <h1>404</h1>
        <p>Case study not found</p>
      </div>
    );
  }
};

export default CaseStudyPage;
