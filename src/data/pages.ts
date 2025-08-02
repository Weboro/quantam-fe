interface Ipage {
  name: string;
  slug: string;
  title: string;
  description: string;
  seo: ISeo;
  subPages?: ISubpage[];
}

interface ISubpage {
  name: string;
  slug: string;
}

interface ISeo {
  title: string;
  description: string;
}

const pages: Ipage[] = [
  {
    name: "Programs",
    slug: "programs",
    title: "Our Programs",
    description:
      "Browse through the range of Programs we offer for different skill levels.",
    seo: {
      title: "Programs — QIHE",
      description: "Check out our full catalog of Programs and learning paths.",
    },
    subPages: [
      {
        slug: "bachelor-business-accounting",
        name: "Bachelor of Business – Accounting",
      },
      {
        slug: "bachelor-business-information-systems",
        name: "Bachelor of Business – Information Systems",
      },
      {
        slug: "bachelor-business-hospitality",
        name: "Bachelor of Business – Hospitality",
      },
      {
        slug: "bachelor-information-technology",
        name: "Bachelor of Information Technology",
      },
    ],
  },
  {
    name: "Future Students",
    slug: "future-students",
    title: "Future Students",
    description:
      "Essential resources and information for prospective students planning to study with us.",
    seo: {
      title: "Future Students — QIHE",
      description:
        "Learn about application processes, scholarships, and life at QIHE as a future student.",
    },
  },
  {
    name: "QIHE Students",
    slug: "qihe-students",
    title: "Current Students",
    description:
      "Access services, support, and campus resources for current QIHE students.",
    seo: {
      title: "QIHE Students — QIHE",
      description:
        "All the tools and support you need to thrive as a QIHE student.",
    },
  },
  {
    name: "Discover QIHE",
    slug: "discover-qihe",
    title: "Discover QIHE",
    description:
      "Explore our story, mission, campus life, and why QIHE is the right choice for you.",
    seo: {
      title: "Discover QIHE — QIHE",
      description:
        "Get to know QIHE, our values, campus, and what makes us unique.",
    },
  },
];

export default pages;
