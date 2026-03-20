import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fbImage from "./link/fb.png";
import igImage from "./link/ig.png";
import ttImage from "./link/tt.png";
import ytImage from "./link/yt.png";
import wpImage from "./link/wp.png";
import gmailImage from "./link/gmail.png";

export const metadata: Metadata = {
  title: "Link | ARTALO",
  description: "Raccolta rapida dei link social e contatti ARTALO.",
};

const socialLinks = [
  {
    href: "https://www.facebook.com/artalo.lab",
    label: "Facebook",
    imageSrc: fbImage,
  },
  {
    href: "https://www.instagram.com/artalolab__",
    label: "Instagram",
    imageSrc: igImage,
  },
  {
    href: "https://www.tiktok.com/@artalolab",
    label: "TikTok",
    imageSrc: ttImage,
  },
  {
    href: "https://www.youtube.com/@Artaloartalo",
    label: "YouTube",
    imageSrc: ytImage,
  },
  {
    href: "https://wa.me/3392530535",
    label: "WhatsApp",
    imageSrc: wpImage,
  },
  {
    href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=artalo.lab@gmail.com",
    label: "Email",
    imageSrc: gmailImage,
  },
];

export default function LinkHubPage() {
  return (
    <div className="page linkhub-page">
      <section className="section linkhub-section">
        <div className="section-inner linkhub-inner">
          <Link href="/" className="linkhub-logo" aria-label="Torna alla home">
            <img src="./logo.svg" alt="Logo ARTALO" />
            <span className="brand-logo">ARTALO</span>
          </Link>

          <h1 className="linkhub-title">I nostri link</h1>

          <div className="linkhub-grid">
            {socialLinks.map(({ href, label, imageSrc }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Image
                  src={imageSrc}
                  alt={label}
                  width={128}
                  height={128}
                  className="linkhub-item-image"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}