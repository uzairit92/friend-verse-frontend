
import { Search, Circle, MessageCircle, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo and Search */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500">
              <Menu className="h-6 w-6" />
            </button>
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">FV</span>
              </div>
              <span className="hidden sm:block text-xl font-bold text-emerald-600">Friend Verse</span>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search Friend Verse..."
                className="w-64 px-4 py-2 pl-10 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right - Navigation Icons and Auth */}
          <div className="flex items-center space-x-2">
            {/* Navigation Icons */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Circle className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <MessageCircle className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/login')}
                className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                onClick={() => navigate('/register')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
