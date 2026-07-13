import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageOption {
  code: string;
  label: string;
  shortLabel: string;
}

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = i18n.language.split('-')[0] || 'en';

  const languages: LanguageOption[] = [
    { code: 'en', label: 'English', shortLabel: 'EN' },
    { code: 'am', label: 'አማርኛ', shortLabel: 'አማ' }
  ];

  // Guaranteed fallback structural dictionary object clears strict compiler rules
  const activeLang = languages.find(lang => lang.code === currentLanguage) ?? { code: 'en', label: 'English', shortLabel: 'EN' };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left font-sans" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-500/30 rounded bg-[#11141A] text-amber-400 hover:text-amber-300 hover:border-amber-400 text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
      >
        <Globe className="w-4 h-4 text-amber-500/70" />
        <span className="min-w-[24px] text-center">{activeLang.shortLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded border border-amber-500/20 bg-[#11141A] shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 block ${
                  currentLanguage === lang.code
                    ? 'bg-amber-500/10 text-amber-400 font-semibold'
                    : 'text-gray-300 hover:bg-amber-500/5 hover:text-amber-300'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
