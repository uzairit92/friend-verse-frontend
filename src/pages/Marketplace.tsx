import PageLayout from "@/components/PageLayout";
import ProductList from "@/components/ProductList";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";

const Marketplace = () => {
  return (
    <PageLayout showRightSidebar={false}>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6">Marketplace</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/4">
            <SearchBar />
            <CategoryFilter />
          </div>
          <div className="md:w-3/4">
            <ProductList />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Marketplace;
