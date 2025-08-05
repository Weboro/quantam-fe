import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import keyDates from "@/data/keyDates";
import KeyDateCard from "@/components/cards/KeyDateCard";
import Button from "../ui/Button";
import Link from "next/link";
import Heading from "../ui/Heading";
import { slugs } from "@/extra/slugs";

interface IKeyDatesSection {
  showAll?: boolean;
}

const KeyDatesSection: React.FC<IKeyDatesSection> = ({ showAll = false }) => (
  <ContainerLayout>
    <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
      <div className="flex flex-col gap-4 flex-1">
        <Heading level={3}>Key Dates</Heading>

        {!showAll && (
          <Link href={`/${slugs.qiheStudents}/${slugs.keyDates}`}>
            <Button variant="secondary">All Key Dates </Button>
          </Link>
        )}
      </div>

      <div className="flex-1">
        <p className="text-md text-semibold text-muted text-left font-secondary ">
          Stay ahead of your academic schedule. Keep track of important dates
          including semester starts, census deadlines, exam periods, and more.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      {keyDates
        .slice(0, showAll ? keyDates.length : 4)
        .map((item, index: number) => (
          <KeyDateCard key={index} {...item} />
        ))}
    </div>
  </ContainerLayout>
);

export default KeyDatesSection;
