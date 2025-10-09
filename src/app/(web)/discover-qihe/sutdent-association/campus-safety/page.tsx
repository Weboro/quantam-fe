import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Heading from "@/components/ui/Heading";

const SafetyPage = () => {
  return (
    <ContainerLayout>
      <div className="py-12">
        <Heading level={1} className="text-3xl md:text-4xl font-bold mb-6">
          Safety at QIHE
        </Heading>
        <p className="text-gray-700 mb-6">
          Your safety and wellbeing are our top priority. QIHE maintains a safe
          and healthy campus through clear policies, regular training, and rapid
          response to risks or incidents. We provide health and safety
          information during orientation, display procedures across campus, and
          encourage early reporting so issues are managed quickly and
          confidentially. Our commitment includes compliance with national
          standards, critical incident support, and a culture where everyone
          shares responsibility for safety.
        </p>
        <p className="text-gray-700 mb-6">
          For full details, please refer to the{" "}
          <a
            href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Health+and+Safety+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
            className="text-blue-600 hover:underline"
          >
            Health and Safety Policy
          </a>
          .
        </p>

        <div className="mb-8">
          <Heading level={2} className="text-2xl font-semibold mb-4">
            Health, Safety and Critical Incidents
          </Heading>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              QIHE is committed to maintaining a safe and healthy environment
              for all students, staff, and visitors in line with the Work Health
              and Safety Act 2011 (NSW) and related regulations.
            </li>
            <li>
              The Institute has a Critical Incident Management Plan to respond
              quickly and effectively to emergencies such as serious accidents,
              natural disasters, medical emergencies, or security threats.
            </li>
            <li>
              In the event of a critical incident, QIHE prioritises student
              safety and will provide ongoing support, including access to
              counselling and wellbeing services.
            </li>
            <li>
              Students are encouraged to familiarise themselves with health and
              safety information provided during Orientation, on campus, and in
              this Handbook.
            </li>
          </ul>
          <p className="mt-2 text-gray-700">
            For further information, please refer to the{" "}
            <a
              href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Health+and+Safety+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
              className="text-blue-600 hover:underline"
            >
              Health and Safety Policy
            </a>
            and the
            <a
              href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Emergency+and+Critical+Incident+Management+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
              className="text-blue-600 hover:underline"
            >
              Emergency and Critical Incident Management Policy
            </a>
            .
          </p>
        </div>

        <div className="mb-8">
          <Heading level={2} className="text-2xl font-semibold mb-4">
            Relevant Services in NSW
          </Heading>

          <div className="mb-6">
            <Heading level={3} className="text-xl font-semibold mb-2">
              Emergency Contacts
            </Heading>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>QIHE Student Services Manager: TBA</li>
              <li>
                Police, Fire, Ambulance: Dial 000 (life-threatening emergencies)
              </li>
              <li>
                NSW State Emergency Service (SES): 132 500 (floods, storms,
                natural disasters)
              </li>
              <li>Poisons Information Centre: 13 11 26</li>
              <li>
                Health direct Australia: 1800 022 222 (24/7 health advice and
                medical assistance)
              </li>
              <li>
                National Security Hotline: 1800 123 400 (to report suspicious
                activity or threats)
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <Heading level={3} className="text-xl font-semibold mb-2">
              Local Parramatta Services
            </Heading>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Hospitals (24/7 Emergency Departments):
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>
                    Westmead Hospital – Hawkesbury Road, Westmead NSW 2145 |
                    Phone: (02) 8890 5555
                  </li>
                  <li>
                    Westmead Children’s Hospital – Hawkesbury Road, Westmead NSW
                    2145 | Phone: (02) 9845 0000
                  </li>
                </ul>
              </li>
              <li>
                Medical Centres (General Practice):
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>
                    Parramatta Medical Centre – 451 Church Street, Parramatta
                    NSW 2150 | Phone: (02) 9635 8282
                  </li>
                  <li>
                    Myhealth Medical Centre – Level 2, Westfield Parramatta NSW
                    2150 | Phone: (02) 7809 8800
                  </li>
                </ul>
              </li>
              <li>
                Police:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>
                    Parramatta Police Station – 12 Charles Street, Parramatta
                    NSW 2150 | Phone: (02) 9633 0799
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <Heading level={3} className="text-xl font-semibold mb-2">
              State and National Support Services
            </Heading>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Lifeline: 13 11 14 (24/7 crisis support and suicide prevention)
              </li>
              <li>
                NSW Mental Health Line: 1800 011 511 (24/7 mental health support
                and triage)
              </li>
              <li>
                Sexual Assault and Domestic Violence Helpline (1800RESPECT):
                1800 737 732 (24/7 confidential support)
              </li>
              <li>
                NSW Rape Crisis Centre: 1800 424 017 (support for sexual
                violence survivors)
              </li>
              <li>
                Red Cross Emergency Services: 1800 733 276 (disaster relief and
                recovery support)
              </li>
              <li>
                SafeWork NSW: 13 10 50 (workplace health and safety concerns)
              </li>
              <li>
                Translating and Interpreting Service (TIS National): 131 450
                (for non-English speakers requiring interpreter services)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default SafetyPage;
