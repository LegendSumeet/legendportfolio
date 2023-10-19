const workExperiences = [
    {
      jobTitle: "Software Engineer",
      company: {
        logo: "/Photo.png",
        name: "Example Corp",
        url: "https://www.examplecorp.com"
      },
      description: [
        {
          _key: "1",
          _type: "block",
          style: "normal",
          children: [
            {
              marks: [],
              _key: "2",
              _type: "span",
              text: "Worked on the development of web applications using modern technologies."
            }
          ],
          markDefs: []
        },
        {
          _key: "3",
          _type: "block",
          style: "normal",
          children: [
            {
              marks: [2],
              _key: "4",
              _type: "span",
              text: "Collaborated with cross-functional teams to deliver high-quality software."
            }
          ],
          markDefs: []
        }
      ],
      fromDate: "January 2020",
      toDate: "December 2022",
      skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"]
    },
   
  ];

  export default workExperiences;