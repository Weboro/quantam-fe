import { IPdfType } from "@/types/pdf-type";

const policyPdf = (filename: string) =>
  encodeURI(`/policies-and-procedures/${filename}`);

export const PolicesAndProcedures: IPdfType[] = [
  {
    id: "1",
    title: "Academic Freedom and Intellectual Property Policy",
    icon: "fi fi-rr-lesson",
    description: "Academic Freedom and Intellectual Property Policy",
    url: policyPdf("Academic Freedom and Intellectual Property Policy.pdf"),
  },
  {
    id: "2",
    title: "Academic Integrity Policy and Procedure",
    icon: "fi fi-rr-student-alt",
    description: "Academic Integrity Policy and Procedure",
    url: policyPdf("Academic Integrity Policy and Procedure.pdf"),
  },
  {
    id: "3",
    title: "Academic Progression and Graduation Policy",
    icon: "fi fi-rr-career-growth",
    description: "Academic Progression and Graduation Policy",
    url: policyPdf("Academic Progression and Graduation Policy.pdf"),
  },
  {
    id: "4",
    title: "Admission Policy and Procedure",
    icon: "fi fi-rr-process",
    description: "Admission Policy and Procedure",
    url: policyPdf("Admission Policy and Procedure.pdf"),
  },
  {
    id: "5",
    title: "Advanced Standing, Credit Transfer and Articulation Policy",
    icon: "fi fi-rr-credit-card-buyer",
    description: "Advanced Standing, Credit Transfer and Articulation Policy",
    url: policyPdf(
      "Advanced Standing, Credit Transfer and Articulation Policy.pdf",
    ),
  },
  {
    id: "6",
    title: "Assessment Policy and Procedure",
    icon: "fi fi-rr-assessment",
    description: "Assessment Policy and Procedure",
    url: policyPdf("Assessment Policy and Procedure.pdf"),
  },
  {
    id: "7",
    title: "Complaints and Appeal Policy and Procedure",
    icon: "fi fi-rs-document",
    description: "Complaints and Appeal Policy and Procedure",
    url: policyPdf("Complaints and Appeal Policy and Procedure.pdf"),
  },
  {
    id: "8",
    title: "Deferment, Withdrawal and Cancellation Policy and Procedure",
    icon: "fi fi-rr-deposit",
    description: "Deferment, Withdrawal and Cancellation Policy and Procedure",
    url: policyPdf(
      "Deferment, Withdrawal and Cancellation Policy and Procedure.pdf",
    ),
  },
  {
    id: "9",
    title: "Emergency and Critical Incident Management Policy",
    icon: "fi fi-rr-light-emergency-on",
    description: "Emergency and Critical Incident Management Policy",
    url: policyPdf("Emergency and Critical Incident Management Policy.pdf"),
  },
  {
    id: "10",
    title: "English Language Policy",
    icon: "fi fi-rr-language",
    description: "English Language Policy",
    url: policyPdf("English Language Policy.pdf"),
  },
  {
    id: "11",
    title: "Equity and Diversity Policy",
    icon: "fi fi-rr-refer-arrow",
    description: "Equity and Diversity Policy",
    url: policyPdf("Equity and Diversity Policy.pdf"),
  },
  {
    id: "12",
    title: "Fee Refund Policy",
    icon: "fi fi-rr-fee-receipt",
    description: "Fee Refund Policy",
    url: policyPdf("Fee Refund Policy.pdf"),
  },
  {
    id: "13",
    title: "Health and Safety Policy",
    icon: "fi fi-rr-doctor",
    description: "Health and Safety Policy",
    url: policyPdf("Health and Safety Policy.pdf"),
  },
  {
    id: "14",
    title: "ICT Services and Library Facilities Policy",
    icon: "fi fi-rr-books-medical",
    description: "ICT Services and Library Facilities Policy",
    url: policyPdf("ICT Services and Library Facilities Policy.pdf"),
  },
  {
    id: "15",
    title: "Moderation and Validation Policy and Procedure",
    icon: "fi fi-rr-chess-queen",
    description: "Moderation and Validation Policy and Procedure  ",
    url: policyPdf("Moderation and Validation Policy and Procedure.pdf"),
  },
  {
    id: "16",
    title: "Sexual Assault and Sexual Harassment Policy",
    icon: "fi fi-rr-users",
    description: "Sexual Assault and Sexual Harassment Policy",
    url: policyPdf("Sexual Assault and Sexual Harassment Policy.pdf"),
  },
  {
    id: "18",
    title: "Stakeholder Engagement Policy",
    icon: "fi fi-ts-coins",
    description: "Stakeholder Engagement Policy",
    url: policyPdf("Stakeholder Engagement Policy.pdf"),
  },
  {
    id: "19",
    title: "Student Support and Consultation Policy",
    icon: "fi fi-rr-workshop",
    description: "Student Support and Consultation Policy",
    url: policyPdf("Student Support and Consultation Policy.pdf"),
  },
  {
    id: "20",
    title: "Transfer and Release Policy and Procedure",
    icon: "fi fi-rr-cloud-back-up",
    description: "Transfer and Release Policy and Procedure",
    url: policyPdf("Transfer and Release Policy and Procedure.pdf"),
  },
];
