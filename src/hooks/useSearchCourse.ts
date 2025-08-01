import { useEffect, useState } from "react";
import { ICourse } from "@/data/courses";

const useSearchCourse = (courseData: ICourse[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(courseData);

  const handleSearch = () => {
    console.log("Search");

    if (!searchQuery) return setResults(courseData);

    const results = courseData.filter((item) => {
      return matchText(item.name, searchQuery);
    });

    setResults(results);
  };

  //   Utils
  const matchText = (a: string, b: string) => {
    if (a.trim().toLowerCase().includes(b.trim().toLowerCase())) return true;
    return false;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();

    setSearchQuery(value);
  };

  //
  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    results,
    setResults,
    handleSearch,
    handleInputChange,
  };
};

export default useSearchCourse;
