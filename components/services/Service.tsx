import classNames from "classnames";
import Image from "next/image";

interface ServiceProps {
  title: string;
  subtitle: string;
  slug: string;
  body: String;
  image: string;
  isReversed?: boolean;
}

export const Service = ({
  title,
  subtitle,
  slug,
  body,
  image,
  isReversed,
}: ServiceProps) => {
  return (
    <article id={slug}>
      <h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
        {title}
      </h3>
      <div
        className={classNames("flex flex-col lg:gap-12", {
          "lg:flex-row-reverse": isReversed,
          "lg:flex-row": !isReversed,
        })}
      >
        <Image
          src={image}
          width={900}
          height={600}
          alt={`Illustration for ${title}`}
          className="mt-8 px-12 lg:mt-0 lg:w-1/4 lg:px-0"
        />
        <div>
          <p className="mt-4 text-white text-xl font-semibold md:text-xl lg:text-2xl">
            {subtitle}
          </p>
          <p className="mt-4 text-gray-400 text-lg font-semibold md:text-xl lg:text-lg">
            {body}
          </p>
        </div>
      </div>
    </article>
  );
};
