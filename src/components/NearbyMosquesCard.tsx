
import React, { useState } from "react";
import { Users, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CardModal from "./CardModal";

const NearbyMosquesCard = () => {
  const [mosquesOpen, setMosquesOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const nearbyMosques = [
    { name: "Central Mosque", distance: "0.8 km", congregation: "Dhuhr in 30 min" },
    { name: "Al-Noor Islamic Center", distance: "1.2 km", congregation: "Friday prayers" },
    { name: "Masjid Al-Hidayah", distance: "2.1 km", congregation: "Tarawih prayers" }
  ];

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
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
    </>
  );
};

export default NearbyMosquesCard;
