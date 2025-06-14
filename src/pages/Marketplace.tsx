import React, { useState } from "react";
import { CategoryMenu } from "../components/marketplace/CategoryMenu";
import { MarketplaceNavbar } from "../components/marketplace/MarketplaceNavbar";
import { DateLocationFilter } from "../components/marketplace/DateLocationFilter";
import { ProductList } from "../components/marketplace/ProductList";
import { MarketplaceSidebar } from "../components/marketplace/MarketplaceSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const MOCK_LISTINGS = [
  {
    id: "1",
    title: "Halal Chicken – Fresh",
    price: 10,
    description: "Organic, locally sourced halal chicken. Pack of 2kg.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
    seller: { name: "Aysha", avatar: "", distance: "2 km" },
    date: "Today",
  },
  {
    id: "2",
    title: "Quran Tutor (Online)",
    price: 20,
    description: "Elementary to Advanced Quran lessons for children and adults.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
    seller: { name: "Ustadh Bilal", avatar: "", distance: "—" },
    date: "Yesterday",
  },
  {
    id: "3",
    title: "Modest Abaya – Black",
    price: 48,
    description: "Elegant flowing abaya, soft crepe fabric. Sizes S–XXL.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
    seller: { name: "Noor", avatar: "", distance: "5 km" },
    date: "3 days ago",
  },
  // ... add more sample items if desired
];

export default function Marketplace() {
  const [searchValue, setSearchValue] = useState("");
  const [listings, setListings] = useState(MOCK_LISTINGS);
  const [category, setCategory] = useState<string | null>(null);
  const [dateLabel, setDateLabel] = useState("Any date");
  const [locationLabel, setLocationLabel] = useState("Anywhere");

  // MVP: Only 3 items for now, "Load More" does nothing
  const filtered = listings.filter(
    (item) =>
      (!category || item.title.includes(category) || item.description.includes(category)) &&
      (!searchValue || item.title.toLowerCase().includes(searchValue.toLowerCase()))
  );

  const handleCreateListing = () => alert("Listing form coming soon!");
  const handleChangeLocation = () => alert("Location picker coming soon!");

  return (
    <SidebarProvider>
      {/* The sidebar trigger for mobile */}
      <div className="md:hidden border-b py-2 px-2 flex items-center gap-2">
        <SidebarTrigger className="shrink-0" />
        <span className="font-semibold text-lg tracking-tight">Marketplace</span>
      </div>
      <div className="flex w-full min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="hidden md:flex">
          <MarketplaceSidebar
            onSearch={() => {}} // Filtering is already live on input
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            locationLabel={locationLabel}
            onChangeLocation={handleChangeLocation}
            onCreateListing={handleCreateListing}
          />
        </div>
        {/* Main Content */}
        <main className="flex-1 px-2 sm:px-4 pt-8 pb-8">
          {/* ... reuse actual Marketplace layout: navbar, categories, filter, productlist ... */}
          {/* You can optionally remove duplicate UI elements present in the sidebar */}
          <div className="max-w-5xl mx-auto">
            <div className="hidden md:block h-6" />
            {/* Remove MarketplaceNavbar and CategoryMenu if desired since now in sidebar */}
            {/* Date/location filter and product list remain visible */}
            <div className="mb-6">
              {/* Date/location filter stuck at top for simplicity */}
              <div className="flex flex-wrap gap-2 items-center">
                {/* Optionally render remaining filter controls here */}
                {/* Or move their controls into the sidebar for a single vertical stack */}
              </div>
              {/* Date & location filter remains as-is for now */}
              <DateLocationFilter
                dateLabel={dateLabel}
                onDateFilter={() => alert("Date filter coming soon!")}
                locationLabel={locationLabel}
                onLocationFilter={() => alert("Location filter coming soon!")}
              />
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-4">Listings</h2>
              {/* ProductList is filtered by searchValue + category as before */}
              <ProductList
                items={filtered}
                hasMore={false}
                onLoadMore={() => {}}
              />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
