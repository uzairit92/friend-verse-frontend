
import { MoreHorizontal, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RightSidebar = () => {
  const suggestedFriends = [
    {
      name: "Alex Wilson",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      mutualFriends: 12
    },
    {
      name: "Jessica Brown",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      mutualFriends: 8
    },
    {
      name: "Ryan Davis",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      mutualFriends: 15
    }
  ];

  const trending = [
    { topic: "#ReactJS", posts: "125k posts" },
    { topic: "#WebDevelopment", posts: "89k posts" },
    { topic: "#DesignTrends", posts: "67k posts" },
    { topic: "#Photography", posts: "234k posts" },
    { topic: "#TechNews", posts: "156k posts" }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Suggested Friends */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-800">People you may know</CardTitle>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {suggestedFriends.map((friend, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{friend.name}</p>
                  <p className="text-xs text-gray-500">{friend.mutualFriends} mutual friends</p>
                </div>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-8 px-3">
                <UserPlus className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-800">Trending</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trending.map((trend, index) => (
            <div key={index} className="hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
              <p className="font-medium text-sm text-blue-600">{trend.topic}</p>
              <p className="text-xs text-gray-500">{trend.posts}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-800">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start text-sm">
            Create a Page
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            Create an Event
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            Find Friends
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
