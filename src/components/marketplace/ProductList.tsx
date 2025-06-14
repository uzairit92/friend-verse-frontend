
import React, { useState } from "react";
import { MarketplaceProductCard } from "./MarketplaceProductCard";

type Listing = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  seller: {
    name: string;
    avatar?: string;
    distance?: string;
  };
  date: string;
};

export function ProductList({
  items,
  hasMore,
  onLoadMore,
}: {
  items: Listing[];
  hasMore: boolean;
  onLoadMore: () => void;
}) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => (
          <MarketplaceProductCard item={item} key={item.id} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-4">
          <button
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
            onClick={onLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
