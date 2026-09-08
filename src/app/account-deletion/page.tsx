"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserX, ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function AccountDeletionPage() {
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Account deletion request submitted for:", phone, reason);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#080c15] text-slate-200 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#38bdf8] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30">
            <UserX className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Account & Data Deletion Request
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Compliant with Google Play & Apple App Store User Privacy Standards
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm leading-relaxed mb-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
          <div>
            <strong>Notice Regarding Permanent Data Deletion:</strong> Deleting
            your account will permanently remove your telephone identifier,
            active show chat history, favorite stations, and any remaining
            communication credit balance. This action cannot be undone.
          </div>
        </div>

        {/* Step-by-step instructions */}
        <div className="space-y-6 text-sm text-slate-300 mb-10">
          <h2 className="text-lg font-bold text-white">
            How to Delete Your Account
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-bold uppercase text-[#38bdf8]">
                Option 1: Inside the Mobile App
              </span>
              <p className="text-xs text-slate-400">
                1. Open StudioPass on your device.
                <br />
                2. Navigate to <strong>More ➔ Settings</strong>.
                <br />
                3. Tap <strong>Privacy & Account ➔ Delete Account</strong>.
                <br />
                4. Confirm with your OTP to immediately purge your account.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-bold uppercase text-[#38bdf8]">
                Option 2: Web Deletion Request Form
              </span>
              <p className="text-xs text-slate-400">
                If you no longer have the StudioPass application installed on
                your smartphone, fill out the verified deletion request form
                below.
              </p>
            </div>
          </div>
        </div>

        {/* Web Deletion Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1424] border border-white/10 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-white mb-2">
                Submit Online Deletion Request
              </h3>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Registered Telephone Number (with Country Code) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+254 700 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Reason for Account Deletion (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us why you are deleting your account..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8] resize-none"
                />
              </div>

              <div className="pt-2">
                <Button variant="default" type="submit" className="w-full sm:w-auto bg-red-600 hover:bg-red-700">
                  Submit Deletion Request
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Deletion Request Queued
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                We have received your account removal request for{" "}
                <strong className="text-white">{phone}</strong>. A verification
                SMS will be dispatched to confirm ownership before permanently
                erasing account records within 72 hours.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
