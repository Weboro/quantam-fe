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

  const getTransportIcon = (icon: string) => {
    switch (icon) {
      case "train":
        return <Train className="h-5 w-5" />;
      case "bus":
        return <Bus className="h-5 w-5" />;
      case "car":
        return <Car className="h-5 w-5" />;
      case "walk":
        return <Footprints className="h-5 w-5" />;
      default:
        return <MapPin className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 px-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3">
            Campus Information
          </h1>
          <p className="text-xl text-gray-600">QIHE Campus - Parramatta NSW</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200  mb-8">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl    text-gray-900">{location.title}</h2>
            </div>
          </div>
          <div className="p-8 space-y-8">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Getting to QIHE – Your Campus in the Heart of Parramatta
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {location.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Transport Methods */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Transport Options
                </h4>
                <div className="grid gap-4">
                  {location.transport.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors"
                    >
                      <div className="p-3 bg-white rounded-lg shadow-sm border">
                        {getTransportIcon(method.icon)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">
                          {method.title}
                        </h4>
                        <p className="text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Contact Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <p className="text-gray-700">{location.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <p className="text-gray-700">{location.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <p className="text-gray-700">{location.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <p className="text-gray-700">{location.website}</p>
                    </div>
                  </div>
                </div>
                <CampusMap />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200   mb-8">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl  font-semibold text-gray-900">
                Safety at QIHE
              </h2>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
              Your safety and wellbeing are our top priority. QIHE maintains a
              safe and healthy campus through clear policies, regular training,
              and rapid response to risks or incidents. We provide clear health
              and safety information during orientation, display procedures
              across campus, and encourage early reporting so issues are managed
              quickly and confidentially. Our commitment includes compliance
              with national standards, critical incident support, and a culture
              where everyone shares responsibility for safety.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
              For full details, please refer to the{" "}
              <a
                target="main"
                href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Health+and+Safety+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
                className="text-blue-600 hover:underline italic"
              >
                Health and Safety Policy
              </a>
              .
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <h4 className="font-semibold text-blue-900 text-xl mb-4">
                Health, Safety and Critical Incidents
              </h4>
              <ul className="list-disc list-inside   space-y-2">
                <li>
                  QIHE is committed to maintaining a safe and healthy
                  environment for all students, staff, and visitors in line with
                  the Work Health and Safety Act 2011 (NSW) and related
                  regulations.
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

            <p className="mt-4 text-gray-700 text-center max-w-4xl mx-auto">
              For further information, please refer to the{" "}
              <a
                target="main"
                href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Health+and+Safety+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
                className="text-blue-600 hover:underline italic"
              >
                Health and Safety Policy
              </a>{" "}
              and the{" "}
              <a
                target="main"
                href="https://www.dropbox.com/scl/fo/ixrq58oyj2yo3ja5g8f9n/AJ-mqWkT5w00G5w_-L9PFRw/Policies%20and%20Procedures?e=1&preview=Emergency+and+Critical+Incident+Management+Policy.pdf&rlkey=bt8lvdav3k7x6my0f6khqgfsg&subfolder_nav_tracking=1&dl=0"
                className="text-blue-600 hover:underline italic"
              >
                Emergency and Critical Incident Management Policy
              </a>
              .
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl border border-gray-200   ">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-red-50 to-white">
              <div className="flex items-center gap-3 text-red-700">
                <AlertTriangle className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">
                  {emergencyContacts.title}
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {emergencyContacts.contacts.map((contact, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all hover:scale-[1.02] ${
                      contact.emergency
                        ? "bg-red-50 border-red-300 shadow-sm"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4
                          className={`font-semibold text-lg ${
                            contact.emergency ? "text-red-900" : "text-gray-900"
                          }`}
                        >
                          {contact.name}
                        </h4>
                        {contact.description && (
                          <p className="text-gray-600 mt-1">
                            {contact.description}
                          </p>
                        )}
                      </div>
                      <span
                        className={`font-black text-xl ${
                          contact.emergency ? "text-red-600" : "text-blue-600"
                        }`}
                      >
                        {contact.number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Local Services */}
          <div className="bg-white rounded-xl border border-gray-200  ">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-white">
              <div className="flex items-center gap-3">
                <Building className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  {localServices.title}
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {localServices.sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="  text-gray-900 text-lg mb-4 border-b pb-2">
                      {section.title}
                    </h4>
                    <div className="space-y-3">
                      {section.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-purple-50 transition-colors"
                        >
                          <h5 className="font-semibold text-gray-900 text-md mb-2">
                            {service.name}
                          </h5>
                          <p className="text-gray-600 text-sm mb-2">
                            {service.address}
                          </p>
                          <p className="text-blue-600 font-semibold">
                            {service.phone}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Support Services */}
        <div className="bg-white rounded-xl border border-gray-200 /">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-white">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-pink-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                {supportServices.title}
              </h2>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportServices.services.map((service, index) => (
                <div
                  key={index}
                  className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-blue-200"
                >
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">
                    {service.name}
                  </h4>
                  <p className="text-blue-600 font-black text-xl mb-2">
                    {service.number}
                  </p>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
