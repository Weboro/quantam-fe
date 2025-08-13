import { notFound } from "next/navigation";
import pages from "@/data/pages";
import { slugs } from "@/extra/slugs";
import { getCourse } from "@/utils/getCourses";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import CourseDetailsSection from "@/components/sections/course/CourseDetailsSection";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import Tabbed from "@/components/tabbedpane/Tabbed";
import { SITE_URL } from "@/extra/siteDetails";

export async function generateStaticParams() {
  const programs = pages.find((el) => el.slug === slugs.programs);

  if (!programs || !programs.subPages) {
    return [];
  }

  return programs.subPages.map((subpage) => ({
    slug: subpage.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = await getCourse(slug);

  if (!course) {
    return {
      title: "Page not found",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.major} ${course.name}`,
    description: course.description?.slice(0, 150) || "Course details page.",
    alternates: {
      canonical: `${SITE_URL}/${slugs.programs}/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: course.name,
      description: course.description,
      url: `${SITE_URL}/${slugs.programs}/${slug}`,
      images: [
        {
          url: course.heroImage || "/default-course.jpg",
          width: 1200,
          height: 630,
          alt: course.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.name,
      description: course.description,
      images: [course.heroImage || "/default-course.jpg"],
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <ContainerLayout className="mt-4">
        <Heading level={1}>{course.name}</Heading>
      </ContainerLayout>

      <div className="space-y-32">
        <CourseDetailsSection
          name={course.name}
          description={course.description}
          richText={course.richText}
          heroImage={course.heroImage}
          duration={course?.duration}
          location={course?.location}
          degreeType={course?.degreeType}
          intakes={course?.intakes}
          deliveryMode={course?.deliveryMode}
          CRICOSCourseCode={course?.CRICOSCourseCode}
        />

        <Tabbed tabbedPaneData={course.tabbedPaneData || []} />
      </div>
    </>
  );
}
