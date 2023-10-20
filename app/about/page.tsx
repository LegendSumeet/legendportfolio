import { Button } from "@/components/Button/Button";
import { Education } from "@/components/Education";
import { WorkExperience } from "@/components/Experince";
import { IconDownload } from "@/components/Footer/Icons/IconDownload";
import { Container } from "@/components/Header/Container/Container";
import { AnimatePage } from "@/components/animate";

import Link from "next/link";

export const metadata = {
  title: "About Sumeet Vishwakarma, a Software Engineer in India",
  description:
    "As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place.",
};

const AboutPage = async () => {
  return (
    <AnimatePage>
      <Container>
        <h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
          Hey, I&apos;m Sumeet Vishwakarma
        </h1>
        <h2 className="mt-2 text-xl text-white font-bold md:text-2xl">
          Software Engineer from the India
        </h2>
        <p className="mt-8 text-white">
          As a passionate Software Engineer, I create amazing websites and web
          apps to make the internet a better place. I am an advocate for web
          performance and accessibility as well as a JAMstack enthusiast with
          experience in serverless technologies.
        </p>
        <p className="my-4 text-white ">
          I am &radic;400 years old and I am  web and app developer for as long
          as I can think. The technologies I work with are JavaScript, HTML and
          CSS with a focus on the frameworks Next.js, Gatsby, Next.js, Node ,
          Express and Flutter . I use code not only to do my day-to-day job, but also to
          solve everyday problems I come across.
        </p>
        <p className="text-white">
          When I am not writing code I love to spend time with my cat and
          love to watch animes or travelling around the
          world. We are quite a multi-cultural family with me having grown up in
          Mumbai, I myself speak five languages (some better than
          others). Furthermore I enjoy cooking fresh food when I come home after
          a long day at the College.
        </p>
        <h2 className="headline mb-4 mt-12 text-4xl">Experience</h2>

        <WorkExperience jobs={[
          {
            "jobTitle": "Software Engineer",
            "company": {
              "logo": "/company.jpg",
              "name": "BloomStar Technologies",
              "url": "https://www.linkedin.com/company/bloomstar-technologies"
            },
            "description": [
              {
                "_key": "1",
                "_type": "block",
                "style": "normal",
                "children": [
                  {
                    "marks": [],
                    "_key": "2",
                    "_type": "span",
                    "text": "Developed Cross Platform app using Flutter, to create a visually appealing and performant user interfacefor both Android and iOS.Implemented the backend logic and API using Node.js, leveraging its scalability and efficiency to handleAPI requests and communicate with the database. Designed and developed a RESTful API to enable users to search , schedule, and retrieve details, includingauthentication services. Leveraged secure cloud storage solutions for data management and storage."
                  }
                ],
                "markDefs":[]
              
              },
              {
                "_key": "3",
                "_type": "block",
                "style": "normal",
                "children": [
                  {
                    "marks":[],
                    "_key": "4",
                    "_type": "span",
                    "text": ""
                  }
                ],
                "markDefs": []
              }
            ],
            "fromDate": "June 2023",
            "toDate": "August 2023",
            "skills": ["Flutter", "Firebase", "Node.js", "API", "System Design",'SDK','Cloud Computing']
          },
          {
            "jobTitle": "Project Mentor and Developer",
            "company": {
              "logo": "/gssoc.png",
              "name": "GirlScript Summer of Code",
              "url": "https://www.examplecorp.com"
            },
            "description": [
              {
                "_key": "1",
                "_type": "block",
                "style": "normal",
                "children": [
                  {
                    "marks": [],
                    "_key": "2",
                    "_type": "span",
                    "text": "Implemented secure user authentication for a website using industry-standard protocols with OAuthand resulting in a 20% decrease in unauthorized access attempts with MFA.Reduced server-client latency by minimizing the key-value terms by 30% while maintaining."
                  }
                ],
                "markDefs":[]
              
              },
              {
                "_key": "3",
                "_type": "block",
                "style": "normal",
                "children": [
                  {
                    "marks":[],
                    "_key": "4",
                    "_type": "span",
                    "text": "Facilitated knowledge sharing, problem-solving, and collaboration within the team, fostering a conducive learning environment.Facilitated knowledge sharing, problem-solving, and collaboration within the team, fostering a conducive learning environment."
                  }
                ],
                "markDefs": []
              }
            ],
            "fromDate": "May 2023",
            "toDate": "Aug 2023",
            "skills": ["JavaScript", "React", "Node.js", "MFA"]
          },
          {
            "jobTitle": "Project Mentor and Developer",
            "company": {
              "logo": "/skill.jpg",
              "name": "SkillShip Foundation",
              "url": "https://skillshipfoundation.com/"
            },
            "description": [
              {
                "_key": "1",
                "_type": "block",
                "style": "normal",
                "children": [
                  {
                    "marks": [],
                    "_key": "2",
                    "_type": "span",
                    "text": ""
                  }
                ],
                "markDefs":[]
              
              },
              {
                "_key": "3",
                "_type": "block",
                "style": "normal",
                "children": [
                  {
                    "marks":[],
                    "_key": "4",
                    "_type": "span",
                    "text": "Facilitated knowledge sharing, problem-solving, and collaboration within the team, fostering a conducive learning environment.Facilitated knowledge sharing, problem-solving, and collaboration within the team, fostering a conducive learning environment"
                  }
                ],
                "markDefs": []
              }
            ],
            "fromDate": "March 2021",
            "toDate": "July 2021",
            "skills": [ 'Software Project Management' ,"Team Leadership" , " Software Development", "Data Structures" , "GitHub ", 'Java']
          },
          
        ]}/>
        

        <h2 className="headline mb-4 mt-12 text-4xl">Education</h2>
        <p className="mb-6 text-white">
          I am mostly self-taught, but here are some of the most relevant
          certifications I have achieved:
        </p>
        <Education
          education={[
            {
              course: "Bachelor of Science in Information Technology",
              courseContents: [
                "Programming Fundamentals",
                "Data Structures",
                "Algorithms",
              ],
              date: "2024-06-01",
              institution: {
                logo: "/mu.jpg",
                name: "University of Mumbai",
                url: "https://mu.ac.in/",
              },
            },
            {
              course: "Maharashtra State Board of Secondary and Higher Secondary Education",
              courseContents: ["HTML", "C++", "JavaScript"],
              date: "2023-03-20",
              institution: {
                logo: "/royal.png",
                name: "Royal College of Science and Commerce",
                url: "https://www.codingacademy.com",
              },
            },
          ]}
        ></Education>

        <section id="cv-download">
          <h2 className="headline mb-4 mt-12 text-4xl">
            Interested in what I have to offer?
          </h2>

          <p className="text-white">
            I am happy to have a chat about relevant projects to work on. Below
            you find a download link for my up-to-date CV. Are you a recruiter?
           This page is designed to save both of us time.
          </p>
          <p className="text-white">
            If you are interested in working with me, please contact me via{" "}
            <Link
              href="/contact"
              className="underlined relative border-b-2 border-grey-300 font-bold hover:border-b-0 dark:border-grey-700"
            >
              the contact form
            </Link>
            . I do not appreciate cold calls and will not answer calls from
            numbers I do not recognise.
          </p>

          <div className="mt-8 flex items-baseline justify-start gap-6">
            <Button
              href="/cv-2023.pdf"
              download={true}
              className="group flex gap-2 whitespace-nowrap"
            >
              <IconDownload />
              Download my CV
            </Button>

            <Link
              href="/recruiters"
              className="text-sm font-semibold leading-6 text-slate-900 transition-all hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
            >
              Information for recruiters <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </Container>
    </AnimatePage>
  );
};

export default AboutPage;
