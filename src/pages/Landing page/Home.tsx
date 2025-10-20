import { motion } from "framer-motion";
import Header from "./components/Header";
import hero from "../../assets/images/hero.jpg";
import Hero from "./components/Hero";
import TopSeller from "./components/TopSeller";
import DiscoverSection from "./components/DiscoverSection";
import ProductsSlider from "./components/ProductsSlider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full relative overflow-hidden">
      <motion.img
        src={hero}
        alt="Hero Background"
        className="w-full h-dvh object-cover"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 4,
          ease: [0.25, 0.1, 0.25, 1], 
        }}
      />
      {/* The overlay */}
      <div className="w-full h-dvh bg-[rgba(0,0,0,0.7)] absolute inset-0">
        <Header />
        {/* Hero Section */}
        <Hero />
      </div>
      {/* Other sections */}
      <TopSeller />
      <DiscoverSection />
      <ProductsSlider/>
      <Footer/>
    </main>
  );
}
