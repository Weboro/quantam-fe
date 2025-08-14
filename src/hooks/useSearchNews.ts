import { useEffect, useState } from "react";
import { INews } from "@/data/news";

const useSearchNews = (newsData: INews[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(newsData);
  const [selectedTag, setSelectedTag] = useState<string>("");

  const handleSearch = () => {
    const filtered = newsData.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || item.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
    setResults(filtered);
  };

  const clearFilter = () => {
    setSelectedTag("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedTag, newsData]);

  return {
    searchQuery,
    setSearchQuery,
    results,
    handleInputChange,
    handleSearch,
    selectedTag,
    setSelectedTag,
    clearFilter,
  };
};

export default useSearchNews;
