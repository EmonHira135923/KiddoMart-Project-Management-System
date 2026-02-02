"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navvar from "./Navvar";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  // Jodi auth page hoy, shudhu children (Login/Register page) render hobe
  if (isAuthPage) {
    return <>{children}</>;
  }

  // Normal page-er jonno Layout
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <Navvar />
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </>
  );
};

export default Layouts;
