import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Layouts from "@/src/componets/Shared/Layouts";

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
        <Layouts> {children} </Layouts>
      </body>
      <Toaster position="top-right" />
    </html>
  );
}
