"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

type BaseCard = {
  label: string;
  description: string;
  icon: IconType;
  tone: string;
};

type LinkCard = BaseCard & {
  kind: "link";
  href: string;
};

type EmailCard = BaseCard & {
  kind: "email";
  email: string;
  gmailHref: string;
};

type SocialCard = LinkCard | EmailCard;

const socialLinks: SocialCard[] = [
  {
    kind: "link",
    href: "https://www.facebook.com/artalo.lab",
    label: "Facebook",
    description: "Novità, laboratori e iniziative della community.",
    icon: FaFacebookF,
    tone: "is-facebook",
  },
  {
    kind: "link",
    href: "https://www.instagram.com/artalolab__",
    label: "Instagram",
    description: "Foto, dietro le quinte e progetti creativi in corso.",
    icon: FaInstagram,
    tone: "is-instagram",
  },
  {
    kind: "link",
    href: "https://www.tiktok.com/@artalolab",
    label: "TikTok",
    description: "Video brevi, processi artistici e momenti dal laboratorio.",
    icon: FaTiktok,
    tone: "is-tiktok",
  },
  {
    kind: "link",
    href: "https://www.youtube.com/@Artaloartalo",
    label: "YouTube",
    description: "Contenuti video e racconti più approfonditi su ARTALO.",
    icon: FaYoutube,
    tone: "is-youtube",
  },
  {
    kind: "link",
    href: "https://wa.me/3392530535",
    label: "WhatsApp",
    description: "Scrivici direttamente per informazioni o collaborazioni.",
    icon: FaWhatsapp,
    tone: "is-whatsapp",
  },
  {
    kind: "email",
    email: "artalo.lab@gmail.com",
    gmailHref: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=artalo.lab@gmail.com",
    label: "Email",
    description: "Per contatti ufficiali, proposte e richieste dedicate.",
    icon: FaEnvelope,
    tone: "is-email",
  },
];

export default function LinkClient() {
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyMessage("Email copiata con successo!");
    } catch {
      setCopyMessage("Impossibile copiare automaticamente. Copia: " + email);
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopyMessage(null);
    }, 2200);
  };

  return (
    <div className="page page-bg-mixed linkpage-page">
      <section className="section linkpage-section">
        <div className="section-inner linkpage-inner">
          <Link href="/" className="linkpage-logo" aria-label="Torna alla home">
            <img src="./logo.svg" alt="Logo ARTALO" />
            <span className="brand-logo">ARTALO</span>
          </Link>

          <div className="linkpage-hero">
            <p className="linkpage-kicker">Seguici e contattaci</p>
            <h1 className="linkpage-title">Tutti i canali ARTALO in un unico posto</h1>
            <p className="linkpage-subtitle">
              Scegli la piattaforma che preferisci: social, messaggi diretti o email.
            </p>
          </div>

          <div className="linkpage-grid">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.label} className={`linkpage-card ${item.tone}`}>
                  <div className="linkpage-card-head">
                    <span className="linkpage-card-icon" aria-hidden="true">
                      <Icon />
                    </span>

                    <div>
                      <h2 className="linkpage-card-title">{item.label}</h2>
                      <p className="linkpage-card-text">{item.description}</p>
                    </div>
                  </div>

                  {item.kind === "email" ? (
                    <div className="linkpage-email-actions">
                      <button
                        type="button"
                        className="linkpage-card-button"
                        onClick={() => handleCopyEmail(item.email)}
                      >
                        Copia email
                      </button>

                      <a
                        href={item.gmailHref}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Apri Gmail per inviare una email"
                        className="linkpage-card-button"
                      >
                        Apri Gmail
                      </a>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Apri ${item.label}`}
                      className="linkpage-card-button"
                    >
                      Apri {item.label}
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {copyMessage ? (
        <div className="linkpage-toast" role="status" aria-live="polite">
          {copyMessage}
        </div>
      ) : null}
    </div>
  );
}
