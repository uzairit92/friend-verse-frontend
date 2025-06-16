
import PageLayout from "@/components/PageLayout";
import VideoFilters from "@/components/VideoFilters";
import VideoGrid from "@/components/VideoGrid";

const Videos = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Islamic Videos
          </h1>
        </div>
        <VideoFilters />
        <VideoGrid />
      </div>
    </PageLayout>
  );
};

export default Videos;
