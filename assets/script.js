// ---- Translations ----
const translations = {
  de: {
    "hero.eyebrow": "Portfolio",
    "hero.role": "Student der Cognitive Science, TU Darmstadt",
    "hero.bio": "Student der Cognitive Science an der TU Darmstadt mit Grundlagen in Softwareentwicklung, Machine Learning und Datenanalyse. Verbindet analytisches Denken mit Kommunikationsstärke, gewonnen durch kundenorientierte Praxis im Einzelhandel und freiberuflichen Deutschunterricht.",

    "experience.title": "Berufserfahrung",

    "exp1.title": "Retail Sales Manager",
    "exp1.org": "L'Occitane en Provence · Werkstudium",
    "exp1.date": "2023 – Heute · Frankfurt am Main",
    "exp1.b1": "Beratung und Betreuung von Kund:innen im Verkaufsbereich sowie aktive Umsatzverantwortung",
    "exp1.b2": "Mitverantwortung für Warenpräsentation, Bestandspflege und Umsetzung von Verkaufszielen",
    "exp1.b3": "Einsatz kommunikativer Fähigkeiten in einem internationalen, kundenorientierten Umfeld",

    "exp2.title": "Private German Teacher (A1–B2)",
    "exp2.org": "Freelance",
    "exp2.date": "2021 – Heute",
    "exp2.b1": "Erteilung von privatem Deutschunterricht für Lernende auf den Niveaustufen A1 bis B2",
    "exp2.b2": "Schwerpunkte: Sprechen, Grammatik, Wortschatz, Hörverständnis und Alltagskommunikation",
    "exp2.b3": "Individuelle Anpassung der Lehrmethode an die Bedürfnisse und den Lernfortschritt der Lernenden",

    "education.title": "Ausbildung",
    "edu1.title": "Bachelor of Science – Cognitive Science",
    "edu1.org": "Technische Universität Darmstadt",
    "edu1.date": "2022 – Heute",
    "edu1.b1": "Interdisziplinäres Studium an der Schnittstelle von Informatik, Psychologie und Neurowissenschaften",
    "edu1.b2": "Schwerpunkte u. a. in Machine Learning, Datenanalyse, Software Engineering und experimenteller Forschungsmethodik",

    "skills.title": "Kenntnisse",
    "skills.g1": "Programmiersprachen",
    "skills.g2": "Methoden & Tools",
    "skills.g3": "Kognitionswissenschaft",
    "skills.langTitle": "Sprachen",

    "lang.fa": "Persisch",
    "lang.faLevel": "Muttersprache",
    "lang.de": "Deutsch",
    "lang.deLevel": "Verhandlungssicher",
    "lang.en": "Englisch",
    "lang.enLevel": "Fließend (B2)",

    "contact.title": "Kontakt",
    "contact.line": "Interessiert an einem Austausch? Schreib mir gerne.",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",

    "footer.text": "© {year} Hossein Mohseni",
  },

  en: {
    "hero.eyebrow": "Portfolio",
    "hero.role": "Cognitive Science Student, TU Darmstadt",
    "hero.bio": "Cognitive Science student at TU Darmstadt with a foundation in software development, machine learning, and data analysis. Combines analytical thinking with strong communication skills, gained through customer-facing retail work and freelance German teaching.",

    "experience.title": "Experience",

    "exp1.title": "Retail Sales Manager",
    "exp1.org": "L'Occitane en Provence · Working Student",
    "exp1.date": "2023 – Present · Frankfurt am Main",
    "exp1.b1": "Advised and supported customers in a sales environment with active revenue responsibility",
    "exp1.b2": "Co-responsible for merchandising, inventory upkeep, and achieving sales targets",
    "exp1.b3": "Applied strong communication skills in an international, customer-focused environment",

    "exp2.title": "Private German Teacher (A1–B2)",
    "exp2.org": "Freelance",
    "exp2.date": "2021 – Present",
    "exp2.b1": "Delivered private German lessons for learners from A1 to B2 level",
    "exp2.b2": "Focus areas: speaking, grammar, vocabulary, listening, and everyday communication",
    "exp2.b3": "Adapted teaching methods individually to each learner's needs and progress",

    "education.title": "Education",
    "edu1.title": "Bachelor of Science – Cognitive Science",
    "edu1.org": "Technische Universität Darmstadt",
    "edu1.date": "2022 – Present",
    "edu1.b1": "Interdisciplinary studies at the intersection of computer science, psychology, and neuroscience",
    "edu1.b2": "Focus areas include machine learning, data analysis, software engineering, and experimental research methods",

    "skills.title": "Skills",
    "skills.g1": "Programming Languages",
    "skills.g2": "Methods & Tools",
    "skills.g3": "Cognitive Science",
    "skills.langTitle": "Languages",

    "lang.fa": "Persian",
    "lang.faLevel": "Native",
    "lang.de": "German",
    "lang.deLevel": "Fluent (Business)",
    "lang.en": "English",
    "lang.enLevel": "Fluent (B2)",

    "contact.title": "Contact",
    "contact.line": "Interested in connecting? Feel free to reach out.",
    "contact.email": "Email",
    "contact.phone": "Phone",

    "footer.text": "© {year} Hossein Mohseni",
  },
};

// ---- Apply language ----
function applyLanguage(lang) {
  const dict = translations[lang] || translations.de;
  const year = new Date().getFullYear();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    let value = dict[key];
    if (value === undefined) return;
    value = value.replace("{year}", year);
    el.textContent = value;
  });

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
  });

  try {
    localStorage.setItem("preferredLang", lang);
  } catch (e) {
    /* localStorage unavailable — ignore */
  }
}

// ---- Init ----
(function init() {
  let initialLang = "de";

  let paramLang = null;
  try {
    paramLang = new URLSearchParams(window.location.search).get("lang");
  } catch (e) { /* ignore */ }

  if (paramLang === "de" || paramLang === "en") {
    initialLang = paramLang;
  } else {
    let saved = null;
    try {
      saved = localStorage.getItem("preferredLang");
    } catch (e) { /* localStorage unavailable */ }

    if (saved === "de" || saved === "en") {
      initialLang = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith("en")) {
      initialLang = "en";
    }
  }

  applyLanguage(initialLang);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang-btn"));
    });
  });
})();
