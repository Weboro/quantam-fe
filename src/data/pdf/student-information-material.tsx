import { IPdfType } from "@/types/pdf-type";

const resourcePdf = (filename: string) => encodeURI(`/resources/${filename}`);

export const StudentInformationMaterial: IPdfType[] = [
  {
    id: "1",
    title: "QIHE Pre-Arrival Guide",
    description: "QIHE Pre-Arrival Guide",
    icon: "fi fi-ts-id-card-clip-alt",
    url: resourcePdf("pre arrival guide.pdf"),
  },
  {
    id: "2",
    title: "QIHE Prospectus",
    description: "Fees and Payments",
    icon: "fi fi-ts-id-card-clip-alt",
    url: resourcePdf("QIHE prospectus.pdf"),
  },
  {
    id: "3",
    title: "QIHE Student Handbook",
    description: "QIHE Student Handbook",
    icon: "fi fi-ts-id-card-clip-alt",
    url: resourcePdf("student handbook.pdf"),
  },
  {
    id: "5",
    title: "Student Orientation PPT",
    description: "Student Orientation PPT",
    icon: "fi fi-ts-id-card-clip-alt",
    url: resourcePdf("student orientation.pdf"),
  },
];
