
import { useState, useEffect } from 'react';
import { Language, translations } from '@/utils/translations';

export const useLanguage = () => {
  // Default to English as requested
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en'; // Changed from 'ar' to 'en'
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Set document direction for RTL support
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations.en[key];
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return { language, setLanguage, t, toggleLanguage };
};
