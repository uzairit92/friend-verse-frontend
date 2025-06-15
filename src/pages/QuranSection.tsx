
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookmarkPlus, BookOpen, GraduationCap, Layers, BadgeCheck, Calendar } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

// Dummy display progress, saved state etc.
const savedCourses = [
  { title: "Level 2 – Tajweed Essentials", status: "In Progress" },
  { title: "Phase 1 – Core Islamic Studies", status: "New" }
];
const progress = {
  percent: 42,
  next: "Level 3 – 30 Juz with Tajweed"
};

export default function QuranSection() {
  const [activeTab, setActiveTab] = useState("quran");

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap gap-2 w-full justify-start mb-4 bg-gray-100">
          <TabsTrigger value="quran" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-500" />
            Quran Learning
          </TabsTrigger>
          <TabsTrigger value="scholar" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-green-600" />
            Scholar Path
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <BookmarkPlus className="w-4 h-4 text-yellow-500" />
            Saved
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-violet-600" />
            My Progress
          </TabsTrigger>
        </TabsList>

        {/* Quran Learning Cards */}
        <TabsContent value="quran" className="grid gap-5 sm:grid-cols-2">
          {/* Noorani Qaida */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <span className="text-blue-600">Level 1 – Noorani Qaida</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><b className="text-xs bg-blue-100 rounded px-2 py-0.5">2–3 months</b></p>
              <ul>
                <li>• Letter recognition, vowels, pronunciation</li>
              </ul>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">Start Course</button>
            </CardContent>
          </Card>
          {/* Tajweed Essentials */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <span className="text-green-600">Level 2 – Tajweed Essentials</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><b className="text-xs bg-green-100 rounded px-2 py-0.5">4–6 months</b></p>
              <ul>
                <li>• Ikhfa, Idgham, Qalqalah, Makharij</li>
                <li>• Video lessons, audio drills</li>
              </ul>
              <button className="mt-2 px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">Continue</button>
            </CardContent>
          </Card>
          {/* 30 Juz with Tajweed */}
          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <span className="text-yellow-600">Level 3 – 30 Juz with Tajweed</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><b className="text-xs bg-yellow-100 rounded px-2 py-0.5">1–2 years</b></p>
              <ul>
                <li>• Juz-by-Juz progress tracking</li>
              </ul>
              <button className="mt-2 px-3 py-1 bg-yellow-600 text-white text-xs rounded hover:bg-yellow-700">Track Reading</button>
            </CardContent>
          </Card>
          {/* Hifz Path */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <span className="text-orange-600">Level 4 – Hifz Path</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul>
                <li>• Memorization tools, spaced repetition</li>
                <li>• Start with Juz Amma / Custom Plan</li>
              </ul>
              <button className="mt-2 px-3 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-700">Custom Plan</button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Scholar Path Cards */}
        <TabsContent value="scholar" className="grid gap-5 sm:grid-cols-2">
          {/* Foundation in Islamic Knowledge */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <span className="text-purple-600">Phase 1 – Core Islamic Studies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><b className="text-xs bg-purple-100 rounded px-2 py-0.5">1–2 years</b></p>
              <ul>
                <li>• Aqeedah, Fiqh basics, Seerah, Arabic grammar</li>
                <li>• Teens, adults</li>
              </ul>
              <button className="mt-2 px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700">Start Studies</button>
            </CardContent>
          </Card>
          {/* Intermediate Alim Course */}
          <Card className="border-brown-200">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <span className="text-brown-700">Phase 2 – Become a Maulana</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><b className="text-xs bg-brown-100 rounded px-2 py-0.5">2–4 years</b></p>
              <ul>
                <li>• Tafsir, Hadith, Usool al-Fiqh, Balagha, Logic</li>
              </ul>
              <button className="mt-2 px-3 py-1 bg-brown-700 text-white text-xs rounded hover:bg-brown-800">Details</button>
            </CardContent>
          </Card>
          {/* Advanced Mufti Training */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <span className="text-rose-700">Phase 3 – Ifta & Fatwa</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><b className="text-xs bg-rose-100 rounded px-2 py-0.5">1–2 years</b></p>
              <ul>
                <li>• Fatawa writing, Comparative Fiqh</li>
                <li>• Certified Mufti</li>
              </ul>
              <button className="mt-2 px-3 py-1 bg-rose-700 text-white text-xs rounded hover:bg-rose-800">Learn More</button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Saved Courses Tab */}
        <TabsContent value="saved">
          <div className="grid gap-4">
            {savedCourses.length === 0 ? (
              <p className="text-center text-gray-400 italic">No saved courses yet.</p>
            ) : savedCourses.map((c) => (
              <Card key={c.title} className="flex flex-row items-center p-3 gap-3">
                <BookmarkPlus className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-medium">{c.title}</div>
                  <div className="text-xs text-gray-500">{c.status}</div>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">Resume</button>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* My Progress Tab */}
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-violet-600" />
                My Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div
                    className="bg-violet-600 h-4 rounded-full transition-all"
                    style={{ width: progress.percent + "%" }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600">{progress.percent}% complete</span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheck className="w-4 h-4 text-green-500" />
                <span className="text-sm">Next: {progress.next}</span>
              </div>
              <button className="mt-4 px-3 py-1 bg-violet-600 text-white text-xs rounded hover:bg-violet-700">
                Resume Learning
              </button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Islamic calendar integration card (optional feature example) */}
      <div className="mt-8 flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2">
        <Calendar className="w-5 h-5 text-blue-500" />
        <span className="text-sm font-medium text-blue-700">Set target: Finish before next Ramadan!</span>
      </div>
    </div>
  );
}
