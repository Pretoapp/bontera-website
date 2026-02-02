// src/data/jobs.ts
// Job listings data shared across the application (i18n-ready)

export const SUPPORTED_LOCALES = ["fr", "en", "it", "de", "nl", "tr", "ku"] as const;
export type SupportedLang = (typeof SUPPORTED_LOCALES)[number];

export interface JobContent {
  title: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
}

export interface JobListing {
  id: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  featured: boolean;

  // Localized content
  i18n: Record<SupportedLang, JobContent>;
}

export function toSupportedLang(locale: string): SupportedLang {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale) ? (locale as SupportedLang) : "fr";
}

export function getJobContent(job: JobListing, locale: string | SupportedLang): JobContent {
  const lang = typeof locale === "string" ? toSupportedLang(locale) : locale;
  const chosen = job.i18n[lang];
  const fallback = job.i18n.fr ?? job.i18n.en;

  // If placeholder is empty, fallback to FR then EN
  const hasTitle = (chosen?.title ?? "").trim().length > 0;
  return hasTitle ? chosen : fallback;
}

export const jobListings: JobListing[] = [
  // ─────────────────────────────────────────────────────────────
  // JOB-001 — Senior Project Manager
  // ─────────────────────────────────────────────────────────────
  {
    id: "job-001",
    department: "projectManagement",
    location: "brussels",
    type: "fullTime",
    experience: "8+ years",
    posted: "2024-01-15",
    featured: true,
    i18n: {
      fr: {
        title: "Chef de projet senior",
        description:
          "Piloter des projets de construction complexes, de la conception à la livraison, en garantissant le respect des délais et du budget, tout en maintenant des standards de qualité élevés.",
        responsibilities: [
          "Diriger et gérer plusieurs projets de construction en parallèle",
          "Élaborer et suivre les plannings, budgets et plans de ressources",
          "Coordonner les échanges avec les clients, architectes, ingénieurs et sous-traitants",
          "Assurer la conformité aux exigences HSE et aux standards qualité",
          "Gérer les risques projet et mettre en place des plans de mitigation",
          "Présenter l'avancement aux dirigeants et aux parties prenantes",
        ],
        requirements: [
          "Diplôme (licence ou master) en génie civil, management de la construction ou domaine connexe",
          "8+ ans d'expérience en gestion de projets de construction",
          "Certification PMP appréciée",
          "Excellentes compétences en leadership et communication",
          "Maîtrise des outils de gestion de projet (MS Project, Primavera)",
          "Expérience sur des projets commerciaux ou d'infrastructure de grande envergure",
        ],
        benefits: [
          "Salaire compétitif et primes de performance",
          "Assurance santé complète",
          "Opportunités de développement professionnel",
          "Aide à la relocalisation",
          "Congés annuels et jours fériés",
        ],
      },
      en: {
        title: "Senior Project Manager",
        description:
          "Lead complex construction projects from inception to completion, ensuring delivery on time and within budget while maintaining the highest quality standards.",
        responsibilities: [
          "Lead and manage multiple construction projects simultaneously",
          "Develop and maintain project schedules, budgets, and resource plans",
          "Coordinate with clients, architects, engineers, and subcontractors",
          "Ensure compliance with safety regulations and quality standards",
          "Manage project risks and implement mitigation strategies",
          "Report project progress to senior management and stakeholders",
        ],
        requirements: [
          "Bachelor's degree in Civil Engineering, Construction Management, or related field",
          "8+ years of experience in construction project management",
          "PMP certification preferred",
          "Strong leadership and communication skills",
          "Proficiency in project management software (MS Project, Primavera)",
          "Experience with large-scale commercial or infrastructure projects",
        ],
        benefits: [
          "Competitive salary and performance bonuses",
          "Comprehensive health insurance",
          "Professional development opportunities",
          "Relocation assistance",
          "Annual leave and holiday benefits",
        ],
      },
      it: {
        title: "Project Manager Senior",
        description:
          "Dirigere progetti di costruzione complessi dall'inizio al completamento, garantendo il rispetto dei tempi e del budget e mantenendo i più elevati standard di qualità.",
        responsibilities: [
          "Dirigere e gestire più progetti di costruzione contemporaneamente",
          "Sviluppare e mantenere pianificazioni, budget e piani delle risorse",
          "Coordinarsi con clienti, architetti, ingegneri e subappaltatori",
          "Garantire la conformità alle normative di sicurezza e agli standard di qualità",
          "Gestire i rischi di progetto e implementare strategie di mitigazione",
          "Riferire l'avanzamento del progetto alla direzione e agli stakeholder",
        ],
        requirements: [
          "Laurea triennale o magistrale in Ingegneria Civile, Gestione delle Costruzioni o settore correlato",
          "8+ anni di esperienza nella gestione di progetti di costruzione",
          "Certificazione PMP preferenziale",
          "Eccellenti capacità di leadership e comunicazione",
          "Padronanza dei software di project management (MS Project, Primavera)",
          "Esperienza con progetti commerciali o infrastrutturali di grande scala",
        ],
        benefits: [
          "Stipendio competitivo e bonus di performance",
          "Assicurazione sanitaria completa",
          "Opportunità di sviluppo professionale",
          "Assistenza al trasferimento",
          "Ferie annuali e festività",
        ],
      },
      de: {
        title: "Senior-Projektmanager",
        description:
          "Leitung komplexer Bauprojekte von der Planung bis zur Fertigstellung unter Einhaltung von Terminen und Budget bei gleichzeitiger Wahrung höchster Qualitätsstandards.",
        responsibilities: [
          "Leitung und Management mehrerer Bauprojekte gleichzeitig",
          "Entwicklung und Pflege von Terminplänen, Budgets und Ressourcenplänen",
          "Koordination mit Auftraggebern, Architekten, Ingenieuren und Subunternehmern",
          "Sicherstellung der Einhaltung von Sicherheitsvorschriften und Qualitätsstandards",
          "Management von Projektrisiken und Umsetzung von Gegenmaßnahmen",
          "Berichterstattung über den Projektfortschritt an die Geschäftsleitung und Stakeholder",
        ],
        requirements: [
          "Bachelor- oder Masterabschluss in Bauingenieurwesen, Baumanagement oder verwandtem Fachgebiet",
          "8+ Jahre Erfahrung im Bauprojektmanagement",
          "PMP-Zertifizierung bevorzugt",
          "Ausgeprägte Führungs- und Kommunikationsfähigkeiten",
          "Sicherer Umgang mit Projektmanagement-Software (MS Project, Primavera)",
          "Erfahrung mit großen Gewerbe- oder Infrastrukturprojekten",
        ],
        benefits: [
          "Wettbewerbsfähiges Gehalt und Leistungsprämien",
          "Umfassende Krankenversicherung",
          "Möglichkeiten zur beruflichen Weiterentwicklung",
          "Unterstützung bei Umzug",
          "Jahresurlaub und Feiertagsregelungen",
        ],
      },
      nl: {
        title: "Senior Projectmanager",
        description:
          "Leid complexe bouwprojecten van begin tot einde, waarbij tijdige oplevering en budgetnaleving worden gegarandeerd met behoud van de hoogste kwaliteitsnormen.",
        responsibilities: [
          "Leiding geven aan en beheren van meerdere bouwprojecten tegelijkertijd",
          "Ontwikkelen en onderhouden van planningen, budgetten en resourceplannen",
          "Coördineren met opdrachtgevers, architecten, ingenieurs en onderaannemers",
          "Zorgen voor naleving van veiligheidsvoorschriften en kwaliteitsnormen",
          "Beheren van projectrisico's en implementeren van mitigatiemaatregelen",
          "Rapporteren over projectvoortgang aan directie en stakeholders",
        ],
        requirements: [
          "Bachelor- of masterdiploma in Civiele Techniek, Bouwmanagement of verwant vakgebied",
          "8+ jaar ervaring in bouwprojectmanagement",
          "PMP-certificering heeft de voorkeur",
          "Sterke leiderschaps- en communicatievaardigheden",
          "Vaardigheid met projectmanagementsoftware (MS Project, Primavera)",
          "Ervaring met grootschalige commerciële of infrastructuurprojecten",
        ],
        benefits: [
          "Competitief salaris en prestatiebonussen",
          "Uitgebreide ziektekostenverzekering",
          "Mogelijkheden voor professionele ontwikkeling",
          "Verhuisondersteuning",
          "Jaarlijks verlof en feestdagen",
        ],
      },
      tr: {
        title: "Kıdemli Proje Yöneticisi",
        description:
          "Karmaşık inşaat projelerini başlangıçtan tamamlanmaya kadar yönetmek; zamanında ve bütçe dahilinde teslimi sağlarken en yüksek kalite standartlarını korumak.",
        responsibilities: [
          "Birden fazla inşaat projesini eş zamanlı olarak yönetmek ve yönlendirmek",
          "Proje takvimlerini, bütçelerini ve kaynak planlarını geliştirmek ve sürdürmek",
          "Müşteriler, mimarlar, mühendisler ve taşeronlarla koordinasyon sağlamak",
          "Güvenlik düzenlemelerine ve kalite standartlarına uyumu sağlamak",
          "Proje risklerini yönetmek ve risk azaltma stratejileri uygulamak",
          "Proje ilerlemesini üst yönetime ve paydaşlara raporlamak",
        ],
        requirements: [
          "İnşaat Mühendisliği, Yapı Yönetimi veya ilgili alanda lisans veya yüksek lisans derecesi",
          "İnşaat proje yönetiminde 8+ yıl deneyim",
          "PMP sertifikası tercih sebebidir",
          "Güçlü liderlik ve iletişim becerileri",
          "Proje yönetim yazılımlarında yetkinlik (MS Project, Primavera)",
          "Büyük ölçekli ticari veya altyapı projelerinde deneyim",
        ],
        benefits: [
          "Rekabetçi maaş ve performans primleri",
          "Kapsamlı sağlık sigortası",
          "Mesleki gelişim fırsatları",
          "Taşınma desteği",
          "Yıllık izin ve tatil hakları",
        ],
      },
      ku: {
        title: "Rêvebirê Projeya Payebilind",
        description:
          "Birêvebirina projeyên avahîsaziyê yên tevlihev ji destpêkê heta bidawîkirinê, dabînkirina radestkirina di wext û budceyê de bi domandina standardên kalîteyê yên herî bilind.",
        responsibilities: [
          "Bi rêvebirin û birêvebirina gelek projeyên avahîsaziyê bi hev re",
          "Pêşxistin û domandina bernameyan, budceyan û planên çavkaniyan",
          "Hevrêziya bi xerîdar, mîmar, endezyar û pîmankarên ladesttî re",
          "Dabînkirina lihevhatina bi rêziknameyên ewlehiyê û standardên kalîteyê",
          "Birêvebirina xetereyên projeyê û bicîhkirina stratejiyên kêmkirina xetereyê",
          "Ragihandina pêşveçûna projeyê ji rêveberiya bilind û aliyên têkildar re",
        ],
        requirements: [
          "Bawernameya lîsansê yan masterê di Endezyariya Sivîl, Birêvebirina Avahîsaziyê an qada têkildar de",
          "8+ sal ezmûn di birêvebirina projeyên avahîsaziyê de",
          "Sertîfîkaya PMP tercîh e",
          "Jêhatîbûna serokatî û ragihandinê ya bihêz",
          "Pisporî di nermalava birêvebirina projeyê de (MS Project, Primavera)",
          "Ezmûn di projeyên bazirganî an binesaziya mezin de",
        ],
        benefits: [
          "Mûçeya pêşbazî û prîmên performansê",
          "Sîgorteya tenduristiyê ya berfireh",
          "Derfetên pêşveçûna pîşeyî",
          "Piştgiriya koçberiyê",
          "Betlaneya salane û mafên betlaneyê",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // JOB-002 — Structural Engineer
  // ─────────────────────────────────────────────────────────────
  {
    id: "job-002",
    department: "engineering",
    location: "germany",
    type: "fullTime",
    experience: "5+ years",
    posted: "2024-01-18",
    featured: true,
    i18n: {
      fr: {
        title: "Ingénieur structure",
        description:
          "Concevoir et analyser des structures pour des bâtiments commerciaux et résidentiels, en garantissant la sécurité, l'efficacité et la conformité aux normes internationales.",
        responsibilities: [
          "Concevoir des systèmes structurels pour bâtiments et infrastructures",
          "Réaliser des calculs et analyses structurelles avec des logiciels avancés",
          "Produire des plans d'exécution détaillés et des spécifications techniques",
          "Revoir les documents d'exécution et plans d'atelier des entreprises",
          "Effectuer des inspections de site et fournir un support technique",
          "Collaborer avec les architectes et les autres disciplines d'ingénierie",
        ],
        requirements: [
          "Licence ou master en génie civil/structure",
          "5+ ans d'expérience en conception structurelle",
          "Licence d'ingénieur (PE) appréciée",
          "Maîtrise de ETABS, SAP2000, SAFE et AutoCAD",
          "Connaissance des codes internationaux (IBC, Eurocode)",
          "Solides capacités d'analyse et de résolution de problèmes",
        ],
        benefits: [
          "Rémunération compétitive",
          "Assurance santé et assurance vie",
          "Opportunités de formation continue",
          "Participation à des projets emblématiques",
          "Perspectives d'évolution de carrière",
        ],
      },
      en: {
        title: "Structural Engineer",
        description:
          "Design and analyze structural systems for commercial and residential buildings, ensuring safety, efficiency, and compliance with international standards.",
        responsibilities: [
          "Design structural systems for buildings and infrastructure",
          "Perform structural analysis using advanced software",
          "Prepare detailed construction drawings and specifications",
          "Review contractor submittals and shop drawings",
          "Conduct site inspections and provide technical support",
          "Collaborate with architects and other engineering disciplines",
        ],
        requirements: [
          "Bachelor's or Master's degree in Structural/Civil Engineering",
          "5+ years of structural design experience",
          "Professional Engineer (PE) license preferred",
          "Proficiency in ETABS, SAP2000, SAFE, and AutoCAD",
          "Knowledge of international building codes (IBC, Eurocode)",
          "Strong analytical and problem-solving skills",
        ],
        benefits: [
          "Competitive salary package",
          "Health and life insurance",
          "Continuous learning opportunities",
          "Work on landmark projects",
          "Career advancement paths",
        ],
      },
      it: {
        title: "Ingegnere Strutturale",
        description:
          "Progettare e analizzare sistemi strutturali per edifici commerciali e residenziali, garantendo sicurezza, efficienza e conformità agli standard internazionali.",
        responsibilities: [
          "Progettare sistemi strutturali per edifici e infrastrutture",
          "Eseguire analisi strutturali con software avanzati",
          "Preparare disegni costruttivi dettagliati e specifiche tecniche",
          "Verificare i documenti e i disegni esecutivi dei fornitori",
          "Effettuare ispezioni in cantiere e fornire supporto tecnico",
          "Collaborare con architetti e altre discipline ingegneristiche",
        ],
        requirements: [
          "Laurea triennale o magistrale in Ingegneria Strutturale/Civile",
          "5+ anni di esperienza nella progettazione strutturale",
          "Iscrizione all'albo degli ingegneri preferenziale",
          "Padronanza di ETABS, SAP2000, SAFE e AutoCAD",
          "Conoscenza dei codici edilizi internazionali (IBC, Eurocodice)",
          "Forti capacità analitiche e di problem-solving",
        ],
        benefits: [
          "Pacchetto retributivo competitivo",
          "Assicurazione sanitaria e sulla vita",
          "Opportunità di formazione continua",
          "Lavoro su progetti di prestigio",
          "Percorsi di crescita professionale",
        ],
      },
      de: {
        title: "Tragwerksplaner / Bauingenieur (Konstruktion)",
        description:
          "Entwurf und Berechnung von Tragwerken für Gewerbe- und Wohngebäude unter Gewährleistung von Sicherheit, Effizienz und Einhaltung internationaler Normen.",
        responsibilities: [
          "Entwurf von Tragsystemen für Gebäude und Infrastruktur",
          "Durchführung statischer Berechnungen mit moderner Software",
          "Erstellung detaillierter Ausführungspläne und technischer Spezifikationen",
          "Prüfung von Werkplänen und Unterlagen der ausführenden Firmen",
          "Durchführung von Baustelleninspektionen und technische Unterstützung",
          "Zusammenarbeit mit Architekten und anderen Ingenieurdisziplinen",
        ],
        requirements: [
          "Bachelor- oder Masterabschluss in Bau-/Tragwerksplanung",
          "5+ Jahre Erfahrung in der Tragwerksplanung",
          "Berufsqualifikation als Ingenieur (PE) bevorzugt",
          "Sicherer Umgang mit ETABS, SAP2000, SAFE und AutoCAD",
          "Kenntnis internationaler Baunormen (IBC, Eurocode)",
          "Ausgeprägte analytische und problemlösende Fähigkeiten",
        ],
        benefits: [
          "Attraktives Gehaltspaket",
          "Kranken- und Lebensversicherung",
          "Möglichkeiten zur Weiterbildung",
          "Mitarbeit an herausragenden Projekten",
          "Karrieremöglichkeiten und Aufstiegschancen",
        ],
      },
      nl: {
        title: "Constructief Ingenieur",
        description:
          "Ontwerpen en analyseren van constructieve systemen voor commerciële en residentiële gebouwen, met waarborging van veiligheid, efficiëntie en naleving van internationale normen.",
        responsibilities: [
          "Ontwerpen van constructieve systemen voor gebouwen en infrastructuur",
          "Uitvoeren van constructieve berekeningen met geavanceerde software",
          "Opstellen van gedetailleerde bouwtekeningen en specificaties",
          "Beoordelen van werktekeningen en documenten van aannemers",
          "Uitvoeren van bouwinspecties en technische ondersteuning bieden",
          "Samenwerken met architecten en andere technische disciplines",
        ],
        requirements: [
          "Bachelor- of masterdiploma in Constructieve Techniek / Civiele Techniek",
          "5+ jaar ervaring in constructief ontwerp",
          "Registratie als constructeur heeft de voorkeur",
          "Vaardigheid met ETABS, SAP2000, SAFE en AutoCAD",
          "Kennis van internationale bouwvoorschriften (IBC, Eurocode)",
          "Sterke analytische en probleemoplossende vaardigheden",
        ],
        benefits: [
          "Competitief salarispakket",
          "Ziektekosten- en levensverzekering",
          "Mogelijkheden voor continue scholing",
          "Werken aan prestigieuze projecten",
          "Doorgroeimogelijkheden",
        ],
      },
      tr: {
        title: "Yapı Mühendisi",
        description:
          "Ticari ve konut binalarına yönelik yapısal sistemlerin tasarımı ve analizi; güvenlik, verimlilik ve uluslararası standartlara uyumun sağlanması.",
        responsibilities: [
          "Bina ve altyapı için yapısal sistemler tasarlamak",
          "Gelişmiş yazılım kullanarak yapısal analizler gerçekleştirmek",
          "Detaylı inşaat çizimleri ve teknik şartnameleri hazırlamak",
          "Yüklenici sunumlarını ve imalat çizimlerini incelemek",
          "Saha denetimleri yapmak ve teknik destek sağlamak",
          "Mimarlar ve diğer mühendislik disiplinleri ile iş birliği yapmak",
        ],
        requirements: [
          "Yapı/İnşaat Mühendisliği alanında lisans veya yüksek lisans derecesi",
          "5+ yıl yapısal tasarım deneyimi",
          "Profesyonel Mühendis (PE) lisansı tercih sebebidir",
          "ETABS, SAP2000, SAFE ve AutoCAD'de yetkinlik",
          "Uluslararası yapı yönetmeliklerini bilmek (IBC, Eurocode)",
          "Güçlü analitik ve problem çözme becerileri",
        ],
        benefits: [
          "Rekabetçi maaş paketi",
          "Sağlık ve hayat sigortası",
          "Sürekli öğrenme fırsatları",
          "Önemli projelerde çalışma imkânı",
          "Kariyer gelişim olanakları",
        ],
      },
      ku: {
        title: "Endeziyarê Strûktûrê",
        description:
          "Sêwirandin û analîzkirina pergalên strûktûrê ji bo avahiyên bazirganî û niştecihbûnê, bi dabînkirina ewlehî, karîgerî û lihevhatina bi standardên navneteweyî.",
        responsibilities: [
          "Sêwirandina pergalên strûktûrê ji bo avahî û binesaziyê",
          "Analîzên strûktûrê bi nermalava pêşketî pêkanîn",
          "Amadekirina nexşeyên avahîsaziyê yên berfireh û taybetmendiyên teknîkî",
          "Vekolîna belgeyên pîmankar û nexşeyên kargehê",
          "Kontrolên şaniyê kirin û piştgiriya teknîkî pêşkêşkirin",
          "Hevkarî bi mîmaran û dîsîplînên din ên endezyariyê re",
        ],
        requirements: [
          "Bawernameya lîsansê an masterê di Endezyariya Strûktûrê/Sivîl de",
          "5+ sal ezmûn di sêwirandina strûktûrê de",
          "Lîsansa Endeziyarê Profesyonel (PE) tercîh e",
          "Pisporî di ETABS, SAP2000, SAFE û AutoCAD de",
          "Zanîna qanûnên avahîsaziyê yên navneteweyî (IBC, Eurocode)",
          "Jêhatîbûnên analîtîk û çareserkirina pirsgirêkan ên bihêz",
        ],
        benefits: [
          "Pakêta mûçeyê ya pêşbazî",
          "Sîgorteya tenduristî û jiyanê",
          "Derfetên fêrbûna domdar",
          "Xebata li ser projeyên girîng",
          "Rêyên pêşveçûna kariyerê",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // JOB-003 — Site Supervisor
  // ─────────────────────────────────────────────────────────────
  {
    id: "job-003",
    department: "operations",
    location: "riyadh",
    type: "fullTime",
    experience: "3+ years",
    posted: "2024-01-20",
    featured: false,
    i18n: {
      fr: {
        title: "Superviseur de chantier",
        description:
          "Superviser les activités quotidiennes sur chantier, en garantissant la sécurité, le respect du planning et la conformité aux spécifications.",
        responsibilities: [
          "Superviser les activités quotidiennes et les équipes sur chantier",
          "Assurer le respect des procédures et réglementations de sécurité",
          "Contrôler la qualité des travaux et la conformité aux plans",
          "Coordonner les livraisons de matériaux et l'utilisation des équipements",
          "Tenir les journaux de chantier et rapports d'avancement",
          "Résoudre les problèmes et conflits sur site",
        ],
        requirements: [
          "Diplôme ou formation en technologie de la construction ou domaine connexe",
          "3+ ans d'expérience en supervision de chantier",
          "Solide connaissance des méthodes et matériaux de construction",
          "Excellentes compétences en communication et leadership",
          "Capacité à lire et interpréter des plans d'exécution",
          "Certification OSHA appréciée",
        ],
        benefits: [
          "Salaire compétitif",
          "Indemnité de logement",
          "Transport assuré",
          "Couverture santé",
          "Billets d'avion annuels",
        ],
      },
      en: {
        title: "Site Supervisor",
        description:
          "Supervise daily construction activities on site, ensuring work is performed safely, on schedule, and according to specifications.",
        responsibilities: [
          "Supervise daily construction activities and workforce",
          "Ensure compliance with safety protocols and regulations",
          "Monitor work quality and adherence to specifications",
          "Coordinate material deliveries and equipment usage",
          "Maintain daily logs and progress reports",
          "Resolve on-site issues and conflicts",
        ],
        requirements: [
          "Diploma or degree in Construction Technology or related field",
          "3+ years of site supervision experience",
          "Strong knowledge of construction methods and materials",
          "Excellent communication and leadership skills",
          "Ability to read and interpret construction drawings",
          "OSHA certification preferred",
        ],
        benefits: [
          "Competitive salary",
          "Housing allowance",
          "Transportation provided",
          "Health insurance coverage",
          "Annual flight tickets",
        ],
      },
      it: {
        title: "Supervisore di Cantiere",
        description:
          "Supervisionare le attività quotidiane in cantiere, garantendo che i lavori vengano eseguiti in sicurezza, nei tempi previsti e secondo le specifiche.",
        responsibilities: [
          "Supervisionare le attività quotidiane di costruzione e la forza lavoro",
          "Garantire la conformità ai protocolli e alle normative di sicurezza",
          "Monitorare la qualità dei lavori e il rispetto delle specifiche",
          "Coordinare le consegne di materiali e l'uso delle attrezzature",
          "Tenere i registri giornalieri e i rapporti di avanzamento",
          "Risolvere i problemi e i conflitti in cantiere",
        ],
        requirements: [
          "Diploma o laurea in Tecnologia delle Costruzioni o settore correlato",
          "3+ anni di esperienza nella supervisione di cantiere",
          "Solida conoscenza dei metodi e dei materiali costruttivi",
          "Eccellenti capacità di comunicazione e leadership",
          "Capacità di leggere e interpretare i disegni costruttivi",
          "Certificazione OSHA preferenziale",
        ],
        benefits: [
          "Stipendio competitivo",
          "Indennità di alloggio",
          "Trasporto fornito",
          "Copertura assicurativa sanitaria",
          "Biglietti aerei annuali",
        ],
      },
      de: {
        title: "Baustellenleiter",
        description:
          "Überwachung der täglichen Baustellentätigkeiten mit Gewährleistung von Arbeitssicherheit, Termineinhaltung und Spezifikationskonformität.",
        responsibilities: [
          "Beaufsichtigung der täglichen Bauaktivitäten und Arbeitskräfte",
          "Sicherstellung der Einhaltung von Sicherheitsvorschriften und -protokollen",
          "Überwachung der Arbeitsqualität und Einhaltung der Spezifikationen",
          "Koordination von Materiallieferungen und Geräteeinsatz",
          "Führung von Bautagebüchern und Fortschrittsberichten",
          "Lösung von Problemen und Konflikten vor Ort",
        ],
        requirements: [
          "Abschluss oder Ausbildung in Bautechnologie oder verwandtem Bereich",
          "3+ Jahre Erfahrung in der Baustellenleitung",
          "Fundierte Kenntnisse der Baumethoden und -materialien",
          "Hervorragende Kommunikations- und Führungsfähigkeiten",
          "Fähigkeit, Bauzeichnungen zu lesen und zu interpretieren",
          "OSHA-Zertifizierung bevorzugt",
        ],
        benefits: [
          "Wettbewerbsfähiges Gehalt",
          "Wohnungszuschuss",
          "Bereitstellung von Transport",
          "Krankenversicherungsschutz",
          "Jährliche Flugtickets",
        ],
      },
      nl: {
        title: "Uitvoerder / Site Supervisor",
        description:
          "Toezicht houden op dagelijkse bouwactiviteiten op de bouwplaats, zodat werkzaamheden veilig, volgens planning en conform specificaties worden uitgevoerd.",
        responsibilities: [
          "Toezicht houden op dagelijkse bouwactiviteiten en personeel",
          "Zorgen voor naleving van veiligheidsprotocollen en regelgeving",
          "Bewaken van werkkwaliteit en naleving van specificaties",
          "Coördineren van materiaalleveringen en gebruik van apparatuur",
          "Bijhouden van dagelijkse logboeken en voortgangsrapportages",
          "Oplossen van problemen en geschillen op locatie",
        ],
        requirements: [
          "Diploma of graad in Bouwtechnologie of verwant vakgebied",
          "3+ jaar ervaring als uitvoerder / site supervisor",
          "Gedegen kennis van bouwmethoden en -materialen",
          "Uitstekende communicatie- en leiderschapsvaardigheden",
          "Vermogen om bouwtekeningen te lezen en te interpreteren",
          "VCA-certificering of OSHA-certificering heeft de voorkeur",
        ],
        benefits: [
          "Competitief salaris",
          "Huisvestingsvergoeding",
          "Vervoer voorzien",
          "Ziektekostenverzekering",
          "Jaarlijkse vliegtickets",
        ],
      },
      tr: {
        title: "Şantiye Şefi",
        description:
          "Şantiyedeki günlük inşaat faaliyetlerini denetlemek; işlerin güvenli, programa uygun ve şartnamelere göre yürütülmesini sağlamak.",
        responsibilities: [
          "Günlük inşaat faaliyetlerini ve iş gücünü denetlemek",
          "Güvenlik protokollerine ve düzenlemelere uyumu sağlamak",
          "İş kalitesini ve şartnamelere uyumu izlemek",
          "Malzeme teslimatlarını ve ekipman kullanımını koordine etmek",
          "Günlük kayıtları ve ilerleme raporlarını tutmak",
          "Şantiyedeki sorunları ve anlaşmazlıkları çözmek",
        ],
        requirements: [
          "İnşaat Teknolojisi veya ilgili alanda diploma veya lisans derecesi",
          "3+ yıl şantiye denetim deneyimi",
          "İnşaat yöntemleri ve malzemeleri konusunda sağlam bilgi",
          "Mükemmel iletişim ve liderlik becerileri",
          "İnşaat çizimlerini okuma ve yorumlama yeteneği",
          "OSHA sertifikası tercih sebebidir",
        ],
        benefits: [
          "Rekabetçi maaş",
          "Konut ödeneği",
          "Ulaşım sağlanır",
          "Sağlık sigortası kapsamı",
          "Yıllık uçak biletleri",
        ],
      },
      ku: {
        title: "Çavdêrê Şaniyê",
        description:
          "Çavdêriya çalakiyên avahîsaziyê yên rojane yên li şaniyê, dabînkirina ku kar bi ewlehî, li gorî bernameyê û li gorî taybetmendiyan pêk were.",
        responsibilities: [
          "Çavdêriya çalakiyên avahîsaziyê yên rojane û hêza kar",
          "Dabînkirina lihevhatina bi protokolên ewlehiyê û rêziknameyan",
          "Şopandina kalîteya karê û lihevhatina bi taybetmendiyan",
          "Hevrêzkirina radestkirina materyalan û bikaranîna amûran",
          "Domandina tomarên rojane û raporên pêşveçûnê",
          "Çareserkirina pirsgirêk û nakokiyên li şaniyê",
        ],
        requirements: [
          "Dîploma an bawername di Teknolojiya Avahîsaziyê an qada têkildar de",
          "3+ sal ezmûn di çavdêriya şaniyê de",
          "Zanîna bihêz a rêbaz û materyalên avahîsaziyê",
          "Jêhatîbûnên ragihandin û serokatiyê yên hêja",
          "Şiyana xwendin û şîrovekirina nexşeyên avahîsaziyê",
          "Sertîfîkaya OSHA tercîh e",
        ],
        benefits: [
          "Mûçeya pêşbazî",
          "Alîkariya xanî",
          "Veguheztin tê dabînkirin",
          "Sîgorteya tenduristiyê",
          "Bilêtên balafirê yên salane",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // JOB-004 — BIM Coordinator
  // ─────────────────────────────────────────────────────────────
  {
    id: "job-004",
    department: "architecture",
    location: "germany",
    type: "fullTime",
    experience: "4+ years",
    posted: "2024-01-22",
    featured: true,
    i18n: {
      fr: {
        title: "Coordinateur BIM",
        description:
          "Coordonner le BIM pour l'ensemble des disciplines du projet, garantir la fiabilité des maquettes et faciliter la détection et la résolution des collisions.",
        responsibilities: [
          "Élaborer et maintenir les plans d'exécution BIM",
          "Coordonner les maquettes BIM multi-disciplines",
          "Réaliser la détection de clashes et piloter leur résolution",
          "Produire des simulations 4D/5D pour la visualisation du projet",
          "Former les équipes aux outils et protocoles BIM",
          "Assurer le respect des standards BIM",
        ],
        requirements: [
          "Diplôme en architecture, ingénierie ou domaine connexe",
          "4+ ans d'expérience en coordination BIM",
          "Excellente maîtrise de Revit, Navisworks et BIM 360",
          "Connaissance des standards et protocoles BIM",
          "Expérience sur des projets commerciaux de grande envergure",
          "Très bonnes compétences de coordination et communication",
        ],
        benefits: [
          "Rémunération compétitive",
          "Package d'avantages santé",
          "Soutien aux certifications professionnelles",
          "Environnement technologique moderne",
          "Modalités de travail flexibles",
        ],
      },
      en: {
        title: "BIM Coordinator",
        description:
          "Coordinate Building Information Modeling across all project disciplines, ensuring model accuracy and facilitating clash detection and resolution.",
        responsibilities: [
          "Develop and maintain BIM execution plans",
          "Coordinate BIM models across all disciplines",
          "Perform clash detection and resolution",
          "Create 4D/5D simulations for project visualization",
          "Train team members on BIM software and protocols",
          "Ensure BIM standards compliance",
        ],
        requirements: [
          "Bachelor's degree in Architecture, Engineering, or related field",
          "4+ years of BIM coordination experience",
          "Expert proficiency in Revit, Navisworks, and BIM 360",
          "Knowledge of BIM standards and protocols",
          "Experience with large-scale commercial projects",
          "Strong coordination and communication skills",
        ],
        benefits: [
          "Competitive compensation",
          "Health benefits package",
          "Professional certification support",
          "Modern technology environment",
          "Flexible working arrangements",
        ],
      },
      it: {
        title: "Coordinatore BIM",
        description:
          "Coordinare il Building Information Modeling in tutte le discipline del progetto, garantendo l'accuratezza dei modelli e facilitando la rilevazione e risoluzione delle interferenze.",
        responsibilities: [
          "Sviluppare e mantenere i piani di esecuzione BIM",
          "Coordinare i modelli BIM in tutte le discipline",
          "Eseguire la rilevazione e la risoluzione delle interferenze",
          "Creare simulazioni 4D/5D per la visualizzazione del progetto",
          "Formare i membri del team su software e protocolli BIM",
          "Garantire la conformità agli standard BIM",
        ],
        requirements: [
          "Laurea in Architettura, Ingegneria o settore correlato",
          "4+ anni di esperienza nel coordinamento BIM",
          "Padronanza esperta di Revit, Navisworks e BIM 360",
          "Conoscenza degli standard e dei protocolli BIM",
          "Esperienza con progetti commerciali di grande scala",
          "Forti capacità di coordinamento e comunicazione",
        ],
        benefits: [
          "Retribuzione competitiva",
          "Pacchetto benefit sanitari",
          "Supporto per certificazioni professionali",
          "Ambiente tecnologico moderno",
          "Modalità di lavoro flessibili",
        ],
      },
      de: {
        title: "BIM-Koordinator",
        description:
          "Koordination des Building Information Modeling über alle Projektdisziplinen hinweg, Sicherstellung der Modellgenauigkeit und Unterstützung bei Kollisionsprüfung und -behebung.",
        responsibilities: [
          "Entwicklung und Pflege von BIM-Ausführungsplänen",
          "Koordination der BIM-Modelle aller Fachdisziplinen",
          "Durchführung von Kollisionsprüfungen und deren Behebung",
          "Erstellung von 4D/5D-Simulationen zur Projektvisualisierung",
          "Schulung der Teammitglieder in BIM-Software und -Protokollen",
          "Sicherstellung der Einhaltung von BIM-Standards",
        ],
        requirements: [
          "Abschluss in Architektur, Ingenieurwesen oder verwandtem Bereich",
          "4+ Jahre Erfahrung in der BIM-Koordination",
          "Expertenkenntnisse in Revit, Navisworks und BIM 360",
          "Kenntnis der BIM-Standards und -Protokolle",
          "Erfahrung mit großen Gewerbeprojekten",
          "Ausgeprägte Koordinations- und Kommunikationsfähigkeiten",
        ],
        benefits: [
          "Wettbewerbsfähige Vergütung",
          "Gesundheitsleistungen",
          "Unterstützung bei Berufszertifizierungen",
          "Modernes Technologieumfeld",
          "Flexible Arbeitsmodelle",
        ],
      },
      nl: {
        title: "BIM-Coördinator",
        description:
          "Coördinatie van Building Information Modeling over alle projectdisciplines heen, met waarborging van modelnauwkeurigheid en facilitering van clashdetectie en -oplossing.",
        responsibilities: [
          "Ontwikkelen en onderhouden van BIM-uitvoeringsplannen",
          "Coördineren van BIM-modellen over alle disciplines",
          "Uitvoeren van clashdetectie en -oplossing",
          "Maken van 4D/5D-simulaties voor projectvisualisatie",
          "Trainen van teamleden in BIM-software en -protocollen",
          "Zorgen voor naleving van BIM-standaarden",
        ],
        requirements: [
          "Bachelor- of masterdiploma in Architectuur, Bouwkunde of verwant vakgebied",
          "4+ jaar ervaring in BIM-coördinatie",
          "Expertkennis van Revit, Navisworks en BIM 360",
          "Kennis van BIM-standaarden en -protocollen",
          "Ervaring met grootschalige commerciële projecten",
          "Sterke coördinatie- en communicatievaardigheden",
        ],
        benefits: [
          "Competitieve vergoeding",
          "Pakket gezondheidsvoordelen",
          "Ondersteuning bij professionele certificeringen",
          "Moderne technologische werkomgeving",
          "Flexibele werkregelingen",
        ],
      },
      tr: {
        title: "BIM Koordinatörü",
        description:
          "Tüm proje disiplinlerinde Yapı Bilgi Modellemesi'ni (BIM) koordine etmek, model doğruluğunu sağlamak ve çakışma tespiti ile çözümünü kolaylaştırmak.",
        responsibilities: [
          "BIM uygulama planlarını geliştirmek ve sürdürmek",
          "Tüm disiplinlerdeki BIM modellerini koordine etmek",
          "Çakışma tespiti ve çözümü gerçekleştirmek",
          "Proje görselleştirmesi için 4D/5D simülasyonlar oluşturmak",
          "Ekip üyelerini BIM yazılımı ve protokolleri konusunda eğitmek",
          "BIM standartlarına uyumu sağlamak",
        ],
        requirements: [
          "Mimarlık, Mühendislik veya ilgili alanda lisans derecesi",
          "4+ yıl BIM koordinasyon deneyimi",
          "Revit, Navisworks ve BIM 360'ta uzman düzeyinde yetkinlik",
          "BIM standartları ve protokolleri bilgisi",
          "Büyük ölçekli ticari projelerde deneyim",
          "Güçlü koordinasyon ve iletişim becerileri",
        ],
        benefits: [
          "Rekabetçi ücretlendirme",
          "Sağlık yardımları paketi",
          "Mesleki sertifika desteği",
          "Modern teknoloji ortamı",
          "Esnek çalışma düzenlemeleri",
        ],
      },
      ku: {
        title: "Koordînatorê BIM",
        description:
          "Koordînekirina Modelkirina Agahdariya Avahiyê (BIM) li seranserê hemû dîsîplînên projeyê, dabînkirina rastbûna modelê û hêsankirina vedîtin û çareserkirina lihevketinên (clash).",
        responsibilities: [
          "Pêşxistin û domandina planên pêkanîna BIM",
          "Koordînekirina modelên BIM li seranserê hemû dîsîplînan",
          "Pêkanîna vedîtin û çareserkirina lihevketinan (clash detection)",
          "Afirandina sîmulasyonên 4D/5D ji bo dîtina projeyê",
          "Rahênerkirina endamên tîmê li ser nermalava û protokolên BIM",
          "Dabînkirina lihevhatina bi standardên BIM",
        ],
        requirements: [
          "Bawernameya lîsansê di Mîmarî, Endezyariyê an qada têkildar de",
          "4+ sal ezmûn di koordînekirina BIM de",
          "Pisporiya pispor di Revit, Navisworks û BIM 360 de",
          "Zanîna standard û protokolên BIM",
          "Ezmûn di projeyên bazirganî yên mezin de",
          "Jêhatîbûnên koordînasyon û ragihandinê yên bihêz",
        ],
        benefits: [
          "Berdêla pêşbazî",
          "Pakêta berjewendiyên tenduristiyê",
          "Piştgiriya sertîfîkayên pîşeyî",
          "Jîngeha teknolojiya nûjen",
          "Rêkxistinên xebatê yên nermbûyî",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // JOB-005 — Quantity Surveyor
  // ─────────────────────────────────────────────────────────────
  {
    id: "job-005",
    department: "finance",
    location: "cairo",
    type: "fullTime",
    experience: "5+ years",
    posted: "2024-01-25",
    featured: false,
    i18n: {
      fr: {
        title: "Économiste de la construction (Quantity Surveyor)",
        description:
          "Gérer les coûts du projet sur tout le cycle de vie de la construction, des estimations initiales aux décomptes finaux et valorisations.",
        responsibilities: [
          "Établir des estimations détaillées et des bordereaux de quantités",
          "Piloter les budgets projet et les prévisions de trésorerie",
          "Évaluer les réclamations, avenants et variations des entreprises",
          "Préparer les situations mensuelles et certificats de paiement",
          "Négocier les contrats et les achats",
          "Réaliser des analyses de coûts et de la value engineering",
        ],
        requirements: [
          "Diplôme en économie de la construction/métré ou domaine connexe",
          "5+ ans d'expérience en estimation et contrôle des coûts",
          "Adhésion RICS appréciée",
          "Maîtrise des outils logiciels d'estimation",
          "Solides compétences en négociation et analyse",
          "Connaissance des contrats de construction (FIDIC, JCT)",
        ],
        benefits: [
          "Salaire compétitif",
          "Primes de performance",
          "Soutien aux adhésions professionnelles",
          "Assurance santé",
          "Programmes de développement de carrière",
        ],
      },
      en: {
        title: "Quantity Surveyor",
        description:
          "Manage project costs throughout the construction lifecycle, from initial estimates to final accounts and valuations.",
        responsibilities: [
          "Prepare detailed cost estimates and bills of quantities",
          "Manage project budgets and cash flow forecasts",
          "Evaluate contractor claims and variations",
          "Prepare monthly valuations and payment certificates",
          "Negotiate contracts and procurement",
          "Conduct cost analysis and value engineering",
        ],
        requirements: [
          "Bachelor's degree in Quantity Surveying or related field",
          "5+ years of quantity surveying experience",
          "RICS membership preferred",
          "Proficiency in cost estimation software",
          "Strong negotiation and analytical skills",
          "Knowledge of construction contracts (FIDIC, JCT)",
        ],
        benefits: [
          "Competitive salary",
          "Performance bonuses",
          "Professional membership support",
          "Health insurance",
          "Career development programs",
        ],
      },
      it: {
        title: "Quantity Surveyor / Computista",
        description:
          "Gestire i costi del progetto durante l'intero ciclo di vita della costruzione, dalle stime iniziali ai conti finali e alle valutazioni.",
        responsibilities: [
          "Preparare stime dettagliate dei costi e computi metrici",
          "Gestire i budget di progetto e le previsioni di flusso di cassa",
          "Valutare le richieste e le varianti dei fornitori",
          "Preparare valutazioni mensili e certificati di pagamento",
          "Negoziare contratti e approvvigionamenti",
          "Condurre analisi dei costi e ingegneria del valore",
        ],
        requirements: [
          "Laurea in Estimo / Quantity Surveying o settore correlato",
          "5+ anni di esperienza nel quantity surveying",
          "Iscrizione RICS preferenziale",
          "Padronanza di software per la stima dei costi",
          "Forti capacità negoziali e analitiche",
          "Conoscenza dei contratti di costruzione (FIDIC, JCT)",
        ],
        benefits: [
          "Stipendio competitivo",
          "Bonus di performance",
          "Supporto per iscrizioni professionali",
          "Assicurazione sanitaria",
          "Programmi di sviluppo professionale",
        ],
      },
      de: {
        title: "Kalkulator / Quantity Surveyor",
        description:
          "Verwaltung der Projektkosten über den gesamten Baulebenszyklus, von ersten Schätzungen bis zu Schlussrechnungen und Bewertungen.",
        responsibilities: [
          "Erstellung detaillierter Kostenschätzungen und Leistungsverzeichnisse",
          "Verwaltung von Projektbudgets und Cashflow-Prognosen",
          "Bewertung von Nachträgen und Abweichungen der Auftragnehmer",
          "Erstellung monatlicher Bewertungen und Zahlungsbescheinigungen",
          "Verhandlung von Verträgen und Beschaffungen",
          "Durchführung von Kostenanalysen und Wertoptimierung (Value Engineering)",
        ],
        requirements: [
          "Abschluss in Bauökonomie, Quantity Surveying oder verwandtem Bereich",
          "5+ Jahre Erfahrung im Quantity Surveying",
          "RICS-Mitgliedschaft bevorzugt",
          "Sicherer Umgang mit Kalkulationssoftware",
          "Ausgeprägte Verhandlungs- und Analysefähigkeiten",
          "Kenntnis von Bauverträgen (FIDIC, JCT)",
        ],
        benefits: [
          "Wettbewerbsfähiges Gehalt",
          "Leistungsprämien",
          "Unterstützung bei Berufsmitgliedschaften",
          "Krankenversicherung",
          "Karriereentwicklungsprogramme",
        ],
      },
      nl: {
        title: "Quantity Surveyor / Kostencalculator",
        description:
          "Beheer van projectkosten gedurende de gehele bouwlevenscyclus, van initiële ramingen tot eindafrekeningen en waarderingen.",
        responsibilities: [
          "Opstellen van gedetailleerde kostenramingen en hoeveelhedenstaten",
          "Beheren van projectbudgetten en kasstroomprognoses",
          "Beoordelen van claims en wijzigingen van aannemers",
          "Opstellen van maandelijkse waarderingen en betalingscertificaten",
          "Onderhandelen over contracten en inkoop",
          "Uitvoeren van kostenanalyses en value engineering",
        ],
        requirements: [
          "Bachelor- of masterdiploma in Quantity Surveying of verwant vakgebied",
          "5+ jaar ervaring in quantity surveying",
          "RICS-lidmaatschap heeft de voorkeur",
          "Vaardigheid met kostenramingssoftware",
          "Sterke onderhandelings- en analytische vaardigheden",
          "Kennis van bouwcontracten (FIDIC, JCT)",
        ],
        benefits: [
          "Competitief salaris",
          "Prestatiebonussen",
          "Ondersteuning bij professionele lidmaatschappen",
          "Ziektekostenverzekering",
          "Programma's voor loopbaanontwikkeling",
        ],
      },
      tr: {
        title: "Metrajcı / Keşif Uzmanı (Quantity Surveyor)",
        description:
          "İlk tahminlerden nihai hesaplara ve değerlemelere kadar inşaat yaşam döngüsü boyunca proje maliyetlerini yönetmek.",
        responsibilities: [
          "Detaylı maliyet tahminleri ve metraj cetvelleri hazırlamak",
          "Proje bütçelerini ve nakit akışı tahminlerini yönetmek",
          "Yüklenici taleplerini ve değişiklikleri değerlendirmek",
          "Aylık hakedişleri ve ödeme sertifikalarını hazırlamak",
          "Sözleşme ve tedarik süreçlerini yürütmek",
          "Maliyet analizi ve değer mühendisliği yapmak",
        ],
        requirements: [
          "Metraj / Quantity Surveying veya ilgili alanda lisans derecesi",
          "5+ yıl metraj / quantity surveying deneyimi",
          "RICS üyeliği tercih sebebidir",
          "Maliyet tahmin yazılımlarında yetkinlik",
          "Güçlü müzakere ve analitik beceriler",
          "İnşaat sözleşmeleri bilgisi (FIDIC, JCT)",
        ],
        benefits: [
          "Rekabetçi maaş",
          "Performans primleri",
          "Mesleki üyelik desteği",
          "Sağlık sigortası",
          "Kariyer gelişim programları",
        ],
      },
      ku: {
        title: "Pisporê Metreyê / Quantity Surveyor",
        description:
          "Birêvebirina lêçûnên projeyê di tevahiya çerxa jiyana avahîsaziyê de, ji texmînên destpêkê heta hesabên dawî û nirxandinan.",
        responsibilities: [
          "Amadekirina texmînên lêçûnê yên berfireh û lîsteyên mîqdaran",
          "Birêvebirina budceyên projeyê û pêşbîniyên herikîna dravê",
          "Nirxandina daxwaz û guheztinên pîmankaran",
          "Amadekirina nirxandinên mehane û belgeyên dravdanê",
          "Danûstandin li ser peyman û kirînan",
          "Analîzên lêçûnê û endezyariya nirxê pêkanîn",
        ],
        requirements: [
          "Bawernameya lîsansê di Metreyê / Quantity Surveying an qada têkildar de",
          "5+ sal ezmûn di metreyê de",
          "Endamtiya RICS tercîh e",
          "Pisporî di nermalava texmîna lêçûnê de",
          "Jêhatîbûnên danûstandin û analîtîk ên bihêz",
          "Zanîna peymanên avahîsaziyê (FIDIC, JCT)",
        ],
        benefits: [
          "Mûçeya pêşbazî",
          "Prîmên performansê",
          "Piştgiriya endamtiya pîşeyî",
          "Sîgorteya tenduristiyê",
          "Bernameyên pêşveçûna kariyerê",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // JOB-006 — HSE Manager
  // ─────────────────────────────────────────────────────────────
  {
    id: "job-006",
    department: "operations",
    location: "brussels",
    type: "fullTime",
    experience: "7+ years",
    posted: "2024-01-26",
    featured: false,
    i18n: {
      fr: {
        title: "Responsable HSE",
        description:
          "Piloter la fonction Hygiène, Sécurité et Environnement sur l'ensemble des projets, assurer la conformité et promouvoir une culture zéro incident.",
        responsibilities: [
          "Définir et déployer les politiques et procédures HSE",
          "Réaliser des évaluations des risques et audits sécurité",
          "Enquêter sur les incidents et mettre en place des actions correctives",
          "Animer des formations HSE pour l'ensemble du personnel",
          "Garantir la conformité réglementaire sur tous les projets",
          "Reporter les indicateurs HSE à la direction",
        ],
        requirements: [
          "Diplôme en management de la sécurité ou domaine connexe",
          "7+ ans d'expérience HSE dans la construction",
          "NEBOSH Diploma ou certification équivalente",
          "Bonne maîtrise des standards internationaux HSE",
          "Expérience de mise en œuvre ISO 45001",
          "Excellentes compétences en leadership et communication",
        ],
        benefits: [
          "Rémunération compétitive",
          "Couverture santé complète",
          "Budget de développement professionnel",
          "Véhicule de fonction",
          "Primes de performance",
        ],
      },
      en: {
        title: "HSE Manager",
        description:
          "Lead the Health, Safety, and Environment function across all projects, ensuring compliance and promoting a zero-incident culture.",
        responsibilities: [
          "Develop and implement HSE policies and procedures",
          "Conduct risk assessments and safety audits",
          "Investigate incidents and implement corrective actions",
          "Lead HSE training programs for all staff",
          "Ensure regulatory compliance across all projects",
          "Report HSE performance to management",
        ],
        requirements: [
          "Bachelor's degree in Safety Management or related field",
          "7+ years of HSE experience in construction",
          "NEBOSH Diploma or equivalent certification",
          "Strong knowledge of international safety standards",
          "Experience with ISO 45001 implementation",
          "Excellent leadership and communication skills",
        ],
        benefits: [
          "Competitive salary package",
          "Comprehensive health coverage",
          "Professional development budget",
          "Company vehicle",
          "Performance incentives",
        ],
      },
      it: {
        title: "Responsabile HSE",
        description:
          "Dirigere la funzione Salute, Sicurezza e Ambiente in tutti i progetti, garantendo la conformità e promuovendo una cultura a zero incidenti.",
        responsibilities: [
          "Sviluppare e implementare politiche e procedure HSE",
          "Condurre valutazioni dei rischi e audit sulla sicurezza",
          "Indagare sugli incidenti e implementare azioni correttive",
          "Guidare i programmi di formazione HSE per tutto il personale",
          "Garantire la conformità normativa in tutti i progetti",
          "Riferire le prestazioni HSE alla direzione",
        ],
        requirements: [
          "Laurea in Gestione della Sicurezza o settore correlato",
          "7+ anni di esperienza HSE nel settore costruzioni",
          "Diploma NEBOSH o certificazione equivalente",
          "Solida conoscenza degli standard di sicurezza internazionali",
          "Esperienza nell'implementazione ISO 45001",
          "Eccellenti capacità di leadership e comunicazione",
        ],
        benefits: [
          "Pacchetto retributivo competitivo",
          "Copertura sanitaria completa",
          "Budget per lo sviluppo professionale",
          "Auto aziendale",
          "Incentivi di performance",
        ],
      },
      de: {
        title: "HSE-Manager (Arbeitsschutz & Umwelt)",
        description:
          "Leitung der Funktion Gesundheit, Sicherheit und Umwelt über alle Projekte hinweg, Sicherstellung der Compliance und Förderung einer Null-Unfall-Kultur.",
        responsibilities: [
          "Entwicklung und Umsetzung von HSE-Richtlinien und -Verfahren",
          "Durchführung von Gefährdungsbeurteilungen und Sicherheitsaudits",
          "Untersuchung von Vorfällen und Umsetzung von Korrekturmaßnahmen",
          "Leitung von HSE-Schulungsprogrammen für alle Mitarbeiter",
          "Sicherstellung der behördlichen Compliance über alle Projekte",
          "Berichterstattung der HSE-Leistungskennzahlen an die Geschäftsleitung",
        ],
        requirements: [
          "Abschluss in Sicherheitsmanagement oder verwandtem Bereich",
          "7+ Jahre HSE-Erfahrung im Bauwesen",
          "NEBOSH-Diplom oder gleichwertige Zertifizierung",
          "Fundierte Kenntnisse internationaler Sicherheitsstandards",
          "Erfahrung mit ISO 45001-Implementierung",
          "Hervorragende Führungs- und Kommunikationsfähigkeiten",
        ],
        benefits: [
          "Attraktives Gehaltspaket",
          "Umfassende Krankenversicherung",
          "Budget für berufliche Weiterentwicklung",
          "Firmenwagen",
          "Leistungsprämien",
        ],
      },
      nl: {
        title: "HSE-Manager (Veiligheid, Gezondheid & Milieu)",
        description:
          "Leiding geven aan de functie Gezondheid, Veiligheid en Milieu over alle projecten, met waarborging van compliance en bevordering van een nul-incidentencultuur.",
        responsibilities: [
          "Ontwikkelen en implementeren van HSE-beleid en -procedures",
          "Uitvoeren van risicobeoordelingen en veiligheidsaudits",
          "Onderzoeken van incidenten en implementeren van corrigerende maatregelen",
          "Leiden van HSE-opleidingsprogramma's voor alle medewerkers",
          "Zorgen voor naleving van regelgeving over alle projecten",
          "Rapporteren van HSE-prestaties aan het management",
        ],
        requirements: [
          "Bachelor- of masterdiploma in Veiligheidsmanagement of verwant vakgebied",
          "7+ jaar HSE-ervaring in de bouw",
          "NEBOSH-diploma of gelijkwaardige certificering",
          "Gedegen kennis van internationale veiligheidsnormen",
          "Ervaring met ISO 45001-implementatie",
          "Uitstekende leiderschaps- en communicatievaardigheden",
        ],
        benefits: [
          "Competitief salarispakket",
          "Uitgebreide ziektekostenverzekering",
          "Budget voor professionele ontwikkeling",
          "Bedrijfsauto",
          "Prestatie-incentives",
        ],
      },
      tr: {
        title: "İSG Müdürü (İş Sağlığı, Güvenliği ve Çevre)",
        description:
          "Tüm projelerde İş Sağlığı, Güvenliği ve Çevre fonksiyonunu yönetmek, uyumu sağlamak ve sıfır kaza kültürünü desteklemek.",
        responsibilities: [
          "İSG politika ve prosedürlerini geliştirmek ve uygulamak",
          "Risk değerlendirmeleri ve güvenlik denetimleri yapmak",
          "Olayları araştırmak ve düzeltici faaliyetleri uygulamak",
          "Tüm personel için İSG eğitim programlarına liderlik etmek",
          "Tüm projelerde mevzuata uyumu sağlamak",
          "İSG performansını yönetime raporlamak",
        ],
        requirements: [
          "Güvenlik Yönetimi veya ilgili alanda lisans derecesi",
          "İnşaat sektöründe 7+ yıl İSG deneyimi",
          "NEBOSH Diploması veya eşdeğer sertifika",
          "Uluslararası güvenlik standartları hakkında güçlü bilgi",
          "ISO 45001 uygulama deneyimi",
          "Mükemmel liderlik ve iletişim becerileri",
        ],
        benefits: [
          "Rekabetçi maaş paketi",
          "Kapsamlı sağlık sigortası",
          "Mesleki gelişim bütçesi",
          "Şirket aracı",
          "Performans teşvikleri",
        ],
      },
      ku: {
        title: "Rêvebirê HSE (Tenduristî, Ewlehî û Jîngehê)",
        description:
          "Birêvebirina fonksiyona Tenduristî, Ewlehî û Jîngehê li seranserê hemû projeyan, dabînkirina lihevhatinê û pêşvebirina çanda sifir-qezayê.",
        responsibilities: [
          "Pêşxistin û bicîhkirina siyaset û prosedûrên HSE",
          "Nirxandina xetereyan û kontrolên ewlehiyê pêkanîn",
          "Lêpirsîna bûyeran û bicîhkirina tevgerên rastker",
          "Serokatiya bernameyên rahêneriya HSE ji bo hemû karmendan",
          "Dabînkirina lihevhatina rêziknameyî li seranserê hemû projeyan",
          "Ragihandina performansa HSE ji rêveberiyê re",
        ],
        requirements: [
          "Bawernameya lîsansê di Birêvebirina Ewlehiyê an qada têkildar de",
          "7+ sal ezmûna HSE di avahîsaziyê de",
          "Dîplomaya NEBOSH an sertîfîkaya wekhev",
          "Zanîna bihêz a standardên ewlehiyê yên navneteweyî",
          "Ezmûn di bicîhkirina ISO 45001 de",
          "Jêhatîbûnên serokatî û ragihandinê yên hêja",
        ],
        benefits: [
          "Pakêta mûçeyê ya pêşbazî",
          "Sîgorteya tenduristiyê ya berfireh",
          "Budceya pêşveçûna pîşeyî",
          "Otomobîla pargîdaniyê",
          "Teşwîqên performansê",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // JOB-007 — Civil Engineer
  // ─────────────────────────────────────────────────────────────
  {
    id: "job-007",
    department: "engineering",
    location: "riyadh",
    type: "fullTime",
    experience: "3+ years",
    posted: "2024-01-28",
    featured: false,
    i18n: {
      fr: {
        title: "Ingénieur génie civil",
        description:
          "Concevoir et superviser des ouvrages de génie civil incluant terrassements, drainage et infrastructures pour des projets de construction.",
        responsibilities: [
          "Concevoir les ouvrages de génie civil et les infrastructures",
          "Préparer les plans techniques et spécifications",
          "Superviser l'exécution des travaux de génie civil",
          "Assurer la conformité aux normes et standards de conception",
          "Coordonner avec les autres disciplines d'ingénierie",
          "Fournir un support technique pendant l'exécution",
        ],
        requirements: [
          "Diplôme en génie civil",
          "3+ ans d'expérience en génie civil",
          "Maîtrise de AutoCAD et Civil 3D",
          "Connaissance des codes et normes locaux",
          "Solides compétences techniques et analytiques",
          "Permis de conduire valide",
        ],
        benefits: [
          "Salaire compétitif",
          "Indemnité de logement",
          "Assurance santé",
          "Congés annuels",
          "Opportunités de formation",
        ],
      },
      en: {
        title: "Civil Engineer",
        description:
          "Design and oversee civil engineering works including earthworks, drainage, and infrastructure for construction projects.",
        responsibilities: [
          "Design civil engineering works and infrastructure",
          "Prepare technical drawings and specifications",
          "Supervise construction of civil works",
          "Ensure compliance with design standards",
          "Coordinate with other engineering disciplines",
          "Provide technical support during construction",
        ],
        requirements: [
          "Bachelor's degree in Civil Engineering",
          "3+ years of civil engineering experience",
          "Proficiency in AutoCAD and Civil 3D",
          "Knowledge of local building codes and standards",
          "Strong technical and analytical skills",
          "Valid driving license",
        ],
        benefits: [
          "Competitive salary",
          "Housing allowance",
          "Health insurance",
          "Annual leave benefits",
          "Training opportunities",
        ],
      },
      it: {
        title: "Ingegnere Civile",
        description:
          "Progettare e supervisionare opere di ingegneria civile tra cui movimenti terra, drenaggi e infrastrutture per progetti di costruzione.",
        responsibilities: [
          "Progettare opere di ingegneria civile e infrastrutture",
          "Preparare disegni tecnici e specifiche",
          "Supervisionare la costruzione delle opere civili",
          "Garantire la conformità agli standard progettuali",
          "Coordinarsi con le altre discipline ingegneristiche",
          "Fornire supporto tecnico durante la costruzione",
        ],
        requirements: [
          "Laurea in Ingegneria Civile",
          "3+ anni di esperienza in ingegneria civile",
          "Padronanza di AutoCAD e Civil 3D",
          "Conoscenza dei codici e delle normative edilizie locali",
          "Forti competenze tecniche e analitiche",
          "Patente di guida valida",
        ],
        benefits: [
          "Stipendio competitivo",
          "Indennità di alloggio",
          "Assicurazione sanitaria",
          "Ferie annuali",
          "Opportunità di formazione",
        ],
      },
      de: {
        title: "Bauingenieur (Tiefbau)",
        description:
          "Planung und Überwachung von Tiefbauarbeiten einschließlich Erdbau, Entwässerung und Infrastruktur für Bauprojekte.",
        responsibilities: [
          "Planung von Tiefbauwerken und Infrastruktur",
          "Erstellung technischer Zeichnungen und Spezifikationen",
          "Überwachung der Ausführung von Tiefbauarbeiten",
          "Sicherstellung der Einhaltung von Planungsstandards",
          "Koordination mit anderen Ingenieurdisziplinen",
          "Technische Unterstützung während der Bauphase",
        ],
        requirements: [
          "Abschluss in Bauingenieurwesen",
          "3+ Jahre Erfahrung im Tiefbau",
          "Sicherer Umgang mit AutoCAD und Civil 3D",
          "Kenntnis lokaler Baunormen und -vorschriften",
          "Ausgeprägte technische und analytische Fähigkeiten",
          "Gültiger Führerschein",
        ],
        benefits: [
          "Wettbewerbsfähiges Gehalt",
          "Wohnungszuschuss",
          "Krankenversicherung",
          "Jahresurlaub",
          "Weiterbildungsmöglichkeiten",
        ],
      },
      nl: {
        title: "Civiel Ingenieur",
        description:
          "Ontwerpen en begeleiden van civiele werken waaronder grondwerk, drainage en infrastructuur voor bouwprojecten.",
        responsibilities: [
          "Ontwerpen van civiele werken en infrastructuur",
          "Opstellen van technische tekeningen en specificaties",
          "Toezicht houden op de uitvoering van civiele werken",
          "Zorgen voor naleving van ontwerpstandaarden",
          "Coördineren met andere technische disciplines",
          "Technische ondersteuning bieden tijdens de bouw",
        ],
        requirements: [
          "Bachelordiploma in Civiele Techniek",
          "3+ jaar ervaring in civiele techniek",
          "Vaardigheid met AutoCAD en Civil 3D",
          "Kennis van lokale bouwvoorschriften en -normen",
          "Sterke technische en analytische vaardigheden",
          "Geldig rijbewijs",
        ],
        benefits: [
          "Competitief salaris",
          "Huisvestingsvergoeding",
          "Ziektekostenverzekering",
          "Jaarlijks verlof",
          "Opleidingsmogelijkheden",
        ],
      },
      tr: {
        title: "İnşaat Mühendisi",
        description:
          "İnşaat projeleri için hafriyat, drenaj ve altyapı dahil olmak üzere inşaat mühendisliği işlerini tasarlamak ve denetlemek.",
        responsibilities: [
          "İnşaat mühendisliği işleri ve altyapı tasarlamak",
          "Teknik çizimler ve şartnameler hazırlamak",
          "İnşaat işlerinin yapımını denetlemek",
          "Tasarım standartlarına uyumu sağlamak",
          "Diğer mühendislik disiplinleri ile koordinasyon sağlamak",
          "İnşaat sürecinde teknik destek sağlamak",
        ],
        requirements: [
          "İnşaat Mühendisliği alanında lisans derecesi",
          "3+ yıl inşaat mühendisliği deneyimi",
          "AutoCAD ve Civil 3D'de yetkinlik",
          "Yerel yapı yönetmelikleri ve standartları bilgisi",
          "Güçlü teknik ve analitik beceriler",
          "Geçerli sürücü belgesi",
        ],
        benefits: [
          "Rekabetçi maaş",
          "Konut ödeneği",
          "Sağlık sigortası",
          "Yıllık izin hakları",
          "Eğitim fırsatları",
        ],
      },
      ku: {
        title: "Endeziyarê Sivîl",
        description:
          "Sêwirandin û çavdêriya karên endezyariya sivîl ên di nav de xaka-xebitandin, avdêrî û binesazî ji bo projeyên avahîsaziyê.",
        responsibilities: [
          "Sêwirandina karên endezyariya sivîl û binesaziyê",
          "Amadekirina nexşeyên teknîkî û taybetmendiyan",
          "Çavdêriya avahîsaziya karên sivîl",
          "Dabînkirina lihevhatina bi standardên sêwirandinê",
          "Hevrêzî bi dîsîplînên din ên endezyariyê re",
          "Piştgiriya teknîkî di dema avahîsaziyê de pêşkêşkirin",
        ],
        requirements: [
          "Bawernameya lîsansê di Endezyariya Sivîl de",
          "3+ sal ezmûn di endezyariya sivîl de",
          "Pisporî di AutoCAD û Civil 3D de",
          "Zanîna qanûn û standardên avahîsaziyê yên herêmî",
          "Jêhatîbûnên teknîkî û analîtîk ên bihêz",
          "Ehliyeta ajotinê ya derbasdar",
        ],
        benefits: [
          "Mûçeya pêşbazî",
          "Alîkariya xanî",
          "Sîgorteya tenduristiyê",
          "Betlaneya salane",
          "Derfetên rahêneriyê",
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // JOB-008 — HR Business Partner
  // ─────────────────────────────────────────────────────────────
  {
    id: "job-008",
    department: "hr",
    location: "germany",
    type: "fullTime",
    experience: "5+ years",
    posted: "2024-01-30",
    featured: false,
    i18n: {
      fr: {
        title: "Business Partner RH",
        description:
          "Travailler en partenariat avec les leaders métiers pour définir et déployer des stratégies RH alignées sur les objectifs de l'organisation et renforcer l'engagement des collaborateurs.",
        responsibilities: [
          "Conseiller les équipes métiers sur la stratégie RH",
          "Piloter les initiatives de recrutement et de rétention des talents",
          "Gérer les processus de performance et d'évaluation",
          "Animer les programmes d'engagement collaborateurs",
          "Traiter les sujets de relations sociales et individuelles",
          "Accompagner les projets de transformation et de changement",
        ],
        requirements: [
          "Diplôme en ressources humaines ou domaine connexe",
          "5+ ans d'expérience RH, idéalement dans la construction",
          "Certification CIPD ou SHRM appréciée",
          "Bonne connaissance du droit du travail (mention UAE à corriger si besoin)",
          "Excellentes compétences relationnelles et de communication",
          "Expérience sur des systèmes SIRH (HRIS)",
        ],
        benefits: [
          "Rémunération compétitive",
          "Avantages santé et bien-être",
          "Soutien au développement professionnel",
          "Initiatives d'équilibre vie pro/vie perso",
          "Opportunités d'évolution",
        ],
      },
      en: {
        title: "HR Business Partner",
        description:
          "Partner with business leaders to develop and implement HR strategies that support organizational goals and enhance employee engagement.",
        responsibilities: [
          "Partner with business units on HR strategy",
          "Drive talent acquisition and retention initiatives",
          "Manage performance management processes",
          "Lead employee engagement programs",
          "Handle employee relations issues",
          "Support organizational change initiatives",
        ],
        requirements: [
          "Bachelor's degree in Human Resources or related field",
          "5+ years of HR experience, preferably in construction",
          "CIPD or SHRM certification preferred",
          "Strong knowledge of UAE labor laws",
          "Excellent interpersonal and communication skills",
          "Experience with HRIS systems",
        ],
        benefits: [
          "Competitive compensation",
          "Health and wellness benefits",
          "Professional development support",
          "Work-life balance initiatives",
          "Career growth opportunities",
        ],
      },
      it: {
        title: "HR Business Partner",
        description:
          "Collaborare con i leader aziendali per sviluppare e implementare strategie HR che supportino gli obiettivi organizzativi e migliorino il coinvolgimento dei dipendenti.",
        responsibilities: [
          "Collaborare con le unità aziendali sulla strategia HR",
          "Guidare le iniziative di acquisizione e fidelizzazione dei talenti",
          "Gestire i processi di gestione delle prestazioni",
          "Guidare i programmi di coinvolgimento dei dipendenti",
          "Gestire le questioni relative alle relazioni con i dipendenti",
          "Supportare le iniziative di cambiamento organizzativo",
        ],
        requirements: [
          "Laurea in Risorse Umane o settore correlato",
          "5+ anni di esperienza HR, preferibilmente nel settore costruzioni",
          "Certificazione CIPD o SHRM preferenziale",
          "Solida conoscenza della legislazione del lavoro",
          "Eccellenti capacità interpersonali e comunicative",
          "Esperienza con sistemi HRIS",
        ],
        benefits: [
          "Retribuzione competitiva",
          "Benefit per salute e benessere",
          "Supporto allo sviluppo professionale",
          "Iniziative per l'equilibrio vita-lavoro",
          "Opportunità di crescita professionale",
        ],
      },
      de: {
        title: "HR Business Partner",
        description:
          "Partnerschaftliche Zusammenarbeit mit Führungskräften zur Entwicklung und Umsetzung von HR-Strategien, die die Unternehmensziele unterstützen und das Mitarbeiterengagement fördern.",
        responsibilities: [
          "Strategische HR-Beratung der Geschäftsbereiche",
          "Vorantreiben von Initiativen zur Talentgewinnung und -bindung",
          "Steuerung der Leistungsmanagementprozesse",
          "Leitung von Programmen zur Mitarbeiterbindung",
          "Bearbeitung von Mitarbeiterbeziehungen und -anliegen",
          "Unterstützung von organisatorischen Veränderungsinitiativen",
        ],
        requirements: [
          "Abschluss in Personalmanagement oder verwandtem Bereich",
          "5+ Jahre HR-Erfahrung, vorzugsweise im Bauwesen",
          "CIPD- oder SHRM-Zertifizierung bevorzugt",
          "Fundierte Kenntnisse des lokalen Arbeitsrechts",
          "Hervorragende zwischenmenschliche und kommunikative Fähigkeiten",
          "Erfahrung mit HRIS-Systemen",
        ],
        benefits: [
          "Wettbewerbsfähige Vergütung",
          "Gesundheits- und Wellnessleistungen",
          "Unterstützung bei der beruflichen Weiterentwicklung",
          "Initiativen zur Work-Life-Balance",
          "Karrieremöglichkeiten",
        ],
      },
      nl: {
        title: "HR Business Partner",
        description:
          "Samenwerken met bedrijfsleiders om HR-strategieën te ontwikkelen en te implementeren die organisatiedoelen ondersteunen en de betrokkenheid van medewerkers vergroten.",
        responsibilities: [
          "Samenwerken met bedrijfsonderdelen op het gebied van HR-strategie",
          "Initiatieven voor talentwerving en -behoud aansturen",
          "Prestatiebeheerprocessen managen",
          "Programma's voor medewerkerbetrokkenheid leiden",
          "Omgaan met vraagstukken rondom medewerkersrelaties",
          "Ondersteunen van organisatorische veranderingsinitiatieven",
        ],
        requirements: [
          "Bachelor- of masterdiploma in Human Resources of verwant vakgebied",
          "5+ jaar HR-ervaring, bij voorkeur in de bouw",
          "CIPD- of SHRM-certificering heeft de voorkeur",
          "Gedegen kennis van lokale arbeidswetgeving",
          "Uitstekende interpersoonlijke en communicatievaardigheden",
          "Ervaring met HRIS-systemen",
        ],
        benefits: [
          "Competitieve vergoeding",
          "Gezondheids- en welzijnsvoordelen",
          "Ondersteuning bij professionele ontwikkeling",
          "Initiatieven voor een goede werk-privébalans",
          "Doorgroeimogelijkheden",
        ],
      },
      tr: {
        title: "İK İş Ortağı (HR Business Partner)",
        description:
          "İş liderleri ile iş birliği yaparak kurumsal hedefleri destekleyen ve çalışan bağlılığını artıran İK stratejileri geliştirmek ve uygulamak.",
        responsibilities: [
          "İK stratejisi konusunda iş birimleri ile ortaklık kurmak",
          "Yetenek kazanımı ve elde tutma girişimlerini yönlendirmek",
          "Performans yönetimi süreçlerini yönetmek",
          "Çalışan bağlılığı programlarına liderlik etmek",
          "Çalışan ilişkileri konularını ele almak",
          "Kurumsal değişim girişimlerini desteklemek",
        ],
        requirements: [
          "İnsan Kaynakları veya ilgili alanda lisans derecesi",
          "İnşaat sektöründe tercihen 5+ yıl İK deneyimi",
          "CIPD veya SHRM sertifikası tercih sebebidir",
          "Yerel iş hukuku konusunda güçlü bilgi",
          "Mükemmel kişilerarası ve iletişim becerileri",
          "HRIS sistemleri deneyimi",
        ],
        benefits: [
          "Rekabetçi ücretlendirme",
          "Sağlık ve refah hakları",
          "Mesleki gelişim desteği",
          "İş-yaşam dengesi girişimleri",
          "Kariyer büyüme fırsatları",
        ],
      },
      ku: {
        title: "Hevkarê Karsaziyê yê ÇM (HR Business Partner)",
        description:
          "Hevkarî bi serokên karsaziyê re ji bo pêşxistin û bicîhkirina stratejiyên Çavkaniyên Mirovan ku armancên rêxistinê piştgirî dikin û tevlêbûna karmendan zêde dikin.",
        responsibilities: [
          "Hevkarî bi yekîneyên karsaziyê re li ser stratejiya ÇM",
          "Rêvebirina destpêşxistinên bidestxistina jêhatîyan û parastina wan",
          "Birêvebirina pêvajoyên rêvebirina performansê",
          "Serokatiya bernameyên tevlêbûna karmendan",
          "Çareserkirina pirsgirêkên têkiliyên karmendan",
          "Piştgiriya destpêşxistinên guheztina rêxistinî",
        ],
        requirements: [
          "Bawernameya lîsansê di Çavkaniyên Mirovan an qada têkildar de",
          "5+ sal ezmûna ÇM, bi tercîh di avahîsaziyê de",
          "Sertîfîkaya CIPD an SHRM tercîh e",
          "Zanîna bihêz a qanûnên karê yên herêmî",
          "Jêhatîbûnên navkesane û ragihandinê yên hêja",
          "Ezmûn bi pergalên HRIS re",
        ],
        benefits: [
          "Berdêla pêşbazî",
          "Berjewendiyên tenduristî û başbûnê",
          "Piştgiriya pêşveçûna pîşeyî",
          "Destpêşxistinên hevsengiya kar-jiyanê",
          "Derfetên mezinbûna kariyerê",
        ],
      },
    },
  },
];

export const departments = [
  { key: "all", slug: "" },
  { key: "engineering", slug: "engineering" },
  { key: "projectManagement", slug: "project-management" },
  { key: "architecture", slug: "architecture" },
  { key: "operations", slug: "operations" },
  { key: "finance", slug: "finance" },
  { key: "hr", slug: "hr" },
];

export const locations = [
  { key: "all", slug: "" },
  { key: "dubai", slug: "dubai" },
  { key: "riyadh", slug: "riyadh" },
  { key: "cairo", slug: "cairo" },
  { key: "london", slug: "london" },
  { key: "brussels", slug: "brussels" },
  { key: "germany", slug: "germany" },
] as const;

export function getJobById(id: string): JobListing | undefined {
  return jobListings.find((job) => job.id === id);
}

export function getFeaturedJobs(): JobListing[] {
  return jobListings.filter((job) => job.featured);
}