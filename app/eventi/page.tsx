import Link from "next/link";
import { FaCalendarAlt, FaHandsHelping, FaCity } from "react-icons/fa";

export default function EventiPage() {
  return (
    <div className="page">
      <section className="section hero hero-alt">
        <div className="section-inner">
          <p className="section-kicker">Eventi</p>
          <h1 className="section-title">Eventi e installazioni</h1>
          <p className="section-subtitle">
            ARTALO organizza workshop, installazioni e residenze creative che
            portano il recupero artistico in spazi culturali e comunitari.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/opere">
              Scopri le opere
            </Link>
            <Link className="button button-secondary" href="/chi-siamo">
              Chi siamo
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner grid">
          <div className="card">
            <span className="icon">
              <FaCalendarAlt />
            </span>
            <h3>Laboratori aperti</h3>
            <p>
              Incontri pratici per sperimentare il recupero creativo con
              materiali raccolti sul territorio.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <FaCity />
            </span>
            <h3>Installazioni urbane</h3>
            <p>
              Micro scenografie sostenibili per trasformare piazze e spazi
              pubblici in luoghi narrativi.
            </p>
          </div>
          <div className="card">
            <span className="icon">
              <FaHandsHelping />
            </span>
            <h3>Residenze creative</h3>
            <p>
              Collaborazioni con artisti e designer per sviluppare nuove opere a
              partire dagli scarti locali.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}