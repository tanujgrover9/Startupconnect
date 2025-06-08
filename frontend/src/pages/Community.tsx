import React, { useState } from "react";
import {
  Search,
  Send,
  Users,
  Video,
  Phone,
  PlusCircle,
  MessageSquareHeart,
  Sparkles,
  Paperclip
} from "lucide-react";

const communities = [
  { id: 1, name: "React Developers", logo: "⚛️", messages: [] },
  { id: 2, name: "Gaming Hub", logo: "🎮", messages: [] },
  { id: 3, name: "Fitness Tribe", logo: "💪", messages: [] },
  { id: 4, name: "Crypto Talk", logo: "💰", messages: [] },
  { id: 5, name: "Business Minds", logo: "📊", messages: [] },
  { id: 6, name: "Startup Ideas", logo: "🚀", messages: [] },
  { id: 7, name: "Tech News", logo: "📰", messages: [] },
  { id: 8, name: "Govt. Updates", logo: "🏛️", messages: [] },
];

const CommunityPage = () => {
  const [activeCommunity, setActiveCommunity] = useState(communities[0]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [search, setSearch] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { user: "You", text: message }]);
      setMessage("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChat([...chat, { user: "You", text: `Uploaded: ${file.name}` }]);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r shadow-lg p-4 flex flex-col">
        <h2 className="text-2xl font-extrabold text-purple-600 mb-4 flex items-center gap-2">
          <Sparkles size={20} /> Discover Communities
        </h2>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search communities..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-purple-300">
          {communities
            .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
            .map((comm) => (
              <div
                key={comm.id}
                onClick={() => {
                  setActiveCommunity(comm);
                  setChat([]);
                }}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition hover:bg-purple-100 ${
                  activeCommunity.id === comm.id ? "bg-purple-100" : ""
                }`}
              >
                <span className="text-2xl">{comm.logo}</span>
                <div className="font-semibold text-gray-800">{comm.name}</div>
              </div>
            ))}
        </div>

        <button className="flex items-center justify-center gap-2 mt-4 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          <PlusCircle size={18} /> Join New
        </button>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col bg-purple-50 rounded-tl-3xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{activeCommunity.logo}</span>
            <h3 className="text-2xl font-bold text-gray-800">
              {activeCommunity.name}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-purple-600 hover:text-purple-800 transition">
              <Video size={24} />
            </button>
            <button className="text-purple-600 hover:text-purple-800 transition">
              <Phone size={24} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-purple-100 to-white scrollbar-thin scrollbar-thumb-purple-300">
          {chat.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">No messages yet. Start the conversation!</p>
          ) : (
            chat.map((msg, index) => (
              <div key={index} className="flex items-start gap-3">
                <Users className="w-6 h-6 text-purple-500" />
                <div>
                  <p className="font-semibold text-sm text-gray-700">{msg.user}</p>
                  <p className="text-gray-800 text-base bg-white px-4 py-2 rounded-xl shadow-sm mt-1">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Message Input */}
        <div className="flex items-center gap-2 px-6 py-4 border-t bg-white">
          <label className="cursor-pointer text-purple-600 hover:text-purple-800">
            <Paperclip size={20} />
            <input type="file" onChange={handleFileUpload} className="hidden" />
          </label>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={handleSend}
            className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
