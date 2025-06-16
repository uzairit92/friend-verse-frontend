
import PageLayout from "@/components/PageLayout";
import { VideoFilters } from "@/components/VideoFilters";
import VideoGrid from "@/components/VideoGrid";
import { useState } from "react";
import { VideoType } from "@/components/VideoCard";

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleVideoSelect = (video: VideoType) => {
    console.log("Selected video:", video);
    // Here you could open a video player modal or navigate to video page
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Islamic Videos
          </h1>
        </div>
        <VideoFilters 
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <VideoGrid 
          activeCategory={activeCategory}
          onVideoSelect={handleVideoSelect}
        />
      </div>
    </PageLayout>
  );
};

export default Videos;
