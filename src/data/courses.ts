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
  price: number;
  isFeatured: boolean;
  url: string;
  location?: string;
  studyLevel?: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate";
  intakes?: string[];
  deliveryMode?: ("Face-to-face" | "Online" | "Blended")[];
  CRICOSCourseCode?: string;
}

const courses: ICourse[] = [
  {
    id: "crs001",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Master the art of creating user-centered designs with our comprehensive UI/UX course.",
    richText: `
      <p>Learn the foundations of design thinking, wireframing, prototyping, and user testing.</p><ul><li>Tools: Figma, Adobe XD</li><li>Focus: Usability, accessibility, and creativity</li></ul>`,
    heroImage: "/courses/ui-ux/hero.jpg",
    images: [
      "/courses/ui-ux/1.jpg",
      "/courses/ui-ux/2.jpg",
      "/courses/ui-ux/3.jpg",
    ],
    level: "Intermediate",
    duration: "6 weeks",
    tags: ["Design", "Figma", "Prototyping"],
    publishedDate: "2025-06-20",
    syllabus: [
      "Introduction to Design Thinking",
      "User Research & Personas",
      "Wireframes & Mockups",
      "Prototyping in Figma",
      "Usability Testing",
    ],
    price: 15000,
    isFeatured: true,
    url: "/courses/ui-ux-design",
    location: "Online",
    studyLevel: "Certificate",
    intakes: ["August 2025", "November 2025"],
    deliveryMode: ["Online", "Blended"],
    CRICOSCourseCode: undefined,
  },
  {
    id: "crs002",
    name: "Full-Stack Development",
    slug: "full-stack-dev",
    description:
      "Become a full-stack developer by mastering both frontend and backend technologies.",
    richText: `
      <p>This course covers everything from HTML, CSS, JavaScript, React to Node.js, Express and MongoDB.</p>
      <p>By the end, you’ll build and deploy your own full-stack apps.</p>
    `,
    heroImage: "/courses/full-stack/hero.jpg",
    images: ["/courses/full-stack/1.jpg", "/courses/full-stack/2.jpg"],
    level: "Advanced",
    duration: "12 weeks",
    tags: ["JavaScript", "React", "Node.js"],
    publishedDate: "2025-05-10",
    syllabus: [
      "HTML/CSS Foundations",
      "JavaScript & ES6+",
      "React & Component Architecture",
      "Node.js + Express",
      "MongoDB & Mongoose",
      "Deploying to Vercel & Render",
    ],
    price: 30000,
    isFeatured: true,
    url: "/courses/full-stack-dev",
    location: "Kathmandu Campus",
    studyLevel: "Diploma",
    intakes: ["September 2025", "January 2026"],
    deliveryMode: ["Face-to-face", "Online"],
    CRICOSCourseCode: undefined,
  },
  {
    id: "crs003",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Learn SEO, content strategy, analytics and ad campaigns to grow any brand online.",
    richText: `
      <p>This course helps you understand audience behavior and run effective digital campaigns.</p>
      <p>Ideal for marketing enthusiasts and business owners.</p>
    `,
    heroImage: "/courses/digital-marketing/hero.jpg",
    images: [
      "/courses/digital-marketing/1.jpg",
      "/courses/digital-marketing/2.jpg",
    ],
    level: "Beginner",
    duration: "4 weeks",
    tags: ["SEO", "Content", "Ads", "Analytics"],
    publishedDate: "2025-04-01",
    syllabus: [
      "Intro to Digital Marketing",
      "SEO Basics",
      "Content Creation Strategy",
      "Google Ads & Meta Ads",
      "Analytics & Tracking",
    ],
    price: 12000,
    isFeatured: false,
    url: "/courses/digital-marketing",
    location: "Online",
    studyLevel: "Certificate",
    intakes: ["October 2025", "February 2026"],
    deliveryMode: ["Online"],
    CRICOSCourseCode: undefined,
  },
  {
    id: "crs004",
    name: "Data Science",
    slug: "data-science",
    description:
      "Dive into statistics, machine learning, and data visualization with real-world projects.",
    richText: `
      <p>Cover Python, Pandas, Scikit-learn, and visualization tools like Matplotlib and Tableau.</p>
      <p>Build predictive models and dashboards from scratch.</p>
    `,
    heroImage: "/courses/data-science/hero.jpg",
    images: ["/courses/data-science/1.jpg", "/courses/data-science/2.jpg"],
    level: "Advanced",
    duration: "10 weeks",
    tags: ["Python", "ML", "Data Viz"],
    publishedDate: "2025-03-15",
    syllabus: [
      "Intro to Python for Data",
      "Statistics & Probability",
      "Pandas & Numpy",
      "Modeling with Scikit-learn",
      "Data Visualization",
    ],
    price: 25000,
    isFeatured: true,
    url: "/courses/data-science",
    location: "Online",
    studyLevel: "Certificate",
    intakes: ["November 2025", "March 2026"],
    deliveryMode: ["Online", "Blended"],
    CRICOSCourseCode: undefined,
  },
];

export default courses;
