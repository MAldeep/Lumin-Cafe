import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { images } from "../../assets/images";
import Header from "../Landing page/components/Header";
import Footer from "../Landing page/components/Footer";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

export default function About() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  const [open, setOpen] = useState<boolean>(false);
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
      <div className="w-full px-4 lg:px-20 py-20 min-h-dvh lg:h-[70vh]  bg-gradient-to-b from-red-50 via-white to-red-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: ["easeInOut"] }}
          className="w-full flex flex-col lg:flex-row gap-10 items-center justify-between h-full border-4 border-white bg-gray-50 rounded-3xl shadow-2xl py-4 px-5 hover:shadow-none duration-150"
        >
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.5, ease: ["easeInOut"] }}
              className=" text-gray-800"
            >
              {t("lumin_about1")}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.5, ease: ["easeInOut"] }}
              className=" text-gray-800"
            >
              {t("lumin_about2")}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.5, ease: ["easeInOut"] }}
              className=" text-gray-800"
            >
              {t("lumin_about3")}
            </motion.h2>
            <p className="text-gray-400 text-sm text-center flex items-center gap-2.5">
              <FaLocationDot />
              {t("footer_address")}
            </p>
            <div className="flex items-center gap-2.5">
              <p className="text-gray-800">
                {isArabic
                  ? "للحجز و التواصل :"
                  : "For reservations or inquiries:"}
              </p>
              <IoCall className="text-[#DAB67B]" />
              <p className="text-[#DAB67B] hover:underline transition-all duration-100 cursor-pointer">
                +966548010223
              </p>
            </div>
          </div>
          <motion.div
            className="w-full min-w-1/2 lg:w-1/2 min-h-[50vh] rounded-3xl overflow-hidden border-8 border-white shadow-2xl hover:shadow-none transition-all duration-150"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 3,
              delay : 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onClick={() => setOpen(true)}
          >
            <video
              className="w-full h-[50vh] cursor-pointer"
              autoPlay
              loop
              muted
              playsInline
              src={images.about_vid}
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Fullscreen overlay */}
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.video
            className="w-[90vw] h-[90vh] object-contain rounded-2xl shadow-2xl"
            autoPlay
            controls
            muted={false}
            src={images.about_vid}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400 transition"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </motion.div>
      )}
      <Footer />
    </div>
  );
}
