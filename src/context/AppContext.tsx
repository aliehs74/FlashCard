// src/context/AppContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Keyword, AppContextType } from "../types";

// داده‌های اولیه (Pre-set Keywords)
const initialKeywords: Keyword[] = [
  { id: "1", key: "Hello", translations: { [Language.FA]: "سلام", [Language.AR]: "مرحبا" } },
  { id: "2", key: "World", translations: { [Language.FA]: "جهان", [Language.AR]: "عالم" } },
  { id: "3", key: "Apple", translations: { [Language.FA]: "سیب", [Language.AR]: "تفاحة" } },
];

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [keywords, setKeywords] = useState<Keyword[]>(() => {
    const savedData = localStorage.getItem("translationKeywords");
    return savedData ? JSON.parse(savedData) : initialKeywords;
  });

  useEffect(() => {
    localStorage.setItem("translationKeywords", JSON.stringify(keywords));
  }, [keywords]);


  const addKeyword = (key: string) => {

    const newKeyword: Keyword = {
      id: Date.now().toString(),
      key,
      translations: {
        [Language.FA]: "",
        [Language.AR]: "",
      },
    };
    setKeywords([...keywords, newKeyword]);
    localStorage.setItem("translationKeywords", JSON.stringify(keywords));

  };

  const updateTranslation = (id: string, language: Language, value: string) => {
    // console.log('updateTranslation');
    setKeywords(
      keywords.map((keyword) =>
        keyword.id === id
          ? { ...keyword, translations: { ...keyword.translations, [language]: value } }
          : keyword
      )
    );
  };

  const reorderKeywords = (newOrder: Keyword[]) => {
    setKeywords(newOrder);
  };

  return (
    <AppContext.Provider value={{ keywords, addKeyword, updateTranslation, reorderKeywords }} >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};