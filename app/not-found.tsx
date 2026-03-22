import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page page-bg-mixed">
      <section className="section hero hero-alt">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <p className="section-kicker">Errore 404</p>
          <h1 className="section-title">Pagina non trovata</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link className="button button-primary" href="/">
              Torna alla home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}