
import React from "react";

interface Props {
  current: "games" | "cartoons" | "arabic";
  onSelect: (tab: "games" | "cartoons" | "arabic") => void;
}

const options = [
  { key: "games", label: "Play Games", icon: "🎲" },
  { key: "cartoons", label: "Watch Cartoons", icon: "📺" },
  { key: "arabic", label: "Learn Arabic", icon: "🔠" },
] as const;

/**
 * Tab-switcher with playful design for Kids Zone
 */
export default function GamesTabs({ current, onSelect }: Props) {
  return (
    <div className="flex items-center justify-center font-bold mb-2 gap-2">
      {options.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onSelect(tab.key as any)}
          className={`flex items-center gap-2 px-5 py-2 rounded-full shadow transition
            ${current === tab.key
              ? "bg-pink-200 text-pink-900 scale-105"
              : "bg-gray-100 text-gray-500 hover:bg-yellow-100"}
             text-lg md:text-xl`}
          style={{
            fontFamily: "'Comic Sans MS', 'Comic Sans', cursive, sans-serif"
          }}
          aria-current={current === tab.key}
        >
          <span className="text-2xl">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
