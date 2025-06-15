
import React, { useState } from "react";
import VideoFilters from "./VideoFilters";
import VideoCard from "./VideoCard";
import VideoPlayerModal from "./VideoPlayerModal";
import { videos, scholars, VideoCategory, Video } from "./videoDemoData";

const getScholar = (id: string) => scholars.find(s => s.id === id)!;

export default function VideoGrid() {
  const [activeCat, setActiveCat] = useState<VideoCategory | null>(null);
  const [modalVid, setModalVid] = useState<Video | null>(null);

  const vids = activeCat ? videos.filter(v => v.category === activeCat) : videos;
  const scholarMap = Object.fromEntries(scholars.map(s => [s.id, s]));

  const activeVideoScholar = modalVid ? getScholar(modalVid.scholarId) : null;
  const relatedVideos =
    modalVid
      ? videos
          .filter(
            v =>
              v.id !== modalVid.id &&
              (v.category === modalVid.category ||
                v.scholarId === modalVid.scholarId)
          )
          .slice(0, 5)
          .map(v => ({ video: v, scholar: getScholar(v.scholarId) }))
      : [];

  return (
    <section>
      <h2 className="font-extrabold text-xl md:text-2xl text-emerald-700 py-3 px-1">🎥 Islamic Videos</h2>
      <VideoFilters active={activeCat} onSelect={setActiveCat} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {vids.map(v => (
          <VideoCard
            key={v.id}
            video={v}
            scholar={scholarMap[v.scholarId]}
            onClick={() => setModalVid(v)}
          />
        ))}
      </div>
      {modalVid && activeVideoScholar && (
        <VideoPlayerModal
          video={modalVid}
          scholar={activeVideoScholar}
          related={relatedVideos}
          onClose={() => setModalVid(null)}
          onSelectRelated={v => setModalVid(v)}
          scholarOfWeek={modalVid.id === "vid1"}
        />
      )}
    </section>
  );
}
