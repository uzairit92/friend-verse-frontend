
import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CardModal from "./CardModal";

const IslamicEventsCard = () => {
  const [eventsOpen, setEventsOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const islamicEvents = [
    { event: "Ramadan 2024", daysLeft: 45, color: "text-purple-600" },
    { event: "Eid al-Fitr", daysLeft: 75, color: "text-green-600" },
    { event: "Day of Arafah", daysLeft: 150, color: "text-blue-600" }
  ];

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
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
    </>
  );
};

export default IslamicEventsCard;
