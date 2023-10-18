import { Button } from "@/components/Button";
import { FloatingImages } from "@/components/FloatingImages";
import { Container } from "@/components/Header/Container/Container";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { CaseStudy } from "@/types/caseStudy";

import Image from "next/image";
import React from "react";
// Adjust the path

const caseStudiesData: CaseStudy[] = [
  {
    body: "Content of case study 1",
    client: {
      name: "Client 1",
      url: "https://www.client1.com",
      logo: "/Photo.png",
    },
    mainImage: "/Photo.png",
    publishedAt: "2023-01-15",
    secondaryImages: ["/Photo.png", "/Photo.png"],
    seoDescription: "Description for SEO 1",
    skills: ["Skill 1", "Skill 2"],
    slug: "sample-case-study-1",
    title: "Sample Case Study 1",
    url: "https://www.samplecasestudy1.com",
  },
  {
    body: "Content of case study 2",
    client: {
      name: "Client 2",
      url: "https://www.client2.com",
      logo: "/Photo.png",
    },
    mainImage: "/Photo.png",
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
          <h1 className="headline mt-8 pb-4 text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col-reverse justify-between md:mb-12 md:h-72 md:flex-row">
            <div className="flex h-full flex-col justify-center">
              <strong className="mb-2 text-sm">Client:</strong>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                <h2 className="text-xl font-bold">{client.name}</h2>
              </div>
              <p className="w-80 text-sm">
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
            <div className="-mb-8 md:mb-0">
              <FloatingImages
                topFloatingImage={secondaryImages[0]}
                bottomFloatingImage={secondaryImages[1]}
                mainImage={mainImage}
                altText={title}
              />
            </div>
			
          </div>
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
