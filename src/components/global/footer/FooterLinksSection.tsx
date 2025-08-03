import Link from "next/link";

const FooterLinksSection: React.FC<{
  title: string;
  baseSlug?: string;
  pages?: { name: string; slug: string }[];
}> = ({ title, baseSlug = "", pages = [] }) => {
  if (!pages.length) return null;

  return (
    <div className="mb-8 lg:mb-0">
      <h4 className="text-xl md:text-3xl font-semibold font-primary">
        {title}
      </h4>

      <nav className="space-y-1">
        {pages.map((page) => (
          <Link
            key={page.slug}
            className="block py-0.5 pl-1 hover:text-brand-primary transition-all hover:underline"
            href={`/${baseSlug}/${page.slug}`.replace("//", "/")}
          >
            {page.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FooterLinksSection;
