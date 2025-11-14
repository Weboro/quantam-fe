import { IPdfType } from "@/types/pdf-type";

const formPdf = (filename: string) => encodeURI(`/forms/${filename}`);

export const formsList: IPdfType[] = [
  {
    id: "1",
    title: "Admission Application Form",
    description: "Use this form to apply for admission to the institution.",
    url: formPdf("Admission Application Form.pdf"),
    icon: "fi fi-ts-id-card-clip-alt",
  },
  {
    id: "2",
    title: "Advanced Standing and Credit Transfer Application Form",
    description: "Advanced Standing and Credit Transfer Application Form",
    url: formPdf("Advanced Standing and Credit Transfer Application Form.pdf"),
    icon: "fi fi-rs-form",
  },
  {
    id: "3",
    title: "Complaints and Appeal Form",
    description: "Complaints and Appeal Form",
    url: formPdf("Complaints and Appeal Form.pdf"),
    icon: "fi fi-rr-assessment",
  },
  {
    id: "4",
    title: "Deferment, Withdrawal and Cancellation Form",
    description: "Deferment, Withdrawal and Cancellation Form",
    url: formPdf("Deferment, Withdrawal and Cancellation Form.pdf"),
    icon: "fi fi-rr-assessment-alt",
  },
  {
    id: "5",
    title: "Fee Refund Application Form",
    description: "Fee Refund Application Form",
    url: formPdf("Fee Refund Application Form.pdf"),
    icon: "fi fi-ts-refund-alt",
  },
  {
    id: "6",
    title: "Incident Form",
    url: formPdf("Incident Form.pdf"),
    description: "<p>Incident Form</p>",
    icon: "fi fi-rr-triangle-warning",
  },
  {
    id: "7",
    title: "Transfer and Release Request Form",
    description: "Transfer and Release Request Form",
    url: formPdf("Transfer and Release Request Form.pdf"),
    icon: "fi fi-rr-money-bill-transfer",
  },
];
