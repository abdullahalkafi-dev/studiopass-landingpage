"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export function WhatsAppFloat({
  phoneNumber = "256776123456",
  message = "Hello StudioPass! I would like to learn more about StudioPass.",
}: {
  phoneNumber?: string;
  message?: string;
}) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with StudioPass Support"
        className="relative group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#1e60f2] hover:bg-[#185adb] text-white font-bold text-sm shadow-xl shadow-[#1e60f2]/30 hover:shadow-2xl hover:shadow-[#1e60f2]/40 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30"
      >
        {/* Green status ping dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>

        <MessageSquare className="w-5 h-5 fill-white text-[#1e60f2]" />
        <span className="tracking-tight font-semibold">Chat with us</span>
      </a>
    </div>
  );
}
