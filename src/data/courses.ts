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
        richText: ` <div class="rich_text"> <p>The Accounting major equips students with the knowledge and skills to interpret, analyse, and report financial and non-financial information critical to effective decision-making.</p><h3>Core Learning Outcomes</h3> <ul> <li>Master financial reporting standards and principles</li> <li>Develop advanced analytical and problem-solving skills</li> <li>Understand taxation and regulatory compliance</li> </ul><h3>Professional Recognition</h3> <ul> <li>TBA</li> </ul>`,
      },
      {
        title: "Why Choose This Program?",
        richText: ` <div class="rich_text"> <p>Our accounting program provides a comprehensive foundation in financial analysis, reporting, and strategic decision-making.</p>  <h3>Industry-Relevant Curriculum</h3> <ul> <li>Modern accounting software and technology integration</li> <li>Real-world case studies and practical applications</li> <li>Sustainability and forensic accounting specializations</li> </ul>  <h3>Expert Faculty & Support</h3> <ul> <li>Learn from industry-experienced accounting professionals</li> <li>Small class sizes for personalized attention</li> <li>Comprehensive career guidance and mentorship</li> </ul> </div> `,
      },
      {
        title: "Career Outcomes",
        richText: ` <div class="rich_text"> <p>Graduates are prepared for diverse accounting and finance roles across various industries.</p>  <h3>Career Opportunities</h3> <ul> <li>Public Practice Accountant</li> <li>Management Accountant</li> <li>Financial Analyst</li> <li>Taxation Specialist</li> </ul><h3>Graduate Success</h3> <ul> <li>TBA</li> </ul>`,
      },
      {
        title: "Admission Requirements",
        richText: ` <div class="rich_text"> <p>We welcome applications from students who demonstrate academic excellence and a passion for accounting and finance.</p>  <h3>Academic Requirements</h3> <ul> <li>Completion of Year 12 or equivalent</li> <li>Minimum ATAR score of 65 (or equivalent)</li> <li>Mathematics (preferably Methods or Specialist) recommended</li> </ul>  <h3>Application Process</h3> <ul> <li>Complete online application form</li> <li>Submit official academic transcripts</li> <li>English language proficiency (IELTS 6.0 or equivalent for international students)</li> </ul> </div> `,
      },
    ],
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
        richText: ` <div class="rich_text"> <p>The Information Systems major bridges the gap between technology and business, enabling students to harness technology for strategic decision-making.</p>  <h3>Technical Expertise</h3> <ul> <li>Software development and programming fundamentals</li> <li>Cybersecurity principles and threat management</li> <li>Database design and data management systems</li> </ul>  <h3>Business Integration</h3> <ul> <li>Business process analysis and optimization</li> <li>Strategic technology implementation</li> <li>Digital transformation leadership</li> </ul> </div> `,
      },
      {
        title: "Why Choose This Program?",
        richText: ` <div class="rich_text"> <p>Our Information Systems program combines technical expertise with business acumen to prepare versatile IT professionals.</p>  <h3>Cutting-Edge Technology</h3> <ul> <li>Latest programming languages and frameworks</li> <li>Advanced cybersecurity tools and methodologies</li> <li>Cloud computing and enterprise solutions</li> </ul>  <h3>Practical Experience</h3> <ul> <li>Industry partnerships and internship opportunities</li> <li>Real-world project-based learning</li> <li>Professional certification pathways</li> </ul> </div> `,
      },
      {
        title: "Career Outcomes",
        richText: ` <div class="rich_text"> <p>Graduates are equipped for diverse technology roles that bridge business and IT domains.</p>  <h3>Career Opportunities</h3> <ul> <li>IT Consultant</li> <li>Systems Analyst</li> <li>Cybersecurity Specialist</li> <li>Business Intelligence Analyst</li> </ul>  <h3>Industry Demand</h3> <ul> <li>TBA</li> </ul> </div> `,
      },
      {
        title: "Admission Requirements",
        richText: ` <div class="rich_text"> <p>We seek students with strong analytical skills and an interest in technology and business integration.</p>  <h3>Academic Requirements</h3> <ul> <li>Completion of Year 12 or equivalent</li> <li>Minimum ATAR score of 65 (or equivalent)</li> <li>Mathematics and IT subjects preferred</li> </ul>  <h3>Application Process</h3> <ul> <li>Submit online application with portfolio (optional)</li> <li>Provide academic transcripts and references</li> <li>English proficiency requirements for international students</li> </ul> </div> `,
      },
    ],
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
        richText: ` <div class="rich_text"> <p>The Hospitality major prepares students for leadership in the dynamic hospitality industry through comprehensive management training and practical experience.</p>  <h3>Core Competencies</h3> <ul> <li>Hospitality operations and service excellence</li> <li>Event planning and venue management</li> <li>Food and beverage operations</li> </ul>  <h3>Industry Focus</h3> <ul> <li>Sustainable tourism and hospitality practices</li> <li>Digital hospitality technologies</li> <li>Cross-cultural hospitality management</li> </ul> </div> `,
      },
      {
        title: "Why Choose This Program?",
        richText: ` <div class="rich_text"> <p>Our hospitality program offers hands-on experience and industry connections to launch your career in this exciting field.</p>  <h3>Hands-On Learning</h3> <ul> <li>On-campus training restaurant and hotel facilities</li> <li>Industry placements with leading hospitality brands</li> <li>Real event planning and execution projects</li> </ul>  <h3>Industry Connections</h3> <ul> <li>Guest lectures from industry executives</li> <li>Networking events and career fairs</li> <li>Mentorship programs with hospitality leaders</li> </ul> </div> `,
      },
      {
        title: "Career Outcomes",
        richText: ` <div class="rich_text"> <p>Graduates pursue diverse leadership roles across the global hospitality and tourism industry.</p>  <h3>Career Opportunities</h3> <ul> <li>Hotel Manager</li> <li>Event Coordinator</li> <li>Restaurant Manager</li> <li>Tourism Development Manager</li> </ul>  <h3>Industry Prospects</h3> <ul> <li>TBA<li> </ul> </div> `,
      },
      {
        title: "Admission Requirements",
        richText: ` <div class="rich_text"> <p>We welcome passionate individuals who are committed to delivering exceptional customer experiences.</p>  <h3>Academic Requirements</h3> <ul> <li>Completion of Year 12 or equivalent</li> <li>Minimum ATAR score of 65 (or equivalent)</li> <li>English and business studies recommended</li> </ul>  <h3>Personal Attributes</h3> <ul> <li>Strong communication and interpersonal skills</li> <li>Customer service orientation and cultural awareness</li> <li>Leadership potential and team collaboration skills</li> </ul> </div> `,
      },
    ],
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
        richText: ` <div class="rich_text"> <p>The Information Technology major equips students to thrive in the digital world with expertise in emerging technologies, ethical IT practices, and business-focused problem-solving.</p>  <h3>Emerging Technologies</h3> <ul> <li>Artificial Intelligence and Machine Learning</li> <li>Cloud Computing and Infrastructure</li> <li>Internet of Things (IoT) and Edge Computing</li> </ul>  <h3>Professional Skills</h3> <ul> <li>Cybersecurity and risk management</li> <li>Project management and agile methodologies</li> <li>Ethical technology practices and governance</li> </ul> </div> `,
      },
      {
        title: "Why Choose This Program?",
        richText: ` <div class="rich_text"> <p>Our IT program combines technical excellence with business understanding to prepare future technology leaders.</p>  <h3>Industry-Leading Curriculum</h3> <ul> <li>Curriculum aligned with industry 4.0 requirements</li> <li>State-of-the-art labs and development environments</li> <li>Regular curriculum updates reflecting tech trends</li> </ul>  <h3>Career Preparation</h3> <ul> <li>Industry certifications and professional development</li> <li>Capstone projects with industry partners</li> <li>Career services and job placement support</li> </ul> </div> `,
      },
      {
        title: "Career Outcomes",
        richText: ` <div class="rich_text"> <p>Graduates are prepared for high-demand technology roles across diverse industries and sectors.</p>  <h3>Career Opportunities</h3> <ul> <li>Software Developer</li> <li>Systems Analyst</li> <li>IT Project Manager</li> <li>Cloud Solutions Architect</li> </ul>  <h3>Market Outlook</h3> <ul> <li>97% employment rate within 3 months of graduation</li> <li>Average starting salary of $75,000+</li> <li>Excellent advancement opportunities in tech sector</li> </ul> </div> `,
      },
      {
        title: "Admission Requirements",
        richText: ` <div class="rich_text"> <p>We seek innovative thinkers with strong problem-solving abilities and a passion for technology.</p>  <h3>Academic Requirements</h3> <ul> <li>Completion of Year 12 or equivalent</li> <li>Minimum ATAR score of 65 (or equivalent)</li> <li>Mathematics and computing subjects highly recommended</li> </ul>  <h3>Selection Criteria</h3> <ul> <li>Problem-solving aptitude and logical thinking</li> <li>Interest in technology innovation and development</li> <li>English proficiency for effective communication</li> </ul> </div> `,
      },
    ],
  },
];
export default courses;
