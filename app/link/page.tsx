import type { Metadata } from "next";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Link | ARTALO",
  description: "Raccolta rapida dei link social e contatti ARTALO.",
};

const socialLinks = [
  {
    href: "https://www.facebook.com/artalo.lab",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/artalolab__",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.tiktok.com/@artalolab",
    label: "TikTok",
    icon: FaTiktok,
  },
  {
    href: "https://www.youtube.com/@Artaloartalo",
    label: "YouTube",
    icon: FaYoutube,
  },
  {
    href: "https://wa.me/3392530535",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
  {
    href: "mailto:artalo.lab@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

export default function LinkHubPage() {
  return (
    <div className="page linkhub-page">
      <section className="section linkhub-section">
        <div className="section-inner linkhub-inner">
          <Link href="/" className="linkhub-logo" aria-label="Torna alla home">
            <img src="/logo.svg" alt="Logo ARTALO" />
            <span className="brand-logo">ARTALO</span>
          </Link>

          <h1 className="linkhub-title">I nostri link</h1>

          <div className="linkhub-grid">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="linkhub-item"
                aria-label={label}
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}