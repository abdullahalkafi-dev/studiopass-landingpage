"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat({
  phoneNumber = "254700000000",
  message = "Hello StudioPass! I would like to learn more about onboarding our station.",
}: {
  phoneNumber?: string;
  message?: string;
}) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with StudioPass Support on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
    </a>
  );
}
