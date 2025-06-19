
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lock } from "lucide-react";

interface PrivacyToggleProps {
  value: 'public' | 'friends' | 'private';
  onChange: (value: 'public' | 'friends' | 'private') => void;
}

const PrivacyToggle = ({ value, onChange }: PrivacyToggleProps) => {
  const privacyOptions = [
    { value: 'public', label: '🌍 Public', description: 'Visible to everyone' },
    { value: 'friends', label: '👥 Friends Only', description: 'Visible to friends' },
    { value: 'private', label: '🔒 Private', description: 'Only visible to me' }
  ];

  const currentOption = privacyOptions.find(option => option.value === value);

  return (
    <div className="flex items-center space-x-2">
      <Lock className="w-4 h-4 text-gray-500" />
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-40">
          <SelectValue>
            {currentOption?.label}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {privacyOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex flex-col">
                <span>{option.label}</span>
                <span className="text-xs text-gray-500">{option.description}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PrivacyToggle;
