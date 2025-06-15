
import { ReactNode } from "react";

export type Scholar = {
  id: string;
  name: string;
  avatarUrl: string;
  verified: boolean;
  bio: string;
  specialty: string;
  language: string;
};

export const scholars: Scholar[] = [
  {
    id: "s1",
    name: "Dr. Amina Yusuf",
    avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg",
    verified: true,
    bio: "Expert in Tafsir, Hadith, and youth mentorship.",
    specialty: "Tafsir, Hadith",
    language: "English"
  },
  {
    id: "s2",
    name: "Imam Kareem Abdul",
    avatarUrl: "https://randomuser.me/api/portraits/men/44.jpg",
    verified: true,
    bio: "Islamic jurisprudence & fiqh specialist.",
    specialty: "Fiqh, Family Law",
    language: "English"
  },
  {
    id: "s3",
    name: "Ustadha Laila Rahman",
    avatarUrl: "https://randomuser.me/api/portraits/women/50.jpg",
    verified: true,
    bio: "Mental health educator & community leader.",
    specialty: "Mental Health, Self-Development",
    language: "English"
  },
  {
    id: "s4",
    name: "Shaykh Hasan Moin",
    avatarUrl: "https://randomuser.me/api/portraits/men/33.jpg",
    verified: true,
    bio: "Renowned in Akhlaq and parenting topics.",
    specialty: "Ethics, Parenting",
    language: "English"
  },
];

export function getScholar(id: string): Scholar | undefined {
  return scholars.find((s) => s.id === id);
}
