"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { OPERATING_COUNTRIES } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "Kenya",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e60f2] hover:text-[#1950cc] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1e60f2] px-3 py-1 rounded-full bg-[#1e60f2]/10 border border-[#1e60f2]/20 inline-block mb-3">
            Support &amp; Inquiries
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Can We Help You?
          </h1>
          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            Have questions about StudioPass, station onboarding, or the mobile app?
            Our support team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Channels */}
          <div className="space-y-4">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/254700000000?text=Hello%20StudioPass%20Support!"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#25D366]/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold group-hover:text-[#25D366] transition-colors">
                    WhatsApp Live Chat
                  </h3>
                  <p className="text-xs text-emerald-600 font-medium">
                    ● Typical reply in minutes
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our operations desk on WhatsApp for fast
                support and onboarding assistance.
              </p>
            </a>

            {/* Email Support */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-[#1e60f2]/10 text-[#1e60f2]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold">Email Support</h3>
                  <p className="text-xs text-slate-400">Official Desk</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Send inquiries, partnership proposals, or technical questions.
              </p>
              <a
                href="mailto:hello@studiopass.ug"
                className="text-sm font-semibold text-[#1e60f2] hover:text-[#1950cc]"
              >
                hello@studiopass.ug
              </a>
            </div>

            {/* FAQ Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-[#1e60f2]/10 text-[#1e60f2]">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold">FAQ</h3>
                  <p className="text-xs text-slate-400">Self-serve guides</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Browse our knowledge base covering features, the mobile app, and
                partnership details.
              </p>
              <Link
                href="/#faq"
                className="text-xs font-semibold text-[#1e60f2] hover:text-[#1950cc] inline-flex items-center gap-1"
              >
                View Common Questions
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Send a Direct Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Your Country *
                    </label>
                    <div className="relative">
                      <select
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full appearance-none rounded-xl bg-slate-50 border border-slate-200 pl-3.5 pr-10 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1e60f2] cursor-pointer"
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

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Subject / Topic
                    </label>
                    <div className="relative">
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full appearance-none rounded-xl bg-slate-50 border border-slate-200 pl-3.5 pr-10 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1e60f2] cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Station Onboarding Inquiry">
                          Station Onboarding Inquiry
                        </option>
                        <option value="Partnership">Partnership</option>
                        <option value="App Feedback">App Feedback</option>
                        <option value="Technical Support">Technical Support</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can our team assist you today?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    variant="default"
                    disabled={loading}
                    className="min-w-[150px]"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-1.5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        country: "Kenya",
                        subject: "General Inquiry",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
