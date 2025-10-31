import { motion } from "framer-motion";
import { images } from "../../../assets/images";
import Header from "../../Landing page/components/Header";
import { useTranslation } from "react-i18next";

export default function BookingHero() {
  const {t , i18n} = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div className="w-full relative bg-gray-100">
      {/* Hero Section */}
      <motion.div
        className="w-full h-[80vh] relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: ["easeInOut"] }}
      >
        <motion.img
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: [0.25, 0.1, 0.25, 1] }}
          src={images.aboutHeader}
        />
        <div className="absolute inset-0 bg-black/60" />
        <Header />
        <motion.h1
          className={`text-gray-100 text-6xl lg:text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          drop-shadow-lg text-center ${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          }
          `}
        >
          {t("Header_Booking")}
        </motion.h1>
      </motion.div>
    </div>
  );
}
