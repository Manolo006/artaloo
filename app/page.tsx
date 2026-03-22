import Link from "next/link";
import {
  FaLeaf,
  FaPaintBrush,
  FaRecycle,
  FaArrowRight,
  FaCube,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="page page-bg-blue">
      <header className="hero" id="home">
        <div className="hero-inner">
          <div>
            <span className="badge">
              <FaRecycle /> Recupero creativo e sostenibilità
            </span>
            <h1 className="hero-title hero-title-edo">
              <span className="hero-brand-ar">AR</span>
              <span className="hero-brand-ta">TA</span>
              <span className="hero-brand-lo">LO</span> il modo bello di non sprecare.
            </h1>
            <p className="hero-text">
              <strong>ARTALO</strong> è un progetto di <strong>sostenibilità</strong> e creatività che contribuisce
             alla <strong>salvaguardia ambientale</strong>, attraverso il recupero e la
             trasformazione dei rifiuti destinati alla discarica,
             lavorando sul restyling per dare vita a nuovi prodotti di design unici e inimitabili.
             <br /><br />
             Abbraccia anche tu uno stile di vita più responsabile ed ecologico, perché affidando
             uno scarto ad <strong>ARTALO</strong> stai rimettendo in uso dei beni, contribuendo così all'<strong>economia circolare</strong>.
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
              src="./foto_martina.png"
              alt="Martina - progetto Artalo"
              className="hero-photo"
            />
            <div className="hero-photo-caption">
              <p className="hero-photo-name">Martina Troiano</p>
              <p className="hero-photo-role">Fondatrice · Artivista · Artigiana</p>
            </div>
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
              creando veri e propri elementi artistici. Artalo promuove il <strong>primo centro 
              di riciclo creativo in questo territorio, della Regione Lazio. L'obiettivo 
              </strong>
              è stimolare la cultura del riciclo e della trasformazione di oggetti, mobili 
              e tessuti. Sostenendo il <strong>valore ambientale, sociale ed economico</strong>, sottraendo 
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
              oggetto è un <strong>gesto di cura verso la Terra</strong>.
            </p>
            <ul>
              <li>
                <FaLeaf /> <strong>Design consapevole</strong>
              </li>
              <li>
                <FaRecycle /> <strong>Materiali di scarto e riciclo</strong>
              </li>
              <li>
                <FaPaintBrush /> <strong>Collaborazioni con comunità locali</strong>
              </li>
              <li>
                <FaCube /> <strong>Oggetti irripetibili e emotivi</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
