
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostInput from "./post-creator/PostInput";
import MediaUpload from "./post-creator/MediaUpload";
import TagSelector from "./post-creator/TagSelector";
import PrivacyToggle from "./post-creator/PrivacyToggle";
import { useToast } from "@/hooks/use-toast";

export interface MediaFile {
  id: string;
  file: File;
  type: 'image' | 'video' | 'audio';
  preview?: string;
}

const PostCreator = () => {
  const [postText, setPostText] = useState("");
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [privacy, setPrivacy] = useState<'public' | 'friends' | 'private'>('public');
  const [isPosting, setIsPosting] = useState(false);
  const { toast } = useToast();

  const canPost = postText.trim() || mediaFiles.length > 0;

  const handlePost = async () => {
    if (!canPost) {
      toast({
        title: "Cannot post",
        description: "Please add some content or media before posting.",
        variant: "destructive"
      });
      return;
    }

    setIsPosting(true);
    
    // Simulate posting delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Posting:", {
      text: postText,
      media: mediaFiles,
      tags: selectedTags,
      privacy
    });

    toast({
      title: "Post shared!",
      description: "Your beneficial content has been shared with the community.",
    });

    // Reset form
    setPostText("");
    setMediaFiles([]);
    setSelectedTags([]);
    setPrivacy('public');
    setIsPosting(false);
  };

  const handleMediaAdd = (files: MediaFile[]) => {
    setMediaFiles(prev => [...prev, ...files]);
  };

  const handleMediaRemove = (id: string) => {
    setMediaFiles(prev => prev.filter(file => file.id !== id));
  };

  return (
    <Card className="mb-6 shadow-sm">
      <CardContent className="p-4">
        <div className="flex space-x-3 mb-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <PostInput 
              value={postText}
              onChange={setPostText}
              placeholder="Share something beneficial..."
            />
          </div>
        </div>

        <div className="space-y-4">
          <MediaUpload 
            files={mediaFiles}
            onAdd={handleMediaAdd}
            onRemove={handleMediaRemove}
          />

          <TagSelector 
            selectedTags={selectedTags}
            onTagsChange={setSelectedTags}
          />

          <div className="flex items-center justify-between pt-4 border-t">
            <PrivacyToggle 
              value={privacy}
              onChange={setPrivacy}
            />

            <Button 
              onClick={handlePost}
              disabled={!canPost || isPosting}
              className="bg-green-600 hover:bg-green-700 text-white px-8"
            >
              {isPosting ? "Posting..." : "Post"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCreator;
