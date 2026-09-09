"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Radio, Send, ChevronDown } from "lucide-react";
import { OPERATING_COUNTRIES } from "@/lib/utils";

interface OnboardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OnboardModal({ open, onOpenChange }: OnboardModalProps) {
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
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#1e60f2", "#38bdf8", "#ffffff"],
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onOpenChange(false);
    setFormData({
      name: "",
      partnerType: "Radio Station",
      country: "Kenya",
      phone: "",
      email: "",
      websiteOrSocial: "",
      shortDescription: "",
      message: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {!submitted ? (
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-xl bg-[#1e60f2]/10 text-[#1e60f2]">
              <Radio className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1e60f2]">
              Partner Application
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Become a StudioPass Partner
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Submit your details and our team will get in touch to set up your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Name / Company *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Capital FM"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Partner Type *
                </label>
                <div className="relative">
                  <select
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl bg-slate-50 border border-slate-200 pl-3.5 pr-10 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1e60f2] cursor-pointer"
                  >
                    <option value="Radio Station">Radio Station</option>
                    <option value="TV Station">TV Station</option>
                    <option value="Digital Channel / Brand">Digital Channel / Brand</option>
                    <option value="Content Creator / Artist">Content Creator / Artist</option>
                    <option value="Regional Partner / Agency">Regional Partner / Agency</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Country *
                </label>
                <div className="relative">
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+254 700 000 000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Website or Social Link
                </label>
                <input
                  type="url"
                  name="websiteOrSocial"
                  placeholder="https://..."
                  value={formData.websiteOrSocial}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Short Description
              </label>
              <input
                type="text"
                name="shortDescription"
                placeholder="Brief description of your channel/station"
                value={formData.shortDescription}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] focus:ring-1 focus:ring-[#1e60f2]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Additional Information
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your setup or goals..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1e60f2] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="default"
                disabled={loading}
                className="min-w-[160px]"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-center py-6 sm:py-8 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Application Received!
          </h3>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-sm leading-relaxed">
            Thank you for your interest in StudioPass. Our team will review your
            application and contact you shortly.
          </div>

          <p className="text-xs text-slate-400">
            A confirmation will be sent to{" "}
            <span className="text-slate-700 font-medium">{formData.email}</span>.
          </p>

          <div className="pt-4">
            <Button variant="default" onClick={handleReset}>
              Back to Website
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  );
}
