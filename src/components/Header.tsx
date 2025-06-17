
import { Search, Home, Users, MessageCircle, Bell, Menu, Heart, Clock, Calendar, DollarSign, Plane } from "lucide-react";
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
          {/* Left Section - Logo, Title & Search */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">Fitraah</div>
            </div>
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search Fitraah" 
                className="pl-10 w-64 bg-gray-100 border-none rounded-full"
              />
            </div>
          </div>

          {/* Center Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
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
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <Users className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <MessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <Heart className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <Clock className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <Calendar className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <Plane className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
          </div>

          {/* Right Section - Notifications and Profile Dropdown */}
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
                <DropdownMenuItem>Your Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
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
            <div className="grid grid-cols-4 gap-2 mb-4">
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
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <Heart className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Zikar</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <Clock className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Namaz</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <Calendar className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Events</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <DollarSign className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Zakat</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <Plane className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Hajj/Umrah</span>
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
