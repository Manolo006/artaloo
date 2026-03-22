import type { Metadata } from "next";
import Link from "next/link";
import TrailingSlashRedirect from "./trailing-slash-redirect";

export const metadata: Metadata = {
  title: "ARTALO",
  description: "Raccolta rapida dei link social e contatti ARTALO.",
};

const socialLinks = [
  {
    href: "https://www.facebook.com/artalo.lab",
    label: "Facebook",
    imageSrc: "./link/fb.png",
  },
  {
    href: "https://www.instagram.com/artalolab__",
    label: "Instagram",
    imageSrc: "./link/ig.png",
  },
  {
    href: "https://www.tiktok.com/@artalolab",
    label: "TikTok",
    imageSrc: "./link/tt.png",
  },
  {
    href: "https://www.youtube.com/@Artaloartalo",
    label: "YouTube",
    imageSrc: "./link/yt.png",
  },
  {
    href: "https://wa.me/3392530535",
    label: "WhatsApp",
    imageSrc: "./link/wp.png",
  },
  {
    href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=artalo.lab@gmail.com",
    label: "Email",
    imageSrc: "./link/gmail.png",
  },
];

export default function LinkHubPage() {
  return (
    <>
      <TrailingSlashRedirect />
      <div className="page page-bg-mixed linkhub-page">
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
                  <img src={imageSrc} alt={label} className="linkhub-item-image" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}