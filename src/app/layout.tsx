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
  title: "Shiro — Premium Personal AI Assistant",
  description: "Day 14/30 of the AI-Generated Landing Page Challenge. Shiro is a conceptual Personal AI Assistant that manages your daily schedule and eliminates procrastination.",
  keywords: [
    "Shiro",
    "Personal AI Assistant",
    "AI Assistant",
    "Productivity",
    "Next.js",
    "Tailwind CSS",
    "bento design",
    "AI challenge"
  ],
  openGraph: {
    title: "Shiro — Premium Personal AI Assistant",
    description: "A conceptual Personal AI Assistant landing page for Day 14/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
    url: "https://shiro-landing.adrielzimbril.com",
    siteName: "Shiro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiro — Premium Personal AI Assistant",
    description: "A conceptual Personal AI Assistant landing page for Day 14/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
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
