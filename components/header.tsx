"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ShoppingBag, Heart, Menu, X, ChevronDown } from "lucide-react";

const NAV_DATA = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Shop All", href: "/shop" },
      { label: "Tops & Blouses", href: "/shop/tops" },
      { label: "Dresses", href: "/shop/dresses" },
      { label: "Skirts", href: "/shop/skirts" },
      { label: "Trousers", href: "/shop/trousers" },
      { label: "Knitwear", href: "/shop/knitwear" },
      { label: "Cardigans", href: "/shop/cardigans" },
      { label: "Coats & Jackets", href: "/shop/coats" },
      { label: "Bags & Shoes", href: "/shop/accessories" },
    ],
  },
  {
    label: "Shop by Mood",
    href: "/mood",
    children: [
      { label: "Earthy", href: "/mood/earthy" },
      { label: "Whimsigoth", href: "/mood/whimsigoth" },
      { label: "Vampy / Romantic Goth", href: "/mood/vampy" },
      { label: "Grunge", href: "/mood/grunge" },
      { label: "Midnight", href: "/mood/midnight" },
      { label: "Cottage", href: "/mood/cottage" },
      { label: "Summer", href: "/mood/summer" },
      { label: "Special Occasion", href: "/mood/special-occasion" },
    ],
  },
  { label: "Sale", href: "/sale", highlight: true },
  { label: "Contact", href: "/contact" },
];

export function Header({ cartCount = 0, wishlistCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-[#191919] text-white border-b border-white/5">
        {/* Top Announcement */}
        <div className="bg-white text-black py-1.5 text-center text-[11px] font-bold uppercase tracking-widest">
          Free Shipping on orders over $75
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-1 lg:flex-none">
            <span className="text-2xl brand-logo tracking-wide">
              Black Sugar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 h-full">
            {NAV_DATA.map((item) => (
              <div key={item.label} className="group h-full flex items-center">
                <Link
                  href={item.href}
                  className={clsx(
                    "text-[13px] uppercase tracking-wider transition-colors py-2 flex items-center gap-1.5",
                    item.highlight
                      ? "text-rose-500 font-bold"
                      : "text-white/70 hover:text-white",
                    pathname === item.href && "text-white",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Flyout Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 w-full bg-[#191919] border-t border-white/5 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-[110]">
                    <div className="max-w-[1440px] mx-auto px-10 py-12 grid grid-cols-4 gap-8">
                      <div className="col-span-1">
                        <h3 className="text-white text-lg font-semibold mb-4">
                          {item.label}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                          Explore our curated collection of{" "}
                          {item.label.toLowerCase()} essentials.
                        </p>
                      </div>
                      <div className="col-span-3 grid grid-cols-3 gap-y-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="text-white/60 hover:text-white text-sm transition-colors border-l border-transparent hover:border-rose-500 pl-4"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex-1 lg:flex-none flex justify-end items-center gap-3">
            <Link
              href="/wishlist"
              className="p-2 hover:text-rose-500 transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-rose-500 text-[9px] text-white w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="p-2 hover:text-white transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-white text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(true)} className="lg:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={clsx(
          "fixed inset-0 z-[200] lg:hidden",
          isOpen ? "visible" : "invisible",
        )}
      >
        <div
          className={clsx(
            "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsOpen(false)}
        />
        <nav
          className={clsx(
            "relative w-[85%] max-w-sm h-full bg-[#121212] p-8 transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="font-bold text-xl italic uppercase">Store.</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-160px)]">
            {NAV_DATA.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium block mb-3"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="grid grid-cols-1 gap-2 pl-4 border-l border-white/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white/50 text-sm py-1"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
