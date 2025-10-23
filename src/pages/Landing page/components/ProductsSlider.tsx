import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { images } from "../../../assets/images";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function ProductsSlider() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full min-h-[80vh] bg-gradient-to-b from-amber-50 to-amber-100 py-16 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Title */}
      <h1
        className={`text-center text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 tracking-wide mb-10 drop-shadow-sm ${
          isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
        }`}
      >
        {t("slider_title")}
      </h1>

      {/* Swiper */}
      <div className="w-[90%] md:w-[85%] lg:w-[80%]">
        <Swiper
          key={i18n.language}
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {images.sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-3xl shadow-lg group transition-transform duration-500 hover:-translate-y-2">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-[400px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl cursor-pointer"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
