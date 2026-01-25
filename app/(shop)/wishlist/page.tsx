"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import clsx from "clsx";

// Mock data - In a real app, this would come from a Context provider or Redux
const INITIAL_WISHLIST = [
  {
    id: 1,
    name: "Midnight Velvet Blazer",
    price: "185",
    imgURL:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    size: "M",
  },
  {
    id: 2,
    name: "Earthy Linen Trousers",
    price: "95",
    imgURL:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    size: "S",
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(INITIAL_WISHLIST);

  const removeItem = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  if (wishlist.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-tighter">
              Your Wishlist
            </h1>
            <p className="text-white/50 text-sm mt-2">
              {wishlist.length} Items saved
            </p>
          </div>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-widest hover:underline underline-offset-4"
          >
            Continue Shopping
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#191919] border border-white/5 relative"
            >
              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-rose-500 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.imgURL}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-white/40 text-xs mt-1">
                      Size: {item.size}
                    </p>
                  </div>
                  <p className="font-bold">${item.price} USD</p>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white border border-white transition-all">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function EmptyWishlist() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <HeartIcon className="w-16 h-16 text-white/10 mb-6" />
      <h2 className="text-2xl font-bold uppercase tracking-tighter text-white">
        Your wishlist is empty
      </h2>
      <p className="text-white/40 mt-2 mb-8 max-w-xs">
        Save your favorite items to keep track of them and buy them later.
      </p>
      <Link
        href="/shop"
        className="flex items-center gap-2 bg-white text-black px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all"
      >
        Go to Shop
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}
