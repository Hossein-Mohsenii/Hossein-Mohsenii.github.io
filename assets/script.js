// ================= Translations =================
const translations = {
  de: {
    "hero.eyebrow": "— Portfolio",
    "hero.role": "Student der Cognitive Science, TU Darmstadt",
    "hero.bio": "Student der Cognitive Science an der TU Darmstadt mit Grundlagen in Softwareentwicklung, Machine Learning und Datenanalyse. Verbindet analytisches Denken mit Kommunikationsstärke.",
    "hero.cta": "Kontakt aufnehmen",

    "tabs.about": "Über mich",
    "tabs.experience": "Erfahrung",
    "tabs.education": "Ausbildung",
    "tabs.skills": "Kenntnisse",
    "tabs.contact": "Kontakt",

    "about.p1": "Cognitive Science verbindet für mich Philosophie des Geistes, Informatik und Psychologie — genau diese Mischung aus konzeptionellem und analytischem Denken sowie Verständnis für Menschen bringe ich in jedes Projekt ein.",
    "about.f1l": "Standort",
    "about.f2l": "Studium",
    "about.f2v": "B.Sc. Cognitive Science",
    "about.f3l": "Hochschule",
    "about.f4l": "Fokus",
    "about.f4v": "Software & Kognition",

    "exp1.title": "Retail Sales Manager",
    "exp1.org": "L'Occitane en Provence · Werkstudium · Frankfurt am Main",
    "exp1.date": "2023 – Heute",
    "exp1.b1": "Schwerpunkt auf eigenverantwortliches Arbeiten – von der Kundenberatung über die Warenpräsentation bis zur Bestandspflege",
    "exp1.b2": "Verbindung kommunikativer Stärke mit der aktiven Verfolgung von Umsatzzielen in einem internationalen, kundenorientierten Umfeld",

    "exp2.title": "Private German Teacher (A1–B2)",
    "exp2.org": "Freelance",
    "exp2.date": "2021 – Heute",
    "exp2.b1": "Erteilung von privatem Deutschunterricht für Lernende auf den Niveaustufen A1 bis B2",
    "exp2.b2": "Schwerpunkte: Sprechen, Grammatik, Wortschatz, Hörverständnis und Alltagskommunikation",
    "exp2.b3": "Individuelle Anpassung der Lehrmethode an die Bedürfnisse und den Lernfortschritt der Lernenden",

    "edu1.title": "Bachelor of Science – Cognitive Science",
    "edu1.date": "2022 – Heute",
    "edu1.b1": "Interdisziplinäres Studium an der Schnittstelle von Informatik, Psychologie und Neurowissenschaften",
    "edu1.b2": "Schwerpunkte u. a. in Machine Learning, Datenanalyse, Software Engineering und experimenteller Forschungsmethodik",

    "skills.g1": "Programmiersprachen",
    "skills.g2": "Methoden & Tools",
    "skills.g3": "Kognitionswissenschaft",
    "skills.langTitle": "Sprachen",

    "lang.de": "Deutsch",
    "lang.deLevel": "Verhandlungssicher",
    "lang.en": "Englisch",
    "lang.enLevel": "Fließend (B2)",
    "lang.tr": "Türkisch",
    "lang.trLevel": "Muttersprache",
    "lang.fa": "Persisch",
    "lang.faLevel": "Muttersprache",

    "contact.line": "Interessiert an einem Austausch? Schreib mir gerne.",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.copy": "Klicken zum Kopieren",
    "contact.copied": "Kopiert!",

    "footer.text": "© {year} Hossein Mohseni",
  },

  en: {
    "hero.eyebrow": "— Portfolio",
    "hero.role": "Cognitive Science Student, TU Darmstadt",
    "hero.bio": "Cognitive Science student at TU Darmstadt with a foundation in software development, machine learning, and data analysis. Combines analytical thinking with strong communication skills.",
    "hero.cta": "Get in touch",

    "tabs.about": "About",
    "tabs.experience": "Experience",
    "tabs.education": "Education",
    "tabs.skills": "Skills",
    "tabs.contact": "Contact",

    "about.p1": "Cognitive Science, to me, is where philosophy of mind, computer science, and psychology meet — that mix of conceptual and analytical thinking and understanding people is what I bring to every project.",
    "about.f1l": "Location",
    "about.f2l": "Studies",
    "about.f2v": "B.Sc. Cognitive Science",
    "about.f3l": "University",
    "about.f4l": "Focus",
    "about.f4v": "Software & Cognition",

    "exp1.title": "Retail Sales Manager",
    "exp1.org": "L'Occitane en Provence · Working Student · Frankfurt am Main",
    "exp1.date": "2023 – Present",
    "exp1.b1": "Focus on taking ownership – from customer advice to merchandising and inventory upkeep",
    "exp1.b2": "Combined strong communication skills with active pursuit of sales targets in an international, customer-focused environment",

    "exp2.title": "Private German Teacher (A1–B2)",
    "exp2.org": "Freelance",
    "exp2.date": "2021 – Present",
    "exp2.b1": "Delivered private German lessons for learners from A1 to B2 level",
    "exp2.b2": "Focus areas: speaking, grammar, vocabulary, listening, and everyday communication",
    "exp2.b3": "Adapted teaching methods individually to each learner's needs and progress",

    "edu1.title": "Bachelor of Science – Cognitive Science",
    "edu1.date": "2022 – Present",
    "edu1.b1": "Interdisciplinary studies at the intersection of computer science, psychology, and neuroscience",
    "edu1.b2": "Focus areas include machine learning, data analysis, software engineering, and experimental research methods",

    "skills.g1": "Programming Languages",
    "skills.g2": "Methods & Tools",
    "skills.g3": "Cognitive Science",
    "skills.langTitle": "Languages",

    "lang.de": "German",
    "lang.deLevel": "Fluent (Business)",
    "lang.en": "English",
    "lang.enLevel": "Fluent (B2)",
    "lang.tr": "Turkish",
    "lang.trLevel": "Native",
    "lang.fa": "Persian",
    "lang.faLevel": "Native",

    "contact.line": "Interested in connecting? Feel free to reach out.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.copy": "Click to copy",
    "contact.copied": "Copied!",

    "footer.text": "© {year} Hossein Mohseni",
  },
};

let currentLang = "de";

// ================= i18n =================
function applyLanguage(lang) {
  const dict = translations[lang] || translations.de;
  const year = new Date().getFullYear();
  currentLang = lang;

  const nodes = document.querySelectorAll("[data-i18n]");
  for (let i = 0; i < nodes.length; i++) {
    const el = nodes[i];
    const key = el.getAttribute("data-i18n");
    let value = dict[key];
    if (value === undefined) continue;
    value = value.replace("{year}", year);
    el.textContent = value;
  }

  document.documentElement.setAttribute("lang", lang);

  const langBtns = document.querySelectorAll("[data-lang-btn]");
  for (let i = 0; i < langBtns.length; i++) {
    const btn = langBtns[i];
    if (btn.getAttribute("data-lang-btn") === lang) {
      btn.classList.add("is-active");
    } else {
      btn.classList.remove("is-active");
    }
  }

  try { localStorage.setItem("preferredLang", lang); } catch (e) {}
}

function initLanguage() {
  let initial = "de";
  let saved = null;
  try { saved = localStorage.getItem("preferredLang"); } catch (e) {}

  if (saved === "de" || saved === "en") {
    initial = saved;
  } else if (navigator.language && navigator.language.toLowerCase().indexOf("en") === 0) {
    initial = "en";
  }

  applyLanguage(initial);

  const langBtns = document.querySelectorAll("[data-lang-btn]");
  for (let i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener("click", function () {
      applyLanguage(this.getAttribute("data-lang-btn"));
    });
  }
}

// ================= Theme =================
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("preferredTheme"); } catch (e) {}

  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = saved || (prefersLight ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", initial);

  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  toggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("preferredTheme", next); } catch (e) {}
  });
}

// ================= Tabs =================
function initTabs() {
  const tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  const panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel"));
  const indicator = document.getElementById("tabIndicator");
  const tabbar = document.querySelector(".tabbar");

  function moveIndicator(tab) {
    if (!indicator || !tab || !tabbar) return;
    const tabRect = tab.getBoundingClientRect();
    const barRect = tabbar.getBoundingClientRect();
    indicator.style.left = (tabRect.left - barRect.left) + "px";
    indicator.style.width = tabRect.width + "px";
  }

  function activate(name, tab) {
    for (let i = 0; i < tabs.length; i++) {
      const isMatch = tabs[i].getAttribute("data-tab") === name;
      tabs[i].classList.toggle("is-active", isMatch);
      tabs[i].setAttribute("aria-selected", isMatch ? "true" : "false");
    }
    for (let i = 0; i < panels.length; i++) {
      panels[i].classList.toggle("is-active", panels[i].getAttribute("data-panel") === name);
    }
    moveIndicator(tab);
    try { localStorage.setItem("preferredTab", name); } catch (e) {}
  }

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      activate(this.getAttribute("data-tab"), this);
    });
  }

  let startTab = tabs[0];
  let startName = startTab ? startTab.getAttribute("data-tab") : null;
  try {
    const saved = localStorage.getItem("preferredTab");
    if (saved) {
      const match = tabs.filter(function (t) { return t.getAttribute("data-tab") === saved; })[0];
      if (match) { startTab = match; startName = saved; }
    }
  } catch (e) {}

  if (startTab) activate(startName, startTab);

  window.addEventListener("resize", function () {
    const active = document.querySelector(".tab.is-active");
    if (active) moveIndicator(active);
  });
}

// ================= Copy to clipboard =================
function initCopy() {
  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("is-visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 1800);
  }

  const copyButtons = document.querySelectorAll("[data-copy]");
  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
      const value = this.getAttribute("data-copy");
      const dict = translations[currentLang] || translations.de;

      function done() {
        showToast(dict["contact.copied"] || "Copied!");
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(function () {
          fallbackCopy(value);
          done();
        });
      } else {
        fallbackCopy(value);
        done();
      }
    });
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }
}

// ================= Init =================
document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  initLanguage();
  initTabs();
  initCopy();
});
