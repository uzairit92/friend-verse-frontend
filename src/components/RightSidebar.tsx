
import React from "react";
import TasbihCard from "./TasbihCard";
import QiblaFinderCard from "./QiblaFinderCard";
import AdCard from "./AdCard";
import PrayerTimesCard from "./PrayerTimesCard";
import DailyReflectionCard from "./DailyReflectionCard";
import IslamicEventsCard from "./IslamicEventsCard";
import NearbyMosquesCard from "./NearbyMosquesCard";

const RightSidebar = () => {
  const handleDonateClick = () => {
    console.log("Donate clicked");
  };

  const handleMarketplaceClick = () => {
    console.log("Marketplace clicked");
  };

  return (
    <div className="p-4 space-y-4">
      {/* QIBLA FINDER (collapsible card, traveler-friendly) */}
      <QiblaFinderCard />

      {/* TASBIH COUNTER (moved just below Qibla) */}
      <TasbihCard />

      {/* PRAYER TIMES */}
      <PrayerTimesCard />

      {/* DAILY QURAN & DHIKR */}
      <DailyReflectionCard />

      {/* ISLAMIC EVENTS COUNTDOWN */}
      <IslamicEventsCard />

      {/* NEARBY MOSQUES */}
      <NearbyMosquesCard />

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
    </div>
  );
};

export default RightSidebar;
