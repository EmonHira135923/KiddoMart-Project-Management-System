import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Aesthetic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full animate-pulse" />

      <div className="relative flex flex-col items-center">
        {/* Animated Logo Text */}
        <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic mb-8 animate-bounce">
          Kiddo<span className="text-blue-500">Mart</span>
        </h1>

        {/* Modern Circular Loader */}
        <div className="relative w-20 h-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-slate-800 rounded-full" />
          {/* Spinning Gradient Ring */}
          <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />

          {/* Small inner pulse dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          </div>
        </div>

        {/* Subtext */}
        <p className="mt-6 text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
          Please Wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
