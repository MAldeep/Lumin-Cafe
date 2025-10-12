import { useTranslation } from "react-i18next";
import HeaderSingleLink from "./HeaderSingleLink";
import { Link } from "react-router-dom";
interface Props {
  className : string;
  textColor : string
}
export default function HeaderLinks({className , textColor} : Props) {
  const { t } = useTranslation();
  return (
    <nav className={className}>
      <HeaderSingleLink title={t("header_Home")} to="/" textColor={textColor} />
      <HeaderSingleLink title={t("Header_About")} to="/about" textColor={textColor}/>
      <HeaderSingleLink title={t("Header_Contact")} to="/contact" textColor={textColor}/>
      <HeaderSingleLink title={t("Header_Menu")} to="/menu" textColor={textColor}/>
      <Link to={"/booking"} className="bg-[#DAB67B] p-3 rounded-2xl text-white hover:bg-[#E4C7A2] transition-all duration-300">
        {t("Header_Booking")}
      </Link>
    </nav>
  );
}
