(() => {
  const page = document.body.dataset.page || "home";

  const navItems = [
    { id: "home", href: "index.html", label: "Home" },
    { id: "opere", href: "opere.html", label: "Opere" },
    { id: "eventi", href: "eventi.html", label: "Eventi" },
    { id: "servizi", href: "servizi.html", label: "Servizi" },
    { id: "chi-siamo", href: "chi-siamo.html", label: "Chi siamo" },
    { id: "contatti", href: "contatti.html", label: "Contatti" },
  ];

  function renderHeader() {
    const headerRoot = document.getElementById("site-header");
    if (!headerRoot) return;

    const links = navItems
      .map((item) => {
        const isActive = item.id === page ? "is-active" : "";
        const ariaCurrent = item.id === page ? 'aria-current="page"' : "";
        return `<a href="${item.href}" class="${isActive}" ${ariaCurrent}>${item.label}</a>`;
      })
      .join("");

    headerRoot.innerHTML = `
      <nav class="nav">
        <div class="nav-stack">
          <div class="nav-inner">
            <a class="nav-brand" href="index.html">
              <img src="../public/logo.svg" alt="Logo ARTALO" />
              <span class="brand-logo">ARTALO</span>
            </a>
            <input
              class="nav-toggle-check"
              type="checkbox"
              id="burger-menu"
              aria-label="Apri o chiudi menu di navigazione"
            />
            <label class="burger" for="burger-menu" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div class="nav-links">${links}</div>
          </div>
        </div>
      </nav>
    `;

    const nav = headerRoot.querySelector(".nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 24) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = headerRoot.querySelector("#burger-menu");
    headerRoot.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        if (toggle) toggle.checked = false;
      });
    });
  }

  function renderFooter() {
    const footerRoot = document.getElementById("site-footer");
    if (!footerRoot) return;

    const collabs = [
      {
        href: "https://www.riarteco.it/core/",
        logo: "../public/collaboratori/riarteco.jpg",
        label: "Riarteco",
      },
      {
        href: "https://www.associazionenuovefrontiere.org/",
        logo: "../public/collaboratori/logo%20niove%20frontiere.png",
        label: "Associazione Nuove Frontiere",
      },
      {
        href: "https://www.facebook.com/CustodidellaPaludediTorreFlavia/",
        logo: "../public/collaboratori/logo%20I%20Custodi%20di%20Torre%20Flavia.jpeg",
        label: "I Custodi di Torre Flavia",
      },
      {
        href: "https://terzoparadiso.org/",
        logo: "../public/collaboratori/logo%203paradiso.jpg",
        label: "Terzo Paradiso",
      },
      {
        href: "https://www.lazioinnova.it/",
        logo: "../public/collaboratori/lazio-innova.jpg",
        label: "Lazio Innova",
      },
      {
        href: "https://cittadellarte.it/it",
        logo: "../public/collaboratori/fondazione%20pistoletto%20logo.jpg",
        label: "Cittadellarte / Fondazione Pistoletto",
      },
    ];

    footerRoot.innerHTML = `
      <footer class="footer site-footer">
        <div class="site-footer-inner">
          <div class="site-footer-main">
            <p class="site-footer-brand">ARTALO · Recupero creativo, sostenibilità e design etico.</p>
            <div class="site-footer-grid">
              <a class="site-footer-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=artalo.lab@gmail.com" target="_blank" rel="noreferrer">✉ artalo.lab@gmail.com</a>
              <a class="site-footer-link" href="tel:+393392530535">☎ +39 339 253 0535</a>
              <a class="site-footer-link site-footer-address" href="https://www.google.com/maps?q=Via+Valle+della+Foresta+6,+Bracciano+RM" target="_blank" rel="noreferrer">⌖ Via Valle della Foresta 6, 00062 Bracciano (RM)</a>
            </div>
            <div class="site-footer-socials">
              <a href="https://www.instagram.com/artalolab__" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/artalo.lab" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.tiktok.com/@artalolab" target="_blank" rel="noreferrer">TikTok</a>
              <a href="https://www.youtube.com/@Artaloartalo" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>

          <div class="site-footer-collabs">
            <p class="site-footer-collabs-title">Collaborazioni</p>
            <div class="site-footer-collabs-grid">
              ${collabs
                .map(
                  (c, i) => {
                    const formats = ["wide", "wide", "wide", "square", "wide", "wide"];
                    const format = formats[i] || "wide";
                    return `<a class="site-footer-collab-item format-${format}" href="${c.href}" target="_blank" rel="noreferrer"><span class="site-footer-collab-logo-wrap"><img class="site-footer-collab-logo" src="${c.logo}" alt="${c.label}" /></span></a>`;
                  },
                )
                .join("")}
            </div>
            <p class="site-footer-privacy"><a href="privacy.html">Informativa sulla Privacy</a></p>
          </div>
        </div>
      </footer>
    `;
  }

  function renderCookieBanner() {
    const root = document.getElementById("cookie-root");
    if (!root) return;

    const key = "artalo-cookie-consent";
    if (localStorage.getItem(key)) return;

    root.innerHTML = `
      <div class="cookie-banner" role="dialog" aria-label="Informativa cookie">
        <div class="cookie-banner-inner">
          <h5 class="cookie-banner-title">La tua privacy è importante per noi</h5>
          <p class="cookie-banner-text">
            Trattiamo i tuoi dati personali per misurare e migliorare i nostri contenuti.
            Per maggiori informazioni consulta la <a href="privacy.html" class="cookie-banner-link">Informativa sulla privacy</a>.
          </p>
          <button class="cookie-banner-more" type="button" data-cookie="rejected">Rifiuta</button>
          <button class="cookie-banner-accept" type="button" data-cookie="accepted">Accetta</button>
        </div>
      </div>
    `;

    root.querySelectorAll("[data-cookie]").forEach((btn) => {
      btn.addEventListener("click", () => {
        localStorage.setItem(key, btn.dataset.cookie);
        root.innerHTML = "";
      });
    });
  }

  function initCarousels() {
    document.querySelectorAll(".opere-carousel, .carousel").forEach((carousel) => {
      const isOpereCarousel = carousel.classList.contains("opere-carousel");
      const slideSelector = isOpereCarousel ? ".opere-carousel-slide" : ".slide";
      const activeClass = isOpereCarousel ? "is-active" : "active";

      const slides = Array.from(carousel.querySelectorAll(slideSelector));
      if (slides.length < 2) return;

      let index = 0;
      const interval = Number(carousel.dataset.interval || 5000);

      setInterval(() => {
        slides[index].classList.remove(activeClass);
        index = (index + 1) % slides.length;
        slides[index].classList.add(activeClass);
      }, interval);
    });
  }

  function initCopyEmail() {
    const buttons = document.querySelectorAll("[data-copy-email]");
    const toast = document.getElementById("link-toast");
    if (!buttons.length || !toast) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const email = btn.getAttribute("data-copy-email");
        if (!email) return;

        try {
          await navigator.clipboard.writeText(email);
          toast.textContent = "Email copiata con successo!";
        } catch {
          toast.textContent = `Copia manualmente: ${email}`;
        }

        toast.hidden = false;
        setTimeout(() => {
          toast.hidden = true;
        }, 2200);
      });
    });
  }

  renderHeader();
  renderFooter();
  renderCookieBanner();
  initCarousels();
  initCopyEmail();
})();