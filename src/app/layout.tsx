import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dharun D S | Instrumentation & Control Engineer",
  description:
    "Portfolio of Dharun D S — Instrumentation and Control Engineering student at PSG iTech. Specializing in PLC, SCADA, IoT, Embedded Systems, and Automation.",
  keywords: [
    "Instrumentation Engineer",
    "Control Systems",
    "PLC",
    "SCADA",
    "IoT",
    "ESP32",
    "PSG iTech",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-900 text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
