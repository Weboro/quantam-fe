import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '@/components/cards/NewsCard';
import { news } from '@/data/news';
import { getNews } from '@/utils/getNews';
import { notFound } from 'next/navigation';
import ContainerLayout from '@/components/layouts/ContainerLayout';
import { slugs } from '@/extra/slugs';

interface IBlogPage {
	params: Promise<{ slug: string }>;
}



const NewsPage: React.FC<IBlogPage> = async ({ params }) => {
	const { slug } = await params;

	const blog = await getNews(slug);

	

	if (!blog) notFound();

	return (
		<>
			<ContainerLayout>
				<div className='flex flex-wrap items-center gap-3 text-lg text-text mb-8'>
					<span className='flex items-center gap-1 text-base'>
						<i className='fi fi-rr-calendar' />
						{blog.date}
					</span>

					<span className='flex items-center gap-1 text-base'>
						<i className='fi fi-rr-user' />
						{blog.author || 'Admin'}
					</span>

					<span className='flex items-center gap-1 text-base'>
						<i className='fi fi-rr-time-quarter-to' />
						{blog.readTime}
					</span>
				</div>

				<div className='h-1 w-36 bg-brand-primary-yellow mb-8 mt-2' />

				<h1 className='mt-4 mb-3.5 text-5xl font-bold'>{blog.title}</h1>

				{blog.imageUrl && (
					<Image
						src={blog.imageUrl}
						alt={blog.title}
						width={1000}
						height={400}
						className='w-full max-h-96 object-cover rounded-lg mb-6'
						priority
					/>
				)}

				<p className=' text-muted'>{blog.summary}</p>

				<div
					className='rich_text text-muted mt-4'
					dangerouslySetInnerHTML={{ __html: blog.richText }}
				/>

				<div className='mt-8 flex items-center gap-2'>
					<span className='text-xl text-text font-medium'>Share To:</span>
					<Link
						href='#'
						aria-label='Email'
						className='text-text text-3xl hover:text-brand-primary transition-all'
					>
						<i className='flex fi fi-rr-envelope'></i>
					</Link>
					<Link
						href='#'
						aria-label='Facebook'
						className='text-text text-3xl hover:text-brand-primary transition-all'
					>
						<i className='flex fi fi-brands-facebook'></i>
					</Link>
					<Link
						href='#'
						aria-label='LinkedIn'
						className='text-text text-3xl hover:text-brand-primary transition-all'
					>
						<i className='flex fi fi-brands-linkedin'></i>
					</Link>
					<Link
						href='#'
						aria-label='WhatsApp'
						className='text-text text-3xl hover:text-brand-primary transition-all'
					>
						<i className='flex fi fi-brands-whatsapp'></i>
					</Link>
					<Link
						href='#'
						aria-label='Messenger'
						className='text-text text-3xl hover:text-brand-primary transition-all'
					>
						<i className='flex fi fi-brands-messenger' />
					</Link>
				</div>

				<div className='mt-16'>
					<h2 className='text-3xl font-bold mb-8'>More Blogs</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{news
							.filter((item) => item.slug !== blog.slug)
							.slice(0, 3)
							.map((news) => (
								<div key={news.slug} className='w-full h-full flex flex-col'>
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
