
import { Search, Home, Users, MessageCircle, Bell, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-blue-600">Fitraah</div>
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search Fitraah" 
                className="pl-10 w-64 bg-gray-100 border-none rounded-full"
              />
            </div>
          </div>

          {/* Center Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <Home className="w-6 h-6 text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <Users className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <MessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5 text-gray-600" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-1 rounded-full">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex justify-around">
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <Home className="w-6 h-6 text-blue-600" />
                <span className="text-xs mt-1">Home</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <Users className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Friends</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <MessageCircle className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Messages</span>
              </Button>
            </div>
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search Fitraah" 
                  className="pl-10 w-full bg-gray-100 border-none rounded-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
