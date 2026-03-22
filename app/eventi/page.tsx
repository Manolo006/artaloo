"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const eventiEmphasisTerms = [
  "materiali di scarto",
  "riciclo",
  "sostenibilità",
  "comunità",
  "ARTALO",
  "diversamente abili",
  "salvaguardia degli ecosistemi marini",
  "rispetto per la natura",
  "creatività",
  "spiaggia",
];

function emphasizeEventText(text: string) {
  const escapedTerms = eventiEmphasisTerms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );

  const regex = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  return text
    .split(regex)
    .filter(Boolean)
    .map((part, index) => {
      const isMatch = eventiEmphasisTerms.some(
        (term) => term.toLowerCase() === part.toLowerCase(),
      );

      return isMatch ? <strong key={index}>{part}</strong> : part;
    });
}

const eventiItems = [
  {
    slug: "workshop-creativi",
    name: "Workshop Creativi",
    description:
      "Sessioni di apprendimento pratico su come trasformare i materiali di scarto in opere d'arte.",
    gallery: [
      { src: "./eventi/laboratori_1.jpg", alt: "Workshop creativi - attività" },
      { src: "./eventi/laboratori_2.jpg", alt: "Workshop creativi - laboratorio" },
    ],
  },
  {
    slug: "lab",
    name: "LAB",
    description: `Nei nostri laboratori organizziamo sessioni interattive in cui i partecipanti possono imparare a trasformare materiali di scarto in opere d'arte uniche. Utilizziamo carta, plastica spiaggiata, tessuti in disuso e altri materiali di scarto per creare oggetti decorativi, giochi, accessori, elementi d’arredo e molto altro. Ogni laboratorio è guidato da esperti creativi che condividono tecniche e idee innovative.

Partecipare ai nostri laboratori non è solo un modo divertente per esprimere la propria creatività, ma è anche un'opportunità per sensibilizzare grandi e piccini sull'importanza del riciclo e della sostenibilità. Imparare a dare nuova vita agli oggetti ci aiuta a ridurre i rifiuti e a proteggere il nostro pianeta.`,
    gallery: [
      { src: "./eventi/laboratori_1.jpg", alt: "LAB - laboratorio 1" },
      { src: "./eventi/laboratori_2.jpg", alt: "LAB - laboratorio 2" },
    ],
  },
  {
    slug: "diversamente-creativi",
    name: "Diversamente Creativi",
    description: `ARTALO si muove e può raggiungere chiunque.

Tutti possono diventare artisti e creatori, ognuno con le proprie diverse abilità. ARTALO raggiunge i centri e le associazioni preposte a sostegno delle persone diversamente abili, affinché attraverso il suo verbo tutti possano esprimere la propria individualità.

Attualmente in collaborazione con A.P.S Nuove Frontiere.`,
    gallery: [
      { src: "./eventi/diversamente_creativi.jpeg", alt: "Diversamente Creativi - attività 1" },
      { src: "./eventi/diversamente_creativi_2.jpeg", alt: "Diversamente Creativi - attività 2" },
    ],
  },
  {
    slug: "plastic-cleaning-days",
    name: "Plastic Cleaning Days - Un Mare di Pulizia",
    description: `Le giornate dedicate alla pulizia della spiaggia sono eventi speciali che uniscono comunità, famiglie e amici con un obiettivo comune: preservare la bellezza del nostro ambiente marino.

Volontari di tutte le età si radunano, armati di guanti, sacchi per la spazzatura e tanta voglia di fare. L'atmosfera è carica di entusiasmo e spirito di collaborazione.

Durante queste giornate, i partecipanti si dividono in gruppi e si avventurano lungo la spiaggia, raccogliendo rifiuti di ogni genere: plastica, bottiglie, mozziconi di sigaretta e altri materiali che non dovrebbero trovarsi in un luogo così bello. Ogni sacco riempito rappresenta un passo verso un ambiente più pulito e sano.

Oltre alla pulizia, queste giornate offrono anche l'opportunità di sensibilizzare le persone sull'importanza della salvaguardia degli ecosistemi marini. Vengono organizzati momenti di informazione e attività ludiche ed artistiche per i più piccoli, per insegnare loro l'importanza del rispetto per la natura.

In sintesi, le giornate dedicate alla pulizia della spiaggia sono un modo fantastico per prendersi cura del nostro ambiente, divertirsi e fare nuove amicizie!`,
    gallery: [
      { src: "./eventi/plastic_bliz_2.jpg", alt: "Plastic cleaning days - foto 2" },
      { src: "./eventi/plastic_bliz_3.jpg", alt: "Plastic cleaning days - foto 3" },
    ],
  },
];

function EventiCarousel({ gallery, label }: { gallery: { src: string; alt: string }[]; label: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = gallery.length;
  const lastInteractionRef = useRef<number>(Date.now());

  const markInteraction = () => {
    lastInteractionRef.current = Date.now();
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      const now = Date.now();
      if (now - lastInteractionRef.current >= 5000) {
        setActiveIndex((prev) => (prev + 1) % total);
        lastInteractionRef.current = now;
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [total]);

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
            <img src={media.src} alt={media.alt} className="opere-card-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventiPage() {
  return (
    <div className="page page-bg-green">
      <section className="section hero hero-alt">
        <div className="section-inner">
          <p className="section-kicker">Eventi</p>
          <h1 className="section-title">Attività ARTALO</h1>
          <p className="section-subtitle">
            Workshop, laboratori ed eventi sul territorio: <strong>recupero creativo</strong>,
            <strong> sensibilizzazione ambientale</strong> e partecipazione attiva della <strong>comunità</strong>.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/opere">
              Scopri le opere
            </Link>
            <Link className="button button-secondary" href="/servizi">
              Vedi i servizi
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner opere-list">
          {eventiItems.map(({ slug, name, description, gallery }) => (
            <article className="opere-card" key={slug}>
              <div className="opere-card-media">
                <EventiCarousel gallery={gallery} label={name} />
              </div>
              <div className="opere-card-content">
                <h3>{name}</h3>
                <p>{emphasizeEventText(description)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}