export interface INews {
  id: number;
  imageUrl: string;
  date: string;
  readTime: string;
  title: string;
  slug: string;
  summary: string;
  richText: string;
}

export const news: INews[] = [
  {
    id: 1,
    imageUrl: "/banner.jpg",
    date: "Jun 28, 2025",
    readTime: "4 mins readtime",
    title: "Grand Opening of QIHE’s New Campus in Parramatta",
    slug: "grand-opening-parramatta-campus",
    summary:
      "QIHE celebrated the grand opening of its state-of-the-art Parramatta campus, attended by faculty, students, and community leaders.",
    richText: `
      <p>We are thrilled to announce the official opening of our new campus in the heart of Parramatta. The modern facility features collaborative learning zones, digital labs, and vibrant student lounges.</p>
      <p>The ceremony was graced by local dignitaries and featured student performances, campus tours, and a keynote from our Chair, Prof. Jim Psaros.</p>
      <p><strong>“This campus represents our commitment to delivering quality education in an inclusive, forward-thinking environment,”</strong> said Prof. Psaros.</p>
    `,
  },
  {
    id: 2,
    imageUrl: "/banner.jpg",
    date: "Jul 5, 2025",
    readTime: "2 mins readtime",
    title: "Experts Discuss AI Trends at QIHE Panel Event",
    slug: "ai-panel-event-2025",
    summary:
      "Industry leaders joined our students for a panel on artificial intelligence, exploring ethical implications and future career paths.",
    richText: `
      <p>The <strong>“Future of AI in Education and Industry”</strong> panel featured speakers from leading tech companies and QIHE faculty. Topics included machine learning ethics, automation, and career readiness.</p>
      <p>Students had the opportunity to engage directly during a live Q&A session. The event was part of QIHE's Industry Engagement Series.</p>
    `,
  },
  {
    id: 3,
    imageUrl: "/banner.jpg",
    date: "Jul 15, 2025",
    readTime: "3 mins readtime",
    title: "Record-Breaking Enrolments for Semester 2, 2025",
    slug: "record-enrolment-2025",
    summary:
      "QIHE hits a new milestone with the highest-ever number of enrolments for Semester 2, driven by strong domestic and international interest.",
    richText: `
      <p>Quantum Institute of Higher Education has recorded its <strong>highest semester enrolment</strong> since establishment. More than 1,200 new students joined programs across Business and IT.</p>
      <p>CEO Dr. Alisha Morgan credits the growth to “targeted student support, international partnerships, and program innovation.”</p>
    `,
  },
];
