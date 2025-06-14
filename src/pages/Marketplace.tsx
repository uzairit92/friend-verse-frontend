
import React from "react";

const CATEGORIES = [
  "Books",
  "Clothing",
  "Services",
  "Education",
  "Food",
  "Other"
];

export default function Marketplace() {
  return (
    <div className="min-h-screen py-16 bg-[url('/placeholder.svg')] bg-top bg-no-repeat bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Calligraphy-style Header */}
        <h1
          className="text-4xl font-bold mb-2 text-center"
          style={{ fontFamily: "'Noto Nastaliq Urdu',serif" }}
        >
          Marketplace
        </h1>
        <p className="mb-8 text-center text-gray-500">
          Discover & list halal products and services
        </p>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1 rounded-full border bg-white text-sm font-medium text-gray-700 cursor-pointer hover:bg-blue-100 transition"
            >
              {cat}
            </span>
          ))}
        </div>
        {/* Placeholder Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-52 bg-white rounded-xl shadow border flex flex-col items-center justify-center text-gray-400"
            >
              <span className="text-4xl">📦</span>
              <span className="mt-2">Coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
