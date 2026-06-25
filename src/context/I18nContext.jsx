import { createContext, useContext, useMemo, useState } from "react";
import { dictionary } from "../data/content.js";

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "pt");

  const value = useMemo(() => {
    const switchLanguage = () => {
      setLanguage((current) => {
        const nextLanguage = current === "pt" ? "en" : "pt";
        localStorage.setItem("portfolio-language", nextLanguage);
        document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : "en";
        return nextLanguage;
      });
    };

    return {
      language,
      t: dictionary[language],
      switchLanguage,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
