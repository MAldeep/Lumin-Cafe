import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import discover from "../../../assets/images/discover.jpg";

export default function DiscoverSection() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-gray-200 h-[130vh] lg:h-[70vh] flex flex-col lg:flex-row justify-center gap-10 lg:justify-between px-3.5 lg:px-24"
    >
      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-8"
      >
        <h1
          className={`text-7xl text-red-800 ${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          }`}
        >
          {t("discover_title")}
        </h1>

        <h2 className="text-6xl font-bold tracking-widest text-gray-950 text-center">
          {t("discover_sec")}
        </h2>

        <h3 className="text-gray-400 w-full lg:w-[350px] text-center">
          a brief about the company a brief about the company a brief about the
          company a brief about the company
        </h3>

        <div
          className={`border-red-900 ${
            isArabic ? "px-0.5 py-4" : "px-0.5 py-3"
          } w-fit border-4 relative`}
        >
          <Link
            to={"/about"}
            className="relative overflow-hidden w-fit px-8 py-2 text-2xl text-white bg-red-900 hover:bg-red-950 transition-all duration-300 font-bold group"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            {t("discover_btn")}
          </Link>
        </div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex justify-center items-center"
      >
        <motion.img
          src={discover}
          className="w-full lg:w-4/5 object-cover rounded-2xl shadow-lg"
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.section>
  );
}
