import Link from "next/link";

const FooterLinksSection: React.FC<{
  title: string;
  baseSlug?: string;
  pages?: { name: string; slug: string; link?: string }[];
}> = ({ title, baseSlug = "", pages = [] }) => {
  if (!pages.length) return null;

  return (
    <div className="mb-8 lg:mb-0">
      <h4 className="text-xl md:text-3xl font-semibold font-primary mb-1.5">
        {title}
      </h4>

      <nav className="space-y-1">
        {pages.map((page) => {
          const href =
            page.link ??
            `/${[baseSlug, page.slug].filter(Boolean).join("/")}`.replace(
              "//",
              "/"
            );
          const isExternal = /^https?:\/\//i.test(page.link ?? "");

          return (
            <Link
              key={page.slug}
              className="block py-0.5 pl-1 hover:text-brand-primary transition-all hover:underline"
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              {page.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default FooterLinksSection;
