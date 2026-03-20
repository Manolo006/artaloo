"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinks from "./nav-links";

export default function NavShell() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="nav-stack">
        <div className="nav-inner">
          <Link className="nav-brand" href="/">
            <img src="./logo.svg" alt="Logo ARTALO" />
            <span className="brand-logo">ARTALO</span>
          </Link>
          <input
            className="nav-toggle-check"
            type="checkbox"
            id="burger-menu"
            aria-label="Apri o chiudi menu di navigazione"
          />
          <label className="burger" htmlFor="burger-menu" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
