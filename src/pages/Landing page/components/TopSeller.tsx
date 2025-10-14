import { useTranslation } from "react-i18next";

export default function TopSeller() {
  const { t, i18n } = useTranslation();
  const isArabic: boolean = i18n.language === "ar";
  return (
    <section className="w-full bg-gray-50">
      <h1
        className={`${
          isArabic ? "aref-ruqaa-regular" : "tangerine-regular"
        } text-red-700 text-4xl`}
      >
        {t("header_Home")}
      </h1>
    </section>
  );
}
