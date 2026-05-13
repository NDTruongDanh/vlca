import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UI5Provider } from "./provider";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon Ledger Logistics - Dashboard",
  description: "Executive Operations Dashboard for Logistics Carbon Accounting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
      </body>
    </html>
  );
}
