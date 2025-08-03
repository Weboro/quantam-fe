import { siteLinks } from "@/extra/siteLinks";

interface Ipage {
  name: string;
  slug: string;
  title: string;
  description: string;
  seo: ISeo;
  subPages?: ISubpage[];
}

interface ISubpage {
  icon?: string;
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
    slug: siteLinks.futureStudents,
    title: "Future Students",
    description:
      "Essential resources and information for prospective students planning to study with us.",
    seo: {
      title: "Future Students — QIHE",
      description:
        "Learn about application processes, scholarships, and life at QIHE as a future student.",
    },
    subPages: [
      {
        name: "Why Choose Us",
        slug: "why-choose-us",
        icon: "fi fi-rr-choose",
      },
      {
        name: "Admissions",
        slug: "admissions",
        icon: "fi fi-rr-id-card-clip-alt",
      },
      {
        name: "Admission Requirements",
        slug: "admission-requirements",
        icon: "fi fi-rr-document-signed",
      },
      {
        name: "Find Agent",
        slug: "find-agent",
        icon: "fi fi-rr-member-search",
      },

      {
        name: "Orientation and Pre-Arrival Guide",
        slug: "orientation-and-pre-arrival-guide",
        icon: "fi fi-rr-info-guide",
      },
      {
        name: "Policies and Procedures",
        slug: "policies-and-procedures",
        icon: "fi fi-rr-workflow-alt",
      },
    ],
  },
  {
    name: "QIHE Students",
    slug: "qihe-students",
    title: "QIHE Students",
    description:
      "Access services, support, and campus resources for current QIHE students.",
    seo: {
      title: "QIHE Students — QIHE",
      description:
        "All the tools and support you need to thrive as a QIHE student.",
    },
    subPages: [
      {
        slug: "student-platform",
        name: "Student Platform",
        icon: "fi fi-rr-student-alt",
      },
      {
        slug: "library",
        name: "Library",
        icon: "fi fi-rr-diary-bookmark-down",
      },
      {
        slug: "key-dates",
        name: "Key Dates",
        icon: "fi fi-rr-calendar-star",
      },

      {
        slug: "forms",
        name: "Forms",
        icon: "fi fi-rr-form",
      },

      {
        slug: "fees-and-payment",
        name: "Fees and Payment",
        icon: "fi fi-rr-fee",
      },
    ],
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
    subPages: [
      {
        slug: "about-qihe",
        name: "About QIHE",
        icon: "fi fi-rr-school",
      },
      {
        slug: "mission-and-vision",
        name: "Mission and Vision",
        icon: "fi fi-rr-flag",
      },
      {
        slug: "our-core-values",
        name: "Our Core Values",
        icon: "fi fi-rr-gem",
      },
      {
        slug: "our-core-team",
        name: "Our Core Team",
        icon: "fi fi-rr-lead-management",
      },
      {
        slug: "academic-team",
        name: "Academic Team",
        icon: "fi fi-rr-hr-person",
      },
      {
        slug: "support-team",
        name: "Support Team",
        icon: "fi fi-rr-heart-partner-handshake",
      },
      {
        slug: "sutdent-association",
        name: "Student Association",
        icon: "fi fi-rr-employees-woman-man",
      },
    ],
  },
];

export default pages;
