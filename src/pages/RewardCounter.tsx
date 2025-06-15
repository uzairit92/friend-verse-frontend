
import React from "react";

/**
 * Visual star counter for rewards/achievements (MVP static only)
 */
export default function RewardCounter({ stars = 0 }: { stars?: number }) {
  const goal = 3;
  return (
    <div className="flex items-center gap-2 mb-2 mt-2">
      <span className="font-bold text-yellow-700 text-lg">Daily Goal:</span>
      <span className="flex gap-1 text-2xl" aria-label="Stars">
        {[...Array(goal)].map((_, idx) => (
          <span
            key={idx}
            className={`${idx < stars ? "text-yellow-400 animate-bounce" : "text-gray-300"}`}
            role="img"
          >
            ⭐
          </span>
        ))}
      </span>
      <span className="ml-2 text-base font-semibold text-green-700">Earn 3 stars today!</span>
    </div>
  );
}
