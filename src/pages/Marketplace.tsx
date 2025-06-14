
import React, { useState } from "react";
import { CategoryMenu } from "../components/marketplace/CategoryMenu";
import { MarketplaceNavbar } from "../components/marketplace/MarketplaceNavbar";
import { DateLocationFilter } from "../components/marketplace/DateLocationFilter";
import { ProductList } from "../components/marketplace/ProductList";

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

  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 pt-8">
        <MarketplaceNavbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={() => {/* Implemented as filter on enter */}}
          onSell={() => alert("Listing form coming soon!")}
        />
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          <CategoryMenu onSelectCategory={cat => setCategory(cat)} />
          <span className="text-xs font-medium text-blue-700 opacity-60">
            {category ? `Category: ${category}` : ""}
          </span>
        </div>
        <DateLocationFilter
          dateLabel={dateLabel}
          onDateFilter={() => alert("Date filter coming soon!")}
          locationLabel={locationLabel}
          onLocationFilter={() => alert("Location filter coming soon!")}
        />
        <ProductList
          items={filtered}
          hasMore={false} // Only 3 items for now, no load more
          onLoadMore={() => {}}
        />
      </div>
    </div>
  );
}
