
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, UserPlus, Heart, MessageCircle, Share } from "lucide-react";

const FamilyCircle = () => {
  const [familyMembers, setFamilyMembers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      relationship: "Mother",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastPost: "Just finished my morning prayers. Feeling blessed! 🤲",
      postTime: "2 hours ago"
    },
    {
      id: 2,
      name: "Ahmed Johnson",
      relationship: "Father",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastPost: "Reading Surah Al-Kahf this Friday. May Allah bless us all.",
      postTime: "4 hours ago"
    },
    {
      id: 3,
      name: "Omar Johnson",
      relationship: "Brother",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastPost: "Alhamdulillah for another day to seek knowledge and grow closer to Allah.",
      postTime: "6 hours ago"
    }
  ]);

  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    relationship: "",
    email: ""
  });

  const handleAddMember = () => {
    if (newMember.name && newMember.relationship) {
      const newId = Math.max(...familyMembers.map(m => m.id)) + 1;
      setFamilyMembers([...familyMembers, {
        id: newId,
        name: newMember.name,
        relationship: newMember.relationship,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastPost: "Welcome to the family circle!",
        postTime: "Just now"
      }]);
      setNewMember({ name: "", relationship: "", email: "" });
      setIsAddMemberOpen(false);
    }
  };

  const familyPosts = [
    {
      author: "Sarah Johnson",
      relationship: "Mother",
      content: "Just finished my morning prayers. Feeling blessed! May Allah guide us all today. 🤲",
      time: "2 hours ago",
      likes: 12,
      comments: 3
    },
    {
      author: "Ahmed Johnson",
      relationship: "Father",
      content: "Reading Surah Al-Kahf this Friday. May Allah bless us all with guidance and protection.",
      time: "4 hours ago",
      likes: 8,
      comments: 2
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
        <div className="flex-1 lg:ml-64 px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">My Family Circle</h1>
                    <p className="text-gray-600">You have {familyMembers.length} family members</p>
                  </div>
                </div>
                
                <Dialog open={isAddMemberOpen} onOpenChange={setIsAddMemberOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add Family Member
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Family Member</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={newMember.name}
                          onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                          placeholder="Enter family member's name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="relationship">Relationship</Label>
                        <Input
                          id="relationship"
                          value={newMember.relationship}
                          onChange={(e) => setNewMember({...newMember, relationship: e.target.value})}
                          placeholder="e.g., Mother, Father, Sister, Brother"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email (Optional)</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newMember.email}
                          onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                          placeholder="email@example.com"
                        />
                      </div>
                      <Button onClick={handleAddMember} className="w-full">
                        Add Member
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="members" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="members">Family Members</TabsTrigger>
                <TabsTrigger value="tree">Family Tree</TabsTrigger>
                <TabsTrigger value="feed">Family Feed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="members" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {familyMembers.map((member) => (
                    <Card key={member.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{member.name}</CardTitle>
                            <p className="text-sm text-gray-600">{member.relationship}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-700 mb-2">{member.lastPost}</p>
                          <p className="text-xs text-gray-500">{member.postTime}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tree">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-12">
                      <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Family Tree View</h3>
                      <p className="text-gray-500">Visual family tree coming soon!</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="feed" className="space-y-4">
                {familyPosts.map((post, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">{post.author}</h4>
                            <span className="text-sm text-gray-500">({post.relationship})</span>
                            <span className="text-sm text-gray-400">• {post.time}</span>
                          </div>
                          <p className="mt-2 text-gray-700">{post.content}</p>
                          <div className="flex items-center space-x-4 mt-3 pt-3 border-t">
                            <Button variant="ghost" size="sm" className="text-gray-600">
                              <Heart className="w-4 h-4 mr-1" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600">
                              <Share className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyCircle;
