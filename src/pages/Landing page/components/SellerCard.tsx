import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  imgSrc: string;
  text01: string;
}

export default function SellerCard({ imgSrc, text01 }: Props) {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="relative w-full lg:w-[30%] bg-white shadow-xl flex flex-col gap-6 justify-center items-center pb-8 rounded-3xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-t-3xl">
        <motion.img
          src={imgSrc}
          alt={text01}
          className="w-full h-[380px] object-cover rounded-t-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Text */}
      <motion.p
        className="text-3xl font-bold text-amber-900"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {text01}
      </motion.p>

      {/* Button */}
      <div
        className={`border-4 border-amber-900 ${
          isArabic ? "px-0.5 py-4" : "px-0.5 py-3"
        } w-fit relative rounded-lg`}
      >
        <Link
          to="/menu"
          className="relative overflow-hidden w-fit px-8 py-2 text-2xl text-white bg-amber-900 hover:bg-amber-950 transition-all duration-300 font-bold group"
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          {t("seller_btn")}
        </Link>
      </div>
    </motion.div>
  );
}
