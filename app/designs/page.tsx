
"use client"
import React, { useState, useEffect } from "react";
import { AnimatePage } from "@/components/animate/AnimatePage";
import { Designs } from "@/components/designs";
import { ContainerD} from "@/components/designs/Container";
import DesignData from "@/components/data";

const CaseStudiesPage = () => {
  const [designsData, setDesignsData] = useState(DesignData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // In a real application, you would make an API call here to fetch the data.
    // For the sake of example, we assume DesignData is available immediately.
    setDesignsData(DesignData);
    setLoading(false);
  }, []);

  return (
    <AnimatePage>
      <ContainerD>
        <h1 className="headline mt-8 pb-12 text-3xl md:text-5xl lg:text-6xl">
          Designs
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          designsData.map((caseStudy, i) => (
            <Designs key={caseStudy.slug} {...caseStudy} index={i} />
          ))
        )}
      </ContainerD>
    </AnimatePage>
  );
};

export default CaseStudiesPage;
