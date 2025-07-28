// import HomeNews from "../homenews";
// import HomeNewsCard from "../cards/NewsCard";
// import ContainerLayout from "../layouts/ContainerLayout";

import { homeNewsCards } from "@/data/homenewscard";
import NewsCard from "../cards/NewsCard";
import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import Button from "../ui/Button";

const NewsSection = () => (
  <ContainerLayout>
    <section className="w-full py-8">
      <div className="  py-6 flex md:flex-row flex-col items-start md:gap-46 ">
        <div className="flex flex-col space-y-4 min-w-[200px]">
          <h2 className="font-bold text-2xl text-brand-primary-black">
            News & Articles
          </h2>
          <Link href="/blog" className="font-semibold">
            <Button variant="secondary">More Blogs</Button>
          </Link>
        </div>
        <div className="md:flex-1 md:flex md:flex-col justify-start flex-row">
          <p className="text-brand-primary-black text-base font-primary text-left font-medium mt-4 md:mt-0">
            A modal dialog that interrupts the user with important content and
            expects a response. A modal dialog that interrupts the user with
            important content and expects a response.
          </p>
        </div>
      </div>
    </section>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {homeNewsCards.map((card) => (
        <NewsCard
          key={card.id}
          imageUrl={card.imageUrl}
          date={card.date}
          readTime={card.readTime}
          title={card.title}
          summary={card.summary}
          url={card.url}
        />
      ))}
    </div>
  </ContainerLayout>
);

export default NewsSection;
