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
  metadataBase: new URL("https://perksplushub.com"),
  title: "Perks Plus Hub — Your Employee Perks in One Place",
  description: "Perks Plus Hub is an employee perks hub where employees see, track and use the perks their employer offers.",
  keywords: "employee perks, employee benefits, workplace perks, perks hub, perk reminders, team kudos wall",
  openGraph: {
    title: "Perks Plus Hub — Your Employee Perks in One Place",
    description: "Perks Plus Hub is an employee perks hub where employees see, track and use the perks their employer offers.",
    url: "https://perksplushub.com",
    siteName: "Perks Plus Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Perks Plus Hub — Your Employee Perks in One Place",
    description: "See, track and use the perks your employer offers, all in one place.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [],
    shortcut: [],
    apple: [],
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
        {children}
      </body>
    </html>
  );
}
