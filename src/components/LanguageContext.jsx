import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('eng'); // promenjeno na 'eng' umesto 'en'
  
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'eng' ? 'srb' : 'eng')); // 'eng' i 'srb'
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
