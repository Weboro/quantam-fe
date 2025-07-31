import { type IKeyDate } from "@/data/keyDates";
import Link from "next/link";
import Heading from "../ui/Heading";
import Pill from "../Pills";

const KeyDateCard: React.FC<IKeyDate> = ({
  title,
  description,
  month,
  day,
  category,
  learnMoreUrl,
}) => (
  <div className="overflow-hidden rounded-xl grid md:grid-cols-6 border border-surface-2">
    <div className="bg-brand-primary-yellow p-2 h-full grid place-items-center">
      <p className="flex md:flex-col gap-1 md:gap-0 text-center">
        <span className="font-bold text-xl md:text-2xl -mb-2 md:mb-0">
          {month}
        </span>
        <span className="text-xl md:text-5xl xl:text-8xl font-bold">{day}</span>
      </p>
    </div>
    <div className="bg-background md:col-span-5 p-3">
      <div className="flex gap-2 items-center mb-1">
        {category.map((item, index: number) => (
          <Pill key={index} value={item} />
        ))}
      </div>

      <Heading level={4} className="mb-2 md:mb-1">
        {title}
      </Heading>

      <p className="mb-3 line-clamp-3 md:max-w-[80%] text-muted">
        {description}
      </p>

      <div className="flex items-center justify-between w-full mt-2">
        <span>
          <Link
            className="text-brand-primary text-sm font-semibold"
            href={learnMoreUrl}
          >
            Learn More
          </Link>
        </span>
        <span className="text-brand-primary text-sm size-6 rounded-full border border-surface-2 items-center pt-1 pl-0.5">
          <Link href={learnMoreUrl}>
            <i className="fi fi-br-arrow-small-right scale-125 ml-0.5"></i>
          </Link>
        </span>
      </div>
    </div>
  </div>
);

/**<div className="relative overflow-hidden rounded-xl font-primary flex flex-col md:flex-row">
      <div className="py-2 px-12 bg-brand-primary-yellow w-full md:w-fit flex justify-center items-center">
        <div className="flex md:flex-col justify-center items-center gap-4">
          <span className="font-bold text-xl md:text-2xl">{month}</span>
          <span className="text-xl lg:text-8xl font-bold">{day}</span>
        </div>
      </div>
      <div className="flex-1 border-1 border-surface-2 max-md:rounded-b-xl md:rounded-r-xl bg-background">
        <div className="p-4 flex flex-col w-full justify-start">
          <div className="flex gap-3 items-center">
            {category.map((item, index: number) => (
              <span
                key={index}
                className="bg-surface-2 rounded-xl py-1 px-2 text-xs text-brand-primary-black"
              >
                {item}
              </span>
            ))}
          </div>

          <h1 className="text-xl font-bold mt-1">{title}</h1>

          <p className="mt-2 line-clamp-3 md:max-w-[80%]">{description}</p>

          <div className="flex items-center justify-between w-full mt-2">
            <span>
              <Link
                className="text-brand-primary text-sm font-semibold"
                href={learnMoreUrl}
              >
                Learn More
              </Link>
            </span>
            <span className="text-brand-primary text-sm size-6 rounded-full border border-surface-2 items-center pt-1 pl-0.5">
              <Link href={learnMoreUrl}>
                <i className="fi fi-br-arrow-small-right  ml-0.5"></i>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div> */
export default KeyDateCard;
