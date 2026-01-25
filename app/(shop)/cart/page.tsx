"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ArrowRight, Truck } from "lucide-react";

const INITIAL_CART = [
  {
    id: 1,
    name: "Midnight Velvet Blazer",
    price: 185,
    size: "M",
    quantity: 1,
    imgURL:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Earthy Linen Trousers",
    price: 95,
    size: "S",
    quantity: 1,
    imgURL:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(INITIAL_CART);

  const updateQuantity = (id: number, delta: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 75 ? 0 : 15;

  if (cart.length === 0) return <EmptyCart />;

  return (
    <main className="min-h-screen bg-[#121212] text-white py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold uppercase tracking-tighter mb-10">
          Your Bag
        </h1>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items List */}
          <div className="flex-[2] space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 border-b border-white/5 pb-8 relative"
              >
                <div className="relative w-24 h-32 sm:w-32 sm:h-40 bg-[#191919] overflow-hidden">
                  <Image
                    src={item.imgURL}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-white/40 text-xs mt-1">
                        Size: {item.size}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white/40 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex justify-between items-end">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-white/10">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-white/5 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center text-xs font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-white/5 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-bold text-sm">
                      ${item.price * item.quantity} USD
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <aside className="flex-1">
            <div className="bg-[#191919] p-8 sticky top-24">
              <h2 className="text-lg font-bold uppercase tracking-tighter mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm border-b border-white/5 pb-6">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>${subtotal} USD</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0
                      ? "Calculated at next step"
                      : `$${shipping} USD`}
                  </span>
                </div>
                {subtotal > 75 && (
                  <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-widest font-bold">
                    <Truck className="w-4 h-4" />
                    Free Shipping Applied
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center py-6">
                <span className="text-base uppercase tracking-widest font-bold">
                  Total
                </span>
                <span className="text-xl font-bold">
                  ${subtotal + (shipping === 0 ? 0 : shipping)} USD
                </span>
              </div>

              <button className="w-full bg-white text-black py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white border border-white transition-all flex items-center justify-center gap-2 group">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-[10px] text-white/30 text-center mt-6 uppercase tracking-widest">
                Tax calculated at checkout • Secure Payment
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function EmptyCart() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
        <ShoppingBagIcon className="w-10 h-10 text-white/20" />
      </div>
      <h2 className="text-2xl font-bold uppercase tracking-tighter text-white">
        Your bag is empty
      </h2>
      <p className="text-white/40 mt-2 mb-8 max-w-xs">
        Items remain in your bag for 30 days, but they are not reserved.
      </p>
      <Link
        href="/shop"
        className="bg-white text-black px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
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
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}
