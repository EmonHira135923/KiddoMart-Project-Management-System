"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative text-[12px] font-bold uppercase tracking-[0.15em] transition-all group ${
        isActive ? "text-blue-400" : "text-slate-400 hover:text-white"
      }`}
    >
      {children}
      {/* Active Bottom Bar */}
      <span
        className={`absolute -bottom-2 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

export default NavLink;
