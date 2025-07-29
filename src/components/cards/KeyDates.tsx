import keyDates, { IKeyDate } from "@/data/keyDates";
import Link from "next/link";

export default function KeyDates() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8">
      {keyDates.slice(0, 3).map((item, index: number) => (
        <KeyDateCard key={index} {...item} />
      ))}
    </div>
  );
}

const KeyDateCard = ({
  title,
  description,
  month,
  day,
  category,
  learnMoreUrl,
}: IKeyDate) => {
  return (
    <div className="relative overflow-hidden rounded-xl font-primary flex flex-col md:flex-row">
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
          <p className="mt-2">{description}</p>
          <div className="flex items-center justify-between w-full mt-2">
            <span>
              {" "}
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
    </div>
  );
};
