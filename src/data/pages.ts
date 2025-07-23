// data.js;
interface Ipage {
  name: string;
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  seo: ISeo;
}

interface ISeo {
  title: string;
  description: string;
}

const pages: Ipage[] = [
  {
    name: "Home",
    slug: "",
    title: "Welcome to MySite",
    description:
      "Discover our offerings, latest updates, and key features on the homepage.",
    seo: {
      title: "MySite — Home",
      description:
        "Explore MySite, your hub for courses, community and insights.",
    },
    lastUpdated: "2025-07-20",
  },
  {
    name: "About",
    slug: "about",
    title: "About Us",
    description:
      "Learn about our mission, values, and the team behind our organization.",
    seo: {
      title: "About — MySite",
      description: "Find out who we are and what drives us.",
    },
    lastUpdated: "2025-06-15",
  },
  {
    name: "Courses",
    slug: "courses",
    title: "Our Courses",
    description:
      "Browse through the range of courses we offer for different skill levels.",
    seo: {
      title: "Courses — MySite",
      description: "Check out our full catalog of courses and learning paths.",
    },
    lastUpdated: "2025-07-01",
  },
  {
    name: "Contact",
    slug: "contact",
    title: "Contact Us",
    description:
      "Get in touch with us via email, phone, or our social media channels.",
    seo: {
      title: "Contact — MySite",
      description: "We'd love to hear from you—reach out today!",
    },
    lastUpdated: "2025-05-30",
  },
];
export default pages;
