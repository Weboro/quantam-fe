import { useEffect, useState } from "react";
import { type IAgent } from "@/data/agents";

const useSearchAgent = (data: IAgent[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(data);

  const matchText = (a: string, b: string) => {
    return a.trim().toLowerCase().includes(b.trim().toLowerCase());
  };

  const handleSearch = () => {
    if (!searchQuery) return setResults(data);

    const filtered = data.filter(
      (item) =>
        matchText(item.agentName, searchQuery) ||
        matchText(item.companyName, searchQuery) ||
        matchText(item.email, searchQuery) ||
        matchText(item.phone, searchQuery)
    );

    setResults(filtered);
  };

  // utils
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

export default useSearchAgent;
