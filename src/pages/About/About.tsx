import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { images } from "../../assets/images";
import Header from "../Landing page/components/Header";
import Footer from "../Landing page/components/Footer";

export default function About() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  return (
    <div className="w-full relative min-h-[200vh] bg-gray-50">
      {/* hero section */}
      <motion.div
        className="relative w-full h-[75vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: ["easeIn"] }}
      >
        <motion.img
          src={images.aboutHeader}
          alt="Hero Background"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <Header />
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: ["easeInOut"] }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-bold text-gray-100 drop-shadow-lg text-center ${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          }`}
        >
          {t("Header_About")}
        </motion.h1>
      </motion.div>
      {/* content about */}
      <div className="w-full px-4 lg:px-20 py-9 h-dvh bg-gradient-to-b from-red-50 via-white to-red-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: ["easeInOut"] }}
          className="w-full flex flex-col lg:flex-row gap-5 items-center justify-between h-full border-4 border-white bg-white rounded-3xl shadow-2xl py-4 px-5 hover:shadow-none duration-150"
        >
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: ["easeInOut"] }}
            className="text-2xl text-gray-800"
          >
            {t("lumin_about")}
          </motion.h2>
          <motion.img
            src={images.aboutLogo}
            className="w-full lg:w-1/2 h-full object-contain lg:object-cover rounded-3xl cursor-pointer"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
