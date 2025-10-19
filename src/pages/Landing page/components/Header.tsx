import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: ["easeOut"] }}
      className={`fixed top-0 left-0 w-full px-4 lg:px-20 z-50 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <Link to={"/"}>
        <motion.img
          src={logo}
          alt="Logo"
          className="w-[100px] h-[100px] object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: ["easeInOut"] }}
        />
      </Link>

      <ToggleLanguage />

      <HeaderLinks
        className="w-[500px] hidden lg:flex justify-between items-center"
        textColor={isScrolled ? "black" : "white"}
      />

      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <HiMenuAlt3
        className={`text-3xl block lg:hidden cursor-pointer transition-colors duration-300 ${
          isScrolled ? "text-black" : "text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.header>
  );
}
