"use client";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { socialLinks, topLinks } from "@/data/topNavLinks";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();

  const logout = () => {
    document.cookie = "isAuthed=; path=/";
    router.push("/login");
  };

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

          <p
            className="text-neutral-300 hover:text-background hover:underline cursor-pointer transition-all"
            onClick={logout}
          >
            Logout
          </p>
        </nav>
      </ContainerLayout>
    </div>
  );
};

export default TopNav;
