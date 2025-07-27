export interface HomeNewsCardItem {
  id: number;
  imageUrl: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  url: string;
}

export const homeNewsCards: HomeNewsCardItem[] = [
  {
    id: 1,
    imageUrl: "/banner.png",
    date: "Jul 15, 2025",
    readTime: "3 mins readtime",
    title:
      "Quantum welcomes you with all with warm greetings and lorem insup floral.",
    summary:
      "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user.",
    url: "/blog/1",
  },
  {
    id: 2,
    imageUrl: "/banner.png",
    date: "Jul 15, 2025",
    readTime: "3 mins readtime",
    title:
      "Quantum welcomes you with all with warm greetings and lorem insup floral.",
    summary:
      "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user.",
    url: "/blog/2",
  },
  {
    id: 3,
    imageUrl: "/banner.png",
    date: "Jul 15, 2025",
    readTime: "3 mins readtime",
    title:
      "Quantum welcomes you with all with warm greetings and lorem insup floral.",
    summary:
      "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user.",
    url: "/blog/3",
  },
];
