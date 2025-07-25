interface IKeyDate {
  id: string;
  title: string;
  description: string;
  date: string;
  month: string;
  day: string;
  category: ("Undergraduate" | "Post-graduate")[];
  learnMoreUrl?: string;
}

const keyDates: IKeyDate[] = [
  {
    id: "1",
    title:
      "Quantum welcomes you with all with warm greetings and lorem insup floral.",
    description:
      "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user.",
    date: "2025-01-01",
    month: "JAN",
    day: "1",
    category: ["Undergraduate", "Post-graduate"],
    learnMoreUrl: "#",
  },
  {
    id: "2",
    title:
      "Quantum welcomes you with all with warm greetings and lorem insup floral.",
    description:
      "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user.",
    date: "2025-01-27",
    month: "JAN",
    day: "27",
    category: ["Undergraduate", "Post-graduate"],
    learnMoreUrl: "#",
  },
  {
    id: "3",
    title:
      "Quantum welcomes you with all with warm greetings and lorem insup floral.",
    description:
      "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user.",
    date: "2025-01-30",
    month: "JAN",
    day: "30",
    category: ["Undergraduate", "Post-graduate"],
    learnMoreUrl: "#",
  },
];

export default keyDates;
export type { IKeyDate };
