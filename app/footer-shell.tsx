import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const collaborations = [
  {
    href: "https://www.riarteco.it/core/",
    label: "Riarteco",
    logo: "./collaboratori/riarteco.jpg",
    format: "wide",
  },
  {
    href: "https://www.associazionenuovefrontiere.org/",
    label: "Associazione Nuove Frontiere",
    logo: "./collaboratori/logo niove frontiere.png",
    format: "wide",
  },
  {
    href: "https://www.facebook.com/CustodidellaPaludediTorreFlavia/",
    label: "I Custodi di Torre Flavia",
    logo: "./collaboratori/logo I Custodi di Torre Flavia.jpeg",
    format: "wide",
  },
  {
    href: "https://terzoparadiso.org/",
    label: "Terzo Paradiso",
    logo: "./collaboratori/logo 3paradiso.jpg",
    format: "square",
  },
  {
    href: "https://www.lazioinnova.it/",
    label: "Lazio Innova",
    logo: "./collaboratori/lazio-innova.jpg",
    format: "wide",
  },
  {
    href: "https://cittadellarte.it/it",
    label: "Cittadellarte / Fondazione Pistoletto",
    logo: "./collaboratori/fondazione pistoletto logo.jpg",
    format: "wide",
  },
];

export default function FooterShell() {
  return (
    <footer className="footer site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <p className="site-footer-brand">
            ARTALO · Recupero creativo, sostenibilità e design etico.
          </p>
          <div className="site-footer-grid">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=artalo.lab@gmail.com"
              className="site-footer-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope /> artalo.lab@gmail.com
            </a>
            <a href="tel:+393392530535" className="site-footer-link">
              <FaPhone /> +39 339 253 0535
            </a>
            <a
              href="https://www.google.com/maps?q=Via+Valle+della+Foresta+6,+Bracciano+RM"
              className="site-footer-link site-footer-address"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt /> Via Valle della Foresta 6, 00062 Bracciano (RM)
            </a>
          </div>

          <div className="site-footer-socials">
            <a
              href="https://www.instagram.com/artalolab__"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.facebook.com/artalo.lab"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://www.tiktok.com/@artalolab"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok /> TikTok
            </a>
            <a
              href="https://www.youtube.com/@Artaloartalo"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>

        <div className="site-footer-collabs">
          <p className="site-footer-collabs-title">Collaborazioni</p>
          <div className="site-footer-collabs-grid">
            {collaborations.map(({ href, label, logo, format }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`site-footer-collab-item format-${format}`}
              >
                <span className="site-footer-collab-logo-wrap">
                  <img src={logo} alt={label} className="site-footer-collab-logo" />
                </span>
              </a>
            ))}
          </div>
          <p className="site-footer-privacy">
            <Link href="/privacy">Informativa sulla Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}