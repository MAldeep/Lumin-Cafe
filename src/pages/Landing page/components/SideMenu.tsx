import { IoCloseSharp } from "react-icons/io5";
import HeaderLinks from "./HeaderLinks";

interface Props {
  isOpen: boolean;
  setIsOpen: (p : boolean) => void;
}
export default function SideMenu({ isOpen, setIsOpen }: Props) {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full flex flex-col justify-center items-center w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <IoCloseSharp
        className="text-2xl absolute top-2 left-2"
        onClick={() => setIsOpen(false)}
      />
      <HeaderLinks className="w-2/3 bg-white flex flex-col gap-3.5 justify-center text-black" textColor="black"/>
    </div>
  );
}
