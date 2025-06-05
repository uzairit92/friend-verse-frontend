
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsFeed from "@/components/NewsFeed";
import RightSidebar from "@/components/RightSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex max-w-7xl mx-auto pt-16">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-64 fixed left-0 top-16 h-full overflow-y-auto">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-64 lg:mr-80 px-4 py-6">
          <NewsFeed />
        </div>
        
        {/* Right Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-80 fixed right-0 top-16 h-full overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
