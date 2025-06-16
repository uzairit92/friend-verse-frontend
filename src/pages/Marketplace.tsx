
import PageLayout from "@/components/PageLayout";
import { ProductList } from "@/components/marketplace/ProductList";
import { CategoryMenu } from "@/components/marketplace/CategoryMenu";
import { useState } from "react";
import { Search } from "lucide-react";

// Mock data for demo
const mockListings = [
  {
    id: "1",
    title: "Islamic Calligraphy Set",
    price: 45,
    description: "Beautiful handcrafted calligraphy set with traditional Islamic designs",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    seller: {
      name: "Ahmad Hassan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40",
      distance: "2.5 km"
    },
    date: "2 days ago"
  },
  {
    id: "2", 
    title: "Prayer Rug Collection",
    price: 80,
    description: "Authentic hand-woven prayer rugs from Turkey",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    seller: {
      name: "Fatima Ali",
      distance: "1.2 km"
    },
    date: "1 week ago"
  }
];

const Marketplace = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  const handleCategorySelect = (category: string) => {
    console.log("Selected category:", category);
  };

  const handleLoadMore = () => {
    console.log("Loading more items...");
  };

  return (
    <PageLayout showRightSidebar={false}>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6">Marketplace</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/4 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
              <input
                type="text"
                className="pl-10 pr-4 py-2 w-full rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"
                placeholder="Search marketplace..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
              />
            </div>
            
            {/* Category Filter */}
            <CategoryMenu onSelectCategory={handleCategorySelect} />
          </div>
          
          <div className="md:w-3/4">
            <ProductList 
              items={mockListings}
              hasMore={true}
              onLoadMore={handleLoadMore}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Marketplace;
