
import React, { useState } from "react";

// Simple data
const prayers = [
  { name: "Fajr", arabic: "الفجر", icon: "🌅", time: "Sunrise" },
  { name: "Dhuhr", arabic: "الظهر", icon: "☀️", time: "Noon" },
  { name: "Asr", arabic: "العصر", icon: "🌇", time: "Afternoon" },
  { name: "Maghrib", arabic: "المغرب", icon: "🌆", time: "Sunset" },
  { name: "Isha", arabic: "العشاء", icon: "🌙", time: "Night" },
];

// Sun/Moon position icons for times
const times = [
  { label: "Sunrise", icon: "🌅" },
  { label: "Noon", icon: "☀️" },
  { label: "Afternoon", icon: "🌇" },
  { label: "Sunset", icon: "🌆" },
  { label: "Night", icon: "🌙" },
];

// Shuffle helper
function shuffle(arr: any[]) {
  return [...arr].sort(() => 0.5 - Math.random());
}

const SalahTimeMatching = () => {
  const [shuffledPrayers, setShuffledPrayers] = useState(shuffle(prayers));
  const [matches, setMatches] = useState<{ [key: string]: string }>({});
  const [draggedPrayer, setDraggedPrayer] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  function handleDragStart(prayer: string) {
    setDraggedPrayer(prayer);
  }

  function handleDrop(time: string) {
    if (draggedPrayer) {
      setMatches((prev) => {
        const newMatches = { ...prev, [draggedPrayer]: time };
        // Check if completed
        if (Object.keys(newMatches).length === prayers.length && 
          prayers.every((p) => newMatches[p.name] === p.time)) {
          setTimeout(() => setCompleted(true), 200);
        }
        return newMatches;
      });
      setDraggedPrayer(null);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function restart() {
    setShuffledPrayers(shuffle(prayers));
    setMatches({});
    setCompleted(false);
  }

  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-700 text-center">🕌 Salah Time Matching</h2>
      <div className="mb-4 text-center text-pink-600 font-bold">
        Drag the prayer to its correct time!
      </div>
      {completed && (
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4 flex flex-col items-center animate-bounce">
          <span className="text-3xl mb-1">🌟 Masha’Allah!</span>
          <span className="font-semibold text-green-700 mb-2">You matched all prayers correctly!</span>
          <Button className="bg-pink-400 text-white rounded-full" onClick={restart}>
            Play Again
          </Button>
        </div>
      )}
      <div className="md:flex md:space-x-6">
        {/* Draggable prayers list */}
        <div className="flex flex-col space-y-3 mb-6 md:mb-0 md:w-1/2">
          <div className="font-semibold mb-1 text-center">Prayers</div>
          {shuffledPrayers.map((prayer) => (
            <div
              key={prayer.name}
              draggable={!completed && !matches[prayer.name]}
              onDragStart={() => handleDragStart(prayer.name)}
              className={`rounded-lg px-3 py-2 text-lg flex items-center gap-2 shadow cursor-move select-none bg-blue-50 border border-blue-100 
                ${matches[prayer.name] ? "opacity-50 line-through" : "hover:bg-blue-100"}`}
            >
              <span className="text-2xl">{prayer.icon}</span>
              <span className="font-bold">{prayer.name}</span>
              <span className="text-md text-gray-500 ml-2">{prayer.arabic}</span>
            </div>
          ))}
        </div>
        {/* Dropzones for times */}
        <div className="flex flex-col space-y-3 md:w-1/2">
          <div className="font-semibold mb-1 text-center">Times</div>
          {times.map((time) => (
            <div
              key={time.label}
              onDrop={() => handleDrop(time.label)}
              onDragOver={handleDragOver}
              className={`rounded-lg px-3 py-2 bg-pink-50 flex items-center gap-2 shadow border border-pink-200 min-h-[48px]
                ${Object.values(matches).includes(time.label) ? "opacity-50" : "hover:bg-pink-100"}
                ${completed ? "cursor-default" : "cursor-pointer"}`}
            >
              <span className="text-2xl">{time.icon}</span>
              <span className="font-bold">{time.label}</span>
              {/* Show matched prayer */}
              {Object.entries(matches).find(([_, t]) => t === time.label) && (
                <span className="ml-auto text-md text-green-700 font-bold flex items-center gap-1">
                  ✓ {Object.entries(matches).find(([_, t]) => t === time.label)?.[0]}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalahTimeMatching;
