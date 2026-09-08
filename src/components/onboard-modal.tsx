"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Radio, Send, Sparkles, ChevronDown } from "lucide-react";
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
      const res = await fetch("/landing-page/api/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#1e60f2", "#38bdf8", "#ffffff"],
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
      // Still show success to client with local confirmation
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
            <div className="p-2 rounded-xl bg-[#1e60f2]/20 text-[#38bdf8] border border-[#1e60f2]/30">
              <Radio className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
              Broadcaster & Partner Application
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Onboard Your Station or Channel
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Join 24+ radio and TV networks revolutionizing live audience engagement
            and monetization. Submit your details below and our team will get in touch.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name / Company */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Name / Company or Channel Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Capital FM Kenya / Nation Media"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8] transition-colors"
                />
              </div>

              {/* Partner Type */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Partner Type *
                </label>
                <div className="relative">
                  <select
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl bg-[#0c1220] border border-white/10 pl-3.5 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors cursor-pointer"
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

              {/* Country */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Country *
                </label>
                <div className="relative">
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl bg-[#0c1220] border border-white/10 pl-3.5 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-[#38bdf8] transition-colors cursor-pointer"
                  >
                    {OPERATING_COUNTRIES.map((c) => (
                      <option key={c.code} value={c.name} className="bg-[#0c1220] text-white">
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Phone Number (with Country Code) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+254 700 000 000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8] transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="station@broadcast.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8] transition-colors"
                />
              </div>

              {/* Website or Social Link */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Website or Social Media Link
                </label>
                <input
                  type="url"
                  name="websiteOrSocial"
                  placeholder="https://capitalfm.co.ke"
                  value={formData.websiteOrSocial}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8] transition-colors"
                />
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Short Description of Station / Channel
              </label>
              <input
                type="text"
                name="shortDescription"
                placeholder="Top urban contemporary radio reaching 1.2M daily youth listeners"
                value={formData.shortDescription}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>

            {/* Message / Additional Info */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Message / Additional Information
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your audience, current playout system (vMix, TriCaster, etc.), or specific goals..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
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
                variant="glow"
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
        /* Confirmation State */
        <div className="text-center py-6 sm:py-8 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-2">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Application Received!
          </h3>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm leading-relaxed">
            “Thank you for your interest in StudioPass. Our team will review your
            application and contact you shortly.”
          </div>

          <p className="text-xs text-slate-500">
            A confirmation copy will be sent to{" "}
            <span className="text-slate-300 font-medium">{formData.email}</span>.
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
