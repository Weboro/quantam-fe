import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { getNews } from "@/utils/getNews";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

interface INewsPage {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: INewsPage): Promise<Metadata> {
  const { slug } = await params;

  const news = await getNews(slug);

  if (!news) {
    return {
      title: "News Article Not Found",
      description: "The news article you are looking for does not exist.",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: `${news.title}`,
    description:
      news.summary ||
      "Read the latest news and updates from Quantum Institute.",
    alternates: {
      canonical: `${SITE_URL}/${slugs.news}/${news.slug}`,
    },
    openGraph: {
      title: news.title,
      description: news.summary,
      url: `${SITE_URL}/${slugs.news}/${news.slug}`,
      siteName: "Quantum Institute of Higher Education",
      images: [
        {
          url: news.imageUrl || "/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
      type: "article",
      publishedTime: news.date,
    },
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.summary,
      images: [news.imageUrl || "/default-og-image.jpg"],
    },
  };
}

const NewsPage: React.FC<INewsPage> = async ({ params }) => {
  const { slug } = await params;

  const news = await getNews(slug);

  if (!news) notFound();

  return (
    <ContainerLayout>
      <Heading level={2} className="mt-4 mb-3.5">
        {news.title}
      </Heading>

      <div className="my-32 text-center">TBD</div>

      <p className="md:max-w-2xl text-muted">{news.summary}</p>

      <div
        className="md:max-w-2xl text-muted mt-4"
        dangerouslySetInnerHTML={{ __html: news.richText }}
      />
    </ContainerLayout>
  );
};

export default NewsPage;
