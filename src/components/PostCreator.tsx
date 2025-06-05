
import { useState } from "react";
import { Image, Video, Smile, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const PostCreator = () => {
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    if (postText.trim()) {
      console.log("Posting:", postText);
      setPostText("");
    }
  };

  return (
    <Card className="mb-6 shadow-sm">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind, John?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="border-none resize-none focus:ring-0 p-0 text-lg placeholder:text-gray-500"
              rows={2}
            />
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
                <Video className="w-5 h-5 text-red-500" />
                <span className="hidden sm:inline">Live video</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
                <Image className="w-5 h-5 text-green-500" />
                <span className="hidden sm:inline">Photo/video</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
                <Smile className="w-5 h-5 text-yellow-500" />
                <span className="hidden sm:inline">Feeling/activity</span>
              </Button>
            </div>
            <Button 
              onClick={handlePost}
              disabled={!postText.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              Post
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCreator;
