
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Hash, X } from "lucide-react";

interface TagSelectorProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const ISLAMIC_TAGS = [
  "Quran",
  "Duas", 
  "Hadith",
  "Islamic History",
  "General Knowledge",
  "Daily Reminder",
  "Friday Khutbah",
  "Sunnah",
  "Prayer",
  "Ramadan",
  "Hajj",
  "Zakat",
  "Islamic Art",
  "Nasheed"
];

const TagSelector = ({ selectedTags, onTagsChange }: TagSelectorProps) => {
  const [customTag, setCustomTag] = useState("");

  const addTag = (tag: string) => {
    if (tag && !selectedTags.includes(tag) && selectedTags.length < 5) {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    onTagsChange(selectedTags.filter(tag => tag !== tagToRemove));
  };

  const handleCustomTagSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && customTag.trim()) {
      addTag(customTag.trim());
      setCustomTag("");
    }
  };

  const availableTags = ISLAMIC_TAGS.filter(tag => !selectedTags.includes(tag));

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Hash className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Tags</span>
        <span className="text-xs text-gray-500">({selectedTags.length}/5)</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <Select onValueChange={addTag}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Add Islamic tag..." />
          </SelectTrigger>
          <SelectContent>
            {availableTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <input
          type="text"
          placeholder="Custom tag..."
          value={customTag}
          onChange={(e) => setCustomTag(e.target.value)}
          onKeyDown={handleCustomTagSubmit}
          className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          disabled={selectedTags.length >= 5}
        />
      </div>

      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="flex items-center space-x-1 bg-green-100 text-green-800 hover:bg-green-200"
            >
              <span>{tag}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeTag(tag)}
                className="h-4 w-4 p-0 hover:bg-transparent"
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagSelector;
