// src/app/(web)/layout.tsx
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import ScrollToTop from "@/components/global/ScrollToTop";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
