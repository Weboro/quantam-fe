import { IKeyDate } from "@/data/keyDates";
import Pill from "../Pills";
import Heading from "../ui/Heading";

const KeyDateCard: React.FC<IKeyDate> = ({
  title,
  description,
  month,
  day,
  category,
}) => (
  <div className="overflow-hidden rounded-xl flex flex-col sm:flex-row border border-surface-2">
    <div className="bg-brand-primary-yellow p-2 sm:aspect-square w-full sm:w-32 flex-shrink-0 grid place-items-center">
      <p className="flex md:flex-col gap-1 md:gap-0 text-center">
        <span className="font-bold text-xl md:text-2xl -mb-2 md:mb-0">
          {month}
        </span>
        <span className="text-xl md:text-5xl xl:text-6xl font-bold">{day}</span>
      </p>
    </div>
    <div className="bg-background flex-1 p-3">
      <div className="flex gap-2 items-center mb-1">
        {category.map((item: string, index: number) => (
          <Pill key={index} value={item} />
        ))}
      </div>
      <Heading level={4} className="mb-2 md:mb-1">
        {title}
      </Heading>
      <p className={`mb-3 md:max-w-2xl text-muted line-clamp-1`}>
        {description}
      </p>
    </div>
  </div>
);

export default KeyDateCard;
