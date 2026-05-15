import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shiro-landing.adrielzimbril.com"),
  title: "Shiro — Architect Your Focus, End Procrastination",
  description: "Shiro is your personal AI assistant designed to bridge the gap between intent and action. It architects your day, silences noise, and keeps you in flow.",
  keywords: [
    "Shiro",
    "Personal AI Assistant",
    "AI Productivity",
    "Daily Planner AI",
    "AI Schedule Manager",
    "Procrastination Fix",
    "Focus App",
    "AI Task Manager",
    "ai-challenge",
    "ai-landing-page",
    "bento-design",
    "generative-ai",
    "nextjs",
    "motion/react",
    "tailwindcss"
  ],
  openGraph: {
    title: "Shiro — Your Personal AI Assistant",
    description: "Shiro plans your days, tracks your priorities, and eliminates procrastination. Turn your scattered inputs into a clean daily operating system.",
    images: ["/opengraph-image.png"],
    url: "https://shiro-landing.adrielzimbril.com",
    siteName: "Shiro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiro — Your Personal AI Assistant",
    description: "Shiro plans your days, tracks your priorities, and eliminates procrastination.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" async></script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-950 selection:bg-violet-100 selection:text-violet-900">
        {children}
      </body>
    </html>
  );
}
