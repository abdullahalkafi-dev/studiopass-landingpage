import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata = {
  title: "Privacy Policy | StudioPass",
  description: "StudioPass Privacy Policy and data protection standards for mobile app users and broadcast partners.",
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Last Updated: August 2026 • StudioPass Platform
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-300 border-t border-white/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              StudioPass (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the StudioPass mobile application, the broadcast moderation web dashboard, and related fan engagement services. We are dedicated to protecting the privacy, security, and personal data of listeners, viewers, presenters, and media broadcasters.
            </p>
            <p>
              This Privacy Policy explains what personal information we collect, how it is processed to deliver interactive broadcast experiences, and your rights under applicable data protection regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Phone Number (MSISDN):</strong> Used exclusively for frictionless OTP (One-Time Password) login and session authentication. We do not require or store passwords.
              </li>
              <li>
                <strong>Broadcast Messages & Media:</strong> Text statements, song requests, photos, or voice notes you submit to radio and TV stations.
              </li>
              <li>
                <strong>Real-Time Studio Voice Calls:</strong> If you initiate a live audio call to a broadcast studio, audio streams are handled securely in real time via low-latency RTC infrastructure.
              </li>
              <li>
                <strong>Carrier Billing & Wallet Ledger:</strong> Transaction references and message pack purchases processed via telecom Mobile Money partners (e.g., MTN, Airtel, Safaricom M-Pesa). We do not store credit card CVVs or bank PINs.
              </li>
              <li>
                <strong>Device & Network Data:</strong> Telecom carrier, country code, IP address, and app diagnostics required to route messages to local media stations.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How Your Information is Used</h2>
            <p>We process personal data for the following lawful broadcast purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivering your messages and song requests to live show presenter consoles.</li>
              <li>With your consent and station moderation, displaying your public first name or handle on television broadcast tickers and live overlays.</li>
              <li>Calculating weekly Top Fan ranks (1–5) and awarding in-app badges based on verified show participation.</li>
              <li>Facilitating automated mobile money prize disbursements if you win sponsored station quizzes or challenges.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Data Sharing & Broadcast Disclosures</h2>
            <p>
              When you participate in a live show, messages approved by the station control room may be broadcast publicly on air (via FM/AM radio frequency or television screen playout). Private personal identifiers such as your full phone number are never displayed on air or shared with third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Data Retention & Account Deletion</h2>
            <p>
              We retain account data as long as your profile remains active. You maintain the absolute right to delete your profile, communication pack balance, and interaction history at any time.
            </p>
            <p>
              To submit an account and data wipe request, visit our{" "}
              <Link
                href="/account-deletion"
                className="text-[#38bdf8] underline hover:text-white"
              >
                Account Deletion Portal
              </Link>{" "}
              or email{" "}
              <a
                href="mailto:privacy@studiopass.app"
                className="text-[#38bdf8] underline hover:text-white"
              >
                privacy@studiopass.app
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Contact Our Data Protection Team</h2>
            <p>
              For questions regarding privacy practices, contact us at{" "}
              <a
                href="mailto:privacy@studiopass.app"
                className="text-[#38bdf8] font-medium hover:text-white"
              >
                privacy@studiopass.app
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
