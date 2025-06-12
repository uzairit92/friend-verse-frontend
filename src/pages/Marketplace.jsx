
import { useState } from "react";
import { Search, Plus, ChevronDown, MapPin, Filter, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Header from "@/components/Header";

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("Nearby");

  const topCategories = [
    "Vehicles",
    "Rentals", 
    "Womenswear",
    "Menswear",
    "Furniture",
    "Electronics"
  ];

  const allCategories = [
    "Antiques & Collectibles",
    "Arts and Crafts",
    "Auto Parts",
    "Baby",
    "Books, Movies & Music",
    "Electronics",
    "Free",
    "Furniture",
    "Garage Sale",
    "Health & Beauty",
    "Home & Kitchen",
    "Home Improvement",
    "Housing for Sale",
    "Jewelry & Watches",
    "Kidswear & Baby",
    "Luggage & Bags",
    "Menswear",
    "Miscellaneous",
    "Musical Instruments",
    "Patio & Garden",
    "Pet Supplies",
    "Rentals",
    "Sporting Goods",
    "Toys and Games",
    "Vehicles",
    "Womenswear"
  ];

  const marketplaceOptions = [
    "Local Listings",
    "Buy and Sell Groups",
    "Sale Events",
    "Saved Items"
  ];

  // Sample product data
  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      price: "$899",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      seller: "Ahmed Khan",
      distance: "2.5 km away",
      postedDate: "2 days ago"
    },
    {
      id: 2,
      title: "Vintage Leather Sofa",
      price: "$450",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      seller: "Sarah Ahmed",
      distance: "3.1 km away",
      postedDate: "1 day ago"
    },
    {
      id: 3,
      title: "Honda Civic 2020",
      price: "$18,500",
      image: "https://images.unsplash.com/photo-1549927681-0b673b922b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      seller: "Omar Hassan",
      distance: "5.2 km away",
      postedDate: "3 days ago"
    },
    {
      id: 4,
      title: "MacBook Air M1",
      price: "$750",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      seller: "Fatima Ali",
      distance: "1.8 km away",
      postedDate: "5 hours ago"
    },
    {
      id: 5,
      title: "Gaming Chair",
      price: "$150",
      image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      seller: "Ali Rahman",
      distance: "4.3 km away",
      postedDate: "1 week ago"
    },
    {
      id: 6,
      title: "Wedding Dress",
      price: "$300",
      image: "https://images.unsplash.com/photo-1594736797933-d0a87b08f5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      seller: "Aisha Malik",
      distance: "6.1 km away",
      postedDate: "4 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-16 max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
          <p className="text-gray-600">Buy and sell items in your community</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search Marketplace" 
              className="pl-10 py-3 text-lg bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            <Plus className="w-5 h-5 mr-2" />
            Sell Something
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-6 py-3 rounded-xl border-2">
                Categories
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto">
              {marketplaceOptions.map((option) => (
                <DropdownMenuItem key={option} className="font-medium text-blue-600">
                  {option}
                </DropdownMenuItem>
              ))}
              <div className="border-t my-2"></div>
              <div className="px-2 py-1 text-sm font-semibold text-gray-700">Top Categories</div>
              {topCategories.map((category) => (
                <DropdownMenuItem 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="hover:bg-gray-100"
                >
                  {category}
                </DropdownMenuItem>
              ))}
              <div className="border-t my-2"></div>
              <div className="px-2 py-1 text-sm font-semibold text-gray-700">All Categories</div>
              {allCategories.map((category) => (
                <DropdownMenuItem 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="hover:bg-gray-100"
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-6 py-3 rounded-xl border-2">
                <MapPin className="w-4 h-4 mr-2" />
                {selectedLocation}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedLocation("Nearby")}>
                Nearby
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedLocation("Within 5 km")}>
                Within 5 km
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedLocation("Within 10 km")}>
                Within 10 km
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedLocation("Within 25 km")}>
                Within 25 km
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" className="px-6 py-3 rounded-xl border-2">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>

          <Button variant="outline" className="px-6 py-3 rounded-xl border-2">
            <Calendar className="w-4 h-4 mr-2" />
            Date Posted
          </Button>
        </div>

        {/* Current Filter Display */}
        {selectedCategory !== "All Categories" && (
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Showing results for:</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {selectedCategory}
              </span>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-t-xl">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {product.price}
                </p>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {product.distance}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{product.seller}</span>
                  <span>{product.postedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" className="px-8 py-3 rounded-xl border-2">
            Load More Items
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
