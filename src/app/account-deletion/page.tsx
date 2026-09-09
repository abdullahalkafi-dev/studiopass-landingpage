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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e60f2] hover:text-[#1950cc] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-red-100 text-red-600">
            <UserX className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Account &amp; Data Deletion Request
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Compliant with Google Play &amp; Apple App Store User Privacy Standards
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs sm:text-sm leading-relaxed mb-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <strong>Notice:</strong> Deleting your account will permanently remove your
            data, chat history, favorite stations, and any remaining credit balance.
            This action cannot be undone.
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-600 mb-10">
          <h2 className="text-lg font-bold text-slate-900">
            How to Delete Your Account
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase text-[#1e60f2]">
                Option 1: Inside the App
              </span>
              <p className="text-xs text-slate-500">
                1. Open StudioPass.<br />
                2. Go to More &gt; Settings.<br />
                3. Tap Privacy &amp; Account &gt; Delete Account.<br />
                4. Confirm with OTP.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase text-[#1e60f2]">
                Option 2: Web Form
              </span>
              <p className="text-xs text-slate-500">
                If you no longer have the app, fill out the form below.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Submit Deletion Request
              </h3>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Registered Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+254 700 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Reason (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us why..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] resize-none"
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
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Deletion Request Queued
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                We have received your request for{" "}
                <strong className="text-slate-900">{phone}</strong>. A verification
                SMS will be sent before permanently removing your data within 72 hours.
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
