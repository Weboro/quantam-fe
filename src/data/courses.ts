import { slugs } from "@/extra/slugs";

export interface ICourse {
  id: string;
  name: string;
  major: string;
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
  degreeType?: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate";
  intakes?: string[];
  deliveryMode?: "Face-to-face" | "Online" | "Blended";
  CRICOSCourseCode?: string;
  tabbedPaneData?: ITabbedPane[];
}

export interface ITabbedPane {
  title: string;
  richText: string;
}
 
const commonTabbedData = [
  {
    title: "Why Choose This Program?",
    richText: `
<ul class="list-disc list-outside space-y-1 text-start p-2">
  <li>Gain essential business knowledge and skills</li>
  <li>Develop expertise to analyse data and create value for stakeholders</li>
  <li>Prepare for professional certifications and industry recognition</li>
  <li>Learn from industry-relevant curriculum aligned with workforce needs</li>
  <li>Engage in hands-on practical experience and real-world projects</li>
</ul>`
  },
  {
    title: "Career Outcomes",
    richText: `
<ul class="list-disc list-outside space-y-1 text-start p-2">
  <li>Professional Accountant</li>
  <li>Business Analyst</li>
  <li>Finance Manager</li>
  <li>Business Manager</li>
  <li>Analyst</li>
  <li>Tax Consultant</li>
  <li>Auditor</li>
  <li>Accounts Receivable or Payable Officer</li>
  <li>Risk Manager</li>
  <li>Credit Officer</li>
</ul>`
  },
  {
    title: "Admission Requirements",
    richText: `
<p class="mb-4">
  We welcome students who show strong academic ability and a genuine passion for their field.
</p>
<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Minimum Entry Requirements</h3>
<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">Domestic Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4 ">
  <li>Completion of Year 12 (or equivalent)</li>
  <li>Minimum ATAR score (or equivalent)</li>
</ul>
<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">International Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4 ">
  <li>Year 12 equivalent or IB Diploma</li>
  <li>English Requirements (if prior studies weren’t in English)</li>
</ul>
<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Alternative Pathways</h3>
<ul class="list-disc list-outside space-y-1 text-start px-4 ">
  <li>Aboriginal & Torres Strait Islander students</li>
  <li>Mature age applicants</li>
  <li>Students from disadvantaged or under-represented backgrounds</li>
</ul>
<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Admission Process</h3>
<ol class="list-decimal list-inside space-y-1 px-1">
  <li>Check Eligibility</li>
  <li>Submit Application</li>
  <li>Provide Supporting Documents</li>
  <li>Receive Admission Outcome</li>
  <li>Accept Offer</li>
  <li>Orientation and Enrolment</li>
</ol>`
  }
];

const courses: ICourse[] = [
  {
    id: "bachelor-business-accounting",
    major: "Bachelor of Business",
    name: "Accounting",
    slug: slugs.bachelorBusinessAccounting,
    description:
      "The Accounting major equips students with the knowledge and skills to interpret, analyse, and report financial and non-financial information critical to effective decision-making.",
    richText:
      "<ul><li>Gain expertise to analyse financial data and create value for stakeholders</li></ul>",
    heroImage: "/courses/accounting/hero.jpg",
    images: ["/courses/accounting/1.jpg"],
    level: "Beginner",
    duration: "3 years, Full-Time",
    tags: ["Accounting", "Business"],
    publishedDate: "2025-08-01",
    url: "/courses/bachelor-business-accounting",
    location: "Level 4, 16-18 Wentworth Street, Parramatta NSW 2150",
    degreeType: "Undergraduate",
    intakes: ["TBA"],
    deliveryMode: "Face-to-face",
    CRICOSCourseCode: "_TBA_",
    tabbedPaneData: [
      {
        title: "Program Overview",
        richText: `<div class="rich_text">
  <p>The Accounting major equips students with the knowledge and skills to interpret, analyse, and report financial and non-financial information critical to effective decision-making.</p>
  <h3>Core Learning Outcomes</h3>
  <ul>
    <li>Master financial reporting standards and principles</li>
    <li>Develop advanced analytical and problem-solving skills</li>
    <li>Understand taxation and regulatory compliance</li>
  </ul>
  <h3>Professional Recognition</h3>
  <ul>
    <li>TBA</li>
  </ul>
</div>`
      },
      ...commonTabbedData
    ]
  },
  {
    id: "bachelor-business-information-systems",
    major: "Bachelor of Business",
    name: "Information Systems",
    slug: slugs.bachelorBusinessInformationSystems,
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
    location: "Level 4, 16-18 Wentworth Street, Parramatta NSW 2150",
    degreeType: "Undergraduate",
    intakes: ["TBA"],
    deliveryMode: "Face-to-face",
    CRICOSCourseCode: "_TBA_",
    tabbedPaneData: [
      {
        title: "Program Overview",
        richText: `<div class="rich_text">
  <p>The Information Systems major bridges the gap between technology and business, enabling students to harness technology for strategic decision-making.</p>
  <h3>Technical Expertise</h3>
  <ul>
    <li>Software development and programming fundamentals</li>
    <li>Cybersecurity principles and threat management</li>
    <li>Database design and data management systems</li>
  </ul>
  <h3>Business Integration</h3>
  <ul>
    <li>Business process analysis and optimization</li>
    <li>Strategic technology implementation</li>
    <li>Digital transformation leadership</li>
  </ul>
</div>`
      },
      ...commonTabbedData
    ]
  },
  {
    id: "bachelor-business-hospitality",
    major: "Bachelor of Business",
    name: "Hospitality",
    slug: slugs.bachelorBusinessHospitality,
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
    location: "Level 4, 16-18 Wentworth Street, Parramatta NSW 2150",
    degreeType: "Undergraduate",
    intakes: ["TBA"],
    deliveryMode: "Face-to-face",
    CRICOSCourseCode: "_TBA_",
    tabbedPaneData: [
      {
        title: "Program Overview",
        richText: `<div class="rich_text">
  <p>The Hospitality major prepares students for leadership in the dynamic hospitality industry through comprehensive management training and practical experience.</p>
  <h3>Core Competencies</h3>
  <ul>
    <li>Hospitality operations and service excellence</li>
    <li>Event planning and venue management</li>
    <li>Food and beverage operations</li>
  </ul>
  <h3>Industry Focus</h3>
  <ul>
    <li>Sustainable tourism and hospitality practices</li>
    <li>Digital hospitality technologies</li>
    <li>Cross-cultural hospitality management</li>
  </ul>
</div>`
      },
      ...commonTabbedData
    ]
  },
  {
    id: "bachelor-information-technology",
    major: "Bachelor of Business",
    name: "Bachelor of Information Technology",
    slug: slugs.bachelorInformationTechnology,
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
    location: "Level 4, 16-18 Wentworth Street, Parramatta NSW 2150",
    degreeType: "Undergraduate",
    intakes: ["TBA"],
    deliveryMode: "Face-to-face",
    CRICOSCourseCode: "_TBA_",
    tabbedPaneData: [
      {
        title: "Program Overview",
        richText: `<div class="rich_text">
  <p>The Information Technology major equips students to thrive in the digital world with expertise in emerging technologies, ethical IT practices, and business-focused problem-solving.</p>
  <h3>Emerging Technologies</h3>
  <ul>
    <li>Artificial Intelligence and Machine Learning</li>
    <li>Cloud Computing and Infrastructure</li>
    <li>Internet of Things (IoT) and Edge Computing</li>
  </ul>
  <h3>Professional Skills</h3>
  <ul>
    <li>Cybersecurity and risk management</li>
    <li>Project management and agile methodologies</li>
    <li>Ethical technology practices and governance</li>
  </ul>
</div>`
      },
      ...commonTabbedData
    ]
  }
];

export default courses;
