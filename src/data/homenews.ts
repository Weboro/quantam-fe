export interface HomeNewsItem {
  id: number;

  summary: string;
  url: string;
}

export const homeNews: HomeNewsItem[] = [
  {
    id: 1,

    summary:
      "A modal dialog that interrupts the user with important content and expects a response. A modal dialog that interrupts the user with important content and expects a response.",
    url: "/blog/1",
  },
];
