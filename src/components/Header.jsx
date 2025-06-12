
import { Search, Home, Users, MessageCircle, Bell, Menu, BookOpen, Clock, Calendar, DollarSign, Plane, Circle, ShoppingBag } from "lucide-react";
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
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">Fitraah</Link>
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
            <Link to="/">
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
                <Home className="w-6 h-6 text-blue-600" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <MessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </Button>
            <Link to="/marketplace">
              <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-50 rounded-lg border-2 border-transparent hover:border-blue-200 transition-all duration-200">
                <ShoppingBag className="w-6 h-6 text-blue-600 hover:text-blue-700" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-lg">
              <Circle className="w-6 h-6 text-gray-600 hover:text-blue-600" />
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
            <div className="grid grid-cols-4 gap-2 mb-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                  <Home className="w-6 h-6 text-blue-600" />
                  <span className="text-xs mt-1">Home</span>
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <BookOpen className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Education</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <MessageCircle className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Messages</span>
              </Button>
              <Link to="/marketplace">
                <Button variant="ghost" size="sm" className="flex flex-col items-center p-2 hover:bg-blue-50 rounded-lg border-2 border-transparent hover:border-blue-200">
                  <ShoppingBag className="w-6 h-6 text-blue-600" />
                  <span className="text-xs mt-1 text-blue-600 font-medium">Marketplace</span>
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <Circle className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Tasbeeh</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
                <Clock className="w-6 h-6 text-gray-600" />
                <span className="text-xs mt-1">Prayers</span>
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
