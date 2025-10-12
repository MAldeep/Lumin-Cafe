import Header from "./components/Header";
import hero from "../../assets/images/hero.jpg";
import { useTranslation } from "react-i18next";
import heroIcon from "../../assets/images/hero-icon.png";
import { Link } from "react-router-dom";
export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="w-full relative min-h-[200vh]">
      <img src={hero} className="w-full h-dvh object-cover absolute inset-0" />
      {/* The overlay */}
      <div className="w-full h-dvh bg-[rgba(0,0,0,0.7)] absolute inset-0">
        <Header />
        {/* hero Section */}
        <div className="w-full flex flex-col items-center justify-center gap-7 lg:gap-14 mt-10 lg:mt-28">
          <img src={heroIcon} />
          <div className="w-full flex flex-col gap-5 p-5">
            <h1 className="text-white text-4xl text-center font-bold font-stretch-75%">
              {t("Hero_main")}
            </h1>
            <h2 className="text-gray-300 text-center">
              {t("Hero_sec")}
            </h2>
          </div>
          <Link to={"/booking"} className="bg-white/20 lg:bg-transparent hover:bg-white/20 text-white text-2xl lg:text-4xl px-8 lg:px-16 py-5">
            {t("Header_Booking")}
          </Link>
        </div>
      </div>
    </main>
  );
}
