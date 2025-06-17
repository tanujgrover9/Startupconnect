import { useState, useRef, useEffect } from "react";
import {
  FaPaperPlane,
  FaEllipsisV,
  FaCog,
  FaSignOutAlt,
  FaPalette,
  FaBan,
  FaBellSlash,
  FaTrashAlt,
} from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import logo from "../assets/logo/original-12d769a8fc38f9fd2be3679989f9ae05-removebg-preview.png";

// Types

type User = {
  id: number;
  name: string;
  status: string;
  avatar: string;
};

type Group = {
  id: number;
  name: string;
  avatar: string;
};

type Community = {
  id: string;
  name: string;
  groups: number[];
};

type Message = {
  sender: string;
  text: string;
  time: string;
  image: string | null;
};

type MessageMap = {
  [key: number]: Message[];
};

const directChats: User[] = [
  { id: 1, name: "Alice", status: "Active now", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob", status: "Offline", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie", status: "Active now", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "David", status: "Offline", avatar: "https://i.pravatar.cc/150?img=4" },
];

const groups: Group[] = [
  { id: 101, name: "#React Devs", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 102, name: "#JS Nation", avatar: "https://i.pravatar.cc/150?img=11" },
];

const communities: Community[] = [
  { id: "c1", name: "Dev Community", groups: [101, 102] },
];

const messagesData: MessageMap = {
  1: [{ sender: "Alice", text: "Hello!", time: "10:00 AM", image: null }],
  101: [{ sender: "Group Bot", text: "Welcome to #React Devs!", time: "9:00 AM", image: null }],
};

export default function DiscordChat() {
  const [activeUserId, setActiveUserId] = useState<number>(1);
  const [messages, setMessages] = useState<MessageMap>(messagesData);
  const [input, setInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [expandedCommunities, setExpandedCommunities] = useState<string[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, activeUserId]);

  const toggleExpand = (id: string) => {
    setExpandedCommunities((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      sender: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      image: null,
    };
    const updated: MessageMap = {
      ...messages,
      [activeUserId]: [...(messages[activeUserId] || []), newMsg],
    };
    setMessages(updated);
    setInput("");
  };

  const theme = isDarkMode ? "dark" : "light";
  const allUsers = [...directChats, ...groups];
  const currentChat = allUsers.find((u) => u.id === activeUserId);

  const chatOptions = [
    { icon: <FaCog />, label: "Settings" },
    { icon: <FaSignOutAlt />, label: "Leave Group" },
    { icon: <FaPalette />, label: "Change Theme" },
    { icon: <FaBan />, label: "Block User" },
    { icon: <FaBellSlash />, label: "Mute Notifications" },
    { icon: <FaTrashAlt />, label: "Clear Chat History" },
  ];

  return (
    <div className={`flex h-screen ${theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"} transition-colors duration-500`}>
      <aside className={`w-72 p-4 border-r overflow-y-auto ${theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-gray-100 border-gray-300"} scrollbar-thin`}>
        <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />

        <div className="flex items-center gap-2 mb-4 px-2">
          <IoSearchSharp className="text-xl" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className={`w-full bg-transparent p-1 border rounded focus:outline-none ${theme === "dark" ? "border-gray-800" : "border-gray-300"}`}
          />
        </div>

        <section>
          <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase">Communities</h3>
          {communities.map((com) => (
            <div key={com.id}>
              <p onClick={() => toggleExpand(com.id)} className="text-blue-500 cursor-pointer hover:underline px-2">
                {com.name}
              </p>
              {expandedCommunities.includes(com.id) && (
                <div className="ml-4 mt-2 space-y-1">
                  {com.groups.map((gid) => {
                    const group = groups.find((g) => g.id === gid);
                    if (!group) return null;
                    return (
                      <div
                        key={gid}
                        onClick={() => setActiveUserId(gid)}
                        className={`p-2 rounded flex items-center gap-2 cursor-pointer hover:bg-blue-600/30 ${activeUserId === gid ? "bg-blue-600/20" : ""}`}
                      >
                        <img src={group.avatar} className="w-8 h-8 rounded-full" alt={group.name} />
                        <span className="truncate">{group.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="mt-6">
          <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase">Direct Chats</h3>
          {directChats.map((user) => (
            <div
              key={user.id}
              onClick={() => setActiveUserId(user.id)}
              className={`p-2 rounded flex items-center gap-2 cursor-pointer hover:bg-blue-600/30 ${activeUserId === user.id ? "bg-blue-600/20" : ""}`}
            >
              <div className="relative">
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                {user.status === "Active now" && (
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-2 border-white dark:border-gray-950 rounded-full"></span>
                )}
              </div>
              <span>{user.name}</span>
            </div>
          ))}
        </section>

        <footer className="mt-6 pt-4 border-t flex items-center justify-between px-2 border-gray-700">
          <div className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/150?img=9" className="w-8 h-8 rounded-full" alt="You" />
            <span>You</span>
          </div>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <HiOutlineSun className="text-yellow-400" /> : <HiOutlineMoon className="text-blue-600" />}
          </button>
        </footer>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="p-4 flex justify-between items-center border-b border-gray-700 bg-gray-900">
          <div className="flex items-center gap-4">
            <img src={currentChat?.avatar} className="w-10 h-10 rounded-full" alt="avatar" />
            <div>
              <h2 className="font-semibold text-lg">{currentChat?.name}</h2>
              <p className="text-xs text-green-400">{"status" in currentChat! ? (currentChat as User).status : "Group"}</p>
            </div>
          </div>
          <div className="relative group">
            <FaEllipsisV className="cursor-pointer" />
            <div className="absolute right-0 top-full mt-2 bg-white text-black shadow-md rounded p-2 space-y-2 z-50 hidden group-hover:block">
              {chatOptions.map((opt) => (
                <div key={opt.label} className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-1 rounded">
                  {opt.icon} <span>{opt.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section ref={chatRef} className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-950">
          {(messages[activeUserId] || []).map((msg: Message, idx: number) => (
            <div key={idx} className="bg-gray-800 p-3 rounded-xl max-w-md shadow-md">
              <div className="flex justify-between">
                <p className="font-medium">{msg.sender}</p>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
              {msg.image && <img src={msg.image} alt="Attachment" className="mt-2 rounded" />}
              <p className="mt-1 text-sm">{msg.text}</p>
            </div>
          ))}
        </section>

        <footer className="p-4 border-t border-gray-700 flex gap-2 items-center bg-gray-900">
          <label htmlFor="file-upload" className="cursor-pointer text-xl">
            <MdAttachFile />
          </label>
          <input id="file-upload" type="file" className="hidden" />

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-700 bg-transparent focus:outline-none"
          />

          <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
            <FaPaperPlane />
          </button>
        </footer>
      </main>
    </div>
  );
}
