import React from "react";
import Link from "next/link";
import { RefreshCcw, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata = {
  title: "Refund & Credit Policy | StudioPass",
  description: "StudioPass Refund Policy governing digital communication packs, airtime billing, and mobile money transactions.",
};

export default function RefundPage() {
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
            <RefreshCcw className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Refund & Credit Policy
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              StudioPass Platform • Digital Products & Telecom Services
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-300 border-t border-white/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Nature of Digital Communication Credits</h2>
            <p>
              StudioPass provides digital interaction packs (message credits, call credits, and poll votes) that enable audience members to communicate with live broadcast programs. Because communication credits are digital goods available for immediate consumption upon top-up, completed credit purchases are generally non-refundable once activated in your wallet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Eligible Refund Circumstances</h2>
            <p>We provide full credit adjustments or transaction reversals under the following verified conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Duplicate Carrier Billing:</strong> If a mobile money provider (e.g., MTN, Airtel, M-Pesa) charges your mobile account multiple times for a single pack transaction due to a network timeout.
              </li>
              <li>
                <strong>Uncredited Payment:</strong> If mobile money funds were debited from your telephone account but credits were not credited to your StudioPass app balance within 60 minutes.
              </li>
              <li>
                <strong>Technical Broadcast Cancellation:</strong> If a paid live voice call into the studio was cut off due to an infrastructure outage before reaching the broadcast queue.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How to Request a Credit Adjustment</h2>
            <p>
              To request a credit adjustment or review a disputed mobile money transaction, submit your details to{" "}
              <a href="mailto:billing@studiopass.app" className="text-[#38bdf8] font-medium hover:text-white">
                billing@studiopass.app
              </a>{" "}
              or message our support desk on WhatsApp. Please include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your registered telephone number (with country code).</li>
              <li>The Mobile Money carrier transaction ID (e.g. M-Pesa or MTN receipt code).</li>
              <li>Date, time, and purchase amount.</li>
            </ul>
            <p>
              Inquiries are investigated and resolved within 24 to 48 business hours.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
