// Modify caseStudiesData to be an array of case studies
const caseStudiesData = [
  {
    "_type": "caseStudy",
    "client": {
      "name": "Client 1",
      "url": "https://www.client1.com",
      "logo": "client1-logo.png"
    },
    "mainImage": "main-image.png",
    "secondaryImages": ["image1.png", "image2.png"],
    "publishedAt": "2023-01-15",
    "seoDescription": "Description for SEO",
    "skills": ["Skill 1", "Skill 2"],
    "slug": "sample-case-study",
    "title": "Sample Case Study",
    "url": "https://www.samplecasestudy.com",
    "body": "Content of the case study"
  },
  // Add more case studies here if needed
];

// Modify caseStudiesQuery to return a case study based on slug
export const caseStudiesQuery = (slug?: string) => {
  if (slug) {
    const caseStudy = caseStudiesData.find((study) => study.slug === slug);
    return caseStudy || null;
  } else {
    return null;
  }
};
