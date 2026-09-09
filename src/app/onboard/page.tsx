"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { Radio, ArrowLeft, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { OPERATING_COUNTRIES } from "@/lib/utils";

export default function OnboardPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    partnerType: "Radio Station",
    country: "Kenya",
    phone: "",
    email: "",
    websiteOrSocial: "",
    shortDescription: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#1e60f2", "#38bdf8", "#ffffff"],
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting onboard form", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

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

        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e60f2]/10 text-[#1e60f2] border border-[#1e60f2]/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5" />
            Partnership Application
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Become a Partner
          </h1>
          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
            Fill out the form below and our team will review your application
            and get in touch to set up your account.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Name / Company */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Name / Company or Channel Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Capital FM / Royal Media Services"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                  />
                </div>

                {/* 2. Partner Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Partner Type *
                  </label>
                  <div className="relative">
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl bg-slate-50 border border-slate-200 pl-4 pr-10 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1e60f2] cursor-pointer"
                    >
                      <option value="Radio Station">Radio Station</option>
                      <option value="TV Station">TV Station</option>
                      <option value="Digital Channel / Brand">
                        Digital Channel / Brand
                      </option>
                      <option value="Content Creator / Artist">
                        Content Creator / Artist
                      </option>
                      <option value="Regional Partner / Agency">
                        Regional Partner / Agency
                      </option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* 3. Country */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Country *
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl bg-slate-50 border border-slate-200 pl-4 pr-10 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#1e60f2] cursor-pointer"
                    >
                      {OPERATING_COUNTRIES.map((c) => (
                        <option key={c.code} value={c.name}>
                          {c.flag} {c.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* 4. Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Phone Number (with Country Code) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                  />
                </div>

                {/* 5. Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Business Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="station.manager@broadcaster.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                  />
                </div>

                {/* 6. Website or Social Link */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Website or Social Media Link
                  </label>
                  <input
                    type="url"
                    name="websiteOrSocial"
                    placeholder="https://capitalfm.co.ke"
                    value={formData.websiteOrSocial}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                  />
                </div>
              </div>

              {/* 7. Short Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Short Description of Station / Channel
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  placeholder="e.g. Leading youth urban station with 3 daily scheduled broadcast shows"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                />
              </div>

              {/* 8. Message / Additional Information */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Message / Additional Information
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share any details about your setup or target launch date..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  By submitting, you agree to StudioPass partner review process.
                </p>
                <Button
                  type="submit"
                  variant="default"
                  disabled={loading}
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  {loading ? (
                    "Processing..."
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-4 h-4 ml-1.5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 space-y-6 relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Application Received!
              </h2>

              <div className="max-w-lg mx-auto p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                Thank you for your interest in StudioPass. Our team will review
                your application and contact you shortly.
              </div>

              <p className="text-sm text-slate-500 max-w-md mx-auto">
                We will reach out to{" "}
                <strong className="text-slate-900">{formData.email}</strong> to set
                things up.
              </p>

              <div className="pt-4">
                <Link href="/">
                  <Button variant="default">Return to Homepage</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
