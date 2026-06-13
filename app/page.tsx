"use client";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/navbar";
import FAQ from "./components/landing/FAQ";
import Features from "./components/landing/Features";
import LandingShowcase from "./components/landing/LandingShowcase";
export default function Home() {



  return (
    <div className="relative min-h-screen w-full bg-[#000000] text-[#ededed] overflow-x-hidden font-satoshi">
      <div className="absolute top-0 left-[10%] h-[500px] w-[800px] rounded-[30%_70%_70%_30%] bg-[radial-gradient(circle_at_center,rgba(161,161,161,0.12),transparent)] blur-[100px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-0 right-[5%] h-[400px] w-[600px] rounded-[60%_40%_30%_70%] bg-[radial-gradient(circle_at_center,rgba(161,161,161,0.08),transparent)] blur-[100px] mix-blend-screen pointer-events-none z-0" />

    <Navbar />

    <LandingShowcase />
    <Features />
<FAQ />
<Footer />
  
    </div>
  );
}
