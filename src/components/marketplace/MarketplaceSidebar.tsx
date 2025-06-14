
import React, { useState } from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarInput, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Inbox, MapPin, ShoppingBag, Plus, Category, ShoppingCart, Tag, List, Users, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hardcoded categories for demo, can be reused from CategoryMenu if needed.
const topCategories = [
  "Vehicles", "Rentals", "Womenswear", "Menswear", "Furniture", "Electronics"
];

const allCategories = [
  "Antiques & Collectibles", "Arts and Crafts", "Auto Parts", "Baby", "Books, Movies & Music",
  "Electronics", "Free", "Furniture", "Garage Sale", "Health & Beauty", "Home & Kitchen",
  "Home Improvement", "Housing for Sale", "Jewelry & Watches", "Kidswear & Baby", "Luggage & Bags",
  "Menswear", "Miscellaneous", "Musical Instruments", "Patio & Garden", "Pet Supplies", "Rentals",
  "Sporting Goods", "Toys and Games", "Vehicles", "Womenswear"
];

export function MarketplaceSidebar({
  onSearch, searchValue, setSearchValue, locationLabel, onChangeLocation, onCreateListing,
}: {
  onSearch: () => void;
  searchValue: string;
  setSearchValue: (v: string) => void;
  locationLabel: string;
  onChangeLocation: () => void;
  onCreateListing: () => void;
}) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <Sidebar className="w-64 min-w-[240px] max-w-xs bg-white border-r">
      <SidebarHeader className="flex items-center space-x-3 p-4 pb-2">
        <ShoppingBag className="w-7 h-7 text-green-600" />
        <span className="text-xl font-bold tracking-tight">Marketplace</span>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-4 pb-4">
          <div className="relative mb-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
              placeholder="Search listings"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={e => e.key === "Enter" && onSearch()}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <Button variant="ghost" className="justify-start gap-2" size="sm"><Inbox className="w-4 h-4" />Inbox</Button>
            <Button variant="ghost" className="justify-start gap-2" size="sm"><ShoppingCart className="w-4 h-4" />Buying</Button>
            <Button variant="ghost" className="justify-start gap-2" size="sm"><Tag className="w-4 h-4" />Selling</Button>
            <Button variant="secondary" onClick={onCreateListing} className="justify-start gap-2 w-full" size="sm"><Plus className="w-4 h-4" />Create New Listing</Button>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{locationLabel}</span>
            </div>
            <Button variant="ghost" size="xs" className="text-xs px-2" onClick={onChangeLocation}>Change</Button>
          </div>
          <div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 w-full mb-2"
              onClick={() => setCategoriesOpen((b) => !b)}
            >
              <LayoutGrid className="w-4 h-4 text-gray-700" />
              Categories
            </Button>
            {categoriesOpen && (
              <div className="bg-gray-50 px-3 py-2 rounded-xl shadow-inner">
                <div className="mb-1 font-medium text-xs text-gray-600">Quick Links</div>
                <div className="flex flex-wrap gap-1 mb-2">
                  <Button variant="ghost" size="xs" className="gap-1"><MapPin className="w-4 h-4 text-blue-600" />Local Listings</Button>
                  <Button variant="ghost" size="xs" className="gap-1"><Users className="w-4 h-4 text-pink-600" />Buy & Sell Groups</Button>
                  <Button variant="ghost" size="xs" className="gap-1"><List className="w-4 h-4 text-green-600" />Sale Events</Button>
                  <Button variant="ghost" size="xs" className="gap-1"><Tag className="w-4 h-4 text-yellow-600" />Saved Items</Button>
                </div>
                <div className="mb-1 mt-2 font-semibold text-xs text-gray-600">Top Categories</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {topCategories.map(c => (
                    <Button variant="secondary" size="xs" key={c} className="rounded-full mb-1">{c}</Button>
                  ))}
                </div>
                <div className="mb-1 mt-2 font-semibold text-xs text-gray-600">All Categories</div>
                <ul className="max-h-40 overflow-auto pb-2 pr-1 text-xs">
                  {allCategories.map(c => (
                    <li key={c}>
                      <Button
                        variant="ghost"
                        size="xs"
                        className="block w-full justify-start whitespace-nowrap"
                      >{c}</Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
