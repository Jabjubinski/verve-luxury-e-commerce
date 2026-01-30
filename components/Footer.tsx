"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    collections: [
      { label: "New Arrivals", href: "/shop" },
      { label: "The Edit", href: "/shop?filter=editorial" },
      { label: "Archive", href: "/archive" },
      { label: "Objects", href: "/objects" },
    ],
    clientService: [
      { label: "Shipping & Duties", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Personal Styling", href: "/styling" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "TikTok", href: "https://tiktok.com" },
      { label: "Pinterest", href: "https://pinterest.com" },
    ],
  };

  return (
    <footer className="bg-black text-[#F2F2F2] border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Philosophy & Newsletter */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="font-serif text-5xl tracking-tighter mb-6">
                VERVE
              </h2>
              <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] max-w-xs leading-loose">
                Established 2026. Defining the vanguard of modern silhouette and
                avant-garde craftsmanship.
              </p>
            </div>

            <div className="max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                Newsletter
              </p>
              <form className="relative group">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-[10px] focus:outline-none focus:border-white transition-all duration-500 uppercase tracking-widest"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-widest font-bold">
                    Subscribe
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">
                Collections
              </h4>
              <ul className="space-y-4">
                {footerLinks.collections.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] uppercase tracking-widest hover:text-white/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">
                Client Service
              </h4>
              <ul className="space-y-4">
                {footerLinks.clientService.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] uppercase tracking-widest hover:text-white/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">
                Follow
              </h4>
              <ul className="space-y-4">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[11px] uppercase tracking-widest hover:text-white/50 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Local Time (A Luxury Touch) */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-[9px] text-white/20 hover:text-white uppercase tracking-[0.2em]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[9px] text-white/20 hover:text-white uppercase tracking-[0.2em]"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">
              © {currentYear} VERVE ATELIER. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Large Vertical text for Brand name at bottom */}
          <div className="hidden lg:block overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="font-serif text-9xl text-white/5 leading-none select-none pointer-events-none"
            >
              VERVE
            </motion.h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
