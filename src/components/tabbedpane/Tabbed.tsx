"use client";

import ContainerLayout from "@/components/layouts/ContainerLayout";
import React, { useState } from "react";

interface TabbedProps {
  tabbedPaneData: {
    title: string;
    richText: string;
  }[];
}

const Tabbed: React.FC<TabbedProps> = ({ tabbedPaneData }) => {
  const tabItems = tabbedPaneData.map((item) => item.title);
  const [activeTab, setActiveTab] = useState<string>(tabItems[0]);

  return (
    <ContainerLayout>
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-center border-b border-gray-200 mb-6">
          {tabItems.map((item) => (
            <button
              key={item}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer  ${
                activeTab === item
                  ? "border-brand-primary text-brand-primary font-semibold"
                  : "border-transparent text-muted hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="rounded-lg p-4 bg-surface">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium text-brand-primary-black mb-4">
                {tabbedPaneData.find((item) => item.title === activeTab)?.title}
              </h2>
            </div>

            <div className="space-y-3">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    tabbedPaneData.find((item) => item.title === activeTab)
                      ?.richText || "",
                }}
                className="rich_text_container"
              />
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Tabbed;
