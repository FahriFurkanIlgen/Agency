import type { Lang } from "./site";

export type Localized = { de: string; en: string };

export type EventItem = {
  id: string;
  date: string;
  day: Localized;
  title: Localized;
  category: Localized;
  status: Localized;
};

export type OpenCallItem = {
  id: string;
  num: string;
  title: Localized;
  deadline: Localized;
  description: Localized;
  status: Localized;
  applyHref: string;
  gradient: string;
};

export type SiteContent = {
  headerStatement: Localized;
  hero: {
    intro: Localized;
    headingLines: Localized;
    based: Localized;
    scroll: Localized;
  };
  about: {
    metaLeft: Localized;
    metaRight: Localized;
    headingLines: Localized;
    body: Localized;
  };
  feature: {
    headingLines: Localized;
    caption: Localized;
  };
  program: {
    heading: Localized;
    period: Localized;
    archiveLabel: Localized;
    archiveCta: Localized;
    events: EventItem[];
  };
  openCalls: {
    heading: Localized;
    items: OpenCallItem[];
  };
  contact: {
    heading: Localized;
    address: string;
    email: string;
    phone: string;
    instagram: string;
    facebook: string;
    mapsQuery: string;
  };
  footer: {
    headingLines: Localized;
  };
};

/** Pick the localized string for the active language. */
export function L(value: Localized, lang: Lang): string {
  return value[lang] || value.en;
}

/** Split a multi-line localized field into an array of lines. */
export function lines(value: Localized, lang: Lang): string[] {
  return L(value, lang).split("\n");
}

export const DEFAULT_CONTENT: SiteContent = {
  headerStatement: {
    de: "Zemin Art Space: Ein unabhängiger Produktionsort in Kreuzberg, der interdisziplinäre künstlerische Praktiken beherbergt und unterstützt.",
    en: "Zemin Art Space: An independent production site in Kreuzberg, dedicated to hosting and supporting interdisciplinary artistic practices.",
  },
  hero: {
    intro: {
      de: "EIN UNABHÄNGIGER KUNSTRAUM",
      en: "AN INDEPENDENT ART SPACE",
    },
    headingLines: {
      de: "RAUM FÜR\nINTERDISZIPLINÄRE\nPRAKTIKEN",
      en: "HOSTING\nINTERDISCIPLINARY\nPRACTICES",
    },
    based: {
      de: "KREUZBERG\nBERLIN",
      en: "KREUZBERG\nBERLIN",
    },
    scroll: {
      de: "WEITER SCROLLEN ↓",
      en: "SCROLL TO VIEW MORE ↓",
    },
  },
  about: {
    metaLeft: { de: "KREUZBERG\nBERLIN", en: "KREUZBERG\nBERLIN" },
    metaRight: { de: "EST\n(2025)", en: "EST\n(2025)" },
    headingLines: {
      de: "EIN\nUNABHÄNGIGER\nPRODUKTIONS-\nORT FÜR\nINTERDISZIPLINÄRE\nKUNST",
      en: "AN\nINDEPENDENT\nPRODUCTION\nSITE FOR\nINTERDISCIPLINARY\nART",
    },
    body: {
      de: "Zemin ist ein Kunstraum im Herzen von Kreuzberg, Berlin. Wir beherbergen und unterstützen interdisziplinäre künstlerische Praktiken — Performances, Ausstellungen, Workshops und Begegnungen. Ein Boden zum Experimentieren, wo Ideen auf Raum treffen und sich Gemeinschaften rund um die Arbeit versammeln.",
      en: "Zemin is an art space in the heart of Kreuzberg, Berlin. We host and support interdisciplinary artistic practices — performances, exhibitions, workshops and gatherings. A ground for experimentation, where ideas meet space, and communities meet around the work.",
    },
  },
  feature: {
    headingLines: {
      de: "EIN BODEN\nFÜR IDEEN\nDIE RAUM\nFINDEN",
      en: "A GROUND\nFOR IDEAS\nTHAT FIND\nSPACE",
    },
    caption: {
      de: "WO ARBEIT UND\nGEMEINSCHAFT\nSICH BEGEGNEN —",
      en: "WHERE WORK AND\nCOMMUNITY\nMEET —",
    },
  },
  program: {
    heading: { de: "PROGRAMM", en: "PROGRAM" },
    period: { de: "JULI — AUGUST 2026", en: "JULY — AUGUST 2026" },
    archiveLabel: { de: "ARCHIV", en: "ARCHIVE" },
    archiveCta: {
      de: "GESAMTEN KALENDER ANSEHEN ↗",
      en: "VIEW FULL CALENDAR ↗",
    },
    events: [
      {
        id: "e1",
        date: "12.07",
        day: { de: "FR", en: "FRI" },
        title: {
          de: "GROUND NOISE — LIVE-SOUND-NACHT",
          en: "GROUND NOISE — LIVE SOUND NIGHT",
        },
        category: { de: "PERFORMANCE", en: "PERFORMANCE" },
        status: { de: "TICKETS", en: "TICKETS" },
      },
      {
        id: "e2",
        date: "19.07",
        day: { de: "FR", en: "FRI" },
        title: {
          de: "BODIES IN SPACE — BEWEGUNGS-WORKSHOP",
          en: "BODIES IN SPACE — MOVEMENT WORKSHOP",
        },
        category: { de: "WORKSHOP", en: "WORKSHOP" },
        status: { de: "ANMELDUNG", en: "RSVP" },
      },
      {
        id: "e3",
        date: "26.07",
        day: { de: "FR", en: "FRI" },
        title: {
          de: "CONCRETE GARDEN — GRUPPENAUSSTELLUNG",
          en: "CONCRETE GARDEN — GROUP EXHIBITION",
        },
        category: { de: "AUSSTELLUNG", en: "EXHIBITION" },
        status: { de: "EINTRITT FREI", en: "FREE ENTRY" },
      },
      {
        id: "e4",
        date: "02.08",
        day: { de: "SA", en: "SAT" },
        title: {
          de: "OPEN STUDIO — KÜNSTLERGESPRÄCHE",
          en: "OPEN STUDIO — ARTIST TALKS",
        },
        category: { de: "TALK", en: "TALK" },
        status: { de: "EINTRITT FREI", en: "FREE ENTRY" },
      },
      {
        id: "e5",
        date: "09.08",
        day: { de: "SA", en: "SAT" },
        title: {
          de: "NIGHT SHIFT — AUDIOVISUELLES SET",
          en: "NIGHT SHIFT — AUDIOVISUAL SET",
        },
        category: { de: "PERFORMANCE", en: "PERFORMANCE" },
        status: { de: "TICKETS", en: "TICKETS" },
      },
    ],
  },
  openCalls: {
    heading: { de: "OPEN CALLS", en: "OPEN CALLS" },
    items: [
      {
        id: "c1",
        num: "(01)",
        title: { de: "RESIDENZ 2026", en: "RESIDENCY 2026" },
        deadline: { de: "FRIST 31.08.2026", en: "DEADLINE 31.08.2026" },
        description: {
          de: "Eine dreimonatige Produktionsresidenz für interdisziplinäre Künstler:innen, die in den Bereichen Klang, Performance und Installation arbeiten. Studiozugang, Mentoring und eine öffentliche Präsentation bei Zemin.",
          en: "A three-month production residency for interdisciplinary artists working across sound, performance and installation. Studio access, mentorship and a public showing at Zemin.",
        },
        status: { de: "OFFEN", en: "OPEN" },
        applyHref: "/booking",
        gradient: "linear-gradient(135deg, #2a6f5a, #0e3b32)",
      },
      {
        id: "c2",
        num: "(02)",
        title: { de: "ERDGESCHOSS-AUSSTELLUNG", en: "GROUND FLOOR EXHIBITION" },
        deadline: { de: "FRIST 15.07.2026", en: "DEADLINE 15.07.2026" },
        description: {
          de: "Open Call für aufstrebende Künstler:innen, in unserem Hauptsaal auszustellen. Wir freuen uns über Vorschläge, die auf den rohen, industriellen Charakter des Raums reagieren.",
          en: "Open call for emerging artists to exhibit in our main hall. We welcome proposals that respond to the raw, industrial character of the space.",
        },
        status: { de: "ENDET BALD", en: "CLOSING SOON" },
        applyHref: "/booking",
        gradient: "linear-gradient(135deg, #c2603f, #5e2516)",
      },
      {
        id: "c3",
        num: "(03)",
        title: { de: "WORKSHOP-REIHE", en: "WORKSHOP SERIES" },
        deadline: { de: "LAUFENDE BEWERBUNGEN", en: "ROLLING APPLICATIONS" },
        description: {
          de: "Vermittler:innen und Pädagog:innen sind eingeladen, praxisorientierte Workshops für unsere Community vorzuschlagen — von Bewegung und Druckgrafik bis zu digitaler Praxis.",
          en: "Facilitators and educators are invited to propose hands-on workshops for our community program — from movement and printmaking to digital practice.",
        },
        status: { de: "OFFEN", en: "OPEN" },
        applyHref: "/booking",
        gradient: "linear-gradient(135deg, #6a4ea0, #2b1d4f)",
      },
    ],
  },
  contact: {
    heading: { de: "KONTAKT", en: "CONTACT" },
    address: "Urbanstr. 3, 10961 Berlin",
    email: "info@zeminberlin.de",
    phone: "+49 15569070168",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    mapsQuery: "Urbanstr.+3,+10961+Berlin",
  },
  footer: {
    headingLines: {
      de: "Lass uns\netwas\nhier —\nzusammen\nmachen.",
      en: "Let's make\nsomething\nhere —\ntogether.",
    },
  },
};
