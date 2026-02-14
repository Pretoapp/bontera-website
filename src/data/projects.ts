// i18n helpers

export type Locale = "de" | "en" | "fr" | "nl" | "it" | "ku" | "tr";

export type ProjectCategory =
  | "commercial"
  | "residential"
  | "infrastructure"
  | "industrial"
  | "renovation"
  | "publicWorks";

export type ProjectStatus = "completed" | "ongoing";

export type LocalizedText = Partial<Record<Locale, string>> & { en: string };

export type MaybeLocalized = string | LocalizedText;
export type MaybeLocalizedFeature = string | LocalizedText;

export type Project = {
  id: string;
  slug: string;

  title: LocalizedText;
  description: LocalizedText;
  location: LocalizedText;

  category: ProjectCategory;
  year: string;

  client?: string;

  value: MaybeLocalized;          // allow string while migrating
  duration: MaybeLocalized;       // allow string while migrating
  size?: MaybeLocalized;          // allow string while migrating

  status: ProjectStatus;
  featured?: boolean;

  image: string;
  gallery?: string[];

  features?: MaybeLocalizedFeature[]; // allow string[] while migrating
  teamSize?: string;
};




export const sectionLabels: Record<Locale, { servicesAndFeatures: string }> = {
  de: { servicesAndFeatures: "Leistungen & Merkmale" },
  en: { servicesAndFeatures: "Services & Features" },
  fr: { servicesAndFeatures: "Services et caractéristiques" },
  nl: { servicesAndFeatures: "Diensten & Kenmerken" },
  it: { servicesAndFeatures: "Servizi e caratteristiche" },
  ku: { servicesAndFeatures: "Karûbar û Taybetmendî" },
  tr: { servicesAndFeatures: "Hizmetler ve Özellikler" },
};
// Features translation dictionary
const featureTranslations: Record<string, Partial<Record<Locale, string>>> = {
  "BREEAM Excellent": {
    fr: "BREEAM Excellent",
    de: "BREEAM Excellent",
    nl: "BREEAM Excellent",
    it: "BREEAM Excellent",
    tr: "BREEAM Excellent",
    ku: "BREEAM Excellent",
    en: "BREEAM Excellent",
  },
  "Advanced Security Systems": {
    fr: "Systèmes de sécurité avancés",
    de: "Erweiterte Sicherheitssysteme",
    nl: "Geavanceerde beveiligingssystemen",
    it: "Sistemi di sicurezza avanzati",
    tr: "Gelişmiş Güvenlik Sistemleri",
    ku: "Pergalên ewlehiyê yên pêşkeftî",
    en: "Advanced Security Systems",
  },
  "Conference Center": {
    fr: "Centre de conférence",
    de: "Konferenzzentrum",
    nl: "Conferentiecentrum",
    it: "Centro conferenze",
    tr: "Konferans Merkezi",
    ku: "Navenda konferansê",
    en: "Conference Center",
  },
  "Sustainable Design": {
    fr: "Conception durable",
    de: "Nachhaltiges Design",
    nl: "Duurzaam ontwerp",
    it: "Design sostenibile",
    tr: "Sürdürülebilir Tasarım",
    ku: "Mîmariya domdar",
    en: "Sustainable Design",
  },

  // Added features
  "New Construction": {
    fr: "Construction neuve",
    de: "Neubau",
    nl: "Nieuwbouw",
    it: "Nuova costruzione",
    tr: "Yeni İnşaat",
    ku: "Avakirina nû",
    en: "New Construction",
  },
  "Specialized Technical Works": {
    fr: "Techniques spéciales",
    de: "Spezialtechnik",
    nl: "Speciale technieken",
    it: "Tecniche speciali",
    tr: "Özel Teknik İşler",
    ku: "Teknîkên taybet",
    en: "Specialized Technical Works",
  },
  "Interior Fit-Out": {
    fr: "Aménagement intérieur",
    de: "Innenausbau",
    nl: "Interieurafwerking",
    it: "Allestimento interno",
    tr: "İç Mekân Düzenleme",
    ku: "Rêkxistina hundirîn",
    en: "Interior Fit-Out",
  },
  "Offices": {
    fr: "Bureaux",
    de: "Büros",
    nl: "Kantoren",
    it: "Uffici",
    tr: "Ofisler",
    ku: "Nivîsgeh",
    en: "Offices",
  },
  "Restaurant": {
    fr: "Restaurant",
    de: "Restaurant",
    nl: "Restaurant",
    it: "Ristorante",
    tr: "Restoran",
    ku: "Restoran",
    en: "Restaurant",
  },
  "Conference Spaces": {
    fr: "Espaces de conférence",
    de: "Konferenzbereiche",
    nl: "Conferentieruimtes",
    it: "Spazi per conferenze",
    tr: "Konferans Alanları",
    ku: "Cihên konferansê",
    en: "Conference Spaces",
  },
  "Retail": {
    fr: "Commerce",
    de: "Einzelhandel",
    nl: "Winkelruimte",
    it: "Spazi commerciali",
    tr: "Ticari Alanlar",
    ku: "Bazirganî",
    en: "Retail",
  },

  
 "Listed Heritage Building": {
    fr: "Bâtiment classé",
    de: "Denkmalgeschütztes Gebäude",
    nl: "Beschermd erfgoed",
    it: "Edificio vincolato",
    tr: "Tescilli yapı",
    ku: "Avahiyekî parastî",
    en: "Listed Heritage Building",
  },

  "Historic Architecture": {
    fr: "Architecture historique",
    de: "Historische Architektur",
    nl: "Historische architectuur",
    it: "Architettura storica",
    tr: "Tarihi mimari",
    ku: "Mîmariya dîrokî",
    en: "Historic Architecture",
  },

  "Restoration": {
    fr: "Restauration",
    de: "Restaurierung",
    nl: "Restauratie",
    it: "Restauro",
    tr: "Restorasyon",
    ku: "Restorasyon",
    en: "Restoration",
  },

  "Sound System": {
    fr: "Sonorisation",
    de: "Beschallung",
    nl: "Geluidsinstallatie",
    it: "Sonorizzazione",
    tr: "Seslendirme",
    ku: "Sonorîzasyon",
    en: "Sound System",
  },




  "Listed Building": {
    fr: "Bâtiment classé",
    de: "Denkmalgeschütztes Gebäude",
    nl: "Beschermd erfgoed",
    it: "Edificio vincolato",
    tr: "Tescilli yapı",
    ku: "Avahiyekî parastî",
    en: "Listed Building",
  },


  "Renovation": {
    fr: "Rénovation",
    de: "Renovierung",
    nl: "Renovatie",
    it: "Ristrutturazione",
    tr: "Yenileme",
    ku: "Nûkirin",
    en: "Renovation",
  },

  "Wellness": {
    fr: "Wellness",
    de: "Wellnessbereich",
    nl: "Wellness",
    it: "Wellness",
    tr: "Wellness",
    ku: "Wellness",
    en: "Wellness",
  },

  "New Building": {
    fr: "Bâtiment neuf",
    de: "Neubau",
    nl: "Nieuwbouw",
    it: "Nuova costruzione",
    tr: "Yeni bina",
    ku: "Avakirina nû",
    en: "New Building",
  },

  "Meeting Space": {
    fr: "Espace réunion",
    de: "Besprechungsraum",
    nl: "Vergaderruimte",
    it: "Sala riunioni",
    tr: "Toplantı alanı",
    ku: "Cihê civînê",
    en: "Meeting Space",
  },

  "Underground Parking": {
    fr: "Parking souterrain",
    de: "Tiefgarage",
    nl: "Ondergrondse parking",
    it: "Parcheggio sotterraneo",
    tr: "Yer altı otoparkı",
    ku: "Parkkirina binerdî",
    en: "Underground Parking",
  },



 

  "Tiled Roof": {
    fr: "Toiture en tuile",
    de: "Ziegeldach",
    nl: "Pannendak",
    it: "Tetto in tegole",
    tr: "Kiremit çatı",
    ku: "Toka tile",
    en: "Tiled Roof",
  },

  "Glass Roof": {
    fr: "Toit en verre",
    de: "Glasdach",
    nl: "Glazen dak",
    it: "Tetto in vetro",
    tr: "Cam çatı",
    ku: "Toka şûşe",
    en: "Glass Roof",
  },

  "Prestige Apartments": {
    fr: "Appartements de prestige",
    de: "Prestige-Apartments",
    nl: "Prestige-appartementen",
    it: "Appartamenti di prestigio",
    tr: "Prestij daireler",
    ku: "Apartmanên prestîj",
    en: "Prestige Apartments",
  },

  "Cinema": {
    fr: "Cinéma",
    de: "Kino",
    nl: "Bioscoop",
    it: "Cinema",
    tr: "Sinema",
    ku: "Sinema",
    en: "Cinema",
  },



  // Add more repeated ones anytime

  "Fitness Center": { fr: "Salle de sport" },
  "LED Lighting": { fr: "Éclairage LED" },
};

function localizeFeature(feature: string, locale: Locale): string {
  return featureTranslations[feature]?.[locale] ?? feature;
}

function localizeDuration(duration: string, locale: Locale): string {
  const d = duration.trim();

  // Supports: "30 months", "1 month"
  const m = d.match(/^(\d+)\s*(month|months)$/i);
  if (m) {
    const n = m[1];
    if (locale === "fr") return `${n} mois`;
    if (locale === "de") return `${n} Monate`;
    if (locale === "nl") return `${n} maanden`;
    if (locale === "it") return `${n} mesi`;
    if (locale === "tr") return `${n} ay`;
    if (locale === "ku") return `${n} meh`;
    return `${n} months`;
  }

  // Supports: "24" meaning months
  if (/^\d+$/.test(d)) {
    const n = d;
    if (locale === "fr") return `${n} mois`;
    if (locale === "de") return `${n} Monate`;
    if (locale === "nl") return `${n} maanden`;
    if (locale === "it") return `${n} mesi`;
    if (locale === "tr") return `${n} ay`;
    if (locale === "ku") return `${n} meh`;
    return `${n} months`;
  }

  // Ranges like "2017-2018" or "May 2018 - Sept 2018" stay as-is for now
  return duration;
}
function localizeValue(value: string, locale: Locale): string {
  const v = value.trim();
  if (v === "🔒") return v;

  // Supports: €1.2B, €250M, €900K
  const m = v.match(/^€\s*([0-9]+(?:\.[0-9]+)?)\s*([BMK])$/i);
  if (!m) return value;

  const num = m[1];
  const mag = m[2].toUpperCase();

  // French formats: 1,2 Md € | 250 M € | 900 k €
  if (locale === "fr") {
    const frNum = num.replace(".", ",");
    if (mag === "B") return `${frNum} Md €`;
    if (mag === "M") return `${frNum} M €`;
    return `${frNum} k €`;
  }

  // German: €1,2 Mrd. | €250 Mio. | €900 Tsd.
  if (locale === "de") {
    const deNum = num.replace(".", ",");
    if (mag === "B") return `€${deNum} Mrd.`;
    if (mag === "M") return `€${deNum} Mio.`;
    return `€${deNum} Tsd.`;
  }

  // Dutch: €1,2 mrd. | €250 mln. | €900k
  if (locale === "nl") {
    const nlNum = num.replace(".", ",");
    if (mag === "B") return `€${nlNum} mrd.`;
    if (mag === "M") return `€${nlNum} mln.`;
    return `€${nlNum}k`;
  }

  // Italian: €1,2 mld | €250 mln | €900k
  if (locale === "it") {
    const itNum = num.replace(".", ",");
    if (mag === "B") return `€${itNum} mld`;
    if (mag === "M") return `€${itNum} mln`;
    return `€${itNum}k`;
  }

  // Keep original for others for now
  return value;
}
function resolveLocalized(v: string | LocalizedText, locale: Locale): string {
  return typeof v === "string" ? v : (v[locale] ?? v.en);
}

export function getProjectFeaturesLocalized(p: Project, locale: Locale): string[] {
  const list = p.features ?? [];
  return list.map((f) => {
    if (typeof f === "string") return localizeFeature(f, locale);

    // If a manual translation exists, use it.
    // If not, fall back to translating the English key via your dictionary.
    return f[locale] ?? localizeFeature(f.en, locale);
  });
}

export function getProjectDurationLocalized(p: Project, locale: Locale): string {
  const raw = resolveLocalized(p.duration, locale);

  // If duration was manually translated in the object, raw is already correct.
  // If it was a plain "30 months" (or only en exists), format it.
  if (typeof p.duration === "string") return localizeDuration(raw, locale);
  if (!p.duration[locale]) return localizeDuration(p.duration.en, locale);

  return raw;
}

export function getProjectValueLocalized(p: Project, locale: Locale): string {
  if (typeof p.value === "string") return localizeValue(p.value, locale);
  return p.value[locale] ?? localizeValue(p.value.en, locale);
}


export const projects: Project[] = [
{
  id: "commercial-1",
  slug: "nato-headquarters-brussels",
  title: {
    de: "NATO-Hauptquartier Brüssel",
    en: "NATO Headquarters Brussels",
    fr: "Siège de l'OTAN Bruxelles",
    nl: "NAVO-hoofdkwartier Brussel",
    it: "Quartier Generale NATO Bruxelles",
    ku: "Serekaniya NATO Bruksel",
    tr: "NATO Karargahı Brüksel",
  },
  category: "commercial",
  description: {
  
  de: "Das neue NATO-Hauptquartier ist ein moderner und beeindruckender Komplex, der die Werte der Organisation widerspiegelt. Mit einer Fläche von 250.000 m² vereint das Gebäude zeitgenössische Architektur und Nachhaltigkeit und bietet zugleich Arbeitsbereiche, Besprechungsräume sowie hochmoderne technische Einrichtungen. Sein markantes Design, geprägt von einer fünfeckigen Struktur, symbolisiert Einheit und Zusammenarbeit zwischen den Mitgliedern des Bündnisses. Dieser Sitz ist nicht nur ein Zentrum strategischer Entscheidungsfindung, sondern auch ein Beispiel für das Engagement der NATO in den Bereichen Sicherheit und nachhaltige Entwicklung. Die von uns realisierte Fläche der öffentlichen Bereiche beträgt 12.500 m².",
  en: "The new NATO Headquarters is a modern and impressive complex designed to reflect the organization’s values. With an area of 250,000 m², the building combines contemporary architecture and sustainability, while offering workspaces, meeting rooms, and state-of-the-art technical facilities. Its distinctive design, marked by a pentagon-shaped structure, symbolizes unity and cooperation among Alliance members. This headquarters is not only a strategic decision-making center, but also an example of NATO’s commitment to security and sustainable development. The public area we delivered covers 12,500 m².",
  fr: "Le nouveau siège de l’OTAN est un complexe moderne et imposant conçu pour refléter les valeurs de l’organisation. Avec une superficie de 250 000 m², le bâtiment combine architecture contemporaine et durabilité, tout en offrant des espaces de travail, des salles de réunion et des installations techniques de pointe. Son design distinctif, marqué par une structure en forme de pentagone, symbolise l’unité et la coopération entre les membres de l’Alliance. Ce siège est non seulement un centre de décision stratégique, mais aussi un exemple de l’engagement de l’OTAN en matière de sécurité et de développement durable. La zone des espaces publics que nous avons réalisée est de 12 500 m².",
  nl: "Het nieuwe NAVO-hoofdkwartier is een modern en indrukwekkend complex dat is ontworpen om de waarden van de organisatie te weerspiegelen. Met een oppervlakte van 250.000 m² combineert het gebouw hedendaagse architectuur met duurzaamheid, en biedt het werkruimtes, vergaderzalen en ultramoderne technische faciliteiten. Het kenmerkende ontwerp, met een vijfhoekige structuur, symboliseert eenheid en samenwerking tussen de leden van het Bondgenootschap. Dit hoofdkwartier is niet alleen een centrum voor strategische besluitvorming, maar ook een voorbeeld van de inzet van de NAVO op het gebied van veiligheid en duurzame ontwikkeling. De publieke ruimtes die wij hebben gerealiseerd beslaan 12.500 m².",
  it: "Il nuovo Quartier Generale della NATO è un complesso moderno e imponente, progettato per riflettere i valori dell’organizzazione. Con una superficie di 250.000 m², l’edificio combina architettura contemporanea e sostenibilità, offrendo al contempo spazi di lavoro, sale riunioni e strutture tecniche all’avanguardia. Il suo design distintivo, caratterizzato da una struttura a forma di pentagono, simboleggia l’unità e la cooperazione tra i membri dell’Alleanza. Questo quartier generale non è solo un centro di decisione strategica, ma anche un esempio dell’impegno della NATO in materia di sicurezza e sviluppo sostenibile. L’area degli spazi pubblici da noi realizzata è di 12.500 m².",
  ku: "Serekaniya nû ya NATO kompleksek modern û mezin e ku ji bo nîşandanîna nirxên rêxistinê hatiye sêwirandin. Bi qada 250.000 m², avahî mîmariya nûjen bi domdariyê re têk dike, her weha cihên kar, salonên civînê û amûrên teknîkî yên herî pêşkeftî peyda dike. Sêwirandina wê ya taybet, ku bi struktûra bi şêweya pêncgoşe tê nîşandan, yekbûn û hevkariyê di navbera endamên Hevalbendiyê de sembolîze dike. Ev serekaniyê ne tenê navenda biryardanê ya stratejîk e, lê her weha nimûneyek ji dilsozîya NATO li ser ewlehî û pêşveçûna domdar e. Qada cihên giştî yên ku me pêk anîye 12.500 m² ye.",
  tr: "Yeni NATO Karargâhı, kuruluşun değerlerini yansıtmak üzere tasarlanmış modern ve etkileyici bir komplekstir. 250.000 m²’lik bir alana sahip olan yapı; çağdaş mimariyi sürdürülebilirlikle birleştirirken, çalışma alanları, toplantı salonları ve son teknoloji teknik tesisler sunar. Beşgen formuyla öne çıkan ayırt edici tasarımı, İttifak üyeleri arasındaki birlik ve iş birliğini simgeler. Bu karargâh yalnızca stratejik karar alma merkezi olmakla kalmaz, aynı zamanda NATO’nun güvenlik ve sürdürülebilir kalkınmaya olan bağlılığının da bir örneğidir. Tarafımızdan gerçekleştirilen kamusal alanların büyüklüğü 12.500 m²’dir."
},

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },
  year: "2014",
  client: "BAM Alliance",

  // Keep only en if you want your localizeValue/localizeDuration to format others automatically
  value: { en: "€1.2B" },
  duration: { en: "2014-2016" },
  size: {
    en: "12,500 m²",
    fr: "12 500 m²",
    de: "12.500 m²",
    nl: "12.500 m²",
    it: "12.500 m²",
  },

  status: "completed",
  featured: true,
  image: "/images/projects/commercial-1.jpg",
  gallery: [
    "/images/projects/commercial-1-1.jpg",
    "/images/projects/commercial-1-2.jpg",
    "/images/projects/commercial-1-3.jpg",
  ],

  // Manual per-locale features (no dictionary needed, but your helper also supports fallback)
  features: [
    {
      fr: "Construction neuve",
    de: "Neubau",
    nl: "Nieuwbouw",
    it: "Nuova costruzione",
    tr: "Yeni İnşaat",
    ku: "Avakirina nû",
    en: "New Construction",
    },
    {
         fr: "Bureaux",
    de: "Büros",
    nl: "Kantoren",
    it: "Uffici",
    tr: "Ofisler",
    ku: "Nivîsgeh",
    en: "Offices",
  },
    {
        fr: "Espaces de conférence",
    de: "Konferenzbereiche",
    nl: "Conferentieruimtes",
    it: "Spazi per conferenze",
    tr: "Konferans Alanları",
    ku: "Cihên konferansê",
    en: "Conference Spaces",
    },
    {
       fr: "Commerce",
    de: "Einzelhandel",
    nl: "Winkelruimte",
    it: "Spazi commerciali",
    tr: "Ticari Alanlar",
    ku: "Bazirganî",
    en: "Retail",
    },
  ],

  teamSize: "200+",
},


  {
  id: "commercial-2",
  slug: "theatre-royal-des-galeries",
  title: {
    de: "Königliches Galerietheater",
    en: "Théâtre Royal des Galeries",
    fr: "Théâtre Royal des Galeries",
    nl: "Koninklijk Theater der Galerijen",
    it: "Teatro Reale delle Gallerie",
    ku: "Şanoya Qral a Galeriyan",
    tr: "Galeriler Kraliyet Tiyatrosu",
  },

  // Based on your new info: Commercial
  category: "commercial",

  description: {
    de: "Dieses multidisziplinäre Projekt umfasste die Erweiterung und Restaurierung des Théâtre Royal des Galeries im Herzen von Brüssel in den Galeries Royales Saint-Hubert. Als denkmalgeschützter Ort verbindet es historische Architektur des 19. Jahrhunderts mit modernem Komfort. Der italienische Zuschauerraum, die eklektische Programmgestaltung und rund 850 Sitzplätze schaffen ein elegantes, intimes Kulturerlebnis, geeignet für Theaterstücke, Konzerte und besondere Veranstaltungen. Die Arbeiten umfassten Restaurierung, Innenausbau und Beschallung, mit Fokus auf luxuriöse Ausführung und zentrale Zugänglichkeit.",
    en: "This multidisciplinary project covered the extension and restoration of the Théâtre Royal des Galeries, located in the heart of Brussels inside the Galeries Royales Saint-Hubert. As a listed heritage building, it blends 19th-century historic architecture with modern upgrades. With its Italian-style auditorium, eclectic year-round program, and around 850 seats, it delivers an elegant and intimate cultural experience for theatre, concerts, and special events. The scope included restoration, interior fit-out, and sound system works, with a luxury-level finish and central accessibility.",
    fr: "Ce projet multidisciplinaire comprenait l’agrandissement et la restauration du Théâtre Royal des Galeries, situé au cœur de Bruxelles dans les Galeries Royales Saint-Hubert. Lieu classé, il associe une architecture historique du XIXe siècle à des améliorations contemporaines. Avec sa salle à l’italienne, sa programmation éclectique et ses environ 850 places, il offre une expérience culturelle élégante et intimiste pour le théâtre, les concerts et les événements spéciaux. Le périmètre incluait la restauration, l’aménagement intérieur et la sonorisation, avec une finition haut de gamme et une accessibilité centrale.",
    nl: "Dit multidisciplinaire project omvatte de uitbreiding en restauratie van het Théâtre Royal des Galeries, in het hart van Brussel in de Koninklijke Sint-Hubertusgalerijen. Als beschermd erfgoed combineert het 19e-eeuwse historische architectuur met moderne verbeteringen. Met zijn Italiaans zaaltype, eclectisch programma en circa 850 zitplaatsen biedt het een elegante en intieme culturele beleving voor theater, concerten en speciale evenementen. De scope omvatte restauratie, interieurinrichting en geluidsinstallaties, met een luxe afwerking en centrale bereikbaarheid.",
    it: "Questo progetto multidisciplinare ha incluso l’ampliamento e il restauro del Théâtre Royal des Galeries, situato nel cuore di Bruxelles nelle Galeries Royales Saint-Hubert. Edificio vincolato, unisce l’architettura storica del XIX secolo a miglioramenti moderni. Con la sala all’italiana, una programmazione eclettica e circa 850 posti, offre un’esperienza culturale elegante e intima per teatro, concerti ed eventi speciali. L’intervento ha compreso restauro, allestimento interno e sonorizzazione, con finiture di livello luxury e accessibilità centrale.",
    ku: "Ev projeya pir-dîsîplînî, ku di nav Galeries Royales Saint-Hubert de li Brukselê ye, berfirehkirin û restorasyona Théâtre Royal des Galeries di nav xwe de digire. Wek avahiyekî parastî, mîmariya dîrokî ya sedsala 19’an bi nûkirinên nûjen re tê hevbeşandin. Bi salona şêwaza Îtalyayî, bernameya herêmî û nêzîkî 850 cihên rûniştinê, ew ezmûneke çandî ya elegan û nêzîk pêşkêş dike ji bo şanoyê, konseran û bûyerên taybet. Kar di nav xwe de restorasyon, amade kirina hundirî û sonorîzasyon digire, bi qedandina luxury û gihîştina navendî.",
    tr: "Bu multidisipliner proje, Brüksel’in kalbinde Galeries Royales Saint-Hubert içinde yer alan Théâtre Royal des Galeries’in genişletilmesi ve restorasyonunu kapsadı. Tescilli bir yapı olarak 19. yüzyıl tarihi mimarisini modern iyileştirmelerle birleştirir. İtalyan tarzı salonu, eklektik programı ve yaklaşık 850 koltuğuyla tiyatro, konser ve özel etkinlikler için zarif ve samimi bir kültür deneyimi sunar. Kapsam; restorasyon, iç mekân düzenlemesi ve seslendirme çalışmalarını, lüks seviyede bitiş ve merkezi erişilebilirlik odağıyla içeriyordu.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // Keep as provided
  year: "2009",
  client: "Galeries Royales Saint-Hubert",

  // You previously used a lock icon, keep it consistent with NATO pattern (localized object)
  value: { en: "🔒" },

  // Based on your new info: 2009-2011
  duration: { en: "2009-2011" },

  // Keep the same size formatting behavior as NATO object
  size: {
    en: "12,500 m²",
    fr: "12 500 m²",
    de: "12.500 m²",
    nl: "12.500 m²",
    it: "12.500 m²",
  },

  status: "completed",
  featured: true,

  image: "/images/projects/com-2.jpg",
  gallery: ["/images/projects/com-2-1.jpg", "/images/projects/com-2-2.jpg", "/images/projects/com-2-3.jpg", "/images/projects/com-2-4.jpg","/images/projects/com-2-5.jpg"],

  // Features rewritten to match NATO-style localized array
  features: [
    {
      fr: "Bâtiment classé",
      de: "Denkmalgeschütztes Gebäude",
      nl: "Beschermd erfgoed",
      it: "Edificio vincolato",
      tr: "Tescilli yapı",
      ku: "Avahiyekî parastî",
      en: "Listed Heritage Building",
    },
    {
      fr: "Architecture historique",
      de: "Historische Architektur",
      nl: "Historische architectuur",
      it: "Architettura storica",
      tr: "Tarihi mimari",
      ku: "Mîmariya dîrokî",
      en: "Historic Architecture",
    },
    {
      fr: "Restauration",
      de: "Restaurierung",
      nl: "Restauratie",
      it: "Restauro",
      tr: "Restorasyon",
      ku: "Restorasyon",
      en: "Restoration",
    },
    {
      fr: "Sonorisation",
      de: "Beschallung",
      nl: "Geluidsinstallatie",
      it: "Sonorizzazione",
      tr: "Seslendirme",
      ku: "Sonorîzasyon",
      en: "Sound System",
    },
    {
      fr: "Aménagement intérieur",
      de: "Innenausbau",
      nl: "Interieurinrichting",
      it: "Allestimento interno",
      tr: "İç mekân düzenlemesi",
      ku: "Amadekirina hundirî",
      en: "Interior Fit-out",
    },
    {
      fr: "Expérience de luxe",
      de: "Luxus-Erlebnis",
      nl: "Luxe beleving",
      it: "Esperienza luxury",
      tr: "Lüks deneyim",
      ku: "Ezmûna luxury",
      en: "Luxury Experience",
    },
    {
      fr: "Accessibilité centrale",
      de: "Zentrale Erreichbarkeit",
      nl: "Centrale bereikbaarheid",
      it: "Accessibilità centrale",
      tr: "Merkezi erişilebilirlik",
      ku: "Gihîştina navendî",
      en: "Central Accessibility",
    },
  ],

  // Based on your new info: team size 90
  teamSize: "90",
}
,

{
  id: "residential-1",
  slug: "galeries-royales-saint-hubert-renovation",
  title: {
    de: "Königliche Saint-Hubert-Galerien",
    en: "Galeries Royales Saint-Hubert",
    fr: "Galeries Royales Saint-Hubert",
    nl: "Koninklijke Sint-Hubertusgalerijen",
    it: "Gallerie Reali Saint-Hubert",
    ku: "Galeriyên Qralî yên Saint-Hubert",
    tr: "Galeries Royales Saint-Hubert",
  },

  // Based on your info: Résidentiel
  category: "residential",

  description: {
    de: "Dieses multidisziplinäre Projekt umfasste die vollständige Renovierung von 19 Apartments sowie mehrere Büro- und Gewerbeflächen. Die Galeries Royales Saint-Hubert sind ein historisches Einkaufspassagen-Ensemble, 1847 eröffnet. Als architektonische Juwelen des 19. Jahrhunderts verbinden sie Eleganz und Funktionalität durch ihr Glasdach und die Metallstruktur. Heute beherbergen die Galerien Luxusgeschäfte, Cafés, Buchhandlungen, Kino, Theater, Apartments und Büroflächen und bieten ein raffiniertes Einkaufserlebnis in einem außergewöhnlichen Rahmen. Dank ihrer zentralen Lage, nur wenige Schritte von der Grand-Place entfernt, sind sie zudem ein unverzichtbarer Durchgangsort für Besucher der Stadt.",
    en: "This multidisciplinary project included the full renovation of 19 apartments as well as several office and retail areas. The Galeries Royales Saint-Hubert are a historic complex of shopping galleries inaugurated in 1847. A true 19th-century architectural jewel, they combine elegance and functionality through their glass roof and metal structure. Today, the galleries host luxury boutiques, cafés, bookshops, a cinema, theatres, prestigious apartments, and office space, offering a refined shopping experience in an exceptional setting. They are also a must-pass location for visitors thanks to their central position, just steps away from the Grand-Place.",
    fr: "Ce projet multidisciplinaire comprenait la rénovation complète de 19 appartements, ainsi que plusieurs espaces de bureaux et de commerces. Les Galeries Royales Saint-Hubert forment un ensemble de galeries commerçantes historiques, inaugurées en 1847. Véritables joyaux architecturaux du XIXe siècle, elles combinent élégance et fonctionnalité grâce à leur toit en verre et leur structure métallique. Les galeries abritent aujourd’hui des boutiques de luxe, des cafés, des librairies, un cinéma, des théâtres, des appartements et des espaces de bureaux, offrant une expérience de shopping raffinée dans un cadre exceptionnel. Leur emplacement central, à quelques pas de la Grand-Place, en fait également un passage incontournable pour les visiteurs.",
    nl: "Dit multidisciplinaire project omvatte de volledige renovatie van 19 appartementen, evenals meerdere kantoor- en handelsruimtes. De Koninklijke Sint-Hubertusgalerijen zijn een historisch geheel van winkelgalerijen, geopend in 1847. Als echte architecturale parel uit de 19e eeuw combineren ze elegantie en functionaliteit dankzij het glazen dak en de metalen structuur. Vandaag huisvesten de galerijen luxeboetieks, cafés, boekhandels, een bioscoop, theaters, prestigieuze appartementen en kantoorruimtes, wat zorgt voor een verfijnde shoppingbeleving in een uitzonderlijke setting. Door de centrale ligging, op wandelafstand van de Grote Markt, zijn ze ook een onmisbare doorgang voor bezoekers.",
    it: "Questo progetto multidisciplinare ha incluso la ristrutturazione completa di 19 appartamenti, oltre a diversi spazi per uffici e negozi. Le Galeries Royales Saint-Hubert sono un complesso storico di gallerie commerciali inaugurato nel 1847. Veri gioielli architettonici del XIX secolo, uniscono eleganza e funzionalità grazie al tetto in vetro e alla struttura metallica. Oggi ospitano boutique di lusso, caffè, librerie, un cinema, teatri, appartamenti prestigiosi e spazi ufficio, offrendo un’esperienza di shopping raffinata in un contesto eccezionale. La posizione centrale, a pochi passi dalla Grand-Place, le rende inoltre un passaggio imprescindibile per i visitatori della città.",
    ku: "Ev projeya pir-dîsîplînî di nav xwe de nûkirina temamî ya 19 apartmanan û jî gelek cihên nivîsgeh û bazarê digirt. Galeries Royales Saint-Hubert komek galeriya bazirganî ya dîrokî ye ku di sala 1847 de hate vekirin. Wek jewelên mîmariya sedsala 19’an, ew bi toqa şûşeyî û struktûra metalî elegans û fonksiyonê têk dikin. Îro, galeri di nav xwe de firotgeha luxury, qehwexane, pirtûkxane, sinema, şano, apartmanên prestîj û cihên nivîsgehê hildigrin, û li navçeyek taybet ezmûneke shoppingê ya nerm pêşkêş dikin. Ji ber cihê wan yê navendî, çend gav ji Grand-Place dûr, ew jî bûne rêya pêdivî ya mêvanên bajarê.",
    tr: "Bu multidisipliner proje, 19 dairenin kapsamlı renovasyonunu ve ayrıca çeşitli ofis ve ticari alanların yenilenmesini içeriyordu. 1847’de açılan Galeries Royales Saint-Hubert, tarihi alışveriş galerilerinden oluşan bir komplekstir. 19. yüzyılın gerçek bir mimari mücevheri olarak cam çatısı ve metal taşıyıcı sistemiyle zarafet ve işlevselliği birleştirir. Günümüzde lüks mağazalar, kafeler, kitapçılar, sinema, tiyatrolar, prestijli daireler ve ofis alanlarına ev sahipliği yaparak olağanüstü bir ortamda rafine bir alışveriş deneyimi sunar. Grand-Place’a birkaç adım mesafedeki merkezi konumu sayesinde şehir ziyaretçileri için de vazgeçilmez bir geçiş noktasıdır.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From your screenshot
  year: "2009",

  // From the page + your earlier convention
  client: "Galeries Royales Saint-Hubert",

  value: { en: "🔒" },

  // Based on your info
  duration: { en: "2009-2011" },

  // From the screenshot: 3,500 m²
  size: {
    en: "3,500 m²",
    fr: "3 500 m²",
    de: "3.500 m²",
    nl: "3.500 m²",
    it: "3.500 m²",
  },

  status: "completed",
  featured: true,

  image: "/images/projects/residen-3.jpg",
    gallery: ["/images/projects/residen-3-1.jpg", "/images/projects/residen-3-2.jpg", "/images/projects/residen-3-3.jpg","/images/projects/residen-3-333.jpg","/images/projects/residen-3-334.jpg","/images/projects/residen-3-335.jpg","/images/projects/residen-3-336.jpg"],

  features: [
    {
      fr: "Architecture historique",
      de: "Historische Architektur",
      nl: "Historische architectuur",
      it: "Architettura storica",
      tr: "Tarihi mimari",
      ku: "Mîmariya dîrokî",
      en: "Historic Architecture",
    },
    {
      fr: "Bâtiment classé",
      de: "Denkmalgeschütztes Gebäude",
      nl: "Beschermd erfgoed",
      it: "Edificio vincolato",
      tr: "Tescilli yapı",
      ku: "Avahiyekî parastî",
      en: "Listed Building",
    },
    {
      fr: "Restauration",
      de: "Restaurierung",
      nl: "Restauratie",
      it: "Restauro",
      tr: "Restorasyon",
      ku: "Restorasyon",
      en: "Restoration",
    },
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Aménagement intérieur",
      de: "Innenausbau",
      nl: "Interieurinrichting",
      it: "Allestimento interno",
      tr: "İç mekân düzenlemesi",
      ku: "Amadekirina hundirî",
      en: "Interior Fit-out",
    },
    {
      fr: "Toiture en tuile",
      de: "Ziegeldach",
      nl: "Pannendak",
      it: "Tetto in tegole",
      tr: "Kiremit çatı",
      ku: "Toka tile",
      en: "Tiled Roof",
    },
    {
      fr: "Toit en verre",
      de: "Glasdach",
      nl: "Glazen dak",
      it: "Tetto in vetro",
      tr: "Cam çatı",
      ku: "Toka şûşe",
      en: "Glass Roof",
    },
    {
      fr: "Appartements de prestige",
      de: "Prestige-Apartments",
      nl: "Prestige-appartementen",
      it: "Appartamenti di prestigio",
      tr: "Prestij daireler",
      ku: "Apartmanên prestîj",
      en: "Prestige Apartments",
    },
    {
      fr: "Cinéma",
      de: "Kino",
      nl: "Bioscoop",
      it: "Cinema",
      tr: "Sinema",
      ku: "Sinema",
      en: "Cinema",
    },
    {
      fr: "Commerce",
      de: "Einzelhandel",
      nl: "Retail",
      it: "Spazi commerciali",
      tr: "Ticari alanlar",
      ku: "Bazirganî",
      en: "Retail",
    },
    {
      fr: "Bureaux",
      de: "Büros",
      nl: "Kantoren",
      it: "Uffici",
      tr: "Ofisler",
      ku: "Nivîsgeh",
      en: "Offices",
    },
  ],

  // Based on your info
  teamSize: "100",
},
 



  // ═══════════════════════════════════════════════════════════════════════════
  // RESIDENTIAL PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════

  {
  id: "commercial-3",
  slug: "anciens-thermes-de-spa",
  title: {
    de: "Ehemalige Thermalbäder von Spa",
    en: "Ancient Spa Thermal Baths",
    fr: "Anciens Thermes de Spa",
    nl: "Oude Thermen van Spa",
    it: "Antiche Terme di Spa",
    ku: "Termên Kevnar ên Spa",
    tr: "Spa Antik Termal Tesisleri",
  },

  category: "commercial",

  description: {
    de: "Die ehemaligen Thermen von Spa sind ein ikonischer Ort des Wohlbefindens, seit der Antike berühmt für ihre Thermalquellen. Die Anlage geht auf das 18. Jahrhundert zurück und zog Besucher aus aller Welt an, darunter königliche und aristokratische Persönlichkeiten. Im Laufe der Jahrhunderte modernisiert, bewahrt sie bis heute eine einzigartige historische Atmosphäre. Als UNESCO-Welterbe wurde das Gebäude vollständig restauriert und in ein 5-Sterne-Hotel mit Zimmern, Wellnessbereich und Restaurant umgewandelt. Zusätzlich entstand im rückwärtigen Hof ein Neubau mit weiteren Zimmern, Besprechungsraum und einer Tiefgarage. Das Ensemble bleibt ein lebendiges Zeugnis der Bedeutung Spas in der Geschichte der Thermalwässer.",
    en: "The former thermal baths of Spa are an iconic wellness landmark, renowned since Antiquity for their thermal springs. Dating back to the 18th century, they welcomed visitors from around the world, including royal and aristocratic figures. Modernized over the centuries, the buildings still preserve a unique historic atmosphere. Now listed as a UNESCO World Heritage site, the complex has been fully restored and repurposed into a 5-star hotel with rooms, a wellness area, and a restaurant. A new building was also erected in the rear courtyard, adding rooms, a meeting room, and an underground car park. The project remains a living testament to Spa’s role in the history of thermal waters.",
    fr: "Les anciens thermes de Spa étaient un lieu emblématique de bien-être et de détente, réputé depuis l’Antiquité pour ses sources thermales. Remontant au XVIIIe siècle, ils ont attiré des visiteurs du monde entier, notamment des personnalités royales et aristocratiques. Modernisés au fil des siècles, les bâtiments conservent une atmosphère historique unique. Aujourd’hui classé au patrimoine mondial de l’UNESCO, l’ensemble a été complètement restauré et réaffecté en hôtel 5 étoiles avec chambres, espace wellness et restaurant. Un nouveau bâtiment a également été érigé dans la cour arrière, comprenant des chambres, une salle de réunion et un parking souterrain. Le site demeure un témoignage vivant de l’importance de Spa dans l’histoire des eaux thermales.",
    nl: "De oude thermen van Spa zijn een iconische wellnessplek, al sinds de Oudheid bekend om hun thermale bronnen. Ze dateren uit de 18e eeuw en trokken bezoekers van over de hele wereld aan, waaronder koninklijke en aristocratische figuren. Doorheen de eeuwen gemoderniseerd, behouden de gebouwen een unieke historische sfeer. Als UNESCO-werelderfgoed is het complex volledig gerestaureerd en herbestemd tot een 5-sterrenhotel met kamers, wellnessruimte en restaurant. In de achterkoer werd ook een nieuw gebouw opgetrokken met extra kamers, een vergaderzaal en een ondergrondse parking. Het project blijft een levend bewijs van Spa’s belang in de geschiedenis van thermale wateren.",
    it: "Gli antichi stabilimenti termali di Spa sono un luogo iconico di benessere e relax, rinomato fin dall’Antichità per le sue sorgenti termali. Risalenti al XVIII secolo, hanno attirato visitatori da tutto il mondo, incluse personalità reali e aristocratiche. Modernizzati nel corso dei secoli, gli edifici conservano ancora un’atmosfera storica unica. Oggi, sito iscritto nel Patrimonio Mondiale dell’UNESCO, il complesso è stato completamente restaurato e riconvertito in un hotel 5 stelle con camere, area wellness e ristorante. È stato inoltre costruito un nuovo edificio nel cortile posteriore con camere, sala riunioni e parcheggio sotterraneo. Il sito resta una testimonianza viva dell’importanza di Spa nella storia delle acque termali.",
    ku: "Termên kevnar ên Spa cihêke nîşanê ya rahiştin û tenduristî bûn, ku ji dema Kevnarî ve bi çavkaniyên termalê têne nas kirin. Ew di sedsala 18’an de dest pê kirin û mêvanên ji hemû dinyayê, her weha kesayetên şahanî û aristokrat, kişand. Her çend bi demê re hatine nûkirin, avahî hîn jî helwesta dîrokî ya taybet diparêze. Îro, wek cihê UNESCO-yê, kompleks bi temamî hate restorasyon kirin û veguherîn hate kirin bo otêlek 5 stêrkî bi odeyan, cihê wellness û restorant. Di hewşa paşîn de jî avahiyeke nû hat avakirin ku ode, salona civînê û parkkirina binerdî tê de heye. Ev projeyê hîn jî şahîdê zindî ye ji girîngiya Spa di dîroka avên termal de.",
    tr: "Spa’nın eski termal yapıları, Antik Çağ’dan beri termal kaynaklarıyla ün salmış, iyi yaşam ve dinlenmenin simgesel bir mekânıdır. 18. yüzyıla uzanan geçmişiyle dünyanın dört bir yanından ziyaretçileri, özellikle kraliyet ve aristokrasi mensuplarını ağırlamıştır. Yüzyıllar boyunca modernize edilmesine rağmen benzersiz tarihi atmosferini korur. Günümüzde UNESCO Dünya Mirası listesinde yer alan yapı bütünüyle restore edilmiş ve odalar, wellness alanı ve restoran içeren 5 yıldızlı bir otele dönüştürülmüştür. Arka avluda ayrıca yeni bir bina inşa edilerek odalar, toplantı salonu ve yer altı otoparkı eklenmiştir. Proje, Spa’nın termal sular tarihindeki önemine dair yaşayan bir tanıklık olmaya devam eder.",
  },

  location: {
    de: "Spa (Provinz Lüttich), Belgien",
    en: "Spa (Province of Liège), Belgium",
    fr: "Spa (Province de Liège), Belgique",
    nl: "Spa (Provincie Luik), België",
    it: "Spa (Provincia di Liegi), Belgio",
    ku: "Spa (Parêzgeha Liège), Belçîka",
    tr: "Spa (Liège Bölgesi), Belçika",
  },

  // From your screenshot
  year: "2020",

  // From your note
  client: "Denys sa",

  value: { en: "🔒" },

  // From your screenshot
  duration: { en: "2020-2025" },

  // From your screenshot: 8.700 m²
  size: {
    en: "8,700 m²",
    fr: "8 700 m²",
    de: "8.700 m²",
    nl: "8.700 m²",
    it: "8.700 m²",
  },

  status: "completed",
  featured: true,

  // Keep your existing naming convention
  image: "/images/projects/spa-3.jpg",
  gallery: ["/images/projects/spa-1.jpg", "/images/projects/spa45.jpg", "/images/projects/spa46.jpg","/images/projects/spa47.jpg"],

  // NATO-style localized features list, based on your bullet points
  features: [
    {
      fr: "Architecture historique",
      de: "Historische Architektur",
      nl: "Historische architectuur",
      it: "Architettura storica",
      tr: "Tarihi mimari",
      ku: "Mîmariya dîrokî",
      en: "Historic Architecture",
    },
    {
      fr: "Bâtiment classé",
      de: "Denkmalgeschütztes Gebäude",
      nl: "Beschermd erfgoed",
      it: "Edificio vincolato",
      tr: "Tescilli yapı",
      ku: "Avahiyekî parastî",
      en: "Listed Building",
    },
    {
      fr: "Restauration",
      de: "Restaurierung",
      nl: "Restauratie",
      it: "Restauro",
      tr: "Restorasyon",
      ku: "Restorasyon",
      en: "Restoration",
    },
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Wellness",
      de: "Wellnessbereich",
      nl: "Wellness",
      it: "Wellness",
      tr: "Wellness",
      ku: "Wellness",
      en: "Wellness",
    },
    {
      fr: "Bâtiment neuf",
      de: "Neubau",
      nl: "Nieuwbouw",
      it: "Nuova costruzione",
      tr: "Yeni bina",
      ku: "Avakirina nû",
      en: "New Building",
    },
    {
      fr: "Espace réunion",
      de: "Besprechungsraum",
      nl: "Vergaderruimte",
      it: "Sala riunioni",
      tr: "Toplantı alanı",
      ku: "Cihê civînê",
      en: "Meeting Space",
    },
    {
      fr: "Parking souterrain",
      de: "Tiefgarage",
      nl: "Ondergrondse parking",
      it: "Parcheggio sotterraneo",
      tr: "Yer altı otoparkı",
      ku: "Parkkirina binerdî",
      en: "Underground Parking",
    },
  ],

  // From your note: 150
  teamSize: "150",
}
,



  {
  id: "industrial-2",
  slug: "johnson-johnson-courcelles",
  title: {
    de: "Johnson & Johnson",
    en: "Johnson & Johnson",
    fr: "Johnson & Johnson",
    nl: "Johnson & Johnson",
    it: "Johnson & Johnson",
    ku: "Johnson & Johnson",
    tr: "Johnson & Johnson",
  },

  category: "industrial",

  description: {
    de: "Ausführung des Rohbaus (gros œuvre) für den Johnson & Johnson-Standort in Courcelles, eine wichtige Produktionsstätte des globalen Pharma- und Gesundheitskonzerns. Die Anlage ist Teil des weltweiten Netzwerks von Johnson & Johnson und spezialisiert sich auf die Herstellung von Gesundheitsprodukten, insbesondere im pharmazeutischen Bereich und bei Medizinprodukten. Das Werk spielt eine Schlüsselrolle in der Produktion von Versorgungslösungen und trägt zur Innovation sowie zur internationalen Distribution medizinischer Produkte bei. Der Standort ist zudem in Nachhaltigkeits- und Corporate-Social-Responsibility-Initiativen eingebunden.",
    en: "Delivery of the structural shell (gros œuvre) for the Johnson & Johnson site in Courcelles, a major production facility of the global pharmaceutical and healthcare group. The plant is part of Johnson & Johnson’s worldwide network and specializes in the manufacturing of healthcare products, including pharmaceuticals and medical devices. It plays a key role in producing care solutions and contributes to innovation and international distribution of medical products. The site is also involved in sustainability and corporate social responsibility initiatives.",
    fr: "Réalisation du gros œuvre du site de Johnson & Johnson à Courcelles, un site de production important du groupe pharmaceutique et de soins de santé mondial. Cet établissement fait partie du réseau global de Johnson & Johnson et se spécialise dans la fabrication de produits de santé, notamment dans les domaines pharmaceutiques et des dispositifs médicaux. L’usine joue un rôle clé dans la production de solutions de soins et contribue à l’innovation et à la distribution de produits médicaux à l’échelle internationale. Le site est également impliqué dans des initiatives de durabilité et de responsabilité sociale.",
    nl: "Realisatie van het gros œuvre van de Johnson & Johnson-site in Courcelles, een belangrijke productielocatie van de wereldwijde farmaceutische en gezondheidszorggroep. Deze vestiging maakt deel uit van het internationale netwerk van Johnson & Johnson en is gespecialiseerd in de productie van gezondheidsproducten, waaronder farmaceutica en medische hulpmiddelen. De fabriek speelt een sleutelrol in de productie van zorgoplossingen en draagt bij aan innovatie en internationale distributie van medische producten. De site is ook betrokken bij duurzaamheids- en maatschappelijke verantwoordelijkheidstrajecten.",
    it: "Realizzazione del gros œuvre del sito Johnson & Johnson a Courcelles, un importante stabilimento produttivo del gruppo globale farmaceutico e sanitario. L’impianto fa parte della rete mondiale di Johnson & Johnson ed è specializzato nella produzione di prodotti per la salute, in particolare in ambito farmaceutico e nei dispositivi medici. Lo stabilimento svolge un ruolo chiave nella produzione di soluzioni di cura e contribuisce all’innovazione e alla distribuzione internazionale di prodotti medicali. Il sito è inoltre coinvolto in iniziative di sostenibilità e responsabilità sociale.",
    ku: "Gros œuvre ya cihê Johnson & Johnson li Courcelles hate pêkanîn, ku cihêkî girîng ê hilberîna komploya navneteweyî ya derman û tenduristiyê ye. Ev sazgeh beşek ji tora cîhanî ya Johnson & Johnson e û di çêkirina hilberên tenduristiyê de taybet e, di nav de hilberên dermanî û amûrên bijîşkî. Fabrîkê roleke bingehîn di çêkirina çareseriyên lêkolîn û xizmetên lêçûnê de hildigrê û di nûbûn û belavkirina navneteweyî ya hilberên bijîşkî de beşdar dibe. Cih di heman demê de di projeyên domdariyê û berpirsiyariya civakî de jî hevdeng e.",
    tr: "Courcelles’teki Johnson & Johnson tesisinin kaba inşaatının (gros œuvre) gerçekleştirilmesi. Bu tesis, küresel ilaç ve sağlık grubu Johnson & Johnson’un önemli üretim sahalarından biridir. Johnson & Johnson’un global ağının bir parçası olan tesis; özellikle farmasötik ürünler ve tıbbi cihazlar dahil sağlık ürünlerinin üretiminde uzmanlaşır. Fabrika, sağlık çözümlerinin üretiminde kritik rol oynar; inovasyona ve tıbbi ürünlerin uluslararası ölçekte dağıtımına katkı sağlar. Tesis aynı zamanda sürdürülebilirlik ve kurumsal sosyal sorumluluk girişimlerinde yer alır.",
  },

  location: {
    de: "Courcelles, Belgien",
    en: "Courcelles, Belgium",
    fr: "Courcelles, Belgique",
    nl: "Courcelles, België",
    it: "Courcelles, Belgio",
    ku: "Courcelles, Belçîka",
    tr: "Courcelles, Belçika",
  },

  // Your corrected info
  year: "2005",
  client: "Galère sa",

  value: { en: "🔒" },

  // Your corrected info
  duration: { en: "2005-2006" },

  // From screenshot: 12.000 m²
  size: {
    en: "12,000 m²",
    fr: "12 000 m²",
    de: "12.000 m²",
    nl: "12.000 m²",
    it: "12.000 m²",
  },

  status: "completed",
  featured: true,

  image: "/images/projects/poto-4.jpg",
    gallery: ["/images/projects/poto-4-1.jpg", "/images/projects/poto-4-2.jpg","/images/projects/poto-4-3.jpg"],

  features: [
    {
      fr: "Bâtiment neuf",
      de: "Neubau",
      nl: "Nieuwbouw",
      it: "Nuova costruzione",
      tr: "Yeni bina",
      ku: "Avakirina nû",
      en: "New Building",
    },
    {
      fr: "Bureaux",
      de: "Büros",
      nl: "Kantoren",
      it: "Uffici",
      tr: "Ofisler",
      ku: "Nivîsgeh",
      en: "Offices",
    },
    {
      fr: "Hall de production",
      de: "Produktionshalle",
      nl: "Productiehal",
      it: "Reparto di produzione",
      tr: "Üretim holü",
      ku: "Halla hilberînê",
      en: "Production Hall",
    },
    {
      fr: "Centre de distribution",
      de: "Distributionszentrum",
      nl: "Distributiecentrum",
      it: "Centro di distribuzione",
      tr: "Dağıtım merkezi",
      ku: "Navenda belavkirinê",
      en: "Distribution Center",
    },
    {
      fr: "Accessibilité",
      de: "Erreichbarkeit",
      nl: "Bereikbaarheid",
      it: "Accessibilità",
      tr: "Erişilebilirlik",
      ku: "Gihîştin",
      en: "Accessibility",
    },
  ],

  // Not provided in your notes; keep the page value unless you tell me otherwise
  teamSize: "165",
}
,


{
  id: "public-3",
  slug: "institut-royal-sciences-naturelles-belgique",
  title: {
    de: "Königliches Belgisches Institut für Naturwissenschaften",
    en: "Royal Belgian Institute of Natural Sciences",
    fr: "Institut royal des sciences naturelles de Belgique",
    nl: "Koninklijk Belgisch Instituut voor Natuurwetenschappen",
    it: "Istituto Reale Belga di Scienze Naturali",
    ku: "Enstîtuya Qralî ya Zanistên Xwezayî ya Belçîkayê",
    tr: "Belçika Kraliyet Doğa Bilimleri Enstitüsü",
  },

  category: "renovation",

  description: {
    de: "Renovierung mehrerer Ebenen, um neue Ausstellungen zu ermöglichen. Das Königliche Belgisches Institut für Naturwissenschaften (IRSNB) organisiert regelmäßig öffentlich zugängliche wissenschaftliche Ausstellungen und bietet eine einzigartige Gelegenheit, den Reichtum der Natur und der Naturwissenschaften zu entdecken.",
    en: "Renovation of several levels to enable new exhibitions. The Royal Belgian Institute of Natural Sciences (RBINS) regularly hosts public scientific exhibitions, offering a unique opportunity to explore the richness of nature and the natural sciences.",
    fr: "Rénovation de plusieurs niveaux pour permettre de nouvelles expositions. L’Institut Royal des Sciences Naturelles de Belgique (IRSNB) organise régulièrement des expositions scientifiques ouvertes au public, offrant une occasion unique de découvrir la richesse de la nature et des sciences naturelles.",
    nl: "Renovatie van meerdere niveaus om nieuwe tentoonstellingen mogelijk te maken. Het Koninklijk Belgisch Instituut voor Natuurwetenschappen (KBIN) organiseert regelmatig wetenschappelijke tentoonstellingen voor het publiek en biedt een unieke kans om de rijkdom van de natuur en de natuurwetenschappen te ontdekken.",
    it: "Ristrutturazione di più livelli per consentire nuove esposizioni. L’Istituto Reale Belga di Scienze Naturali (IRSNB) organizza regolarmente mostre scientifiche aperte al pubblico, offrendo un’opportunità unica per scoprire la ricchezza della natura e delle scienze naturali.",
    ku: "Nûkirina gelek astan ji bo ku pêşangehên nû were çêkirin. Enstîtuya Qralî ya Zanistên Xwezayî ya Belçîkayê (IRSNB) bi rêkûpêk pêşangehên zanistî yên vekirî ji bo gelê giştî rêkxist dike, û derfeteke yekta dide ku kes dewlemendiya xwezayê û zanistên xwezayî bibîne.",
    tr: "Yeni sergilerin kurulabilmesi için birden fazla katın yenilenmesi. Belçika Kraliyet Doğa Bilimleri Enstitüsü (IRSNB/RBINS), halka açık bilimsel sergiler düzenleyerek doğanın ve doğa bilimlerinin zenginliğini keşfetmek için benzersiz bir fırsat sunar.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From screenshot
  year: "2017",

  // From your info
  client: "Régie des bâtiments",

  value: { en: "🔒" },

  // From screenshot
  duration: { en: "2017-2018" },

  // From screenshot: 3.100 m²
  size: {
    en: "3,100 m²",
    fr: "3 100 m²",
    de: "3.100 m²",
    nl: "3.100 m²",
    it: "3.100 m²",
  },

  status: "completed",
  featured: true,
  image: "/images/projects/institut-sciences-naturelles.jpg",

  gallery: [
    "/images/projects/institut-sciences-naturelles-1.jpg",
    "/images/projects/institut-sciences-naturelles-2.jpg"
  ],
  features: [
    {
      fr: "Façade classée",
      de: "Geschützte Fassade",
      nl: "Beschermde gevel",
      it: "Facciata vincolata",
      tr: "Tescilli cephe",
      ku: "Fasadê parastî",
      en: "Listed Façade",
    },
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Sonorisation",
      de: "Beschallung",
      nl: "Geluidsinstallatie",
      it: "Sonorizzazione",
      tr: "Seslendirme",
      ku: "Sonorîzasyon",
      en: "Sound System",
    },
    {
      fr: "Transformation",
      de: "Umgestaltung",
      nl: "Transformatie",
      it: "Trasformazione",
      tr: "Dönüşüm",
      ku: "Guherandin",
      en: "Transformation",
    },
    {
      fr: "Infrastructure publique",
      de: "Öffentliche Infrastruktur",
      nl: "Publieke infrastructuur",
      it: "Infrastruttura pubblica",
      tr: "Kamu altyapısı",
      ku: "Infrastruktura giştî",
      en: "Public Infrastructure",
    },
    {
      fr: "Bâtiment modernisé",
      de: "Modernisiertes Gebäude",
      nl: "Gemoderniseerd gebouw",
      it: "Edificio modernizzato",
      tr: "Modernize bina",
      ku: "Avahiyek nûjenkirî",
      en: "Modernized Building",
    },
    {
      fr: "Expositions permanentes",
      de: "Dauerausstellungen",
      nl: "Permanente tentoonstellingen",
      it: "Esposizioni permanenti",
      tr: "Kalıcı sergiler",
      ku: "Pêşangehên daîmî",
      en: "Permanent Exhibitions",
    },
  ],

  // From your info
  teamSize: "80",
}
,

{
  id: "public-1",
  slug: "institut-royal-meteorologique-belgique-irm",
  title: {
    de: "Königliches Meteorologisches Institut Belgiens (KMI)",
    en: "Royal Meteorological Institute of Belgium (RMI)",
    fr: "Institut Royal Météorologique de Belgique (IRM)",
    nl: "Koninklijk Meteorologisch Instituut van België (KMI)",
    it: "Istituto Reale Meteorologico del Belgio (IRM)",
    ku: "Enstîtuya Qralî ya Meteorolojiyê ya Belçîkayê (IRM)",
    tr: "Belçika Kraliyet Meteoroloji Enstitüsü (IRM)",
  },

  category: "renovation",

  description: {
    de: "Das Königliche Meteorologische Institut Belgiens (KMI) ist die offizielle Agentur des Landes für Wettervorhersage und Klimatologie. Es liefert detaillierte Wetterprognosen, warnt bei extremen Wetterlagen und betreibt Forschung zu klimatischen Phänomenen. Das KMI sammelt und analysiert Daten zu Klima, Stürmen, Temperaturen und Wetterereignissen und trägt so zur öffentlichen Sicherheit sowie zum Management von Umweltrisiken bei. Zudem spielt es eine Schlüsselrolle bei der langfristigen Klimaüberwachung und der Sensibilisierung für Umweltfragen.",
    en: "The Royal Meteorological Institute of Belgium (RMI) is the country’s official agency for weather forecasting and climatology. It provides detailed forecasts, issues alerts during extreme conditions, and conducts research on climate-related phenomena. RMI collects and analyzes data on climate, storms, temperatures, and weather events, supporting public safety and environmental risk management. It also plays a key role in long-term climate monitoring and public awareness on environmental challenges.",
    fr: "L’Institut Royal Météorologique de Belgique (IRM) est l’agence officielle de prévision météorologique et de climatologie en Belgique. Il fournit des prévisions détaillées, émet des alertes en cas de conditions extrêmes et mène des recherches sur les phénomènes climatiques. L’IRM collecte et analyse des données sur le climat, les tempêtes, les températures et les événements météorologiques, contribuant à la sécurité publique et à la gestion des risques environnementaux. Il joue également un rôle clé dans la surveillance du climat à long terme et dans la sensibilisation aux enjeux environnementaux.",
    nl: "Het Koninklijk Meteorologisch Instituut van België (KMI) is de officiële instantie voor weersvoorspelling en klimatologie in België. Het levert gedetailleerde voorspellingen, geeft waarschuwingen bij extreme omstandigheden en voert onderzoek uit naar klimaatgebeurtenissen. Het KMI verzamelt en analyseert gegevens over klimaat, stormen, temperaturen en weersfenomenen en draagt zo bij aan de openbare veiligheid en het beheer van milieurisico’s. Daarnaast speelt het een sleutelrol in langetermijnklimaatmonitoring en bewustmaking rond milieuthema’s.",
    it: "L’Istituto Reale Meteorologico del Belgio (IRM) è l’agenzia ufficiale del Paese per le previsioni meteorologiche e la climatologia. Fornisce previsioni dettagliate, emette allerte in caso di condizioni estreme e conduce ricerche sui fenomeni climatici. L’IRM raccoglie e analizza dati su clima, tempeste, temperature ed eventi meteorologici, contribuendo alla sicurezza pubblica e alla gestione dei rischi ambientali. Svolge inoltre un ruolo chiave nel monitoraggio climatico a lungo termine e nella sensibilizzazione sulle sfide ambientali.",
    ku: "Enstîtuya Qralî ya Meteorolojiyê ya Belçîkayê (IRM) ajansiya fermî ya welatê ye ji bo pêşbînîya hewayê û klimatolojî. Ew pêşbînîyên bi detay, hişyariyên şertên giran û lêkolîn li ser fenomenên klîmî pêşkêş dike. IRM daneyên li ser klîm, bahoz, germahî û bûyerên hewayê kom dike û analîz dike, û bi vî awayî alîkariya ewlehîya giştî û rêveberiya rîskên jîngehî dike. Ew her weha roleke bingehîn di şopandina klîma ya dirêjdemê de û di zêdekirina agahdariyê ya pirsgirêkên jîngehî de jî heye.",
    tr: "Belçika Kraliyet Meteoroloji Enstitüsü (IRM), ülkenin resmi hava tahmini ve klimatoloji kurumudur. Detaylı tahminler sunar, aşırı hava koşullarında uyarılar yayımlar ve iklim olguları üzerine araştırmalar yürütür. IRM; iklim, fırtınalar, sıcaklıklar ve meteorolojik olaylara ilişkin verileri toplar ve analiz eder; böylece kamu güvenliği ve çevresel risk yönetimine katkı sağlar. Ayrıca uzun vadeli iklim izleme ve çevresel konularda farkındalık oluşturma alanında kritik bir rol üstlenir.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From screenshot
  year: "2017",
  client: "Régie des bâtiments",

  value: { en: "🔒" },

  // From screenshot
  duration: { en: "2017-2018" },

  // From screenshot: 900 m²
  size: {
    en: "900 m²",
    fr: "900 m²",
    de: "900 m²",
    nl: "900 m²",
    it: "900 m²",
  },

  status: "completed",
  featured: true,

   image: "/images/projects/com-4.jpg",
    gallery: ["/images/projects/com-4-1.jpg","/images/projects/com-4-234.jpg","/images/projects/toya.jpg","/images/projects/toya1.jpg"],

  features: [
    {
      fr: "Bâtiment classé",
      de: "Denkmalgeschütztes Gebäude",
      nl: "Beschermd erfgoed",
      it: "Edificio vincolato",
      tr: "Tescilli yapı",
      ku: "Avahiyekî parastî",
      en: "Listed Building",
    },
    {
      fr: "Restauration",
      de: "Restaurierung",
      nl: "Restauratie",
      it: "Restauro",
      tr: "Restorasyon",
      ku: "Restorasyon",
      en: "Restoration",
    },
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Aménagement intérieur",
      de: "Innenausbau",
      nl: "Interieurinrichting",
      it: "Allestimento interno",
      tr: "İç mekân düzenlemesi",
      ku: "Amadekirina hundirî",
      en: "Interior Fit-out",
    },
    {
      fr: "Prévisions météorologiques",
      de: "Wettervorhersagen",
      nl: "Weersvoorspellingen",
      it: "Previsioni meteo",
      tr: "Hava tahminleri",
      ku: "Pêşbînîya hewayê",
      en: "Weather Forecasting",
    },
    {
      fr: "Service public",
      de: "Öffentlicher Dienst",
      nl: "Publieke dienstverlening",
      it: "Servizio pubblico",
      tr: "Kamu hizmeti",
      ku: "Xizmeta giştî",
      en: "Public Service",
    },
  ],

  // From your info
  teamSize: "60",
}
,
  // ═══════════════════════════════════════════════════════════════════════════
  // INFRASTRUCTURE PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════


{
  id: "residential-2",
  slug: "ecuyer-brussels",
  title: {
    de: "Ecuyer",
    en: "Ecuyer",
    fr: "Ecuyer",
    nl: "Ecuyer",
    it: "Ecuyer",
    ku: "Ecuyer",
    tr: "Ecuyer",
  },

  category: "residential",

  description: {
    de: "Neubau eines Gebäudes mit sechs Apartments und einer Gewerbefläche, wobei die klassifizierte Vorderfassade erhalten blieb. Das Gebäude befindet sich in zentraler Lage, in der Nähe zahlreicher Annehmlichkeiten, Geschäfte und öffentlicher Verkehrsmittel. Die hochwertigen Wohnungen sind funktional geschnitten, mit großen Fenstern für viel Tageslicht, mehreren Schlafzimmern, einem komfortablen Wohnzimmer, einer ausgestatteten Küche und modernen Bädern.",
    en: "Construction of a building with six apartments and a retail unit, delivered as a new build except for the front façade, which was preserved because it is a listed heritage element. The property is located in a central area close to amenities, shops, and public transport. The high-end apartments feature a functional layout, large windows providing abundant natural light, multiple bedrooms, a comfortable living room, a fitted kitchen, and modern bathrooms.",
    fr: "Réalisation d’un immeuble de six appartements avec commerce. Il s’agit d’une nouvelle construction, à l’exception de la façade avant, maintenue car elle est classée. L’immeuble se situe dans un quartier central, proche de nombreuses commodités, commerces et transports en commun. Les appartements haut de gamme se distinguent par un agencement fonctionnel, de grandes fenêtres apportant beaucoup de lumière naturelle, plusieurs chambres, un salon confortable, une cuisine équipée et une salle de bains moderne.",
    nl: "Realisatie van een gebouw met zes appartementen en een handelsruimte. Het betreft een nieuwbouw, met uitzondering van de voorgevel die behouden werd omdat die beschermd is. Het gebouw ligt in een centrale wijk, dicht bij voorzieningen, winkels en het openbaar vervoer. De high-end appartementen hebben een functionele indeling, grote ramen met veel daglicht, meerdere slaapkamers, een comfortabele woonkamer, een ingerichte keuken en moderne badkamers.",
    it: "Realizzazione di un edificio con sei appartamenti e uno spazio commerciale. Si tratta di una nuova costruzione, ad eccezione della facciata anteriore, mantenuta perché vincolata. L’immobile si trova in una zona centrale, vicino a servizi, negozi e trasporti pubblici. Gli appartamenti di fascia alta presentano una distribuzione funzionale, grandi finestre che garantiscono molta luce naturale, più camere da letto, un soggiorno confortevole, una cucina attrezzata e un bagno moderno.",
    ku: "Avakirina avahiyekê bi şeş apartman û cihê bazirganî. Ev nû-avakirin e, tenê fasada pêşî hate parastin ji ber ku avahiyekî parastî ye. Avahî li navçeyek navendî ye, nêzîkî gelek xizmet, dikan û transporta giştî. Apartmanên astengbûyî bi rêza fonksiyonî, pencereyên mezin ku ronahîya xwezayî zêde dikin, gelek ode, salonê rehet, mitbaxê amade û hemamên nûjen têne diyarkirin.",
    tr: "Altı daire ve bir ticari birimden oluşan bir binanın inşası. Ön cephe, tescilli olduğu için korunmuş; bunun dışında yapı yeni inşa olarak gerçekleştirilmiştir. Bina, olanaklara, mağazalara ve toplu taşımaya yakın, merkezi bir bölgede yer alır. Üst segment daireler; işlevsel planlama, bol doğal ışık sağlayan büyük pencereler, birden fazla yatak odası, konforlu salon, donanımlı mutfak ve modern banyolar sunar.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From screenshot
  year: "2009",
  client: "Galeries Royales Saint-Hubert",

  value: { en: "🔒" },

  // From screenshot
  duration: { en: "2009-2010" },

  // From your info: 1500m²
  size: {
    en: "1,500 m²",
    fr: "1 500 m²",
    de: "1.500 m²",
    nl: "1.500 m²",
    it: "1.500 m²",
  },

  status: "completed",
  featured: true,

    image: "/images/projects/ino.jpg",
    gallery: ["/images/projects/in.jpg"],

  features: [
    {
      fr: "Construction neuve",
      de: "Neubau",
      nl: "Nieuwbouw",
      it: "Nuova costruzione",
      tr: "Yeni inşaat",
      ku: "Avakirina nû",
      en: "New Construction",
    },
    {
      fr: "Façade conservée",
      de: "Erhaltene Fassade",
      nl: "Gevel behouden",
      it: "Facciata conservata",
      tr: "Korunan cephe",
      ku: "Fasad hate parastin",
      en: "Preserved Façade",
    },
    {
      fr: "Aménagement intérieur",
      de: "Innenausbau",
      nl: "Interieurinrichting",
      it: "Allestimento interno",
      tr: "İç mekân düzenlemesi",
      ku: "Amadekirina hundirî",
      en: "Interior Fit-out",
    },
    {
      fr: "Espaces lumineux",
      de: "Helle Räume",
      nl: "Lichte ruimtes",
      it: "Spazi luminosi",
      tr: "Aydınlık alanlar",
      ku: "Cihên ronahî",
      en: "Bright Spaces",
    },
    {
      fr: "Appartements de prestige",
      de: "Prestige-Apartments",
      nl: "Prestige-appartementen",
      it: "Appartamenti di prestigio",
      tr: "Prestij daireler",
      ku: "Apartmanên prestîj",
      en: "Prestige Apartments",
    },
    {
      fr: "Équipements modernes",
      de: "Moderne Ausstattung",
      nl: "Moderne uitrusting",
      it: "Dotazioni moderne",
      tr: "Modern ekipman",
      ku: "Amûrên nûjen",
      en: "Modern Equipment",
    },
    {
      fr: "Chambres spacieuses",
      de: "Geräumige Schlafzimmer",
      nl: "Ruime slaapkamers",
      it: "Camere spaziose",
      tr: "Geniş odalar",
      ku: "Odeyên fireh",
      en: "Spacious Bedrooms",
    },
  ],

  // From your info
  teamSize: "25",
}
,



  // ═══════════════════════════════════════════════════════════════════════════
  // INDUSTRIAL PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════



  // ═══════════════════════════════════════════════════════════════════════════
// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════

{
  id: "infrastructure-1",
  slug: "metro-bruxelles-stations-renovation",
  title: {
    de: "Metro Brüssel",
    en: "Brussels Metro",
    fr: "Métro Bruxelles",
    nl: "Metro Brussel",
    it: "Metro di Bruxelles",
    ku: "Metroya Brukselê",
    tr: "Brüksel Metrosu",
  },

  category: "infrastructure",

  description: {
    de: "Verschiedene Umgestaltungs- und Renovierungsarbeiten an mehreren Stationen. Die Brüsseler Metro ist ein unterirdisches Verkehrsnetz, das die belgische Hauptstadt sehr effizient bedient. Mit vier Hauptlinien (M1, M2, M3, M4) erschließt sie die wichtigsten urbanen Bereiche von der Peripherie bis ins Zentrum und durchquert mehrere Stadtviertel. Moderne Stationen sind gut mit anderen Verkehrsmitteln wie Straßenbahnen und Bussen verknüpft.",
    en: "A program of transformation and renovation works across multiple metro stations. The Brussels Metro is an underground transport network serving the Belgian capital efficiently. Composed of four main lines (M1, M2, M3, M4), it connects key urban areas from the outskirts to the city center, crossing several districts, with modern stations well linked to other transport modes such as trams and buses.",
    fr: "Divers travaux de transformation et de rénovation au niveau de diverses stations. Le métro de Bruxelles est un réseau de transport souterrain qui dessert la capitale belge avec une grande efficacité. Composé de quatre lignes principales (M1, M2, M3, M4), il couvre les principales zones urbaines, de la périphérie au centre-ville, en passant par différents quartiers, avec des stations modernes et bien connectées aux autres modes de transport tels que les trams et les bus.",
    nl: "Diverse transformatie- en renovatiewerken in verschillende metrostations. De Brusselse metro is een ondergronds vervoersnetwerk dat de Belgische hoofdstad zeer efficiënt bedient. Met vier hoofdlijnen (M1, M2, M3, M4) verbindt het de belangrijkste stedelijke zones van de rand tot het centrum en door verschillende wijken. Moderne stations zijn goed gekoppeld aan andere vervoersmiddelen zoals tram en bus.",
    it: "Diversi lavori di trasformazione e ristrutturazione in varie stazioni. La metropolitana di Bruxelles è una rete di trasporto sotterraneo che serve la capitale belga con grande efficienza. Composta da quattro linee principali (M1, M2, M3, M4), copre le principali aree urbane dalla periferia al centro città, attraversando diversi quartieri, con stazioni moderne e ben collegate ad altri mezzi di trasporto come tram e autobus.",
    ku: "Li gelek stasyonên metroê karên guherandin û nûkirin hatin kirin. Metroya Brukselê tora veguheztina binerdî ye ku paytexta Belçîkayê bi karîgerîya bilind xizmet dike. Bi çar rêzikên bingehîn (M1, M2, M3, M4), ew herêmên bingehîn yên bajarî ji derdorê heta navenda bajarê pêk tîne û di nav gelek navçeyan re derbas dibe. Stasyonên nûjen bi tram û otobûsan re baş têkiliyên wan hene.",
    tr: "Farklı metro istasyonlarında dönüşüm ve renovasyon çalışmalarının gerçekleştirilmesi. Brüksel Metrosu, Belçika başkentini yüksek verimlilikle hizmet veren yeraltı ulaşım ağıdır. Dört ana hattan (M1, M2, M3, M4) oluşur; çevre bölgelerden şehir merkezine kadar başlıca kentsel alanları kapsar ve çeşitli semtlerden geçer. Modern istasyonlar tramvay ve otobüs gibi diğer ulaşım türleriyle iyi entegredir.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From screenshot
  year: "2005",

  // From your note (client)
  client: "In Advance sa",

  value: { en: "🔒" },

  // From screenshot
  duration: { en: "2005-2006" },

  // From screenshot: 1.500 m²
  size: {
    en: "1,500 m²",
    fr: "1 500 m²",
    de: "1.500 m²",
    nl: "1.500 m²",
    it: "1.500 m²",
  },

  status: "completed",
  featured: true,

  image: "/images/projects/metro-bruxelles.jpg",

  gallery: [
    "/images/projects/metro-bruxelles-1.jpg",
    "/images/projects/metro-bruxelles-2.jpg"
  ],

  features: [
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Accessibilité",
      de: "Barrierefreiheit",
      nl: "Toegankelijkheid",
      it: "Accessibilità",
      tr: "Erişilebilirlik",
      ku: "Gihîştin",
      en: "Accessibility",
    },
    {
      fr: "Réorganisation",
      de: "Reorganisation",
      nl: "Herorganisatie",
      it: "Riorganizzazione",
      tr: "Yeniden düzenleme",
      ku: "Ji nû ve rêkêşan",
      en: "Reorganization",
    },
    {
      fr: "Infrastructure publique",
      de: "Öffentliche Infrastruktur",
      nl: "Publieke infrastructuur",
      it: "Infrastruttura pubblica",
      tr: "Kamu altyapısı",
      ku: "Infrastruktura giştî",
      en: "Public Infrastructure",
    },
  ],

  // From your note
  teamSize: "20",
}
,

// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════

{
  id: "infrastructure-2",
  slug: "hopital-saint-pierre-brussels",
  title: {
    de: "Krankenhaus Saint-Pierre",
    en: "Saint-Pierre Hospital",
    fr: "Hôpital Saint-Pierre",
    nl: "Sint-Pietersziekenhuis",
    it: "Ospedale Saint-Pierre",
    ku: "Nexweşxaneya Saint-Pierre",
    tr: "Saint-Pierre Hastanesi",
  },

  category: "infrastructure",

  description: {
    de: "Umgestaltung der Parkzone, Bau eines Lagergebäudes und Erstellung eines unterirdischen Tunnels als Verbindung zwischen zwei bestehenden Gebäuden. Das Krankenhaus Saint-Pierre ist ein Referenzkrankenhaus, das in zahlreichen medizinischen Disziplinen hochwertige Versorgung bietet. Es verfügt über moderne Infrastrukturen und spezialisierte Dienste von Notaufnahme und Intensivmedizin bis hin zu Chirurgie, Allgemeinmedizin, Pädiatrie und Gynäkologie. Darüber hinaus ist es ein Forschungs- und Ausbildungszentrum, das Gesundheitsfachkräfte in vielen Spezialisierungen ausbildet. Es zeichnet sich durch einen patientenzentrierten Ansatz und seine Fähigkeit aus, den Bedürfnissen der Brüsseler Bevölkerung gerecht zu werden.",
    en: "Transformation of the parking area, construction of a storage building, and delivery of an underground tunnel connection between two existing buildings. Saint-Pierre Hospital is a reference healthcare institution, providing high-quality care across a wide range of medical fields. It is equipped with modern infrastructure and specialized services from emergency and intensive care to surgery, general medicine, pediatrics, and gynecology. The hospital is also a research and teaching center, training healthcare professionals across many medical specialties. It stands out for its patient-centered approach and its capacity to respond to the needs of the Brussels population.",
    fr: "Transformation de la zone de parking, construction d’un bâtiment de stockage et réalisation d’un tunnel de passage souterrain reliant deux bâtiments existants. L’Hôpital Saint-Pierre est un établissement hospitalier de référence, offrant des soins de haute qualité dans divers domaines médicaux. Il dispose d’infrastructures modernes et de services spécialisés, des urgences aux soins intensifs, en passant par la chirurgie, la médecine générale, la pédiatrie et la gynécologie. L’Hôpital Saint-Pierre est également un centre de recherche et d’enseignement, formant des professionnels de santé dans de nombreuses spécialités médicales. Il se distingue par son approche centrée sur le patient et sa capacité à répondre aux besoins de la population bruxelloise.",
    nl: "Transformatie van de parkeerzone, bouw van een opslaggebouw en realisatie van een ondergrondse tunnelverbinding tussen twee bestaande gebouwen. Het Sint-Pietersziekenhuis is een referentieziekenhuis dat hoogwaardige zorg biedt in uiteenlopende medische domeinen. Het beschikt over moderne infrastructuur en gespecialiseerde diensten, van spoedgevallen en intensieve zorg tot chirurgie, algemene geneeskunde, pediatrie en gynaecologie. Het ziekenhuis is ook een onderzoeks- en opleidingscentrum dat zorgprofessionals opleidt in talrijke specialisaties. Het onderscheidt zich door een patiëntgerichte aanpak en het vermogen om in te spelen op de behoeften van de Brusselse bevolking.",
    it: "Trasformazione dell’area parcheggio, costruzione di un edificio di stoccaggio e realizzazione di un tunnel sotterraneo di collegamento tra due edifici esistenti. L’Ospedale Saint-Pierre è una struttura ospedaliera di riferimento che offre cure di alta qualità in numerosi ambiti medici. È dotato di infrastrutture moderne e servizi specializzati, dal pronto soccorso alla terapia intensiva, fino alla chirurgia, medicina generale, pediatria e ginecologia. È inoltre un centro di ricerca e insegnamento che forma professionisti sanitari in molte specialità. Si distingue per l’approccio centrato sul paziente e la capacità di rispondere ai bisogni della popolazione di Bruxelles.",
    ku: "Guherandina qada parkingê, avakirina avahiyekê ji bo stokajê û çêkirina tunelê binerdî ji bo girêdana navbera du avahiyên heyî. Nexweşxaneya Saint-Pierre sazgeheke bingehîn a tenduristiyê ye ku di gelek qada bijîşkî de lênihêrîna bilind pêşkêş dike. Ew bi infrastruktura nûjen û xizmetên taybetî ve hatî amadekirin, ji acîl û ICU heta cerrahî, bijîşkiya giştî, pediatrî û jînolojî. Nexweşxane her weha navendekî lêkolîn û fêrgehî ye ku pîşesazên tenduristiyê di gelek taybetmendiyan de perwerde dike. Ew bi rêbazê xwe yê navendî li ser nexweş û kapasîteya bersivdanê bo hewcedariyên gelê Brukselê tê diyarkirin.",
    tr: "Otopark alanının dönüştürülmesi, bir depolama binasının inşası ve mevcut iki bina arasında yer altı geçişini sağlayan bir tünelin yapılması. Saint-Pierre Hastanesi, birçok tıbbi alanda yüksek kaliteli hizmet sunan referans bir sağlık kuruluşudur. Acil servis ve yoğun bakımdan cerrahiye, genel tıbba, pediatriye ve jinekolojiye kadar uzanan uzmanlaşmış hizmetler ve modern altyapılarla donatılmıştır. Ayrıca sağlık profesyonellerini pek çok branşta yetiştiren bir araştırma ve eğitim merkezidir. Hasta odaklı yaklaşımı ve Brüksel halkının ihtiyaçlarına yanıt verme kapasitesiyle öne çıkar.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From screenshot
  year: "2008",

  // From your info
  client: "Valens sa",

  value: { en: "🔒" },

  // From screenshot
  duration: { en: "2008-2009" },

  // From screenshot: 3.500 m²
  size: {
    en: "3,500 m²",
    fr: "3 500 m²",
    de: "3.500 m²",
    nl: "3.500 m²",
    it: "3.500 m²",
  },

  status: "completed",
  featured: true,

 image: "/images/projects/hopital-saint-pierre.jpg",

  gallery: [
    "/images/projects/hopital-saint-pierre-1.jpg",
    "/images/projects/hopital-saint-pierre-2.jpg"],

  features: [
    {
      fr: "Construction neuve",
      de: "Neubau",
      nl: "Nieuwbouw",
      it: "Nuova costruzione",
      tr: "Yeni inşaat",
      ku: "Avakirina nû",
      en: "New Construction",
    },
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Infrastructure publique",
      de: "Öffentliche Infrastruktur",
      nl: "Publieke infrastructuur",
      it: "Infrastruttura pubblica",
      tr: "Kamu altyapısı",
      ku: "Infrastruktura giştî",
      en: "Public Infrastructure",
    },
    {
      fr: "Parking",
      de: "Parkbereich",
      nl: "Parking",
      it: "Parcheggio",
      tr: "Otopark",
      ku: "Parking",
      en: "Parking",
    },
    {
      fr: "Moderne",
      de: "Modern",
      nl: "Modern",
      it: "Moderno",
      tr: "Modern",
      ku: "Nûjen",
      en: "Modern",
    },
    {
      fr: "Centre de recherche et d’enseignement",
      de: "Forschungs- und Ausbildungszentrum",
      nl: "Onderzoeks- en opleidingscentrum",
      it: "Centro di ricerca e insegnamento",
      tr: "Araştırma ve eğitim merkezi",
      ku: "Navenda lêkolîn û fêrgehê",
      en: "Research & Teaching Center",
    },
  ],

  // From your info
  teamSize: "30",
}
,


  {
  id: "commercial-4",
  slug: "hotel-sofitel-brussels-europe",
  title: {
    de: "Sofitel Hotel Brüssel Europa",
    en: "Sofitel Brussels Europe Hotel",
    fr: "Hôtel Sofitel Bruxelles Europe",
    nl: "Sofitel Hotel Brussel Europe",
    it: "Hotel Sofitel Bruxelles Europe",
    ku: "Otel Sofitel Bruksel Ewropa",
    tr: "Sofitel Brüksel Europe Oteli",
  },

  category: "commercial",

  description: {
    de: "Ausführung des Rohbaus eines Gebäudes mit Hotel und sechs Apartments im seitlichen Gebäudeteil. Das Sofitel Brussels Europe an der Place Jourdan ist ein modernes Luxushotel, ideal gelegen im Europaviertel von Brüssel. Es bietet elegante, zeitgenössische Zimmer mit hochwertiger Ausstattung für ein außergewöhnliches Aufenthaltserlebnis. Die Nähe zu den EU-Institutionen und zum öffentlichen Verkehr macht es zu einer praktischen und angenehmen Wahl für Geschäftsreisende und Touristen.",
    en: "Delivery of the structural shell (gros œuvre) for a building combining a hotel and six apartments on the lateral wing. Sofitel Brussels Europe, located on Place Jourdan, is a modern luxury hotel ideally positioned in Brussels’ European Quarter. It offers elegant contemporary rooms with high-quality amenities for an outstanding stay. Its proximity to EU institutions and public transport makes it a convenient and enjoyable choice for business travelers and tourists.",
    fr: "Réalisation du gros œuvre du bâtiment comprenant un hôtel et 6 appartements sur la partie latérale. Le Sofitel Brussels Europe, situé Place Jourdan, est un hôtel de luxe moderne, idéalement placé dans le quartier européen de Bruxelles. Il propose des chambres élégantes et contemporaines, avec des équipements de haute qualité pour une expérience de séjour exceptionnelle. Sa situation à proximité des institutions européennes et des transports en commun en fait un choix pratique et agréable pour les voyageurs d'affaires et les touristes.",
    nl: "Realisatie van het gros œuvre van een gebouw met een hotel en 6 appartementen in het zijgedeelte. Sofitel Brussels Europe, gelegen aan het Jourdanplein, is een modern luxehotel, ideaal in de Europese wijk van Brussel. Het biedt elegante, hedendaagse kamers met hoogwaardige voorzieningen voor een uitzonderlijke verblijfservaring. Dankzij de nabijheid van EU-instellingen en het openbaar vervoer is het een praktische en aangename keuze voor zakenreizigers en toeristen.",
    it: "Realizzazione del gros œuvre di un edificio che comprende un hotel e 6 appartamenti nella parte laterale. Il Sofitel Brussels Europe, situato in Place Jourdan, è un hotel di lusso moderno, in posizione ideale nel quartiere europeo di Bruxelles. Offre camere eleganti e contemporanee con dotazioni di alta qualità per un soggiorno eccezionale. La vicinanza alle istituzioni europee e ai trasporti pubblici lo rende una scelta comoda e piacevole per viaggiatori d’affari e turisti.",
    ku: "Di vê projeyê de gros œuvre ya avahiyekê hate pêkanîn ku di nav xwe de otêlek û 6 apartmanan di beşa alî de digire. Sofitel Brussels Europe li Place Jourdanê ye, otêlek luxury ya modern e ku di navçeya Ewropî ya Brukselê de bi cihê baş e. Odeyên wî elegan û nûjen in û bi amûrên kaliteyê bilind re ezmûnekî hêja ya mayînê pêşkêş dike. Nêzîkbûna wî bi sazgehên Ewropî û transporta giştî, wî ji bo rêwîyên karsazî û gerokên turîzmê bijarekî rehet û xweş dike.",
    tr: "Otel ve yan bölümde 6 daire içeren bir yapının kaba inşaatının (gros œuvre) gerçekleştirilmesi. Place Jourdan’da yer alan Sofitel Brussels Europe, Brüksel’in Avrupa Bölgesi’nde ideal konumlanmış modern bir lüks oteldir. Yüksek kalite donanımlara sahip şık ve çağdaş odalar sunarak ayrıcalıklı bir konaklama deneyimi sağlar. Avrupa kurumlarına ve toplu ulaşıma yakınlığı, iş amaçlı seyahat edenler ve turistler için pratik ve keyifli bir tercih olmasını sağlar.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From your info
  year: "2004",
  client: "Valens sa",

  value: { en: "🔒" },

  // From your info (and matches the screenshot intent)
  duration: { en: "2004-2006" },

  // From screenshot: 7.500 m²
  size: {
    en: "7,500 m²",
    fr: "7 500 m²",
    de: "7.500 m²",
    nl: "7.500 m²",
    it: "7.500 m²",
  },

  status: "completed",
  featured: true,

   image: "/images/projects/update.jpg",
    gallery: ["/images/projects/update1.jpg","/images/projects/update3.jpg"],

  features: [
    {
      fr: "Bâtiment neuf",
      de: "Neubau",
      nl: "Nieuwbouw",
      it: "Nuova costruzione",
      tr: "Yeni bina",
      ku: "Avakirina nû",
      en: "New Building",
    },
    {
      fr: "Hôtel",
      de: "Hotel",
      nl: "Hotel",
      it: "Hotel",
      tr: "Otel",
      ku: "Otel",
      en: "Hotel",
    },
    {
      fr: "Appartements",
      de: "Apartments",
      nl: "Appartementen",
      it: "Appartamenti",
      tr: "Daireler",
      ku: "Apartman",
      en: "Apartments",
    },
    {
      fr: "Chambres haut de gamme",
      de: "High-End Zimmer",
      nl: "High-end kamers",
      it: "Camere di alta gamma",
      tr: "Üst segment odalar",
      ku: "Odeyên kaliteyê bilind",
      en: "High-End Rooms",
    },
    {
      fr: "Restaurant",
      de: "Restaurant",
      nl: "Restaurant",
      it: "Ristorante",
      tr: "Restoran",
      ku: "Restoran",
      en: "Restaurant",
    },
    {
      fr: "Parking souterrain",
      de: "Tiefgarage",
      nl: "Ondergrondse parking",
      it: "Parcheggio sotterraneo",
      tr: "Yer altı otoparkı",
      ku: "Parkkirina binerdî",
      en: "Underground Parking",
    },
    {
      fr: "Skyline",
      de: "Skyline",
      nl: "Skyline",
      it: "Skyline",
      tr: "Skyline",
      ku: "Skyline",
      en: "Skyline",
    },
  ],

  // From your info
  teamSize: "130",
},


// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════
{
  id: "public-2",
  slug: "commissariat-police-longdoz-liege",
  title: {
    de: "Polizeikommissariat Longdoz",
    en: "Longdoz Police Station",
    fr: "Commissariat Police Longdoz",
    nl: "Politiekantoor Longdoz",
    it: "Commissariato di Polizia Longdoz",
    ku: "Komesaryaya Polîsê Longdoz",
    tr: "Longdoz Polis Karakolu",
  },

  category: "renovation",

  description: {
    de: "Renovierung des Kommissariats der Kriminalpolizei (judizielle Brigade) der Polizei von Lüttich sowie Neuorganisation des Parkplatzes. Das Polizeikommissariat Longdoz in Lüttich ist eine der wichtigsten Einheiten der Polizei von Lüttich und spielt eine zentrale Rolle für die Sicherheit der Stadt sowie das Einsatzmanagement vor Ort. Das Kommissariat ist ein Schlüsselpunkt für polizeiliche Operationen in diesem Bereich von Lüttich.",
    en: "Renovation of the judicial police station of the Liège police and reorganization of the parking area. The Longdoz police station in Liège is one of the main units of the Liège police, playing a central role in city security and the management of field operations. It is a key operational hub for police activity in this part of Liège.",
    fr: "Rénovation du commissariat de la brigade judiciaire de la police de Liège et réorganisation du parking. Le commissariat de police Longdoz à Liège est l'une des principales unités de la police de Liège. Il joue un rôle central dans la sécurité de la ville et la gestion des interventions sur le terrain. Le commissariat est un point clé pour les opérations de la police dans cette zone de Liège.",
    nl: "Renovatie van het commissariaat van de gerechtelijke brigade van de politie van Luik en herorganisatie van de parking. Het politiekantoor Longdoz in Luik is één van de belangrijkste eenheden van de politie van Luik en speelt een centrale rol in de veiligheid van de stad en het beheer van interventies op het terrein. Het commissariaat is een sleutelpunt voor politieoperaties in dit deel van Luik.",
    it: "Ristrutturazione del commissariato della brigata giudiziaria della polizia di Liegi e riorganizzazione del parcheggio. Il commissariato di polizia Longdoz a Liegi è una delle principali unità della polizia di Liegi e svolge un ruolo centrale nella sicurezza della città e nella gestione degli interventi sul territorio. È un punto chiave per le operazioni di polizia in questa zona di Liegi.",
    ku: "Nûkirina komesaryaya brigadeya dadgehî ya polîsa Liège û ji nû ve rêxistina parkingê. Komesaryaya polîsê Longdoz li Liège yek ji yekîneyên sereke yên polîsa Liège ye, ku roleke navendî di ewlehîya bajarê û rêveberiya destwerdanên li ser erdê de hildigrê. Ev komesaryayê xala bingehîn e ji bo operasyona polîsê di vê qada Liège de.",
    tr: "Liège polisinin adli birimine ait karakolun yenilenmesi ve otoparkın yeniden düzenlenmesi. Liège’deki Longdoz Polis Karakolu, Liège polisinin başlıca birimlerinden biridir; şehir güvenliğinde ve sahadaki müdahalelerin yönetiminde merkezi rol oynar. Bu karakol, Liège’in bu bölgesindeki polis operasyonları için kilit bir merkezdir.",
  },

  location: {
    de: "Lüttich, Belgien",
    en: "Liège, Belgium",
    fr: "Liège, Belgique",
    nl: "Luik, België",
    it: "Liegi, Belgio",
    ku: "Liège, Belçîka",
    tr: "Liège, Belçika",
  },

  // From screenshot
  year: "2008",

  // From your info
  client: "BPC sa",

  value: { en: "🔒" },

  // From screenshot
  duration: { en: "2008-2009" },

  // From screenshot: 650 m²
  size: {
    en: "650 m²",
    fr: "650 m²",
    de: "650 m²",
    nl: "650 m²",
    it: "650 m²",
  },

  status: "completed",
  featured: true,

 image: "/images/projects/police-longdoz.jpg",

  gallery: [
    "/images/projects/police-longdoz-1.jpg",
    "/images/projects/police-longdoz-2.jpg"
  ],

  features: [
    {
      fr: "Infrastructure publique",
      de: "Öffentliche Infrastruktur",
      nl: "Publieke infrastructuur",
      it: "Infrastruttura pubblica",
      tr: "Kamu altyapısı",
      ku: "Infrastruktura giştî",
      en: "Public Infrastructure",
    },
    {
      fr: "Bâtiment modernisé",
      de: "Modernisiertes Gebäude",
      nl: "Gemoderniseerd gebouw",
      it: "Edificio modernizzato",
      tr: "Modernize bina",
      ku: "Avahiyek nûjenkirî",
      en: "Modernized Building",
    },
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Parking",
      de: "Parkbereich",
      nl: "Parking",
      it: "Parcheggio",
      tr: "Otopark",
      ku: "Parking",
      en: "Parking",
    },
    {
      fr: "Sécurité publique",
      de: "Öffentliche Sicherheit",
      nl: "Openbare veiligheid",
      it: "Sicurezza pubblica",
      tr: "Kamu güvenliği",
      ku: "Ewlehîya giştî",
      en: "Public Safety",
    },
  ],

  // From your info
  teamSize: "20",
}
,

// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════



// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════
{
  id: "public-4",
  slug: "ecole-europeenne",
  title: {
    de: "Europäische Schule",
    en: "European School",
    fr: "École européenne",
    nl: "Europese School",
    it: "Scuola Europea",
    ku: "Dibistana Ewropî",
    tr: "Brüksel Avrupa",
  },

  category: "renovation",

  description: {
    de: "Renovierung des Fabiola-Gebäudes der Europäischen Schule in Brüssel. Die Europäische Schule Brüssel ist eine internationale Bildungseinrichtung, die zum Netzwerk der Europäischen Schulen gehört und für die Kinder von EU-Bediensteten konzipiert wurde. Sie bietet mehrsprachigen Unterricht mit Curricula in mehreren Amtssprachen der EU und deckt alle Bildungsstufen ab, vom Kindergarten bis zur Sekundarstufe.",
    en: "Renovation of the Fabiola building of the European School in Brussels. The European School of Brussels is an international educational institution within the network of European Schools, designed to meet the needs of children of European Union officials. It provides multilingual education with curricula in several EU official languages and covers all levels from kindergarten to secondary education.",
    fr: "Rénovation du bâtiment Fabiola de l’École européenne à Bruxelles. L’École européenne de Bruxelles est une institution éducative internationale, faisant partie du réseau des écoles européennes, conçue pour répondre aux besoins des enfants de fonctionnaires de l’Union européenne. Elle propose un enseignement multilingue, avec des cursus en plusieurs langues officielles de l’UE, et couvre tous les niveaux, de la maternelle au secondaire.",
    nl: "Renovatie van het Fabiola-gebouw van de Europese School in Brussel. De Europese School Brussel is een internationale onderwijsinstelling binnen het netwerk van Europese Scholen, bedoeld voor kinderen van EU-ambtenaren. Ze biedt meertalig onderwijs met programma’s in meerdere officiële EU-talen en dekt alle niveaus van kleuter tot secundair onderwijs.",
    it: "Ristrutturazione dell’edificio Fabiola della Scuola Europea di Bruxelles. La Scuola Europea di Bruxelles è un’istituzione educativa internazionale che fa parte della rete delle Scuole Europee, progettata per i figli dei funzionari dell’Unione Europea. Offre un insegnamento multilingue con programmi in diverse lingue ufficiali dell’UE e copre tutti i livelli, dalla scuola dell’infanzia alla secondaria.",
    ku: "Nûkirina avahiya Fabiola ya Dibistana Ewropî ya Brukselê. Dibistana Ewropî ya Brukselê sazgeheke perwerdehiyê ya navneteweyî ye ku beşek ji tora dibistanên Ewropî ye, ji bo hewcedariyên zarokên karmendên Yekîtiya Ewropî hatiye çêkirin. Ew perwerdehiya pirzimanî pêşkêş dike, bi bernameyên fêrkirinê di gelek zimanên fermî yên YEK de, û hemû astên perwerdehiyê ji seretayî heta dibistana navîn digire.",
    tr: "Brüksel Avrupa Okulu’nun Fabiola binasının yenilenmesi. Brüksel Avrupa Okulu, Avrupa Okulları ağına bağlı uluslararası bir eğitim kurumudur ve Avrupa Birliği kurumlarında çalışanların çocuklarının ihtiyaçlarını karşılamak üzere tasarlanmıştır. Birden fazla AB resmi dilinde müfredat sunan çok dilli eğitim verir ve anaokulundan lise seviyesine kadar tüm kademeleri kapsar.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From screenshot
  year: "2017",

  // From your info
  client: "Régie des bâtiments",

  value: { en: "🔒" },

  // From screenshot
  duration: { en: "2017-2018" },

  // From screenshot: 3.100 m²
  size: {
    en: "3,100 m²",
    fr: "3 100 m²",
    de: "3.100 m²",
    nl: "3.100 m²",
    it: "3.100 m²",
  },

  status: "completed",
  featured: true,

  image: "/images/projects/ecole-europeenne-fabiola.jpg",

  gallery: [
   
    "/images/projects/ecole-europeenne-fabiola-2.jpg","/images/projects/ecole-europeenne-fabiola-3.jpg","/images/projects/ecole-europeenne-fabiola-4.jpg","/images/projects/ecole-europeenne-fabiola-5.jpg"
  ],
  features: [
    {
      fr: "Infrastructure publique",
      de: "Öffentliche Infrastruktur",
      nl: "Publieke infrastructuur",
      it: "Infrastruttura pubblica",
      tr: "Kamu altyapısı",
      ku: "Infrastruktura giştî",
      en: "Public Infrastructure",
    },
    {
      fr: "Insonorisation",
      de: "Schalldämmung",
      nl: "Geluidsisolatie",
      it: "Insonorizzazione",
      tr: "Ses yalıtımı",
      ku: "Dengparastin",
      en: "Soundproofing",
    },
    {
      fr: "Bâtiment modernisé",
      de: "Modernisiertes Gebäude",
      nl: "Gemoderniseerd gebouw",
      it: "Edificio modernizzato",
      tr: "Modernize bina",
      ku: "Avahiyek nûjenkirî",
      en: "Modernized Building",
    },
    {
      fr: "Sécurité publique",
      de: "Öffentliche Sicherheit",
      nl: "Openbare veiligheid",
      it: "Sicurezza pubblica",
      tr: "Kamu güvenliği",
      ku: "Ewlehîya giştî",
      en: "Public Safety",
    },
  ],

  // From your info
  teamSize: "30",
}
,

// ───────────────────────────────────────────────────────────────────────────
// NEW PROJECTS FROM: PROJET 2.docx
// ───────────────────────────────────────────────────────────────────────────
{
  id: "public-5",
  slug: "prison-de-forest-bruxelles",
  title: {
    de: "Gefängnis Forest",
    en: "Forest Prison",
    fr: "Prison de Forest",
    nl: "Gevangenis van Vorst",
    it: "Carcere di Forest",
    ku: "Girtîgeha Forest",
    tr: "Forest Hapishanesi",
  },

  // Even if your banner shows "INDUSTRIEL", your content is clearly public-sector.
  category: "renovation",

  description: {
    de: "Verschiedene Umgestaltungs- und Renovierungsarbeiten an den Gemeinschaftsbereichen. Das Gefängnis Forest ist eine der wichtigsten Justizvollzugsanstalten der belgischen Hauptstadt. Anfang des 20. Jahrhunderts erbaut, ist es bekannt für die Unterbringung von Verurteilten, insbesondere bei mittleren bis schweren Straftaten. Die Anstalt umfasst mehrere Trakte, darunter Hochsicherheitsbereiche, Arbeitsräume und Flächen für Rehabilitationsmaßnahmen.",
    en: "A set of transformation and renovation works focused on the common areas. Forest Prison is one of the main penitentiary institutions in the Belgian capital. Built in the early 20th century, it is known for accommodating sentenced inmates, including those convicted for medium to serious criminal offenses. The prison includes multiple blocks with high-security areas, work rooms, and spaces dedicated to rehabilitation.",
    fr: "Divers travaux de transformation et de rénovation au niveau des parties communes. La Prison de Forest est l'une des principales institutions pénitentiaires de la capitale belge. Construite au début du XXe siècle, elle est connue pour sa capacité à accueillir des détenus condamnés à des peines de prison, notamment pour des infractions criminelles de moyenne à grande envergure. La prison est équipée de différents blocs, comprenant des quartiers de haute sécurité, des salles de travail et des espaces dédiés à la rééducation.",
    nl: "Diverse transformatie- en renovatiewerken in de gemeenschappelijke delen. De gevangenis van Vorst is een van de belangrijkste penitentiaire instellingen van de Belgische hoofdstad. Gebouwd in het begin van de 20e eeuw, staat ze bekend om de opvang van veroordeelde gedetineerden, ook voor middelzware tot zware misdrijven. De gevangenis bestaat uit verschillende blokken met onder meer hoogbeveiligde afdelingen, werkruimtes en zones voor re-integratie en revalidatie.",
    it: "Diversi lavori di trasformazione e ristrutturazione delle aree comuni. Il carcere di Forest è una delle principali istituzioni penitenziarie della capitale belga. Costruito all’inizio del XX secolo, è noto per ospitare detenuti condannati a pene detentive, anche per reati di media e grande entità. La struttura comprende diversi blocchi, con aree ad alta sicurezza, sale di lavoro e spazi dedicati alla riabilitazione.",
    ku: "Li beşên hevpar karên guherandin û nûkirin hatin kirin. Girtîgeha Forest yek ji sazgehên sereke yên girtîgehê yên paytexta Belçîkayê ye. Di destpêka sedsala 20’an de hatiye avakirin û bi wî re tê zanîn ku girtîyên ku bi ceza hatine mehkûmkirin, bi taybetî ji bo sûcên navîn û giran, di nav xwe de dihewîne. Girtîgeh bi gelek blokan ve hatiye saz kirin, di nav de beşên ewlehîya bilind, odeyên kar û cihên taybet ji bo vegerandina civakî (rehabilitasyon).",
    tr: "Ortak alanlarda dönüşüm ve renovasyon çalışmalarının gerçekleştirilmesi. Forest Hapishanesi, Belçika başkentinin başlıca cezaevi kurumlarından biridir. 20. yüzyılın başlarında inşa edilmiş olan tesis, orta ve ağır düzey suçlardan hüküm giymiş mahkumları barındırmasıyla bilinir. Hapishane; yüksek güvenlikli bölümler, çalışma odaları ve rehabilitasyona ayrılmış alanları içeren farklı bloklardan oluşur.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // You provided corrections: 2018
  year: "2018",

  // From screenshot panel
  client: "Régie des bâtiments",

  value: { en: "🔒" },

  // You provided correction: 2018 (single year)
  duration: { en: "-2018-" },

  // From banner: 4,500 m²
  size: {
    en: "4,500 m²",
    fr: "4 500 m²",
    de: "4.500 m²",
    nl: "4.500 m²",
    it: "4.500 m²",
  },

  status: "completed",
  featured: false,

    image: "/images/projects/prison-forest.jpg",
  gallery: [ "/images/projects/prison-forest-1.jpg"],

  features: [
    {
      fr: "Infrastructure publique",
      de: "Öffentliche Infrastruktur",
      nl: "Publieke infrastructuur",
      it: "Infrastruttura pubblica",
      tr: "Kamu altyapısı",
      ku: "Infrastruktura giştî",
      en: "Public Infrastructure",
    },
    {
      fr: "Insonorisation",
      de: "Schalldämmung",
      nl: "Geluidsisolatie",
      it: "Insonorizzazione",
      tr: "Ses yalıtımı",
      ku: "Dengparastin",
      en: "Soundproofing",
    },
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Renforcement sécurité",
      de: "Sicherheitsverstärkung",
      nl: "Versterkte beveiliging",
      it: "Rafforzamento della sicurezza",
      tr: "Güvenlik güçlendirme",
      ku: "Hêzkirina ewlehiyê",
      en: "Security Reinforcement",
    },
  ],

  // Not provided in your notes or screenshot text; keep null/omit if your schema allows.
  // If you want a value, tell me and I’ll set it.
  teamSize: "—",
}
,
{
  id: "public-6",
  slug: "planetarium-bruxelles",
  title: {
    de: "Planetarium",
    en: "Planetarium",
    fr: "Planétarium",
    nl: "Planetarium",
    it: "Planetario",
    ku: "Planetarium",
    tr: "Planetaryum",
  },

  category: "renovation",

  description: {
    de: "Austausch der Innen-Schreinereiarbeiten und Außenanlagen. Das Planetarium ist ein Ort, der der Astronomie und der Entdeckung des Universums gewidmet ist. Durch seine Projektionskuppel bietet es ein immersives Erlebnis, bei dem Besucher astronomische Shows sowie Projektionen zu Sternbildern, Planeten und Himmelsphänomenen erleben können.",
    en: "Replacement of interior joinery and upgrades to exterior works. The Planetarium is a venue dedicated to astronomy and the discovery of the universe, offering an immersive experience through its projection dome where visitors can attend astronomical shows and projections about constellations, planets, and celestial phenomena.",
    fr: "Remplacement des menuiseries intérieures et des aménagements extérieurs. Le Planétarium est un lieu dédié à l’astronomie et à la découverte de l’univers. Il offre une expérience immersive grâce à son dôme de projection, où les visiteurs peuvent assister à des spectacles astronomiques et des projections sur les constellations, les planètes et les phénomènes célestes.",
    nl: "Vervanging van het binnenschrijnwerk en aanpassingen aan de buitenaanleg. Het Planetarium is een plek gewijd aan astronomie en de ontdekking van het universum. Dankzij de projectiekoepel krijgen bezoekers een immersieve ervaring met shows en projecties over sterrenbeelden, planeten en hemelverschijnselen.",
    it: "Sostituzione delle falegnamerie interne e interventi di sistemazione esterna. Il Planetario è un luogo dedicato all’astronomia e alla scoperta dell’universo, offrendo un’esperienza immersiva grazie alla sua cupola di proiezione, dove i visitatori possono assistere a spettacoli astronomici e proiezioni su costellazioni, pianeti e fenomeni celesti.",
    ku: "Guherandina menûseriyên hundirî û çalakiyên derve. Planetarium cihêk e ku ji bo astronômî û keşfkirina gerdûnê hatiye taybet kirin. Bi gundika projeksiyonê, ew ezmûneke têkildar û navdar pêşkêş dike ku ziyaretkar dikarin şanoyên astronômî û projeksiyonên li ser stêrkêş, planet û fenomenên asmanî bibînin.",
    tr: "İç doğrama (marangozluk) elemanlarının yenilenmesi ve dış çevre düzenlemeleri. Planetaryum, astronomi ve evrenin keşfine adanmış bir mekândır. Ziyaretçilere projeksiyon kubbesi sayesinde sürükleyici bir deneyim sunar; takımyıldızlar, gezegenler ve göksel olaylar üzerine gösteriler ve projeksiyonlar izlenebilir.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From screenshot + your note
  year: "2018",

  // From screenshot panel
  client: "Régie des bâtiments",

  value: { en: "🔒" },

  // From screenshot (explicit months)
  duration: { en: "-2018-" },

  // From screenshot: 1,500 m²
  size: {
    en: "1,500 m²",
    fr: "1 500 m²",
    de: "1.500 m²",
    nl: "1.500 m²",
    it: "1.500 m²",
  },

  status: "completed",
  featured: false,

  image: "/images/projects/planetarium-brussels.jpg",
  gallery: ["/images/projects/planetarium-brussels-1.jpg", "/images/projects/planetarium-brussels-2.jpg","/images/projects/planetarium-brussels-3.jpg","/images/projects/planetarium-brussels-4.jpg"],

  features: [
    {
      fr: "Rénovation",
      de: "Renovierung",
      nl: "Renovatie",
      it: "Ristrutturazione",
      tr: "Yenileme",
      ku: "Nûkirin",
      en: "Renovation",
    },
    {
      fr: "Aménagement",
      de: "Ausstattung / Ausbau",
      nl: "Inrichting",
      it: "Allestimento",
      tr: "Düzenleme",
      ku: "Amadekirin",
      en: "Fit-out / Upgrades",
    },
    {
      fr: "Réorganisation",
      de: "Reorganisation",
      nl: "Herorganisatie",
      it: "Riorganizzazione",
      tr: "Yeniden düzenleme",
      ku: "Ji nû ve rêkêşan",
      en: "Reorganization",
    },
    {
      fr: "Service public",
      de: "Öffentlicher Dienst",
      nl: "Publieke dienstverlening",
      it: "Servizio pubblico",
      tr: "Kamu hizmeti",
      ku: "Xizmeta giştî",
      en: "Public Service",
    },
  ],

  // Not provided
  teamSize: "10",
}
,
{
  id: "commercial-5",
  slug: "ing-banque-bruxelles-central",
  title: {
    de: "ING Bank",
    en: "ING Bank",
    fr: "ING Banque",
    nl: "ING Bank",
    it: "Banca ING",
    ku: "Bankaya ING",
    tr: "ING Bankası",
  },

  category: "commercial",

  description: {
    de: "Renovierung und Neuorganisation der Parkflächen. ING Brussels Central ist eine Bankfiliale im Herzen von Brüssel. Sie zeichnet sich durch ihre strategische Lage aus und bietet eine gute Erreichbarkeit, einschließlich einer Tiefgarage.",
    en: "Renovation and reorganization of parking areas. ING Brussels Central is a bank branch located in the heart of Brussels. It stands out for its strategic location and easy accessibility, including an underground parking facility.",
    fr: "Rénovation et réorganisation des surfaces de stationnement. ING Bruxelles Central est une agence bancaire située au cœur de Bruxelles. L'agence se distingue par son emplacement stratégique, offrant une accessibilité facile avec un parking souterrain.",
    nl: "Renovatie en herorganisatie van de parkeervlakken. ING Brussels Central is een bankkantoor in het hart van Brussel. Het valt op door de strategische ligging en vlotte bereikbaarheid, met ondergrondse parking.",
    it: "Ristrutturazione e riorganizzazione delle superfici di parcheggio. ING Brussels Central è una filiale bancaria situata nel cuore di Bruxelles. Si distingue per la posizione strategica e la facile accessibilità, con parcheggio sotterraneo.",
    ku: "Nûkirin û ji nû ve rêxistina cihên parkê. ING Brussels Central şaxek bankê ye ku li navenda Brukselê ye. Ew bi cihê xwe yê stratejîk tê diyarkirin û gihîştina hêsan pêşkêş dike, bi parkinga binerdî jî heye.",
    tr: "Otopark alanlarının yenilenmesi ve yeniden düzenlenmesi. ING Brussels Central, Brüksel’in merkezinde yer alan bir banka şubesidir. Stratejik konumu sayesinde kolay erişim sunar ve yer altı otoparkı ile öne çıkar.",
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },

  // From screenshot + your note
  year: "2009",

  // From your info (contractor/client field in your schema)
  client: "Van Laere sa",

  value: { en: "🔒" },

  // From screenshot (explicit months)
  duration: { en: "-2009-" },

  // From screenshot: 1,200 m²
  size: {
    en: "1,200 m²",
    fr: "1 200 m²",
    de: "1.200 m²",
    nl: "1.200 m²",
    it: "1.200 m²",
  },

  status: "completed",
  featured: false,

    image: "/images/projects/ing-parking.jpg",
  gallery: ["/images/projects/ing-parking-1.jpg","/images/projects/ing-parking-2.jpg"],

  features: [
    {
      fr: "Réorganisation",
      de: "Reorganisation",
      nl: "Herorganisatie",
      it: "Riorganizzazione",
      tr: "Yeniden düzenleme",
      ku: "Ji nû ve rêkêşan",
      en: "Reorganization",
    },
    {
      fr: "Aménagement",
      de: "Ausstattung / Ausbau",
      nl: "Inrichting",
      it: "Allestimento",
      tr: "Düzenleme",
      ku: "Amadekirin",
      en: "Fit-out / Upgrades",
    },
    {
      fr: "Parking",
      de: "Parkbereich",
      nl: "Parking",
      it: "Parcheggio",
      tr: "Otopark",
      ku: "Parking",
      en: "Parking",
    },
    {
      fr: "Service public",
      de: "Öffentlicher Dienst",
      nl: "Publieke dienstverlening",
      it: "Servizio pubblico",
      tr: "Kamu hizmeti",
      ku: "Xizmeta giştî",
      en: "Public Service",
    },
  ],

  
  teamSize: "10",
}
,
{
  id: "infrastructure-3",
  slug: "bureaux-site-gazier-fluxys-gand",
  title: {
    de: "Büros der Gasstandort Fluxys",
    en: "Fluxys Gas Site Offices",
    fr: "Bureaux du site gazier Fluxys",
    nl: "Fluxys gassite kantoren",
    it: "Uffici del sito gas Fluxys",
    ku: "Ofîsên cihê gazê Fluxys",
    tr: "Fluxys Gaz Sahası Ofisleri",
  },

  category: "infrastructure",

  description: {
    de: "Ausführung des Rohbaus für die Büros und Hallen des Gasstandorts. Fluxys (Standort Zelzate) ist Teil des Netzes von Fluxys, dem Betreiber der Gastransportinfrastruktur in Belgien. Die Anlage spielt eine Schlüsselrolle beim Transport und der Verteilung von Erdgas in Europa. Der Standort verfügt zudem über Speichertanks und Kompressorstationen, um eine effiziente Gasbewirtschaftung sicherzustellen und so die Stabilität und Versorgungssicherheit in Belgien und der Region zu gewährleisten.",
    en: "Delivery of the structural works for the offices and halls of the gas site. Fluxys Zelzate is part of the Fluxys network, the operator of Belgium’s gas transport infrastructure. This facility plays a key role in the transport and distribution of natural gas across Europe. The site also includes storage tanks and compression stations to ensure efficient gas management, supporting stability and security of energy supply in Belgium and the region.",
    fr: "Réalisation du gros œuvre des bureaux et des halls du site du gaz. Fluxys Zelzate est une installation du réseau de Fluxys, le gestionnaire de l'infrastructure de transport de gaz en Belgique. Cette installation joue un rôle clé dans le transport et la distribution du gaz naturel en Europe. Le site dispose également de réservoirs de stockage et de stations de compression afin d’assurer une gestion efficace du gaz naturel, garantissant la stabilité et la sécurité de l’approvisionnement énergétique en Belgique et dans la région.",
    nl: "Uitvoering van de ruwbouwwerken van de kantoren en hallen van de gassite. Fluxys Zelzate is een installatie binnen het netwerk van Fluxys, de beheerder van de gastransportinfrastructuur in België. Deze site speelt een sleutelrol in het transport en de distributie van aardgas in Europa. Daarnaast zijn er opslagtanks en compressiestations om het aardgas efficiënt te beheren, wat de stabiliteit en leveringszekerheid in België en de regio ondersteunt.",
    it: "Realizzazione del grosso delle opere strutturali per gli uffici e i capannoni del sito gas. Fluxys Zelzate è un impianto della rete Fluxys, gestore dell’infrastruttura di trasporto del gas in Belgio. Questo sito svolge un ruolo chiave nel trasporto e nella distribuzione del gas naturale in Europa. Comprende inoltre serbatoi di stoccaggio e stazioni di compressione per garantire una gestione efficiente del gas naturale e la stabilità e sicurezza dell’approvvigionamento energetico in Belgio e nella regione.",
    ku: "Rêxistina gros-oeuvre ya ofîsan û holên cihê gazê. Fluxys Zelzate beşek ji tora Fluxys e, rêveberê infrastruktura veguheztina gazê li Belçîkayê. Ev cih roleke bingehîn di veguheztin û belavkirina gazê xwezayî li Ewropa de dilîze. Her weha di nav de tankên stokajê û stasyonên kompresyonê hene da ku rêveberiya gazê bi karîgerî were kirin, û bi vî awayî aramî û ewlehîya peydakirina enerjiyê li Belçîkayê û herêmê were parastin.",
    tr: "Gaz sahasının ofisleri ve holleri için kaba inşaat (gros œuvre) çalışmalarının gerçekleştirilmesi. Fluxys Zelzate, Belçika’daki gaz iletim altyapısının işletmecisi Fluxys’in ağında yer alan bir tesistir. Bu tesis, Avrupa genelinde doğal gazın taşınması ve dağıtımında kilit rol oynar. Sahada ayrıca depolama tankları ve kompresör istasyonları bulunur; bu sayede doğal gazın verimli yönetimi sağlanır ve Belçika ile bölgede enerji arzının istikrarı ve güvenliği desteklenir.",
  },

  location: {
    de: "Gent, Belgien",
    en: "Ghent, Belgium",
    fr: "Gand, Belgique",
    nl: "Gent, België",
    it: "Gand, Belgio",
    ku: "Gand, Belçîka",
    tr: "Gent, Belçika",
  },

  // From screenshot + your note
  year: "2006",

  // From screenshot panel
  client: "BESIX",

  value: { en: "🔒" },

  // From screenshot
  duration: { en: "-2006-" },

  // From screenshot: 3.100 m²
  size: {
    en: "3,100 m²",
    fr: "3 100 m²",
    de: "3.100 m²",
    nl: "3.100 m²",
    it: "3.100 m²",
  },

  status: "completed",
  featured: false,

  image: "/images/projects/fluxys-ghent-offices.jpg",
  gallery: ["/images/projects/fluxys-ghent-offices-1.jpg"],
  features: [
    {
      fr: "Construction neuve",
      de: "Neubau",
      nl: "Nieuwbouw",
      it: "Nuova costruzione",
      tr: "Yeni inşaat",
      ku: "Avakirina nû",
      en: "New Construction",
    },
    {
      fr: "Énergie",
      de: "Energie",
      nl: "Energie",
      it: "Energia",
      tr: "Enerji",
      ku: "Enerjî",
      en: "Energy",
    },
    {
      fr: "Service public",
      de: "Öffentlicher Dienst",
      nl: "Publieke dienstverlening",
      it: "Servizio pubblico",
      tr: "Kamu hizmeti",
      ku: "Xizmeta giştî",
      en: "Public Service",
    },
    {
      fr: "Parking",
      de: "Parkbereich",
      nl: "Parking",
      it: "Parcheggio",
      tr: "Otopark",
      ku: "Parking",
      en: "Parking",
    },
  ],


  teamSize: "10",
}





];

// Helper functions
export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getRelatedProjects(currentSlug: string, category: Project["category"], limit = 3): Project[] {
  return projects
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export const categoryInfo = {
  commercial: {
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    heroImage: "/images/services/commercial.jpg",
  },
  residential: {
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    heroImage: "/images/services/residential.jpg",
  },
  infrastructure: {
    icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
    heroImage: "/images/services/infrastructure.jpg",
  },
  industrial: {
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
    heroImage: "/images/services/industrial.jpg",
  },
  renovation: {
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    heroImage: "/images/services/renovation.jpg",
  },
};



