import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";
import { getNews } from "@/utils/getNews";
import { notFound } from "next/navigation";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { slugs } from "@/extra/slugs";
import { SITE_URL } from "@/extra/siteDetails";
import Heading from "@/components/ui/Heading";
import { newsShareLinks } from "@/data/newsShareLinks";

interface IBlogPage {
  params: Promise<{ slug: string }>;
}

const NewsPage: React.FC<IBlogPage> = async ({ params }) => {
  const { slug } = await params;

  const blog = await getNews(slug);

  if (!blog) notFound();

  const currentUrl = `${SITE_URL}/${slugs.news}/${blog.slug}`;

  function getReadTime(text: string): string {
    if (!text) return "1 min read";

    const plainText = text.replace(/<[^>]+>/g, "");
    const wordCount = plainText.trim().split(/\s+/).length;

    const wordsPerMinute = 100;
    const minutes = Math.ceil(wordCount / wordsPerMinute);

    return `${minutes} min${minutes > 1 && "s"} read`;
  }

  return (
    <>
      <ContainerLayout>
        <div className="flex flex-wrap items-center gap-3 text-base text-muted mb-4">
          <span className="flex items-center gap-1">
            <i className="flex fi fi-rr-calendar" />
            {blog.date}
          </span>

          <span className="flex items-center gap-1">
            <i className="flex fi fi-rr-user" />
            {blog.author || "Admin"}
          </span>

          <span className="flex items-center gap-1">
            <i className="flex fi fi-rr-time-quarter-to" />
            {getReadTime(blog.richText)}
          </span>
        </div>

        <div className="h-1 w-36 bg-brand-primary-yellow mb-8" />

        <Heading>{blog.title}</Heading>
      </ContainerLayout>

      <ContainerLayout size="sm">
        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={900}
            height={400}
            className="w-full max-h-[28rem] object-cover rounded-lg my-8"
            priority
          />
        )}
      </ContainerLayout>

      <ContainerLayout>
        <p className=" text-muted">{blog.summary}</p>

        <div
          className="rich_text text-muted mt-4"
          dangerouslySetInnerHTML={{ __html: blog.richText }}
        />

        <div className="h-1 w-36 bg-brand-primary-yellow mt-12" />

        <div className="mt-4 flex items-center text-xl gap-2">
          <span className="text-text font-medium">Share To:</span>

          {newsShareLinks.map((social) => (
            <Link
              key={social.name}
              href={social.getUrl(currentUrl)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-text hover:text-brand-primary transition-all"
            >
              <i className={`flex ${social.icon}`} />
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <Heading className="mb-4" level={2}>
            More Blogs
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news
              .filter((item) => item.slug !== blog.slug)
              .slice(0, 3)
              .map((news) => (
                <div key={news.slug} className="w-full h-full flex flex-col">
                  <NewsCard {...news} url={`/${slugs.news}/${news.slug}`} />
                </div>
              ))}
          </div>
        </div>
      </ContainerLayout>
    </>
  );
};

export default NewsPage;
