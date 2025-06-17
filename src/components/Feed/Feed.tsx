import { useState } from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5'; // Chat icon
import { FaBookmark, FaImage, FaLink, FaRegCommentDots, FaShare, FaThumbsUp, FaVideo } from 'react-icons/fa';
import profile1 from '../../assets/aatik-tasneem-7omHUGhhmZ0-unsplash.jpg';
import post1 from '../../assets/sean-pollock-PhYq704ffdA-unsplash.jpg';

import profile2 from '../../assets/juan-encalada-WC7KIHo13Fc-unsplash.jpg';
import post2 from '../../assets/agatha-depine-xtNhLFvL3co-unsplash.jpg';

import profile3 from '../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg';
import post3 from '../../assets/per-loov-oXqn2CXC_9Q-unsplash.jpg';

import profile4 from '../../assets/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg';
import profile5 from '../../assets/alex-suprun-mynsNaNwVDc-unsplash.jpg';
import profile6 from '../../assets/vince-veras-AJIqZDAUD7A-unsplash.jpg';
import profile7 from '../../assets/jonas-kakaroto-KIPqvvTOC1s-unsplash (1).jpg';
import profile8 from '../../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';
import profile9 from '../../assets/nicolas-horn-MTZTGvDsHFY-unsplash.jpg';

import chatImg1 from '../../assets/alex-suprun-mynsNaNwVDc-unsplash.jpg';
import chatImg2 from '../../assets/nicolas-horn-MTZTGvDsHFY-unsplash.jpg';
import chatImg3 from '../../assets/taras-shypka-QEgHL8NN7nM-unsplash.jpg';

import blogImg1 from '../../assets/per-loov-oXqn2CXC_9Q-unsplash.jpg';
import blogImg2 from '../../assets/pepi-stojanovski-MJSFNZ8BAXw-unsplash.jpg';
import blogImg3 from '../../assets/anne-nygard-x07ELaNFt34-unsplash.jpg';
import blogImg4 from '../../assets/isaac-smith-AT77Q0Njnt0-unsplash.jpg';

const dummyPosts = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Entrepreneur',
    image: profile1,
    text: 'Excited to pitch my idea to new investors!',
    postImage: post1,
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Mentor',
    image: profile2,
    text: 'Mentorship is the bridge between dreams and reality.',
    postImage: post2,
  },
  {
    id: 3,
    name: 'Adam Karpik',
    role: 'Mentor',
    image: profile3,
    text: 'Mentorship is the bridge between dreams and reality.',
    postImage: post3,
  },
  {
    id: 4,
    name: 'Jeff Gibson',
    role: 'Mentor',
    image: profile4,
    text: 'Mentorship is the bridge between dreams and reality.',
    postImage: post1,
  },
];

const connections = [
  { name: 'Ananya Iyer', role: 'Mentor', image: profile3 },
  { name: 'Ravi Kapoor', role: 'Entrepreneur', image: profile4 },
  { name: 'Shreya', role: 'Entrepreneur', image: profile5 },
  { name: 'Ankita Mahajan', role: 'Entrepreneur', image: profile6 },
  { name: 'Rahul Arora', role: 'Entrepreneur', image: profile7},
  { name: 'Emmanuel Paraskakis', role: 'Entrepreneur', image: profile8 },
  { name: 'Gilles Mattelin', role: 'Entrepreneur', image: profile9 },


];

const community = { name: 'Founders & Innovators', joined: false };

const chatUsers = [
  {
    name: 'Ananya Iyer',
    message: 'Let’s connect tomorrow?',
    image: chatImg1,
  },
  {
    name: 'Ravi Kapoor',
    message: 'Got feedback on pitch deck.',
    image: chatImg2,
  },
  {
    name: 'Sneha Reddy',
    message: 'Catch up this evening?',
    image: chatImg3,
  },
  {
    name: 'Ankita Mahajan',
    message: 'Catch up this evening?',
    image: profile2,
  },
  {
    name: 'Rahul Arora',
    message: 'Catch up this evening?',
    image: profile6,
  },
  {
    name: 'Sneha Reddy',
    message: 'Catch up this evening?',
    image: profile4 ,
  },
  {
    name: 'Emmanuel Paraskakis',
    message: 'Catch up this evening?',
    image: profile6 ,
  },
  {
    name: 'Gilles Mattelin',
    message: 'Catch up this evening?',
    image: profile8 ,
  },
];


const blogs = [
  { title: 'How to Raise Funds as a Startup', image: blogImg1 },
  { title: 'Top 10 Mentor Tips', image: blogImg2 },
  { title: 'Productivity Hacks for Founders', image: blogImg3 },
  { title: 'Networking that Works', image: blogImg4 },
];

const Feed = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [joined, setJoined] = useState(false);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [likedPosts] = useState<number[]>([]);
const [savedPosts] = useState<number[]>([]);
// const [sharedPosts, setSharedPosts] = useState<number[]>([]);
// const [repostedPosts, setRepostedPosts] = useState<number[]>([]);



  const handlePost = () => {
    console.log({ text, image });
    setText('');
    setImage(null);
  };

 

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleFollow(_id: number): void {
    throw new Error('Function not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function toggleLike(id: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left - Connect Section */}
      <div className="lg:w-1/4 p-4 space-y-4 hidden lg:block">
  <h3 className="font-bold text-xl mb-4 text-gray-800">✨ People You May Know</h3>

  {connections.map((conn, i) => (
    <div
      key={i}
      className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center transition hover:shadow-lg"
    >
      <img
        src={conn.image}
        alt={conn.name}
        className="w-16 h-16 rounded-full object-cover border-4 border-purple-100 shadow-sm mb-3"
      />
      <h4 className="text-md font-semibold text-gray-800">{conn.name}</h4>
      <p className="text-sm text-gray-500 mb-1">{conn.role}</p>
      <p className="text-xs text-gray-400 mb-2 px-2">
        Passionate about innovation and mentoring the next generation of founders.
      </p>

      {/* Simulated follower count */}
      <p className="text-xs text-gray-500 mb-3">👥 {Math.floor(Math.random() * 900 + 100)} followers</p>

      <button className="bg-blue-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition">
        Connect +
      </button>
    </div>
  ))}
</div>


      {/* Middle - Feed Content */}
      <div className="lg:w-2/4 w-full px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <img
          src={profile8 }
          alt="User"
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-semibold text-gray-800">Anshuman Singh</p>
          <p className="text-sm text-gray-500">What's on your mind?</p>
        </div>
      </div>

      {/* Text Input */}
      <textarea
        placeholder="Share something with your network..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 rounded-md border border-gray-300 focus:outline-purple-500 mb-4 resize-none min-h-[100px]"
      />

      {/* Media Icons */}
      <div className="flex items-center gap-6 mb-4 text-blue-600">
        <label className="flex items-center gap-2 cursor-pointer hover:text-purple-800">
          <FaImage />
          <span className="text-sm font-medium">Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="hidden"
          />
        </label>

        <button className="flex items-center gap-2 hover:text-purple-800">
          <FaLink />
          <span className="text-sm font-medium">Link</span>
        </button>

        <button className="flex items-center gap-2 hover:text-green-500">
          <FaVideo />
          <span className="text-sm font-medium">Video</span>
        </button>
      </div>

      {/* Post Button */}
      <button
        onClick={handlePost}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-all"
      >
        Post
      </button>
    </div>
{dummyPosts.map((post) => (
  <div
    key={post.id}
    className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-2xl"
  >
    {/* Top Row - User Info */}
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-4">
        <img
          src={post.image}
          alt={post.name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500 shadow-sm"
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{post.name}</h4>
          <p className="text-sm text-gray-500">{post.role}</p>
        </div>
      </div>

      <button
        onClick={() => handleFollow(post.id)}
        className="px-5 py-1.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-md hover:brightness-110 transition duration-200"
      >
        Follow
      </button>
    </div>

    {/* Post Text */}
    <p className="text-gray-800 text-[15px] leading-relaxed mb-4">{post.text}</p>

    {/* Post Image */}
    {post.postImage && (
      <div className="overflow-hidden rounded-xl shadow-sm mb-4">
        <img
          src={post.postImage}
          alt="Post"
          className="w-full h-auto object-cover transition-transform hover:scale-[1.02] duration-300"
        />
      </div>
    )}

    {/* Reactions */}
    <div className="flex justify-between items-center pt-4 border-t text-gray-600 text-sm">
      {/* Like */}
      <div
        onClick={() => toggleLike(post.id)}
        onMouseEnter={() => setHoveredPost(post.id)}
        onMouseLeave={() => setHoveredPost(null)}
        className={`relative flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition ${
          likedPosts.includes(post.id) ? 'text-blue-600 font-semibold' : ''
        }`}
      >
        <FaThumbsUp />
        <span>Like</span>

        {/* Reactions Panel */}
        {hoveredPost === post.id && (
          <div className="absolute -top-12 left-0 flex space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-lg z-10 text-xl animate-fade-in">
            <span className="cursor-pointer hover:scale-125 transition">👍</span>
            <span className="cursor-pointer hover:scale-125 transition">❤️</span>
            <span className="cursor-pointer hover:scale-125 transition">😂</span>
            <span className="cursor-pointer hover:scale-125 transition">😮</span>
          </div>
        )}
      </div>

      {/* Comment */}
      <div className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
        <FaRegCommentDots />
        <span>Comment</span>
      </div>

      {/* Share */}
      <div className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
        <FaShare />
        <span>Share</span>
      </div>

      {/* Save */}
      <div
        className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition ${
          savedPosts?.includes?.(post.id) ? 'text-blue-600 font-semibold' : ''
        }`}
      >
        <FaBookmark />
        <span>Save</span>
      </div>
    </div>
  </div>
))}




      </div>

      {/* Right - Community, Ads, Blogs */}
      <div className="lg:w-1/4 w-full p-4 space-y-6">
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start space-y-4 hover:shadow-lg transition">
  <h3 className="text-xl font-bold text-gray-800">🌐 Join Community</h3>

  <p className="text-md text-gray-600 font-medium">{community.name}</p>

  <button
    onClick={() => setJoined(!joined)}
    className={`px-5 py-2.5 text-sm rounded-full font-semibold transition duration-200 ${
      joined
        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        : 'bg-green-600 text-white hover:bg-green-700'
    }`}
  >
    {joined ? '✅ Joined' : 'Join Now'}
  </button>
</div>


      <div className="relative bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 text-gray-900 p-4 rounded-xl shadow-lg border border-yellow-300 overflow-hidden animate-pulse-slow group">
  {/* Sparkles */}
  <div className="absolute -top-2 -left-2 animate-bounce-slow">
    <span className="text-yellow-500 text-2xl">✨</span>
  </div>
  <div className="absolute -bottom-2 -right-2 animate-ping">
    <span className="text-yellow-400 text-lg">💡</span>
  </div>

  <h4 className="text-lg font-extrabold mb-1 tracking-wide group-hover:scale-105 transition-transform duration-300">
    🔥 Limited Time Offer!
  </h4>
  <p className="text-sm font-medium group-hover:text-yellow-700 transition-colors duration-300">
    Promote your startup today.{" "}
    <a
      href="#"
      className="underline text-yellow-600 font-semibold hover:text-yellow-800 transition"
    >
      Contact us
    </a>{" "}
    for ad placements.
  </p>
</div>



        <div className="bg-white p-6 rounded-xl shadow-lg">
  <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-2">📚 Featured Blogs</h3>

  {blogs.map((blog, idx) => (
    <div
      key={idx}
      className="flex items-start gap-4 mb-4 hover:bg-gray-50 p-2 rounded-lg transition-all cursor-pointer"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-14 h-14 rounded-lg object-cover shadow-sm"
      />
      <div>
        <h4 className="text-base font-semibold text-gray-700 hover:text-blue-600 transition">
          {blog.title}
        </h4>
        <p className="text-sm text-gray-500 line-clamp-2">Short description or preview goes here...</p>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Floating Chat Button */}
      <button
  className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-2.5 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-700"
  onClick={() => setShowChat(!showChat)}
>
  <IoChatbubblesOutline className="text-xl" />
  <span>Chat</span>
</button>


      {/* Chat Drawer */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-72 bg-white shadow-xl rounded-md max-h-[70vh] overflow-y-auto">
          <div className="p-3 border-b font-semibold">Messages</div>
          {chatUsers.map((user, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedChat(user.name)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b flex items-center space-x-3"
            >
              <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chat Box */}
      {selectedChat && (
        <div className="fixed bottom-6 right-80 w-80 h-96 bg-white shadow-lg rounded-md flex flex-col">
          <div className="p-3 border-b font-semibold flex justify-between items-center">
            <span>{selectedChat}</span>
            <button onClick={() => setSelectedChat(null)} className="text-sm text-red-500">Close</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto text-gray-500 text-sm">
            <p>Hello {selectedChat}, this is a dummy chat window.</p>
          </div>
          <div className="p-2 border-t">
            <input
              className="w-full p-2 rounded border"
              type="text"
              placeholder="Type a message..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
