import type { Metadata } from "next";
import "./css/globals.css";
import { SITE_TITLE, SITE_URL } from "@/extra/siteDetails";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Quantum Institute of Higher Education",
    template: `%s • ${SITE_TITLE}`,
  },
  description:
    "Quantum Institute is a leading education provider offering quality programs and courses.",
  keywords: [
    "education",
    "quantum institute",
    "courses",
    "programs",
    "learning",
    "student support",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}`,
  },
  openGraph: {
    title: "Quantum Institute",
    description:
      "Quantum Institute is a leading education provider offering quality programs and courses.",
    url: SITE_URL,
    siteName: "Quantum Institute of Higher Education",
    images: [
      {
        url: `${SITE_URL}/quantam-horizontal.svg`,
        width: 1200,
        height: 630,
        alt: "Quantum Institute",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Institute",
    description:
      "Quantum Institute is a leading education provider offering quality programs and courses.",
    images: [`${SITE_URL}/quantam-horizontal.svg`],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {[
          "uicons-regular-straight",
          "uicons-thin-straight",
          "uicons-bold-straight",
          "uicons-solid-rounded",
          "uicons-solid-straight",
          "uicons-bold-rounded",
          "uicons-regular-rounded",
          "uicons-brands",
        ].map((style) => (
          <link
            key={style}
            rel="stylesheet"
            href={`https://cdn-uicons.flaticon.com/2.4.0/${style}/css/${style}.css`}
          />
        ))}
      </head>

      <body className="antialiased bg-white text-black dark:bg-black dark:text-white font-secondary">
        <main>{children}</main>
      </body>
    </html>
  );
}
