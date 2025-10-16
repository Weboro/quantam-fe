import { slugs } from "@/extra/slugs";

interface Ipage {
  name: string;
  slug: string;
  title: string;
  description?: string;
  seo?: ISeo;
  subPages?: ISubpage[];
  subHeadings?: ISubHeading[];
}

interface ISubHeading {
  title: string;
  slug: string;
  pages: ISubpage[];
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

export const majors = [
  {
    title: "Bachelor in Business",
    slug: "bbus",
    pages: [
      {
        slug: slugs.bachelorBusinessAccounting,
        name: "Major in Accounting",
      },
      {
        slug: slugs.bachelorBusinessInformationSystems,
        name: "Major in Information Systems",
      },
      {
        slug: slugs.bachelorBusinessHospitality,
        name: "Major in Hospitality",
      },
    ],
  },
  {
    title: "Bachelor in Information Technology",
    slug: "bit",
    pages: [
      {
        slug: slugs.bachelorInformationTechnology,
        name: "Major in Information Technology",
      },
    ],
  },
];

const pages: Ipage[] = [
  {
    name: "Programs",
    slug: slugs.programs,
    title: "Our Programs",
    description:
      "Browse through the range of Programs we offer for different skill levels.",
    seo: {
      title: "Programs — QIHE",
      description: "Check out our full catalog of Programs and learning paths.",
    },
    subHeadings: majors,
  },
  {
    name: "Future Students",
    slug: slugs.futureStudents,
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
        slug: slugs.whyChooseUs,
        icon: "fi fi-rr-choose",
      },
      {
        name: "Admissions",
        slug: slugs.admissions,
        icon: "fi fi-rr-id-card-clip-alt",
      },
      {
        name: "Admission Requirements",
        slug: slugs.admissionRequirements,
        icon: "fi fi-rr-document-signed",
      },
      {
        name: "Find Agent",
        slug: slugs.findAgent,
        icon: "fi fi-rr-member-search",
      },

      {
        name: "Orientation and Pre-Arrival Guide",
        slug: slugs.orientationAndPreArrivalGuide,
        icon: "fi fi-rr-info-guide",
      },
      {
        name: "Policies and Procedures",
        slug: slugs.policiesAndProcedures,
        icon: "fi fi-rr-workflow-alt",
      },
      {
        name: "student information material",
        slug: "student-information-material",
        icon: "fi fi-rr-info-guide",
      },
    ],
  },
  {
    name: "QIHE Students",
    slug: slugs.qiheStudents,
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
        slug: slugs.studentPlatform,
        name: "Student Platform",
        icon: "fi fi-rr-student-alt",
      },
      {
        slug: slugs.library,
        name: "Library",
        icon: "fi fi-rr-diary-bookmark-down",
      },
      {
        slug: slugs.qiheServicesAndFacilities,
        name: "QIHE Services and Facilities",
        icon: "fi fi-rr-calendar-star",
      },

      {
        slug: slugs.forms,
        name: "Forms",
        icon: "fi fi-rr-form",
      },
      {
        slug: slugs.studentSupport,
        name: "Student Support",
        icon: "fi fi-rr-headset",
      },

      // {
      //   slug: slugs.feesandPayments,
      //   name: "Fees and Payment",
      //   icon: "fi fi-rr-fee",
      // },
    ],
  },
  {
    name: "Discover QIHE",
    slug: slugs.discoverQihe,
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
        slug: slugs.aboutQihe,
        name: "About QIHE",
        icon: "fi fi-rr-school",
      },
      {
        slug: slugs.missionAndVision,
        name: "Mission and Vision",
        icon: "fi fi-rr-flag",
      },
      {
        slug: slugs.ourCoreValues,
        name: "Our Core Values",
        icon: "fi fi-rr-gem",
      },
      {
        slug: slugs.ourCoreTeam,
        name: "Our Core Team",
        icon: "fi fi-rr-lead-management",
      },
      {
        slug: slugs.academicTeam,
        name: "Academic Team",
        icon: "fi fi-rr-hr-person",
      },
      {
        slug: slugs.supportTeam,
        name: "Support Team",
        icon: "fi fi-rr-heart-partner-handshake",
      },
      {
        slug: slugs.faqs,
        name: "Frequently Asked Questions",
        icon: "fi fi-rr-seal-question",
      },
      {
        slug: slugs.studentAssociation,
        name: "Student Association",
        icon: "fi fi-rr-employees-woman-man",
      },
      {
        slug: slugs.esosFramework,
        name: "ESOS Framework",
        icon: "fi fi-rr-file-contract",
      },
      {
        slug: slugs.privacyPolicy,
        name: "Privacy Policy",
        icon: "fi fi-rr-shield-check",
      },
      {
        slug: slugs.copyright,
        name: "Copyright",
        icon: "fi fi-rr-copyright",
      },
      {
        slug: slugs.careersAtQihe,
        name: "Careers at QIHE",
        icon: "fi fi-rr-briefcase",
      },
    ],
  },
];

export default pages;
