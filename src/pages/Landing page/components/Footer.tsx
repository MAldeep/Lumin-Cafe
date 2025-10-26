import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import LocationCard from "./LocationCard";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full min-h-dvh lg:min-h-[50vh] px-4 py-8 lg:px-20 bg-[#333]">
      {/* upper section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center pb-5 gap-5">
        {/* about */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 items-center">
          <p className="text-2xl text-white">{t("Header_About")}</p>
          <p className="text-gray-400 text-sm text-center">
            {t("footer_about")}
          </p>
          <p className="text-gray-400 text-sm text-center flex items-center gap-2.5">
            <FaLocationDot />
            {t("footer_address")}
          </p>
          <div className="flex items-center gap-2.5">
            <IoCall className="text-[#DAB67B]" />
            <p className="text-[#DAB67B] hover:underline transition-all duration-100 cursor-pointer">
              +966548010223
            </p>
          </div>
          <Link
            to={"/booking"}
            className="bg-[#DAB67B] text-white rounded-2xl hover:bg-[#E4C7A2] transition-all duration-100 px-10 py-2.5"
          >
            Book a table
          </Link>
        </div>
        {/* location */}
        <LocationCard/>
      </div>
      {/* lower section */}
      <div className="w-full border-t-2 border-dotted border-gray-400 flex flex-col lg:flex-row justify-between pt-2">
        <p className="text-sm text-gray-400">@2025 Designed by : <span className="text-sm text-amber-400">Trio Advertising</span></p>
      </div>
    </footer>
  );
}
