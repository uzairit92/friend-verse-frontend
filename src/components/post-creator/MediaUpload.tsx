
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Image, Video, Headphones, X } from "lucide-react";
import { MediaFile } from "../PostCreator";
import { useToast } from "@/hooks/use-toast";

interface MediaUploadProps {
  files: MediaFile[];
  onAdd: (files: MediaFile[]) => void;
  onRemove: (id: string) => void;
}

const MediaUpload = ({ files, onAdd, onRemove }: MediaUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const validateFile = (file: File): { valid: boolean; error?: string } => {
    const maxSizes = {
      image: 5 * 1024 * 1024, // 5MB
      video: 20 * 1024 * 1024, // 20MB
      audio: 10 * 1024 * 1024, // 10MB
    };

    let type: 'image' | 'video' | 'audio';
    if (file.type.startsWith('image/')) type = 'image';
    else if (file.type.startsWith('video/')) type = 'video';
    else if (file.type.startsWith('audio/')) type = 'audio';
    else return { valid: false, error: 'Unsupported file type' };

    if (file.size > maxSizes[type]) {
      return { valid: false, error: `File too large. Max size for ${type}: ${maxSizes[type] / 1024 / 1024}MB` };
    }

    return { valid: true };
  };

  const processFiles = (fileList: FileList) => {
    const newFiles: MediaFile[] = [];
    
    Array.from(fileList).forEach(file => {
      const validation = validateFile(file);
      
      if (!validation.valid) {
        toast({
          title: "Upload Error",
          description: validation.error,
          variant: "destructive"
        });
        return;
      }

      let type: 'image' | 'video' | 'audio';
      if (file.type.startsWith('image/')) type = 'image';
      else if (file.type.startsWith('video/')) type = 'video';
      else type = 'audio';

      const mediaFile: MediaFile = {
        id: Math.random().toString(36).substr(2, 9),
        file,
        type,
        preview: type === 'image' ? URL.createObjectURL(file) : undefined
      };

      newFiles.push(mediaFile);
    });

    if (newFiles.length > 0) {
      onAdd(newFiles);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      processFiles(files);
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files) {
      processFiles(files);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-3">
      <div
        className={`border-2 border-dashed rounded-lg p-4 transition-colors ${
          isDragging ? 'border-green-500 bg-green-50' : 'border-gray-300'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100"
          >
            <Image className="w-5 h-5 text-green-500" />
            <span className="hidden sm:inline">Photo</span>
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100"
          >
            <Video className="w-5 h-5 text-blue-500" />
            <span className="hidden sm:inline">Video</span>
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100"
          >
            <Headphones className="w-5 h-5 text-purple-500" />
            <span className="hidden sm:inline">Audio</span>
          </Button>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-2">
          Or drag and drop files here
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*,audio/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {files.map((file) => (
            <div key={file.id} className="relative border rounded-lg p-2">
              <div className="flex items-center space-x-2">
                {file.type === 'image' && file.preview && (
                  <img
                    src={file.preview}
                    alt="Preview"
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
                {file.type === 'video' && (
                  <Video className="w-12 h-12 text-blue-500" />
                )}
                {file.type === 'audio' && (
                  <Headphones className="w-12 h-12 text-purple-500" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {file.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(file.file.size / 1024 / 1024).toFixed(1)} MB
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onRemove(file.id)}
                className="absolute -top-1 -right-1 h-6 w-6 p-0 rounded-full bg-red-500 hover:bg-red-600 text-white"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaUpload;
