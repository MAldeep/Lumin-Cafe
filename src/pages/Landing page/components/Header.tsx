import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";
import HeaderLinks from "./HeaderLinks";
import ToggleLanguage from "./ToggleLanguage";
import SideMenu from "./SideMenu";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="w-full px-4 lg:px-20 flex justify-between items-center">
      <Link to={"/"}>
        <img src={logo} className="w-[120px] h-[120px] object-cover" />
      </Link>
      <ToggleLanguage />
      <HeaderLinks
        className="w-[500px] hidden lg:flex justify-between items-center"
        textColor="white"
      />
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <HiMenuAlt3
        className={`text-2xl block lg:hidden ${
          isScrolled ? "text-black" : "text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
