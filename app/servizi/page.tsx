import Link from "next/link";
import { FaRecycle, FaPalette, FaHammer } from "react-icons/fa";

export default function ServiziPage() {
  return (
    <div className="page">
      <section className="section hero hero-alt">
        <div className="section-inner">
          <p className="section-kicker">Servizi</p>
          <h1 className="section-title">Servizi creativi e sostenibili</h1>
          <p className="section-subtitle">
            Dal recupero dei materiali al restyling emozionale, ARTALO propone
            percorsi su misura per aziende, eventi e community.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/chi-siamo">
              Collabora con noi
            </Link>
            <Link className="button button-secondary" href="/opere">
              Guarda le opere
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid">
          <div className="card">
            <span className="icon">
              <FaRecycle />
            </span>
            <h3>Raccolta e selezione</h3>
            <p>
              Individuiamo materiali destinati alla discarica e li selezioniamo
              con attenzione per garantire qualità e sicurezza.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <FaPalette />
            </span>
            <h3>Restyling emozionale</h3>
            <p>
              Palette ispirate al logo, texture naturali e dettagli cromatici
              per creare un’identità visiva coerente.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <FaHammer />
            </span>
            <h3>Produzione artigianale</h3>
            <p>
              Ogni pezzo è assemblato a mano, con finiture morbide e funzionali
              per dare nuova vita agli scarti.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}