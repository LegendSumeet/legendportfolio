import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Blog | Sumeet Vishwakarma",
  metadataBase: new URL("https://legendsumeet.vercel.app"),
  description: "Read latest stories from Victor Eke's Blog",
  openGraph: {
    title: "Blog | Sumeet Vishwakarma",
    url: "https://legendsumeet.vercel.app/blog",
    description: "Read latest stories from Sumeet Vishwakarma's Blog",
    images:
      "https://pub-aeb4b56fc7304a9da5d176334162ca95.r2.dev/Black%20and%20Purple%20Modern%20Graphic%20Design%20Business%20Card/2.png",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Welcome to my blog domain where I share personal stories about things I've learned, projects I'm hacking on and just general findings. I also write for other publications."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
