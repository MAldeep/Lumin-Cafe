import { useParams } from "react-router-dom";
import { menuData, type Category } from "../../../shared/menu-data/menuData";
import { motion } from "framer-motion";
import Header from "../../Landing page/components/Header";
import { useTranslation } from "react-i18next";
import SingleProduct from "./SingleProduct";
import Footer from "../../Landing page/components/Footer";

export default function SingleCategory() {
  const { id } = useParams<{ id: string }>();
  const category: Category | undefined = menuData.find(
    (cat) => cat.id === Number(id)
  );
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  if (!category) return <p>Category Not Found</p>;
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[75vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: ["easeOut"] }}
      >
        <motion.img
          src={category.img}
          alt="Hero Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <Header />
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: ["easeOut"] }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-bold text-gray-100 drop-shadow-lg text-center ${
            isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
          }`}
        >
          {isArabic ? category.titleAr : category.titleEn}
        </motion.h1>
      </motion.div>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: ["easeInOut"] }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full px-8 lg:px-28 py-20 flex flex-col lg:flex-row gap-8  flex-wrap justify-between items-center bg-gradient-to-b from-red-50 via-white to-red-100"
      >
        {category.products.map((product) => (
          <SingleProduct
            key={product.id}
            img={product.img}
            titleEn={product.titleEn}
            titleAr={product.titleAr}
            price={product.price}
          />
        ))}
      </motion.section>
      <Footer />
    </div>
  );
}
