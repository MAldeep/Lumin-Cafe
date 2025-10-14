import { useTranslation } from "react-i18next";
import coffee01 from "../../../assets/images/coffee-01.jpg"
import coffee02 from "../../../assets/images/coffee-02.jpg"
import coffee03 from "../../../assets/images/coffee-03.jpg"
import SellerCard from "./SellerCard";
export default function TopSeller() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  return (
    <section className="w-full bg-gray-100 flex flex-col h-[380vh] lg:h-[140vh] justify-center items-center gap-12">
      <div className="w-full text-center flex flex-col justify-center items-center gap-5">
        <h1
          className={`${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          } text-red-700 text-7xl font-bold`}
        >
          {t("seller_title")}
        </h1>
        <h2 className={` text-gray-700 text-5xl font-bold`}>
          {t("seller_sec")}
        </h2>
      </div>
      <div className="w-full px-4 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-8">
        <SellerCard imgSrc={coffee01} text01={t("seller_01")} text02="hvaweyu"/>
        <SellerCard imgSrc={coffee02} text01={t("seller_02")} text02="hvaweyu"/>
        <SellerCard imgSrc={coffee03} text01={t("seller_03")} text02="hvaweyu"/>
        {/* <SellerCard/>
        <SellerCard/> */}
      </div>
    </section>
  );
}
