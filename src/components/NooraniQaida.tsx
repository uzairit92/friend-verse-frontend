
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, Home } from "lucide-react";

const NooraniQaida = ({ onBack }: { onBack: () => void }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Title Page",
      image: "/lovable-uploads/611a2d5b-44c8-42c1-b57e-e12b2073df93.png",
      description: "Noorani Qaida - Introduction to Arabic Letters"
    },
    {
      title: "Lesson 1 - Individual Letters",
      image: "/lovable-uploads/8b8bfe82-420b-4c61-bac1-a40d910db430.png",
      description: "Learning individual Arabic letters and their names"
    },
    {
      title: "Lesson 2 - Letter Combinations",
      image: "/lovable-uploads/055e1d72-275f-48fc-8b53-c2cefa9a1977.png",
      description: "Combining letters to form simple syllables"
    },
    {
      title: "Lesson 3 - Word Formation",
      image: "/lovable-uploads/1b1a6cd2-762b-479f-a0ae-ffd291f5c211.png",
      description: "Building words from letter combinations"
    },
    {
      title: "Lesson 4 - Advanced Combinations",
      image: "/lovable-uploads/d1093741-a577-4b80-96f3-2d917f75f49d.png",
      description: "More complex letter and word formations"
    },
    {
      title: "Lesson 5 - Vowel Marks (Harakat)",
      image: "/lovable-uploads/f59b723c-3e0c-49a5-98f1-ef74a2e64f63.png",
      description: "Introduction to vowel marks and their usage"
    },
    {
      title: "Lesson 6 - Connected Letters",
      image: "/lovable-uploads/7637b305-a67d-4cb8-bd32-7359cfba35ac.png",
      description: "Learning how letters connect in different positions"
    },
    {
      title: "Lesson 7 - Tanween and Special Marks",
      image: "/lovable-uploads/80bc1cda-8954-459b-a32d-8402d1d9bc14.png",
      description: "Understanding Tanween and other diacritical marks"
    },
    {
      title: "Lesson 8 - Reading Practice",
      image: "/lovable-uploads/85d7ae1d-3508-4509-873f-5a26c7f57e1a.png",
      description: "Comprehensive reading practice with various combinations"
    },
    {
      title: "Lesson 9 - Advanced Reading",
      image: "/lovable-uploads/a2a92930-12be-43e7-8a07-90b194a830fc.png",
      description: "Advanced reading exercises and word recognition"
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Back to Quran Learning
        </Button>
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-600">Noorani Qaida</h1>
        </div>
      </div>

      {/* Page Counter */}
      <div className="text-center mb-4">
        <span className="text-sm text-gray-600">
          Page {currentPage + 1} of {pages.length}
        </span>
      </div>

      {/* Main Content */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-center text-lg">
            {pages[currentPage].title}
          </CardTitle>
          <p className="text-center text-sm text-gray-600">
            {pages[currentPage].description}
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <img
              src={pages[currentPage].image}
              alt={pages[currentPage].title}
              className="max-w-full h-auto rounded-lg shadow-lg border"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        {/* Page Indicator */}
        <div className="flex gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentPage
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Progress Section */}
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Your Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              {Math.round(((currentPage + 1) / pages.length) * 100)}% Complete
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NooraniQaida;
