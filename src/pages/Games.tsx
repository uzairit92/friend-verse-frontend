
import React from "react";
import { gamepad } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-50 px-0 pb-12">
      {/* Hero */}
      <div className="py-8 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-200 to-blue-300 flex items-center justify-center shadow-lg mb-3 animate-bounce">
          {/* Use gamepad (lucide-react) as SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 20v-2M18 20v-2M2 14v-3.2a2 2 0 011.21-1.81A9.96 9.96 0 0112 6a9.96 9.96 0 018.79 2.99A2 2 0 0122 10.8V14a4 4 0 01-4 4H6a4 4 0 01-4-4ZM8.5 16v-1M15.5 16v-1M9 10h.01M15 10h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
            <Button 
              variant="secondary" 
              className="w-full max-w-[180px] text-lg bg-pink-200 text-pink-800 font-bold rounded-full py-2 active:scale-95"
              disabled // Game not yet implemented
            >
              Coming Soon!
            </Button>
          </div>
        ))}
      </div>
      {/* Optional: add navigation for "Watch Cartoons", "Learn Arabic", etc. in the future */}
    </div>
  );
};

export default GamesLanding;
