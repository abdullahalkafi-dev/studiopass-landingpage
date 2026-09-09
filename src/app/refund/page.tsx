import React from "react";
import Link from "next/link";
import { RefreshCcw, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata = {
  title: "Refund & Credit Policy | StudioPass",
  description: "StudioPass Refund Policy governing digital communication packs and mobile money transactions.",
};

export default function RefundPage() {
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
            <RefreshCcw className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Refund &amp; Credit Policy
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              StudioPass Platform &bull; Digital Products &amp; Telecom Services
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-200 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Digital Communication Credits</h2>
            <p>
              StudioPass provides digital interaction packs (message credits, call credits, and poll votes). Because credits are digital goods available for immediate consumption, completed purchases are generally non-refundable once activated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Eligible Refund Circumstances</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Duplicate Billing:</strong> If a mobile money provider charges multiple times for a single transaction.</li>
              <li><strong>Uncredited Payment:</strong> If funds were debited but credits were not applied within 60 minutes.</li>
              <li><strong>Technical Cancellation:</strong> If a paid live voice call was cut off due to infrastructure outage.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. How to Request a Refund</h2>
            <p>
              Submit your details to{" "}
              <a href="mailto:hello@studiopass.ug" className="text-[#1e60f2] font-medium hover:text-[#1950cc]">
                hello@studiopass.ug
              </a>{" "}
              or message our support desk on WhatsApp. Include your phone number, transaction ID, date, and amount. Inquiries are resolved within 24-48 business hours.
            </p>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
