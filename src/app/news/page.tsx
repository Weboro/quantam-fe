import NewsCard from "@/components/cards/NewsCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { news } from "@/data/news";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <ContainerLayout className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="">
          <Heading level={1}>News & Articles</Heading>
          <p className="text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            provident temporibus dolore corrupti quae dolores consequuntur
            adipisci. Nemo fugit qui sapiente! Voluptates.
          </p>
        </div>

        <div className="flex items-end">
          <p>::TODO - Searchbar</p>
        </div>
      </ContainerLayout>

      <ContainerLayout>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {news.map((card) => (
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
    </>
  );
};

export default BlogPage;
