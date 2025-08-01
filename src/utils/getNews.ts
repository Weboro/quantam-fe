import { news } from "@/data/news";

export async function getNews(slug: string) {
  const item = news.find((el) => el.slug === slug);

  if (item) return item;

  return null;
}
