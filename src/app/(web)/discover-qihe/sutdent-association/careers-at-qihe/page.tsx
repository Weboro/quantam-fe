import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const CareersPage = () => {
  return (
    <ContainerLayout>
      <div className="py-12">
        <Heading level={1} className="text-3xl md:text-4xl font-bold mb-6">
          Careers at QIHE
        </Heading>

        <p className="text-gray-700 mb-6">
          Join QIHE and be part of a dynamic, student-focused higher education community. We offer opportunities to grow professionally, contribute to innovative learning, and support student success in a collaborative and inclusive environment.
        </p>

        <p className="text-gray-700">
          Explore current opportunities and apply to become a valued member of the QIHE team. We welcome talented individuals who are passionate about education and student support.
        </p>
      </div>
    </ContainerLayout>
  );
};

export default CareersPage;
