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
    <div className="page">
      <header className="hero" id="home">
        <div className="hero-inner">
          <div>
            <span className="badge">
              <FaRecycle /> Recupero creativo e sostenibilità
            </span>
            <h1 className="hero-title hero-title-edo">
              ARTALO dà nuova vita agli scarti con <span>design poetico</span>.
            </h1>
            <p className="hero-text">
              ARTALO è un laboratorio di sostenibilità e creatività che recupera
              materiali destinati alla discarica e li trasforma in oggetti unici,
              fatti a mano e pieni di storia.
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
            <strong>Materia in evoluzione</strong>
            <p className="hero-text" style={{ marginTop: "0.8rem" }}>
              Ogni oggetto nasce da un gesto creativo: pulire, ripensare,
              intrecciare. Il risultato è un design autentico che racconta il suo
              passato.
            </p>
            <div className="hero-art-grid">
              <div className="pill">
                <FaCube /> Pallet rigenerati
              </div>
              <div className="pill">
                <FaLeaf /> Vetro recuperato
              </div>
              <div className="pill">
                <FaRecycle /> Metallo second-life
              </div>
              <div className="pill">
                <FaPaintBrush /> Tessuti ritrovati
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-inner split">
          <div>
            <h2 className="section-title">Un ecosistema creativo</h2>
            <p className="section-subtitle">
              ARTALO è un progetto di sostenibilità e creatività che trasforma
              scarti destinati alla discarica in design unici. Ogni collezione è
              una storia di rinascita.
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
              Crediamo che la creatività possa guidare il cambiamento. Ogni
              oggetto è un gesto di cura verso la Terra.
            </p>
            <ul>
              <li>
                <FaLeaf /> Design lento e consapevole
              </li>
              <li>
                <FaRecycle /> Materiali salvati dalla discarica
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

      <footer className="footer">
        ARTALO · Recupero creativo, sostenibilità e design etico.
      </footer>
    </div>
  );
}
