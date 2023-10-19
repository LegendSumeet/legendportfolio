import { Container } from "@/components/Header/Container";
import { HeroSection } from "@/components/HeroSection";
import { AnimatePage } from "@/components/animate";
import Brand from "@/components/barnds/Brands";
import SVGImage from "@/components/image";
import { Service } from "@/components/services";
import { Serviceres } from "@/components/services/Serviceres";
import Image from "next/image";

export default function Home() {
  const softwareConsultancyData = {
    title: "Software Consultancy",
    subtitle:
      "I find the right tech stack for your project, scale your team and work with you every step of the way.",
    slug: "",
    image:
      "https://cdn.sanity.io/images/yq5nnpfd/production/4b82f87fc551dd24aba2da01e686687305fe649c-900x600.svg",
    body: "I love working with startups and established businesses to find the right tech stack, be it a single new feature or a whole rebuild of your current product. I can help you find the perfect developers for your project and scale up as your business grows. When it comes to application development, I've seen it all. From building highly customized enterprise software stacks on the latest open source frameworks to reducing costs and improving user experience with cloud-based solutions. I offer consulting services for companies and agencies that strive to develop scalable and performant web solutions. Deeply knowing my customers' needs, I can help them make the right decision when it comes to deciding on a software architecture and tech stack.",
  };

  const websiteDevelopmentData = {
    title: "Website & App Development",
    subtitle:
      "I build web applications and websites that are well-designed, accessible, and performant.",
    slug: "2",
    image:
      "https://cdn.sanity.io/images/yq5nnpfd/production/4003b5d63e0fe7d71b95891a263c0fa203580dc1-900x600.svg",
    body: "I've been building websites and apps for over year now, working with clients from startups to large enterprise businesses. I like to focus on accessibility, performance, and clean code. As a web and mobile development consultant, I help my clients create the best possible digital products for their businesses. I don't just develop websites and apps, I make them beautiful, fast and accessible to people with disabilities. My goal is to work with you to help you reach your full potential.",
  };
  const ecommmerce = {
    title: "E-Commerce",
    subtitle: "I know how to help you sell more, with less effort.",
    slug: "2",
    image:
      "https://cdn.sanity.io/images/yq5nnpfd/production/4003b5d63e0fe7d71b95891a263c0fa203580dc1-900x600.svg",
    body: "E-commerce development is my trade. I have years of experience working across different industries in B2B and B2C e-commerce development. Whether you're looking to create an MVP or start a new project, I can help you achieve financial goals through performant microservice architecture and modern JavaScript frontends.I can help you design, develop and deploy modern frontend applications built with a microservice architecture. With years of experience working across different industries in B2B and B2C e-commerce development, I can help you achieve financial goals through performant frontends built in React, Redux and GraphQL.",
  };

  return (
    <main>
      <AnimatePage>
        <HeroSection />
        <section id="services">
          <Container>
		  <section id="tools" className="my-40">
              <Container>
                <h2 className="headline mt-24 text-center text-xl md:text-2xl lg:text-3xl">
                  Some of my favourite tools
                </h2>

                <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-16 gap-y-8">
                  <SVGImage
                    src="/svelte.svg"
                    alt="SvelteKit"
                    width={50}
                    height={50}
                  />
                  <SVGImage
                    src="/hygraph.svg"
                    alt="Hygraph"
                    width={50}
                    height={50}
                  />
                  <SVGImage
                    src="/sanity.svg"
                    alt="Sanity"
                    width={50}
                    height={50}
                  />
                  <SVGImage
                    src="/storybook.svg"
                    alt="Storybook"
                    width={50}
                    height={50}
                  />
                  <SVGImage
                    src="/graphql.svg"
                    alt="GraphQL"
                    width={50}
                    height={50}
                  />
                  <SVGImage
                    src="/vercel.svg"
                    alt="Vercel"
                    width={50}
                    height={50}
                  />
                </div>
              </Container>
            </section>
            <h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
              Services I provide
              <span className="mt-2 block text-xl font-bold text-white dark:text-off-white md:text-2xl">
                as a software architect with a passion for creating applications
                and websites that people love.
              </span>
            </h2>
            
            <Service {...softwareConsultancyData} />
            <Serviceres {...websiteDevelopmentData} />
            <Service {...ecommmerce} />
          </Container>
        </section>
      </AnimatePage>
    </main>
  );
}
