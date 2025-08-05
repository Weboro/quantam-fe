import { useEffect, useState } from "react";
import { ICourse } from "@/data/courses";

type IDegreeType = ICourse["degreeType"];
type IDeliveryMode = ICourse["deliveryMode"];
type ILevel = ICourse["level"];

const useSearchCourse = (courseData: ICourse[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(courseData);
  const [degreeType, setDegreeType] = useState<IDegreeType | null>(null);
  const [deliveryMode, setDeliveryMode] = useState<IDeliveryMode | null>(null);
  const [studentType, setStudentType] = useState<ILevel | null>(null);

  const handleSearch = () => {
    const results = courseData.filter((item) => {
      const matchesSearch = !searchQuery || matchText(item.name, searchQuery);
      const matchesDegree = !degreeType || item.degreeType === degreeType;
      const matchesDeliveryMode =
        !deliveryMode || item.deliveryMode === deliveryMode;
      const matchesStudentType = !studentType || item.level === studentType;

      return (
        matchesSearch &&
        matchesDegree &&
        matchesDeliveryMode &&
        matchesStudentType
      );
    });

    setResults(results);
  };

  const clearFilter = () => {
    setDegreeType(null);
    setDeliveryMode(null);
    setStudentType(null);
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
  }, [searchQuery, degreeType, deliveryMode, studentType]);

  return {
    degreeType,
    setDegreeType,
    deliveryMode,
    setDeliveryMode,
    studentType,
    setStudentType,
    //
    clearFilter,
    searchQuery,
    setSearchQuery,
    results,
    setResults,
    handleSearch,
    handleInputChange,
  };
};

export default useSearchCourse;
