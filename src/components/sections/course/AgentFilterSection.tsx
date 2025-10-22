"use client";
import AgentCard from "@/components/cards/AgentCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { agents } from "@/data/agents";
import useSearchAgent from "@/hooks/useSearchAgent";
import React from "react";
import FadeUp from "@/components/animations/FadeUp";

const AgentFilterSection = () => {
  const { results, searchQuery, handleInputChange, handleSearch } =
    useSearchAgent(agents);

  return (
    <>
      <ContainerLayout>
        <section className="grid lg:grid-cols-2 gap-4 mb-8">
          <div className="">
            <Heading level={1}>Find Agent</Heading>
            <p className="text-muted">
              Looking for the perfect program? Explore our wide range of
              undergraduate programs designed to help you achieve your academic
              and career goals.
            </p>
          </div>

          <div className="flex items-end">
            <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2 min-w-0">
              <input
                type="text"
                className="flex-1 min-w-0 border-2 border-surface-2 rounded-lg bg-surface-1 px-2 py-1.5"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />

              <div className="flex gap-2">
                <Button
                  icon="fi fi-br-search"
                  className="w-fit"
                  onClick={handleSearch}
                >
                  Search
                </Button>

                <Button icon="fi fi-br-filter" className="py-[11px]" />
              </div>
            </div>
          </div>
        </section>

        {results.length > 0 ? (
          <section className="grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.map((agent, index) => (
              <FadeUp key={agent.email} delay={index * 0.05}>
                <AgentCard
                  companyImage={agent.companyImage}
                  companyName={agent.companyName}
                  agentName={agent.agentName}
                  phone={agent.phone}
                  email={agent.email}
                  url={agent.url}
                />
              </FadeUp>
            ))}
          </section>
        ) : (
          <div className="flex items-center flex-col py-20 my-8 rounded-2xl bg-brand-primary/5">
            <p className="w-20 aspect-square bg-brand-primary/25 rounded-full grid place-items-center mb-4">
              <i className="fi fi-rr-lightbulb-exclamation text-brand-primary flex text-5xl" />
            </p>

            <Heading level={4} className="font-medium text-center">
              No Results matching your query!
            </Heading>
          </div>
        )}
      </ContainerLayout>
    </>
  );
};

export default AgentFilterSection;
