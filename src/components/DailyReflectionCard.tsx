
import React, { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CardModal from "./CardModal";

const DailyReflectionCard = () => {
  const [dailyReflectionOpen, setDailyReflectionOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
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
    </>
  );
};

export default DailyReflectionCard;
