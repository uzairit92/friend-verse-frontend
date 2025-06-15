
import React from "react";
import type { VideoCategory } from "./videoDemoData";

const categories: VideoCategory[] = [
  "Quran Recitation",
  "Tafsir / Hadith",
  "Fiqh / Islamic Rulings",
  "Character & Akhlaq",
  "Youth Topics / Marriage",
  "Parenting / Women",
  "Mental Health & Islam",
  "Ask a Scholar (Q&A)",
];

export default function VideoFilters({
  active,
  onSelect,
}: {
  active: VideoCategory | null;
  onSelect: (v: VideoCategory | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 py-2 px-1 mb-3">
      <button
        className={`rounded-full px-4 py-2 font-semibold text-sm border transition shadow
          ${active === null
            ? "bg-emerald-500 text-white"
            : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"}
        `}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`rounded-full px-4 py-2 font-semibold text-sm border transition shadow
            ${active === cat
              ? "bg-emerald-500 text-white"
              : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-100"}
          `}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
