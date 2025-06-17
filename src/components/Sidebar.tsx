
import { Home, Users, Bookmark, Calendar, Clock, ChevronDown, BookOpen, Video, ShoppingBag, Gamepad, Settings, Save, Zap, Film, Megaphone, DollarSign, CreditCard, FileText, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/hooks/useLanguage";
import clsx from "clsx";

const Sidebar = () => {
  const location = useLocation();
  const { language, t, toggleLanguage } = useLanguage();

  const mainMenuItems = [
    { icon: Home, label: t('feed'), to: "/", active: location.pathname === "/" },
    { icon: BookOpen, label: t('quran'), to: "/quran", active: location.pathname === "/quran" },
    { icon: Video, label: t('videos'), to: "/videos", active: location.pathname === "/videos" },
    { icon: ShoppingBag, label: t('marketplace'), to: "/marketplace", active: location.pathname === "/marketplace" },
    { icon: Gamepad, label: t('games'), to: "/games", active: location.pathname === "/games" },
    { icon: Settings, label: t('settings'), to: "/settings", active: location.pathname === "/settings" },
  ];

  const newSidebarItems = [
    { icon: Save, label: t('save'), to: "/save" },
    { icon: Users, label: t('groups'), to: "/groups" },
    { icon: Zap, label: t('blink'), to: "/blink" },
    { icon: Film, label: t('blinkEvents'), to: "/blink-events" },
    { icon: Megaphone, label: t('adsManager'), to: "/ads-manager" },
    { icon: DollarSign, label: t('fundraiser'), to: "/fundraiser" },
    { icon: CreditCard, label: t('orders'), to: "/orders" },
    { icon: FileText, label: t('pages'), to: "/pages" },
    { icon: Clock, label: t('recent'), to: "/recent" },
  ];

  const shortcuts = [
    { name: "React Developers", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { name: "Photography Club", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    { name: "Tech News", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  ];

  return (
    <div className="p-4 h-full text-left">
      <div className="space-y-2">
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="font-medium">John Doe</span>
        </div>

        {/* Main Navigation */}
        {mainMenuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={clsx(
              "w-full justify-start space-x-3 h-10",
              item.active 
                ? "bg-blue-50 text-blue-600 hover:bg-blue-100" 
                : "hover:bg-gray-100"
            )}
            asChild
          >
            <Link to={item.to}>
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          </Button>
        ))}

        {/* Separator */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* New Sidebar Items */}
        {newSidebarItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start space-x-3 h-10 hover:bg-gray-100"
            asChild
          >
            <Link to={item.to}>
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          </Button>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between px-2 py-2">
          <h3 className="font-semibold text-gray-700">{t('shortcuts')}</h3>
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

      {/* Language Toggle */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Button
          variant="ghost"
          onClick={toggleLanguage}
          className="w-full justify-start space-x-3 h-10 hover:bg-gray-100"
        >
          <Globe className="w-5 h-5" />
          <span>{t('language')}: English</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
