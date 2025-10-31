import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import discover from "../../../assets/images/discover.jpg";

export default function DiscoverSection() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full bg-gradient-to-b from-amber-50 to-amber-100 min-h-[120vh] lg:min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 px-6 lg:px-24 py-16 overflow-hidden"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-8 text-center lg:text-left"
      >
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl text-amber-900 font-bold drop-shadow-sm ${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          }`}
        >
          {t("discover_title")}
        </h1>

        <motion.h2
          initial={{ opacity: 0, x: isArabic ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className={`text-2xl  tracking-wide text-gray-700 text-center ${isArabic ? "text-center" : "text-start"}`}
        >
          {t("discover_sec")}
        </motion.h2>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative border-4 border-amber-900 rounded-lg overflow-hidden group"
        >
          <Link
            to="/about"
            className="relative z-10 px-10 py-3 text-2xl font-semibold bg-amber-900 text-white group-hover:bg-amber-950 transition-all duration-300"
          >
            {t("discover_btn")}
          </Link>
          <motion.span
            className="absolute inset-0 bg-amber-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center items-center relative"
      >
        <motion.img
          src={discover}
          alt="Discover Coffee"
          className="w-full lg:w-4/5 h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-lg"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative overlay glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.section>
  );
}
