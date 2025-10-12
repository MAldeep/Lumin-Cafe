import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AllRoutes from "./shared/Routes/AllRoutes";
import CoffeeLoader from "./pages/Landing page/components/CoffeeLoader";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { i18n } = useTranslation();

  // ✅ Handle initial direction + language setup
  useEffect(() => {
    if (!i18n.isInitialized) return; // wait until i18n is ready

    const lang = i18n.language.startsWith("ar") ? "ar" : "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.isInitialized, i18n.language]);

  // ✅ Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Loader + routes
  return loading ? (
    <CoffeeLoader />
  ) : (
    <div>
      <AllRoutes />
    </div>
  );
}
