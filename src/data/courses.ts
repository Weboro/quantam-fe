export interface ICourse {
  id: string;
  name: string;
  slug: string;
  description: string;
  richText: string;
  heroImage: string;
  images: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  tags: string[];
  publishedDate: string;
  syllabus?: string[];
  price?: number;
  url: string;
  location?: string;
  studyLevel?: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate";
  intakes?: string[];
  deliveryMode?: ("Face-to-face" | "Online" | "Blended")[];
  CRICOSCourseCode?: string;
}

const courses: ICourse[] = [
  {
    id: "bachelor-business-accounting",
    name: "Bachelor of Business – Accounting",
    slug: "bachelor-business-accounting",
    description:
      "The Accounting major equips students with the knowledge and skills to interpret, analyse, and report financial and non-financial information critical to effective decision-making.",
    richText:
      "<ul><li>Gain expertise to analyse financial data and create value for stakeholders</li><li>Prepare for CPA Australia and CAANZ eligibility</li><li>Explore sustainability and forensic accounting</li></ul>",
    heroImage: "/courses/accounting/hero.jpg",
    images: ["/courses/accounting/1.jpg"],
    level: "Beginner",
    duration: "3 years, Full-Time",
    tags: ["Accounting", "Business"],
    publishedDate: "2025-08-01",
    url: "/courses/bachelor-business-accounting",
    location: "Parramatta",
    studyLevel: "Undergraduate",
    intakes: ["March", "July", "November"],
    deliveryMode: ["Face-to-face"],
    CRICOSCourseCode: "_TBA_",
  },
  {
    id: "bachelor-business-information-systems",
    name: "Bachelor of Business – Information Systems",
    slug: "bachelor-business-information-systems",
    description:
      "Bridges the gap between technology and business, enabling students to harness technology for strategic decision-making.",
    richText:
      "<ul><li>Gain skills in software development, cybersecurity, and data management</li><li>Address real-world challenges with innovative solutions</li></ul>",
    heroImage: "/courses/information-systems/hero.jpg",
    images: ["/courses/information-systems/1.jpg"],
    level: "Beginner",
    duration: "3 years, Full-Time",
    tags: ["Information Systems", "Business"],
    publishedDate: "2025-08-01",
    url: "/courses/bachelor-business-information-systems",
    location: "Parramatta",
    studyLevel: "Undergraduate",
    intakes: ["March", "July", "November"],
    deliveryMode: ["Face-to-face"],
    CRICOSCourseCode: "_TBA_",
  },
  {
    id: "bachelor-business-hospitality",
    name: "Bachelor of Business – Hospitality",
    slug: "bachelor-business-hospitality",
    description:
      "Prepares students for leadership in the dynamic hospitality industry through hospitality management, event planning, and sustainability.",
    richText:
      "<ul><li>Develop customer experience and hospitality operations management skills</li><li>Learn event planning, food and beverage management</li></ul>",
    heroImage: "/courses/hospitality/hero.jpg",
    images: ["/courses/hospitality/1.jpg"],
    level: "Beginner",
    duration: "3 years, Full-Time",
    tags: ["Hospitality", "Business"],
    publishedDate: "2025-08-01",
    url: "/courses/bachelor-business-hospitality",
    location: "Parramatta",
    studyLevel: "Undergraduate",
    intakes: ["March", "July", "November"],
    deliveryMode: ["Face-to-face"],
    CRICOSCourseCode: "_TBA_",
  },
  {
    id: "bachelor-information-technology",
    name: "Bachelor of Information Technology",
    slug: "bachelor-information-technology",
    description:
      "Equips students to thrive in the digital world with expertise in emerging tech, ethical IT practices, and business-focused problem-solving.",
    richText:
      "<ul><li>Learn AI, cloud computing, cybersecurity, and IoT</li><li>Prepare for diverse IT careers</li><li>Curriculum meets industry demands</li></ul>",
    heroImage: "/courses/information-technology/hero.jpg",
    images: ["/courses/information-technology/1.jpg"],
    level: "Beginner",
    duration: "3 years, Full-Time",
    tags: ["IT", "Technology"],
    publishedDate: "2025-08-01",
    url: "/courses/bachelor-information-technology",
    location: "Parramatta",
    studyLevel: "Undergraduate",
    intakes: ["March", "July", "November"],
    deliveryMode: ["Face-to-face"],
    CRICOSCourseCode: "_TBA_",
  },
];

export default courses;
