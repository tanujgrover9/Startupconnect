// src/pages/HomePage.tsx
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Cards from "@/components/cards/Cards";
import Experts from '@/components/Experts'
import Newsletter from "@/components/Newsletter";
import TrustedBySlider from "@/components/Trusted";
import TestimonialSection from "@/components/Testimonials";
import Services from "@/components/Services"
import Support from "@/components/Support"
import Work from "@/components/Work"
import Featured from "@/components/Featured";
import Network from "@/components/Network"


const HomePage = () => {
  return (
    <main className="bg-gradient-to-br from-white-100 to-white-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <Banner/>
        <Work/>
        <Featured/>
        <Cards/>
        <Network/>
        <Experts/>
        {/* <Tabs/> */}

        <Services/>

        <TrustedBySlider/>
        <Support/>
        <TestimonialSection/>
        <Newsletter/>

        
        
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
