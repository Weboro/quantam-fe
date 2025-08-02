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
      "QIHE offers undergraduate programs in Business and Information Technology. Business majors include Accounting, Information Systems, and Hospitality.",
  },
  {
    id: 2,
    question: "Where is QIHE located?",
    answer:
      "QIHE is located in the heart of Parramatta, offering students convenient access to public transport, local amenities, and opportunities to engage with the community.",
  },
  {
    id: 3,
    question: "What are the entry requirements for international students?",
    answer:
      "International applicants must have completed 12 years of formal education recognized by NOOSR, meet English proficiency standards, satisfy GTE criteria, and provide valid student visa documentation.",
  },
  {
    id: 4,
    question: "What are the English language requirements at QIHE?",
    answer:
      "QIHE accepts IELTS (Academic) with an overall score of 6.0 and no band below 5.5. TOEFL (IBT) and PTE (Academic) scores are also accepted. Refer to the English Language Policy for details.",
  },
  {
    id: 5,
    question: "Does QIHE recognize prior learning or work experience?",
    answer:
      "Yes. Students may apply for Advanced Standing or Credit Transfer based on relevant prior learning, work experience, or qualifications that align with course outcomes.",
  },
  {
    id: 6,
    question: "What support services are available at QIHE?",
    answer:
      "QIHE offers academic advising, career guidance, personal development support, and a range of student services delivered by a dedicated team, including during orientation.",
  },
  {
    id: 7,
    question: "How does the admission process work at QIHE?",
    answer:
      "Applicants must submit a completed online form along with certified documents. Admission outcomes are generally released within five working days and may include a conditional or full offer.",
  },
  {
    id: 8,
    question: "What are the delivery methods for programs?",
    answer:
      "All programs are delivered full-time, on-campus, and face-to-face to ensure an immersive and supportive learning experience.",
  },
];

export default faq;
