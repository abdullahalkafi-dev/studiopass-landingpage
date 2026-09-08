import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Globe, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#050810] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9">
                <Image
                  src="/logo.svg"
                  alt="StudioPass Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-white">
                Studio<span className="text-[#38bdf8]">Pass</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The unified live fan engagement and monetization infrastructure
              powering interactive Radio, TV broadcast playout tickers, and
              digital channel fan communities across Africa.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                🇰🇪 Kenya
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                🇺🇬 Uganda
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                🇹🇿 Tanzania
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                🇷🇼 Rwanda
              </span>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#solutions" className="hover:text-white transition-colors">
                  Radio Broadcasters
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-white transition-colors">
                  TV Playout Tickers
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-white transition-colors">
                  Digital Channels & Brands
                </Link>
              </li>
              <li>
                <Link href="/#download" className="hover:text-white transition-colors">
                  Listener Mobile App
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  HD Studio Voice Calling
                </Link>
              </li>
            </ul>
          </div>

          {/* Onboarding & Support Col */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Onboarding & Help
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/onboard" className="hover:text-white transition-colors">
                  Station Onboarding Form
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/254700000000?text=Hello%20StudioPass!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp Direct
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@studiopass.app"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  support@studiopass.app
                </a>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Broadcaster FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & App Store Compliance Col */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition-colors">
                  Refund & Credit Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/account-deletion"
                  className="text-amber-400/90 hover:text-amber-300 font-medium transition-colors"
                >
                  Account Deletion Request
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} StudioPass Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Broadcaster Grade & Telco Certified
            </span>
            <span>App Store & Google Play Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
