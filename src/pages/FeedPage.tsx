// src/pages/FeedPage.tsx
import Navbar from "../components/Navbar";
import Feed from "../components/Feed/Feed";
import Footer from "../components/Footer";

const FeedPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Feed />
      </div>
      <Footer />
    </div>
  );
};

export default FeedPage;
