import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informativa Privacy | ARTALO",
  description: "Informativa sul trattamento dei dati personali per il sito ARTALO.",
};

export default function PrivacyPage() {
  return (
    <div className="page page-bg-mixed privacy-page">
      <main className="privacy-container">
        <header className="privacy-header">
          <p className="privacy-eyebrow">ARTALO · Informazioni legali</p>
          <h1>Informativa sulla Privacy</h1>
          <p>
            La presente informativa descrive le modalità di trattamento dei dati personali degli
            utenti che visitano il sito ARTALO, in conformità al Regolamento (UE) 2016/679 (GDPR)
            e alla normativa italiana applicabile.
          </p>
          <p className="privacy-updated">Ultimo aggiornamento: 22 marzo 2026</p>
        </header>

        <div className="privacy-sections">
          <section>
            <h2>1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento è ARTALO. Per qualsiasi richiesta in materia di privacy è
              possibile contattarci tramite i recapiti pubblicati sul sito.
            </p>
          </section>

          <section>
            <h2>2. Categorie di dati trattati</h2>
            <p>Nel contesto della navigazione sul sito possono essere trattati:</p>
            <ul>
              <li>dati tecnici di navigazione (es. indirizzo IP, browser, dispositivo);</li>
              <li>dati forniti volontariamente dall&apos;utente tramite comunicazioni o moduli;</li>
              <li>dati relativi alle preferenze cookie espresse dall&apos;utente.</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalità e base giuridica</h2>
            <p>I dati sono trattati per le seguenti finalità:</p>
            <ul>
              <li>garantire il corretto funzionamento e la sicurezza del sito;</li>
              <li>rispondere alle richieste inviate dall&apos;utente;</li>
              <li>
                analizzare e migliorare i servizi offerti; ove richiesto, sulla base del consenso
                dell&apos;interessato.
              </li>
            </ul>
            <p>
              Le basi giuridiche sono l&apos;esecuzione di misure precontrattuali, l&apos;adempimento di
              obblighi legali, il legittimo interesse del Titolare e, quando necessario, il
              consenso dell&apos;utente.
            </p>
          </section>

          <section>
            <h2>4. Periodo di conservazione</h2>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario al
              perseguimento delle finalità sopra indicate, salvo eventuali obblighi normativi che
              richiedano tempi di conservazione diversi.
            </p>
          </section>

          <section>
            <h2>5. Diritti dell&apos;interessato</h2>
            <p>
              Ai sensi degli articoli 15-22 del GDPR, l&apos;utente può esercitare i diritti di accesso,
              rettifica, cancellazione, limitazione, opposizione e portabilità dei dati, nonché
              revocare il consenso in qualsiasi momento.
            </p>
          </section>

          <section id="cookie">
            <h2>6. Cookie</h2>
            <p>
              Il sito utilizza cookie tecnici necessari al funzionamento. Eventuali cookie
              aggiuntivi vengono gestiti sulla base delle preferenze espresse dall&apos;utente tramite il
              cookie banner.
            </p>
          </section>

          <section>
            <h2>7. Reclamo all&apos;Autorità di controllo</h2>
            <p>
              Se ritieni che il trattamento dei tuoi dati avvenga in violazione della normativa,
              hai il diritto di proporre reclamo al Garante per la protezione dei dati personali.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}