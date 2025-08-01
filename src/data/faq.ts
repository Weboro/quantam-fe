export interface IFaq {
  id: number;
  question: string;
  answer: string;
}

const faq: IFaq[] = [
  {
    id: 1,
    question: "What programs does QIHE offer?",
    answer:
      "QIHE currently offers undergraduate programs in Business and Information Technology with majors such as Accounting, Information Systems, and Hospitality Management.",
  },
  {
    id: 2,
    question: "Is QIHE accredited in Australia?",
    answer:
      "Yes, QIHE is accredited under the Australian Qualifications Framework (AQF) and operates under TEQSA regulations. All programs meet national quality standards.",
  },
  {
    id: 3,
    question: "Can international students apply to QIHE?",
    answer:
      "Absolutely. International students are welcome and supported throughout the admissions, visa, and enrollment processes.",
  },
  {
    id: 4,
    question: "What are the English language requirements?",
    answer:
      "QIHE accepts IELTS (Academic) with a minimum overall score of 6.0 and no band below 5.5. TOEFL and PTE scores are also accepted. Please check the latest English Language Policy for details.",
  },
  {
    id: 5,
    question: "Does QIHE offer scholarships or financial aid?",
    answer:
      "Currently, QIHE offers merit-based scholarships for outstanding applicants. Additional financial support options may be available based on eligibility and intake.",
  },
  {
    id: 6,
    question: "What support services are available for students?",
    answer:
      "QIHE provides academic advising, career guidance, counselling, and access to learning resources both on campus and online through its Student Services team.",
  },
];

export default faq;
