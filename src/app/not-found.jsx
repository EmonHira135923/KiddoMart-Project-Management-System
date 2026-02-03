import Link from "next/link";
import React from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export const metadata = {
  title: "404 - Page Lost in Space",
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />

      {/* Large Blurred 404 in Background */}
      <h1 className="absolute text-[250px] md:text-[400px] font-black text-white/[0.02] select-none pointer-events-none">
        404
      </h1>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Rocket/Icon */}
        <div className="mb-6 p-5 bg-blue-500/10 border border-blue-500/20 rounded-full animate-bounce">
          <HiOutlineRocketLaunch className="text-4xl text-blue-500" />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            MISSION <span className="text-blue-500">FAILED</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-sm mx-auto font-medium leading-relaxed">
            The page you're looking for has drifted into a black hole. Let's get
            you back to the home station.
          </p>
        </div>

        {/* Action Button - Premium Design */}
        <Link
          href="/"
          className="mt-10 group relative px-8 py-4 bg-blue-600 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
          <span className="relative text-white font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
            Back to Home Base
          </span>
        </Link>
      </div>

      {/* Aesthetic Bottom Marker */}
      <div className="absolute bottom-10 flex items-center gap-3">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em]">
          KiddoMart Signal Lost
        </span>
      </div>
    </div>
  );
};

export default NotFound;
