import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface ChatProps {
  selectedChat: {
    name: string;
    avatar: string;
    isOnline: boolean;
  } | null;
  setSelectedChat: (value: null) => void;
}

const ChatPopup: React.FC<ChatProps> = ({ selectedChat, setSelectedChat }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  if (!selectedChat) return null;

  return (
    <div className="fixed bottom-6 right-80 w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col border border-gray-200 overflow-hidden z-50">
      {/* Header */}
      <div className="p-3 border-b bg-gray-50 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <img
              src={selectedChat.avatar}
              alt={selectedChat.name}
              className="w-9 h-9 rounded-full object-cover"
            />
            {selectedChat.isOnline && (
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-800">{selectedChat.name}</p>
            <p className="text-xs text-gray-500">{selectedChat.isOnline ? "Online" : "Offline"}</p>
          </div>
        </div>
        <button onClick={() => setSelectedChat(null)} className="text-red-500 text-xs font-medium">
          Close
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 px-3 py-2 overflow-y-auto text-sm text-gray-700 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="self-end text-right">
            <div className="bg-blue-100 text-blue-800 inline-block px-3 py-1 rounded-lg">
              {msg}
            </div>
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-center text-gray-400 mt-12">Start the conversation...</p>
        )}
      </div>

      {/* Input */}
      <div className="p-2 border-t bg-white flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <FaPaperPlane className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
