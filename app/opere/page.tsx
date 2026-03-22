"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

type OpereItem = {
  slug: string;
  name: string;
  description: string;
  image?: string;
  gallery?: GalleryItem[];
};

const opereItems: OpereItem[] = [
  {
    slug: "the-electric-city",
    name: "Città elettronica futuristica",
    description: `Questa è stata sicuramente una delle mie prime opere realizzate con materiali di scarto, l’ho realizzata per il Degree Show nell’ultimo anno universitario (2005). Avevo recuperato dai miei compagni di studio tutti i loro telefoni rotti, televisori, in realtà qualsiasi device in distruzione.

Poi assieme ai miei scarti scenografici, cavi elettrici, lampadine e plastiche varie tra le quali bottiglie, avevo costruito questo modellino, scenografia di una città elettronica futuristica, ambientazione di una mia personale rivisitazione della storia di Giacomino e il fagiolo magico.`,
    image: "./opere/the_electric_city.JPG",
  },
  {
    slug: "generazione-di-microplastiche",
    name: "Generazione delle Microplastiche",
    description: `“Generazione delle Microplastiche” è l’opera che ho realizzato per la XIX edizione della mostra internazionale promossa da Riarteco, dedicata alle creazioni sviluppate attraverso materiali di scarto e rifiuti.

Viviamo in un’epoca in cui le microplastiche sono ovunque. Invisibili, ubiquitarie, insinuate nell’aria che respiriamo, nei fondali marini, nei fiumi, nel cibo, nel nostro corpo. Sono state rinvenute persino nel latte materno.

Ho raccolto la plastica direttamente dalla spiaggia, seguendo l’idea che l’opera dovesse nascere non dalla rappresentazione, ma dalla presenza reale del problema. Gli scarti diventano così il materiale con cui ricreo un feto custodito nel grembo di una figura femminile.

L’opera diventa un’immagine sospesa tra denuncia e fragilità, un invito a riflettere sul rapporto intimo e ormai irreversibile tra l’umano e l’artificiale.`,
    image: "./opere/generazione_di_microplastiche.png",
  },
  {
    slug: "singolarita",
    name: "Singolarità (verso l’infinito)",
    description: `Materiali di recupero: rete di pollaio, specchio, fieno

In Singolarità (verso l’infinito) il corpo umano si configura come soglia e luogo di passaggio, un punto di contatto tra la dimensione materiale e quella invisibile.

Lo specchio assume il valore simbolico dell’acqua primordiale: superficie riflettente e varco capace di mettere in comunicazione mondi differenti. Il corpo diventa ponte tra terra, cielo e Io.

Il titolo rimanda al concetto di singolarità della fisica teorica, trasformato in metafora di un luogo interiore estremo, in cui l’Io si dissolve per aprirsi a una dimensione infinita.`,
    image: "./opere/singolarita.png",
  },
  {
    slug: "gabbia-del-potere",
    name: "Gabbia del potere",
    description: `La gabbia del potere è stata premiata all’interno del progetto “CONTEST-ECO | Il Festival della Sostenibilità”, promosso da Roma Capitale Assessorato alla Cultura.

L’opera si presenta come un mondo intrappolato in una struttura composta da plastica e denaro, materiali che evocano le dinamiche economiche e consumistiche della società contemporanea.

La scelta di utilizzare esclusivamente materiali di scarto e plastica spiaggiata conferisce all’opera una dimensione concreta e tangibile, rafforzata dal coinvolgimento scientifico sul territorio.

Per la sua forza espressiva e l’uso consapevole dei materiali, l’opera ha ricevuto il Primo Premio Categoria Artisti Professionisti.`,
    gallery: [
      { type: "image", src: "./opere/gabbia_del_potere/progetto.JPG", alt: "Gabbia del potere - progetto" },
      { type: "image", src: "./opere/gabbia_del_potere/gabbia_del_potere.JPG", alt: "Gabbia del potere - lavorazione" },
      { type: "image", src: "./opere/gabbia_del_potere/gabbia_finito.jpg", alt: "Gabbia del potere - opera finita" },
      { type: "image", src: "./opere/gabbia_del_potere/mappamondo.jpg", alt: "Gabbia del potere - dettaglio mappamondo" },
      { type: "image", src: "./opere/gabbia_del_potere/mano.jpg", alt: "Gabbia del potere - dettaglio mano" },
      { type: "video", src: "./opere/gabbia_del_potere/mappamondo_gira.mp4", alt: "Gabbia del potere - video" },
    ],
  },
];

const opereEmphasisTerms = [
  "Materiali di recupero",
  "materiali di scarto",
  "microplastiche",
  "plastica",
  "corpo umano",
  "specchio",
  "singolarità",
  "dimensione infinita",
  "sostenibilità",
  "riciclo",
  "economia circolare",
  "Primo Premio Categoria Artisti Professionisti",
  "denuncia",
  "fragilità",
  "sviluppo sostenibile",
];

function emphasizeText(text: string) {
  const escapedTerms = opereEmphasisTerms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );

  const regex = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  return text
    .split(regex)
    .filter(Boolean)
    .map((part, index) => {
      const isMatch = opereEmphasisTerms.some(
        (term) => term.toLowerCase() === part.toLowerCase(),
      );

      return isMatch ? <strong key={index}>{part}</strong> : part;
    });
}

function OpereCarousel({ gallery, label }: { gallery: GalleryItem[]; label: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = gallery.length;
  const lastInteractionRef = useRef<number>(Date.now());

  const markInteraction = () => {
    lastInteractionRef.current = Date.now();
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      const now = Date.now();
      const activeMedia = gallery[activeIndex];
      const waitTime = activeMedia?.type === "video" ? 10000 : 5000;

      if (now - lastInteractionRef.current >= waitTime) {
        setActiveIndex((prev) => (prev + 1) % total);
        lastInteractionRef.current = now;
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [total, activeIndex, gallery]);

  return (
    <div
      className="opere-carousel"
      aria-label={`Carosello ${label}`}
      onMouseMove={markInteraction}
      onMouseDown={markInteraction}
      onTouchStart={markInteraction}
      onWheel={markInteraction}
      onKeyDown={markInteraction}
    >
      <div className="opere-carousel-track">
        {gallery.map((media, index) => (
          <div
            className={`opere-carousel-slide ${index === activeIndex ? "is-active" : ""}`}
            key={`${label}-${index}`}
          >
            {media.type === "video" ? (
              <video
                className={`opere-card-image ${media.src.includes("mappamondo_gira.mp4") ? "opere-card-image-zoomed" : ""}`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={media.src} />
                Il tuo browser non supporta il video.
              </video>
            ) : (
              <img
                src={media.src}
                alt={media.alt}
                className="opere-card-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OperePage() {
  return (
    <div className="page page-bg-blue">
      <section className="section hero hero-alt">
        <div className="section-inner">
          <p className="section-kicker">Opere</p>
          <h1 className="section-title">Opere e collezioni ARTALO</h1>
          <p className="section-subtitle">
            Ogni pezzo nasce da <strong>materiali recuperati</strong> e prende vita in collezioni
            a tiratura limitata, pensate per ambienti poetici e <strong>sostenibili</strong>.
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
        <div className="section-inner opere-list">
          {opereItems.map(({ slug, name, description, image, gallery }) => (
            <article className="opere-card" key={slug}>
              <div className="opere-card-media">
                {gallery ? (
                  <OpereCarousel gallery={gallery} label={name} />
                ) : (
                  <img src={image} alt={name} className="opere-card-image" />
                )}
              </div>
              <div className="opere-card-content">
                <h3>{name}</h3>
                <p>{emphasizeText(description)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}