import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";
import { getNews } from "@/utils/getNews";
import { notFound } from "next/navigation";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { slugs } from "@/extra/slugs";

interface IBlogPage {
  params: Promise<{ slug: string }>;
}

type Step = {
  title: string;
  description: string;
  points: string[];
  tip?: string;
  pointsTitle?: string;
};

const NewsPage: React.FC<IBlogPage> = async ({ params }) => {
  const { slug } = await params;

  const blog = await getNews(slug);

  const steps: Step[] | undefined = blog ? blog.steps : undefined;

  if (!blog) notFound();

  return (
    <>
      <ContainerLayout>
        <div className="flex flex-wrap items-center gap-3 text-lg text-text mb-8">
          <span className="flex items-center gap-1">
            <i className="fi fi-rr-calendar text-xl" />
            {blog.date}
          </span>

          <span className="flex items-center gap-1">
            <i className="fi fi-rr-user text-xl" />
            {blog.author || "Admin"}
          </span>

          <span className="flex items-center gap-1">
            <i className="fi fi-rr-time-quarter-to text-xl" />
            {blog.readTime}
          </span>
        </div>

<<<<<<< HEAD
        <div className="h-1 w-36 bg-brand-primary-yellow mb-8 mt-2" />
=======
					<span className='flex items-center gap-1'>
						<i className='fi fi-rr-time-quarter-to text-xl' />
						{blog.readTime}
					</span>
				</div>
				<h2 className='mt-4 mb-3.5 text-5xl font-bold'>{blog.title}</h2>
>>>>>>> dafd5a394359ef3f99213a912e2b223ca5cbff4a

        <h1 className="mt-4 mb-3.5 text-5xl font-bold">{blog.title}</h1>

        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={1000}
            height={400}
            className="w-full max-h-96 object-cover rounded-lg mb-6"
            priority
          />
        )}

        <p className=" text-muted">{blog.summary}</p>

        <div
          className="text-muted mt-4"
          dangerouslySetInnerHTML={{ __html: blog.richText }}
        />

<<<<<<< HEAD
        {steps && steps.length > 0 && (
          <div className="mt-12">
            {steps.map((step, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="mb-4">{step.description}</p>
                <h4 className="text-lg font-semibold mb-2">
                  {step.pointsTitle || "Key Points"}
                </h4>
                <ul className="my-4 list-none">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start my-2">
                      <span className="text-brand-primary-yellow mr-2 mt-0.5">
                        &#9654;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {step.tip && (
                  <p className="font-semibold">
                    <span className="text-text">Tip:</span> {step.tip}
                  </p>
                )}
              </div>
            ))}
            <hr className="border-t border-surface-2 my-8 py-2" />
          </div>
        )}
=======
				<div className='mt-8 flex items-center gap-4'>
					<span className='text-xl text-text font-medium'>Share To:</span>
					<Link
						href='#'
						aria-label='Email'
						className='text-text text-3xl hover:opacity-70'
					>
						<i className='fi fi-rr-envelope'></i>
					</Link>
					<Link
						href='#'
						aria-label='Facebook'
						className='text-text text-3xl hover:opacity-70'
					>
						<i className='fi fi-brands-facebook'></i>
					</Link>

					<Link
						href='#'
						aria-label='LinkedIn'
						className='text-text text-3xl hover:opacity-70 ml-[-1]'
					>
						<i className='fi fi-brands-linkedin'></i>
					</Link>
					<Link
						href='#'
						aria-label='WhatsApp'
						className='text-text text-3xl hover:opacity-70'
					>
						<i className='fi fi-brands-whatsapp'></i>
					</Link>
					<Link
						href='#'
						aria-label='Messenger'
						className='text-text text-3xl hover:opacity-70'
					>
						<i className='fi fi-brands-messenger' />
					</Link>
				</div>
>>>>>>> dafd5a394359ef3f99213a912e2b223ca5cbff4a

        <div className="mt-8 flex items-center gap-2">
          <span className="text-xl text-text font-medium">Share To:</span>
          <Link
            href="#"
            aria-label="Email"
            className="text-text text-3xl hover:text-brand-primary transition-all"
          >
            <i className="flex fi fi-rr-envelope"></i>
          </Link>
          <Link
            href="#"
            aria-label="Facebook"
            className="text-text text-3xl hover:text-brand-primary transition-all"
          >
            <i className="flex fi fi-brands-facebook"></i>
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="text-text text-3xl hover:text-brand-primary transition-all"
          >
            <i className="flex fi fi-brands-linkedin"></i>
          </Link>
          <Link
            href="#"
            aria-label="WhatsApp"
            className="text-text text-3xl hover:text-brand-primary transition-all"
          >
            <i className="flex fi fi-brands-whatsapp"></i>
          </Link>
          <Link
            href="#"
            aria-label="Messenger"
            className="text-text text-3xl hover:text-brand-primary transition-all"
          >
            <i className="flex fi fi-brands-messenger" />
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">More Blogs</h2>
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
