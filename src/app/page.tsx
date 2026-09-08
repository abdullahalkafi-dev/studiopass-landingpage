"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radio,
  Tv,
  Users,
  Smartphone,
  Sparkles,
  ArrowRight,
  Download,
  PhoneCall,
  CheckCircle2,
  Send,
  Trophy,
  Wallet,
  Play,
  Share2,
  Shield,
  Layers,
  Flame,
  Globe2,
  Clock,
  Mic,
  MessageSquare,
  QrCode,
  Search,
  Copy,
  Check,
  Zap,
  Volume2,
  Star,
  Activity,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { OnboardModal } from "@/components/onboard-modal";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Marquee } from "@/components/magicui/marquee";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Safari } from "@/components/magicui/safari";
import { Iphone15Pro } from "@/components/magicui/iphone-15-pro";
import { BackgroundBeamsWithCollision } from "@/components/aceternity/background-beams-collision";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";
import { AudioVisualizer } from "@/components/cult/audio-visualizer";
import { LiveBadge } from "@/components/cult/live-badge";
import { OPERATING_COUNTRIES } from "@/lib/utils";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function HomePage() {
  const [onboardOpen, setOnboardOpen] = useState(false);
  const [mobileMockupView, setMobileMockupView] = useState<"chat" | "explore">("chat");

  // Simulator State
  const [simMessage, setSimMessage] = useState("Big up DJ Mike! Playing heat on the morning drive 🔥");
  const [simStep, setSimStep] = useState<"idle" | "sending" | "approved">("approved");
  const [activePreset, setActivePreset] = useState<number | null>(0);

  // API Copy State
  const [copiedApi, setCopiedApi] = useState(false);

  // Filter States
  const [countryFilter, setCountryFilter] = useState<"all" | "east" | "west" | "other">("all");
  const [faqFilter, setFaqFilter] = useState<"all" | "station" | "tv" | "billing">("all");

  const presetShoutouts = [
    "Big up DJ Mike! Playing heat on the morning drive 🔥",
    "Please play Sauti Sol - Suzanna for my sister Amina! 🎶",
    "Locked in from Westlands Nairobi! Ready for the cash trivia 🏆",
    "Put me live on air! Calling from Kampala studio queue 🎙️",
  ];

  const handleSimSend = (customText?: string) => {
    const textToSend = customText || simMessage;
    if (!textToSend.trim()) return;
    setSimMessage(textToSend);
    setSimStep("sending");
    setTimeout(() => {
      setSimStep("approved");
    }, 900);
  };

  const handleCopyApi = () => {
    const apiSnippet = `GET /api/v1/station/ticker HTTP/1.1
Host: studio.studiopass.app
Authorization: Bearer sk_live_capitalfm_984
Content-Type: application/json

{
  "status": "sent_to_output",
  "author": "David M.",
  "top_fan_rank": 1,
  "message": "Watching live from Kampala!",
  "timestamp": "${new Date().toISOString()}"
}`;
    navigator.clipboard?.writeText(apiSnippet);
    setCopiedApi(true);
    setTimeout(() => setCopiedApi(false), 2000);
  };

  // 4 Scenarios Data with Rich Visual Previews
  const scenarioItems = [
    {
      title: "Live Radio Broadcasts",
      badge: "HD Voice & Chat",
      icon: <Radio className="w-5 h-5" />,
      description:
        "Give on-air radio presenters a unified live console. Incoming WhatsApp-style messages, song requests, listener sentiment, and direct live audio studio calls.",
      features: [
        "Dedicated show presenter views",
        "HD studio caller queue with audio wave",
        "Canned quick-reply templates",
        "Real-time listener sentiment meter",
      ],
      visualPreview: (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/5">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              1 On-Air Caller Live
            </span>
            <span className="text-emerald-400 font-mono text-[10px]">0.08s Latency</span>
          </div>
          <div className="flex items-center justify-between bg-black/40 rounded-lg p-2 border border-white/5">
            <div className="text-[11px] text-slate-300">
              <div className="font-bold text-white">Kevin O. (Nairobi)</div>
              <div className="text-[9px] text-slate-400">+254 712***89</div>
            </div>
            <AudioVisualizer barCount={10} color="#10b981" />
          </div>
        </div>
      ),
    },
    {
      title: "Television Playout Tickers",
      badge: "Direct Playout API",
      icon: <Tv className="w-5 h-5" />,
      description:
        "Control rooms curate and approve viewer comments in seconds. Approved messages push instantly to on-screen TV lower-thirds and graphics overlays.",
      features: [
        "1-click broadcast moderation",
        "API feeds for vMix, TriCaster, OBS",
        "Viewer avatar & handle display",
        "Zero expensive broadcast hardware",
      ],
      visualPreview: (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span className="text-[#38bdf8] font-bold">● TV Lower-Third Live Crawl</span>
            <span className="text-emerald-400 font-mono">60 FPS Output</span>
          </div>
          <div className="p-2 rounded-lg bg-[#0e162a] border border-[#00B2FF]/40 text-[11px]">
            <span className="font-bold text-amber-300">★ Brian K. [Top Fan #1]: </span>
            <span className="text-slate-200">&quot;Playing non-stop classics today!&quot;</span>
          </div>
        </div>
      ),
    },
    {
      title: "Channels, Brands & Artists",
      badge: "Sponsorship & Quizzes",
      icon: <Trophy className="w-5 h-5" />,
      description:
        "Turn passive viewers into brand champions. Run sponsored quizzes, live polls, fastest-answer trivia, and automate cash disbursements to winners.",
      features: [
        "Interactive cash challenges",
        "Automated Mobile Money payouts",
        "Sponsored hashtag polls",
        "Direct audience CRM directory",
      ],
      visualPreview: (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span className="text-amber-400 font-bold">🏆 Cash Trivia Winner</span>
            <span className="text-emerald-400 font-mono">Disbursed</span>
          </div>
          <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-[11px]">
            <div>
              <div className="font-bold text-white">Mary N. (Uganda)</div>
              <div className="text-[9px] text-emerald-300 font-mono">+UGX 50,000 via MTN MoMo</div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
      ),
    },
    {
      title: "Audiences & Top Fans",
      badge: "Flutter Mobile App",
      icon: <Smartphone className="w-5 h-5" />,
      description:
        "Frictionless OTP mobile experience. Listeners follow favorite stations, hear their messages read on air, earn weekly Top Fan ranks, and post 24h stories.",
      features: [
        "Zero-password phone login",
        "Weekly Top Fan badges (Ranks 1–5)",
        "24-hour video & photo stories",
        "Carrier billing & mobile money top-ups",
      ],
      visualPreview: (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span className="text-[#38bdf8] font-bold">★ Verified Listener Rank</span>
            <span className="text-amber-300 font-mono">Rank #1 Fan</span>
          </div>
          <div className="p-2 rounded-lg bg-[#141d33] border border-white/10 flex items-center gap-2 text-[11px]">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 text-black font-black flex items-center justify-center text-[10px]">
              ★
            </div>
            <div className="min-w-0">
              <div className="font-bold text-white truncate">Brian K. (Nairobi)</div>
              <div className="text-[9px] text-slate-400">42 Messages Sent • 18 Credits Left</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // FAQ Data with Categories
  const faqItems = [
    {
      category: "station",
      question: "Do radio or TV stations need to install dedicated hardware?",
      answer:
        "No. StudioPass is 100% cloud-based. Station admins and presenters simply log in through any modern web browser. For TV stations, your existing playout software (vMix, TriCaster, CasparCG, OBS, or HTML overlays) pulls approved messages via our low-latency Station Playout API.",
    },
    {
      category: "tv",
      question: "How does the TV playout ticker integration work?",
      answer:
        "When your station admin or control-room operator approves a viewer's message in the StudioPass dashboard, it is assigned the 'sent_to_output' status. Your broadcast character generator or browser source queries your private Station API Key and renders the message as an animated lower-third overlay in real time.",
    },
    {
      category: "station",
      question: "How does live in-app audio studio calling work?",
      answer:
        "The StudioPass mobile app uses high-definition, low-latency audio streaming. When a listener taps 'Call Studio', they enter the station's live queue. The presenter sees the caller's name, city, and wait time, and can bring them live on-air with one click.",
    },
    {
      category: "billing",
      question: "How do listeners pay for message packs and participation?",
      answer:
        "StudioPass integrates directly with leading East and Central African telecom billing channels, including MTN Mobile Money, Airtel Money, and Safaricom M-Pesa. Listeners purchase credit packs in their local currency with zero friction.",
    },
    {
      category: "station",
      question: "How does partner onboarding work?",
      answer:
        "Simply fill out our 8-field partner application form. Our station onboarding team reviews your broadcast frequencies or digital channels, sets up your studio console, generates your API keys, and trains your presenter team within 48 hours.",
    },
  ];

  // Filtered Countries
  const filteredCountries = OPERATING_COUNTRIES.filter((c) => {
    if (countryFilter === "all") return true;
    if (countryFilter === "east") return ["KE", "UG", "TZ"].includes(c.code);
    if (countryFilter === "west") return ["NG", "GH"].includes(c.code);
    if (countryFilter === "other") return ["ZA", "EG"].includes(c.code);
    return true;
  });

  // Filtered FAQ
  const filteredFaq = faqItems.filter((item) => {
    if (faqFilter === "all") return true;
    return item.category === faqFilter;
  });

  return (
    <div className="min-h-screen bg-[#080c15] text-slate-200 overflow-x-hidden selection:bg-[#1e60f2] selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION (With Increased Breathing Room & Soft Beam Fade)       */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-36 overflow-hidden">
        <BackgroundBeamsWithCollision className="pb-12 pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            {/* Live Broadcast Badge with Glow Aura */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative"
            >
              <div className="absolute inset-0 bg-[#38bdf8]/20 rounded-full blur-md -z-10" />
              <LiveBadge
                text="LIVE ON AIR"
                subtext="Powering 24+ Radio & TV Stations"
              />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.1]"
            >
              Turn Broadcast Audiences into{" "}
              <span className="bg-gradient-to-r from-[#1e60f2] via-[#38bdf8] to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                Active, Monetized
              </span>{" "}
              Participants.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed"
            >
              The all-in-one engagement infrastructure for Radio, Television,
              and Digital Channels. Real-time presenter chat, live HD studio voice
              calls, automated TV playout tickers, and mobile money revenue.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="glow"
                size="lg"
                onClick={() => setOnboardOpen(true)}
                className="w-full sm:w-auto text-base"
              >
                Onboard Your Station
                <ArrowRight className="w-5 h-5 ml-1.5" />
              </Button>

              <a href="#download" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base">
                  <Download className="w-4 h-4 mr-2 text-[#38bdf8]" />
                  Download Mobile App
                </Button>
              </a>
            </motion.div>

            {/* Key Value Proof Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-400 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                <span>Zero hardware required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                <span>Sub-second WebSockets delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                <span>Direct Mobile Money billing</span>
              </div>
            </motion.div>
          </div>
        </BackgroundBeamsWithCollision>

        {/* Hero Device Composition: Safari Studio Console + iPhone Fan App */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 relative z-20">
          <div className="relative rounded-3xl p-3 sm:p-6 bg-gradient-to-b from-white/10 to-transparent border border-white/15 backdrop-blur-md shadow-2xl shadow-black">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Safari Desktop Frame: Live Station Moderation Console */}
              <div className="lg:col-span-8">
                <Safari url="studio.studiopass.app/station/capital-fm">
                  <div className="flex bg-[#060b17] text-left min-h-[460px] text-xs font-sans select-none overflow-hidden">
                    {/* Left Sidebar */}
                    <div className="w-40 border-r border-white/10 bg-[#09101f] p-3.5 hidden sm:flex flex-col justify-between shrink-0">
                      <div className="space-y-4">
                        {/* Sidebar Brand */}
                        <div className="flex items-center gap-2 px-1">
                          <div className="h-6 w-6 rounded-lg bg-[#00B2FF] flex items-center justify-center font-black text-white text-xs shadow-md shadow-[#00B2FF]/30">
                            SP
                          </div>
                          <span className="font-bold text-white text-sm tracking-tight">StudioPass</span>
                        </div>

                        {/* Station badge */}
                        <div className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/5 space-y-0.5">
                          <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Station Console</div>
                          <div className="text-[11px] font-bold text-white truncate">Capital FM 98.4</div>
                        </div>

                        {/* Nav Items */}
                        <nav className="space-y-1">
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#00B2FF]/20 text-[#38bdf8] font-semibold border border-[#00B2FF]/30">
                            <Radio className="w-3.5 h-3.5" />
                            <span>Dashboard</span>
                          </div>
                          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>Messages</span>
                            </div>
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#00B2FF]/30 text-[#38bdf8] font-bold">1.4k</span>
                          </div>
                          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors">
                            <div className="flex items-center gap-2">
                              <PhoneCall className="w-3.5 h-3.5" />
                              <span>Live Calls</span>
                            </div>
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">1 Live</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors">
                            <Tv className="w-3.5 h-3.5" />
                            <span>TV Ticker API</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors">
                            <Wallet className="w-3.5 h-3.5" />
                            <span>Mobile Money</span>
                          </div>
                        </nav>
                      </div>

                      {/* Presenter Profile Status */}
                      <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#00B2FF] to-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
                          DM
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold text-white truncate">DJ Mike</div>
                          <div className="text-[9px] text-emerald-400 font-mono">● Host On-Air</div>
                        </div>
                      </div>
                    </div>

                    {/* Main Console Workspace */}
                    <div className="flex-1 p-3.5 sm:p-5 flex flex-col justify-between space-y-3 overflow-hidden">
                      {/* Top Broadcast Master Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-extrabold tracking-wide animate-pulse">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                            ON AIR LIVE
                          </span>
                          <span className="font-bold text-white text-xs sm:text-sm">
                            The Morning Breakfast Club
                          </span>
                          <span className="hidden md:inline text-slate-500 text-[11px]">|</span>
                          <span className="hidden md:inline text-slate-400 text-[11px]">06:00 – 10:00 EAT</span>
                        </div>

                        {/* Digital Studio Clock */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/40 border border-white/10 text-emerald-400 font-mono text-[11px]">
                            <Clock className="w-3 h-3" />
                            <span>14:32:08 UTC</span>
                          </div>
                          <AudioVisualizer barCount={8} color="#00B2FF" />
                        </div>
                      </div>

                      {/* Real-time KPI summary */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-[10px] text-slate-400">Live On-Air Call</div>
                          <div className="text-sm sm:text-base font-extrabold text-emerald-400 flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                            1 Active
                          </div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-[10px] text-slate-400">Caller Queue</div>
                          <div className="text-sm sm:text-base font-extrabold text-amber-400">3 Waiting</div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-[10px] text-slate-400">Messages Today</div>
                          <div className="text-sm sm:text-base font-extrabold text-[#38bdf8]">1,420</div>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-[10px] text-slate-400">Collections (MoMo)</div>
                          <div className="text-sm sm:text-base font-extrabold text-white">14.45M UGX</div>
                        </div>
                      </div>

                      {/* Dual Operational Views: Studio Voice Caller Queue + Live Audience Stream */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1">
                        {/* Live Studio Caller Queue (Col 1-5) */}
                        <div className="md:col-span-5 p-3 rounded-xl bg-[#0a1222] border border-white/10 flex flex-col justify-between space-y-2">
                          <div>
                            <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[11px] font-semibold text-slate-300">
                              <span className="flex items-center gap-1 text-[#38bdf8]">
                                <PhoneCall className="w-3 h-3" />
                                HD Studio Voice Queue
                              </span>
                              <span className="text-[10px] text-emerald-400 font-mono">0.08s Latency</span>
                            </div>

                            {/* Active Caller Card */}
                            <div className="mt-2 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-white flex items-center gap-1">
                                  <span>Kevin O.</span>
                                  <span className="text-[9px] text-emerald-400 font-normal">(Nairobi)</span>
                                </span>
                                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
                                  02:45 Live
                                </span>
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono">+254 712***89</div>
                              <div className="flex items-center justify-between pt-1">
                                <AudioVisualizer barCount={10} color="#10b981" />
                                <button className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40 text-[10px] font-semibold hover:bg-red-500/30">
                                  Cut Call
                                </button>
                              </div>
                            </div>

                            {/* Waiting in Queue */}
                            <div className="mt-2 p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-[11px]">
                              <div>
                                <div className="font-semibold text-slate-200">Mary N. (Kampala)</div>
                                <div className="text-[9px] text-amber-400 font-mono">Wait: 1m 15s</div>
                              </div>
                              <button className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold hover:bg-emerald-500">
                                Put Live
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Audience Messages & TV Playout Ticker (Col 6-12) */}
                        <div className="md:col-span-7 p-3 rounded-xl bg-[#0a1222] border border-white/10 flex flex-col justify-between space-y-2">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[11px] font-semibold text-slate-300">
                              <span>Live Messages Stream</span>
                              <span className="text-[10px] text-[#38bdf8]">Auto Playout ON</span>
                            </div>

                            {/* Message 1: Approved on Ticker */}
                            <div className="p-2.5 rounded-lg bg-[#121c32] border border-[#00B2FF]/40 space-y-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-white text-[11px]">Brian K. (Nairobi)</span>
                                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">★ Top Fan #1</span>
                                </div>
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                  ✓ On TV Ticker
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-300">&quot;Playing non-stop classics today! Shoutout to the Westlands crew!&quot;</p>
                            </div>

                            {/* Message 2: Pending Playout */}
                            <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between gap-2">
                              <div className="min-w-0">
                                <div className="font-semibold text-slate-200 text-[11px] truncate">Amina M. (Mombasa)</div>
                                <p className="text-[10px] text-slate-400 truncate">&quot;Please play Sauti Sol - Suzanna for my sister!&quot;</p>
                              </div>
                              <button className="shrink-0 px-2 py-1 rounded bg-[#00B2FF] text-white text-[10px] font-bold hover:bg-[#38bdf8]">
                                Send Playout
                              </button>
                            </div>
                          </div>

                          {/* Presenter Quick Reply */}
                          <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                            <input
                              type="text"
                              readOnly
                              value="Big shoutout coming up for Westlands! 🎵"
                              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-[10px] text-slate-300 focus:outline-none"
                            />
                            <button className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold shrink-0">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Safari>
              </div>

              {/* iPhone 15 Pro Frame: Listener App Live Chat & Explore */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                {/* View Switcher Toggle */}
                <div className="mb-3 flex items-center gap-1.5 p-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold">
                  <button
                    onClick={() => setMobileMockupView("chat")}
                    className={`px-3 py-1 rounded-full transition-all ${
                      mobileMockupView === "chat"
                        ? "bg-[#00B2FF] text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Live Chat & Call
                  </button>
                  <button
                    onClick={() => setMobileMockupView("explore")}
                    className={`px-3 py-1 rounded-full transition-all ${
                      mobileMockupView === "explore"
                        ? "bg-[#00B2FF] text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Stations Explore
                  </button>
                </div>

                <Iphone15Pro className="scale-95 sm:scale-100 shadow-2xl">
                  {mobileMockupView === "chat" ? (
                    /* ─── REAL FLUTTER CHAT & CALL VIEW ─── */
                    <div className="flex flex-col h-full justify-between text-left bg-[#0D0D0D] text-white select-none">
                      {/* Flutter Top App Bar */}
                      <div>
                        <div className="p-3 bg-[#121212] border-b border-[#2A2D3E] flex items-center justify-between">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-slate-400 text-xs">‹</span>
                            <div className="h-8 w-8 rounded-full bg-[#00B2FF] flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-sm">
                              CAP
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1">
                                <span className="font-bold text-white text-xs truncate">Capital FM 98.4</span>
                                <span className="text-[#00B2FF] text-[11px]">✓</span>
                              </div>
                              <span className="text-[9px] text-slate-400 block truncate">Host: DJ Mike</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button className="px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center gap-1 text-emerald-400 hover:scale-105 transition-transform text-[10px] font-semibold">
                              <PhoneCall className="w-3 h-3" />
                              <span>Call Studio</span>
                            </button>
                          </div>
                        </div>

                        {/* Flutter Show Status Banner */}
                        <div className="px-3 py-1.5 bg-[#00B2FF]/15 border-b border-[#00B2FF]/20 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#00B2FF] animate-pulse" />
                          <span className="text-[10px] font-semibold text-[#38bdf8] truncate">
                            LIVE — The Morning Breakfast Club (1h 45m left)
                          </span>
                        </div>

                        {/* Real Chat Message Bubbles */}
                        <div className="p-3 space-y-2 text-xs">
                          {/* Station Presenter Bubble */}
                          <div className="bg-[#181818] p-2.5 rounded-2xl rounded-tl-none border border-[#2A2D3E] text-slate-200 space-y-1">
                            <div className="flex items-center gap-1 text-[10px] text-[#00B2FF] font-bold">
                              <span>DJ Mike (Presenter)</span>
                              <span className="text-[9px] px-1 py-0.2 rounded bg-[#00B2FF]/20 text-[#00B2FF]">Host</span>
                            </div>
                            <p className="text-[11px] leading-relaxed">Welcome to Friday Breakfast! Who wants the next shoutout on air?</p>
                          </div>

                          {/* Listener User Bubble */}
                          <div className="bg-[#00B2FF]/25 p-2.5 rounded-2xl rounded-tr-none border border-[#00B2FF]/40 text-white ml-auto max-w-[88%] space-y-1">
                            <div className="text-[10px] text-amber-300 font-bold flex items-center justify-between">
                              <span>You</span>
                              <span className="text-[9px] text-amber-300">★ Rank 1</span>
                            </div>
                            <p className="text-[11px] leading-relaxed">Locked in from Westlands! Playing the hottest mixes today 🔥</p>
                          </div>

                          {/* Station Presenter Followup */}
                          <div className="bg-[#181818] p-2 rounded-2xl rounded-tl-none border border-[#2A2D3E] text-slate-200 space-y-0.5">
                            <div className="flex items-center gap-1 text-[10px] text-[#00B2FF] font-bold">
                              <span>DJ Mike</span>
                              <span className="text-[8px] text-slate-400">just now</span>
                            </div>
                            <p className="text-[11px] leading-relaxed">Shoutout locked in! Tap Call Studio above to go live on-air 🎙️</p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Controls */}
                      <div>
                        {/* Balance Bar */}
                        <div className="px-3 py-1 bg-[#121212] border-t border-[#2A2D3E] flex items-center justify-between text-[10px]">
                          <span className="text-slate-400 flex items-center gap-1">
                            <Wallet className="w-3 h-3 text-slate-400" />
                            Credit Balance:
                          </span>
                          <span className="text-[#00B2FF] font-bold font-mono">18 Credits Available</span>
                        </div>

                        {/* Real ChatInputBar */}
                        <div className="p-2 bg-[#121212] border-t border-[#2A2D3E] flex items-center gap-2">
                          <div className="flex-1 bg-[#1c1f2e] border border-[#2A2D3E] rounded-full px-3 py-1.5 flex items-center justify-between text-xs text-slate-400">
                            <span className="text-[10px] truncate text-slate-400">Message studio presenter...</span>
                          </div>
                          <button className="h-7 w-7 rounded-full bg-[#00B2FF] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#00B2FF]/40 hover:scale-105 transition-transform">
                            <Send className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Flutter 5-Tab Bottom Navigation Bar */}
                        <div className="p-2 bg-[#0D0D0D] border-t border-[#2A2D3E] grid grid-cols-5 text-center text-[9px]">
                          <div className="flex flex-col items-center gap-0.5 text-slate-500">
                            <Radio className="w-3.5 h-3.5" />
                            <span>Home</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5 text-[#00B2FF] font-bold">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Chat</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5 text-slate-500">
                            <Flame className="w-3.5 h-3.5" />
                            <span>Status</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5 text-slate-500">
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>Call</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5 text-slate-500">
                            <Users className="w-3.5 h-3.5" />
                            <span>More</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* ─── REAL FLUTTER HOME / EXPLORE VIEW ─── */
                    <div className="flex flex-col h-full justify-between text-left bg-[#0D0D0D] text-white select-none">
                      <div>
                        {/* Cyan Header with Greeting + Search */}
                        <div className="bg-[#00B2FF] p-3.5 rounded-b-2xl shadow-lg space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-7 w-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-xs">
                                B
                              </div>
                              <span className="font-bold text-white text-xs">Hi, Brian</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="px-2 py-0.5 rounded-md bg-white/20 text-white text-[10px] font-semibold flex items-center gap-1">
                                <Wallet className="w-3 h-3" />
                                <span>18 Credits</span>
                              </div>
                              <div className="h-6 w-6 rounded-md bg-white/20 flex items-center justify-center text-white text-[11px]">
                                <QrCode className="w-3.5 h-3.5" />
                              </div>
                            </div>
                          </div>

                          {/* Embedded Search Bar */}
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#43B7F1] text-white text-[11px]">
                            <Search className="w-3.5 h-3.5 text-white/80" />
                            <span className="text-white/80">Search radio, TV, presenter...</span>
                          </div>
                        </div>

                        {/* Category Pills */}
                        <div className="p-3 space-y-2.5">
                          <div className="flex items-center gap-2 text-[10px]">
                            <span className="px-2.5 py-1 rounded-full bg-[#00B2FF] text-white font-bold">
                              📻 Radios
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                              📺 TVs
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                              ⚡ Channels
                            </span>
                          </div>

                          {/* Station Cards */}
                          <div className="space-y-2">
                            {/* Station 1 */}
                            <div className="p-2.5 rounded-xl bg-[#121212] border border-[#2A2D3E] flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="h-9 w-9 rounded-lg bg-[#00B2FF]/20 border border-[#00B2FF]/30 flex items-center justify-center text-[#00B2FF] font-bold text-xs shrink-0">
                                  CAP
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1">
                                    <span className="font-bold text-white text-xs truncate">Capital FM</span>
                                    <span className="text-[#00B2FF] text-[10px]">✓</span>
                                  </div>
                                  <span className="text-[9px] text-amber-400 font-semibold block">★ Trivia Active</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <button className="px-2 py-1 rounded-lg bg-[#00B2FF] text-white text-[10px] font-bold">
                                  Message
                                </button>
                              </div>
                            </div>

                            {/* Station 2 */}
                            <div className="p-2.5 rounded-xl bg-[#121212] border border-[#2A2D3E] flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="h-9 w-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0">
                                  CIT
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1">
                                    <span className="font-bold text-white text-xs truncate">Citizen TV</span>
                                    <span className="text-[#00B2FF] text-[10px]">✓</span>
                                  </div>
                                  <span className="text-[9px] text-emerald-400 block">● Live On-Air</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <button className="px-2 py-1 rounded-lg bg-[#00B2FF] text-white text-[10px] font-bold">
                                  Message
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Flutter 5-Tab Bottom Navigation Bar */}
                      <div className="p-2 bg-[#0D0D0D] border-t border-[#2A2D3E] grid grid-cols-5 text-center text-[9px]">
                        <div className="flex flex-col items-center gap-0.5 text-[#00B2FF] font-bold">
                          <Radio className="w-3.5 h-3.5" />
                          <span>Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 text-slate-500">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Chat</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 text-slate-500">
                          <Flame className="w-3.5 h-3.5" />
                          <span>Status</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 text-slate-500">
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 text-slate-500">
                          <Users className="w-3.5 h-3.5" />
                          <span>More</span>
                        </div>
                      </div>
                    </div>
                  )}
                </Iphone15Pro>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 2. BROADCASTER & TELECOM SOCIAL PROOF MARQUEE (With Glow Accents)       */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-white/10 bg-[#060911] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
            Powering Live Audience Engagement for Leading Broadcasters & Telecoms Across Africa
          </p>
        </div>

        {/* Dual Marquee Rails */}
        <div className="space-y-3.5">
          <Marquee pauseOnHover className="[--duration:32s]">
            {[
              { name: "Capital FM 98.4", type: "radio", badge: "Radio", color: "text-[#38bdf8] border-[#38bdf8]/30" },
              { name: "Citizen TV Live", type: "tv", badge: "TV Network", color: "text-purple-400 border-purple-500/30" },
              { name: "Radio City 97FM", type: "radio", badge: "Radio", color: "text-[#38bdf8] border-[#38bdf8]/30" },
              { name: "NTV Broadcast", type: "tv", badge: "TV Network", color: "text-purple-400 border-purple-500/30" },
              { name: "Milele FM", type: "radio", badge: "Radio", color: "text-[#38bdf8] border-[#38bdf8]/30" },
              { name: "NBS Television", type: "tv", badge: "TV Network", color: "text-purple-400 border-purple-500/30" },
              { name: "Galaxy FM 100.2", type: "radio", badge: "Radio", color: "text-[#38bdf8] border-[#38bdf8]/30" },
              { name: "Spark TV Live", type: "tv", badge: "TV Network", color: "text-purple-400 border-purple-500/30" },
              { name: "Classic 105", type: "radio", badge: "Radio", color: "text-[#38bdf8] border-[#38bdf8]/30" },
              { name: "KTN News Prime", type: "tv", badge: "TV Network", color: "text-purple-400 border-purple-500/30" },
            ].map((station, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-2xl bg-[#0c1424] border border-white/10 text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2.5 hover:border-[#38bdf8]/60 hover:text-white transition-all shadow-md shadow-black/50"
              >
                {station.type === "radio" ? (
                  <Radio className="w-4 h-4 text-[#38bdf8]" />
                ) : (
                  <Tv className="w-4 h-4 text-purple-400" />
                )}
                <span>{station.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full bg-white/5 border font-mono ${station.color}`}>
                  {station.badge}
                </span>
              </div>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:36s]">
            {[
              { name: "MTN Mobile Money", type: "telco", icon: "💳", color: "text-yellow-400 border-yellow-500/30" },
              { name: "Safaricom M-Pesa", type: "telco", icon: "📱", color: "text-emerald-400 border-emerald-500/30" },
              { name: "Airtel Money", type: "telco", icon: "💳", color: "text-red-400 border-red-500/30" },
              { name: "vMix Playout Engine", type: "playout", icon: "⚡", color: "text-blue-400 border-blue-500/30" },
              { name: "NewTek TriCaster", type: "playout", icon: "⚡", color: "text-blue-400 border-blue-500/30" },
              { name: "CasparCG Graphics", type: "playout", icon: "⚡", color: "text-blue-400 border-blue-500/30" },
              { name: "OBS Studio Playout", type: "playout", icon: "⚡", color: "text-blue-400 border-blue-500/30" },
              { name: "Orange Money", type: "telco", icon: "💳", color: "text-orange-400 border-orange-500/30" },
              { name: "Agora HD Studio Audio", type: "audio", icon: "🎙️", color: "text-cyan-400 border-cyan-500/30" },
            ].map((partner, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-2xl bg-[#090f1d] border border-white/10 text-slate-300 font-semibold text-xs sm:text-sm flex items-center gap-2 hover:border-[#1e60f2] hover:text-white transition-all shadow-md shadow-black/50"
              >
                <span>{partner.icon}</span>
                <span>{partner.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full bg-white/5 border font-mono ${partner.color}`}>
                  Verified
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 3. THE 4 BROADCAST SCENARIOS (Interactive Showcase with Live Previews)  */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="solutions" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] px-3 py-1 rounded-full bg-[#1e60f2]/15 border border-[#1e60f2]/30 inline-block mb-3">
            Multi-Purpose Platform
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Every Broadcast Scenario
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you run a national radio frequency, a 24-hour TV channel, or
            a digital brand community, StudioPass transforms passive audiences
            into loyal, paying superfans.
          </p>
        </div>

        {/* Hover Effect Component with Rich Visual Previews */}
        <HoverEffect items={scenarioItems} />
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 4. PLATFORM BENTO GRID (Core Technical Features & Live APIs)           */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 bg-[#060a14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] px-3 py-1 rounded-full bg-[#1e60f2]/15 border border-[#1e60f2]/30 inline-block mb-3">
              Platform Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Grade Broadcasting Engine
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Everything media houses need to moderate, broadcast, and monetize
              at scale with sub-second performance.
            </p>
          </div>

          <BentoGrid>
            {/* 1. Live Studio Moderation Queue (Large) */}
            <BentoCard
              className="md:col-span-2"
              title="Real-Time Moderation Console"
              badge="WebSockets 60fps"
              icon={<Radio className="w-5 h-5" />}
              description="Dedicated control room workflow. Incoming audience statements, song requests, and calls filter by active show schedule with instant canned quick replies."
              header={
                <div className="w-full h-full p-4 bg-[#0a1120] flex flex-col justify-between text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-semibold text-slate-300">Live Show Queue (WebSockets Active)</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[10px]">0.08s Latency</span>
                  </div>
                  <div className="space-y-2 py-2">
                    <div className="p-2.5 rounded-lg bg-white/5 flex items-center justify-between text-slate-200 border border-white/5">
                      <div className="min-w-0 pr-2">
                        <span className="font-bold text-white">Brian K. (Nairobi): </span>
                        <span className="text-slate-300">&quot;Playing the hottest mixes!&quot;</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold shrink-0 border border-emerald-500/30">
                        Approved ✓
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 flex items-center justify-between text-slate-200 border border-white/5">
                      <div className="min-w-0 pr-2">
                        <span className="font-bold text-white">Sarah W. (Mombasa): </span>
                        <span className="text-slate-300">&quot;Can I vote for Track #2?&quot;</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e60f2]/30 text-[#38bdf8] font-bold shrink-0 border border-[#1e60f2]/40">
                        In Review ⚡
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                      Profanity Shield Active
                    </span>
                    <span className="text-[#38bdf8] font-semibold">Auto-Archiving ON</span>
                  </div>
                </div>
              }
            />

            {/* 2. HD Studio Calling */}
            <BentoCard
              title="HD Studio Voice Calling"
              badge="Agora RTC"
              icon={<PhoneCall className="w-5 h-5" />}
              description="Listeners dial in directly through the mobile app. Presenters manage live caller queues with zero telephone lines or hardware patchbays."
              header={
                <div className="w-full h-full p-4 bg-[#0a1120] flex flex-col items-center justify-center text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <PhoneCall className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-xs text-slate-200 font-semibold">
                    <span>Caller On-Air: </span>
                    <span className="text-emerald-400 font-mono">+254 712***89</span>
                  </div>
                  <AudioVisualizer barCount={16} color="#10b981" />
                </div>
              }
            />

            {/* 3. TV Playout API with Interactive Copy */}
            <BentoCard
              title="TV Playout & Ticker API"
              badge="vMix & TriCaster"
              icon={<Tv className="w-5 h-5" />}
              description="Instant JSON/XML/HTML overlay outputs for TV control rooms. Approved comments stream directly into character generators and lower-third graphics."
              header={
                <div className="w-full h-full p-3.5 bg-[#070d18] rounded-xl flex flex-col justify-between font-mono text-[11px] text-slate-300 relative border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[10px]">
                    <span className="text-[#38bdf8]">GET /api/v1/station/ticker</span>
                    <button
                      onClick={handleCopyApi}
                      className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-slate-300 text-[9px] transition-colors"
                    >
                      {copiedApi ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="py-1 text-[10px] leading-relaxed">
                    <div className="text-[#38bdf8]">{"{"}</div>
                    <div className="pl-3 text-slate-300">
                      <span className="text-cyan-300">&quot;status&quot;:</span> <span className="text-emerald-400">&quot;sent_to_output&quot;,</span>
                    </div>
                    <div className="pl-3 text-slate-300">
                      <span className="text-cyan-300">&quot;author&quot;:</span> <span className="text-amber-300">&quot;David M.&quot;,</span>
                    </div>
                    <div className="pl-3 text-slate-300">
                      <span className="text-cyan-300">&quot;message&quot;:</span> <span className="text-slate-200">&quot;Watching live from Kampala!&quot;</span>
                    </div>
                    <div className="text-[#38bdf8]">{"}"}</div>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-emerald-400 pt-1 border-t border-white/5">
                    <span>● Status: 200 OK</span>
                    <span>14ms Latency</span>
                  </div>
                </div>
              }
            />

            {/* 4. Automated Mobile Money Payouts */}
            <BentoCard
              className="md:col-span-2"
              title="Automated Mobile Money Disbursements"
              badge="MTN, Airtel & M-Pesa"
              icon={<Wallet className="w-5 h-5" />}
              description="Reward audience participation seamlessly. Winners of live station quizzes, fastest-finger contests, and brand challenges receive real cash directly to their mobile money wallets."
              header={
                <div className="w-full h-full p-4 bg-[#0a1120] flex flex-col justify-between text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-semibold text-slate-300">Challenge Prize Engine</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 fill-emerald-400" />
                      Instant Payout
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-400">Winner (Trivia Quiz)</span>
                        <span className="text-amber-400 font-bold">1st Place</span>
                      </div>
                      <div className="font-bold text-white">Mary N. (Uganda)</div>
                      <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        UGX 50,000 Disbursed via MTN
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-400">Fastest Answer Challenge</span>
                        <span className="text-amber-400 font-bold">0.8s Record</span>
                      </div>
                      <div className="font-bold text-white">James K. (Kenya)</div>
                      <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        KES 2,500 Disbursed via M-Pesa
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 5. INTERACTIVE LIVE SIMULATOR: FROM FAN APP TO TV TICKER                */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] px-3 py-1 rounded-full bg-[#1e60f2]/15 border border-[#1e60f2]/30 inline-block mb-3">
            Interactive Product Demo
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See It In Action
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Type a message below (or tap a quick preset) and test how StudioPass
            delivers audience comments from a fan&apos;s phone directly onto a live TV broadcast screen.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl bg-[#0c1424] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Animated Connecting Beam Visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left Box: Simulated Listener Smartphone Input */}
            <div className="space-y-4 p-5 sm:p-6 rounded-2xl bg-[#080d19] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#38bdf8]" />
                  <span className="font-bold text-white text-sm">
                    Listener Smartphone App
                  </span>
                </div>
                <span className="text-xs text-slate-400">Station: Capital TV</span>
              </div>

              {/* Quick Preset Shoutouts */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1.5">
                  Tap a quick shoutout template:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {presetShoutouts.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActivePreset(idx);
                        handleSimSend(preset);
                      }}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left truncate max-w-full ${
                        activePreset === idx
                          ? "bg-[#00B2FF]/20 border-[#00B2FF] text-[#38bdf8] font-semibold"
                          : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Or customize your message:
                </label>
                <textarea
                  rows={3}
                  value={simMessage}
                  onChange={(e) => {
                    setSimMessage(e.target.value);
                    setActivePreset(null);
                  }}
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-[#38bdf8] resize-none"
                  placeholder="Type a message to send to the TV studio..."
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Wallet className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Cost: 1 Message Credit
                </span>
                <Button
                  onClick={() => handleSimSend()}
                  variant="glow"
                  size="sm"
                  disabled={simStep === "sending"}
                >
                  {simStep === "sending" ? "Transmitting..." : "Send to Live Studio"}
                  <Send className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* Right Box: Simulated TV Broadcast Playout Screen */}
            <div className="space-y-3">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl flex flex-col justify-between p-4">
                {/* TV Broadcast Watermark & Live Bug */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500 animate-ping" />
                    <span className="px-2 py-0.5 rounded bg-red-600 font-extrabold text-white text-[11px] tracking-wider">
                      LIVE
                    </span>
                    <span className="text-xs font-bold text-slate-300">
                      Capital Television News & Music
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">1080p 60fps HD</div>
                </div>

                {/* TV Center Graphic Visual */}
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-white/5 border border-white/10 mb-2 shadow-inner">
                    <Tv className="w-8 h-8 text-[#38bdf8]" />
                  </div>
                  <p className="text-xs text-slate-400">
                    Live Broadcast Playout • Auto Moderation Active
                  </p>
                </div>

                {/* Lower Third Ticker Overlay */}
                <div className="relative rounded-xl bg-[#080d19]/90 border border-[#38bdf8]/40 p-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-[#1e60f2] text-[10px] font-bold text-white uppercase">
                        Audience Ticker
                      </span>
                      <span className="text-xs font-bold text-white">
                        Fan Shoutout (via StudioPass):
                      </span>
                    </div>
                    {simStep === "approved" && (
                      <span className="text-[10px] text-emerald-400 font-mono">● On-Air</span>
                    )}
                  </div>

                  {simStep === "sending" ? (
                    <div className="text-xs text-amber-400 animate-pulse flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                      Moderating message in station console (0.4s)...
                    </div>
                  ) : (
                    <motion.div
                      key={simMessage}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs sm:text-sm text-slate-100 font-medium truncate"
                    >
                      &quot;{simMessage}&quot;
                    </motion.div>
                  )}
                </div>
              </div>
              <p className="text-center text-xs text-slate-400">
                Connected via StudioPass Low-Latency Broadcast Output API Key
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 6. COUNTRIES WE OPERATE IN (With Interactive Regional Filter)           */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="countries" className="py-20 bg-[#060a14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] px-3 py-1 rounded-full bg-[#1e60f2]/15 border border-[#1e60f2]/30 inline-block mb-3">
              Regional Coverage
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Countries We Operate In
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Integrated with local mobile money networks and telecommunication
              providers across Africa.
            </p>
          </div>

          {/* Regional Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "all", label: "All Operating Markets" },
              { id: "east", label: "East Africa (KE, UG, TZ)" },
              { id: "west", label: "West Africa (NG, GH)" },
              { id: "other", label: "Southern & North Africa (ZA, EG)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCountryFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  countryFilter === tab.id
                    ? "bg-[#00B2FF] text-white shadow-lg shadow-[#00B2FF]/25"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0c1424] border border-white/10 hover:border-[#38bdf8]/60 transition-all space-y-3 group shadow-xl shadow-black/40 hover:shadow-[#1e60f2]/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{c.flag}</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    {c.phoneCode}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                  {c.name}
                </h3>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div>
                    <strong className="text-slate-300">Currency:</strong> {c.currency}
                  </div>
                  <div>
                    <strong className="text-slate-300">Billing Channels:</strong> {c.telcos}
                  </div>
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 7. APP DOWNLOAD SECTION (With Authentic QR & Official Store Badges)     */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="download" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#111a30] to-[#080d1a] border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e60f2]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] px-3 py-1 rounded-full bg-[#1e60f2]/20 border border-[#1e60f2]/30 inline-block">
                For Listeners & Viewers
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Connect Directly with Your Favorite Shows.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Download the StudioPass mobile app on Android and iOS. Send live
                shoutouts to on-air presenters, call into radio and TV studios
                with HD audio, join live polls, and win real cash rewards.
              </p>

              {/* Download Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Direct APK Download Button */}
                <a
                  href="/studiopass-release.apk"
                  download
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#1e60f2] hover:bg-[#184ebd] text-white font-bold text-sm shadow-xl shadow-[#1e60f2]/30 transition-all hover:scale-105 active:scale-95 border border-cyan-400/30"
                >
                  <Download className="w-5 h-5" />
                  Download APK for Android
                </a>

                {/* App Store / Google Play Badge Pill */}
                <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2 shadow-inner">
                  <Smartphone className="w-4 h-4 text-[#38bdf8]" />
                  <span>Google Play & App Store Available</span>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  4.9/5 Broadcaster Rating
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Secure APK
                </span>
                <span>✓ Zero Passwords (Instant OTP)</span>
              </div>
            </div>

            {/* High-Resolution QR Code Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#060912] border border-white/10 text-center space-y-4 shadow-2xl">
              <div className="p-4 bg-white rounded-2xl shadow-xl inline-block relative group">
                {/* High Density QR Code Matrix */}
                <div className="h-40 w-40 bg-slate-950 rounded-lg flex items-center justify-center p-2 relative overflow-hidden">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-white fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Corner Position Boxes */}
                    <rect x="5" y="5" width="28" height="28" fill="white" />
                    <rect x="9" y="9" width="20" height="20" fill="black" />
                    <rect x="13" y="13" width="12" height="12" fill="white" />

                    <rect x="67" y="5" width="28" height="28" fill="white" />
                    <rect x="71" y="9" width="20" height="20" fill="black" />
                    <rect x="75" y="13" width="12" height="12" fill="white" />

                    <rect x="5" y="67" width="28" height="28" fill="white" />
                    <rect x="9" y="71" width="20" height="20" fill="black" />
                    <rect x="13" y="75" width="12" height="12" fill="white" />

                    {/* QR Data Cells */}
                    <rect x="38" y="10" width="6" height="6" fill="white" />
                    <rect x="48" y="10" width="6" height="6" fill="white" />
                    <rect x="58" y="10" width="6" height="6" fill="white" />
                    <rect x="38" y="20" width="6" height="6" fill="white" />
                    <rect x="48" y="25" width="6" height="6" fill="white" />
                    <rect x="58" y="20" width="6" height="6" fill="white" />

                    <rect x="10" y="38" width="6" height="6" fill="white" />
                    <rect x="20" y="48" width="6" height="6" fill="white" />
                    <rect x="25" y="38" width="6" height="6" fill="white" />
                    <rect x="10" y="58" width="6" height="6" fill="white" />

                    <rect x="38" y="38" width="8" height="8" fill="white" />
                    <rect x="54" y="38" width="8" height="8" fill="white" />
                    <rect x="38" y="54" width="8" height="8" fill="white" />
                    <rect x="54" y="54" width="8" height="8" fill="white" />

                    <rect x="70" y="38" width="6" height="6" fill="white" />
                    <rect x="80" y="48" width="6" height="6" fill="white" />
                    <rect x="85" y="38" width="6" height="6" fill="white" />
                    <rect x="70" y="58" width="6" height="6" fill="white" />

                    <rect x="38" y="70" width="6" height="6" fill="white" />
                    <rect x="48" y="75" width="6" height="6" fill="white" />
                    <rect x="58" y="70" width="6" height="6" fill="white" />
                    <rect x="38" y="85" width="6" height="6" fill="white" />
                    <rect x="58" y="85" width="6" height="6" fill="white" />

                    <rect x="70" y="70" width="6" height="6" fill="white" />
                    <rect x="80" y="75" width="6" height="6" fill="white" />
                    <rect x="70" y="85" width="6" height="6" fill="white" />
                    <rect x="85" y="85" width="6" height="6" fill="white" />
                  </svg>

                  {/* Center Emblem */}
                  <div className="absolute inset-0 m-auto h-8 w-8 rounded-md bg-[#00B2FF] flex items-center justify-center font-bold text-white text-[10px] shadow-md">
                    SP
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">
                  Scan to Install on Smartphone
                </h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  Scan this QR code with your mobile camera to instantly initiate
                  the APK download.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 8. BROADCASTER FAQ ACCORDION (With Categorization Tabs)                 */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-[#060a14] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] px-3 py-1 rounded-full bg-[#1e60f2]/15 border border-[#1e60f2]/30 inline-block mb-3">
              Help & Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Clear answers for media station executives, program directors, and listeners.
            </p>
          </div>

          {/* FAQ Category Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "all", label: "All Questions" },
              { id: "station", label: "Radio & TV Station Setup" },
              { id: "tv", label: "TV Playout & API" },
              { id: "billing", label: "Mobile Money & Billing" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFaqFilter(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  faqFilter === cat.id
                    ? "bg-[#00B2FF] text-white shadow-md shadow-[#00B2FF]/20"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1424] border border-white/10 shadow-xl">
            <Accordion items={filteredFaq} />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 9. HIGH-CONVERSION CTA BANNER                                          */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-16 bg-gradient-to-r from-[#111e3b] via-[#0e172e] to-[#080d19] border border-[#38bdf8]/30 shadow-2xl text-center space-y-6 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1e60f2]/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] px-3 py-1 rounded-full bg-[#1e60f2]/20 border border-[#1e60f2]/30 inline-block">
            Ready to Broadcast?
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Bring Your Station into the Interactive Era.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Join forward-thinking radio and television broadcasters transforming
            audience engagement, loyalty, and on-air monetization today.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
              onClick={() => setOnboardOpen(true)}
              className="w-full sm:w-auto"
            >
              Start Station Onboarding
              <ArrowRight className="w-5 h-5 ml-1.5" />
            </Button>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Talk to Sales & Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Dynamic Scroll to Top */}
      <ScrollToTop />

      {/* Floating 1-Click WhatsApp Support Widget */}
      <WhatsAppFloat />

      {/* Onboard Application Modal */}
      <OnboardModal open={onboardOpen} onOpenChange={setOnboardOpen} />
    </div>
  );
}
