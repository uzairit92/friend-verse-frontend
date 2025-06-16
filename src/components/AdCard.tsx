
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AdCardProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaColor?: string;
  onCtaClick?: () => void;
  isSponsored?: boolean;
}

const AdCard = ({ 
  image, 
  title, 
  description, 
  ctaText, 
  ctaColor = "bg-primary", 
  onCtaClick,
  isSponsored = true 
}: AdCardProps) => {
  return (
    <Card className="rounded-xl shadow-md mb-4 w-full overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          className="w-full h-30 object-cover" 
          alt="Ad Banner"
        />
        {isSponsored && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Sponsored
          </div>
        )}
      </div>
      <CardContent className="p-3">
        <h4 className="text-lg font-bold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <Button 
          className={`w-full text-white ${ctaColor} hover:opacity-90`}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AdCard;
