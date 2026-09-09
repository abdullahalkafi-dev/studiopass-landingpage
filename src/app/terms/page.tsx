import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata = {
  title: "Terms of Service | StudioPass",
  description: "Terms and conditions governing the use of StudioPass applications and broadcaster platforms.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e60f2] hover:text-[#1950cc] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#1e60f2]/10 text-[#1e60f2]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Effective Date: August 2026 &bull; StudioPass Platform
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-200 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Agreement to Terms</h2>
            <p>
              By downloading, accessing, or using StudioPass, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. User Accounts</h2>
            <p>
              Account creation requires a valid mobile telephone number capable of receiving SMS verification codes. You are responsible for all activities under your account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Broadcast Content &amp; Moderation</h2>
            <p>
              All messages, calls, and content submitted to stations are subject to automated filtering and station moderation. Broadcasters maintain editorial authority over content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Communication Credits</h2>
            <p>
              Certain features may require credits. Credits are purchased via mobile money carriers and are non-transferable. See our{" "}
              <Link href="/refund" className="text-[#1e60f2] underline hover:text-[#1950cc]">
                Refund Policy
              </Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Contact</h2>
            <p>
              Legal notices:{" "}
              <a href="mailto:hello@studiopass.ug" className="text-[#1e60f2] font-medium hover:text-[#1950cc]">
                hello@studiopass.ug
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
