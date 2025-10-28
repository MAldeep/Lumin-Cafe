import { useTranslation } from "react-i18next";
import HeaderSingleLink from "./HeaderSingleLink";
import { Link } from "react-router-dom";
import { useState } from "react";
import { menuData } from "../../../shared/menu-data/menuData";

interface Props {
  className: string;
  textColor: string;
}

export default function HeaderLinks({ className, textColor }: Props) {
  const { t , i18n} = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${className} relative`}>
      {/* Regular header links */}
      <HeaderSingleLink title={t("header_Home")} to="/" textColor={textColor} />
      <HeaderSingleLink title={t("Header_About")} to="/about" textColor={textColor} />
      <HeaderSingleLink title={t("Header_Contact")} to="/contact" textColor={textColor} />

      {/* Dropdown parent wrapper */}
      <div
        className="relative group"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {/* The main “Menu” link */}
        <HeaderSingleLink
          title={t("Header_Menu")}
          to="/menu"
          textColor={textColor}
        />

        {/* Dropdown box */}
        <div
          className={`absolute left-0 top-full mt-2 bg-white shadow-xl rounded-xl border border-gray-100 py-3 min-w-[200px] transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          {menuData.map((cat) => (
            <Link
              key={cat.id}
              to={`/menu/${cat.id}`}
              className="block px-5 py-2 text-gray-700 hover:bg-[#DAB67B]/10 hover:text-[#DAB67B] transition-colors duration-200"
            >
              {isArabic ? cat.titleAr : cat.titleEn}
            </Link>
          ))}
        </div>
      </div>

      {/* Booking button */}
      <Link
        to="/booking"
        className="bg-[#DAB67B] p-3 rounded-2xl text-white hover:bg-[#E4C7A2] transition-all duration-300"
      >
        {t("Header_Booking")}
      </Link>
    </nav>
  );
}
