
import React, { useState } from "react";
import { Clock, MapPin, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CardModal from "./CardModal";

const PrayerTimesCard = () => {
  const [prayerTimesOpen, setPrayerTimesOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const prayerTimes = [
    { name: "Fajr", time: "5:30 AM", passed: true },
    { name: "Dhuhr", time: "12:45 PM", passed: true },
    { name: "Asr", time: "4:20 PM", passed: false, next: true },
    { name: "Maghrib", time: "6:55 PM", passed: false },
    { name: "Isha", time: "8:15 PM", passed: false }
  ];

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
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
    </>
  );
};

export default PrayerTimesCard;
