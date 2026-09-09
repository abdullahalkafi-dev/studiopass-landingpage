import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react";
import { withBasePath } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="w-full bg-[#f8faff] border-t border-slate-200/90 pt-16 pb-10">
      <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src={withBasePath("/logo-icon.svg")}
                  alt="StudioPass Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Studio<span className="text-[#1e60f2]">Pass</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                  By Next Go Tech Africa
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Built for Radio, TV, and Digital Communities. StudioPass connects
              audiences directly with the media, creators and brands they love.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 hover:bg-[#1e60f2] hover:text-white hover:border-[#1e60f2] flex items-center justify-center text-slate-600 shadow-xs transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 hover:bg-[#1e60f2] hover:text-white hover:border-[#1e60f2] flex items-center justify-center text-slate-600 shadow-xs transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 hover:bg-[#1e60f2] hover:text-white hover:border-[#1e60f2] flex items-center justify-center text-slate-600 shadow-xs transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 hover:bg-[#1e60f2] hover:text-white hover:border-[#1e60f2] flex items-center justify-center text-slate-600 shadow-xs transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 hover:bg-[#1e60f2] hover:text-white hover:border-[#1e60f2] flex items-center justify-center text-slate-600 shadow-xs transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Solutions / Product Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/#for-stations" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  For Radio Stations
                </Link>
              </li>
              <li>
                <Link href="/#for-stations" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  For TV Stations
                </Link>
              </li>
              <li>
                <Link href="/#for-creators" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  For Brands & Advertisers
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  For Listeners
                </Link>
              </li>
              <li>
                <Link href="/#partner" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  Pricing & Onboarding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/#about" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  About StudioPass
                </Link>
              </li>
              <li>
                <Link href="/onboard" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Resources Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  Refund & Credit Policy
                </Link>
              </li>
              <li>
                <Link href="/account-deletion" className="text-slate-600 hover:text-[#1e60f2] transition-colors">
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Get in Touch Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#1e60f2] shrink-0 mt-0.5" />
                <a href="mailto:hello@studiopass.ug" className="hover:text-[#1e60f2] transition-colors">
                  hello@studiopass.ug
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1e60f2] shrink-0 mt-0.5" />
                <a href="tel:+256776123456" className="hover:text-[#1e60f2] transition-colors">
                  +256 776 123 456
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1e60f2] shrink-0 mt-0.5" />
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex items-start gap-2.5 text-[11px] text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Available Mon - Fri, 9AM - 6PM</span>
              </li>
            </ul>

            <div className="pt-2 text-[#1e60f2] font-semibold italic text-xs tracking-wide">
              Radio. TV. Everywhere with you.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            &copy; 2026 StudioPass, by Next Go Tech Africa. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#1e60f2] fill-[#1e60f2]" />
            <span>in Uganda.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
