
import React, { useState } from "react";
import { MoreHorizontal, Clock, BookOpen, Heart, Calendar, Users, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import TasbihCard from "./TasbihCard";
import QiblaFinderCard from "./QiblaFinderCard";
import AdCard from "./AdCard";
import CardModal from "./CardModal";

const RightSidebar = () => {
  const [prayerTimesOpen, setPrayerTimesOpen] = useState(true);
  const [dailyReflectionOpen, setDailyReflectionOpen] = useState(true);
  const [eventsOpen, setEventsOpen] = useState(true);
  const [mosquesOpen, setMosquesOpen] = useState(true);
  
  // Modal states
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const prayerTimes = [
    { name: "Fajr", time: "5:30 AM", passed: true },
    { name: "Dhuhr", time: "12:45 PM", passed: true },
    { name: "Asr", time: "4:20 PM", passed: false, next: true },
    { name: "Maghrib", time: "6:55 PM", passed: false },
    { name: "Isha", time: "8:15 PM", passed: false }
  ];

  const islamicEvents = [
    { event: "Ramadan 2024", daysLeft: 45, color: "text-purple-600" },
    { event: "Eid al-Fitr", daysLeft: 75, color: "text-green-600" },
    { event: "Day of Arafah", daysLeft: 150, color: "text-blue-600" }
  ];

  const nearbyMosques = [
    { name: "Central Mosque", distance: "0.8 km", congregation: "Dhuhr in 30 min" },
    { name: "Al-Noor Islamic Center", distance: "1.2 km", congregation: "Friday prayers" },
    { name: "Masjid Al-Hidayah", distance: "2.1 km", congregation: "Tarawih prayers" }
  ];

  const handleDonateClick = () => {
    console.log("Donate clicked");
  };

  const handleMarketplaceClick = () => {
    console.log("Marketplace clicked");
  };

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="p-4 space-y-4">
      {/* QIBLA FINDER (collapsible card, traveler-friendly) */}
      <QiblaFinderCard />

      {/* TASBIH COUNTER (moved just below Qibla) */}
      <TasbihCard />

      {/* PRAYER TIMES */}
      <Collapsible open={prayerTimesOpen} onOpenChange={setPrayerTimesOpen}>
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle 
                className="text-lg font-semibold text-gray-800 flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => openModal('prayer-times')}
              >
                <Clock className="w-5 h-5 text-blue-600" />
                Prayer Times
              </CardTitle>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ChevronDown className={`w-4 h-4 transition-transform ${prayerTimesOpen ? "" : "rotate-180"}`} />
                  </Button>
                </CollapsibleTrigger>
              </div>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="space-y-3">
              {prayerTimes.map((prayer, index) => (
                <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                  prayer.next ? 'bg-blue-50 border border-blue-200' : 
                  prayer.passed ? 'opacity-60' : 'hover:bg-gray-50'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      prayer.passed ? 'bg-green-500' : 
                      prayer.next ? 'bg-blue-500' : 'bg-gray-300'
                    }`} />
                    <span className={`font-medium text-sm ${
                      prayer.next ? 'text-blue-700' : 'text-gray-700'
                    }`}>{prayer.name}</span>
                  </div>
                  <span className={`text-sm ${
                    prayer.next ? 'text-blue-600 font-medium' : 'text-gray-500'
                  }`}>{prayer.time}</span>
                </div>
              ))}
              <div className="mt-3 pt-2 border-t">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>New York, NY</span>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* DAILY QURAN & DHIKR */}
      <Collapsible open={dailyReflectionOpen} onOpenChange={setDailyReflectionOpen}>
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle 
                className="text-lg font-semibold text-gray-800 flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
                onClick={() => openModal('daily-reflection')}
              >
                <BookOpen className="w-5 h-5 text-green-600" />
                Daily Reflection
              </CardTitle>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <ChevronDown className={`w-4 h-4 transition-transform ${dailyReflectionOpen ? "" : "rotate-180"}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="space-y-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <p className="text-sm font-medium text-green-800 mb-1">Verse of the Day</p>
                <p className="text-xs text-green-700 leading-relaxed">
                  "And whoever relies upon Allah - then He is sufficient for him." - Quran 65:3
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-sm font-medium text-purple-800 mb-1">Morning Dhikr</p>
                <p className="text-xs text-purple-700">
                  "SubhanAllahi wa bihamdihi" (100x) - ✓ Completed
                </p>
              </div>
              <Button variant="outline" className="w-full text-sm" size="sm">
                Read Full Chapter
              </Button>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* ISLAMIC EVENTS COUNTDOWN */}
      <Collapsible open={eventsOpen} onOpenChange={setEventsOpen}>
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle 
                className="text-lg font-semibold text-gray-800 flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors"
                onClick={() => openModal('events')}
              >
                <Calendar className="w-5 h-5 text-orange-600" />
                Upcoming Events
              </CardTitle>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <ChevronDown className={`w-4 h-4 transition-transform ${eventsOpen ? "" : "rotate-180"}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="space-y-3">
              {islamicEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div>
                    <p className="font-medium text-sm text-gray-800">{event.event}</p>
                    <p className="text-xs text-gray-500">{event.daysLeft} days remaining</p>
                  </div>
                  <div className={`text-right ${event.color}`}>
                    <span className="text-lg font-bold">{event.daysLeft}</span>
                    <p className="text-xs">days</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* NEARBY MOSQUES */}
      <Collapsible open={mosquesOpen} onOpenChange={setMosquesOpen}>
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle 
                className="text-lg font-semibold text-gray-800 flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => openModal('mosques')}
              >
                <Users className="w-5 h-5 text-blue-600" />
                Nearby Mosques
              </CardTitle>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <ChevronDown className={`w-4 h-4 transition-transform ${mosquesOpen ? "" : "rotate-180"}`} />
                </Button>
              </CollapsibleTrigger>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="space-y-3">
              {nearbyMosques.map((mosque, index) => (
                <div key={index} className="flex items-start justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                  <div className="flex-1">
                    <p className="font-medium text-sm text-gray-800">{mosque.name}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {mosque.distance}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">{mosque.congregation}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full text-sm" size="sm">
                Find More Mosques
              </Button>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* ADVERTISEMENT CARDS */}
      <div className="space-y-4 pt-4 border-t border-gray-200">
        <AdCard
          image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=120&q=80"
          title="Support Local Projects"
          description="Donate now to help build a better community and make a difference."
          ctaText="Donate Now"
          ctaColor="bg-green-600"
          onCtaClick={handleDonateClick}
        />
        
        <AdCard
          image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=120&q=80"
          title="Buy & Sell Smart"
          description="Post your items in the marketplace today and connect with buyers."
          ctaText="Sell Now"
          ctaColor="bg-blue-600"
          onCtaClick={handleMarketplaceClick}
        />
      </div>

      {/* MODALS */}
      <CardModal
        isOpen={activeModal === 'prayer-times'}
        onClose={closeModal}
        title="Prayer Times Details"
        icon={<Clock className="w-5 h-5 text-blue-600" />}
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {prayerTimes.map((prayer, index) => (
              <div key={index} className={`p-3 rounded-lg border ${
                prayer.next ? 'bg-blue-50 border-blue-200' : 
                prayer.passed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{prayer.name}</span>
                  <span className="text-sm font-mono">{prayer.time}</span>
                </div>
                {prayer.next && (
                  <p className="text-xs text-blue-600 mt-1">Next prayer</p>
                )}
              </div>
            ))}
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-2">Location Settings</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>New York, NY</span>
              <Button variant="outline" size="sm" className="ml-auto">Change</Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">Set Reminder</Button>
            <Button variant="outline" className="flex-1">View Calendar</Button>
          </div>
        </div>
      </CardModal>

      <CardModal
        isOpen={activeModal === 'daily-reflection'}
        onClose={closeModal}
        title="Daily Reflection"
        icon={<BookOpen className="w-5 h-5 text-green-600" />}
      >
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-medium text-green-800 mb-2">Verse of the Day</h3>
            <p className="text-sm text-green-700 leading-relaxed mb-3">
              "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."
            </p>
            <p className="text-xs text-green-600">- Quran 65:3</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-medium text-purple-800 mb-2">Morning Dhikr Progress</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">SubhanAllahi wa bihamdihi</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">100/100 ✓</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Astaghfirullah</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">65/100</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">Continue Reading</Button>
            <Button variant="outline" className="flex-1">Share Reflection</Button>
          </div>
        </div>
      </CardModal>

      <CardModal
        isOpen={activeModal === 'events'}
        onClose={closeModal}
        title="Islamic Events Calendar"
        icon={<Calendar className="w-5 h-5 text-orange-600" />}
      >
        <div className="space-y-4">
          {islamicEvents.map((event, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{event.event}</h3>
                  <p className="text-sm text-gray-500 mt-1">{event.daysLeft} days remaining</p>
                  <p className="text-xs text-gray-400 mt-1">Click to set reminder</p>
                </div>
                <div className={`text-right ${event.color}`}>
                  <span className="text-2xl font-bold">{event.daysLeft}</span>
                  <p className="text-xs">days</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-2">
            <Button className="flex-1">Add to Calendar</Button>
            <Button variant="outline" className="flex-1">View Full Calendar</Button>
          </div>
        </div>
      </CardModal>

      <CardModal
        isOpen={activeModal === 'mosques'}
        onClose={closeModal}
        title="Nearby Mosques"
        icon={<Users className="w-5 h-5 text-blue-600" />}
      >
        <div className="space-y-4">
          {nearbyMosques.map((mosque, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{mosque.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{mosque.distance}</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">{mosque.congregation}</p>
                </div>
                <Button variant="outline" size="sm">Get Directions</Button>
              </div>
            </div>
          ))}
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm font-medium text-blue-800 mb-1">Need to find more mosques?</p>
            <p className="text-xs text-blue-700">Search by location or browse categories</p>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">Search More</Button>
            <Button variant="outline" className="flex-1">Filter Results</Button>
          </div>
        </div>
      </CardModal>
    </div>
  );
};

export default RightSidebar;
