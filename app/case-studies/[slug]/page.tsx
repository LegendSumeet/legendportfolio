import { Button } from "@/components/Button";
import { FloatingImages } from "@/components/FloatingImages";
import { Container } from "@/components/Header/Container/Container";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { ContentBlock } from "@/components/content/ContentBlock";
import caseStudiesData from "@/components/projectdata";
import { CaseStudy } from "@/types/caseStudy";

import Image from "next/image";
import React from "react";


interface PageProps {
  params: {
    slug: string;
  };
}

const getData = (slug: string) => {
  const caseStudy = caseStudiesData.find((study) => study.slug === slug);
  return caseStudy || null;
};

const CaseStudyPages = async ({ params }: PageProps) => {
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
            <FloatingImages mainImage={mainImage} altText={title} />
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

export default CaseStudyPages;
