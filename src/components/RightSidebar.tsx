import { MoreHorizontal, Clock, BookOpen, Heart, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TasbihCard from "./TasbihCard";

const RightSidebar = () => {
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

  return (
    <div className="p-4 space-y-4">
      {/* TASBIH COUNTER (moved to top) */}
      <TasbihCard />

      {/* PRAYER TIMES */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Prayer Times
            </CardTitle>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
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
      </Card>

      {/* DAILY QURAN & DHIKR */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-green-600" />
            Daily Reflection
          </CardTitle>
        </CardHeader>
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
      </Card>

      {/* ISLAMIC EVENTS COUNTDOWN */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
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
      </Card>

      {/* NEARBY MOSQUES */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Nearby Mosques
          </CardTitle>
        </CardHeader>
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
      </Card>
    </div>
  );
};

export default RightSidebar;
