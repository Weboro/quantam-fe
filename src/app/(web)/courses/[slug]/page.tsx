import { majors } from "@/data/pages";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const major = majors.find((el) => el.slug === slug);

  console.log(major);

  if (!major) notFound();

  return <div>{slug}</div>;
};

export default page;
