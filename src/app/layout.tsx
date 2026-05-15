import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orbitdesk.app"),
  title: "OrbitDesk — Customer Messaging Platform Unified",
  description: "Day 15/30 of the AI-Generated Landing Page Challenge. OrbitDesk is a conceptual customer messaging platform that brings email, live chat, and social DMs into one calm workspace.",
  keywords: [
    "OrbitDesk",
    "Customer Messaging Platform",
    "Customer Support AI",
    "Unified Inbox",
    "Support Workspace",
    "Help Desk AI",
    "Bento Design",
    "AI Challenge"
  ],
  openGraph: {
    title: "OrbitDesk — Customer Messaging Unified",
    description: "A conceptual customer messaging platform landing page for Day 15/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
    url: "https://orbitdesk.app",
    siteName: "OrbitDesk",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitDesk — Customer Messaging Unified",
    description: "A conceptual customer messaging platform landing page for Day 15/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" async></script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#f3f3f0] text-[#17191f] selection:bg-violet-100 selection:text-violet-900">
        {children}
      </body>
    </html>
  );
}
