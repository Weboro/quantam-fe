"use client";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const CareersAtQihePage = () => {
  return (
    <ContainerLayout>
      <div className="py-12">
        <Heading level={1} className="text-3xl md:text-4xl font-bold mb-6">
          Careers at QIHE
        </Heading>

        <p className="text-gray-700 mb-4">
          Join QIHE and be part of a dynamic, student-focused higher education
          community. We offer opportunities to grow professionally, contribute
          to innovative learning, and support student success in a collaborative
          and inclusive environment.
        </p>

        <p className="text-gray-700">
          For open positions and application information, please visit our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Careers Portal
          </a>
          .
        </p>
      </div>
    </ContainerLayout>
  );
};

export default CareersAtQihePage;
