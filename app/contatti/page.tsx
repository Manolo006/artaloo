import type { Metadata } from "next";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaLink,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "ARTALO",
  description:
    "Contatta ARTALO: email, telefono, social e indicazioni per raggiungerci a Bracciano.",
};

const contactLinks = [
  {
    href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=artalo.lab@gmail.com",
    label: "Email",
    icon: FaEnvelope,
    socialClass: "is-email",
  },
  {
    href: "tel:+393392530535",
    label: "Telefono",
    icon: FaPhone,
    socialClass: "is-phone",
  },
  {
    href: "https://wa.me/3392530535",
    label: "WhatsApp",
    icon: FaWhatsapp,
    socialClass: "is-whatsapp",
  },
  {
    href: "https://www.instagram.com/artalolab__",
    label: "Instagram",
    icon: FaInstagram,
    socialClass: "is-instagram",
  },
  {
    href: "https://www.tiktok.com/@artalolab",
    label: "TikTok",
    icon: FaTiktok,
    socialClass: "is-tiktok",
  },
  {
    href: "https://www.facebook.com/artalo.lab",
    label: "Facebook",
    icon: FaFacebook,
    socialClass: "is-facebook",
  },
  {
    href: "https://www.youtube.com/@Artaloartalo",
    label: "YouTube",
    icon: FaYoutube,
    socialClass: "is-youtube",
  },
  {
    href: "./link",
    label: "Tutti i link",
    icon: FaLink,
    socialClass: "is-all-links",
  },
];

export default function ContattiPage() {
  return (
    <div className="page page-bg-viola page-contatti">
      <section className="section hero hero-alt">
        <div className="section-inner">
          <p className="section-kicker">Contatti</p>
          <h1 className="section-title">Come trovarci</h1>
          <p className="section-subtitle">
            Esplora le nostre opzioni di contatto. Siamo a portata di clic o a
            un passo dalla tua visita.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <article className="contact">
            <h2 style={{ marginTop: 0 }}>Visita la nostra sede</h2>
            <div className="contact-map-wrap" aria-label="Mappa sede ARTALO">
              <iframe
                title="Mappa sede ARTALO"
                src="https://www.google.com/maps?q=Via+Valle+della+Foresta+6,+Bracciano+RM&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="contact-address">
              <FaMapMarkerAlt /> Via Valle della Foresta 6, 00062 Bracciano (RM)
            </p>
          </article>

          <article className="contact">
            <h2 style={{ marginTop: 0 }}>Rimaniamo in contatto</h2>
            <p className="section-subtitle" style={{ marginTop: 0 }}>
              Scrivici, chiamaci o seguici sui social per collaborazioni,
              workshop e nuove opere.
            </p>
            <div className="contact-links-grid">
              {contactLinks.map(({ href, label, icon: Icon, socialClass }) => (
                <a
                  key={label}
                  href={href}
                  className={`contact-link-item ${socialClass ?? ""}`.trim()}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}