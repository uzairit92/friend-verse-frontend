
import PostCreator from "./PostCreator";
import Post from "./Post";

const NewsFeed = () => {
  const posts = [
    {
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "2 hours ago"
      },
      content: "Just finished an amazing hiking trip in the mountains! The views were absolutely breathtaking. Nature never fails to inspire me. 🏔️",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 124,
      comments: 18,
      shares: 5
    },
    {
      author: {
        name: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "4 hours ago"
      },
      content: "Excited to share that I just launched my new web development course! It covers everything from React basics to advanced state management. Check it out and let me know what you think!",
      likes: 89,
      comments: 23,
      shares: 12
    },
    {
      author: {
        name: "Emily Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "6 hours ago"
      },
      content: "Coffee shop vibes today ☕ Working on some exciting new designs for a local bakery. There's something magical about the combination of caffeine and creativity!",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 67,
      comments: 9,
      shares: 3
    },
    {
      author: {
        name: "David Park",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "8 hours ago"
      },
      content: "Remember: Progress over perfection. Every small step counts towards your goals. Keep pushing forward, even when it feels difficult. You've got this! 💪",
      likes: 156,
      comments: 31,
      shares: 27
    },
    {
      author: {
        name: "Lisa Thompson",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "12 hours ago"
      },
      content: "Sunset photography session at the beach was incredible tonight! The golden hour never disappoints. Already planning my next shoot for this weekend.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 203,
      comments: 45,
      shares: 15
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <PostCreator />
      <div className="space-y-4">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
