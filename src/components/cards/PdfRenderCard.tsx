"use client";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import { IPdfType } from "@/types/pdf-type";

export interface props {
  title: IPdfType["title"];
  icon: IPdfType["icon"];
  url: IPdfType["url"];
  description: IPdfType["description"];
}

const PDFrenderCard: React.FC<props> = ({ icon, title, url, description }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border border-gray-200 rounded-md p-4 lg:p-6 transition-all duration-300 mb-4 bg-white hover:bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
            <i className={`${icon} text-2xl text-gray-600`} />
          </div>
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
            {title}
          </h3>
        </div>
        <div className="mt-4 lg:mt-0 lg:flex-shrink-0">
          <Button className="w-fit lg:w-auto px-6 py-2 lg:py-3 bg-brand-primary text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>View Document</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PDFrenderCard;
