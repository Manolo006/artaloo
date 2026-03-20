import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const collaborations = [
  {
    href: "https://www.riarteco.it/core/",
    label: "Riarteco",
    logo: "/collaboratori/riarteco.jpg",
    format: "wide",
  },
  {
    href: "https://www.associazionenuovefrontiere.org/",
    label: "Associazione Nuove Frontiere",
    logo: "/collaboratori/logo niove frontiere.png",
    format: "wide",
  },
  {
    href: "https://www.facebook.com/CustodidellaPaludediTorreFlavia/",
    label: "I Custodi di Torre Flavia",
    logo: "/collaboratori/logo I Custodi di Torre Flavia.jpeg",
    format: "wide",
  },
  {
    href: "https://terzoparadiso.org/",
    label: "Terzo Paradiso",
    logo: "/collaboratori/logo 3paradiso.jpg",
    format: "square",
  },
  {
    href: "https://www.lazioinnova.it/",
    label: "Lazio Innova",
    logo: "/collaboratori/lazio-innova.jpg",
    format: "wide",
  },
  {
    href: "https://cittadellarte.it/it",
    label: "Cittadellarte / Fondazione Pistoletto",
    logo: "/collaboratori/fondazione pistoletto logo.jpg",
    format: "wide",
  },
];

export default function FooterShell() {
  return (
    <footer className="footer test-footer">
      <div className="test-footer-inner">
        <div className="test-footer-main">
          <p className="test-footer-brand">
            ARTALO · Recupero creativo, sostenibilità e design etico.
          </p>
          <div className="test-footer-grid">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=artalo.lab@gmail.com"
              className="test-footer-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope /> artalo.lab@gmail.com
            </a>
            <a href="tel:+393392530535" className="test-footer-link">
              <FaPhone /> +39 339 253 0535
            </a>
            <a
              href="https://www.google.com/maps?q=Via+Valle+della+Foresta+6,+Bracciano+RM"
              className="test-footer-link test-footer-address"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt /> Via Valle della Foresta 6, 00062 Bracciano (RM)
            </a>
          </div>

          <div className="test-footer-socials">
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

        <div className="test-footer-collabs">
          <p className="test-footer-collabs-title">Collaborazioni</p>
          <div className="test-footer-collabs-grid">
            {collaborations.map(({ href, label, logo, format }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`test-footer-collab-item format-${format}`}
              >
                <span className="test-footer-collab-logo-wrap">
                  <img src={logo} alt={label} className="test-footer-collab-logo" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}