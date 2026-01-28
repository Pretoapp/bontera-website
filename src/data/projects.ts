// src/data/projects.ts
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - STATIC PROJECTS DATA
// All project data stored locally without Sanity dependency
// ═══════════════════════════════════════════════════════════════════════════

export type Project = {
  id: string;
  slug: string;
  title: {
    de: string;
    en: string;
    fr: string;
    nl: string;
    it: string;
    ku: string;
    tr: string;
  };
  category: "commercial" | "residential" | "infrastructure" | "industrial" | "renovation";
  description: {
    de: string;
    en: string;
    fr: string;
    nl: string;
    it: string;
    ku: string;
    tr: string;
  };
  location: {
    de: string;
    en: string;
    fr: string;
    nl: string;
    it: string;
    ku: string;
    tr: string;
  };
  year: string;
  client: string;
  value: string;
  duration: string;
  size: string;
  status: "completed" | "ongoing" | "upcoming";
  featured: boolean;
  image: string;
  gallery: string[];
  scope?: {
    de: string;
    en: string;
    fr: string;
    nl: string;
    it: string;
    ku: string;
    tr: string;
  };
  features?: string[];
  teamSize?: string;
};

export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // COMMERCIAL PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════
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
    category: "infrastructure",
    description: {
      de: "Das neue NATO-Hauptquartier ist ein hochmoderner Komplex mit über 250.000 m² Fläche, der höchste Sicherheitsstandards mit nachhaltiger Architektur verbindet.",
      en: "The new NATO Headquarters is a state-of-the-art complex spanning over 250,000 m², combining the highest security standards with sustainable architecture and BREEAM certification.",
      fr: "Le nouveau siège de l'OTAN est un complexe ultramoderne de plus de 250 000 m², alliant les plus hautes normes de sécurité à une architecture durable et une certification BREEAM.",
      nl: "Het nieuwe NAVO-hoofdkwartier is een ultramodern complex van meer dan 250.000 m², dat de hoogste veiligheidsnormen combineert met duurzame architectuur en BREEAM-certificering.",
      it: "Il nuovo Quartier Generale della NATO è un complesso all'avanguardia di oltre 250.000 m², che combina i più alti standard di sicurezza con architettura sostenibile e certificazione BREEAM.",
      ku: "Serekaniya nû ya NATO kompleksek pêşkeftî ye ku ji 250,000 m² zêdetir e, standardên ewlehiyê yên herî bilind bi mîmariya domdar û sertîfîkaya BREEAM re dike yek.",
      tr: "Yeni NATO Karargahı, en yüksek güvenlik standartlarını sürdürülebilir mimari ve BREEAM sertifikasyonu ile birleştiren 250.000 m²'nin üzerinde son teknoloji bir komplekstir.",
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
    year: "2024",
    client: "NATO - North Atlantic Treaty Organization",
    value: "€1.2B",
    duration: "48 months",
    size: "250,000 m²",
    status: "completed",
    featured: true,
    image: "/images/projects/commercial-1.jpg",
    gallery: ["/images/projects/commercial-1-1.jpg", "/images/projects/commercial-1-2.jpg", "/images/projects/commercial-1-3.jpg"],
    features: ["BREEAM Excellent", "Advanced Security Systems", "Conference Center", "Sustainable Design"],
    teamSize: "850",
  },
  {
    id: "commercial-2",
    slug: "europa-business-center",
   title: {
    de: "Königliches Galerietheater",
    en: "Théâtre Royal des Galeries",
    fr: "Théâtre Royal des Galeries",
    nl: "Koninklijk Theater der Galerijen",
    it: "Teatro Reale delle Gallerie",
    ku: "Şanoya Qral a Galeriyan",
    tr: "Galeriler Kraliyet Tiyatrosu",
  },
    category: "renovation",
 description: {
    de: "Historisches Theater im Herzen der Galeries Royales Saint-Hubert, im italienischen Stil, mit ganzjährigem Programm und einem Saal mit ca. 850 Plätzen.",
    en: "Historic theatre inside the Galeries Royales Saint-Hubert in central Brussels, Italian-style auditorium, year-round programming, and around 850 seats.",
    fr: "Théâtre historique au cœur des Galeries Royales Saint-Hubert, salle à l’italienne, programmation toute l’année et environ 850 places.",
    nl: "Historisch theater in de Koninklijke Sint-Hubertusgalerijen, Italiaans zaaltype, jaarrond programma en circa 850 zitplaatsen.",
    it: "Teatro storico nelle Galeries Royales Saint-Hubert, sala all’italiana, programmazione tutto l’anno e circa 850 posti.",
    ku: "Şanoyeke dîrokî di nav Galeries Royales Saint-Hubert de, bi salona şêwaza Îtalyayî, bernameya salane û nêzîkî 850 cihên rûniştinê.",
    tr: "Brüksel merkezindeki Galeries Royales Saint-Hubert içinde yer alan, İtalyan tarzı salonu, yıl boyu programı ve yaklaşık 850 koltuğu olan tarihi tiyatro.",
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
    year: "1847",
  client: "Galeries Royales Saint-Hubert (integrated venue)",
  value: "non disclosed",
  duration: "1846–1847 (inaugurated 20 June 1847)",
  size: "850 seats",
  status: "completed",
  featured: true,
    image: "/images/projects/com-2.jpg",
    gallery: ["/images/projects/com-2-1.jpg", "/images/projects/com-2-2.jpg"],
    features: ["Flexible Workspaces", "Conference Center", "Underground Parking", "Fitness Center"],
    teamSize: "320",
  },
  {
    id: "commercial-3",
    slug: "valens-sa-development",
 title: {
  de: "NHQ Development, neues Verteidigungs-Hauptquartier in Evere",
  en: "NHQ Development, new Defence HQ in Evere",
  fr: "NHQ Development, nouveau QG de la Défense à Evere",
  nl: "NHQ Development, nieuw hoofdkwartier van Defensie in Evere",
  it: "NHQ Development, nuovo quartier generale della Difesa a Evere",
  ku: "Pêşveçûna NHQ, sernavê nû yê Parastinê li Evere",
  tr: "NHQ Development, Evere'de yeni Savunma Karargâhı",
},
    category: "infrastructure",
    description: {
      de: "Hochwertiges Gewerbebauprojekt für Valens SA mit modernster Ausstattung und nachhaltiger Bauweise.",
      en: "Premium commercial construction project for Valens SA with state-of-the-art facilities and sustainable building practices.",
      fr: "Projet de construction commerciale premium pour Valens SA avec installations ultramodernes et pratiques de construction durables.",
      nl: "Premium commercieel bouwproject voor Valens SA met ultramoderne faciliteiten en duurzame bouwpraktijken.",
      it: "Progetto di costruzione commerciale premium per Valens SA con strutture all'avanguardia e pratiche edilizie sostenibili.",
      ku: "Projeya avakirina bazirganî ya premium ji bo Valens SA bi tesîsên pêşkeftî û pratîkên avakirina domdar.",
      tr: "Valens SA için son teknoloji tesisler ve sürdürülebilir yapı uygulamaları ile premium ticari inşaat projesi.",
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
    year: "2023",
    client: "Valens SA",
    value: "€499M",
    duration: "32 months",
    size: "114,000 m²",
    status: "ongoing",
    featured: true,
    image: "/images/projects/coco-3.jpg",
    gallery: ["/images/projects/coco-3-1.jpg", "/images/projects/coco-3-2.jpg"],
    features: ["Premium Finishes", "Sustainable Design", "Modern Infrastructure", "Event Spaces"],
    teamSize: "280",
  },
  {
    id: "commercial-4",
    slug: "retail-plaza-hamburg",
    title: {
    de: "Königliches Meteorologisches Institut (Belgien)",
    en: "Royal Meteorological Institute of Belgium (RMI)",
    fr: "Institut Royal Météorologique de Belgique (IRM)",
    nl: "Koninklijk Meteorologisch Instituut van België (KMI)",
    it: "Istituto Reale Meteorologico del Belgio",
    ku: "Enstîtuya Meteorolojiyê ya Qral a Belçîkayê",
    tr: "Belçika Kraliyet Meteoroloji Enstitüsü",
  },
    category: "infrastructure",
    description: {
         de: "Föderales wissenschaftliches Institut in Ukkel (Brüssel), das Wetter- und Klimadienste bereitstellt und Forschung zu Wetter und Klima betreibt.",
    en: "Federal scientific institute in Uccle (Brussels) providing weather and climate services and conducting research on weather and climate.",
    fr: "Institut scientifique fédéral à Uccle (Bruxelles) fournissant des services météo et climat et menant des recherches sur le temps et le climat.",
    nl: "Federaal wetenschappelijk instituut in Ukkel (Brussel) dat weer- en klimaatdiensten levert en onderzoek doet naar weer en klimaat.",
    it: "Istituto scientifico federale a Uccle (Bruxelles) che fornisce servizi meteo e climatici e svolge ricerca su tempo e clima.",
    ku: "Enstîtûteke zanistî ya federal li Uccle (Bruksel) ku karûbarên hewayê û klîmayê pêşkêş dike û lêkolînê li ser wan dike.",
    tr: "Uccle (Brüksel)’de bulunan, hava ve iklim hizmetleri sunan ve hava/iklim araştırmaları yapan federal bilimsel enstitü.",
  },
    location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles , Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika",
  },
    year: "1913",
  client: "Belgian Federal Science Policy (BELSPO) - Federal Scientific Institute",
  value: "public federal institute",
  duration: "Operational since 1913",
  size: "site building",
  status: "completed",
  featured: true,
    image: "/images/projects/com-4.jpg",
    gallery: ["/images/projects/com-4-1.jpg"],
    features: ["150+ Stores", "Cinema Complex", "Food Court", "Family Entertainment"],
    teamSize: "380",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RESIDENTIAL PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "residential-1",
    slug: "galere-sa-residences",
    title: {
    de: "Espace Trianon (Lüttich)",
  en: "Espace Trianon (Liège)",
  fr: "Espace Trianon (Liège)",
  nl: "Espace Trianon (Luik)",
  it: "Espace Trianon (Liegi)",
  ku: "Espace Trianon (Liège)",
  tr: "Espace Trianon (Liège)",
},
    category: "residential",
    description: {
     de: "Neubau eines Wohnprojekts mit 5 Gebäuden (A bis E) in Lüttich: insgesamt 68 Wohnungen (35 bis 165 m²), jeweils mit Terrasse oder Garten, privatem Keller, Tiefgarage (ca. 94 bis 95 PKW) sowie Gewerbeflächen im Untergeschoss. Erschlossen über eine halbprivate Esplanade.",
  en: "New construction of a residential project with 5 buildings (A to E) in Liège: 68 apartments (35 to 165 m²), each with a terrace or garden, private cellar, underground parking (about 94 to 95 cars), and retail space in the basement, organized around a semi-private esplanade.",
  fr: "Construction neuve d’un projet résidentiel de 5 immeubles (A à E) à Liège: 68 appartements (35 à 165 m²), chacun avec terrasse ou jardin, cave privative, parking souterrain (environ 94 à 95 voitures) et surfaces commerciales en sous-sol, organisé autour d’une esplanade semi-privée.",
  nl: "Nieuwbouw van een residentieel project met 5 gebouwen (A tot E) in Luik: 68 appartementen (35 tot 165 m²), elk met terras of tuin, private kelder, ondergrondse parking (ongeveer 94 tot 95 wagens) en commerciële ruimte in de kelder, rond een semi-private esplanade.",
  it: "Nuova costruzione di un progetto residenziale con 5 edifici (A–E) a Liegi: 68 appartamenti (35–165 m²), ciascuno con terrazza o giardino, cantina privata, parcheggio interrato (circa 94–95 auto) e spazi commerciali nel seminterrato, organizzato attorno a un’esplanade semi-privata.",
  ku: "Avakirina nû ya projeyek niştecîh bi 5 avahiyan (A–E) li Liège: 68 apartman (35–165 m²), her yek bi teras an jî baxçe, keldera taybet, parkkirina binerd (nêzîkî 94–95 otomobîl) û cihên bazirganî li jêrerdê, bi esplanadek nîv-taybet ve hatî rêxistin.",
  tr: "Liège’de 5 binadan (A–E) oluşan yeni konut projesi: 68 daire (35–165 m²), her birinde teras veya bahçe, özel depo (kiler), yeraltı otoparkı (yaklaşık 94–95 araç) ve bodrum katta ticari alanlar, yarı özel bir esplanad etrafında kurgulanmıştır.",
},
    location: {
     de: "Boulevard de la Sauvenière 12-14, 4000 Lüttich, Belgien",
  en: "Boulevard de la Sauvenière 12-14, 4000 Liège, Belgium",
  fr: "Boulevard de la Sauvenière 12-14, 4000 Liège, Belgique",
  nl: "Boulevard de la Sauvenière 12-14, 4000 Luik, België",
  it: "Boulevard de la Sauvenière 12-14, 4000 Liegi, Belgio",
  ku: "Boulevard de la Sauvenière 12-14, 4000 Liège, Belçîka",
  tr: "Boulevard de la Sauvenière 12-14, 4000 Liège, Belçika",
},
    year: "2024",
    client: "Galere SA",
    value: "€165M",
    duration: "34 months",
    size: "52,000 m²",
    status: "completed",
    featured: true,
    image: "/images/projects/resido-1-1.jpg",
    gallery: ["/images/projects/residosi-1-1.jpg", "/images/projects/residentos-1-2.jpg"],
    features: [
  "5 Buildings (A–E)",
  "68 Apartments (35–165 m²)",
  "Terrace or Garden for Each Unit",
  "Private Cellars",
  "Underground Parking (94–95 cars)",
  "Retail Space in Basement",
  "Semi-private Esplanade",
  "Shared Roof Terrace",
  "PV Panels for Common Areas",
],
   teamSize: "Not publicly disclosed",
  },
  {
    id: "residential-2",
    slug: "villa-estate-cologne",
    title: {
     de: "Sofitel Hotel Brüssel",
    en: "Sofitel Hotel Brussels",
    fr: "Hôtel Sofitel Bruxelles",
    nl: "Sofitel Hotel Brussel",
    it: "Hotel Sofitel Bruxelles",
    ku: "Otelê Sofitel Bruxelles",
    tr: "Sofitel Otel Brüksel",
  },
    category: "residential",
    description: {
   de: "Luxushotel in Brüssel mit eleganten Zimmern, Tagungsbereichen und gehobenem Service in zentraler Lage.",
    en: "Luxury hotel in Brussels offering elegant rooms, meeting spaces, and premium service in a central location.",
    fr: "Hôtel de luxe à Bruxelles proposant des chambres élégantes, des espaces de réunion et un service haut de gamme, idéalement situé.",
    nl: "Luxe hotel in Brussel met elegante kamers, vergaderruimtes en premium service op een centrale locatie.",
    it: "Hotel di lusso a Bruxelles con camere eleganti, spazi per riunioni e servizi premium in posizione centrale.",
    ku: "Otelekî luks li Bruxelles bi odeyên şîk, cihên civînê û karûbarên bilind di cihê navendî de.",
    tr: "Brüksel’de merkezi konumda; şık odalar, toplantı alanları ve üst düzey hizmet sunan lüks otel.",
  },
    location: {
     de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruxelles, Belçîka",
    tr: "Brüksel, Belçika",
  },
   year: "2023",
  client: "Sofitel / Accor",
  value: "non disclosed",
  duration: "48",
  size: "non disclosed",
  status: "completed",
  featured: true,
    image: "/images/projects/dential-2.jpg",
    gallery: ["/images/projects/dential-2-1.jpg"],
    features: ["45 Custom Villas", "Private Security", "Clubhouse", "Tennis Courts"],
    teamSize: "180",
  },
  {
    id: "residential-3",
    slug: "waterfront-apartments",
   title: {
    de: "Galeries Saint-Hubert",
    en: "Galeries Saint-Hubert",
    fr: "Galeries Saint-Hubert",
    nl: "Sint-Hubertusgalerijen",
    it: "Gallerie di Sant’Uberto",
    ku: "Galeriyên Saint-Hubert",
    tr: "Saint-Hubert Galerileri",
  },
    category: "commercial",
    description: {
        de: "Ikonische überdachte Einkaufspassagen (Königs-, Königinnen- und Prinzengalerie) mit Glasdach, Luxusgeschäften, Cafés und Kulturangeboten im Herzen von Brüssel.",
    en: "Iconic covered shopping arcades (King’s, Queen’s and Princes’ Galleries) with a glass roof, luxury retail, cafés, and cultural venues in the heart of Brussels.",
    fr: "Passages commerciaux couverts emblématiques (Galerie du Roi, de la Reine et des Princes) avec verrière, boutiques haut de gamme, cafés et lieux culturels au cœur de Bruxelles.",
    nl: "Iconische overdekte winkelgalerijen (Konings-, Koninginne- en Prinsengalerij) met glazen dak, luxewinkels, cafés en culturele locaties in het centrum van Brussel.",
    it: "Iconiche gallerie commerciali coperte (del Re, della Regina e dei Principi) con tetto in vetro, retail di lusso, caffè e spazi culturali nel cuore di Bruxelles.",
    ku: "Galeriyên bazirganiyê yên sergirtî (ya Şah, ya Şahbîn û ya Prinsan) bi serbanê şûşeyî, firotgehên luks, kafeyan û cihên çandî li navenda Brukselê.",
    tr: "Brüksel’in kalbinde cam çatılı, lüks mağazalar, kafeler ve kültürel mekânlar barındıran ikonik kapalı alışveriş galerileri (Kral, Kraliçe ve Prens Galerileri).",
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
    year: "2009",
    client: "Galeries Saint-Hubert",
    value: "€78M",
    duration: "24 months",
    size: "3,500 m²",
    status: "completed",
    featured: true,
   image: "/images/projects/residen-3.jpg",
    gallery: ["/images/projects/residen-3-1.jpg", "/images/projects/residen-3-2.jpg"],
     features: [
    "Covered Glass Arcade",
    "Luxury Retail",
    "Cafés and Hospitality",
    "Cultural Venues (theatre, cinema nearby)",
    "Protected Heritage Site",
  ],
      teamSize: "N/A",
  },
  {
    id: "residential-4",
    slug: "urban-living-stuttgart",
    title: {
       de: "Johnson & Johnson Standort Courcelles",
    en: "Johnson & Johnson Courcelles Site",
    fr: "Site Johnson & Johnson de Courcelles",
    nl: "Johnson & Johnson site Courcelles",
    it: "Sito Johnson & Johnson di Courcelles",
    ku: "Cihê Johnson & Johnson yê Courcelles",
    tr: "Johnson & Johnson Courcelles Tesisi",
  },
    category: "industrial",
    description: {
      de: "Pharma-Logistik- und Distributionsstandort in Courcelles mit hochstandardisierten Lager- und Versandprozessen, strenger Compliance und Sicherheitsinfrastruktur.",
    en: "Pharma logistics and distribution site in Courcelles with standardized warehousing and outbound operations, strict compliance, and robust security infrastructure.",
    fr: "Site de logistique et de distribution pharmaceutique à Courcelles, avec entreposage et expédition standardisés, conformité stricte et infrastructure de sécurité.",
    nl: "Farmaceutische logistiek- en distributiesite in Courcelles met gestandaardiseerde opslag- en verzendprocessen, strikte compliance en sterke beveiliging.",
    it: "Sito di logistica e distribuzione farmaceutica a Courcelles con processi di magazzino e spedizione standardizzati, conformità rigorosa e infrastrutture di sicurezza.",
    ku: "Cihê lojîstîk û belavkirina dermankirinê li Courcelles bi pêvajoyên stendina malan û şandinê yên standard, lihevhatina hişyar û ewlehiyeke bihêz.",
    tr: "Courcelles’te farmasötik lojistik ve dağıtım tesisi; standart depolama ve sevkiyat süreçleri, sıkı uyumluluk ve güçlü güvenlik altyapısı.",
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
    year: "2006",
  client: "Johnson & Johnson",
  value: "non disclosed",
  duration: "1 year",
  size: "12.000 m²",
  status: "completed",
  featured: true,
    image: "/images/projects/poto-4.jpg",
    gallery: ["/images/projects/poto-4-1.jpg"],
    features: ["Co-Working Spaces", "Rooftop Garden", "EV Charging", "Bike Storage"],
    teamSize: "165",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // INFRASTRUCTURE PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "infrastructure-1",
    slug: "denys-nv-infrastructure",
  
  title: {
    de: "Ehemalige Thermen von Spa",
    en: "Former Thermal Baths of Spa",
    fr: "Anciens Thermes de Spa",
    nl: "Voormalige Thermen van Spa",
    it: "Antiche Terme di Spa",
    ku: "Termên Kevn ên Spa",
    tr: "Spa Eski Termal Hamamları",
  },
    category: "infrastructure",
    description: {
     de: "Restaurierung und Umnutzung der historischen Thermen (1862–1868) zu einem 5-Sterne-Hotel mit Restaurant und Wellness, inklusive Wiederherstellung von Fassaden und Innenräumen.",
    en: "Heritage restoration and adaptive reuse of the historic bathhouse (built 1862–1868) into a 5-star hotel with restaurant and wellness, including façade and interior restoration.",
    fr: "Restauration patrimoniale et réaffectation des thermes historiques (1862–1868) en hôtel 5 étoiles avec restaurant et espace wellness, avec restauration des façades et décors intérieurs.",
    nl: "Erfgoedrestauratie en herbestemming van het historische badhuis (1862–1868) tot een 5-sterrenhotel met restaurant en wellness, inclusief gevel- en interieurrestauratie.",
    it: "Restauro e riuso dell’edificio termale storico (1862–1868) come hotel 5 stelle con ristorante e wellness, con recupero di facciate e interni.",
    ku: "Restorasyona mîrî û veguherîna avahiya termal a dîrokî (1862–1868) bo otêla 5-stêr, bi restorasyona rûmet û hundirê avahiyê.",
    tr: "Tarihi termal yapıların (1862–1868) miras restorasyonu ve 5 yıldızlı otel, restoran ve wellness alanına dönüştürülmesi; cephe ve iç mekân restorasyonları dahil.",
  },
    location: {
     de: "Spa (Provinz Lüttich), Belgien",
    en: "Spa (Liège Province), Belgium",
    fr: "Spa (Province de Liège), Belgique",
    nl: "Spa (Provincie Luik), België",
    it: "Spa (Provincia di Liegi), Belgio",
    ku: "Spa (Parêzgeha Lîj), Belçîka",
    tr: "Spa (Liège Eyaleti), Belçika",
  },
 year: "2019–2025",
    client: "Ville de Spa (owner)",
    value: "€25M",
    duration: "72 months",
    size: "Large Scale",
    status: "completed",
    featured: true,
    image: "/images/projects/infra-1.jpg",
    gallery: ["/images/projects/infra-1-1.jpg", "/images/projects/infra-1-2.jpg"],
    features: ["Major Infrastructure", "Smart Traffic Systems", "Belgian Partnership", "Modern Engineering"],
    teamSize: "520",
  },
  {
    id: "infrastructure-2",
    slug: "galeries-royales-saint-hubert",
    title: {
   de: "Espace Vanderborght (Rue de l’Écuyer)",
    en: "Espace Vanderborght (Rue de l’Écuyer)",
    fr: "Espace Vanderborght (Rue de l’Écuyer)",
    nl: "Espace Vanderborght (Schildknaapsstraat)",
    it: "Espace Vanderborght (Rue de l’Écuyer)",
    ku: "Espace Vanderborght (Rue de l’Écuyer)",
    tr: "Espace Vanderborght (Rue de l’Écuyer)",
  },
    category: "infrastructure",
    description: {
     de: "Mehrstöckiges Veranstaltungs- und Ausstellungsgebäude im Zentrum von Brüssel, in der Nähe der Grand-Place, mit ca. 6.000 m² auf 5 Etagen und markanter Schaufensterfassade.",
    en: "Multi-level event and exhibition building in central Brussels near the Grand Place, offering about 6,000 m² across 5 floors with a distinctive large shopfront façade.",
    fr: "Bâtiment événementiel et d’exposition au centre de Bruxelles, proche de la Grand-Place, offrant environ 6 000 m² sur 5 étages avec une façade vitrée emblématique.",
    nl: "Evenement- en tentoonstellingsgebouw in het centrum van Brussel nabij de Grote Markt, met ongeveer 6.000 m² verdeeld over 5 verdiepingen en een opvallende vitringevel.",
    it: "Edificio per eventi e mostre nel centro di Bruxelles vicino alla Grand-Place, con circa 6.000 m² su 5 piani e una facciata vetrata distintiva.",
    ku: "Avahiya bûyer û pêşangehê ya li navenda Bruxelles nêzî Grand-Place, bi qasî 6,000 m² li ser 5 qat û rûyê berbişkê yê taybet.",
    tr: "Brüksel merkezinde Grand-Place’a yakın; 5 kata yayılan yaklaşık 6.000 m² alana sahip, geniş vitrin cepheli etkinlik ve sergi binası.",
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
   year: "2009",
  client: "City of Brussels",
  value: "N/A",
  duration: "12 months",
  size: "1.500 m²",
  status: "completed",
  featured: true,
    image: "/images/projects/info-2.jpg",
    gallery: ["/images/projects/info-2-1.jpg", "/images/projects/info-2-2.jpg"],
    features: ["Heritage Preservation", "Modern Infrastructure", "Retail Spaces", "LED Lighting"],
    teamSize: "340",
  },



  // ═══════════════════════════════════════════════════════════════════════════
  // INDUSTRIAL PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════



  // ═══════════════════════════════════════════════════════════════════════════
  // RENOVATION PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════



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
