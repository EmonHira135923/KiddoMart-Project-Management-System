import React from "react";
import Link from "next/link";
// React Icons import
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", color: "hover:bg-blue-600" },
    { icon: <FaInstagram />, href: "#", color: "hover:bg-pink-600" },
    { icon: <FaTwitter />, href: "#", color: "hover:bg-sky-500" },
    { icon: <FaLinkedinIn />, href: "#", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                Kiddo<span className="text-blue-500">Mart</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium quality toys and essentials for your little ones. We
              prioritize safety and joy in every delivery.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className={`w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-7">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {["Shop All", "New Arrivals", "Best Sellers", "Offers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/shop"
                      className="hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-slate-700 rounded-full"></span>{" "}
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-7">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-blue-500 text-xl shrink-0" />
                <span>123 Kiddo Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-blue-500 text-xl shrink-0" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-blue-500 text-xl shrink-0" />
                <span>hello@kiddomart.com</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-7">
              Newsletter
            </h4>
            <p className="text-sm mb-5">
              Subscribe for latest updates and special child-care tips.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center">
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright & Links */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[13px]">
            © {currentYear}{" "}
            <span className="text-white font-bold uppercase tracking-tighter">
              KiddoMart
            </span>
            . Built with ❤️ for kids.
          </div>

          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
