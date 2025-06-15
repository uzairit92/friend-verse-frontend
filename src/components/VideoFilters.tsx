
import React from "react";
import clsx from "clsx";

export const VIDEO_CATEGORIES = [
  "All",
  "Quran Recitation",
  "Tafsir / Hadith",
  "Fiqh / Islamic Rulings",
  "Character & Akhlaq",
  "Youth Topics / Marriage",
  "Parenting / Women",
  "Mental Health & Islam",
  "Ask a Scholar (Q&A)",
];

type Props = {
  active: string;
  onChange: (cat: string) => void;
};

export const VideoFilters: React.FC<Props> = ({ active, onChange }) => (
  <nav
    className="flex flex-wrap gap-2 my-5 animate-fade-in"
    aria-label="Video categories"
  >
    {VIDEO_CATEGORIES.map((cat) => (
      <button
        key={cat}
        className={clsx(
          "px-3 py-1.5 rounded-full font-semibold text-sm transition ring-2 ring-offset-1 shadow-sm focus-visible:ring-emerald-500",
          active === cat
            ? "bg-emerald-600 text-white ring-amber-400"
            : "bg-white text-emerald-700 hover:bg-emerald-100 hover-scale ring-emerald-200"
        )}
        onClick={() => onChange(cat)}
        aria-pressed={active === cat}
        tabIndex={0}
      >
        {cat}
      </button>
    ))}
  </nav>
);
