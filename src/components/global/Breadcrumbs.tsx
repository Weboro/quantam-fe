"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContainerLayout from "../layouts/ContainerLayout";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <ContainerLayout className="mt-4 flex flex-wrap items-center space-x-1 text-neutral-600 text-sm">
      <Link
        href="/"
        className="hover:underline hover:text-brand-primary transition-all"
      >
        Home
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");

        return (
          <div key={href} className="flex items-center gap-1">
            <i className="fi fi-rr-angle-small-right flex" />
            <Link
              href={href}
              className="capitalize hover:underline hover:text-brand-primary transition-all"
            >
              {segment.replace(/-/g, " ")}
            </Link>
          </div>
        );
      })}
    </ContainerLayout>
  );
};

export default Breadcrumbs;
