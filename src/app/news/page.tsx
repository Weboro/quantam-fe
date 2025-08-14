"use client";

import NewsCard from "@/components/cards/NewsCard";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { news } from "@/data/news";
import FilterPopover from "@/components/popovers/FilterPopover";
import FilterSelect from "@/components/select/FilterSelect";
import React from "react";
import useSearchNews from "@/hooks/useSearchNews";
import Button from "@/components/ui/Button";

const BlogPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    results: filteredNews,
    handleInputChange,
    handleSearch,
    selectedTag,
    setSelectedTag,
    clearFilter,
  } = useSearchNews(news);

  const tags = React.useMemo(() => {
    const tagSet = new Set<string>();
    news.forEach((item) => item.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, []);

  return (
    <>
      <ContainerLayout className="grid md:grid-cols-2 gap-8 mt-4 mb-8">
        <div className="">
          <Heading level={2}>News & Articles</Heading>
          <p className="text-muted">
            Stay up to date with the latest news, events, and updates from QIHE.
          </p>
        </div>
        <div className="flex items-end">
          <div className="flex flex-col gap-2 w-full min-w-0 sm:flex-row sm:items-center">
            <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="text"
                className="flex-1 min-w-0 border-2 border-surface-2 rounded-lg bg-surface w-full px-2 py-1.5"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <div className="flex items-center justify-end">
                <FilterPopover clearFilter={clearFilter}>
                  <FilterSelect
                    value={selectedTag}
                    onChange={(el) => setSelectedTag(el as string)}
                    placeholder="Select Tag"
                    options={tags}
                  />
                </FilterPopover>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>

      <ContainerLayout>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {filteredNews.length > 0 ? (
            filteredNews.map((card) => (
              <NewsCard
                key={card.id}
                imageUrl={card.imageUrl}
                date={card.date}
                readTime={card.readTime}
                title={card.title}
                summary={card.summary}
                url={`/news/${card.slug}`}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-muted py-10">
              No news found matching your criteria.
            </div>
          )}
        </div>
      </ContainerLayout>
    </>
  );
};

export default BlogPage;
