import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import { getNews } from "@/utils/getNews";
import { notFound } from "next/navigation";

interface IBlogPage {
  params: Promise<{ slug: string }>;
}

const BlogPage: React.FC<IBlogPage> = async ({ params }) => {
  const { slug } = await params;

  const blog = await getNews(slug);

  if (!blog) notFound();

  return (
    <>
      <Breadcrumbs />
      <ContainerLayout>
        <Heading level={2} className="mt-4 mb-3.5">
          {blog.title}
        </Heading>

        <div className="my-32 text-center">TBD</div>

        <p className="md:max-w-2xl text-muted">{blog.summary}</p>

        <div
          className="md:max-w-2xl text-muted mt-4"
          dangerouslySetInnerHTML={{ __html: blog.richText }}
        />
      </ContainerLayout>
    </>
  );
};

export default BlogPage;
