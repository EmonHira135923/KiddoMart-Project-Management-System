import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../componets/Shared/Footer";
import Navvar from "../componets/Shared/Navvar";

export const metadata = {
  title: {
    default: "Kiddomart",
    template: "%s - Kiddomart",
  },
  // Description-ti ekhane change kora hoyeche SEO-friendly korar jonno
  description:
    "Kiddomart - The ultimate destination for premium quality kids' toys, clothing, and essentials. Explore joy for your little ones!",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen bg-slate-50`}
      >
        {/* Header styling */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <Navvar />
        </header>

        {/* Main content styling */}
        <main className="flex-grow">{children}</main>

        {/* Footer styling */}
        <footer className="bg-white border-t">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
