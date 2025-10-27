import CampusMap from "@/components/map/CampusMap";
import { campusData } from "@/data/campus";

import {
  MapPin,
  Shield,
  AlertTriangle,
  Building,
  Heart,
  Train,
  Bus,
  Car,
  Footprints,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export default function CampusPage() {
  const {
    location,
    safety,
    emergencyContacts,
    localServices,
    supportServices,
  } = campusData;

  const accent = "#78256f";

  const getTransportIcon = (icon: string) => {
    switch (icon) {
      case "train":
        return <Train className="h-4 w-4" aria-hidden />;
      case "bus":
        return <Bus className="h-4 w-4" aria-hidden />;
      case "car":
        return <Car className="h-4 w-4" aria-hidden />;
      case "walk":
        return <Footprints className="h-4 w-4" aria-hidden />;
      default:
        return <MapPin className="h-4 w-4" aria-hidden />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Page Title */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold" style={{ color: accent }}>
            Campus Information
          </h1>
          <p className="text-sm text-gray-600 mt-1">QIHE Campus - Parramatta NSW</p>
          <hr className="mt-4 border-t" style={{ borderColor: `${accent}1A` }} />
        </header>

        {/* Location & Directions */}
        <section className="mb-10 text-justify">
          <h2 className="text-xl font-semibold" style={{ color: accent }}>
            {location.title}
          </h2>
          <p className="text-gray-800 mt-3">
            Getting to QIHE – Your Campus in the Heart of Parramatta
          </p>
          <p className="text-gray-700 mt-2">{location.description}</p>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Transport Options */}
            <div>
              <h3 className="text-base font-semibold" style={{ color: accent }}>
                Transport Options
              </h3>
              <ul className="mt-3 space-y-3">
                {location.transport.map((method, idx) => (
                  <li key={idx} className="text-gray-800 text-justify">
                    <div className="flex items-start gap-2">
                      <span className="mt-1">{getTransportIcon(method.icon)}</span>
                      <div>
                        <div className="font-medium">{method.title}</div>
                        <div className="text-gray-700">{method.description}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info & Map */}
            <div>
              <h3 className="text-base font-semibold" style={{ color: accent }}>
                Contact Information
              </h3>
              <ul className="mt-3 space-y-2 text-gray-800">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1" style={{ color: accent }} aria-hidden />
                  <span>{location.address}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-1 text-gray-700" aria-hidden />
                  <span>{location.phone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-1 text-gray-700" aria-hidden />
                  <span>{location.email}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="h-4 w-4 mt-1 text-gray-700" aria-hidden />
                  <span>{location.website}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <CampusMap />
          </div>
        </section>

        <hr className="my-8 border-t" style={{ borderColor: `${accent}1A` }} />

        {/* Safety */}
        <section className="mb-10 text-justify">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" style={{ color: accent }} aria-hidden />
            <h2 className="text-xl font-semibold" style={{ color: accent }}>
              Safety at QIHE
            </h2>
          </div>

          <p className="text-gray-700 mt-3">
            Your safety and wellbeing are our top priority. QIHE maintains a
            safe and healthy campus through clear policies, regular training,
            and rapid response to risks or incidents. We provide clear health
            and safety information during orientation, display procedures
            across campus, and encourage early reporting so issues are managed
            quickly and confidentially. Our commitment includes compliance
            with national standards, critical incident support, and a culture
            where everyone shares responsibility for safety.
          </p>

          <p className="text-gray-700 mt-3">
            For full details, please refer to the{" "}
            <a
              target="main"
              href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Health+and+Safety+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
              className="underline italic"
              style={{ color: accent }}
            >
              Health and Safety Policy
            </a>
            .
          </p>

          <div className="mt-4">
            <h3 className="text-base font-semibold" style={{ color: accent }}>
              Health, Safety and Critical Incidents
            </h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1 text-justify">
              <li>
                QIHE is committed to maintaining a safe and healthy
                environment for all students, staff, and visitors in line with
                the{" "}
                <a
                  href="https://legislation.nsw.gov.au/view/html/inforce/current/act-2011-010"
                  className="underline"
                >
                  Work Health and Safety Act 2011 (NSW)
                </a>{" "}
                and related regulations.
              </li>
              <li>
                The Institute has a Critical Incident Management Plan to
                respond quickly and effectively to emergencies such as serious
                accidents, natural disasters, medical emergencies, or security
                threats.
              </li>
              <li>
                In the event of a critical incident, QIHE prioritises student
                safety and will provide ongoing support, including access to
                counselling and wellbeing services.
              </li>
              <li>
                Students are encouraged to familiarise themselves with health
                and safety information provided during Orientation, on campus,
                and in this Handbook.
              </li>
            </ul>
          </div>

          <p className="text-gray-700 mt-3">
            For further information, please refer to the{" "}
            <a
              target="main"
              href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Health+and+Safety+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
              className="underline italic"
              style={{ color: accent }}
            >
              Health and Safety Policy
            </a>{" "}
            and the{" "}
            <a
              target="main"
              href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Emergency+and+Critical+Incident+Management+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
              className="underline italic"
              style={{ color: accent }}
            >
              Emergency and Critical Incident Management Policy
            </a>
            .
          </p>

          {/* Evacuation Plan Section */}
          <div className="mt-6">
            <h3 className="text-base font-semibold mb-2" style={{ color: accent }}>
              Evacuation Plan
            </h3>
            <div className="flex flex-col items-center gap-3">
              <img
                src={"/image/evacuationplan.jpg"}
                alt="QIHE Evacuation Plan"
                className="w-full sm:w-3/4 border rounded-md"
                style={{ borderColor: `${accent}1A` }}
              />
              <a
                href="/image/evacuationplan.pdf"
                download
                className="italic underline text-sm text-center"
                style={{ color: accent }}
              >
                Download Evacuation Plan (PDF)
              </a>
            </div>
          </div>
        </section>
        <hr className="my-8 border-t" style={{ borderColor: `${accent}1A` }} />

        {/* Emergency Contacts & Local Services */}
        <section className="mb-10 grid gap-8 lg:grid-cols-2 text-justify">
          {/* Emergency Contacts */}
          <div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-700" aria-hidden />
              <h2 className="text-xl font-semibold" style={{ color: accent }}>
                {emergencyContacts.title}
              </h2>
            </div>

            <ul className="mt-3 space-y-3">
              {emergencyContacts.contacts.map((c, i) => (
                <li key={i} className="text-gray-800">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">{c.name}</div>
                      {c.description && (
                        <div className="text-gray-700 text-sm">{c.description}</div>
                      )}
                    </div>
                    <div
                      className="font-semibold"
                      style={{ color: c.emergency ? "#b91c1c" : accent }}
                    >
                      {c.number}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Services */}
          <div>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5" style={{ color: accent }} aria-hidden />
              <h2 className="text-xl font-semibold" style={{ color: accent }}>
                {localServices.title}
              </h2>
            </div>

            <div className="mt-3 space-y-6">
              {localServices.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-base font-semibold" style={{ color: accent }}>
                    {section.title}
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {section.services.map((s, j) => (
                      <li key={j} className="text-gray-800 text-justify">
                        <div className="font-medium">{s.name}</div>
                        <div className="text-sm text-gray-700">{s.address}</div>
                        <div className="text-sm mt-0.5" style={{ color: accent }}>
                          {s.phone}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="my-8 border-t" style={{ borderColor: `${accent}1A` }} />

        {/* Support Services */}
        <section className="mb-4 text-justify">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" style={{ color: accent }} aria-hidden />
            <h2 className="text-xl font-semibold" style={{ color: accent }}>
              {supportServices.title}
            </h2>
          </div>

          <ul className="mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {supportServices.services.map((service, idx) => (
              <li key={idx} className="text-gray-800 text-justify">
                <div className="font-medium">{service.name}</div>
                <div className="text-base font-semibold" style={{ color: accent }}>
                  {service.number}
                </div>
                <div className="text-sm text-gray-700">{service.description}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
