import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import Button from "../ui/Button";
import { news } from "@/data/news";
import NewsCard from "../cards/NewsCard";
import Heading from "../ui/Heading";
import { slugs } from "@/extra/slugs";
import FadeUp from "@/components/animations/FadeUp";

const NewsSection = ({ showAll = false }) => (
  <ContainerLayout>
    <ContainerLayout className="grid md:grid-cols-2 gap-4 mt-4 mb-12">
      <div className="flex flex-col items-between gap-2">
        <Heading level={2}>News & Articles</Heading>

        <Link href={slugs.news} className="font-semibold">
          <Button variant="secondary">More Blogs</Button>
        </Link>
      </div>

      <div className="flex items-end">
        <p className="text-muted ">
          Stay updated with the latest news, announcements, and achievements
          from the Quantum Institute community.
        </p>
      </div>
    </ContainerLayout>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {news.slice(0, showAll ? news.length : 3).map((card, index) => (
        <FadeUp key={card.id} delay={index * 0.1}>
          <NewsCard
            imageUrl={card.imageUrl}
            date={card.date}
            readTime={card.readTime}
            title={card.title}
            summary={card.summary}
            url={`/${slugs.news}/${card.slug}`}
          />
        </FadeUp>
      ))}
    </div>
  </ContainerLayout>
);

export default NewsSection;
