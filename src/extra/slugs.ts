const underConstruction = "under-construction";
const resourcePdf = (filename: string) => encodeURI(`/resources/${filename}`);
const formPdf = (filename: string) => encodeURI(`/forms/${filename}`);
const policyPdf = (filename: string) =>
  encodeURI(`/policies-and-procedures/${filename}`);

export const files = {
  prospectus: resourcePdf("QIHE prospectus.pdf"),
  applyForm: formPdf("Admission Application Form.pdf"),
};

export const slugs = {
  apply: "apply",
  news: "news",
  contact: "contact",
  campusInformation: "campus-information",
  getStarted: "get-started",
  majors: "courses",
  //
  prospectus: underConstruction,
  onlineApplication: formPdf("Admission Application Form.pdf"),
  studentSupport: "student-support",
  consultation: policyPdf("Student Support and Consultation Policy.pdf"),
  feesandPayments: "fees-and-payment",
  feeRefundPolicy: underConstruction,
  eLibrary: underConstruction,
  libraryFacilitiesPolicy: underConstruction,
  studentPlatformLogin: "https://lms.qinstitute.com.au/login/index.php",

  //
  programs: "programs",
  // Programs Sub pages
  bachelorBusinessAccounting: "bachelor-business-accounting",
  bachelorBusinessInformationSystems: "bachelor-business-information-systems",
  bachelorBusinessHospitality: "bachelor-business-hospitality",
  bachelorInformationTechnology: "bachelor-information-technology",
  studentInformationMaterial: "student-information-material",

  //
  futureStudents: "future-students",
  // Future Students subpages
  whyChooseUs: "why-choose-us",
  admissions: "admissions",
  admissionRequirements: "admission-requirements",
  findAgent: "find-agent",
  orientationAndPreArrivalGuide: "orientation-and-pre-arrival-guide",
  policiesAndProcedures: "policies-and-procedures",

  //
  qiheStudents: "qihe-students",
  // QIHE Students subpages
  studentPlatform: "student-platform",
  library: "library",
  forms: "forms",
  feesAndPayment: "fees-and-payment",

  //
  discoverQihe: "discover-qihe",
  // Discover QIHE subpages
  aboutQihe: "about-qihe",
  missionAndVision: "mission-and-vision",
  ourCoreValues: "our-core-values",
  // ourCoreTeam: "our-core-team",
  academicTeam: "academic-team",
  supportTeam: "support-team",
  studentAssociation: "student-association",
  faqs: "faqs",
  esosFramework: "esos-framework",
  privacyPolicy: "privacy-policy",
  copyright: "copyright",
  careersAtQihe: "careers-at-qihe",

  governanceChart:"governance-chart",
  organisationChart:"organisational-chart",
};
