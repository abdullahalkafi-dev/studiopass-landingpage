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
    <div className="min-h-screen bg-[#080c15] text-slate-200 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#38bdf8] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#1e60f2]/20 text-[#38bdf8] border border-[#1e60f2]/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Effective Date: August 2026 • StudioPass Platform
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-300 border-t border-white/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By downloading, accessing, or using the StudioPass mobile application, website, or broadcast station console, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. User Accounts & Verification</h2>
            <p>
              Account creation requires a valid mobile telephone number capable of receiving SMS verification codes. You are responsible for all activities occurring under your authenticated account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Broadcast Content & Moderation</h2>
            <p>
              All messages, calls, photos, and answers submitted to radio and TV stations are subject to automated filtering and station control room moderation. Broadcasters maintain editorial authority to approve, reject, or edit submitted content for broadcast compliance (avoiding hate speech, defamation, obscenity, or commercial spam).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Communication Credits & Monetization</h2>
            <p>
              Participation in certain live broadcast shows, voting polls, and real-time studio calling may require message or call credits. Credits are purchased via authorized mobile money carriers and local telecom billing. Credits are non-transferable between accounts and subject to our{" "}
              <Link href="/refund" className="text-[#38bdf8] underline hover:text-white">
                Refund Policy
              </Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Broadcaster & Partner Rights</h2>
            <p>
              Media houses utilizing the StudioPass Broadcast Dashboard and Playout API Keys represent that they hold valid broadcast licenses in their jurisdiction and comply with national communications regulator guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Inquiries & Legal Notices</h2>
            <p>
              Legal notices should be directed to{" "}
              <a href="mailto:legal@studiopass.app" className="text-[#38bdf8] font-medium hover:text-white">
                legal@studiopass.app
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
