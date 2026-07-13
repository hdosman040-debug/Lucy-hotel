import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const WHATSAPP_URL = "https://wa.me/251911234567?text=Hello%20Lucy%20Hotel%2C%20I%20would%20like%20to%20check%20room%20availability.";
  
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 transform hover:scale-105 group active:scale-95"
      aria-label="Chat with Lucy Hotel on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="font-medium text-sm tracking-wide shadow-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out md:max-w-xs">
        Book on WhatsApp
      </span>
    </a>
  );
}
