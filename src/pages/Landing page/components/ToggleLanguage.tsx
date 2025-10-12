import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ToggleLanguage() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");
  useEffect(() => {
    if (i18n.isInitialized) {
      const currentLang = i18n.language.startsWith("ar") ? "ar" : "en";
      setLang(currentLang);
      setDir(currentLang === "ar" ? "rtl" : "ltr");
    }

    const handleChange = (lng: string) => {
      const newLang = lng.startsWith("ar") ? "ar" : "en";
      setLang(newLang);
      setDir(newLang === "ar" ? "rtl" : "ltr");
    };

    i18n.on("languageChanged", handleChange);
    return () => i18n.off("languageChanged", handleChange);
  }, [i18n]);

  // Toggle function
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };
  const moveX =
    lang === "en"
      ? dir === "rtl"
        ? "100%"
        : "0%"
      : dir === "rtl"
      ? "0%"
      : "100%";

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-28 h-10 rounded-full border border-[#DAB67B] bg-[#1E1E1E] p-1 flex items-center justify-between overflow-hidden"
    >
      <motion.div
        className="absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-[#DAB67B]"
        animate={{ x: moveX }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <span
        className={`relative z-10 flex-1 text-center text-sm font-semibold transition-colors ${
          lang === "en" ? "text-black" : "text-white"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-sm font-semibold transition-colors ${
          lang === "ar" ? "text-black" : "text-white"
        }`}
      >
        AR
      </span>
    </button>
  );
}
