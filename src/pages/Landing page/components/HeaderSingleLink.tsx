import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  to : string;
  textColor : string
}
export default function HeaderSingleLink({title , to , textColor} : Props) {
  const {t} = useTranslation();
  return (
    <Link
        to={`${to}`}
        className={`text-${textColor} relative group transition-all duration-300 font-bold`}
      >
        {t(`${title}`)}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E4C7A2] transition-all duration-300 group-hover:w-full"></span>
      </Link>
  )
}
