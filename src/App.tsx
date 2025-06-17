import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import PostsPage from "./pages/PostsPage";
import Login from "./pages/Login";
import Premium from "./pages/Premium";
import Payment from "./pages/Payment";
import { useState, useEffect } from "react";
import UPIPage from "./pages/UPIPage";
import CardPage from "./pages/CardPage";
import NetBankingPage from "./pages/NetBankingPage";
import WalletPage from "./pages/WalletPage";
import CommunityPage from "./pages/Community";
import Approach from "./pages/Approach";
import StartBusinessPage from "./pages/StartBusinessPage";
import FounderMistakesPage from "./pages/FounderMistakesPage";
import PitchInvestorsPage from "./pages/PitchInvestorsPage";
import TalkToExperts from "./pages/TalkToExperts";
import JoinAsMember from "./pages/JoinAsMember";

const App = () => {
  const [darkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Router>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/upi" element={<UPIPage />} />
          <Route path="/payment/card" element={<CardPage />} />
          <Route path="/payment/netbanking" element={<NetBankingPage />} />
          <Route path="/payment/wallet" element={<WalletPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/approach" element={<Approach />} />
          
<Route path="/learn/start-business" element={<StartBusinessPage />} />
<Route path="/learn/founder-mistakes" element={<FounderMistakesPage />} />
<Route path="/learn/pitch-investors" element={<PitchInvestorsPage />} />
<Route path="/talkToExperts" element={<TalkToExperts />} />
<Route path="/joinAsMember" element={<JoinAsMember />} />
<Route path="/findInvestors" element={<PitchInvestorsPage />} />


        </Routes>
      </Router>
    </div>
  );
};

export default App;
