
import React from "react";
import { MapPin } from "lucide-react";

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

export function MarketplaceProductCard({ item }: { item: Listing }) {
  return (
    <div className="rounded-xl border bg-white shadow hover:shadow-lg transition relative overflow-hidden flex flex-col">
      <img
        src={item.image}
        alt={item.title}
        className="object-cover w-full h-40 sm:h-52"
        loading="lazy"
      />
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg truncate">{item.title}</h3>
        <div className="font-bold text-green-700 mt-1">${item.price.toLocaleString()}</div>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{item.description}</p>
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
          {item.seller.avatar
            ? <img src={item.seller.avatar} alt={item.seller.name} className="w-6 h-6 rounded-full object-cover" />
            : <span className="bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center">{item.seller.name.charAt(0)}</span>
          }
          <span>{item.seller.name}</span>
          {item.seller.distance && (
            <>
              <MapPin className="inline-block w-4 h-4 ml-2 text-blue-400" />
              <span>{item.seller.distance}</span>
            </>
          )}
          <span className="ml-auto">{item.date}</span>
        </div>
      </div>
    </div>
  );
}
