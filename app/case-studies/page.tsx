import React from "react";
import { Container } from "@/components/Header/Container/Container";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { CaseStudyss } from "@/components/CaseStudy/CaseStudy";

import { Company, CaseStudy } from "@/types";
import { ContainerD } from "@/components/designs/Container";
import caseStudiesData from "@/components/projectdata";



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
