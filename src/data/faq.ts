export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq: FaqItem[] = [
  {
    id: 1,
    question: "Is it accessible",
    answer: "",
  },
  {
    id: 2,
    question: "is it styled",
    answer: "",
  },
  {
    id: 3,
    question: "is it styled",
    answer: "",
  },
  {
    id: 4,
    question: "is it styled",
    answer: "",
  },
  {
    id: 5,
    question: "is it styled",
    answer: "",
  },
  {
    id: 6,
    question: "Is it anymated",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default faq;
