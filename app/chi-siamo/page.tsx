import Link from "next/link";
import { FaHeart, FaUsers, FaLeaf } from "react-icons/fa";

export default function ChiSiamoPage() {
  return (
    <div className="page page-bg-viola page-chi-siamo">
      <section className="section hero hero-alt">
        <div className="section-inner">
          <p className="section-kicker">Chi siamo</p>
          <h1 className="section-title">About me · Martina Troiano</h1>
          <p className="section-subtitle">
            <strong>Artalo</strong> è una startup ideata e promossa da{" "}
            <strong>Martina Troiano</strong>: un progetto che unisce arte,
            artigianato, <strong>sostenibilità</strong> e{" "}
            <strong>attivismo ambientale</strong>.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=artalo.lab@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Scrivici
            </a>
            <Link className="button button-secondary" href="/eventi">
              Vedi gli eventi
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <article className="manifesto">
            <h2 className="section-title" style={{ marginTop: 0 }}>ABOUT ME</h2>
            <p className="section-subtitle" style={{ maxWidth: "none", whiteSpace: "pre-line" }}>
              <>
                Artalo è una start up ideata e promossa da <strong>Martina Troiano</strong>; La quale dopo gli studi all'istituto d'arte di Napoli, ha conseguito una laurea in Scenografia per il Cinema e Teatro alla Wimbledon School of Art di Londra, incrementato con un Erasmus di sei mesi all'università del Teatro di Barcellona.
                {"\n\n"}
                Ha Lavorato sia nel cinema che nel teatro, sperimentando sempre più l’arte dell'<strong>upcycling</strong>.
                {"\n\n"}
                Oggi si definisce un’<strong>artivista</strong>, un’<strong>artigiana</strong> e con Artalo promuove la messa in opera di rinnovo e restyling di manufatti ripristinati da materiali destinati a discarica, oltre a creare opere d’arte realizzate esclusivamente con materiali di scarto, promotrici di messaggi di sensibilizzazione alla <strong>tutela ambientale</strong>.
              </>
            </p>
          </article>

          <article className="hero-art">
            <img
              src="./foto_martina.png"
              alt="Martina Troiano"
              className="hero-photo"
            />
            <div className="hero-photo-caption">
              <p className="hero-photo-name">Martina Troiano</p>
              <p className="hero-photo-role">Fondatrice · Artivista · Artigiana</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <article className="manifesto chi-siamo-block chi-siamo-text-focus">
            <h2 className="section-title">My History</h2>
            <p className="section-subtitle" style={{ maxWidth: "none", whiteSpace: "pre-line" }}>
              <>
                L’arte del upcycling e l’amore per l’ambiente hanno sempre fatto parte di me già dall’infanzia. Raccoglievo da terra i petali dei fiori per colorare e per farne dei profumi inventati, cucivo abiti per le mie bambole con avanzi di stoffa e salvavo tutti gli animali in pericolo, addirittura aiutavo le lumache ad attraversare la strada. Sicuramente ciò che ha influenzato la mia indole è stata una nonna artista, pittrice e ceramista, una madre creativa ed indipendente, vetrinista e sempre pronta a trovare una soluzione a tutto ed un padre che ha vissuto la sua infanzia durante la seconda guerra mondiale e che quindi mi ha trasmesso l’importanza del <strong>NON SPRECO</strong>, del riciclare dell’ottimizzare. Sono cresciuta tra i racconti dei bombardamenti e di come la gente si ingegnava per andare avanti, di come mio nonno raccoglieva le lamiere degli aeri caduti per lavorarli e trasformarli in coperchi per pentole, e i colori di mia nonna che non si limitavano alle tele ma decoravano ogni cosa, mobili, pareti e vestiti.
                {"\n"}
                E la mia mamma, che ha tirato su me e mio fratello da sola, ci coinvolgeva nell’aiutarla per la creazione delle vetrine da allestire che le commissionavano, sempre piene di idee creative. Oggi mi capita di soffermarmi a guardare una stoffa che ho cucito a soli 4 anni, e mi sorprende il fatto che mi avessero dato un ago in mano a quell'età eppure guardo stupita quel pezzo di stoffa e rivedo tutta la mia creatività e l’amore per il riciclo.
                {"\n\n"}
                Finita l’università ho avuto due figli, poi una separazione molto difficile dove, caduta vittima di un narcisista ho perso di vista me stessa, fortunatamente però, grazie anche ad un bellissimo percorso offerto dal centro antiviolenza, sono riuscita a lottare per me e per i miei due meravigliosi figli. Sono rinata, e come faccio con gli scarti, mi sono donata una <strong>seconda vita</strong> ed ho ripreso a fare arte, dedicando il mio tempo alle energie positive, all'amore per i dettagli, per me stessa e per mi mi circonda e soprattutto al <strong>rispetto per l’ambiente</strong>
                {"\n\n"}
                Da cosa nasce il nome <strong>ARTALO</strong>?
                {"\n\n"}
                <strong>ARTALO</strong> è un verbo che abbiamo coniato una sera a tavola con i miei figli; gli chiesi:
                {"\n\n"}
                - “Ma come direste voi, se io volessi dire, prendi questo coso e artisticalo?
                {"\n\n"}
                E loro nel linguaggi di quel momento da videogamer mi risposero
                {"\n\n"}
                - “<strong>ARTALO!</strong>”
              </>
            </p>
            <img
              src="./chi_siamo/hystory.jpg"
              alt="My History"
              className="hero-photo chi-siamo-inline-image"
            />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <article className="manifesto chi-siamo-block chi-siamo-text-focus">
            <h2 className="section-title" style={{ marginTop: 0 }}>PROJECT</h2>
            <p className="section-subtitle" style={{ maxWidth: "none", whiteSpace: "pre-line" }}>
              <>
                L'esigenza del progetto nasce dalla necessità di <strong>ridurre la quantità di rifiuti non riciclabili</strong>, il bisogno è quindi di potenziare la capacità e rafforzare l'<strong>economia circolare</strong> attraverso <strong>Innovazione, Ricerca, Riparazione e Riutilizzo</strong>.
                {"\n\n"}
                Un progetto in collaborazione con le regione ed enti privati locali, volto a dare vita ad esempi di innovazione e attenzione al recupero. Un vero e proprio <strong>centro di sensibilizzazione</strong>, di arte e condivisione.
                {"\n\n"}
                Un centro di riciclo creativo, che mette in comunicazione gli enti interessati creando un circuito che va a sostegno dell'alleggerimento della quantità di rifiuti da smaltire e alla sensibilizzazione rispetto alle <strong>problematiche ambientali</strong> sia del cittadino che delle scolaresche coinvolte in workshop ed eventi.
              </>
            </p>
            <img
              src="./chi_siamo/project.jpg"
              alt="Project"
              className="hero-photo chi-siamo-inline-image"
            />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <article className="manifesto chi-siamo-block chi-siamo-text-focus">
            <h2 className="section-title" style={{ marginTop: 0 }}>MISSION</h2>
            <p className="section-subtitle" style={{ maxWidth: "none", whiteSpace: "pre-line" }}>
              <>
                L'obiettivo del progetto è quello di alleggerire la quantità di rifiuti non riciclabili, coadiuvare in un circuito, dove ogni attore nell'ambito del trasloco e non solo, possa collaborare con responsabilità affinché il materiale di scarto sia <strong>ridotto al minimo</strong>. Una sede di attività formative, work shop, seminari ed eventi per la diffusione di <strong>buone pratiche di sostenibilità ambientale</strong> e di economia circolare, che può contare sull’impegno quotidiano di ITER e sulla collaborazione e il lavoro di tante persone, enti e istituzioni. Attraverso la riduzione dell’impiego di risorse, del degrado e dell’inquinamento nell’intero ciclo produttivo.
                {"\n\n"}
                Artalo intende promuovere un <strong>nuovo modello di sviluppo sostenibile</strong> e si propone di diventare punto di riferimento per le giovani generazioni, in sintonia con la grande attenzione del momento attuale rispetto alla <strong>difesa del Pianeta</strong>.
                {"\n\n"}
                Per una crescita sostenibile, finalizzata alla <strong>sostenibilità economica, sociale, ambientale e territoriale</strong>
                {"\n\n"}
                Offre inoltre un notevole sviluppo di economia circolare sul territorio, sollevando il lavoro, gli spazi e le spese delle isole ecologiche, alleggerendo i costi di smaltimento comunali, eliminando gli accumuli di rifiuti ingombranti, oltre ad una diminuzione dei costi del privato che deve smaltire e di conseguenza una maggiore redditività per gli attori coinvolti. Inoltre crea nuovi posti di lavoro conciliabili anche con l'accogliere donne vittime di violenza. Altro effetto positivo è quello di sensibilizzare le persone a recuperare ed ottenere comunque un ottimo prodotto con una spesa inferiore riducendo così i costi e l'inquinamento di produzione.
              </>
            </p>
            <img
              src="./chi_siamo/mission.jpeg"
              alt="Mission"
              className="hero-photo chi-siamo-inline-image"
            />
          </article>
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

      <section className="section">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2 className="section-title">Unisciti a noi</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Contattaci per saperne di più su ciò che facciamo e su come puoi
            partecipare.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link className="button button-primary" href="/contatti">
              Vai ai contatti
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}