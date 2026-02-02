"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navvar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <nav className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Height komiye h-16 (desktop) ebong h-14 (mobile) kora hoyeche */}
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center">
              <span className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">
                Kiddo
                <span className="text-blue-500 group-hover:text-orange-500 transition-colors">
                  Mart
                </span>
              </span>
            </Link>
          </div>

          {/* Center: Minimalist Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink key={item.name} href={item.path}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section: Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Auth Links */}
            <div className="hidden lg:flex items-center border-r border-slate-800 pr-4 space-x-5">
              <NavLink href="/auth/login">Sign In</NavLink>
              <Link
                href="/auth/reg"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95"
              >
                Join Now
              </Link>
            </div>

            {/* Cart Icon - Padding & Size Optimized */}
            <Link
              href="/cart"
              className="relative p-2 bg-slate-900/50 border border-slate-800 rounded-lg hover:bg-slate-800 transition-all group"
            >
              <span className="text-lg block group-hover:rotate-12 transition-transform">
                🛍️
              </span>
              <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-slate-950">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16m-7 6h7"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Compact Design */}
      <div
        className={`md:hidden bg-slate-950 transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-64 opacity-100 border-t border-slate-900"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="p-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-all"
            >
              {item.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-900 mt-2">
            <Link
              href="/auth/login"
              className="text-center text-xs font-bold text-slate-400 py-2.5 uppercase tracking-widest"
            >
              Login
            </Link>
            <Link
              href="/auth/reg"
              className="text-center bg-blue-600 text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navvar;
