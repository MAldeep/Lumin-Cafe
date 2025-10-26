import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function LocationCard() {
  const mapUrl = "https://maps.app.goo.gl/iNwzjZo28XdyFt8g8";
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.274032168122!2d50.11697367537097!3d26.438309179973226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ff64b1b12b2f%3A0x7de70b812ad33c5f!2z2YXYs9iq2K8g2KfZhNix2YPYp9ix2Kkg2YTYp9mE2KfYsdmK2KkgLSDYp9mE2LnYp9mB2Kkg2KzYp9mF2KfZhg!5e0!3m2!1sar!2ssa!4v1735226780000!5m2!1sar!2ssa";

  const handleOpenMap = () => {
    window.open(mapUrl, "_blank");
  };

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleOpenMap}
      className="cursor-pointer"
    >
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">
        {/* Map */}
        <div className="relative w-full h-48">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 pointer-events-none" // 👈 makes the map non-interactive, allowing card click
          ></iframe>
        </div>

        {/* Info */}
        <div className="p-5 text-center">
          <MapPin className="w-8 h-8 text-amber-900 mx-auto mb-2" />
          <h2 className="text-xl font-semibold mb-1">
            {isArabic ? "موقعنا" : "Our Location"}
          </h2>
          <p className="text-gray-600">{t("footer_address")}</p>
          <p className="text-sm text-gray-400 mt-2">
            {isArabic
              ? "اضغط على البطاقة لفتح الموقع في خرائط جوجل"
              : "Click the card to open the location on Google Maps"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
