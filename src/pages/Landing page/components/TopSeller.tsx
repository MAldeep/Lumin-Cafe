import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import coffee01 from "../../../assets/images/coffee-01.jpg";
import coffee02 from "../../../assets/images/coffee-02.jpg";
import coffee03 from "../../../assets/images/coffee-03.jpg";
import SellerCard from "./SellerCard";

export default function TopSeller() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full min-h-[120vh] bg-gradient-to-b from-amber-100 to-amber-200 flex flex-col justify-center items-center gap-16 py-20 px-4 lg:px-24 overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center flex flex-col justify-center items-center gap-4"
      >
        <h1
          className={`${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          } text-amber-900 text-6xl md:text-7xl font-bold drop-shadow-sm`}
        >
          {t("seller_title")}
        </h1>
        <h2 className="text-gray-800 text-3xl md:text-5xl font-extrabold tracking-wide">
          {t("seller_sec")}
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        className="w-full flex flex-col lg:flex-row justify-between items-center gap-10"
      >
        <SellerCard
          imgSrc={coffee01}
          text01={t("seller_01")}
          text02="A brief description for each product."
        />
        <SellerCard
          imgSrc={coffee02}
          text01={t("seller_02")}
          text02="A brief description for each product."
        />
        <SellerCard
          imgSrc={coffee03}
          text01={t("seller_03")}
          text02="A brief description for each product."
        />
      </motion.div>
    </motion.section>
  );
}
