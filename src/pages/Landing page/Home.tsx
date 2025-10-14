import Header from "./components/Header";
import hero from "../../assets/images/hero.jpg";
import Hero from "./components/Hero";
import TopSeller from "./components/TopSeller";
export default function Home() {
  return (
    <main className="w-full relative">
      <img src={hero} className="w-full h-dvh object-cover" />
      {/* The overlay */}
      <div className="w-full h-dvh bg-[rgba(0,0,0,0.7)] absolute inset-0">
        <Header />
        {/* hero Section */}
        <Hero/>
        {/* Top Sellers Section */}
      </div>
      <TopSeller/>
    </main>
  );
}
