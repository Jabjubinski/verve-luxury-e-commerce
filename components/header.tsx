"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ShoppingBag, Heart, Menu, X } from "lucide-react";

const NAV_DATA = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "View All", href: "/shop" },
      { label: "Outerwear", href: "/shop/coats" },
      { label: "Tailoring", href: "/shop/trousers" },
      { label: "Knitwear", href: "/shop/knitwear" },
      { label: "Silks & Blouses", href: "/shop/tops" },
      { label: "Dresses", href: "/shop/dresses" },
      { label: "Accessories", href: "/shop/accessories" },
    ],
  },
  {
    label: "Edits",
    href: "/mood",
    children: [
      { label: "The Minimalist", href: "/mood/minimal" },
      { label: "Avant-Garde", href: "/mood/avant-garde" },
      { label: "Monochrome", href: "/mood/monochrome" },
      { label: "Raw Textures", href: "/mood/raw" },
      { label: "Architectural", href: "/mood/architectural" },
      { label: "The Archive", href: "/mood/archive" },
      { label: "Summer Essentials", href: "/mood/summer" },
    ],
  },
  { label: "Sale", href: "/sale", highlight: true },
  { label: "Journal", href: "/blog" },
];

export function Header({ cartCount = 0, wishlistCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <div className="bg-white text-black py-2 text-center text-[9px] font-bold uppercase tracking-[0.3em] relative z-[60]">
        Complimentary global shipping on orders over $300
      </div>

      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out",
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-10",
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="z-50 relative">
            <span className="text-3xl font-serif text-white tracking-tighter leading-none">
              VERVE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_DATA.map((item) => (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() =>
                  item.children && setActiveSubmenu(item.label)
                }
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "text-[10px] uppercase tracking-[0.25em] transition-all duration-500 relative pb-1",
                    item.highlight
                      ? "text-red-800"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>

                {/* Mega Menu */}
                {item.children && activeSubmenu === item.label && (
                  <div className="absolute top-full -left-8 pt-6 w-[500px] animate-in fade-in slide-in-from-top-1 duration-500">
                    <div className="bg-black border border-white/10 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <div className="grid grid-cols-2 gap-10">
                        <div>
                          <h4 className="font-serif text-lg text-white mb-4 italic opacity-80">
                            {item.label}
                          </h4>
                          <p className="text-white/40 text-[10px] leading-relaxed mb-6 uppercase tracking-widest">
                            Refined selections for the discerning wardrobe.
                          </p>
                        </div>
                        <div className="flex flex-col gap-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="text-white/50 hover:text-white text-[11px] uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group/item"
                            >
                              <span className="w-0 group-hover/item:w-3 h-[1px] bg-white transition-all duration-500" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Utility */}
          <div className="flex items-center gap-8">
            <Link
              href="/wishlist"
              className="relative text-white/80 hover:text-white transition-colors"
            >
              <Heart strokeWidth={1} className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-white"></span>
              )}
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
            >
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                Cart ({cartCount})
              </span>
              <ShoppingBag strokeWidth={1} className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white"
            >
              <Menu strokeWidth={1} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-[100] bg-black transition-transform duration-[800ms] cubic-bezier(0.77, 0, 0.175, 1)",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center">
            <span className="font-serif text-2xl text-white">VERVE</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X strokeWidth={1} className="w-8 h-8" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-8">
            {NAV_DATA.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-5xl text-white hover:italic transition-all duration-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] text-white/30">
            <span>Paris / London / NYC</span>
            <span>&copy; 2026 VERVE ATELIER</span>
          </div>
        </div>
      </div>
    </>
  );
}
