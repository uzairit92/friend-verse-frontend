
export type Scholar = {
  id: string;
  name: string;
  avatarUrl: string;
  verified: boolean;
  bio: string;
  specialty: string;
};

export type VideoCategory =
  | "Quran Recitation"
  | "Tafsir / Hadith"
  | "Fiqh / Islamic Rulings"
  | "Character & Akhlaq"
  | "Youth Topics / Marriage"
  | "Parenting / Women"
  | "Mental Health & Islam"
  | "Ask a Scholar (Q&A)";

export type Video = {
  id: string;
  title: string;
  scholarId: string;
  duration: string;
  description: string;
  tags: string[];
  thumbnail: string;
  category: VideoCategory;
  source: "youtube" | "vimeo" | "upload";
  videoUrl: string;
  references: string[];
};

export const scholars: Scholar[] = [
  {
    id: "scholar1",
    name: "Imam Ahmed Musa",
    avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    verified: true,
    bio: "Renowned Quran teacher and motivational speaker.",
    specialty: "Quran Recitation"
  },
  {
    id: "scholar2",
    name: "Sr. Aisha Rahman",
    avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    verified: true,
    bio: "Expert in Islamic character-building for children.",
    specialty: "Character & Akhlaq"
  },
];

export const videos: Video[] = [
  {
    id: "vid1",
    title: "Beautiful Surah Al-Fatiha Recitation",
    scholarId: "scholar1",
    duration: "2:12",
    description: "Listen to a heartwarming and clear recitation of Surah Al-Fatiha for kids.",
    tags: ["Beginner", "Quran", "Recitation"],
    thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=340&q=80",
    category: "Quran Recitation",
    source: "youtube",
    videoUrl: "https://www.youtube.com/embed/iZbR9hZ1D2Q",
    references: ["Quran 1:1-7"],
  },
  {
    id: "vid2",
    title: "Good Manners in Islam",
    scholarId: "scholar2",
    duration: "3:15",
    description: "Short lesson on respect & kindness based on Prophet Muhammad's teachings.",
    tags: ["Akhlaq", "Manners", "Kids"],
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=340&q=80",
    category: "Character & Akhlaq",
    source: "youtube",
    videoUrl: "https://www.youtube.com/embed/w1v45dAdA8g",
    references: ["Hadith: Muslim #34"],
  },
  {
    id: "vid3",
    title: "Fiqh: How to Make Wudu",
    scholarId: "scholar1",
    duration: "4:05",
    description: "A fun illustrated guide to making Wudu correctly.",
    tags: ["Wudu", "Fiqh", "Cleanliness"],
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=340&q=80",
    category: "Fiqh / Islamic Rulings",
    source: "youtube",
    videoUrl: "https://www.youtube.com/embed/kz2hCrPWFzQ",
    references: ["Quran 5:6"],
  },
];
