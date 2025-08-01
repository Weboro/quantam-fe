import AgentCard from "@/components/cards/AgentCard";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import AgentFilterSection from "@/components/sections/course/AgentFilterSection";
import Heading from "@/components/ui/Heading";
import { agents } from "@/data/agents";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumbs />

      <AgentFilterSection />
    </>
  );
};

export default page;
