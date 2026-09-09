"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Radio,
  Tv,
  Users,
  ArrowRight,
  Download,
  MessageSquare,
  Mic,
  PhoneCall,
  Vote,
  Trophy,
  Heart,
  Megaphone,
  BarChart3,
  Star,
  Zap,
  CheckCircle2,
  QrCode,
  Send,
  Search,
  Headphones,
  Music,
  ShieldCheck,
  RadioTower,
  Smartphone,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { OnboardModal } from "@/components/onboard-modal";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { CampaignCarousel, Campaign } from "@/components/campaign-carousel";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { StackingCards, StackingCardItem } from "@/components/ui/stacking-card";
import { withBasePath } from "@/lib/utils";

export default function HomePage() {
  const [onboardOpen, setOnboardOpen] = useState(false);
  const [faqFilter, setFaqFilter] = useState<"all" | "listeners" | "stations" | "general">("all");

  const campaigns: Campaign[] = [
    {
      id: "artist-requests",
      title: "Artist Requests",
      subtitle: "Turn your support into airplay! Request tracks directly on radio stations.",
      image: withBasePath("/campaigns/artist-requests.png"),
      tag: "Music & Artists",
    },
    {
      id: "brand-engagement",
      title: "Brand Engagement",
      subtitle: "Engage with brands and services via live interactive chat. Chat. Discover. Connect.",
      image: withBasePath("/campaigns/brand-engagement.png"),
      tag: "Brand Activation",
    },
    {
      id: "get-app",
      title: "Download StudioPass",
      subtitle: "Your favorite radio and TV stations everywhere. Get the app today on iOS & Android.",
      image: withBasePath("/campaigns/get-app.png"),
      tag: "Mobile App",
    },
    {
      id: "shoutouts",
      title: "Shoutouts & Opinions",
      subtitle: "Got a birthday shoutout, message, or opinion? Reach your station instantly.",
      image: withBasePath("/campaigns/shoutouts.png"),
      tag: "Live On-Air",
    },
    {
      id: "coming-soon",
      title: "What's Next",
      subtitle: "Uganda something big is coming soon! Stay tuned and don't miss the new wave.",
      image: withBasePath("/campaigns/coming-soon.png"),
      tag: "Announcements",
    },
  ];

  const audienceItems: StackingCardItem[] = [
    {
      id: "listeners",
      tag: "For Listeners",
      title: "Send Shoutouts. Request Songs. Call Live On-Air.",
      description:
        "Connect directly with your favourite radio and TV stations. Wish someone a happy birthday, request a trending track, vote in polls, or join live on-air calls — all in one simple app.",
      features: [
        "Send messages & voice notes",
        "Request your favourite songs",
        "Send on-air shoutouts",
        "Call participating Radio/TV stations",
        "Vote in live polls & rankings",
        "Join fun audience challenges",
      ],
      ctaText: "Download StudioPass",
      ctaHref: "#download",
      accentColor: "#1e60f2",
      bgGradient: "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
      icon: <Headphones className="w-5 h-5" />,
      image: withBasePath("/images/audience-listeners.png"),
      imageAlt: "StudioPass Listener Mobile Experience",
      badgeText: "Live Listener Interaction",
    },
    {
      id: "artists",
      tag: "For Artists & Creators",
      title: "Turn Your Support into Airplay. Grow Your Fanbase.",
      description:
        "Give fans an instant, direct path to request your songs on radio, send shoutouts, and support your career. StudioPass bridges independent musicians with major broadcast platforms.",
      features: [
        "Connect with loyal fans directly",
        "Encourage on-air song requests",
        "Receive fan voice notes & love",
        "Run dedicated voting campaigns",
        "Promote releases across stations",
        "Track fan engagement data",
      ],
      ctaText: "Join as an Artist",
      ctaHref: "#partner",
      accentColor: "#0ea5e9",
      bgGradient: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
      icon: <Music className="w-5 h-5" />,
      image: withBasePath("/images/audience-artists.png"),
      imageAlt: "Artist Airplay and Fan Requests",
      badgeText: "Airplay Booster & Charting",
    },
    {
      id: "stations",
      tag: "For Radio & TV Stations",
      title: "Receive Messages. Manage Live Calls. Real-Time Playout.",
      description:
        "Give your on-air presenters and studio teams an all-in-one console to curate listener voice notes, moderate live audio callers, run instant polls, and display requests on studio screens.",
      features: [
        "Receive audience messages & voice notes",
        "Manage live on-air callers with screener",
        "Automated song request queue",
        "Live interactive polls & audience voting",
        "Comprehensive listener analytics",
        "Fast broadcast onboarding in 48 hours",
      ],
      ctaText: "Onboard Your Station",
      ctaHref: "#partner",
      accentColor: "#2563eb",
      bgGradient: "linear-gradient(135deg, #ffffff 0%, #eef2ff 100%)",
      icon: <Radio className="w-5 h-5" />,
      image: withBasePath("/images/audience-stations.png"),
      imageAlt: "Broadcaster Studio Console",
      badgeText: "Studio Console & Playout",
    },
    {
      id: "brands",
      tag: "For Brands & Advertisers",
      title: "Direct Audience Chat. Sponsored Polls. Real ROI.",
      description:
        "Transform one-way traditional broadcast radio/TV commercials into direct interactive chat channels, branded prize challenges, instant consumer feedback, and measurable conversions.",
      features: [
        "Direct 2-way consumer chat activations",
        "Sponsored broadcast polls & quizzes",
        "Product discovery & coupon drops",
        "Audience sentiment & feedback data",
        "Interactive cross-media campaigns",
        "Measurable customer acquisition",
      ],
      ctaText: "Partner with Us",
      ctaHref: "#partner",
      accentColor: "#f59e0b",
      bgGradient: "linear-gradient(135deg, #ffffff 0%, #fffbeb 50%, #f0f7ff 100%)",
      icon: <Megaphone className="w-5 h-5" />,
      image: withBasePath("/images/audience-brands.png"),
      imageAlt: "Brand Engagement and Analytics",
      badgeText: "Direct Consumer Engagement",
    },
  ];

  const faqItems = [
    {
      category: "listeners",
      question: "What is StudioPass?",
      answer:
        "StudioPass is an international media interaction platform that connects listeners and viewers directly with Radio Stations, TV Stations, Creators and Brands. You can send messages, voice notes, song requests, shoutouts, call live on-air, vote in polls, join challenges and more.",
    },
    {
      category: "listeners",
      question: "Is StudioPass free for listeners to download and use?",
      answer:
        "Yes! Downloading the StudioPass app is completely free on both Google Play and Apple App Store. Core features like following stations, sending requests, and participating in audience polls are completely free.",
    },
    {
      category: "stations",
      question: "How do radio and TV stations join StudioPass?",
      answer:
        "Stations can apply by clicking 'Become a Partner'. Our onboarding team provides your studio with access to the broadcaster dashboard, setup assistance, and presenter training within 48 hours.",
    },
    {
      category: "stations",
      question: "What equipment does our studio need to use StudioPass?",
      answer:
        "StudioPass is cloud-based and runs in any modern web browser on your studio laptops, iPads, or studio touchscreens. It integrates easily with your existing mixer console and audio playout software.",
    },
    {
      category: "general",
      question: "On which platforms is StudioPass available?",
      answer:
        "StudioPass is available for Android smartphones on the Google Play Store and for iPhone on the Apple App Store, with companion web access for partners and station presenters.",
    },
    {
      category: "listeners",
      question: "Can I request songs and send voice notes?",
      answer:
        "Yes! You can record a voice note or submit a song request directly to your favourite show. Studio presenters receive them instantly and can air them live during their broadcast.",
    },
    {
      category: "general",
      question: "How can brands and advertisers use StudioPass?",
      answer:
        "Brands can run sponsored interactive polls, quizzes, product shoutouts, customer feedback channels, and live promotions across partnering radio and television stations.",
    },
  ];

  const filteredFaq = faqItems.filter((item) => {
    if (faqFilter === "all") return true;
    return item.category === faqFilter;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-clip font-sans">
      {/* Global Navbar */}
      <Navbar />

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION                                                          */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
        {/* Soft atmospheric glow */}
        <div className="absolute top-0 right-0 w-[750px] h-[750px] bg-[#1e60f2]/6 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-sky-400/6 rounded-full blur-3xl -translate-x-1/4 pointer-events-none" />

        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left: Text Content (7 cols on large screens) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Category Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1e60f2] px-4 py-2 rounded-full bg-blue-50 border border-blue-200/70 shadow-xs inline-flex items-center gap-2">
                  <RadioTower className="w-3.5 h-3.5 text-[#1e60f2]" />
                  FOR LISTENERS, ARTISTS &amp; BRANDS
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[76px] font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                One Platform.{" "}
                <span className="text-[#1e60f2] block sm:inline">
                  More Ways to Connect.
                </span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed"
              >
                StudioPass brings listeners, artists and brands closer to the radio
                and TV stations they love. Real people. Real conversations. A more
                connected media community.
              </motion.p>

              {/* Primary CTAs + Store Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-1"
              >
                <Button
                  size="lg"
                  onClick={() => setOnboardOpen(true)}
                  className="bg-[#1e60f2] hover:bg-[#185adb] text-white font-bold text-base px-8 py-6 rounded-2xl shadow-xl shadow-[#1e60f2]/25 hover:shadow-2xl hover:shadow-[#1e60f2]/35 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Radio className="w-5 h-5" />
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>

                <a
                  href="#download"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-base font-bold border-2 border-slate-200 hover:border-slate-300 shadow-sm transition-all"
                >
                  <Download className="w-5 h-5 text-[#1e60f2]" />
                  Download App
                </a>
              </motion.div>

              {/* Store Buttons with reference doodle arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-2 flex flex-wrap items-center gap-3.5 text-xs text-slate-500 font-medium"
              >
                <span className="font-semibold text-slate-700">Available on:</span>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </a>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"/>
                    <path fill="#34A853" d="M14.5 11.29l2.302-2.302-10.938-6.33 8.636 8.632z"/>
                    <path fill="#EA4335" d="M5.864 21.342l8.635-8.635 2.302 2.302-10.937 6.333z"/>
                    <path fill="#FBBC05" d="M19.998 11.137l-2.302-1.33-2.535 2.193 2.535 2.193 2.302-1.33a1 1 0 000-1.726z"/>
                  </svg>
                  <span>Google Play</span>
                </a>
                <span className="hidden sm:inline-block text-[#1e60f2] font-bold italic ml-2">
                  Download the app today! ↗
                </span>
              </motion.div>
            </div>

            {/* Right: Visual Artwork with Artist & Phone Mockups (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              {/* Decorative organic background shape */}
              <div className="absolute w-[95%] h-[95%] rounded-3xl bg-gradient-to-tr from-[#1e60f2]/15 to-sky-400/25 blur-2xl -z-10" />

              <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-white">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={withBasePath("/images/hero-artist.jpg")}
                    alt="StudioPass Live Radio Studio"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Scribble Sticker Annotation */}
                  <div className="absolute top-4 right-4 bg-[#1e60f2] text-white px-3.5 py-1.5 rounded-xl font-extrabold text-xs shadow-lg rotate-3 border border-white/30 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-amber-300" />
                    Turn support into airplay!
                  </div>

                  {/* Floating App Preview Pill on bottom */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#1e60f2] flex items-center justify-center text-white font-bold text-sm shadow-md">
                        SP
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">StudioPass Mobile</p>
                        <p className="text-[11px] text-slate-500">Radio &bull; TV &bull; Everywhere</p>
                      </div>
                    </div>
                    <a
                      href="#download"
                      className="px-4 py-2 rounded-xl bg-[#1e60f2] hover:bg-[#185adb] text-white text-xs font-bold transition-colors"
                    >
                      Get App
                    </a>
                  </div>
                </div>
              </div>

              {/* Handwritten-style sticker pills */}
              <div className="hidden sm:block absolute -top-5 -left-6 text-[#1e60f2] text-xs font-black -rotate-6 bg-white/95 backdrop-blur-xs px-4 py-1.5 rounded-full shadow-lg border border-blue-100">
                Good Music Brings Us Closer ♡
              </div>
              <div className="hidden sm:block absolute -bottom-5 -right-4 text-slate-800 text-[11px] font-black uppercase tracking-wider rotate-3 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md border border-slate-200">
                REAL PEOPLE REAL AIRWAVES
              </div>
            </motion.div>
          </div>

          {/* Reference Image 3: 4-Feature Highlights Bar under Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-20 pt-10 border-t border-slate-200/80">
            {[
              {
                icon: <Radio className="w-5 h-5 text-[#1e60f2]" />,
                title: "Radio & TV",
                desc: "Real conversations everywhere",
              },
              {
                icon: <Users className="w-5 h-5 text-[#1e60f2]" />,
                title: "Stronger Communities",
                desc: "Fans. Artists. Brands. Together.",
              },
              {
                icon: <BarChart3 className="w-5 h-5 text-[#1e60f2]" />,
                title: "Meaningful Engagement",
                desc: "More than just the airwaves",
              },
              {
                icon: <Heart className="w-5 h-5 text-[#1e60f2]" />,
                title: "Real People. Real Impact.",
                desc: "A more connected tomorrow",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-[#1e60f2]/40 hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-xl bg-blue-50 shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* AUDIENCE SECTIONS WITH STACKING CARDS                                  */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="features" className="pt-20 sm:pt-28 pb-6 sm:pb-8 bg-[#f8faff] relative">
        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e60f2] px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 inline-block mb-3.5">
              One Platform &bull; All Roles
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Real Engagement. Built for Everyone.
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you&apos;re a fan, an artist, a radio or TV station, or a forward-thinking brand —
              StudioPass delivers tailored tools for meaningful interaction.
            </p>
          </div>

          {/* Animated Stacking Cards */}
          <StackingCards items={audienceItems} />
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* HOW IT WORKS + BROADCASTER CONSOLE SHOWCASE                           */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="about" className="pt-14 sm:pt-18 pb-24 sm:pb-32 bg-white overflow-hidden">
        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e60f2] px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 inline-block mb-3.5">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              From Fans to Airwaves.{" "}
              <span className="text-[#1e60f2]">It&apos;s That Simple.</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              StudioPass makes it easy for fans to connect with their favourite
              stations, presenters, and brands in just a few taps. Real people. Real messages. Real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left 4 Steps (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {[
                {
                  step: 1,
                  title: "Fan opens the app",
                  desc: "Fans download StudioPass and choose their favourite station, show or brand channel.",
                },
                {
                  step: 2,
                  title: "Sends request or shoutout",
                  desc: "They submit a song request, shoutout, question or message in seconds.",
                },
                {
                  step: 3,
                  title: "Presenter receives it live",
                  desc: "Requests appear in real-time on the StudioPass dashboard for broadcasters.",
                },
                {
                  step: 4,
                  title: "Reaches on-air airwaves",
                  desc: "Selected messages go live on-air, on social, or through brand activations.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-[#1e60f2]/40 hover:bg-blue-50/30 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#1e60f2] text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-md shadow-[#1e60f2]/20">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-2 text-center sm:text-left">
                <span className="text-[#1e60f2] font-bold text-xs tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  &ldquo;Real People. Real Airwaves.&rdquo;
                </span>
              </div>
            </div>

            {/* Middle: Dashboard Laptop Preview (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={withBasePath("/images/laptop-dashboard.jpg")}
                    alt="StudioPass Broadcaster Console Dashboard"
                    fill
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                      Broadcaster Studio Console
                    </p>
                    <p className="text-sm font-bold">
                      Urban FM &bull; Live Listener Requests &amp; Analytics
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block absolute -bottom-4 right-4 text-[#1e60f2] text-xs font-bold rotate-3 bg-white px-3 py-1 rounded-full shadow-md border border-blue-100">
                Your Voice On Air!
              </div>
            </div>

            {/* Right: Why Broadcasters & Brands Love It (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="mb-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                  Why StudioPass
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  Why Broadcasters &amp; Brands Love It
                </h3>
                <p className="text-xs text-[#1e60f2] font-semibold italic mt-0.5">
                  Same Fans. New Possibilities.
                </p>
              </div>

              {[
                {
                  title: "Deeper Audience Engagement",
                  desc: "Turn passive listeners into active participants with real-time interaction.",
                  icon: <Users className="w-4 h-4 text-[#1e60f2]" />,
                },
                {
                  title: "More Value for Brands",
                  desc: "Create meaningful, measurable connections through authentic fan engagement.",
                  icon: <BarChart3 className="w-4 h-4 text-[#1e60f2]" />,
                },
                {
                  title: "Easy to Use, Powerful Results",
                  desc: "A simple, all-in-one platform designed for broadcasters, brands and fans.",
                  icon: <Zap className="w-4 h-4 text-[#1e60f2]" />,
                },
                {
                  title: "Builds Stronger Communities",
                  desc: "Celebrate your audience. Amplify real voices. Keep fans coming back.",
                  icon: <Heart className="w-4 h-4 text-[#1e60f2]" />,
                },
              ].map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#1e60f2]/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {benefit.icon}
                    <h5 className="text-xs font-bold text-slate-900">{benefit.title}</h5>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* GRAPHIC CAMPAIGNS CAROUSEL                                            */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#f8faff]">
        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
          <CampaignCarousel campaigns={campaigns} />
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* APP DOWNLOAD SECTION                                                  */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="download" className="py-24 sm:py-32 lg:py-36 bg-white relative overflow-hidden">
        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e60f2] px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 inline-block">
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Download StudioPass in Seconds
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                Your favorite radio and TV stations. Now closer than ever.
                Send messages, request songs, call live on-air, and stay connected
                with the broadcast shows you love.
              </p>

              {/* 3 feature badges */}
              <div className="flex flex-wrap items-center gap-6 text-slate-600 text-xs sm:text-sm font-semibold pt-1">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#1e60f2]" />
                  <span>Fast &amp; Easy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#1e60f2]" />
                  <span>All Your Favs</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1e60f2]" />
                  <span>Always Free</span>
                </div>
              </div>

              {/* Store buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 shadow-lg shadow-slate-950/10 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <svg className="w-7 h-7 shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"/>
                    <path fill="#34A853" d="M14.5 11.29l2.302-2.302-10.938-6.33 8.636 8.632z"/>
                    <path fill="#EA4335" d="M5.864 21.342l8.635-8.635 2.302 2.302-10.937 6.333z"/>
                    <path fill="#FBBC05" d="M19.998 11.137l-2.302-1.33-2.535 2.193 2.535 2.193 2.302-1.33a1 1 0 000-1.726z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 leading-none">Get it on</p>
                    <p className="text-base font-extrabold tracking-tight text-white leading-tight mt-0.5">Google Play</p>
                  </div>
                </a>

                <a
                  href="#download"
                  className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 shadow-lg shadow-slate-950/10 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <svg className="w-7 h-7 shrink-0 text-white transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 leading-none">Download on the</p>
                    <p className="text-base font-extrabold tracking-tight text-white leading-tight mt-0.5">App Store</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Middle & Right: QR Code & Dual Phone Mockup (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* QR Code Card */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl text-center space-y-4 flex flex-col items-center justify-center">
                <div className="p-3.5 bg-slate-50 rounded-2xl inline-block border border-slate-100">
                  <div className="h-44 w-44 bg-white rounded-xl flex items-center justify-center relative overflow-hidden p-2">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="5" width="28" height="28" fill="#1e60f2" />
                      <rect x="9" y="9" width="20" height="20" fill="white" />
                      <rect x="13" y="13" width="12" height="12" fill="#1e60f2" />
                      <rect x="67" y="5" width="28" height="28" fill="#1e60f2" />
                      <rect x="71" y="9" width="20" height="20" fill="white" />
                      <rect x="75" y="13" width="12" height="12" fill="#1e60f2" />
                      <rect x="5" y="67" width="28" height="28" fill="#1e60f2" />
                      <rect x="9" y="71" width="20" height="20" fill="white" />
                      <rect x="13" y="75" width="12" height="12" fill="#1e60f2" />
                      <rect x="38" y="10" width="6" height="6" fill="#1e60f2" />
                      <rect x="48" y="10" width="6" height="6" fill="#1e60f2" />
                      <rect x="58" y="10" width="6" height="6" fill="#1e60f2" />
                      <rect x="38" y="20" width="6" height="6" fill="#1e60f2" />
                      <rect x="48" y="25" width="6" height="6" fill="#1e60f2" />
                      <rect x="10" y="38" width="6" height="6" fill="#1e60f2" />
                      <rect x="20" y="48" width="6" height="6" fill="#1e60f2" />
                      <rect x="38" y="38" width="8" height="8" fill="#1e60f2" />
                      <rect x="54" y="38" width="8" height="8" fill="#1e60f2" />
                      <rect x="38" y="54" width="8" height="8" fill="#1e60f2" />
                      <rect x="54" y="54" width="8" height="8" fill="#1e60f2" />
                      <rect x="70" y="38" width="6" height="6" fill="#1e60f2" />
                      <rect x="80" y="48" width="6" height="6" fill="#1e60f2" />
                      <rect x="38" y="70" width="6" height="6" fill="#1e60f2" />
                      <rect x="48" y="75" width="6" height="6" fill="#1e60f2" />
                      <rect x="70" y="70" width="6" height="6" fill="#1e60f2" />
                      <rect x="80" y="75" width="6" height="6" fill="#1e60f2" />
                    </svg>
                    <div className="absolute inset-0 m-auto h-9 w-9 rounded-lg bg-[#1e60f2] flex items-center justify-center font-bold text-white text-xs shadow-md border-2 border-white">
                      SP
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-slate-900">Scan to Download</h4>
                  <p className="text-xs text-slate-500 max-w-[200px] mx-auto leading-relaxed">
                    Scan with your camera to download StudioPass instantly.
                  </p>
                </div>

                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e60f2] bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
                    <QrCode className="w-3.5 h-3.5 text-[#1e60f2]" />
                    Scan with phone camera
                  </span>
                </div>
              </div>

              {/* Dual Phone Mockups Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-gradient-to-b from-blue-50/80 to-white p-3 group">
                <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden">
                  <Image
                    src={withBasePath("/images/dual-phones-mockup.jpg")}
                    alt="StudioPass Dual Phone Mockup"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-center text-xs font-semibold text-[#1e60f2] mt-2 italic">
                  Radio. TV. Everywhere with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* TESTIMONIALS SECTION                                                  */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#f8faff]">
        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e60f2] px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 inline-block mb-3.5">
              What Our Community Says
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Trusted by Thousands of Listeners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: "Nabukunya A.",
                location: "Kampala, Uganda",
                quote: "StudioPass has made it so easy to keep up with my favorite radio shows. Love it!",
                avatar: withBasePath("/images/testimonials/nabukunya.png"),
              },
              {
                name: "Daniel K.",
                location: "Entebbe, Uganda",
                quote: "All my radio and TV stations in one place. Super convenient and reliable.",
                avatar: withBasePath("/images/testimonials/daniel.png"),
              },
              {
                name: "Sharon M.",
                location: "Jinja, Uganda",
                quote: "Clean design, great content and it just works everywhere I go. Highly recommended!",
                avatar: withBasePath("/images/testimonials/sharon.png"),
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-9 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#1e60f2]/30 transition-all space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#1e60f2]/20 shrink-0 shadow-sm">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs font-semibold text-slate-400">{t.location}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-1 pt-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-9 rounded-full bg-[#1e60f2]" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* STAY IN THE LOOP (NEWSLETTER)                                         */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white">
        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
          <div className="p-10 sm:p-16 lg:p-20 rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-blue-50/80 via-white to-sky-50/80 border border-blue-100/90 text-slate-900 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e60f2]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1e60f2] px-3.5 py-1.5 rounded-full bg-blue-100/60 border border-blue-200/60 inline-block">
                  Stay in the Loop
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Get the latest updates from <span className="text-[#1e60f2]">StudioPass</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                  New stations, features, and exclusive content — delivered to your inbox.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3.5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for subscribing to StudioPass updates!");
                  }}
                  className="flex flex-col sm:flex-row items-center gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full sm:flex-1 px-5 py-4 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1e60f2] shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1e60f2] hover:bg-[#185adb] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#1e60f2]/25 transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                  <span>No spam. Just the good stuff.</span>
                  <span className="text-[#1e60f2] font-semibold italic">Radio. TV. Everywhere with you.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* FAQ SECTION                                                           */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 sm:py-32 lg:py-36 bg-[#f8faff]">
        <div className="w-[92%] lg:w-[86%] max-w-[1000px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e60f2] px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 inline-block mb-3.5">
              Help &amp; Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {[
              { id: "all", label: "All Questions" },
              { id: "listeners", label: "For Listeners" },
              { id: "stations", label: "For Stations" },
              { id: "general", label: "General" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFaqFilter(cat.id as any)}
                className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  faqFilter === cat.id
                    ? "bg-[#1e60f2] text-white shadow-md shadow-[#1e60f2]/25 scale-102"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="p-7 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-md">
            <Accordion items={filteredFaq} />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* BECOME A PARTNER SECTION                                              */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="partner" className="py-24 sm:py-32 lg:py-36 bg-white">
        <div className="w-[92%] lg:w-[86%] max-w-[1440px] 2xl:max-w-[1536px] mx-auto">
          <div className="relative rounded-3xl p-10 sm:p-16 lg:p-20 bg-gradient-to-r from-[#1e60f2] to-[#0ea5e9] text-center space-y-7 overflow-hidden shadow-2xl shadow-[#1e60f2]/25">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl mx-auto relative z-10 leading-tight">
              Grow Your Audience. Build Stronger Connections.
            </h2>

            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed relative z-10 font-medium">
              Join forward-thinking radio and television broadcasters, creators,
              and brands transforming audience engagement across Africa with StudioPass.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setOnboardOpen(true)}
                className="w-full sm:w-auto bg-white text-[#1e60f2] hover:bg-slate-100 font-extrabold text-base px-8 py-6 rounded-2xl shadow-xl border-white cursor-pointer"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white/60 text-white hover:bg-white/15 font-bold text-base px-8 py-6 rounded-2xl cursor-pointer"
                >
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Dynamic Scroll to Top */}
      <ScrollToTop />

      {/* Floating WhatsApp Support Widget */}
      <WhatsAppFloat />

      {/* Onboard Application Modal */}
      <OnboardModal open={onboardOpen} onOpenChange={setOnboardOpen} />
    </div>
  );
}
