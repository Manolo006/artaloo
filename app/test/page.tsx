import Link from "next/link";
import {
  FaLeaf,
  FaPaintBrush,
  FaRecycle,
  FaArrowRight,
  FaCube,
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
    logo: "/riarteco.jpg",
    format: "wide",
  },
  {
    href: "https://www.associazionenuovefrontiere.org/",
    label: "Associazione Nuove Frontiere",
    logo: "/logo niove frontiere.png",
    format: "wide",
  },
  {
    href: "https://www.facebook.com/CustodidellaPaludediTorreFlavia/",
    label: "I Custodi di Torre Flavia",
    logo: "/logo I Custodi di Torre Flavia.jpeg",
    format: "wide",
  },
  {
    href: "https://terzoparadiso.org/",
    label: "Terzo Paradiso",
    logo: "/logo 3paradiso.jpg",
    format: "square",
  },
  {
    href: "https://www.lazioinnova.it/",
    label: "Lazio Innova",
    logo: "/lazio-innova.jpg",
    format: "wide",
  },
  {
    href: "https://cittadellarte.it/it",
    label: "Cittadellarte / Fondazione Pistoletto",
    logo: "/fondazione pistoletto logo.jpg",
    format: "wide",
  },
];

export default function Home() {
  return (
    <div className="page test-image-bg">
      <header className="hero" id="home">
        <div className="hero-inner">
          <div>
            <span className="badge">
              <FaRecycle /> Recupero creativo e sostenibilità
            </span>
            <h1 className="hero-title hero-title-edo">
              <span>ARTALO</span> il modo bello di non sprecare.
            </h1>
            <p className="hero-text">
              ARTALO è un progetto di sostenibilità e creatività che contribuisce
             alla salvaguardia ambientale, attraverso il recupero e la
             trasformazione dei rifiuti destinati alla discarica,
             lavorando sul restyling per dare vita a nuovi prodotti di design unici e inimitabili.
             <br /><br />
             Abbraccia anche tu uno stile di vita più responsabile ed ecologico, perché affidando
             uno scarto ad ARTALO stai rimettendo in uso dei beni, contribuendo così all'economia circolare.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/opere">
                Scopri le opere
                <FaArrowRight />
              </Link>
              <Link className="button button-secondary" href="/chi-siamo">
                Collabora con noi
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <img
              src="/foto martina.png"
              alt="Martina - progetto Artalo"
              className="hero-photo"
            />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-inner split">
          <div>
            <h2 className="section-title">Benvenuti nel mio mondo di Upcycling!</h2>
            <p className="section-subtitle">
              Un' Atelier dove dal recupero di rifiuti destinati allo smaltimento, 
              si dà nuova vita a mobili ed oggetti d'arredo, assemblando e restaurando, 
              creando veri e propri elementi artistici. Artalo promuove il primo centro 
              di riciclo creativo in questo territorio, della Regione Lazio. L'obiettivo 
              è stimolare la cultura del riciclo e della trasformazione di oggetti, mobili 
              e tessuti. Sostenendo il valore ambientale, sociale ed economico, sottraendo 
              rifiuti a discariche e inceneritori e riducendo il prelievo delle materie prime 
              necessarie a produrre nuovi beni.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/servizi">
                Servizi su misura
                <FaArrowRight />
              </Link>
              <Link className="button button-secondary" href="/eventi">
                Eventi e workshop
              </Link>
            </div>
          </div>
          <div className="manifesto">
            <h3 style={{ marginTop: 0 }}>Manifesto ARTALO</h3>
            <p className="section-subtitle">
              Credo che la creatività possa guidare il cambiamento. Ogni
              oggetto è un gesto di cura verso la Terra.
            </p>
            <ul>
              <li>
                <FaLeaf /> Design consapevole
              </li>
              <li>
                <FaRecycle /> Materiali di scarto e riciclo
              </li>
              <li>
                <FaPaintBrush /> Collaborazioni con comunità locali
              </li>
              <li>
                <FaCube /> Oggetti irripetibili e emotivi
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer test-footer">
        <div className="test-footer-inner">
          <div className="test-footer-main">
            <p className="test-footer-brand">ARTALO · Recupero creativo, sostenibilità e design etico.</p>
            <div className="test-footer-grid">
              <a href="mailto:artalo.lab@gmail.com" className="test-footer-link">
                <FaEnvelope /> artalo.lab@gmail.com
              </a>
              <a href="tel:+393392530535" className="test-footer-link">
                <FaPhone /> +39 339 253 0535
              </a>
              <p className="test-footer-link test-footer-address">
                <FaMapMarkerAlt /> Via Valle della Foresta 6, 00062 Bracciano (RM)
              </p>
            </div>

            <div className="test-footer-socials">
              <a href="https://www.instagram.com/artalolab__" target="_blank" rel="noreferrer"> <FaInstagram /> Instagram </a>
              <a href="https://www.facebook.com/artalo.lab" target="_blank" rel="noreferrer"> <FaFacebook /> Facebook </a>
              <a href="https://www.tiktok.com/@artalolab" target="_blank" rel="noreferrer"> <FaTiktok /> TikTok </a>
              <a href="https://www.youtube.com/@Artaloartalo" target="_blank" rel="noreferrer"> <FaYoutube /> YouTube </a>
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
    </div>
  );
}
