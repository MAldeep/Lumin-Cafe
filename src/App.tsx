import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AllRoutes from "./shared/Routes/AllRoutes";
import CoffeeLoader from "./pages/Landing page/components/CoffeeLoader";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { i18n } = useTranslation();
  useEffect(() => {
    if (!i18n.isInitialized) return;
    const lang = i18n.language.startsWith("ar") ? "ar" : "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.isInitialized, i18n.language]);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <CoffeeLoader />
  ) : (
    <div>
      <AllRoutes />
    </div>
  );
}
