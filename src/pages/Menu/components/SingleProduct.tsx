import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Props {
  titleEn: string;
  titleAr: string;
  img: string;
  price: string;
}
export default function SingleProduct({titleEn , titleAr , img , price} : Props) {
  const {i18n} = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <motion.div
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    viewport={{once : true , amount : 0.3}}
    transition={{duration : 1.2 , ease : ["easeInOut"]}}
    className="w-full lg:w-1/3 flex justify-between items-center gap-2.5 mb-5 lg:mb-10"
    >
      <motion.img
        initial={{opacity : 0 , scale : 0.8}}
        whileInView={{opacity : 1 , scale : 1}}
        viewport={{once : true , amount : 0.3}}
        transition={{duration : 1.2 , ease : ["easeInOut"]}}
        className="w-[100px] h-[100px] rounded-[50%] border-4 border-gray-200 p-0.5 shadow-2xl transition-all hover:shadow-none duration-150"
        src={img}
      />
      <motion.div
        initial={{opacity : 0 , x : 60}}
        whileInView={{opacity : 1 , x : 0}}
        viewport={{once : true , amount : 0.3}}
        transition={{duration : 1.2 , delay : 0.5 , ease : ["easeInOut"]}}
        className="w-1/2 h-[100px] flex flex-col justify-between"
      > 
        <motion.h1
        initial={{opacity : 0 , x : -70}}
        whileInView={{opacity : 1 , x : 0}}
        viewport={{once : true , amount : 0.3}}
        transition={{duration : 1.2 , delay : 0.9 , ease : ["easeInOut"]}}
        className={`text-end ${isArabic ? "aref-ruqaa-regular text-3xl" : "tangerine-regular text-5xl"}`}>{isArabic ? titleAr : titleEn}</motion.h1>
        <div className="w-full border-2 border-dotted border-gray-300"/>
        <motion.p
        initial={{opacity : 0 , x : 70}}
        whileInView={{opacity : 1 , x : 0}}
        viewport={{once : true , amount : 0.3}}
        transition={{duration : 1.2 , delay : 0.9 , ease : ["easeInOut"]}}
        className="text-2xl text-amber-700">{price} {isArabic ? "ر.س" : "SAR"}</motion.p>
      </motion.div>
    </motion.div>
  )
}
