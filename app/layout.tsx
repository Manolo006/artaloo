import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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
          <div className="nav-inner">
            <Link className="nav-brand" href="/">
              <img src="/logo.svg" alt="Logo ARTALO" />
              <span className="brand-logo">ARTALO</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/opere">Opere</Link>
              <Link href="/eventi">Eventi</Link>
              <Link href="/servizi">Servizi</Link>
              <Link href="/chi-siamo">Chi siamo</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
