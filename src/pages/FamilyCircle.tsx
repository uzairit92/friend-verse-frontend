
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UserPlus, Users, Heart, MessageCircle, Share2, TreePine } from "lucide-react";

const FamilyCircle = () => {
  const [activeTab, setActiveTab] = useState("members");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const familyMembers = [
    {
      id: 1,
      name: "Sarah Ahmed",
      relationship: "Mother",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastPost: "Shared a beautiful Quran verse about patience",
      postTime: "2 hours ago",
      isOnline: true
    },
    {
      id: 2,
      name: "Omar Ahmed",
      relationship: "Father",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastPost: "Posted photos from today's Jummah prayer",
      postTime: "4 hours ago",
      isOnline: false
    },
    {
      id: 3,
      name: "Aisha Ahmed",
      relationship: "Sister",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastPost: "Started reading Surah Al-Kahf for today",
      postTime: "6 hours ago",
      isOnline: true
    },
    {
      id: 4,
      name: "Grandmother Fatima",
      relationship: "Grandmother",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastPost: "Shared a dua for family protection",
      postTime: "1 day ago",
      isOnline: false
    }
  ];

  const familyPosts = [
    {
      id: 1,
      author: "Sarah Ahmed",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Just finished reading Surah Ar-Rahman. SubhanAllah, every verse reminds us of Allah's countless blessings. May we always be grateful. 🤲",
      time: "2 hours ago",
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      author: "Omar Ahmed",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Beautiful Jummah prayer today at Central Mosque. The khutbah about family bonds really touched my heart. Alhamdulillah for this beautiful family.",
      time: "4 hours ago",
      likes: 8,
      comments: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex max-w-7xl mx-auto pt-16">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-64 fixed left-0 top-16 h-full overflow-y-auto">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-64 lg:mr-80 px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-green-600" />
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Family Circle</h1>
                    <p className="text-gray-600">You have {familyMembers.length} family members</p>
                  </div>
                </div>
                
                <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add Family Member
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add Family Member</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="Enter family member's name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Relationship</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="brother">Brother</SelectItem>
                            <SelectItem value="sister">Sister</SelectItem>
                            <SelectItem value="grandmother">Grandmother</SelectItem>
                            <SelectItem value="grandfather">Grandfather</SelectItem>
                            <SelectItem value="uncle">Uncle</SelectItem>
                            <SelectItem value="aunt">Aunt</SelectItem>
                            <SelectItem value="cousin">Cousin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email (Optional)</label>
                        <Input placeholder="Enter email to link existing user" />
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Add Family Member
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={activeTab === "members" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("members")}
                  className={activeTab === "members" ? "bg-white shadow-sm" : ""}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Family Members
                </Button>
                <Button
                  variant={activeTab === "tree" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("tree")}
                  className={activeTab === "tree" ? "bg-white shadow-sm" : ""}
                >
                  <TreePine className="w-4 h-4 mr-2" />
                  Family Tree
                </Button>
                <Button
                  variant={activeTab === "feed" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("feed")}
                  className={activeTab === "feed" ? "bg-white shadow-sm" : ""}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Family Feed
                </Button>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === "members" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {familyMembers.map((member) => (
                  <Card key={member.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={member.image} />
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                          </Avatar>
                          {member.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{member.name}</h3>
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                              {member.relationship}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{member.lastPost}</p>
                          <p className="text-xs text-gray-400 mt-2">{member.postTime}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "tree" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TreePine className="w-5 h-5 text-green-600" />
                    <span>Family Tree View</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12">
                      <TreePine className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Family Tree Coming Soon</h3>
                      <p className="text-gray-600">
                        We're working on an interactive family tree visualization to help you see all your family connections at a glance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "feed" && (
              <div className="space-y-4">
                {familyPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={post.authorImage} />
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900">{post.author}</h3>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{post.time}</span>
                          </div>
                          <p className="text-gray-700 mt-2">{post.content}</p>
                          
                          <div className="flex items-center space-x-4 mt-4 pt-3 border-t">
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                              <Heart className="w-4 h-4 mr-1" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                              <Share2 className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="hidden lg:block w-80 fixed right-0 top-16 h-full overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default FamilyCircle;
