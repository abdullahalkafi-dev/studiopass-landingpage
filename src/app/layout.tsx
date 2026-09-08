import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joura.info/landing-page"),
  title: "StudioPass | Live Fan Engagement & Monetization for Radio, TV & Channels",
  description:
    "The unified live audience engagement infrastructure for Radio, Television, and Digital Channels. Real-time presenter chat, live HD studio voice calls, automated TV playout tickers, and mobile money revenue.",
  icons: {
    icon: "/landing-page/logo.svg",
    apple: "/landing-page/logo.png",
  },
  openGraph: {
    title: "StudioPass | Turn Broadcast Audiences into Active, Monetized Participants",
    description:
      "Real-time listener chat, automated on-screen TV playout tickers, live studio voice calls, and direct mobile money revenue across Africa.",
    images: ["/landing-page/logo.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080c15] text-slate-100 selection:bg-[#1e60f2] selection:text-white">
        {children}
      </body>
    </html>
  );
}
