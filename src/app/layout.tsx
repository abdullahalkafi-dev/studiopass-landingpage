import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";

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
  title: "StudioPass | Your Favourite Shows, Closer Than Ever",
  description:
    "StudioPass connects listeners and viewers directly with Radio Stations, TV Stations, Creators and Brands through messages, voice notes, song requests, live audio calls, polls, challenges and more.",
  icons: {
    icon: "/landing-page/logo-icon.svg",
    apple: "/landing-page/logo-icon.png",
  },
  openGraph: {
    title: "StudioPass | One Platform. More Ways to Connect.",
    description:
      "StudioPass brings listeners, artists, channels and brands closer to the radio and TV stations they love. Real people. Real conversations. A more connected media community.",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
