import Link from "next/link";
import { FaHeart, FaUsers, FaLeaf } from "react-icons/fa";

export default function ChiSiamoPage() {
  return (
    <div className="page page-bg-viola">
      <section className="section hero hero-alt">
        <div className="section-inner">
          <p className="section-kicker">Chi siamo</p>
          <h1 className="section-title">Una community di design sostenibile</h1>
          <p className="section-subtitle">
            ARTALO è un collettivo di artigiani, designer e attivisti ambientali
            con base a Bari. Trasformiamo scarti in oggetti poetici e utili.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@artalo.art">
              Scrivici
            </a>
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
              <FaUsers />
            </span>
            <h3>Collaborazioni locali</h3>
            <p>
              Lavoriamo con artigiani e realtà del territorio per generare
              impatto sociale e ambientale.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <FaLeaf />
            </span>
            <h3>Materiali salvati</h3>
            <p>
              Selezioniamo legno, vetro e metalli destinati alla discarica e li
              rendiamo protagonisti.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <FaHeart />
            </span>
            <h3>Design emotivo</h3>
            <p>
              Oggetti che raccontano storie, con palette morbide ispirate al
              logo e finiture artigianali.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}