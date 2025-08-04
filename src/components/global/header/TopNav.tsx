import ContainerLayout from "@/components/layouts/ContainerLayout";
import { socialLinks, topLinks } from "@/data/topNavLinks";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <div className="bg-brand-primary">
      <ContainerLayout className="py-2 flex items-center gap-2 justify-between">
        <nav className="flex items-center gap-3 text-base">
          {socialLinks.map((link, i) => (
            <Link
              href={`${link.url}`}
              target="_blank"
              className="text-neutral-300 hover:text-brand-primary-yellow transition-all flex items-center gap-1"
              key={i}
            >
              <i className={`${link.icon} flex`} />
              <span className="text-xs capitalize md:hidden">{link.name}</span>
            </Link>
          ))}
        </nav>

        <nav className="text-xs hidden md:flex items-center gap-2">
          {topLinks.map((link, i) => (
            <Link
              href={`${link.url}`}
              target={link.redirect === false ? "" : "_blank"}
              className="text-neutral-300 hover:text-background hover:underline transition-all"
              key={i}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </ContainerLayout>
    </div>
  );
};

export default TopNav;
