export interface CourseCardProps {
  imageUrl: string;
  title: string;
  location: string;
  studyLevel: string;
  duration: string;
  deliveryModes: string[];
  programCode: string;
  intakes: string[];
  applyUrl: string;
  learnMoreUrl: string;
}

export const courseCards: CourseCardProps[] = [
  {
    imageUrl: "./banner.jpg",
    title:
      "Quantum welcomes you with all with warm greetings and lorem insup floral.",
    location: "City Campus",
    studyLevel: "Undergraduate",
    duration: "2 years",
    deliveryModes: ["Face-to-face (includes blended)", "Online"],
    programCode: "Program code 7459",
    intakes: [
      "Autumn Session 2025",
      "Spring Session 2025",
      "Autumn Session 2026",
      "Spring Session 2026",
    ],
    applyUrl: "#apply",
    learnMoreUrl: "#learn-more",
  },
];
export interface CourseCardProps {
  imageUrl: string;
  title: string;
  location: string;
  studyLevel: string;
  duration: string;
  deliveryModes: string[];
  programCode: string;
  intakes: string[];
  applyUrl: string;
  learnMoreUrl: string;
}
