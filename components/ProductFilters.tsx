"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

const SIZES = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
const AVAILABILITY = ["In Stock", "Pre-order", "Archive"]; // 'Archive' sounds more luxury than 'Out of Stock'

export function ProductFilters() {
  const [openSection, setOpenSection] = useState<string | null>("size");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStock, setSelectedStock] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2500 });

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleToggle = (
    list: string[],
    setList: (l: string[]) => void,
    item: string,
  ) => {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item],
    );
  };

  return (
    <div className="w-full space-y-2 text-white">
      {/* 1. Size Filter - Essential for Fashion */}
      <FilterSection
        title="Size"
        isOpen={openSection === "size"}
        onToggle={() => toggleSection("size")}
      >
        <div className="grid grid-cols-4 gap-1 pt-4">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() =>
                handleToggle(selectedSizes, setSelectedSizes, size)
              }
              className={clsx(
                "h-12 border text-[10px] tracking-widest transition-all duration-500",
                selectedSizes.includes(size)
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/40 border-white/5 hover:border-white/20",
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* 2. Price Range - Refined Slider */}
      <FilterSection
        title="Price"
        isOpen={openSection === "price"}
        onToggle={() => toggleSection("price")}
      >
        <div className="space-y-6 pt-6 pb-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
              Limit
            </span>
            <span className="text-[11px] font-light tracking-widest text-white/80">
              ${priceRange.max}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="5000"
            step="50"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: +e.target.value })
            }
            className="w-full h-[1px] bg-white/10 appearance-none cursor-pointer accent-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
          />
        </div>
      </FilterSection>

      {/* 3. Availability - Minimalist Check */}
      <FilterSection
        title="Status"
        isOpen={openSection === "stock"}
        onToggle={() => toggleSection("stock")}
      >
        <div className="flex flex-col gap-4 pt-6">
          {AVAILABILITY.map((status) => (
            <label
              key={status}
              className="flex items-center justify-between group cursor-pointer"
              onClick={() =>
                handleToggle(selectedStock, setSelectedStock, status)
              }
            >
              <span
                className={clsx(
                  "text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
                  selectedStock.includes(status)
                    ? "text-white"
                    : "text-white/30 group-hover:text-white/60",
                )}
              >
                {status}
              </span>
              <div
                className={clsx(
                  "w-1 h-1 rounded-full transition-all duration-500",
                  selectedStock.includes(status)
                    ? "bg-white scale-150"
                    : "bg-transparent",
                )}
              />
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Clear Filters Link */}
      {(selectedSizes.length > 0 || selectedStock.length > 0) && (
        <button
          onClick={() => {
            setSelectedSizes([]);
            setSelectedStock([]);
          }}
          className="pt-8 text-[9px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}

function FilterSection({ title, isOpen, onToggle, children }: any) {
  return (
    <div className="border-b border-white/5 py-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-2 group"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 group-hover:text-white transition-colors">
          {title}
        </span>
        {isOpen ? (
          <Minus className="w-3 h-3 text-white/20" />
        ) : (
          <Plus className="w-3 h-3 text-white/20" />
        )}
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {children}
      </div>
    </div>
  );
}
