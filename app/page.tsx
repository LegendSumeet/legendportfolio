import { Container } from "@/components/Header/Container";
import { HeroSection } from "@/components/HeroSection";
import { AnimatePage } from "@/components/animate";
import Brand from "@/components/barnds/Brands";
import { Service } from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
		<AnimatePage>
      <HeroSection />
      <section id="services">
				<Container>
					<h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						Services I provide
						<span className="mt-2 block text-xl font-bold text-white dark:text-off-white md:text-2xl">
							as a software architect with a passion for creating applications
							and websites that people love.
						</span>
					</h2>
					<Service title={"Software Consultancy"}
					 subtitle={"I find the right tech stack for your project, scale your team and work with you every step of the way."} 
					 slug={""}
					  image={"https://cdn.sanity.io/images/yq5nnpfd/production/4b82f87fc551dd24aba2da01e686687305fe649c-900x600.svg"}
					   body={"I love working with startups and established businesses to find the right tech stack, be it a single new feature or a whole rebuild of your current product. I can help you find the perfect developers for your project and scale up as your business grows. When it comes to application development, I've seen it all. From building highly customised enterprise software stacks on the latest open source frameworks to reducing costs and improving user experience with cloud-based solutions.I offer consulting services for companies and agencies that strive to develop scalable and performant web solutions. Deeply knowing my customers' needs, I can help them make the right decision when it comes to deciding on a software architecture and tech stack."}/>
					   <Service title={"Software Consultancy"}
					 subtitle={"I find the right tech stack for your project, scale your team and work with you every step of the way."} 
					 slug={"2"}
					  image={"https://cdn.sanity.io/images/yq5nnpfd/production/4b82f87fc551dd24aba2da01e686687305fe649c-900x600.svg"}
					   body={"I love working with startups and established businesses to find the right tech stack, be it a single new feature or a whole rebuild of your current product. I can help you find the perfect developers for your project and scale up as your business grows. When it comes to application development, I've seen it all. From building highly customised enterprise software stacks on the latest open source frameworks to reducing costs and improving user experience with cloud-based solutions.I offer consulting services for companies and agencies that strive to develop scalable and performant web solutions. Deeply knowing my customers' needs, I can help them make the right decision when it comes to deciding on a software architecture and tech stack."}/>

					
				</Container>
			</section>
     
			</AnimatePage>
    </main>
  );
}
