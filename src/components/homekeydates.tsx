import React from "react";
import ContainerLayout from "../components/layouts/ContainerLayout";

import KeyDates from "@/components/cards/KeyDates";

const HomeKeyDates: React.FC = () => (
  <ContainerLayout>
    <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="text-3xl font-bold font-primary text-brand-primary-black">
          Key Dates
        </h2>
        <a
          href="/all-key-dates"
          className="bg-brand-primary-yellow text-brand-primary-black font-semibold rounded-md hover:brightness-95 transition text-sm py-3 max-w-[110px] text-center inline-block"
        >
          All Key Dates
        </a>
      </div>
      <div className="flex-1">
        <p className="text-md text-semibold text-brand-primary-black text-left font-secondary ">
          A modal dialog that interrupts the user with important content and
          expects a response. A modal dialog that interrupts the user with
          important content and expects a response.
        </p>
      </div>
    </div>
    <KeyDates />
  </ContainerLayout>
);

export default HomeKeyDates;
