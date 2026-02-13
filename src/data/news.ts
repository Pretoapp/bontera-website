// src/data/news.ts
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - STATIC NEWS DATA
// Static news articles with full internationalization support
// ═══════════════════════════════════════════════════════════════════════════

export type NewsCategory = "companyNews" | "projects" | "industry" | "sustainability" | "awards" | "events";

export interface NewsArticle {
  id: string;
  slug: string;
  category: NewsCategory;
  date: string;
  readTime: number;
  image: string;
  featured: boolean;
  title: {
    de: string;
    en: string;
    fr: string;
    nl: string;
    it: string;
    ku: string;
    tr: string;
  };
  excerpt: {
    de: string;
    en: string;
    fr: string;
    nl: string;
    it: string;
    ku: string;
    tr: string;
  };
}

export const newsArticles: NewsArticle[] = [

    
  {
    id: "news-002",
    slug: "sustainable-construction-trends-2024",
    category: "industry",
    date: "2024-01-10",
    readTime: 8,
    image: "/images/news/sustainable-trends.jpg",
    featured: true,
    title: {
      de: "Top 10 nachhaltige Bautrends, die 2024 prägen",
      en: "Top 10 Sustainable Construction Trends Shaping 2024",
      fr: "Top 10 des tendances de construction durable qui façonnent 2024",
      nl: "Top 10 duurzame bouwtrends die 2024 vormgeven",
      it: "Top 10 tendenze di costruzione sostenibile che plasmano il 2024",
      ku: "10 Trendên Avahîsaziya Berdewam ên ku 2024 Dişêwînin",
      tr: "2024'ü Şekillendiren En İyi 10 Sürdürülebilir İnşaat Trendi",
    },
    excerpt: {
      de: "Von kohlenstoffneutralen Materialien bis hin zu KI-gestütztem Gebäudemanagement - entdecken Sie die Innovationen, die die Bauweise für eine nachhaltigere Zukunft transformieren.",
      en: "From carbon-neutral materials to AI-powered building management, explore the innovations transforming how we build for a more sustainable future.",
      fr: "Des matériaux neutres en carbone à la gestion des bâtiments par IA, découvrez les innovations qui transforment la construction pour un avenir plus durable.",
      nl: "Van koolstofneutrale materialen tot AI-aangedreven gebouwbeheer, ontdek de innovaties die bouwen voor een duurzamere toekomst transformeren.",
      it: "Dai materiali a impatto zero alla gestione degli edifici con IA, scopri le innovazioni che trasformano il modo di costruire per un futuro più sostenibile.",
      ku: "Ji materyalên karbon-neutral heta rêveberiya avahiyê bi AI-yê, nûjeniyên ku çawaniya ku em ava dikin ji bo pêşerojek berdewamtir veguherînin keşf bikin.",
      tr: "Karbon-nötr malzemelerden yapay zeka destekli bina yönetimine, daha sürdürülebilir bir gelecek için inşaat yöntemlerini dönüştüren yenilikleri keşfedin.",
    },
  },
  {
    id: "news-003",
    slug: "marina-tower-leed-platinum",
    category: "projects",
    date: "2024-01-05",
    readTime: 4,
    image: "/images/news/marina-tower-leed.jpg",
    featured: true,
    title: {
      de: "Marina Tower erhält LEED Platinum-Zertifizierung",
      en: "Marina Tower Achieves LEED Platinum Certification",
      fr: "Marina Tower obtient la certification LEED Platinum",
      nl: "Marina Tower behaalt LEED Platinum-certificering",
      it: "Marina Tower ottiene la certificazione LEED Platinum",
      ku: "Birca Marina sertîfîkaya LEED Platinum distîne",
      tr: "Marina Tower LEED Platinum Sertifikası Aldı",
    },
    excerpt: {
      de: "Unser Flaggschiff-Mixed-Use-Projekt hat die höchste Nachhaltigkeitsbewertung erhalten und demonstriert Bonteras Engagement für umweltverantwortliches Bauen.",
      en: "Our flagship mixed-use development has received the highest sustainability rating, showcasing Bontera's commitment to environmentally responsible construction.",
      fr: "Notre projet phare mixte a obtenu la plus haute certification durable, illustrant l'engagement de Bontera pour une construction responsable.",
      nl: "Onze vlaggenschip-ontwikkeling met gemengd gebruik heeft de hoogste duurzaamheidsbeoordeling ontvangen, wat Bontera's toewijding aan milieuvriendelijk bouwen toont.",
      it: "Il nostro progetto misto di punta ha ricevuto la più alta valutazione di sostenibilità, dimostrando l'impegno di Bontera per l'edilizia responsabile.",
      ku: "Pêşveçûna me ya sereke ya karanîna tevlihev pileya herî bilind a berdewamiyê wergirt, sozdariya Bontera ji bo avahîsaziya berpirsiyar destnîşan dike.",
      tr: "Amiral gemimiz olan karma kullanımlı geliştirmemiz en yüksek sürdürülebilirlik derecesini aldı ve Bontera'nın çevreye duyarlı inşaata bağlılığını sergiledi.",
    },
  },
 
  
 
  {
    id: "news-006",
    slug: "global-infrastructure-summit-2024",
    category: "events",
    date: "2023-12-01",
    readTime: 6,
    image: "/images/news/infrastructure-summit.jpg",
    featured: false,
    title: {
      de: "Erkenntnisse vom Global Infrastructure Summit 2024",
      en: "Key Takeaways from the Global Infrastructure Summit 2024",
      fr: "Points clés du Global Infrastructure Summit 2024",
      nl: "Belangrijkste inzichten van de Global Infrastructure Summit 2024",
      it: "Punti chiave dal Global Infrastructure Summit 2024",
      ku: "Encamên Sereke ji Civîna Binesaziya Cîhanî 2024",
      tr: "Global Altyapı Zirvesi 2024'ün Önemli Çıkarımları",
    },
    excerpt: {
      de: "Unser Team teilt Einblicke von der führenden Branchenveranstaltung zu aufkommenden Technologien, Investitionstrends und Kooperationsmöglichkeiten.",
      en: "Our team shares insights from the industry's premier event, covering emerging technologies, investment trends, and collaborative opportunities.",
      fr: "Notre équipe partage ses enseignements sur les technologies émergentes, les tendances d'investissement et les opportunités de collaboration.",
      nl: "Ons team deelt inzichten over opkomende technologieën, investeringstrends en samenwerkingsmogelijkheden.",
      it: "Il nostro team condivide approfondimenti sulle tecnologie emergenti, le tendenze di investimento e le opportunità di collaborazione.",
      ku: "Tîmê me têbîniyên xwe li ser teknolojiyên nûjen, trendên veberhênanê û derfetên hevkariyê parve dike.",
      tr: "Ekibimiz gelişen teknolojiler, yatırım trendleri ve işbirliği fırsatları hakkında görüşlerini paylaşıyor.",
    },
  },
];

// Helper functions
export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter((article) => article.featured);
}

export function getLatestNews(count: number = 3): NewsArticle[] {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getNewsByCategory(category: NewsCategory): NewsArticle[] {
  return newsArticles.filter((article) => article.category === category);
}

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}
