import { homeNews } from "../data/homenews";
import Button from "./ui/Button";

export default function HomeNews() {
  return (
    <section className="w-full py-8">
      <div className="  py-6 flex md:flex-row flex-col items-start md:gap-46 ">
        <div className="flex flex-col space-y-4 min-w-[200px]">
          <h2 className="font-bold text-2xl text-brand-primary-black">
            News & Articles
          </h2>
          <a href="/blog" className="font-semibold">
            <Button variant="secondary">More Blogs</Button>
          </a>
        </div>
        <div className="md:flex-1 md:flex md:flex-col justify-start flex-row">
          {homeNews.map((item) => (
            <p
              key={item.id}
              className="text-brand-primary-black text-base font-primary text-left font-medium mt-4 md:mt-0"
            >
              {item.summary}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
