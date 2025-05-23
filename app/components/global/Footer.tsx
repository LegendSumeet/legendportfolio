import Image from "next/image";
import sanitylogo from "@/public/sanity.png";
import vercellogo from "@/public/vercel.svg";
import nextjslogo from "@/public/nextjs.svg";
import UnmountStudio from "./Unmount";

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44 lg:min-h-[250px] min-h-full relative">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
          <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
            {/* <a
              className="flex items-center justify-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 px-4 text-center mb-3    font-bold tracking-tight"
              href="https://github.com/Evavic44/legendsumeet.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BiLogoGithub />
              Stars <em className="text-primary-color not-italic">3,329</em>
            </a> */}

            <small className="text-zinc-500">
              Copyright &copy; Sumeet Vishwakarma {new Date().getFullYear()} All
              rights Reserved
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}
