import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import Button from "../ui/Button";
import { news } from "@/data/news";
import NewsCard from "../cards/NewsCard";
import Heading from "../ui/Heading";

const NewsSection = ({ showAll = false }) => (
  <ContainerLayout>
    <ContainerLayout className="grid md:grid-cols-2 gap-4 mt-4 mb-12">
      <div className="">
        <Heading level={2}>News & Articles</Heading>
        <Link href="/news" className="font-semibold">
          <Button variant="secondary">More Blogs</Button>
        </Link>
      </div>
      <p className="text-muted">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        provident temporibus dolore corrupti quae dolores consequuntur adipisci.
        Nemo fugit qui sapiente! Voluptates.
      </p>
    </ContainerLayout>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {news.slice(0, showAll ? news.length : 3).map((card) => (
        <NewsCard
          key={card.id}
          imageUrl={card.imageUrl}
          date={card.date}
          readTime={card.readTime}
          title={card.title}
          summary={card.summary}
          url={`/news/${card.slug}`}
        />
      ))}
    </div>
  </ContainerLayout>
);

export default NewsSection;
