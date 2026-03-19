import Link from "next/link";
import { FaChair, FaLightbulb, FaPaintBrush } from "react-icons/fa";

export default function OperePage() {
  return (
    <div className="page">
      <section className="section hero hero-alt">
        <div className="section-inner">
          <p className="section-kicker">Opere</p>
          <h1 className="section-title">Opere e collezioni ARTALO</h1>
          <p className="section-subtitle">
            Ogni pezzo nasce da materiali recuperati e prende vita in collezioni
            a tiratura limitata, pensate per ambienti poetici e sostenibili.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/servizi">
              Scopri i servizi
            </Link>
            <Link className="button button-secondary" href="/eventi">
              Vedi gli eventi
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid">
          <div className="card">
            <span className="icon">
              <FaChair />
            </span>
            <h3>Linea Pallet</h3>
            <p>
              Sedute, tavolini e moduli morbidi per spazi lounge, con superfici
              trattate a mano e finiture opache.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <FaLightbulb />
            </span>
            <h3>Luci Rifratte</h3>
            <p>
              Lampade con vetro recuperato e dettagli cromatici ispirati alle
              sfumature del logo ARTALO.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <FaPaintBrush />
            </span>
            <h3>Edizioni Artistiche</h3>
            <p>
              Collaborazioni con artisti locali per trasformare scarti urbani in
              pezzi da collezione unici.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}