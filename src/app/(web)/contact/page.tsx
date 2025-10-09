// app/(web)/contact/page.tsx
import IconCard from "@/components/cards/IconCard";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import FaqSection from "@/components/sections/FaqSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import Heading from "@/components/ui/Heading";
import { contact } from "@/data/contact";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL, SITE_MAP } from "@/extra/siteDetails";
import { slugs } from "@/extra/slugs";

export const generateMetadata = (): Metadata => ({
  title: "Contact Us",
  description:
    "Get in touch with Quantum Institute. Find our contact details, office hours, and how to reach our support team.",
  alternates: {
    canonical: `${SITE_URL}/${slugs.contact}`,
  },
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with Quantum Institute. Find our contact details, office hours, and how to reach our support team.",
    url: `${SITE_URL}/${slugs.contact}`,
    siteName: "Quantum Institute of Higher Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Get in touch with Quantum Institute. Find our contact details, office hours, and how to reach our support team.",
  },
});

const ContactPage = () => {
  return (
    <>
      <Breadcrumbs />

      <ContainerLayout className="mt-8">
        <Heading level={1}>Contact QIHE</Heading>
        <p className="text-gray-600 max-w-2xl mt-2 mb-6">
          We are here to support you throughout your learning journey. If you have any questions, require assistance, or need further information, please reach out using the details below. Our team is committed to providing timely and helpful guidance to all students.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {contact.map((item, i) => (
            <IconCard key={i} icon={item.icon}>
              <Heading level={4}>{item.title}</Heading>
              {item.email && (
                <Link
                  href={`mailto:${item.email}`}
                  className="text-gray-600 underline hover:text-brand-primary transition-all"
                >
                  {item.email}
                </Link>
              )}
              {item.phone && (
                <Link
                  href={`tel:${item.phone}`}
                  className="text-gray-600 underline hover:text-brand-primary transition-all"
                >
                  {item.phone}
                </Link>
              )}
              {item.url && (
                <Link
                  href={item.url}
                  className="text-gray-600 underline hover:text-brand-primary transition-all"
                >
                  {item.url}
                </Link>
              )}
            </IconCard>
          ))}
        </div>

        {/* Office Hours & Student Support */}
        <div className="mt-12 space-y-6">
          <Heading level={2} className="text-2xl font-semibold">
            Office Hours & Student Support
          </Heading>
          <p className="text-gray-700">
            <strong>Office Hours:</strong> Monday to Friday: 9:00 AM – 5:30 PM (AEST)
          </p>
          <p className="text-gray-700">
            <strong>Student Support:</strong> For academic, enrolment, or wellbeing support, contact our Student Services Team at: TBA (Email and Phone)
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <Heading level={2} className="text-2xl font-semibold mb-4">
            Write to QIHE
          </Heading>
          <p className="text-gray-700 mb-6">
            You can contact us directly through our online form. Please complete the fields below, and a member of our team will respond to your enquiry as soon as possible.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium text-gray-700">Full Name*</label>
              <input type="text" id="name" placeholder="Enter your first and last name" className="border rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email Address*</label>
              <input type="email" id="email" placeholder="Enter a valid email" className="border rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 font-medium text-gray-700">Phone Number (Optional)</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" className="border rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="studentId" className="mb-1 font-medium text-gray-700">Student ID (if applicable)</label>
              <input type="text" id="studentId" placeholder="Provide your student ID" className="border rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="mb-1 font-medium text-gray-700">Your Message*</label>
              <textarea id="message" rows={6} placeholder="Include your enquiry, feedback, or request" className="border rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all">
                📩 Send Message
              </button>
            </div>
          </form>
        </div>
      </ContainerLayout>

      {/* FAQ and Newsletter Sections */}
      <div className="mt-32 space-y-32">
        <FaqSection />
        <NewsLetterSection />
      </div>
    </>
  );
};

export default ContactPage;
