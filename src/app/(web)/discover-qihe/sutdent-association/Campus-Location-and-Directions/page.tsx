import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const GettingToCampusPage = () => {
  return (
    <ContainerLayout>
      <div className="py-12">
        <Heading level={1} className="text-3xl md:text-4xl font-bold mb-6">
          Getting to QIHE – Your Campus in the Heart of Parramatta
        </Heading>

        <p className="text-gray-700 mb-6">
          QIHE’s campus is located in the vibrant heart of Parramatta, one of
          Western Sydney’s busiest and most exciting areas. The campus is just a
          5-minute walk from Parramatta Train Station, making it easy for
          students to get here using public transport.
        </p>

        <div className="mb-8">
          <Heading level={2} className="text-2xl font-semibold mb-4">
            Getting to Campus
          </Heading>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>By Train:</strong> Arrive at Parramatta Station and enjoy
              a short, easy walk to campus.
            </li>
            <li>
              <strong>By Bus:</strong> Parramatta is a major bus hub, with
              multiple routes stopping close to campus for convenient access.
            </li>
            <li>
              <strong>By Car:</strong> Limited parking is available nearby;
              however, public transport is usually the quickest and most
              convenient option.
            </li>
            <li>
              <strong>Walking or Cycling:</strong> Parramatta is
              pedestrian-friendly, with safe walking paths and bike lanes for
              students who prefer to cycle.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <Heading level={2} className="text-2xl font-semibold mb-4">
            Contact & Address
          </Heading>
          <div className="text-gray-700 space-y-1">
            <p>
              <strong>Address:</strong> Level 4, 16-18 Wentworth Street,
              Parramatta NSW 2150
            </p>
            <p>
              <strong>Phone:</strong> (+61) 2 8359 5220
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:admin@qinstitute.com.au"
                className="italic underline text-brand-primary"
              >
                admin@qinstitute.com.au
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://qinstitute.com.au"
                className="italic underline text-brand-primary"
              >
                qinstitute.com.au
              </a>
            </p>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default GettingToCampusPage;
