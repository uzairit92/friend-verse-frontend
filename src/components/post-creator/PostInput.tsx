
import { Textarea } from "@/components/ui/textarea";

interface PostInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const PostInput = ({ value, onChange, placeholder = "Share something beneficial..." }: PostInputProps) => {
  return (
    <Textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border-none resize-none focus:ring-0 p-0 text-lg placeholder:text-gray-500 min-h-[100px]"
      rows={4}
    />
  );
};

export default PostInput;
