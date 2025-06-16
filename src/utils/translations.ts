export const translations = {
  en: {
    // Navigation
    feed: "Feed",
    quran: "Quran", 
    videos: "Videos",
    marketplace: "Marketplace",
    games: "Games",
    settings: "Settings",
    
    // New Sidebar Buttons
    save: "Save",
    groups: "Groups", 
    blink: "Blink",
    blinkEvents: "BlinkM Events",
    adsManager: "Ads Manager",
    fundraiser: "Fundraisers",
    orders: "Orders and Payments",
    pages: "Pages",
    recent: "Recent Activity",
    
    // Other
    shortcuts: "Your shortcuts",
    language: "Language"
  },
  ar: {
    // Navigation
    feed: "الخلاصة",
    quran: "القرآن",
    videos: "الفيديوهات", 
    marketplace: "السوق",
    games: "الألعاب",
    settings: "الإعدادات",
    
    // New Sidebar Buttons
    save: "حفظ",
    groups: "مجموعات",
    blink: "لمحة", 
    blinkEvents: "فعاليات لمحة",
    adsManager: "مدير الإعلانات",
    fundraiser: "حملات التبرع",
    orders: "الطلبات والمدفوعات",
    pages: "الصفحات",
    recent: "النشاطات الأخيرة",
    
    // Other
    shortcuts: "اختصاراتك",
    language: "اللغة"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
