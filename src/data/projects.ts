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
      de: "Das neue NATO-Hauptquartier ist ein hochmoderner Komplex mit über 12,500 m² Fläche, der höchste Sicherheitsstandards mit nachhaltiger Architektur verbindet.",
      en: "The new NATO Headquarters is a state-of-the-art complex spanning over 12,500 m², combining the highest security standards with sustainable architecture and BREEAM certification.",
      fr: "Le nouveau siège de l'OTAN est un complexe ultramoderne de plus de 12,500 m², alliant les plus hautes normes de sécurité à une architecture durable et une certification BREEAM.",
      nl: "Het nieuwe NAVO-hoofdkwartier is een ultramodern complex van meer dan 12,500 m², dat de hoogste veiligheidsnormen combineert met duurzame architectuur en BREEAM-certificering.",
      it: "Il nuovo Quartier Generale della NATO è un complesso all'avanguardia di oltre 12,500 m², che combina i più alti standard di sicurezza con architettura sostenibile e certificazione BREEAM.",
      ku: "Serekaniya nû ya NATO kompleksek pêşkeftî ye ku ji 12,500 m² zêdetir e, standardên ewlehiyê yên herî bilind bi mîmariya domdar û sertîfîkaya BREEAM re dike yek.",
      tr: "Yeni NATO Karargahı, en yüksek güvenlik standartlarını sürdürülebilir mimari ve BREEAM sertifikasyonu ile birleştiren 12,500 m²'nin üzerinde son teknoloji bir komplekstir.",
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
    client: "NATO",
    value: "€1.2B",
    duration: "30 months",
    size: "12,500 m²",
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
    category: "residential",
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
    year: "2009",
  client: "Galeries Royales Saint-Hubert",
  value: "🔒",
  duration: "2014-2016",
  size: "12.500 m²",
  status: "completed",
  featured: true,
    image: "/images/projects/com-2.jpg",
    gallery: ["/images/projects/com-2-1.jpg", "/images/projects/com-2-2.jpg"],
    features: ["Flexible Workspaces", "Conference Center", "Underground Parking", "Fitness Center"],
    teamSize: "320",
  },

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
    category: "commercial",
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
 year: "2020",
    client: "Ville de Spa",
    value: "🔒",
    duration: "2020-2025",
    size: "8.700 m²",
    status: "completed",
    featured: true,
    image: "/images/projects/infra-1.jpg",
    gallery: ["/images/projects/infra-1-1.jpg", "/images/projects/infra-1-2.jpg"],
    features: ["Major Infrastructure", "Smart Traffic Systems", "Belgian Partnership", "Modern Engineering"],
    teamSize: "520",
  },

 



  // ═══════════════════════════════════════════════════════════════════════════
  // RESIDENTIAL PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════

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
    category: "commercial",
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
   year: "2006",
  client: "Sofitel",
  value: "🔒",
  duration: "24",
  size: "7.500 m²",
  status: "completed",
  featured: true,
    image: "/images/projects/dential-2.jpg",
    gallery: ["/images/projects/dential-2-1.jpg"],
    features: ["45 Custom Villas", "Private Security", "Clubhouse", "Tennis Courts"],
    teamSize: "580",
  },
  {
    id: "residential-3",
    slug: "waterfront-apartments",
   title: {
    de: "Galeries Royales Saint-Hubert",
    en: "Galeries Royales Saint-Hubert",
    fr: "Galeries Royales Saint-Hubert",
    nl: "Galeries Royales Saint-Hubert",
    it: "Galeries Royales Saint-Hubert",
    ku: "Galeries Royales Saint-Hubert",
    tr: "Galeries Royales Saint-Hubert",
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
    client: "Galeries Royales Saint-Hubert",
    value: "🔒",
    duration: "30 months",
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
      teamSize: "230",
  },
  {
    id: "residential-4",
    slug: "urban-living-stuttgart",
    title: {
       de: "Johnson & Johnson",
    en: "Johnson & Johnson",
    fr: "Johnson & Johnson",
    nl: "Johnson & Johnson",
    it: "Johnson & Johnson",
    ku: "Cihê Johnson & Johnson",
    tr: "Johnson & Johnson",
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
  value: "🔒",
  duration: "18 months",
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
    category: "renovation",
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
    year: "2017",
  client: "Régie des bâtiments",
  value: "🔒",
  duration: "2017-2018",
  size: "900 m²",
  status: "completed",
  featured: true,
    image: "/images/projects/com-4.jpg",
    gallery: ["/images/projects/com-4-1.jpg"],
    features: ["150+ Stores", "Cinema Complex", "Food Court", "Family Entertainment"],
    teamSize: "380",
  },

  {
    id: "infrastructure-2",
    slug: "galeries-royales-saint-hubert",
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
  client: "Galeries Royales Saint-hubert",
  value: "🔒",
  duration: "2009-2010",
  size: "1.500 m²",
  status: "completed",
  featured: true,
    image: "/images/projects/ino.jpg",
    gallery: ["/images/projects/in.jpg", "/images/projects/in.jpg"],
    features: ["Heritage Preservation", "Modern Infrastructure", "Retail Spaces", "LED Lighting"],
    teamSize: "340",
  },



  // ═══════════════════════════════════════════════════════════════════════════
  // INDUSTRIAL PROJECTS
  // ═══════════════════════════════════════════════════════════════════════════



  // ═══════════════════════════════════════════════════════════════════════════
// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════

{
  id: "Renovation-1",
  slug: "metro-bruxelles-renovation",

  title: {
    de: "Metro in Brüssel",
    en: "Metro  in Brussels",
    fr: "METRO Bruxelles",
    nl: "Metro in Brussel",
    it: " Metropolitana a Bruxelles",
    ku: " Metroya Brukselê",
    tr: "Brüksel Metro"
  },

  category: "infrastructure",

  description: {
    de: "Verschiedene Umbau- und Renovierungsarbeiten an mehreren U-Bahn-Stationen in Brüssel.",
    en: "Various transformation and renovation works carried out across multiple metro stations in Brussels.",
    fr: "Divers travaux de transformation et rénovation au niveau de diverses stations de métro.",
    nl: "Diverse renovatie- en verbouwingswerken uitgevoerd in verschillende metrostations in Brussel.",
    it: "Diversi lavori di trasformazione e ristrutturazione effettuati in varie stazioni della metropolitana di Bruxelles.",
    ku: "Cûrbecûr karên veguherîn û nûvekirinê li ser gelek stasyonên metroya Brukselê hatine kirin.",
    tr: "Brüksel’de çeşitli metro istasyonlarında dönüşüm ve yenileme çalışmaları gerçekleştirilmiştir."
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika"
  },

  year: "2005",

  client: "Metro Bruxelles",

  value: "🔒",

  duration: "2005-2006",

  size: "1.500 m²",

  status: "completed",

  featured: true,

  image: "/images/projects/metro-bruxelles.jpg",

  gallery: [
    "/images/projects/metro-bruxelles-1.jpg",
    "/images/projects/metro-bruxelles-2.jpg"
  ],

  features: [
    "Metro Station Renovation",
    "Structural Transformation Works",
    "Interior Refurbishment",
    "Brussels Public Infrastructure"
  ],

  teamSize: "340"
},


// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════

{
  id: "Renovation-2",
  slug: "hopital-saint-pierre-bruxelles",

  title: {
    de: "Krankenhaus Saint-Pierre Renovierung",
    en: "Saint-Pierre Hospital Renovation",
    fr: "HOPITAL SAINT-PIERRE",
    nl: "Renovatie Ziekenhuis Saint-Pierre",
    it: "Ristrutturazione Ospedale Saint-Pierre",
    ku: "Nûvekirina Nexweşxaneya Saint-Pierre",
    tr: "Saint-Pierre Hastanesi Renovasyonu"
  },

  category: "infrastructure",

  description: {
    de: "Umbau des Parkplatzbereichs, Bau eines Lagergebäudes und Errichtung eines unterirdischen Tunnels zur Verbindung zweier bestehender Gebäude.",
    en: "Transformation of the parking area, construction of a storage building, and creation of an underground tunnel connecting two existing hospital buildings.",
    fr: "Transformation de la zone de parking, construction d’un bâtiment de stockage et réalisation d’un tunnel souterrain reliant deux bâtiments existants.",
    nl: "Transformatie van de parkeerzone, bouw van een opslaggebouw en aanleg van een ondergrondse tunnel tussen twee bestaande gebouwen.",
    it: "Trasformazione dell’area parcheggio, costruzione di un edificio per lo stoccaggio e realizzazione di un tunnel sotterraneo tra due edifici esistenti.",
    ku: "Guhertina qada parkkirinê, avakirina avahiyek ji bo depokirinê û çêkirina tunêlek binerdî ji bo girêdana du avahiyên heyî.",
    tr: "Otopark alanının dönüştürülmesi, depolama binasının inşası ve mevcut iki bina arasında yeraltı geçiş tünelinin yapılması."
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika"
  },

  year: "2008",

  client: "Hôpital Saint-Pierre",

  value: "🔒",

  duration: "2008-2009",

  size: "3.500 m²",

  status: "completed",

  featured: true,

  image: "/images/projects/hopital-saint-pierre.jpg",

  gallery: [
    "/images/projects/hopital-saint-pierre-1.jpg",
    "/images/projects/hopital-saint-pierre-2.jpg"
  ],

  features: [
    "Hospital Infrastructure Renovation",
    "Parking Area Transformation",
    "Storage Facility Construction",
    "Underground Tunnel Connection"
  ],

  teamSize: "240"
},


// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════

{
  id: "Renovation-3",
  slug: "commissariat-police-longdoz-liege",

  title: {
    de: "Polizeikommissariat Longdoz Renovierung",
    en: "Longdoz Police Station Renovation",
    fr: "COMMISSARIAT POLICE LONGDOZ",
    nl: "Renovatie Politiebureau Longdoz",
    it: "Ristrutturazione Commissariato di Polizia Longdoz",
    ku: "Nûvekirina Komîseriyeta Polîsê Longdoz",
    tr: "Longdoz Polis Karakolu Renovasyonu"
  },

  category: "renovation",

  description: {
    de: "Renovierung des Polizeikommissariats der Kriminalbrigade der Polizei von Lüttich.",
    en: "Renovation of the judicial brigade police station of the Liège Police Department.",
    fr: "Rénovation du commissariat de la brigade judiciaire de la police de Liège.",
    nl: "Renovatie van het commissariaat van de gerechtelijke brigade van de politie van Luik.",
    it: "Ristrutturazione del commissariato della brigata giudiziaria della polizia di Liegi.",
    ku: "Nûvekirina komîseriyeta brigadeya dadwerî ya polîsa Lîjê.",
    tr: "Liège polisi adli birim karakolunun yenilenmesi."
  },

  location: {
    de: "Lüttich, Belgien",
    en: "Liège, Belgium",
    fr: "Liège, Belgique",
    nl: "Luik, België",
    it: "Liegi, Belgio",
    ku: "Lîj, Belçîka",
    tr: "Liège, Belçika"
  },

  year: "2008",

  client: "Police de Liège",

  value: "🔒",

  duration: "2008-2009",

  size: "650 m²",

  status: "completed",

  featured: false,

  image: "/images/projects/police-longdoz.jpg",

  gallery: [
    "/images/projects/police-longdoz-1.jpg",
    "/images/projects/police-longdoz-2.jpg"
  ],

  features: [
    "Public Security Infrastructure Renovation",
    "Judicial Police Facility Upgrade",
    "Interior Refurbishment",
    "Liège Government Project"
  ],

  teamSize: "340"
},

// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════

{
  id: "Renovation-4",
  slug: "institut-royal-sciences-naturelles-bruxelles",

  title: {
    de: "Renovierung des Königlichen Naturwissenschaftlichen Instituts",
    en: "Royal Institute of Natural Sciences Renovation",
    fr: "Institut royal des sciences naturelles de Belgique",
    nl: "Renovatie Koninklijk Instituut voor Natuurwetenschappen",
    it: "Ristrutturazione dell’Istituto Reale di Scienze Naturali",
    ku: "Nûvekirina Enstîtûya Şahî ya Zanistên Xwezayî",
    tr: "Belçika Kraliyet Doğa Bilimleri Enstitüsü Renovasyonu"
  },

  category: "renovation",

  description: {
    de: "Renovierung einer Ausstellungsfläche zur Ermöglichung einer neuen musealen Ausstellung und Modernisierung des Besuchererlebnisses.",
    en: "Renovation of exhibition-level spaces to enable a new museum display and enhance visitor experience.",
    fr: "Rénovation de niveau pour permettre la mise en place d’une nouvelle exposition.",
    nl: "Renovatie van tentoonstellingsruimtes om een nieuwe expositie mogelijk te maken.",
    it: "Ristrutturazione degli spazi espositivi per consentire una nuova mostra.",
    ku: "Nûvekirina qada pêşangehê ji bo çêkirina pêşangehek nû.",
    tr: "Yeni bir serginin kurulmasını sağlamak amacıyla sergi alanlarının yenilenmesi."
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika"
  },

  year: "2017",

  client: "Institut royal des sciences naturelles de Belgique",

  value: "🔒",

  duration: "2017-2018",

  size: "3.100 m²",

  status: "completed",

  featured: true,

  image: "/images/projects/institut-sciences-naturelles.jpg",

  gallery: [
    "/images/projects/institut-sciences-naturelles-1.jpg",
    "/images/projects/institut-sciences-naturelles-2.jpg"
  ],

  features: [
    "Museum & Cultural Renovation",
    "Exhibition Space Upgrade",
    "Interior Modernization",
    "Brussels Heritage Project"
  ],

  teamSize: "340"
}
,

// RENOVATION PROJECTS
// ═══════════════════════════════════════════════════════════════════════════

{
  id: "Renovation-5",
  slug: "ecole-europeenne-fabiola-bruxelles",

  title: {
    de: "Renovierung der Europäischen Schule Fabiola",
    en: "European School Fabiola Building Renovation",
    fr: "École européenne",
    nl: "Renovatie Europese School Fabiola-gebouw",
    it: "Ristrutturazione della Scuola Europea - Edificio Fabiola",
    ku: "Nûvekirina Dibistana Ewropî - Avahiya Fabiola",
    tr: "Avrupa Okulu Fabiola Binası Renovasyonu"
  },

  category: "renovation",

  description: {
    de: "Renovierung des Fabiola-Gebäudes der Europäischen Schule in Brüssel.",
    en: "Renovation of the Fabiola building of the European School in Brussels.",
    fr: "Rénovation du bâtiment Fabiola de l’École européenne à Bruxelles.",
    nl: "Renovatie van het Fabiola-gebouw van de Europese School in Brussel.",
    it: "Ristrutturazione dell’edificio Fabiola della Scuola Europea a Bruxelles.",
    ku: "Nûvekirina avahiya Fabiola ya Dibistana Ewropî li Brukselê.",
    tr: "Brüksel Avrupa Okulu’nun Fabiola binasının yenilenmesi."
  },

  location: {
    de: "Brüssel, Belgien",
    en: "Brussels, Belgium",
    fr: "Bruxelles, Belgique",
    nl: "Brussel, België",
    it: "Bruxelles, Belgio",
    ku: "Bruksel, Belçîka",
    tr: "Brüksel, Belçika"
  },

  year: "2017",

  client: "École européenne de Bruxelles",

  value: "🔒",

  duration: "2017-2018",

  size: "3.100 m²",

  status: "completed",

  featured: true,

  image: "/images/projects/ecole-europeenne-fabiola.jpg",

  gallery: [
    "/images/projects/ecole-europeenne-fabiola-1.jpg",
    "/images/projects/ecole-europeenne-fabiola-2.jpg"
  ],

  features: [
    "Educational Building Renovation",
    "School Infrastructure Upgrade",
    "Interior Refurbishment",
    "Brussels Public Sector Project"
  ],

  teamSize: "340"
}
,

// ───────────────────────────────────────────────────────────────────────────
// NEW PROJECTS FROM: PROJET 2.docx
// ───────────────────────────────────────────────────────────────────────────

{
  id: "industrial-forest-prison-2016",
  slug: "forest-prison-common-areas-renovation",
  title: {
    de: "Gefängnis Forest, Brüssel",
    en: "Forest Prison, Brussels",
    fr: "Prison de Forest, Bruxelles",
    nl: "Gevangenis van Vorst (Forest), Brussel",
    it: "Prigione di Forest, Bruxelles",
    ku: "Zîndana Forest, Bruksel",
    tr: "Forest Hapishanesi, Brüksel",
  },
  category: "industrial",
  description: {
    de: "Diverse Umbau- und Renovierungsarbeiten in den Gemeinschaftsbereichen des Gefängnisses Forest.",
    en: "Various transformation and renovation works in the common areas of Forest Prison.",
    fr: "Divers travaux de transformation et rénovation au niveau des parties communes de la prison de Forest.",
    nl: "Diverse transformatie- en renovatiewerken in de gemeenschappelijke delen van de gevangenis van Vorst (Forest).",
    it: "Diversi lavori di trasformazione e ristrutturazione nelle parti comuni della prigione di Forest.",
    ku: "Cûrbecûr karên veguherîn û nûvekirinê li beşên hevpar ên zîndana Forest.",
    tr: "Forest Hapishanesi'nin ortak alanlarında çeşitli dönüşüm ve yenileme çalışmaları.",
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
  year: "2016-2017",
  client: "Régie des bâtiments",
  value: "🔒",
  duration: "2016-2017",
  size: "4,500 m²",
  status: "completed",
  featured: false,
  image: "/images/projects/prison-forest.jpg",
  gallery: ["/images/projects/prison-forest-1.jpg", "/images/projects/prison-forest-1.jpg"],
  features: ["Common Areas Renovation", "Public Sector Facility", "Site Transformation Works"],
},

{
  id: "commercial-planetarium-2018",
  slug: "planetarium-brussels-refit",
  title: {
    de: "Planetarium, Brüssel",
    en: "Planetarium, Brussels",
    fr: "Planétarium, Bruxelles",
    nl: "Planetarium, Brussel",
    it: "Planetario, Bruxelles",
    ku: "Planetarium, Bruksel",
    tr: "Planetaryum, Brüksel",
  },
  category: "commercial",
  description: {
    de: "Austausch der Innen-Schreinereiarbeiten sowie Anpassungen und Verbesserungen der Außenanlagen.",
    en: "Replacement of interior joinery and improvements to exterior site works.",
    fr: "Remplacement des menuiseries intérieur et des aménagement extérieurs.",
    nl: "Vervanging van binnenschrijnwerk en verbeteringen aan de buitenaanleg.",
    it: "Sostituzione degli infissi interni e sistemazioni esterne.",
    ku: "Guherandina menûsîyên hundirî û çêtirkirina rêxistinên derveyî.",
    tr: "İç doğramaların yenilenmesi ve dış çevre düzenlemelerinin iyileştirilmesi.",
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
  year: "2018",
  client: "Régie des bâtiments",
  value: "🔒",
  duration: "May 2018 - Sept 2018",
  size: "1,500 m²",
  status: "completed",
  featured: false,
  image: "/images/projects/planetarium-brussels.jpg",
  gallery: ["/images/projects/planetarium-brussels-1.jpg", "/images/projects/planetarium-brussels-1.jpg"],
  features: ["Interior Joinery Replacement", "Exterior Works", "Public Sector Upgrade"],
},

{
  id: "industrial-ing-parking-2009",
  slug: "ing-brussels-parking-reconfiguration",
  title: {
    de: "ING Bank, Brüssel",
    en: "ING Bank, Brussels",
    fr: "ING Banque, Bruxelles",
    nl: "ING Bank, Brussel",
    it: "ING Bank, Bruxelles",
    ku: "ING Bank, Bruksel",
    tr: "ING Bank, Brüksel",
  },
  category: "industrial",
  description: {
    de: "Renovierung und Neuorganisation der Parkflächen.",
    en: "Renovation and reorganization of parking areas.",
    fr: "Rénovation et réorganisation des surfaces de stationnement.",
    nl: "Renovatie en herinrichting van de parkeeroppervlakken.",
    it: "Ristrutturazione e riorganizzazione delle aree di parcheggio.",
    ku: "Nûvekirin û ji nû ve rêxistina qadên parkkirinê.",
    tr: "Otopark alanlarının yenilenmesi ve yeniden düzenlenmesi.",
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
  client: "ING",
  value: "🔒",
  duration: "Mar/2009-Nov/2009",
  size: "1,200 m²",
  status: "completed",
  featured: false,
  image: "/images/projects/ing-parking.jpg",
  gallery: ["/images/projects/ing-parking-1.jpg", "/images/projects/ing-parking-1.jpg"],
  features: ["Parking Area Upgrade", "Layout Reconfiguration", "Operational Improvement"],
},

{
  id: "infrastructure-fluxys-ghent-2006",
  slug: "fluxys-ghent-gas-site-offices",
  title: {
    de: "Fluxys Gasstandort Büros, Gent",
    en: "Fluxys Gas Site Offices, Ghent",
    fr: "Bureaux du site gazier Fluxys, Gand",
    nl: "Fluxys gassite kantoren, Gent",
    it: "Uffici del sito gas Fluxys, Gand",
    ku: "Ofîsên cihê gazê ya Fluxys, Gent",
    tr: "Fluxys Gaz Sahası Ofisleri, Gent",
  },
  category: "infrastructure",
  description: {
    de: "Bau der Bürogebäude am Gasstandort in Gent.",
    en: "Construction of office buildings for the gas site in Ghent.",
    fr: "Construction des bureaux du site du gaz à Gand.",
    nl: "Bouw van kantoren voor de gassite in Gent.",
    it: "Costruzione degli uffici del sito del gas a Gand.",
    ku: "Avakirina ofîsên cihê gazê li Gent.",
    tr: "Gent’teki gaz sahası için ofis binalarının inşası.",
  },
  location: {
    de: "Gent, Belgien",
    en: "Ghent, Belgium",
    fr: "Gand, Belgique",
    nl: "Gent, België",
    it: "Gand, Belgio",
    ku: "Gent, Belçîka",
    tr: "Gent, Belçika",
  },
  year: "2006",
  client: "BESIX",
  value: "🔒",
  duration: "May/2006-Nov/2006",
  size: "3,100 m²",
  status: "completed",
  featured: false,
  image: "/images/projects/fluxys-ghent-offices.jpg",
  gallery: ["/images/projects/fluxys-ghent-offices-1.jpg", "/images/projects/fluxys-ghent-offices-2.jpg"],
  features: ["Office Construction", "Energy Infrastructure Site", "Belgian Partnership"],
},





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



