
import React from "react";
import VideoCard, { VideoType } from "./VideoCard";
import { VideoFilters, VIDEO_CATEGORIES } from "./VideoFilters";
import { scholars, getScholar } from "./Scholars";

const demoVideos: VideoType[] = [
  {
    id: "v1",
    title: "The Virtues of Salah",
    scholarId: "s1",
    duration: "11:32",
    description: "Discover the inner beauty and practical steps for perfecting your prayer.",
    tags: ["Salah", "Spirituality"],
    thumbnail: "/video-thumbs/salah.jpg",
    category: "Fiqh / Islamic Rulings",
    source: "youtube",
    videoUrl: "https://www.youtube.com/embed/xp1JTmDZ73o",
    references: ["Quran 2:43", "Hadith Sahih Bukhari"],
    language: "English"
  },
  {
    id: "v2",
    title: "Quran Recitation: Surah Rahman",
    scholarId: "s2",
    duration: "5:29",
    description: "Beautiful recitation with tajweed and meaning reflections.",
    tags: ["Quran", "Recitation"],
    thumbnail: "/video-thumbs/rahman.jpg",
    category: "Quran Recitation",
    source: "youtube",
    videoUrl: "https://www.youtube.com/embed/q8n3h3oM0S8",
    references: ["Quran 55"],
    language: "Arabic"
  },
  {
    id: "v3",
    title: "Building Character: Akhlaq in Daily Life",
    scholarId: "s4",
    duration: "10:07",
    description: "How to embody Islamic values in modern society.",
    tags: ["Akhlaq", "Character"],
    thumbnail: "/video-thumbs/akhlaq.jpg",
    category: "Character & Akhlaq",
    source: "youtube",
    videoUrl: "https://www.youtube.com/embed/akH-KQ-HTGw",
    references: ["Quran 33:21"],
    language: "English"
  },
  {
    id: "v4",
    title: "Islam & Mental Health",
    scholarId: "s3",
    duration: "14:53",
    description: "Practical mental wellness for Muslims. Guest Q&A at 8:00.",
    tags: ["Mental Health", "Q&A"],
    thumbnail: "/video-thumbs/mentalhealth.jpg",
    category: "Mental Health & Islam",
    source: "youtube",
    videoUrl: "https://www.youtube.com/embed/j_PCW9MFALw",
    references: ["Hadith Muslim 2564"],
    language: "English"
  },
  {
    id: "v5",
    title: "Ask a Scholar: Youth Issues",
    scholarId: "s2",
    duration: "7:18",
    description: "Live Q&A about youth, identity, and deen.",
    tags: ["Youth", "Q&A"],
    thumbnail: "/video-thumbs/youth.jpg",
    category: "Ask a Scholar (Q&A)",
    source: "youtube",
    videoUrl: "https://www.youtube.com/embed/MXGAG56q-sw",
    references: ["Quran 31:13-19"],
    language: "English"
  }
];

type Props = {
  activeCategory: string;
  onVideoSelect: (video: VideoType) => void;
};

const VideoGrid: React.FC<Props> = ({ activeCategory, onVideoSelect }) => {
  const filtered =
    activeCategory === "All"
      ? demoVideos
      : demoVideos.filter((v) => v.category === activeCategory);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
      {filtered.map((video, i) => (
        <VideoCard
          key={video.id}
          video={video}
          scholar={getScholar(video.scholarId)!}
          onClick={() => onVideoSelect(video)}
          showBadge={i === 0}
        />
      ))}
      {filtered.length === 0 && (
        <div className="col-span-full text-center text-emerald-700 p-8">
          No videos yet in this category.
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
