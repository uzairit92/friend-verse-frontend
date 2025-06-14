
import React, { useState } from "react";
import { Menu, ChevronDown, MapPin, Users, CalendarDays, Bookmark, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const topCategories = [
  { label: "Vehicles" },
  { label: "Rentals" },
  { label: "Womenswear" },
  { label: "Menswear" },
  { label: "Furniture" },
  { label: "Electronics" },
];

const allCategories = [
  "Antiques & Collectibles", "Arts and Crafts", "Auto Parts", "Baby", "Books, Movies & Music",
  "Electronics", "Free", "Furniture", "Garage Sale", "Health & Beauty", "Home & Kitchen",
  "Home Improvement", "Housing for Sale", "Jewelry & Watches", "Kidswear & Baby", "Luggage & Bags",
  "Menswear", "Miscellaneous", "Musical Instruments", "Patio & Garden", "Pet Supplies", "Rentals",
  "Sporting Goods", "Toys and Games", "Vehicles", "Womenswear"
];

export function CategoryMenu({
  onSelectCategory
}: {
  onSelectCategory: (cat: string) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <LayoutGrid className="w-4 h-4 text-gray-700" />
          Categories
          <ChevronDown className="w-4 h-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 max-h-96 overflow-auto z-30">
        {/* Quick links */}
        <div className="grid grid-cols-2 gap-1 px-2 py-1">
          <DropdownMenuItem onClick={() => onSelectCategory("Local Listings")}>
            <MapPin className="w-4 h-4 mr-1 text-blue-600" />
            Local Listings
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectCategory("Buy and Sell Groups")}>
            <Users className="w-4 h-4 mr-1 text-pink-600" />
            Buy & Sell Groups
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectCategory("Sale Events")}>
            <CalendarDays className="w-4 h-4 mr-1 text-green-600" />
            Sale Events
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSelectCategory("Saved Items")}>
            <Bookmark className="w-4 h-4 mr-1 text-yellow-600" />
            Saved Items
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-gray-600 mt-2">Top Categories</DropdownMenuLabel>
        <div className="flex flex-wrap gap-2 px-2 pb-2">
          {topCategories.map((c) => (
            <Button
              key={c.label}
              variant="secondary"
              size="sm"
              className="rounded-full"
              onClick={() => onSelectCategory(c.label)}
            >
              {c.label}
            </Button>
          ))}
        </div>
        <DropdownMenuSeparator />
        {/* All categories */}
        <DropdownMenuLabel className="text-gray-600 mt-2">All Categories</DropdownMenuLabel>
        <div className="grid grid-cols-1 gap-0.5 max-h-52 overflow-y-auto px-2 pb-2">
          {allCategories.map((c) => (
            <DropdownMenuItem
              key={c}
              onClick={() => onSelectCategory(c)}
              className="text-sm"
            >
              {c}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
