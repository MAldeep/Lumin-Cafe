import { useTranslation } from "react-i18next";
import heroIcon from "../../../assets/images/hero-icon.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center justify-center gap-7 lg:gap-14 mt-10 lg:mt-28">
      <img src={heroIcon} />
      <div className="w-full flex flex-col gap-5 p-5">
        <h1 className="text-white text-4xl text-center font-bold font-stretch-75%">
          {t("Hero_main")}
        </h1>
        <h2 className="text-gray-300 text-center">{t("Hero_sec")}</h2>
      </div>
      <Link
        to={"/booking"}
        className="bg-white/20 lg:bg-transparent hover:bg-white/20 text-white text-2xl lg:text-4xl px-8 lg:px-16 py-5 rounded-2xl"
      >
        {t("Header_Booking")}
      </Link>
    </div>
  );
}
