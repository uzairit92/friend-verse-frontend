import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SalahTimeMatching from "../games/SalahTimeMatching";
// New components
import GamesTabs from "./GamesTabs";
import RewardCounter from "./RewardCounter";

const GamesLanding = () => {
  // Modal for Salah Game
  const [showSalahGame, setShowSalahGame] = useState(false);
  // MVP: All other games "disabled" but visually present
  const games = [
    {
      key: "wudu",
      title: "Wudu Wash Adventure",
      desc: "Drag Wudu steps to the correct order!",
      icon: "🧼",
      comingSoon: true,
      bg: "from-blue-200 to-blue-100"
    },
    {
      key: "salah",
      title: "Salah Time Matching",
      desc: "Match prayer names to their correct time!",
      icon: "🕌",
      bg: "from-pink-200 to-yellow-100",
      playable: true,
    },
    {
      key: "prophet-puzzle",
      title: "Prophet Stories Puzzle",
      desc: "Solve puzzle & hear a Prophet story.",
      icon: "🧩",
      comingSoon: true,
      bg: "from-green-200 to-yellow-100"
    },
    {
      key: "find-moon",
      title: "Find the Ramadan Moon",
      desc: "Spot the new moon, learn Ramadan facts.",
      icon: "🌙",
      comingSoon: true,
      bg: "from-indigo-200 to-blue-100"
    },
    {
      key: "dua-balloon",
      title: "Dua Balloon Pop",
      desc: "Pop balloons in the right Dua order!",
      icon: "🎈",
      comingSoon: true,
      bg: "from-pink-200 to-orange-100"
    },
    {
      key: "abc-catch",
      title: "Arabic Letter Catch",
      desc: "Catch falling Arabic letters from Alif to Ya.",
      icon: "🔠",
      comingSoon: true,
      bg: "from-yellow-200 to-green-100"
    },
  ];

  // List of cartoon video thumbnails (placeholder)
  const cartoonVideos = [
    {
      title: "Prophet Yunus & The Whale",
      url: "https://www.youtube.com/embed/omDsY_8UPEE",
      thumb: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=340&q=80",
      length: "2:15"
    },
    {
      title: "Why We Say Bismillah",
      url: "https://www.youtube.com/embed/MuqvDGoVzDU",
      thumb: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=340&q=80",
      length: "3:30"
    },
  ];

  // Learn Arabic (placeholder)
  const learnArabic = [
    { letter: "ا", sound: "Alif", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=340&q=80" },
    { letter: "ب", sound: "Ba", img: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=340&q=80" }
  ];

  // Tab state
  const [tab, setTab] = useState<"games" | "cartoons" | "arabic">("games");

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-100 px-0 pb-14">
        {/* Hero Banner */}
        <div className="relative flex flex-col items-center py-7 px-2 mb-2">
          {/* Fun cartoon elements */}
          <div className="absolute left-4 top-1 animate-bounce">
            <span className="text-4xl drop-shadow">⭐️</span>
          </div>
          <div className="absolute right-8 top-10 animate-pulse">
            <span className="text-4xl">🌙</span>
          </div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-b from-yellow-200 to-pink-200 flex items-center justify-center shadow-lg mb-3">
            <span className="text-5xl animate-bounce">🎮</span>
          </div>
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-1 text-pink-700"
            style={{
              fontFamily: "'Comic Sans MS', 'Comic Sans', cursive, sans-serif"
            }}
          >
            Welcome to the Kids Zone!
          </h1>
          <div className="text-lg md:text-xl font-bold text-blue-700 mb-2">Games & Animation</div>
          <div className="text-md text-gray-700 mb-3 max-w-xl mx-auto">
            Fun, games, colors, stories and learning for young Muslims (Ages 4–10)
          </div>
          <RewardCounter stars={3} /> {/* Placeholder: 3 stars out of goal */}
        </div>
        {/* Tabs */}
        <GamesTabs current={tab} onSelect={setTab} />
        {/* Tab content */}
        <div className="mt-1">
          {/* Play Games tab */}
          {tab === "games" && (
            <div className="grid gap-6 px-2 md:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-6">
              {/* MVP: Salah Time is playable - others are disabled, but visually styled */}
              {games.map((game) => (
                <div
                  key={game.key}
                  className={`bg-gradient-to-br ${game.bg} rounded-2xl shadow-xl border hover:shadow-pink-200 p-5 flex flex-col items-center animate-fade-in transition-transform hover:scale-105`}
                >
                  <div className="text-5xl mb-3 drop-shadow">{game.icon}</div>
                  <div className="font-extrabold text-lg text-pink-700 mb-1">{game.title}</div>
                  <div className="text-gray-800 text-base mb-3 text-center min-h-[38px]">{game.desc}</div>
                  {game.playable ? (
                    <button
                      className="w-full max-w-[180px] text-lg bg-pink-300 text-white font-bold rounded-full py-2 active:scale-95 shadow-md mb-1"
                      onClick={() => setShowSalahGame(true)}
                    >
                      Play Now!
                    </button>
                  ) : (
                    <button
                      className="w-full max-w-[180px] text-lg bg-gray-200 text-gray-400 font-bold rounded-full py-2 mb-1 cursor-not-allowed"
                      disabled
                    >
                      Coming Soon!
                    </button>
                  )}
                  {game.comingSoon && (
                    <div className="mt-1 text-md text-yellow-700 font-bold flex items-center gap-1 animate-pulse">
                      <span className="text-lg">⭐</span> Coming soon
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Cartoons tab */}
          {tab === "cartoons" && (
            <div className="flex flex-wrap items-center justify-center gap-8 px-4 py-4">
              {cartoonVideos.map((vid) => (
                <div
                  key={vid.title}
                  className="w-full max-w-xs rounded-2xl bg-white shadow-lg border hover:shadow-blue-100 flex flex-col items-center p-3 transition-transform hover:scale-105 animate-fade-in"
                >
                  <div className="w-full h-36 rounded-lg overflow-hidden mb-2">
                    <img
                      src={vid.thumb}
                      alt={vid.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-blue-700 font-bold mb-1">{vid.title}</div>
                  <div className="mb-2 text-sm text-gray-500">{vid.length} (YouTube)</div>
                  <a
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[150px] text-base font-bold bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-2 text-center transition"
                  >
                    Watch
                  </a>
                </div>
              ))}
            </div>
          )}
          {/* Learn Arabic tab */}
          {tab === "arabic" && (
            <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
              {learnArabic.map((item) => (
                <div
                  key={item.letter}
                  className="w-28 h-40 bg-gradient-to-br from-yellow-100 to-green-100 rounded-2xl flex flex-col items-center justify-center p-2 shadow-md"
                  style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
                >
                  <div className="text-4xl mb-2">{item.letter}</div>
                  <div className="text-lg text-pink-700 font-bold pb-0.5">{item.sound}</div>
                  <div className="w-16 h-16 mt-2 mb-0 rounded-full overflow-hidden flex items-center justify-center bg-white shadow">
                    <img src={item.img} alt={item.sound} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
              {/* More to come: audio, games, animated letters */}
            </div>
          )}
        </div>
        {/* Salah Game Modal */}
        {showSalahGame && (
          <div
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
            onClick={() => setShowSalahGame(false)}
          >
            <div
              className="bg-white rounded-xl p-3 md:p-6 shadow-2xl min-w-[90vw] max-w-lg mx-auto relative"
              onClick={e => e.stopPropagation()}
            >
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
    </PageLayout>
  );
};

export default GamesLanding;
