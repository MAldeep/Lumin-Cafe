import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
interface Props {
  id : number;
  img : string;
  titleEn : string;
  titleAr : string;
}
export default function CategoryCard({id , img , titleEn , titleAr} : Props) {
  const {i18n} = useTranslation();
  const isArabic = i18n.language === "ar";
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{opacity : 0 , scale : 0.8}}
      whileInView={{opacity : 1 , scale : 1}}
      whileHover={{scale : 1.02}}
      viewport={{once : true , amount : 0.3}}
      transition={{duration : 1.2 , ease : ["easeIn"]}}
      className="w-full relative lg:w-[400px] h-[40vh] bg-gray-50 flex flex-col gap-5 rounded-3xl border-8 border-white shadow-2xl hover:shadow-none transition-all duration-150"
      onClick={() => navigate(`/menu/${id}`)}
    >
      {/* category image */}
      <motion.img
      initial={{opacity : 0}}
      whileInView={{opacity : 1}}
      viewport={{once : true , amount : 0.3 }}
      transition={{duration : 1.2 , ease : ["easeInOut"]}}
      className="w-full h-full object-cover rounded-3xl"
      src={img}
      />
      <motion.div
        className="absolute bg-black/50 inset-0 rounded-3xl flex justify-center items-center"
        initial={{opacity : 0 }}
        whileInView={{opacity : 1}}
        transition={{duration : 1.5 , ease : ["easeInOut"]}}
        viewport={{once : true , amount : 0.3}}
      >
        <motion.h1
          initial={{opacity : 0 , y : 50}}
          whileInView={{opacity : 1 , y : 0}}
          viewport={{once : true , amount : 0.3}}
          transition={{duration : 1.2 , ease : ["easeInOut"]}}
          className={
            `text-4xl text-amber-400 font-bold ${isArabic ? "aref-ruqaa-regular" : "tangerine-regular"}`
          }
        >
          {
            isArabic ? titleAr : titleEn
          }
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}
