"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnboardModal } from "@/components/onboard-modal";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [onboardModalOpen, setOnboardModalOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "About", href: "/#about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200 shadow-xs">
        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto h-20 flex items-center justify-between">
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
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-0.5">
                Studio<span className="text-[#1e60f2]">Pass</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-0.5">
                By Next Go Tech Africa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#1e60f2] transition-colors relative py-1 hover:translate-y-[-1px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3.5">
            <a
              href="#download"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-[#1e60f2] transition-colors px-4 py-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200"
            >
              <Download className="w-4 h-4 text-[#1e60f2]" />
              Download App
            </a>

            <Button
              variant="default"
              size="md"
              onClick={() => setOnboardModalOpen(true)}
              className="bg-[#1e60f2] hover:bg-[#185adb] text-white font-bold px-5 py-2.5 rounded-xl shadow-md shadow-[#1e60f2]/20 hover:shadow-lg hover:shadow-[#1e60f2]/30 transition-all"
            >
              Become a Partner
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 hover:text-[#1e60f2] py-2 border-b border-slate-100 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-300 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-colors"
              >
                <Download className="w-4 h-4 text-[#1e60f2]" />
                Download App
              </a>
              <Button
                variant="default"
                className="w-full bg-[#1e60f2] hover:bg-[#185adb] text-white font-bold py-3 rounded-xl shadow-md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOnboardModalOpen(true);
                }}
              >
                Become a Partner
              </Button>
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
