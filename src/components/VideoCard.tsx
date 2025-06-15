
import React from "react";
import { Scholar } from "./Scholars";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

export type VideoType = {
  id: string;
  title: string;
  scholarId: string;
  duration: string;
  description: string;
  tags: string[];
  thumbnail: string;
  category: string;
  source: string;
  videoUrl: string;
  references: string[];
  language: string;
};

type Props = {
  video: VideoType;
  scholar: Scholar;
  onClick: () => void;
  showBadge?: boolean; // "Scholar of the Week"
};

const VideoCard: React.FC<Props> = ({
  video,
  scholar,
  onClick,
  showBadge = false
}) => {
  return (
    <button
      className={clsx(
        "group relative rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-[1.03] hover:shadow-2xl transition transform focus-visible:outline-2 focus-visible:ring-2 ring-emerald-600 cursor-pointer",
        "flex flex-col text-left"
      )}
      aria-label={`Watch: ${video.title} by ${scholar.name}`}
      onClick={onClick}
      tabIndex={0}
    >
      {/* Video Thumbnail */}
      <div className="relative h-40 w-full flex-shrink-0 bg-gradient-to-br from-emerald-100 to-yellow-50">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="absolute inset-0 object-cover w-full h-full transition group-hover:brightness-90"
        />
        {/* Duration Badge */}
        <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-md z-20 font-semibold shadow">
          {video.duration}
        </span>
        {/* Custom Play Icon Overlay */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="relative w-14 h-14 flex items-center justify-center bg-white/50 rounded-full shadow-lg group-hover:scale-110 transition hover-scale animate-pulse">
            {/* Crescent shape */}
            <span className="absolute w-12 h-12 rounded-full bg-yellow-200 -left-2 top-2 blur-sm z-0" />
            <span className="z-10">
              <svg fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-emerald-700">
                <circle cx="16" cy="16" r="16" fill="#fffbe5" />
                <path
                  d="M12 16c0-4 3.5-7.5 7.5-7.5.5 0 1 .1 1.5.2C19.3 9 17.5 8 15.5 8 11.4 8 8 11.4 8 15.5c0 4 3.5 7.5 7.5 7.5 2 0 3.8-1 5-2.7-.5.1-1 .2-1.5.2-4 0-7.5-3.5-7.5-7.5z"
                  fill="#f7be38"
                />
                <polygon
                  points="14,12 22,16 14,20"
                  fill="#059669"
                />
              </svg>
            </span>
          </span>
        </span>
        {/* Scholar of the Week */}
        {showBadge && (
          <span className="absolute left-2 top-2 bg-amber-400 text-emerald-900 font-bold px-3 py-1 rounded-full shadow text-xs z-30">
            🌙 Scholar of the Week
          </span>
        )}
      </div>
      {/* Card Content */}
      <div className="flex flex-col flex-1 p-3 pt-2 space-y-1">
        <div className="flex items-center gap-2">
          <img
            src={scholar.avatarUrl}
            alt={scholar.name}
            className="w-8 h-8 rounded-full border-2 border-emerald-300 object-cover"
          />
          <span className="font-medium text-gray-800 text-[15px]">
            {scholar.name}
          </span>
          {scholar.verified && (
            <CheckCircle2 className="w-4 h-4 text-emerald-500" title="Verified" />
          )}
        </div>
        <h3 className="font-serif text-lg font-bold text-emerald-900 truncate">{video.title}</h3>
        <p className="text-sm text-gray-700 line-clamp-2 mb-1">{video.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="bg-amber-100 px-2 py-0.5 rounded-full text-xs text-amber-700 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default VideoCard;
