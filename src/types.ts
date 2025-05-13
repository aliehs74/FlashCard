// src/types.ts
export enum Language {
    FA = "فارسی",
    AR = "عربی",
  }
  
  export interface Keyword {
    id: string;
    key: string;
    translations: Record<Language, string>;
  }
  
  export interface AppContextType {
    keywords: Keyword[];
    addKeyword: (key: string) => void;
    updateTranslation: (id: string, language: Language, value: string) => void;
    reorderKeywords: (newOrder: Keyword[]) => void;
  }