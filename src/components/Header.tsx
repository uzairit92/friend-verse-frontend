
import { Search, Home, Users, MessageCircle, Heart } from "lucide-react";
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
import ProfileSetupModal from "@/components/ProfileSetupModal";

const Header = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Left Section - Logo, Title & Search */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">Fitraah</div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search Fitraah" 
                  className="pl-10 w-64 bg-gray-100 border-none rounded-full"
                />
              </div>
            </div>

            {/* Center Navigation */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-gray-100 rounded-lg"
              >
                <Home className="w-6 h-6 text-blue-600" />
              </Button>
              {/* Marketplace Nav */}
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-gray-100 rounded-lg"
                asChild
              >
                <a href="/marketplace" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 2l1.5 2.5M17 2l-1.5 2.5M4 7h16l-1.5 14h-13L4 7zm5 5a3 3 0 006 0"
                    />
                  </svg>
                  <span className="hidden lg:inline font-semibold text-green-700">Marketplace</span>
                </a>
              </Button>
              {/* Games Section Nav */}
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-gray-100 rounded-lg"
                asChild
              >
                <a href="/games" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 20v-2M18 20v-2M2 14v-3.2a2 2 0 011.21-1.81A9.96 9.96 0 0112 6a9.96 9.96 0 018.79 2.99A2 2 0 0122 10.8V14a4 4 0 01-4 4H6a4 4 0 01-4-4ZM8.5 16v-1M15.5 16v-1M9 10h.01M15 10h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="hidden lg:inline font-semibold text-pink-600">Games</span>
                </a>
              </Button>
              {/* Profile Text Nav */}
              <Button
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsProfileModalOpen(true)}
              >
                <span className="font-semibold text-gray-700">Profile</span>
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
                <Users className="w-6 h-6 text-gray-600 hover:text-blue-600" />
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
                <MessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-600" />
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
                <Heart className="w-6 h-6 text-gray-600 hover:text-blue-600" />
              </Button>
            </div>

            {/* Right Section - Profile Dropdown */}
            <div className="flex items-center space-x-2">
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
                  <DropdownMenuItem>Your Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsProfileModalOpen(true)}>
                    Edit Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <ProfileSetupModal 
        open={isProfileModalOpen} 
        onOpenChange={setIsProfileModalOpen} 
      />
    </>
  );
};

export default Header;
