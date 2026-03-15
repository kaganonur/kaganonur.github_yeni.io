'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('tr');

  useEffect(() => {
    const savedL = localStorage.getItem('site_lang') || 'tr';
    setLang(savedL);
  }, []);

  const toggleLang = () => {
    const newL = lang === 'tr' ? 'en' : 'tr';
    setLang(newL);
    localStorage.setItem('site_lang', newL);
  };

  const t = translations[lang] || translations.tr;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
