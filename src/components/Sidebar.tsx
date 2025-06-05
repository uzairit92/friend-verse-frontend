
import { Home, Users, Bookmark, Calendar, Clock, ChevronDown, Heart, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Home", active: true, path: "/" },
    { icon: Users, label: "Friends", path: "/friends" },
    { icon: Bookmark, label: "Saved", path: "/saved" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Clock, label: "Memories", path: "/memories" },
  ];

  const familyMembers = [
    { name: "Sarah Ahmed", relationship: "Mother", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { name: "Omar Ahmed", relationship: "Father", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { name: "Aisha Ahmed", relationship: "Sister", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  ];

  const shortcuts = [
    { name: "React Developers", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { name: "Photography Club", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { name: "Tech News", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  ];

  return (
    <div className="p-4 h-full">
      <div className="space-y-2">
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="font-medium">John Doe</span>
        </div>

        {menuItems.map((item, index) => (
          <Link key={index} to={item.path || "/"}>
            <Button
              variant="ghost"
              className={`w-full justify-start space-x-3 h-10 ${
                item.active ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          </Link>
        ))}
      </div>

      {/* Family Circle Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-2 py-2">
          <Link to="/family-circle" className="flex items-center space-x-2 hover:text-blue-600">
            <Heart className="w-4 h-4 text-green-600" />
            <h3 className="font-semibold text-gray-700">My Family Circle</h3>
          </Link>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        
        <div className="px-2 mb-2">
          <span className="text-xs text-gray-500">{familyMembers.length} family members</span>
        </div>
        
        <div className="space-y-2">
          {familyMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Avatar className="w-8 h-8">
                <AvatarImage src={member.image} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <span className="text-sm font-medium">{member.name}</span>
                <p className="text-xs text-gray-500">{member.relationship}</p>
              </div>
            </div>
          ))}
          
          <Link to="/family-circle">
            <Button variant="ghost" className="w-full justify-start space-x-3 h-10 text-blue-600">
              <UserPlus className="w-4 h-4" />
              <span className="text-sm">Add Family Member</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between px-2 py-2">
          <h3 className="font-semibold text-gray-700">Your shortcuts</h3>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
        
        <div className="space-y-2">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Avatar className="w-8 h-8">
                <AvatarImage src={shortcut.image} />
                <AvatarFallback>{shortcut.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{shortcut.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
