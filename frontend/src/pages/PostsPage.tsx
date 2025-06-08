import React, { useState } from "react";
import { Calendar, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogs = Array.from({ length: 10 }).map((_, i) => ({
  title: `Blog Post Title ${i + 1}`,
  image: `https://picsum.photos/seed/${i}/800/400`,
  author: {
    name: `Author ${i + 1}`,
    image: `https://randomuser.me/api/portraits/men/${i + 10}.jpg`,
  },
  date: `May ${10 + i}, 2025`,
  tags: ["Business", "Tech", "Finance"].slice(0, (i % 3) + 1),
  excerpt:
    "This is a short summary of the blog post to entice readers to learn more...",
  fullContent: `This is the full content of blog post number ${i + 1}. Here, you would include paragraphs, quotes, images, and more to complete the article. It's designed to showcase how the modal works with longer content.`,
}));

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Latest Insights & Stories</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our latest blog posts on entrepreneurship, technology, finance, and more.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              onClick={() => setSelectedBlog(blog)}
              className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{blog.author.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blog.date}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white max-w-3xl w-full p-6 rounded-xl relative overflow-y-auto max-h-[90vh] shadow-2xl">
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedBlog.title}</h2>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedBlog.author.image}
                  alt={selectedBlog.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-700">{selectedBlog.author.name}</p>
                  <p className="text-sm text-gray-500">{selectedBlog.date}</p>
                </div>
              </div>
              <div className="flex gap-2 mb-6">
                {selectedBlog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-base whitespace-pre-line leading-relaxed">
                {selectedBlog.fullContent}
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
