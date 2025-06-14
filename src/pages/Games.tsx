
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SalahTimeMatching from "../games/SalahTimeMatching"; // new game component

const games = [
  {
    key: "wudu",
    title: "Wudu Steps Drag & Drop",
    desc: "Learn the steps of wudu in order! Drag and drop each step to its place.",
    icon: "🧼"
  },
  {
    key: "salah",
    title: "Salah Time Matching",
    desc: "Match the prayer names to their correct times with cheerful sun and moon icons.",
    icon: "🕌"
  },
  {
    key: "prophet-puzzle",
    title: "Prophet Stories Puzzle",
    desc: "Solve picture puzzles and unlock short Prophet stories.",
    icon: "🧩"
  },
  {
    key: "find-moon",
    title: "Find the Ramadan Moon",
    desc: "Hunt for the Hilal and discover Ramadan secrets.",
    icon: "🌙"
  },
  {
    key: "dua-balloon",
    title: "Dua Balloon Pop",
    desc: "Pop balloons in the right order to learn and hear short Duas.",
    icon: "🎈"
  },
  {
    key: "abc-catch",
    title: "Arabic Letter Catch",
    desc: "Catch the falling letters and hear the sounds! Learn Alif to Ya.",
    icon: "🔠"
  },
];

const GamesLanding = () => {
  const [showSalahGame, setShowSalahGame] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-50 px-0 pb-12">
      {/* Hero */}
      <div className="py-8 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-200 to-blue-300 flex items-center justify-center shadow-lg mb-3 animate-bounce">
          {/* Cute kids game controller SVG or emoji */}
          <span className="text-4xl">🎮</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-[Comic Sans MS,cursive,sans-serif] text-pink-700 mb-2">Welcome to the Kids Zone!</h1>
        <div className="text-lg md:text-xl font-semibold text-blue-700 mb-3">Games & Animation</div>
        <div className="text-md md:text-lg text-gray-700 mb-2 max-w-xl">Fun, games, colors, stories and learning for young Muslims (Ages 4–10)</div>
      </div>
      {/* Game Cards */}
      <div className="grid gap-6 px-2 md:px-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {games.map((game) => (
          <div key={game.key} className="bg-white rounded-2xl shadow-lg border hover:shadow-pink-200 p-5 flex flex-col items-center animate-fade-in transition-transform hover:scale-105">
            <div className="text-4xl md:text-5xl mb-2 p-2">{game.icon}</div>
            <div className="font-bold text-lg text-pink-600 mb-1">{game.title}</div>
            <div className="text-gray-700 text-sm mb-4 text-center">{game.desc}</div>
            {game.key === "salah" ? (
              <Button 
                variant="secondary"
                className="w-full max-w-[180px] text-lg bg-pink-200 text-pink-800 font-bold rounded-full py-2 active:scale-95"
                onClick={() => setShowSalahGame(true)}
              >
                Play Now!
              </Button>
            ) : (
              <Button 
                variant="secondary" 
                className="w-full max-w-[180px] text-lg bg-pink-200 text-pink-800 font-bold rounded-full py-2 active:scale-95"
                disabled
              >
                Coming Soon!
              </Button>
            )}
          </div>
        ))}
      </div>
      {/* Salah Game Modal */}
      {showSalahGame && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center" onClick={() => setShowSalahGame(false)}>
          <div className="bg-white rounded-xl p-3 md:p-6 shadow-2xl min-w-[90vw] max-w-lg mx-auto relative" onClick={e => e.stopPropagation()}>
            <button
              className="absolute right-2 top-2 text-xl text-gray-400 hover:text-pink-500 font-bold rounded-full"
              onClick={() => setShowSalahGame(false)}
              aria-label="Close"
            >
              ×
            </button>
            <SalahTimeMatching />
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesLanding;
