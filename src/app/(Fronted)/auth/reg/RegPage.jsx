"use client";
import React from "react";
import Link from "next/link";
import RegisterForm from "@/src/componets/forms/auth/RegisterForm";
import SocialButton from "@/src/componets/forms/auth/SocialButton";

const RegPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Decorative Glares */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white tracking-tight uppercase italic">
              Kiddo<span className="text-blue-500">Mart</span>
            </h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
              Create your account
            </p>
          </div>

          <RegisterForm />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-950 px-2 text-slate-500 font-bold tracking-widest">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <SocialButton />

          <div className="text-center mt-8">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-500 hover:text-orange-400 transition-colors"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegPage;
