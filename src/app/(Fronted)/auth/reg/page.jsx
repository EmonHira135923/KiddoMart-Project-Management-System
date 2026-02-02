import React from "react";
import RegPage from "./RegPage";
export const metadata = {
  title: "Join Now",
  description:
    "Join KiddoMart to discover premium toys and kids' essentials. Register now for exclusive deals, faster checkout, and personalized shopping for your little ones!",
  keywords: [
    "KiddoMart registration",
    "kids shop account",
    "buy toys online",
    "children essentials Bangladesh",
  ],
  openGraph: {
    title: "Join KiddoMart - Premium Kids' Essentials",
    description:
      "Create an account for the best shopping experience for your kids.",
    url: "https://kiddomart.com/auth/reg", // Apnar real URL hobe
    siteName: "KiddoMart",
    images: [
      {
        url: "/og-register.jpg", // Ekti shundor image path (public folder e thakbe)
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RegisterPage = () => {
  return (
    <div>
      <RegPage />
    </div>
  );
};

export default RegisterPage;
