import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import { UI5Provider } from "./provider";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { Analytics } from "@vercel/analytics/react";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Carbon Ledger Logistics - Dashboard",
  description: "Executive Operations Dashboard for Logistics Carbon Accounting",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
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
      className={`${ibmPlexSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-on-surface flex overflow-hidden">
        <UI5Provider>
          <AppSidebar />
          <div className="flex-1 flex flex-col ml-60 h-screen relative">
            <AppHeader />
            <main className="flex-1 pt-16 overflow-hidden relative">
              {children}
            </main>
          </div>
        </UI5Provider>
        <Analytics />
      </body>
    </html>
  );
}
