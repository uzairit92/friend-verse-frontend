
import React from "react";
import { VideoType } from "./VideoCard";
import { Scholar, getScholar } from "./Scholars";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, Youtube } from "lucide-react";
import clsx from "clsx";

type Props = {
  open: boolean;
  video: VideoType;
  onClose: () => void;
  related: VideoType[];
  onSelect: (v: VideoType) => void;
};

export default function VideoPlayerModal({
  open,
  video,
  onClose,
  related,
  onSelect,
}: Props) {
  if (!open) return null;
  const scholar = getScholar(video.scholarId)!;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center animate-fade-in"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div
        className="bg-white max-w-4xl w-full rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden relative"
        tabIndex={0}
      >
        {/* Main player/content */}
        <div className="flex-1 min-w-0 flex flex-col p-5 gap-3">
          <div className="flex justify-between items-start gap-2">
            <div className="flex gap-2 items-center">
              <img
                src={scholar.avatarUrl}
                alt={scholar.name}
                className="w-8 h-8 rounded-full border border-emerald-400"
              />
              <span className="font-semibold text-emerald-800">
                {scholar.name}
              </span>
              {scholar.verified && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              )}
              {video.id === "v1" && (
                <span className="ml-2 bg-amber-100 px-2 rounded-full text-xs text-amber-700 font-bold">
                  🌙 Scholar of the Week
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              className="rounded-full p-1 text-gray-500 hover:text-red-700"
              onClick={onClose}
              aria-label="Close video modal"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-emerald-100 rounded-xl overflow-hidden border">
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <h2 className="font-serif text-2xl font-bold text-emerald-900 mt-2">{video.title}</h2>
          <div className="flex flex-wrap gap-2">
            {video.tags.map((tag) => (
              <span key={tag} className="bg-amber-100 px-2 py-0.5 rounded-full text-xs text-amber-700 font-medium">
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mt-1">{video.description}</p>
          <div className="text-sm text-gray-500 mt-2">
            <span className="font-semibold">References: </span>
            {video.references.join(" • ")}
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" size="sm" className="gap-1">
              <Youtube className="w-4 h-4" /> Watch on YouTube
            </Button>
            <Button variant="default" size="sm" className="gap-1">
              Save for Later
            </Button>
            <Button variant="secondary" size="sm" className="gap-1">
              Add to Playlist
            </Button>
            <Button variant="ghost" size="sm" className="gap-1">
              Share
            </Button>
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="font-semibold text-emerald-800 mb-1">Comments</div>
            <div className="bg-gray-100 rounded-lg p-4 text-gray-500 text-sm text-center">
              💬 Comments and questions coming soon!
            </div>
          </div>
        </div>
        {/* Sidebar on desktop */}
        <aside className="hidden md:block w-64 border-l p-4 bg-gray-50">
          <h3 className="font-semibold mb-3 text-emerald-700 text-lg">
            Watch Next
          </h3>
          <div className="space-y-3">
            {related.length === 0 && (
              <div className="text-gray-500 text-sm">No related videos.</div>
            )}
            {related.map((v) => (
              <button
                key={v.id}
                className={clsx(
                  "flex gap-2 items-center rounded-xl p-2 w-full text-left transition hover:bg-emerald-100 group",
                  v.id === video.id && "opacity-60"
                )}
                onClick={() => v.id !== video.id && onSelect(v)}
                tabIndex={0}
                aria-label={`Watch next: ${v.title} by ${getScholar(v.scholarId)!.name}`}
                disabled={v.id === video.id}
              >
                <img
                  src={v.thumbnail}
                  className="w-16 h-10 rounded-lg object-cover border"
                  alt={v.title}
                />
                <div className="flex flex-col flex-1">
                  <span className="font-semibold text-sm text-emerald-900 line-clamp-1">{v.title}</span>
                  <span className="text-xs text-gray-700">{getScholar(v.scholarId)!.name}</span>
                </div>
                <span className="ml-auto text-xs bg-black/40 text-white px-1.5 rounded-sm">
                  {v.duration}
                </span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
