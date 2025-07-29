import courses from "@/data/courses";

export async function getCourse(slug: string) {
  const course = courses.find((item) => item.slug === slug);

  if (course) return course;

  return null;
}
