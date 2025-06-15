
import React from "react";
import type { Video, Scholar } from "./videoDemoData";
import { PlayCircle } from "lucide-react";

export default function VideoCard({
  video,
  scholar,
  onClick,
}: {
  video: Video;
  scholar: Scholar;
  onClick: () => void;
}) {
  return (
    <div
      tabIndex={0}
      onClick={onClick}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && onClick()}
      aria-label={`Play ${video.title}`}
      className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg border bg-gradient-to-t from-emerald-50 to-white transition-transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 group"
      style={{ minHeight: 180 }}
    >
      {/* Thumbnail + Play overlay */}
      <div className="relative w-full aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative">
            <span className="absolute -inset-2 bg-emerald-100 rounded-full opacity-70 blur" />
            <PlayCircle
              size={54}
              className="text-emerald-600 z-10 drop-shadow-lg"
            />
            {/* subtle crescent moon behind play */}
            <span className="absolute right-0 top-0 w-5 h-5 bg-yellow-200 rounded-full opacity-55" style={{ filter: "blur(2px)" }} />
          </span>
        </div>
      </div>
      {/* Card info */}
      <div className="p-3 pt-2 space-y-1">
        <div className="flex items-center gap-2 text-xs">
          {scholar.verified && (
            <span title="Verified" className="text-emerald-600">✔️</span>
          )}
          <span className="font-semibold text-gray-700">{scholar.name}</span>
        </div>
        <div className="font-bold text-base text-gray-900 truncate">{video.title}</div>
        <div className="text-xs text-gray-500 line-clamp-2">{video.description}</div>
        <div className="flex flex-wrap gap-1 pt-0.5">
          {video.tags.map(t => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs">{t}</span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-emerald-700 font-semibold">{video.category}</span>
          <span className="text-xs font-mono text-gray-400">{video.duration}</span>
        </div>
      </div>
    </div>
  );
}
