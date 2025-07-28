export interface CourseFilterOption {
  label: string;
  value: string;
}

export interface CourseFilterCategory {
  label: string;
  key: string;
  options: CourseFilterOption[];
}

export const courseFilterCategories: CourseFilterCategory[] = [
  {
    label: "Faculty",
    key: "faculty",
    options: [
      { label: "Engineering", value: "engineering" },
      { label: "Science", value: "science" },
      { label: "Business", value: "business" },
      { label: "Arts", value: "arts" },
    ],
  },
  {
    label: "Degree Type",
    key: "degreeType",
    options: [
      { label: "Undergraduate", value: "undergraduate" },
      { label: "Postgraduate", value: "postgraduate" },
      { label: "Research", value: "research" },
    ],
  },
  {
    label: "Student Type",
    key: "studentType",
    options: [
      { label: "Domestic", value: "domestic" },
      { label: "International", value: "international" },
    ],
  },
  {
    label: "Delivery Mode",
    key: "deliveryMode",
    options: [
      { label: "On Campus", value: "oncampus" },
      { label: "Online", value: "online" },
      { label: "Blended", value: "blended" },
    ],
  },
];
