import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Poppins, League_Spartan } from "next/font/google";
import ScrollToTop from "@/components/global/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-secondary",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantum Institute",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

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
      <body
        className={`${poppins.variable} ${leagueSpartan.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <Header />
        {children}

        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
