
import React from "react";
import { Search, ShoppingBag, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MarketplaceNavbar({
  onSell,
  onSearch,
  searchValue,
  setSearchValue,
  onOpenCategories
}: {
  onSell: () => void;
  onSearch: () => void;
  searchValue: string;
  setSearchValue: (v: string) => void;
  onOpenCategories?: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 justify-between">
      <div className="flex items-center gap-2">
        <ShoppingBag className="w-8 h-8 text-green-600" />
        <span
          className="text-2xl font-bold tracking-tight"
          style={{ fontFamily: "'Noto Nastaliq Urdu',serif" }}
        >
          Marketplace
        </span>
      </div>
      <div className="flex-1 flex gap-2 items-center justify-center">
        <div className="relative flex-[2]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition text-sm"
            placeholder="Search listings"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={e => e.key === "Enter" && onSearch()}
          />
        </div>
        <Button
          variant="default"
          onClick={onSell}
          className="whitespace-nowrap gap-1"
        >
          <PlusCircle className="w-4 h-4" />
          Sell
        </Button>
      </div>
    </div>
  );
}
