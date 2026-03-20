import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import NavShell from "./nav-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const edoFont = localFont({
  src: "../public/fonts/edosz.ttf",
  variable: "--font-edo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARTALO | Design da recupero creativo",
  description:
    "ARTALO è un progetto di sostenibilità e creatività che recupera rifiuti destinati alla discarica e li trasforma in prodotti di design unici.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} ${edoFont.variable}`}
    >
      <body>
        <NavShell />
        {children}
      </body>
    </html>
  );
}
