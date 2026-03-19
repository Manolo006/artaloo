import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import NavLinks from "./nav-links";
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
        <nav className="nav">
          <div className="nav-stack">
            <span className="nav-desktop-layer" aria-hidden="true"></span>
            <div className="nav-inner">
              <Link className="nav-brand" href="/">
                <img src="/logo.svg" alt="Logo ARTALO" />
                <span className="brand-logo">ARTALO</span>
              </Link>
              <input
                className="nav-toggle-check"
                type="checkbox"
                id="burger-menu"
                aria-label="Apri o chiudi menu di navigazione"
              />
              <label className="burger" htmlFor="burger-menu" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <NavLinks />
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
