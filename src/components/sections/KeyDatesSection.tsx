import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import keyDates from "@/data/keyDates";
import KeyDateCard from "@/components/cards/KeyDateCard";
import Button from "../ui/Button";
import Link from "next/link";

interface IKeyDatesSection {
  showAll?: boolean;
}

const KeyDatesSection: React.FC<IKeyDatesSection> = ({ showAll = false }) => (
  <ContainerLayout>
    <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="text-3xl font-bold font-primary text-brand-primary-black">
          Key Dates
        </h2>
        {!showAll && (
          <Link href="/all-key-dates">
            <Button variant="secondary">All Key Dates </Button>
          </Link>
        )}
      </div>

      <div className="flex-1">
        <p className="text-md text-semibold text-brand-primary-black text-left font-secondary ">
          A modal dialog that interrupts the user with important content and
          expects a response. A modal dialog that interrupts the user with
          important content and expects a response.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8">
      {keyDates
        .slice(0, showAll ? keyDates.length : 3)
        .map((item, index: number) => (
          <KeyDateCard key={index} {...item} />
        ))}
    </div>
  </ContainerLayout>
);

export default KeyDatesSection;
