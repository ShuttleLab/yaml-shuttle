import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VibeKanbanWrapper from "./VibeKanbanWrapper";
import { I18nProvider } from "@/lib/i18n";
import { ThemeSync } from "@/components/theme-sync";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0fdfa" },
    { media: "(prefers-color-scheme: dark)", color: "#062a23" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "YAML Shuttle",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description: "Format, validate, convert and highlight YAML — fast, safe, privacy-first.",
  url: "https://yaml.shuttlelab.org",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yaml.shuttlelab.org"),
  title: "YAML Shuttle - YAML 格式化与校验工具",
  description: "YAML 格式化、校验、转换与高亮，快速、安全、隐私优先 | Format, validate, convert and highlight YAML — fast, safe, privacy-first.",
  alternates: {
    canonical: "/",
  },
  // verification: {
  //   google: "<paste-google-search-console-verification-code-here>",
  // },
  openGraph: {
    title: "YAML Shuttle",
    description: "YAML 格式化、校验、转换与高亮 | Format, validate, convert and highlight YAML",
    siteName: "YAML Shuttle",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "YAML Shuttle",
    description: "YAML 格式化、校验、转换与高亮 | Format, validate, convert and highlight YAML",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <ThemeSync />
        <VibeKanbanWrapper />
        <I18nProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
