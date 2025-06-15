
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Book, GraduationCap, ShoppingBag, MessageSquare, UserCircle, Settings } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  {
    to: "/",
    label: "Feed",
    icon: <Home className="w-5 h-5" />,
  },
  {
    to: "/quran",
    label: "Quran",
    icon: <Book className="w-5 h-5" />,
  },
  {
    to: "/education",
    label: "Education",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    to: "/marketplace",
    label: "Marketplace",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    to: "/messaging",
    label: "Messaging",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: <UserCircle className="w-5 h-5" />,
  },
  {
    to: "/settings",
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center px-2 md:px-4 h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 mr-4 flex-shrink-0">
            Fitraah
          </Link>
          {/* Center navigation */}
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-1 md:space-x-4 items-center">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={clsx(
                      "flex flex-col md:flex-row md:gap-2 items-center px-2 py-1 md:py-2 rounded-lg font-medium text-sm md:text-base hover:bg-blue-50 transition",
                      location.pathname === item.to
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700"
                    )}
                  >
                    {item.icon}
                    <span className="hidden md:inline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* Spacer for navbar */}
      <div className="h-14 md:h-16" />
      {/* Main content */}
      <main className="flex-1 w-full max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
