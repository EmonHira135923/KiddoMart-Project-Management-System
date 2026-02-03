import LoginForm from "@/src/componets/forms/auth/LoginForm";
import React from "react";

export const metadata = {
  title: "Login",
  description:
    "Securely login to your KiddoMart account. Manage your orders, track shipments, and explore the latest premium kids' toys and essentials.",
  keywords: [
    "kiddomart login",
    "kids store bangladesh",
    "children toys account",
    "premium kids essentials",
  ],
  openGraph: {
    title: "Login to KiddoMart - Premium Kids Shop",
    description: "Welcome back! Login to explore joy for your little ones.",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dd015bguh/image/upload/v1/kiddomart/assets/login-og.jpg", // Example OG image
        width: 1200,
        height: 630,
        alt: "KiddoMart Login",
      },
    ],
  },
};

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Glows for Dark Theme Aesthetic */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white tracking-tight uppercase italic">
              Kiddo<span className="text-blue-500">Mart</span>
            </h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
              Welcome Back! Please Login
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
