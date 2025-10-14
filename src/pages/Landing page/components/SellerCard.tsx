import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  imgSrc: string;
  text01: string;
  text02: string;
}
export default function SellerCard({ imgSrc, text01, text02 }: Props) {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  return (
    <div className="w-full lg:w-[30%] shadow-2xl bg-white flex flex-col gap-8 justify-center items-center pb-6 transition-all duration-500 hover:scale-105">
      <div className="w-full p-3">
        <img src={imgSrc} className="w-full h-[400px] object-cover" />
      </div>
      <p className="text-3xl font-bold">{text01}</p>
      <p className="text-gray-600">{text02}</p>

      <div
        className={`border-red-900 ${
          isArabic ? "px-1 py-5" : "px-1 py-4"
        }  w-fit border-4`}
      >
        <Link
          to={"/menu"}
          className="w-fit px-8 py-2 text-2xl text-white bg-red-900 hover:bg-red-950 transition-all duration-300 font-bold"
        >
          {t("seller_btn")}
        </Link>
      </div>
    </div>
  );
}
