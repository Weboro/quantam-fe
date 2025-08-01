import courses from "@/data/courses";

export async function getCourse(slug: string) {
  const item = courses.find((el) => el.slug === slug);

  if (item) return item;

  return null;
}
