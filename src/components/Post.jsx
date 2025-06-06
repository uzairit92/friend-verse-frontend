
import { useState } from "react";
import { Heart, MessageCircle, Share, MoreHorizontal, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Post = ({ author, content, image, likes, comments, shares }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        {/* Post Header */}
        <div className="p-4 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={author.avatar} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm">{author.name}</h3>
                <p className="text-xs text-gray-500">{author.time}</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Save post</DropdownMenuItem>
                <DropdownMenuItem>Hide post</DropdownMenuItem>
                <DropdownMenuItem>Report post</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Post Content */}
        <div className="px-4 pb-3">
          <p className="text-gray-800 leading-relaxed">{content}</p>
        </div>

        {/* Post Image */}
        {image && (
          <div className="w-full">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-auto object-cover max-h-96"
            />
          </div>
        )}

        {/* Post Stats */}
        <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500 border-b">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                <ThumbsUp className="w-3 h-3 text-white" />
              </div>
              <span>{likeCount}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>{comments} comments</span>
            <span>{shares} shares</span>
          </div>
        </div>

        {/* Post Actions */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-around">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 ${
                isLiked ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <ThumbsUp className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              <span className="font-medium">Like</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1 justify-center py-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Comment</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1 justify-center py-2">
              <Share className="w-5 h-5" />
              <span className="font-medium">Share</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
