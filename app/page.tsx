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
              src="/foto_martina.png"
              alt="Martina - progetto Artalo"
              className="hero-photo"
            />
            <div className="hero-photo-caption">
              <p className="hero-photo-name">Martina Troiano</p>
              <p className="hero-photo-role">Fondatrice di ARTALO</p>
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
    </div>
  );
}
