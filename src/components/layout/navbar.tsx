"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Radio, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnboardModal } from "@/components/onboard-modal";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [onboardModalOpen, setOnboardModalOpen] = useState(false);

  const navLinks = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Features", href: "/#features" },
    { label: "Countries", href: "/#countries" },
    { label: "App Download", href: "/#download" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#080c15]/80 border-b border-white/10 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/logo.svg"
                alt="StudioPass Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                Studio<span className="text-[#38bdf8]">Pass</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                Broadcaster Engagement
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#38bdf8] transition-colors relative py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/254700000000?text=Hello%20StudioPass!%20I%20would%20like%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 px-3 py-2 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <Button
              variant="glow"
              size="sm"
              onClick={() => setOnboardModalOpen(true)}
            >
              Partner With Us
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#0a0f1d] px-4 py-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white py-1.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Button
                variant="glow"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOnboardModalOpen(true);
                }}
              >
                Partner With Us
              </Button>
              <a
                href="https://wa.me/254700000000?text=Hello%20StudioPass!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366]/20 text-emerald-400 border border-[#25D366]/30 text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Onboarding Modal Instance */}
      <OnboardModal
        open={onboardModalOpen}
        onOpenChange={setOnboardModalOpen}
      />
    </>
  );
}
