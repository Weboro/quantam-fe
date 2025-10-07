"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../ui/Button";

export interface IDocument {
  id: string;
  name: string;
  fileFormate?: string;
  description: string;
  icon?: string;
  formUrl?: string;
  Url?: string;
}

interface FormCardListProps {
  form?: IDocument;
  policy?: IDocument;
  document?: IDocument;
}

const PDFrenderCard: React.FC<FormCardListProps> = ({
  form,
  policy,
  document,
}) => {
  const doc = document || form || policy;
  if (!doc) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };
  const displayDescription = isExpanded
    ? doc.description
    : truncateDescription(doc.description, 120);
  const pdfUrl = doc.formUrl || doc.Url;
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border border-gray-200 rounded-2xl p-4 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-4 bg-white hover:bg-gray-50">
      <div className="flex-1 lg:pr-6">
        <div className="flex items-start gap-3 mb-3">
          {doc.icon ? (
            <div className="flex-shrink-0">
              <img
                src={doc.icon}
                alt={doc.name}
                className="w-8 h-8 lg:w-10 lg:h-10"
              />
            </div>
          ) : (
            <div className="flex-shrink-0">
              <Image
                src="/pdf-svgrepo-com.svg"
                alt="File Icon"
                width={40}
                height={40}
                className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-lg lg:text-xl text-brand-primary-black line-clamp-2">
              {doc.name}
            </h2>

            {doc.fileFormate && (
              <span className="hidden lg:inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                {doc.fileFormate}
              </span>
            )}
          </div>
        </div>
        <div className="ml-0 lg:ml-11">
          <div
            className="text-sm lg:text-base text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: displayDescription,
            }}
          />
          {doc.description.length > 120 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
          {doc.fileFormate && (
            <span className="lg:hidden inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
              {doc.fileFormate}
            </span>
          )}
        </div>
      </div>
      <div className="mt-4 lg:mt-0 lg:flex-shrink-0">
        {pdfUrl && (
          <Button className="w-full lg:w-auto px-6 py-2 lg:py-3   text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
            <Link
              href={pdfUrl}
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
        )}
      </div>
    </div>
  );
};

export default PDFrenderCard;
