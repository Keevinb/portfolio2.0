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
  title: "Kevin Bondesson - Portfolio",
  description: "Portfolio of Kevin Bondesson, computer engineer in Gothenburg.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-indigo-900 overscroll-none`}
    >
      <body className="min-h-screen bg-gradient-to-b from-slate-800 to-indigo-900 bg-fixed font-medium text-slate-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
