import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-2">
        <Heading level={1}>Contact QIHE</Heading>
      </ContainerLayout>
    </>
  );
};

export default ContactPage;
