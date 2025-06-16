
import React from "react";
import MainLayout from "@/components/MainLayout";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";

interface PageLayoutProps {
  children: React.ReactNode;
  showRightSidebar?: boolean;
}

const PageLayout = ({ children, showRightSidebar = true }: PageLayoutProps) => {
  return (
    <MainLayout>
      <div className="flex max-w-7xl mx-auto pt-0">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-64 fixed left-0 top-16 h-full overflow-y-auto">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className={`flex-1 lg:ml-64 ${showRightSidebar ? 'lg:mr-80' : ''} px-4 py-6`}>
          {children}
        </div>
        
        {/* Right Sidebar - Hidden on mobile */}
        {showRightSidebar && (
          <div className="hidden lg:block w-80 fixed right-0 top-16 h-full overflow-y-auto">
            <RightSidebar />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default PageLayout;
