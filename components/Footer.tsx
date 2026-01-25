"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "New Arrivals", href: "/shop" },
      { label: "Bestsellers", href: "/shop?sort=trending" },
      { label: "Sale", href: "/sale" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
    support: [
      { label: "Shipping Policy", href: "/shipping" },
      { label: "Returns & Exchanges", href: "/returns" },
      { label: "Sizing Guide", href: "/sizing" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  };

  return (
    <footer className="bg-[#121212] text-white border-t border-white/5 pt-20 pb-10">
      <div className="max-w-360 mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6">
            <Link href="/" className="text-2xl tracking-widest brand-logo">
              Black Sugar
            </Link>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Join our mailing list for early access to new drops and editorial
              content.
            </p>
            <form className="relative max-w-sm group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-white/20 py-2 text-xs focus:outline-none focus:border-white transition-colors uppercase tracking-widest"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-3 lg:flex lg:justify-end lg:gap-24">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
                Shop
              </h4>
              <ul className="space-y-4">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
                Support
              </h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
                Connect
              </h4>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="p-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © {currentYear} Black Sugar. All Rights Reserved.
          </p>

          {/* Payment Icons Placeholder */}
          <div className="flex gap-3 grayscale opacity-30 hover:opacity-60 transition-opacity">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="Paypal"
              className="h-4"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
