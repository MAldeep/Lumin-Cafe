import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../Landing page/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../../assets/images";
import { Download } from "lucide-react"; // Optional: for an icon

export default function Menu() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-50">
      {/* === Hero Section === */}
      <motion.div
        className="relative w-full h-[75vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: ["easeOut"] }}
      >
        <motion.img
          src={images.menuHero}
          alt="Hero Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <Header />
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: ["easeOut"] }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-bold text-gray-100 drop-shadow-lg text-center ${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          }`}
        >
          {t("Header_Menu")}
        </motion.h1>
      </motion.div>

      {/* === Menu Image Section === */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: ["easeOut"] }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full px-4 lg:px-20 py-20 flex justify-center items-center bg-gradient-to-b from-red-50 via-white to-red-100"
      >
        <div className="relative w-full max-w-6xl p-10 lg:p-16 bg-[#f9f4ef] rounded-3xl shadow-2xl flex justify-center items-center">
          {/* Decorative border frame */}
          <motion.div
            className="absolute -inset-3 border-4 border-amber-950 rounded-3xl opacity-40"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.2, ease: ["easeOut"] }}
          />

          {/* Menu image (clickable) */}
          <motion.img
            src={images.menu}
            alt="Menu"
            className="relative w-full h-auto rounded-2xl shadow-xl object-cover border-[6px] border-white cursor-zoom-in"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsZoomed(true)}
          />
        </div>
      </motion.section>

      {/* === Fullscreen Zoom + Download Button === */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: ["easeInOut"] }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              src={images.menu}
              alt="Menu Zoomed"
              className="max-w-[95%] max-h-[90vh] object-contain rounded-3xl shadow-2xl cursor-zoom-out"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />

            {/* ✨ Floating Download Button */}
            <motion.a
              href={images.menu}
              download="Coffee_Menu.jpg"
              className="absolute bottom-10 right-10 bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center gap-2 px-5 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              onClick={(e) => e.stopPropagation()} // prevent closing zoom
            >
              <Download size={22} />
              {t("Download_Menu")}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
