import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { images } from "../../assets/images";
import Header from "../Landing page/components/Header";
import ContactCard from "./components/ContactCard";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "../Landing page/components/Footer";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  return (
    <div className="w-full min-h-screen relative bg-gray-100">
      {/* Hero section */}
      <motion.div
        className="w-full h-[80vh] relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: ["easeInOut"] }}
      >
        <motion.img
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: [0.25, 0.1, 0.25, 1] }}
          src={images.aboutHeader}
        />
        <div className="absolute inset-0 bg-black/60" />
        <Header />
        <motion.h1
          className={`text-gray-100 text-6xl lg:text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          drop-shadow-lg text-center ${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          }
          `}
        >
          {t("Header_Contact")}
        </motion.h1>
      </motion.div>

      <div className="w-full px-4 lg:px-20 py-9 ">
        <motion.div
          className="w-full h-[70vh]  bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col justify-between items-center rounded-3xl shadow-2xl hover:shadow-none duration-150 px-3.5 lg:px-8 py-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: ["easeIn"] }}
        >
          {/* phone number */}
          <ContactCard
            title={t("phone_title")}
            value="+966548010223"
            icon={FaPhoneAlt}
          />
          {/* email */}
          <ContactCard
            title={t("email_title")}
            value="lumincafe@gmail.com"
            icon={MdEmail}
          />
          {/* address */}
          <ContactCard title={t("address_title")} value={t("footer_address")} icon={FaLocationDot} />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
