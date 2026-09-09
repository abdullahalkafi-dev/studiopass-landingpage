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
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Last Updated: August 2026 &bull; StudioPass Platform
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-200 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              StudioPass (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the StudioPass mobile application and related fan engagement services. We are dedicated to protecting the privacy, security, and personal data of listeners, viewers, presenters, and media broadcasters.
            </p>
            <p>
              This Privacy Policy explains what personal information we collect, how it is processed, and your rights under applicable data protection regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Phone Number:</strong> Used exclusively for OTP login and session authentication.</li>
              <li><strong>Broadcast Messages &amp; Media:</strong> Text statements, song requests, photos, or voice notes you submit to stations.</li>
              <li><strong>Voice Calls:</strong> If you initiate a live audio call, streams are handled securely via low-latency RTC infrastructure.</li>
              <li><strong>Device &amp; Network Data:</strong> Telecom carrier, country code, IP address, and app diagnostics required to route messages.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. How Your Information is Used</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivering your messages and song requests to live show presenter consoles.</li>
              <li>Displaying your public first name or handle on broadcast tickers (with station moderation).</li>
              <li>Calculating weekly Top Fan ranks and awarding in-app badges.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Data Retention &amp; Account Deletion</h2>
            <p>
              We retain account data as long as your profile remains active. You can delete your profile at any time via our{" "}
              <Link href="/account-deletion" className="text-[#1e60f2] underline hover:text-[#1950cc]">
                Account Deletion Portal
              </Link>{" "}
              or by emailing{" "}
              <a href="mailto:hello@studiopass.ug" className="text-[#1e60f2] underline hover:text-[#1950cc]">
                hello@studiopass.ug
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Us</h2>
            <p>
              For privacy questions, contact us at{" "}
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
