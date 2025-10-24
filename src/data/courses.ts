import { slugs } from "@/extra/slugs";

export type IValue =
  | "On Campus"
  | "Face-to-face (Not work-based training involved)"
  | "Online"
  | "Blended";

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
  aqfLevel?: string;
  creditPoints?: string;
  degreeType?: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate";
  intakes?: string[];
  deliveryMode?: IValue[];
  CRICOSCourseCode?: string;
  numberOfcourses?: string;
  tabbedPaneData?: ITabbedPane[];
}

export interface ITabbedPane {
  title: string;
  richText: string;
}

const courses: ICourse[] = [
  {
    id: "bachelor-business-accounting",
    major: "Bachelor of Business",
    name: "Bachelor of Business – Accounting",
    slug: slugs.bachelorBusinessAccounting,
    description:
      "The Accounting major equips students with the knowledge and skills to interpret, analyse, and report financial and non-financial information critical to effective decision-making. Students will explore foundational and advanced concepts, including accounting principles, auditing, taxation, business law, and management. This major is ideal for those seeking a career in professional accounting or related fields.",
    richText: "",
    heroImage: "/courses/accounting/hero.jpg",
    images: ["/courses/accounting/1.jpg"],
    level: "Beginner",
    duration: "3 years, Full-Time",
    tags: ["Accounting", "Business"],
    publishedDate: "2025-08-01",
    url: "/courses/bachelor-business-accounting",
    location: "Level 4, 16-18 Wentworth Street, Parramatta NSW 2150",
    aqfLevel: "7 (Bachelor Degree)",
    numberOfcourses: "24 Courses/ 10 Credit Points Per Course",
    creditPoints: "240",
    degreeType: "Undergraduate",
    intakes: ["TBA"],
    deliveryMode: [
      "On Campus",
      "Face-to-face (Not work-based training involved)",
    ],
    CRICOSCourseCode: "TBA",
    tabbedPaneData: [
      {
        title: "Why Choose This Program?",
        richText: `
<ul class="list-disc list-outside space-y-1 text-start p-2">
  <li>Gain essential business knowledge and skills in accounting</li>
  <li>Gain expertise to analyse financial data and create value for stakeholders.</li>
  <li>Prepare for professional certifications with CPA Australia and CAANZ eligibility.</li>
  <li>Explore emerging fields like sustainability accounting and forensic accounting.</li>
  <li>Learn from an industry-relevant curriculum aligned with workforce needs.</li>
</ul>`,
      },
      {
        title: "Learning Outcomes",
        richText: `
<div class="list-decimal list-outside  space-y-2  flex flex-col gap-2 py-2">
  <p>Students enrolled in the Bachelor of Business program will be able to possess broad and coherent knowledge as well as skills that are transferrable for real-world application to prepare them for their careers, with specific learning outcomes that are in line with the major that they have selected.</p>
 <div><h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2"> Upon completion of the Bachelor of Business – Accounting program, students are expected to: </h3>
    <ul class="list-decimal   text-md px-4 sm:px-6 list-inside text-sm space-y-1  mt-1">
      <li>Demonstrate a broad and coherent understanding of business and accounting principles, theories, and practices across diverse industry contexts.</li>
      <li>Critically analyse and solve complex problems to develop innovative and sustainable solutions in professional business environments.</li>
      <li>Communicate effectively and professionally with diverse audiences using a range of traditional and digital platforms.</li>
      <li>Work independently and collaboratively to manage accounting tasks, lead projects, and achieve common business goals while respecting cultural and social diversity.</li>
      <li>Apply ethical, legal, and socially responsible principles in decision-making to contribute positively to society and professional accounting practice.</li>
    </ul>
  </p></div>
  <p>Graduates of the Bachelor of Business (Accounting) program will be prepared to be qualified as professional accountants from major professional bodies in Australia such as CPA Australia and Chartered Accountants Australia and New Zealand (CAANZ).</p>
</div>`,
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
</ul>`,
      },
      {
        title: "Admission Requirements",
        richText: `
<p class="mb-4">
  We welcome students who show strong academic ability and a genuine passion for accounting and finance.
</p>

<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Minimum Entry Requirements</h3>

<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">Domestic Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Year 12 (Australia) or ATAR 55</li>
  <li>AQF Level 5 Diploma</li>
</ul>

<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">International Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Year 12 equivalent or IB Diploma (24+ points)</li>
  <li>English Requirements (if prior studies weren’t in English)</li>
</ul>

<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Alternative Pathways</h3>
<ul class="list-disc list-outside space-y-1 text-start px-4">
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
</ol>

<p class="mt-4">
  For full details, see the 
  <a target="main" href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Admission+Policy+and+Procedure.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0" 
  class="text-blue-700 hover:underline hover:text-brand-primary transition-all">Admission Policy and Procedure</a>.
</p>`,
      },
    ],
  },

  {
    id: "bachelor-business-information-systems",
    major: "Bachelor of Business",
    name: "Bachelor of Business – Information Systems",
    slug: slugs.bachelorBusinessInformationSystems,
    description:
      "The Bachelor of Business - Information Systems major bridges the gap between technology and business, enabling students to harness technology for strategic decision-making. Students will learn to improve business efficiency, develop and manage information systems, and protect organisational data. This major prepares graduates for leadership in today’s digital economy.",
    richText: "",
    heroImage: "/courses/information-systems/hero.jpg",
    images: ["/courses/information-systems/1.jpg"],
    level: "Beginner",
    duration: "3 years, Full-Time",
    tags: ["Bachelors of Business - Information Systems", "Business"],
    publishedDate: "2025-08-01",
    url: "/courses/bachelor-business-information-systems",
    location: "Level 4, 16-18 Wentworth Street, Parramatta NSW 2150",
    aqfLevel: "7 (Bachelor Degree)",
    numberOfcourses: "24 Courses/ 10 Credit Points Per Course",
    creditPoints: "240",
    deliveryMode: [
      "On Campus",
      "Face-to-face (Not work-based training involved)",
    ],
    degreeType: "Undergraduate",
    intakes: ["TBA"],
    CRICOSCourseCode: "TBA",
    tabbedPaneData: [
      {
        title: "Why Choose This Program?",
        richText: `
<ul class="list-disc list-outside space-y-1 text-start pl-5 text-gray-700">
  <li>Gain essential business knowledge and skills in information systems.</li>
  <li>Gain skills in software development, cybersecurity, data management, and analysis.</li>
  <li>Prepare for diverse roles in the digital economy.</li>
  <li>Address real-world challenges with innovative solutions.</li>
  <li>Learn from industry-relevant curriculum aligned with workforce needs.</li>
</ul>`,
      },
      {
        title: "Program Learning Outcomes",
        richText: `
<div class="space-y-6 text-gray-800">
  <p class="leading-relaxed text-base md:text-lg">
    Students enrolled in the Bachelor of Business program will be able to possess broad and coherent knowledge as well as skills that are transferrable for real-world application to prepare them for their careers, with specific learning outcomes that are in line with the major that they have selected.
  </p>

  <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-8 shadow-sm">
    <h3 class="text-lg md:text-xl font-semibold text-blue-800 mb-4">
      Upon completion of the Bachelor of Business - Information Systems program, students are expected to:
    </h3>

    <ol class="list-decimal list-inside space-y-3 text-gray-700 text-sm md:text-base text-start px-4">
      <li>Demonstrate a broad and coherent understanding of business and information systems principles, theories, and practices across diverse industry contexts.</li>
      <li>Critically analyse and solve complex problems to develop innovative and sustainable solutions, integrating emerging technologies, information systems applications, and entrepreneurial approaches within diverse global and cultural business environments.</li>
      <li>Communicate effectively and professionally with diverse audiences using a range of traditional and digital platforms.</li>
      <li>Work independently and collaboratively to manage information systems tasks, lead projects, and achieve common business goals while respecting cultural and social diversity.</li>
      <li>Apply ethical, legal, and socially responsible principles in decision-making to contribute positively to society and professional information systems practice.</li>
    </ol>
  </div>
</div>`,
      },
      {
        title: "Career Outcomes",
        richText: `
<ul class="list-disc list-outside space-y-1 text-start pl-5 text-gray-700">
  <li>Information Systems Manager</li>
  <li>System Analyst</li>
  <li>Data Analyst</li>
  <li>Database Administrator</li>
  <li>IT Consultant</li>
  <li>Information Security Analyst</li>
  <li>Business Intelligence Analyst</li>
  <li>IT Project Manager</li>
</ul>`,
      },
      {
        title: "Admission Requirements",
        richText: `
<p class="mb-4">
  This program is ideal for students who enjoy technology, data, and finding smart solutions for business challenges.
</p>

<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Minimum Entry Requirements</h3>

<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">Domestic Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Year 12 (Australia) or ATAR 55 or AQF Level 5 Diploma</li>
</ul>

<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">International Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Year 12 equivalent or IB Diploma (24+ points)</li>
  <li>English Requirements (if prior studies weren’t in English)</li>
</ul>

<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Alternative Pathways</h3>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Aboriginal & Torres Strait Islander students</li>
  <li>Mature age applicants</li>
  <li>Students from disadvantaged or under-represented backgrounds</li>
</ul>

<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Admission Process</h3>
<ol class="list-decimal list-inside space-y-1 px-4">
  <li>Check Eligibility</li>
  <li>Submit Application</li>
  <li>Provide Supporting Documents</li>
  <li>Receive Admission Outcome</li>
  <li>Accept Offer</li>
  <li>Orientation and Enrolment</li>
</ol>

<p class="mt-4 text-sm text-gray-600">
  For full details, see the Admission Policy and Procedure.
</p>`,
      },
    ],
  },
  {
    id: "bachelor-business-hospitality",
    major: "Bachelor of Business",
    name: "Bachelor of Business - Hospitality",
    slug: slugs.bachelorBusinessHospitality,
    description:
      "The Bachelor of Business - Hospitality major prepares students for leadership in the fast-paced and dynamic hospitality industry. Students will gain a deep understanding of hospitality management, customer experience, event planning, and sustainable practices. This major is tailored for those passionate about creating exceptional guest experiences and managing hospitality operations.",
    richText: "", // "<ul><li>Develop customer experience and hospitality operations management skills</li><li>Learn event planning, food and beverage management</li></ul>",
    heroImage: "/courses/hospitality/hero.jpg",
    images: ["/courses/hospitality/1.jpg"],
    level: "Beginner",
    duration: "3 years, Full-Time",
    tags: ["Hospitality", "Business"],
    publishedDate: "2025-08-01",
    url: "/courses/bachelor-business-hospitality",
    location: "Level 4, 16-18 Wentworth Street, Parramatta NSW 2150",
    aqfLevel: "7 (Bachelor Degree)",
    numberOfcourses: "24 Courses/ 10 Credit Points Per Course",
    creditPoints: "240",
    deliveryMode: [
      "On Campus",
      "Face-to-face (Not work-based training involved)",
    ],
    degreeType: "Undergraduate",
    intakes: ["TBA"],
    CRICOSCourseCode: "TBA",
    tabbedPaneData: [
      {
        title: "Why Choose This Program?",
        richText: `
<ul class="list-disc list-outside space-y-1 text-start p-2">
  <li>Gain essential business knowledge and skills in hospitality.</li>
  <li>Build essential management and customer service skills.</li>
  <li>Learn to navigate the global hospitality industry.</li>
  <li>Gain expertise in event planning, food and beverage management, and sustainability.</li>
  <li>Learn from industry-relevant curriculum aligned with workforce needs.</li>
</ul>
`,
      },
      {
        title: "Learning Outcomes",
        richText: `
<div class="space-y-6 text-gray-800">
  <p class="leading-relaxed text-base md:text-lg">
    Students enrolled in the Bachelor of Business program will be able to possess broad and coherent knowledge as well as skills that are transferrable for real-world application to prepare them for their careers, with specific learning outcomes that are in line with the major that they have selected.
  </p>

  <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-8 shadow-sm">
    <h3 class="text-lg md:text-xl font-semibold text-blue-800 mb-4">
      Upon completion of the Bachelor of Business – Hospitality program, students are expected to:
    </h3>

    <ol class="list-decimal list-inside space-y-3 text-gray-700 text-sm md:text-base text-start px-4">
      <li>Demonstrate a broad and coherent understanding of business and hospitality principles, theories, and practices across diverse industry contexts.</li>
      <li>Critically analyse and solve complex problems to develop innovative and sustainable solutions in professional business environments.</li>
      <li>Communicate effectively and professionally with diverse audiences using a range of traditional and digital platforms.</li>
      <li>Work independently and collaboratively to manage hospitality tasks, lead projects, and achieve common business goals while respecting cultural and social diversity.</li>
      <li>Apply ethical, legal, and socially responsible principles in decision-making to contribute positively to society and professional hospitality practice.</li>
    </ol>
  </div>
</div>
`,
      },

      {
        title: "Career Outcomes",
        richText: `
<ul class="list-disc list-outside space-y-1 text-start p-2">
  <li>Hotel Manager</li>
  <li>Event Planner</li>
  <li>Restaurant Manager</li>
  <li>Resort Operations Manager</li>
  <li>Airline Management</li>
  <li>Tourism Consultant</li>
  <li>Food and Beverage Manager</li>
  <li>Conference Services Manager</li>
  <li>Customer Service or Quality Manager</li>
  <li>Retail Management</li>
</ul>
`,
      },
      {
        title: "Admission Requirements",
        richText: `
<p class="mb-4">
  This program is designed to equip students with leadership, hospitality, and event management skills for a sustainable and dynamic industry.
</p>

<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Minimum Entry Requirements</h3>

<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">Domestic Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Year 12 (Australia) or ATAR 55 or AQF Level 5 Diploma</li>
</ul>

<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">International Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Year 12 equivalent or IB Diploma (24+ points)</li>
  <li>English Requirements (if prior studies weren’t in English)</li>
</ul>

<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Alternative Pathways</h3>
<ul class="list-disc list-outside space-y-1 text-start px-4">
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
</ol>

<p class="mt-4">
  For full details, see the Admission Policy and Procedure.
</p>
`,
      },
    ],
  },

  {
    id: "bachelor-information-technology",
    major: "Bachelor of Business",
    name: "Bachelor of Information Technology ",
    slug: slugs.bachelorInformationTechnology,
    description:
      "Bachelor of Business-Information Technology  program aims to produce graduates who are well-prepared to meet the demands of the digital world. Students will gain a comprehensive understanding of emerging technologies, ethical IT practices, and strategic problem-solving, enabling them to contribute meaningfully to diverse organisations and industries",
    richText: "", // "<ul><li>Learn AI, cloud computing, cybersecurity, and IoT</li><li>Prepare for diverse IT careers</li><li>Curriculum meets industry demands</li></ul>",
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
    aqfLevel: "7 (Bachelor Degree)",
    numberOfcourses: "24 Courses/ 10 Credit Points Per Course",
    creditPoints: "240",
    deliveryMode: [
      "On Campus",
      "Face-to-face (Not work-based training involved)",
    ],
    CRICOSCourseCode: "TBA",
    tabbedPaneData: [
      {
        title: "Why Choose This Program?",
        richText: `
<ul class="list-disc list-outside space-y-1 text-start p-2">
  <li>Acquire up-to-date knowledge of emerging technologies such as AI, cloud computing, cybersecurity, and IoT.</li>
  <li>Build transferable skills to address real-world business and technology challenges.</li>
  <li>Develop ethical and sustainable practices aligned with professional IT roles.</li>
  <li>Benefit from a curriculum designed to meet industry demands and prepare for future IT roles.</li>
</ul>`,
      },
      {
        title: "Learning Outcomes",
        richText: `
<div class="space-y-6 text-gray-800">
  <p class="leading-relaxed text-base md:text-lg">
    Students enrolled in the Bachelor of Information Technology  program will be able to possess broad and coherent knowledge as well as skills that are transferrable for real-world application to prepare them for their careers, with specific learning outcomes that are in line with the major that they have selected.
  </p>

  <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-8 shadow-sm">
    <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-4">
      Upon completion of the Bachelor of Information Technology  program, students are expected to:
    </h3>

    <ol class="list-decimal list-inside space-y-3 text-gray-700 text-sm md:text-base text-start px-4">
      <li>Demonstrate broad and coherent theoretical and technical knowledge of information technology relevant to diverse business contexts and communities.</li>
      <li>Perform core professional obligations, ethical principles promoting equity and inclusion, enabling a sustainable future facilitated through information technologies.</li>
      <li>Integrate current and emerging information technologies to build innovative solutions, enable digital transformations and address information systems challenges.</li>
      <li>Critically evaluate opportunities and recommend strategic solutions, deploying information technology for business improvements and innovations.</li>
      <li>Manage information technology projects collaboratively and autonomously communicating outcomes and recommendations to diverse stakeholders.</li>
    </ol>
  </div>
</div>
`,
      },
      {
        title: "Career Outcomes",
        richText: `
<ul class="list-disc list-outside space-y-1 text-start p-2">
  <li>IT Business Analyst</li>
  <li>Systems Analyst or Administrator</li>
  <li>IT Manager</li>
  <li>Cloud Administrator or Engineer</li>
  <li>Cloud Support Analysis</li>
  <li>Data Analyst or Engineer</li>
  <li>IT Consultant</li>
  <li>IT Developer</li>
  <li>Security Consultant or Manager</li>
  <li>Software Developer or Engineer</li>
  <li>Information Systems Manager</li>
  <li>Network Administrator or Engineer</li>
</ul>`,
      },
      {
        title: "Admission Requirements",
        richText: `
<p class="mb-4">
  This program is designed for students who are innovative thinkers, enjoy solving complex problems, and have a passion for technology.
</p>
<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Minimum Entry Requirements</h3>
<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">Domestic Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Year 12 (Australia) or ATAR 55 or AQF Level 5 Diploma</li>
</ul>
<h4 class="text-base font-medium text-gray-700 mt-4 mb-1">International Students</h4>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Year 12 equivalent or IB Diploma (24+ points)</li>
  <li>English Requirements (if prior studies weren’t in English)</li>
</ul>
<h3 class="text-lg font-semibold text-blue-800 mt-6 mb-2">Alternative Pathways</h3>
<ul class="list-disc list-outside space-y-1 text-start px-4">
  <li>Aboriginal & Torres Strait Islander students</li>
  <li>Mature Age applicants</li>
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
</ol>
<p class="mt-4 text-gray-700">
  For full details, see <em>Admission Policy and Procedure</em>.
</p>
 `,
      },
    ],
  },
];

export default courses;
