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
  title: "Shiro — Your Personal AI Assistant",
  description: "Shiro plans your days, tracks your priorities, and eliminates procrastination. Your AI-powered personal assistant that turns scattered thoughts into focused action — every single morning.",
  keywords: [
    "Shiro",
    "Personal AI Assistant",
    "AI Productivity",
    "Daily Planner AI",
    "AI Schedule Manager",
    "Procrastination Fix",
    "Focus App",
    "AI Task Manager"
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
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
      <body className="min-h-full flex flex-col font-sans bg-[#f8fafc] text-slate-950 selection:bg-blue-100 selection:text-blue-700">
        {children}
      </body>
    </html>
  );
}
