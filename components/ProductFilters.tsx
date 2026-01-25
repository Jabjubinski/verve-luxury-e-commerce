"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

const SIZES = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
const AVAILABILITY = ["In Stock", "Pre-order", "Out of Stock"];

export function ProductFilters() {
  const [openSection, setOpenSection] = useState<string | null>("price");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStock, setSelectedStock] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });

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
    <div className="w-full lg:w-64 space-y-4 text-white">
      {/* Price Range Filter */}
      <FilterSection
        title="Price Range"
        isOpen={openSection === "price"}
        onToggle={() => toggleSection("price")}
      >
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <span className="text-[10px] text-white/40 uppercase">Min</span>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: +e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 p-2 text-sm focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-white/40 uppercase">Max</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: +e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 p-2 text-sm focus:outline-none focus:border-white/30"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: +e.target.value })
            }
            className="w-full accent-white"
          />
        </div>
      </FilterSection>

      {/* Availability Filter (Multiple Select) */}
      <FilterSection
        title="Availability"
        isOpen={openSection === "stock"}
        onToggle={() => toggleSection("stock")}
      >
        <div className="flex flex-col gap-2 pt-2">
          {AVAILABILITY.map((status) => (
            <label
              key={status}
              className="flex items-center gap-3 group cursor-pointer text-sm"
            >
              <div
                onClick={() =>
                  handleToggle(selectedStock, setSelectedStock, status)
                }
                className={clsx(
                  "w-4 h-4 border transition-colors flex items-center justify-center",
                  selectedStock.includes(status)
                    ? "bg-white border-white"
                    : "border-white/20 group-hover:border-white/50",
                )}
              >
                {selectedStock.includes(status) && (
                  <div className="w-2 h-2 bg-black" />
                )}
              </div>
              <span
                className={
                  selectedStock.includes(status)
                    ? "text-white"
                    : "text-white/60"
                }
              >
                {status}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Size Filter (Grid Select) */}
      <FilterSection
        title="Size"
        isOpen={openSection === "size"}
        onToggle={() => toggleSection("size")}
      >
        <div className="grid grid-cols-4 gap-2 pt-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() =>
                handleToggle(selectedSizes, setSelectedSizes, size)
              }
              className={clsx(
                "h-10 border text-[10px] font-bold transition-all",
                selectedSizes.includes(size)
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/10 hover:border-white/40",
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}

// Sub-component for Accordion behavior
function FilterSection({ title, isOpen, onToggle, children }: any) {
  return (
    <div className="border-b border-white/5 pb-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-2 text-xs uppercase tracking-widest font-bold"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {children}
      </div>
    </div>
  );
}
