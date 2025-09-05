import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PHATTY — Fullstack Developer",
  description:
    "Portfolio of PHATTY: Fullstack developer crafting modern web apps, delightful UX, and AI-powered experiences.",
  metadataBase: new URL("https://yhor.xyz"),
  openGraph: {
    title: "PHATTY — Fullstack Developer",
    description:
      "Portfolio of PHATTY: Fullstack developer crafting modern web apps, delightful UX, and AI-powered experiences.",
    url: "https://yhor.xyz",
    siteName: "PHATTY",
    images: [{ url: "/images/profile.jpg" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHATTY — Fullstack Developer",
    description:
      "Portfolio of PHATTY: Fullstack developer crafting modern web apps, delightful UX, and AI-powered experiences.",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
