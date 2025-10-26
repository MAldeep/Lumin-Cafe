import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
interface Props {
  title: string;
  value: string;
  icon: IconType;
}
export default function ContactCard({ title, value, icon: Icon }: Props) {
  return (
    <motion.div
      className="w-full p-5 rounded-3xl bg-gray-100 border-amber-50 border-4 shadow-2xl hover:shadow-none duration-150 flex flex-col lg:flex-row justify-start items-center gap:0 lg:gap-24 px-2 lg:px-24"
      whileInView={{ opacity: 1, scale: [1 , 1.02 , 1] }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 8,repeat : Infinity, ease: ["easeInOut"] }}
    >
      <motion.div
        className="flex justify-center items-center gap-2.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{once : true , amount : 0.3}}
        transition={{ duration: 1, delay: 0.5, ease: ["easeIn"] }}
      >
        <Icon className="text-sm lg:text-2xl text-gray-700" />
        <p className="text-sm lg:text-2xl font-bold text-gray-700">{title}</p>
      </motion.div>
      <motion.h3
        className="text-sm lg:text-2xl font-bold text-gray-900"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 1.2, ease: ["easeIn"] }}
      >
        {value}
      </motion.h3>
    </motion.div>
  );
}
