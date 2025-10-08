"use client";
import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

export default function QiheCard() {
  const documents = [
    {
      title: "QIHE Prospectus",
      image: "/image/img1.webp",
      description:
        "An essential guide covering all programs, courses, and admission procedures at QIHE. Perfect for prospective students seeking a complete overview. Includes important academic policies and resources.",
      url: "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AF-HwH0fnWWbpNminvyKYTI/Student%20Information%20Materials?dl=0&preview=QIHE+Prospectus.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1",
    },
    {
      title: "QIHE Student Handbook",
      image: "/image/img2.webp",
      description:
        "A practical guide for current students, detailing campus rules, student services, and academic support. Helps navigate daily life at QIHE effectively. Includes tips and contact info for key departments.",
      url: "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AF-HwH0fnWWbpNminvyKYTI/Student%20Information%20Materials?dl=0&preview=QIHE+Student+Handbook.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1",
    },
    {
      title: "Student Orientation PPT",
      image: "/image/img3.webp",
      description:
        "A visual presentation designed to introduce new students to QIHE’s campus, resources, and programs. Highlights essential information for a smooth start. Engaging slides make orientation easy to follow.",
      url: "https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AF-HwH0fnWWbpNminvyKYTI/Student%20Information%20Materials?dl=0&preview=Student+Orientation+PPT.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1",
    },
  ];

  return (
    <div className="w-full">
      <ContainerLayout className="py-8 max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl    transition-all duration-300 p-6 border border-gray-100 h-[500px] flex flex-col"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md mb-4">
                <Image
                  src={doc.image}
                  alt={doc.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {doc.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="mt-4">
                  <Button className="mt-6">
                    <Link
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full"
                    >
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
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </div>
  );
}
