import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import heroIcon from "../../../assets/images/hero-icon.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: ["easeOut"] }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex flex-col items-center justify-center gap-7 lg:gap-14 mt-30 text-center"
    >
      {/* Floating / rotating hero icon */}
      <motion.img
        src={heroIcon}
        alt="Hero Icon"
        className="select-none w-28 h-28"
        animate={{
          rotate: [0, 6, -6, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: ["easeInOut"],
        }}
      />

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: ["easeOut"] }}
        className="flex flex-col gap-5 p-5"
      >
        <h1 className="text-white text-4xl lg:text-6xl font-bold tracking-wide">
          {t("Hero_main")}
        </h1>
        <h2 className="text-gray-300 text-lg lg:text-2xl">{t("Hero_sec")}</h2>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: ["easeOut"] }}
      >
        <Link
          to={"/booking"}
          className="bg-white/20 lg:bg-transparent hover:bg-white/20 text-white text-2xl lg:text-4xl px-8 lg:px-16 py-5 rounded-2xl transition-all duration-300"
        >
          {t("Header_Booking")}
        </Link>
      </motion.div>
    </motion.section>
  );
}
