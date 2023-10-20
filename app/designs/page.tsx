import React from "react";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { Designs } from "@/components/designs";
import { ContainerD } from "@/components/designs/Container";
import DesignData from "@/components/data";


const CaseStudiesPage = () => {
  return (
    <AnimatePage>
      <ContainerD>
        <h1 className="headline mt-8 pb-12 text-3xl md:text-5xl lg:text-6xl">
          Designs
        </h1>
        {DesignData.map((caseStudy, i) => (
          <Designs key={caseStudy.slug} {...caseStudy} index={i} />
        ))}
      </ContainerD>
    </AnimatePage>
  );
};

export default CaseStudiesPage;
