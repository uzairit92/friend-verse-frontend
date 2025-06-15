
import React from "react";
import type { Video, Scholar } from "./videoDemoData";
import { X, Youtube, Share2, Bookmark, ListPlus } from "lucide-react";

export default function VideoPlayerModal({
  video,
  scholar,
  related,
  onClose,
  onSelectRelated,
  scholarOfWeek,
}: {
  video: Video,
  scholar: Scholar,
  related: { video: Video; scholar: Scholar; }[];
  onClose: () => void;
  onSelectRelated: (v: Video) => void;
  scholarOfWeek?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2">
      <div
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-auto animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Main video */}
        <div className="flex-1 p-4 min-w-0 flex flex-col">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-300 hover:text-emerald-500 text-2xl"
            aria-label="Close"
          > <X /> </button>
          <div className="aspect-video rounded-xl overflow-hidden mb-2 shadow bg-black/60 flex items-center justify-center">
            <iframe
              src={video.videoUrl}
              className="w-full h-full min-h-[220px] rounded-xl border"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img src={scholar.avatarUrl} alt={scholar.name} className="w-8 h-8 rounded-full border" />
            <div>
              <div className="flex items-center gap-1 text-base font-bold text-emerald-700">
                {scholar.name}
                {scholar.verified && <span className="ml-1 text-xs bg-emerald-500 text-white px-2 rounded-full">Verified</span>}
                {scholarOfWeek && <span className="ml-2 px-2 py-0.5 rounded-full bg-amber-300 text-yellow-800 text-xs font-bold">Scholar of the Week</span>}
              </div>
              <div className="text-sm text-gray-500">{scholar.specialty}</div>
            </div>
          </div>
          <h2 className="font-bold text-xl mb-2">{video.title}</h2>
          <div className="text-gray-800 mb-2 text-base">{video.description}</div>
          <div className="flex flex-wrap gap-2 mb-1">
            {video.tags.map(tag => (
              <span key={tag} className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-700 text-xs">{tag}</span>
            ))}
          </div>
          <div className="mb-2 text-xs text-gray-400 flex gap-1 flex-wrap">
            {video.references.map(ref => (
              <span key={ref} className="px-2 py-0.5">{ref}</span>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <button className="bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold shadow hover:bg-emerald-200">
              <Share2 size={16} /> Share
            </button>
            <button className="bg-amber-100 text-amber-700 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold shadow hover:bg-amber-200">
              <Bookmark size={16} /> Save
            </button>
            <button className="bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold shadow hover:bg-emerald-100">
              <ListPlus size={16} /> Playlist
            </button>
            {video.source === "youtube" && (
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer"
                className="ml-2 bg-red-100 text-red-700 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold hover:bg-red-200"
              ><Youtube size={16} /> Watch on YouTube</a>
            )}
          </div>
          <div className="mt-6 mb-2 border-t pt-2 text-gray-400 text-xs italic">
            Comments & discussion (Coming soon)
          </div>
        </div>
        {/* Related Videos (desktop only) */}
        <div className="hidden md:block w-64 border-l bg-emerald-50/40 p-3 overflow-y-auto min-h-[400px]">
          <div className="font-bold text-emerald-700 mb-2">Watch Next</div>
          <div className="space-y-3">
            {related.map(({ video: rv, scholar: rsch }) => (
              <div
                key={rv.id}
                className="flex gap-2 items-center cursor-pointer hover:bg-emerald-100 rounded-lg p-2"
                onClick={() => onSelectRelated(rv)}
              >
                <img src={rv.thumbnail} alt={rv.title} className="w-12 h-8 rounded-md object-cover" />
                <div>
                  <div className="text-sm font-semibold text-gray-800 truncate">{rv.title}</div>
                  <div className="text-xs text-gray-500">{rsch.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
