import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  imgSrc: string;
  text01: string;
  text02: string;
}

export default function SellerCard({ imgSrc, text01, text02 }: Props) {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className="relative w-full lg:w-[30%] shadow-2xl bg-white flex flex-col gap-8 justify-center items-center pb-6 rounded-2xl overflow-hidden cursor-pointer group"
    >
      <div className="relative w-full overflow-hidden">
        <motion.img
          src={imgSrc}
          alt={text01}
          className="w-full h-[400px] object-cover transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Text */}
      <motion.p
        className="text-3xl font-bold"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {text01}
      </motion.p>

      <p className="text-gray-600 text-center px-4">{text02}</p>

      {/* Button */}
      <div
        className={`border-red-900 ${
          isArabic ? "px-0.5 py-4" : "px-0.5 py-3"
        } w-fit border-4 relative`}
      >
        <Link
          to={"/menu"}
          className="relative overflow-hidden w-fit px-8 py-2 text-2xl text-white bg-red-900 hover:bg-red-950 transition-all duration-300 font-bold group"
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          {t("seller_btn")}
        </Link>
      </div>
    </motion.div>
  );
}
