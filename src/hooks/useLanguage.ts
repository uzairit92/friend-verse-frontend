
import { useState, useEffect } from 'react';
import { Language, translations } from '@/utils/translations';

export const useLanguage = () => {
  // Default to English only
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Always set to English and LTR
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
    // Clear any stored language preference to ensure English is used
    localStorage.removeItem('language');
  }, []);

  const t = (key: keyof typeof translations.en) => {
    return translations.en[key];
  };

  // No toggle functionality since we only support English
  const toggleLanguage = () => {
    // No-op since we only support English
  };

  return { language, setLanguage, t, toggleLanguage };
};
