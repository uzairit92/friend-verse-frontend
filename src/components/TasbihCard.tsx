import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  RotateCcw,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  Volume2,
  VolumeX,
  PlusCircle,
  MoreHorizontal,
  List as ListIcon,
  Sun,
  Moon,
  Clock,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Tasbih = {
  id: string;
  label: string;
  labelAr: string;
  count: number;
  goal: number;
  history: { date: string; amount: number }[];
  description?: string;
  category?: 'morning-evening' | 'post-salah' | 'custom';
};

type TasbihCardSettings = {
  sound: boolean;
};

type DhikrCategory = 'morning-evening' | 'post-salah' | 'custom';

const MORNING_EVENING_DHIKR: Omit<Tasbih, 'id' | 'count' | 'history'>[] = [
  {
    label: "Ayat al-Kursi",
    labelAr: "آية الكرسي",
    goal: 1,
    description: "Protection from Shaytan",
    category: 'morning-evening'
  },
  {
    label: "Ikhlas, Falaq, Nas",
    labelAr: "الإخلاص والفلق والناس",
    goal: 3,
    description: "Protection from harm",
    category: 'morning-evening'
  },
  {
    label: "La ilaha illa Allah wahdahu...",
    labelAr: "لا إله إلا الله وحده لا شريك له...",
    goal: 100,
    description: "Great reward, protection",
    category: 'morning-evening'
  },
  {
    label: "SubhanAllah wa bihamdihi",
    labelAr: "سبحان الله وبحمده",
    goal: 100,
    description: "Forgiveness of sins",
    category: 'morning-evening'
  },
  {
    label: "Astaghfirullah wa atubu ilayh",
    labelAr: "أستغفر الله وأتوب إليه",
    goal: 100,
    description: "Forgiveness",
    category: 'morning-evening'
  },
  {
    label: "Hasbiyallahu la ilaha illa Huwa...",
    labelAr: "حسبي الله لا إله إلا هو...",
    goal: 7,
    description: "Relief from distress",
    category: 'morning-evening'
  },
  {
    label: "Allahumma inni as'aluka...",
    labelAr: "اللهم إني أسألك من فضلك ورحمتك...",
    goal: 1,
    description: "For beneficial knowledge",
    category: 'morning-evening'
  }
];

const POST_SALAH_DHIKR: Omit<Tasbih, 'id' | 'count' | 'history'>[] = [
  {
    label: "Astaghfirullah",
    labelAr: "أستغفر الله",
    goal: 3,
    description: "Seeking forgiveness",
    category: 'post-salah'
  },
  {
    label: "Allahumma anta as-salaam...",
    labelAr: "اللهم أنت السلام ومنك السلام...",
    goal: 1,
    description: "Greeting to Allah",
    category: 'post-salah'
  },
  {
    label: "SubhanAllah",
    labelAr: "سُبْحَانَ الله",
    goal: 33,
    description: "Glory to Allah",
    category: 'post-salah'
  },
  {
    label: "Alhamdulillah",
    labelAr: "اَلْـحَمْدُ لله",
    goal: 33,
    description: "Praise to Allah",
    category: 'post-salah'
  },
  {
    label: "Allahu Akbar",
    labelAr: "اللّٰهُ أَكْبَرُ",
    goal: 34,
    description: "Allah is Greatest",
    category: 'post-salah'
  },
  {
    label: "Ayat al-Kursi (Post-Salah)",
    labelAr: "آية الكرسي",
    goal: 1,
    description: "Protection",
    category: 'post-salah'
  }
];

const DEFAULT_TASBIHS: Tasbih[] = [
  {
    id: "subhanallah",
    label: "SubhanAllah",
    labelAr: "سُبْحَانَ الله",
    count: 0,
    goal: 33,
    history: [],
    category: 'custom'
  },
  {
    id: "alhamdulillah",
    label: "Alhamdulillah",
    labelAr: "اَلْـحَمْدُ لله",
    count: 0,
    goal: 33,
    history: [],
    category: 'custom'
  },
  {
    id: "allahuakbar",
    label: "Allahu Akbar",
    labelAr: "اللّٰهُ أَكْبَرُ",
    count: 0,
    goal: 34,
    history: [],
    category: 'custom'
  },
];

const LOCAL_KEY = "tasbih-lists";
const SETTINGS_KEY = "tasbih-settings";

function useTasbihList() {
  const [tasbihs, setTasbihs] = useState<Tasbih[]>(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) return JSON.parse(saved);
    return DEFAULT_TASBIHS;
  });
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(tasbihs));
  }, [tasbihs]);
  return [tasbihs, setTasbihs] as const;
}

function useTasbihSettings() {
  const [settings, setSettings] = useState<TasbihCardSettings>(() => {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) return JSON.parse(saved);
    return { sound: true };
  });
  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);
  return [settings, setSettings] as const;
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

export default function TasbihCard() {
  // Collapsible
  const [open, setOpen] = useState(true);

  // List & Active Tasbih
  const [tasbihs, setTasbihs] = useTasbihList();
  const [activeIdx, setActiveIdx] = useState(0);

  // Category selection
  const [selectedCategory, setSelectedCategory] = useState<DhikrCategory>('custom');

  // Editable state
  const [editMode, setEditMode] = useState(false);
  const [tempLabel, setTempLabel] = useState("");
  const [tempLabelAr, setTempLabelAr] = useState("");
  const [tempGoal, setTempGoal] = useState(33);

  // Add new
  const [showAdd, setShowAdd] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newLabelAr, setNewLabelAr] = useState("");
  const [newGoal, setNewGoal] = useState(33);
  const [newDescription, setNewDescription] = useState("");

  // Settings
  const [settings, setSettings] = useTasbihSettings();
  const audioRef = useRef<HTMLAudioElement>(null);

  const active = tasbihs[activeIdx];

  // Filter tasbihs by category
  const filteredTasbihs = tasbihs.filter(t => 
    selectedCategory === 'custom' ? (!t.category || t.category === 'custom') : t.category === selectedCategory
  );

  // Increment logic (and play feedback)
  function handleIncrement() {
    setTasbihs((prev) => {
      const next = [...prev];
      next[activeIdx] = { ...next[activeIdx], count: next[activeIdx].count + 1 };
      // Add to today's history
      const today = getToday();
      let hist = next[activeIdx].history.slice();
      const hIdx = hist.findIndex((h) => h.date === today);
      if (hIdx >= 0) {
        hist[hIdx].amount += 1;
      } else {
        hist.push({ date: today, amount: 1 });
      }
      next[activeIdx].history = hist;
      return next;
    });
    if (settings.sound && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    // Add vibration if supported
    if (settings.sound && "vibrate" in navigator) {
      navigator.vibrate(40);
    }
  }

  function handleReset() {
    setTasbihs((prev) => {
      const next = [...prev];
      next[activeIdx] = { ...next[activeIdx], count: 0 };
      return next;
    });
  }

  function handleSaveEdit() {
    setTasbihs((prev) => {
      const next = [...prev];
      next[activeIdx] = {
        ...next[activeIdx],
        label: tempLabel,
        labelAr: tempLabelAr,
        goal: tempGoal,
      };
      return next;
    });
    setEditMode(false);
  }

  function handleEditClick() {
    setTempLabel(active.label);
    setTempLabelAr(active.labelAr);
    setTempGoal(active.goal);
    setEditMode(true);
  }

  function handleDelete(idx: number) {
    if (window.confirm("Delete this Dhikr?")) {
      setTasbihs((prev) => prev.filter((_, i) => i !== idx));
      if (activeIdx >= tasbihs.length - 1) setActiveIdx(0);
    }
  }

  function handleAddTasbih() {
    if (!newLabel.trim()) return;
    setTasbihs((prev) => [
      ...prev,
      { 
        id: Date.now().toString(), 
        label: newLabel, 
        labelAr: newLabelAr, 
        count: 0, 
        goal: newGoal, 
        history: [],
        description: newDescription,
        category: selectedCategory
      },
    ]);
    setNewLabel("");
    setNewLabelAr("");
    setNewGoal(33);
    setNewDescription("");
    setShowAdd(false);
    setActiveIdx(tasbihs.length);
  }

  function loadPredefinedDhikr(category: DhikrCategory) {
    if (category === 'custom') return;
    
    const dhikrSet = category === 'morning-evening' ? MORNING_EVENING_DHIKR : POST_SALAH_DHIKR;
    const newTasbihs = dhikrSet.map(dhikr => ({
      ...dhikr,
      id: `${category}-${Date.now()}-${Math.random()}`,
      count: 0,
      history: []
    }));

    setTasbihs(prev => [
      ...prev.filter(t => t.category !== category),
      ...newTasbihs
    ]);
  }

  // Progress (to goal)
  const percent = active ? Math.min(100, Math.round((active.count / active.goal) * 100)) : 0;

  // Today summary
  const todayTotal = tasbihs
    .map((t) => t.history.find((h) => h.date === getToday())?.amount ?? 0)
    .reduce((a, b) => a + b, 0);

  // RENDER
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-[400px] mx-auto rounded-xl shadow-xl bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-[#22222d] dark:to-[#181821] border overflow-hidden my-4">
      {/* Card Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-blue-100 dark:bg-blue-900/20">
        <div className="flex items-center gap-2">
          <ListIcon className="w-5 h-5 text-blue-500" />
          <span className="font-bold text-lg select-none" style={{ fontFamily: "serif, ui-serif" }}>
            Tasbih Counter
          </span>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-2 h-8 w-8">
            <ChevronDown className={`transition-transform ${open ? "" : "rotate-180"}`} />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        {/* Category Selection */}
        <div className="p-4 border-b bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Select Dhikr Category:</span>
          </div>
          <Select value={selectedCategory} onValueChange={(value: DhikrCategory) => {
            setSelectedCategory(value);
            loadPredefinedDhikr(value);
            setActiveIdx(0);
          }}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose dhikr category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning-evening">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Morning & Evening Dhikr
                </div>
              </SelectItem>
              <SelectItem value="post-salah">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Post-Salah Dhikr
                </div>
              </SelectItem>
              <SelectItem value="custom">
                <div className="flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" />
                  Custom Dhikr
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Main counter & controls */}
        <div className="flex flex-col gap-3 p-5 pt-4">
          {active && (
            <>
              {/* Label section */}
              <div className="flex items-center gap-2 justify-between">
                <div className="flex flex-col">
                  {editMode ? (
                    <>
                      <Input
                        value={tempLabelAr}
                        onChange={(e) => setTempLabelAr(e.target.value)}
                        className="w-28 text-center text-lg mb-0.5 font-serif"
                        placeholder="Arabic"
                      />
                      <Input
                        value={tempLabel}
                        onChange={(e) => setTempLabel(e.target.value)}
                        className="w-28 text-center mb-0.5"
                        placeholder="English"
                      />
                    </>
                  ) : (
                    <>
                      <span className="text-xl font-semibold mb-1 text-blue-700 dark:text-blue-200 tracking-wide" lang="ar" style={{ fontFamily: "Amiri, serif" }}>
                        {active.labelAr}
                      </span>
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-100">{active.label}</span>
                      {active.description && (
                        <span className="text-xs text-gray-500 mt-1">{active.description}</span>
                      )}
                    </>
                  )}
                </div>
                <div className="flex gap-1 items-center">
                  {editMode ? (
                    <>
                      <Button variant="outline" size="icon" aria-label="Save label" onClick={handleSaveEdit}>
                        <Save className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" aria-label="Cancel edit" onClick={() => setEditMode(false)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <Button variant="ghost" size="icon" aria-label="Edit label" onClick={handleEditClick}>
                      <Edit className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Progress Circle & Current Count */}
              <div className="flex flex-col items-center justify-center my-2">
                <div className="relative flex items-center justify-center w-28 h-28 mb-2">
                  <svg width="112" height="112" style={{ position: "absolute", top: 0, left: 0 }}>
                    <circle
                      cx="56" cy="56" r="50"
                      stroke="#e0e7ff"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="56" cy="56" r="50"
                      stroke="#2563eb"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 50}
                      strokeDashoffset={2 * Math.PI * 50 * (1 - percent / 100)}
                      style={{ transition: "stroke-dashoffset 0.4s" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <button
                    className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 text-white shadow-md rounded-full w-20 h-20 text-2xl font-bold flex items-center justify-center active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform"
                    onClick={handleIncrement}
                    aria-label="Tap to increment"
                  >
                    {active.count}
                  </button>
                  <span className="absolute bottom-3 left-0 right-0 text-xs font-semibold text-center text-blue-600 dark:text-blue-200">{`/ ${active.goal}`}</span>
                </div>
                <span className="text-xs mt-1 text-gray-500">{percent}% of goal</span>
              </div>

              {/* Action buttons */}
              <div className="flex justify-between mt-3">
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex gap-1 items-center"
                  onClick={handleReset}
                  aria-label="Reset count"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
                <div className="flex gap-1">
                  <Switch
                    checked={settings.sound}
                    onCheckedChange={v => setSettings((s) => ({ ...s, sound: v }))}
                    aria-label="Toggle sound/vibration"
                  />
                  <span className="text-xs text-gray-700 dark:text-gray-200">{settings.sound ? <Volume2 className="inline w-4 h-4" /> : <VolumeX className="inline w-4 h-4" />}</span>
                </div>
              </div>

              {/* Goal */}
              {editMode ? (
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    type="number"
                    min={1}
                    value={tempGoal}
                    onChange={(e) => setTempGoal(Math.max(1, Number(e.target.value)))}
                    className="w-20"
                    placeholder="Goal"
                  />
                  <span className="text-xs text-gray-500">Set goal</span>
                </div>
              ) : null}
            </>
          )}

          {/* Dhikr list switcher */}
          <div>
            <div className="flex items-center gap-2 mt-4 mb-2">
              <ListIcon className="w-4 h-4 text-blue-400" />
              <span className="font-semibold text-sm text-blue-800 dark:text-blue-200">
                {selectedCategory === 'morning-evening' ? 'Morning & Evening' : 
                 selectedCategory === 'post-salah' ? 'Post-Salah' : 'Custom'} Dhikr
              </span>
              {selectedCategory === 'custom' && (
                <Button variant="ghost" size="icon" aria-label="Add" onClick={() => setShowAdd(v => !v)}>
                  <PlusCircle className="w-4 h-4 text-green-600" />
                </Button>
              )}
            </div>
            {/* existing lists */}
            <div className="flex flex-wrap gap-2">
              {filteredTasbihs.map((t, i) => {
                const globalIdx = tasbihs.findIndex(tasbih => tasbih.id === t.id);
                return (
                  <div key={t.id} className={`flex items-center gap-1 rounded-md px-2 py-1 border text-xs cursor-pointer transition
                    ${globalIdx === activeIdx ? "bg-blue-100 border-blue-400 text-blue-700 font-bold dark:bg-blue-800/50" : "hover:bg-blue-50 dark:hover:bg-blue-900/30"}
                  `}
                    onClick={() => setActiveIdx(globalIdx)}
                  >
                    <span className="tracking-wide" lang="ar" style={{ fontFamily: "Amiri, serif" }}>{t.labelAr}</span>
                    <span className="ml-1">{t.label}</span>
                    {selectedCategory === 'custom' && (
                      <Button size="icon" variant="ghost" aria-label="Delete dhikr" className="ml-1 w-5 h-5" onClick={e => { e.stopPropagation(); handleDelete(globalIdx); }}>
                        <Trash2 className="w-3 h-3 text-red-400" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add Tasbih */}
          {showAdd && selectedCategory === 'custom' && (
            <form
              className="flex flex-col gap-2 mt-2 p-2 border rounded-md bg-white dark:bg-blue-950/30"
              onSubmit={e => {
                e.preventDefault();
                handleAddTasbih();
              }}
            >
              <Input value={newLabelAr} onChange={e => setNewLabelAr(e.target.value)} placeholder="Arabic label" required className="font-serif"/>
              <Input value={newLabel} onChange={e => setNewLabel(e.target.value)} placeholder="English label" required/>
              <Input value={newDescription} onChange={e => setNewDescription(e.target.value)} placeholder="Description (optional)"/>
              <Input type="number" min={1} value={newGoal} onChange={e => setNewGoal(Math.max(1, Number(e.target.value)))} placeholder="Goal" required/>
              <Button type="submit" size="sm" className="bg-blue-600 text-white mt-1">
                <Plus className="w-4 h-4" /> Add Dhikr
              </Button>
            </form>
          )}

          {/* Today Summary */}
          <div className="mt-5 text-xs text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span>Today's total: <span className="font-bold text-blue-700 dark:text-blue-200">{todayTotal}</span></span>
            </div>
            {/* Brief history for this tasbih */}
            {active && (
              <div>
                <span className="font-semibold">History:</span>
                <ul className="list-disc ml-4 mt-0">
                  {active.history.slice(-3).reverse().map((h, idx) => (
                    <li key={idx}>
                      <span className="text-blue-700 dark:text-blue-200 font-semibold">{h.amount}</span>
                      <span> on {h.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* audio for feedback */}
        <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/05/25/audio_105b6c1ebf.mp3" preload="auto" style={{ display: "none" }}/>
      </CollapsibleContent>
    </Collapsible>
  );
}
