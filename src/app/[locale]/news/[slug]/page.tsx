// src/app/[locale]/news/[slug]/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// BONTERA - NEWS ARTICLE DETAIL PAGE
// Individual news article with full content and related articles
// ═══════════════════════════════════════════════════════════════════════════

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { newsArticles, getNewsArticleBySlug, getLatestNews } from "@/data/news";

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

type LocaleKey = "de" | "en" | "fr" | "nl" | "it" | "ku" | "tr";

/* ═══════════════════════════════════════════════════════════════════════════
   STATIC PARAMS - Generate all article pages at build time
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateStaticParams() {
  const locales = ["de", "en", "fr", "nl", "it", "ku", "tr"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const article of newsArticles) {
      params.push({ locale, slug: article.slug });
    }
  }

  return params;
}

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = locale as LocaleKey;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title[loc] || article.title.en} | Bontera News`,
    description: article.excerpt[loc] || article.excerpt.en,
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default async function NewsArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const loc = locale as LocaleKey;
  const t = await getTranslations({ locale, namespace: "newsPage" });
  const isRTL = locale === "ku";

  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // If not enough related, get latest
  const additionalArticles = relatedArticles.length < 3
    ? getLatestNews(3 - relatedArticles.length).filter((a) => a.id !== article.id && !relatedArticles.find((r) => r.id === a.id))
    : [];

  const allRelated = [...relatedArticles, ...additionalArticles].slice(0, 3);

  return (
    <main className="bg-bontera-grey-50" dir={isRTL ? "rtl" : "ltr"}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={article.image || "/images/placeholder.jpg"}
            alt={article.title[loc] || article.title.en}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900 via-bontera-navy-900/60 to-bontera-navy-900/30" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, white 1px, transparent 1px),
                linear-gradient(white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-bontera-grey-400">
                <li>
                  <Link href={`/${locale}`} className="hover:text-white transition-colors">
                    {t("breadcrumb.home")}
                  </Link>
                </li>
                <li>
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href={`/${locale}/news`} className="hover:text-white transition-colors">
                    {t("breadcrumb.news")}
                  </Link>
                </li>
                <li>
                  <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium truncate max-w-[200px]">
                  {article.title[loc] || article.title.en}
                </li>
              </ol>
            </nav>

            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-gray-500 text-white text-xs font-semibold uppercase tracking-wider">
                {t(`categories.${article.category}`)}
              </span>
              <span className="text-bontera-grey-300 text-sm">
                {new Date(article.date).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-bontera-grey-400 text-sm flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("minRead", { minutes: article.readTime })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.1] tracking-tight max-w-4xl">
              {article.title[loc] || article.title.en}
            </h1>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ARTICLE CONTENT
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Lead Paragraph */}
              <p className="text-xl lg:text-2xl text-bontera-grey-700 leading-relaxed mb-8 font-medium">
                {article.excerpt[loc] || article.excerpt.en}
              </p>

              {/* Article Body - Generated content based on article type */}
              <div className="prose prose-lg max-w-none prose-headings:text-bontera-grey-900 prose-p:text-bontera-grey-600 prose-a:text-bontera-navy-600 prose-strong:text-bontera-grey-900">
                {article.category === "companyNews" && (
                  <>
                    <p>
                      {locale === "de" ? "Dies markiert einen bedeutenden Meilenstein in der Geschichte von Bontera und unterstreicht unser Engagement für Exzellenz und Innovation in der Bauindustrie." :
                       locale === "fr" ? "Cela marque une étape importante dans l'histoire de Bontera, soulignant notre engagement envers l'excellence et l'innovation dans l'industrie de la construction." :
                       locale === "tr" ? "Bu, Bontera'nın tarihinde önemli bir dönüm noktasını işaret ediyor ve inşaat sektöründe mükemmellik ve yeniliğe olan bağlılığımızı vurguluyor." :
                       "This marks a significant milestone in Bontera's history, underscoring our commitment to excellence and innovation in the construction industry."}
                    </p>
                    <h2>
                      {locale === "de" ? "Projektübersicht" :
                       locale === "fr" ? "Aperçu du Projet" :
                       locale === "tr" ? "Proje Genel Bakış" :
                       "Project Overview"}
                    </h2>
                    <p>
                      {locale === "de" ? "Das Projekt umfasst den Bau von hochmodernen Infrastrukturanlagen, die den neuesten Nachhaltigkeitsstandards entsprechen. Unser Team von über 500 Experten wird in den kommenden Jahren an diesem transformativen Projekt arbeiten." :
                       locale === "fr" ? "Le projet comprend la construction d'installations d'infrastructure de pointe répondant aux dernières normes de durabilité. Notre équipe de plus de 500 experts travaillera sur ce projet transformateur dans les années à venir." :
                       locale === "tr" ? "Proje, en son sürdürülebilirlik standartlarını karşılayan son teknoloji altyapı tesislerinin inşasını kapsamaktadır. 500'den fazla uzmandan oluşan ekibimiz önümüzdeki yıllarda bu dönüştürücü proje üzerinde çalışacak." :
                       "The project encompasses the construction of state-of-the-art infrastructure facilities meeting the latest sustainability standards. Our team of over 500 experts will be working on this transformative project over the coming years."}
                    </p>
                    <h2>
                      {locale === "de" ? "Unser Engagement" :
                       locale === "fr" ? "Notre Engagement" :
                       locale === "tr" ? "Taahhüdümüz" :
                       "Our Commitment"}
                    </h2>
                    <p>
                      {locale === "de" ? "Bei Bontera sind wir bestrebt, Projekte zu liefern, die nicht nur die Erwartungen unserer Kunden erfüllen, sondern auch positiv zu den Gemeinschaften beitragen, die wir bedienen. Dieses Projekt ist ein Zeugnis unserer Vision, nachhaltige und innovative Lösungen zu schaffen." :
                       locale === "fr" ? "Chez Bontera, nous nous engageons à livrer des projets qui non seulement répondent aux attentes de nos clients, mais contribuent également positivement aux communautés que nous servons. Ce projet témoigne de notre vision de créer des solutions durables et innovantes." :
                       locale === "tr" ? "Bontera olarak, sadece müşterilerimizin beklentilerini karşılamakla kalmayıp aynı zamanda hizmet ettiğimiz topluluklara olumlu katkıda bulunan projeler sunmaya kararlıyız. Bu proje, sürdürülebilir ve yenilikçi çözümler yaratma vizyonumuzun bir kanıtıdır." :
                       "At Bontera, we are committed to delivering projects that not only meet our clients' expectations but also contribute positively to the communities we serve. This project is a testament to our vision of creating sustainable and innovative solutions."}
                    </p>
                  </>
                )}

                {article.category === "industry" && (
                  <>
                    <p>
                      {locale === "de" ? "Die Bauindustrie durchläuft einen beispiellosen Wandel, angetrieben von technologischen Fortschritten und wachsendem Umweltbewusstsein." :
                       locale === "fr" ? "L'industrie de la construction traverse une transformation sans précédent, portée par les avancées technologiques et une conscience environnementale croissante." :
                       locale === "tr" ? "İnşaat sektörü, teknolojik gelişmeler ve artan çevre bilinci tarafından yönlendirilen benzeri görülmemiş bir dönüşüm geçiriyor." :
                       "The construction industry is undergoing an unprecedented transformation, driven by technological advancements and growing environmental consciousness."}
                    </p>
                    <h2>
                      {locale === "de" ? "Wichtige Trends" :
                       locale === "fr" ? "Tendances Clés" :
                       locale === "tr" ? "Önemli Trendler" :
                       "Key Trends"}
                    </h2>
                    <p>
                      {locale === "de" ? "Von der Integration von KI in Projektmanagement bis hin zur Verwendung recycelter Materialien verändern diese Trends die Art und Weise, wie wir bauen und gestalten." :
                       locale === "fr" ? "De l'intégration de l'IA dans la gestion de projet à l'utilisation de matériaux recyclés, ces tendances transforment notre façon de construire et de concevoir." :
                       locale === "tr" ? "Proje yönetiminde yapay zeka entegrasyonundan geri dönüştürülmüş malzemelerin kullanımına kadar, bu trendler inşa ve tasarım şeklimizi dönüştürüyor." :
                       "From AI integration in project management to the use of recycled materials, these trends are reshaping how we build and design."}
                    </p>
                    <h2>
                      {locale === "de" ? "Die Zukunft des Bauens" :
                       locale === "fr" ? "L'Avenir de la Construction" :
                       locale === "tr" ? "İnşaatın Geleceği" :
                       "The Future of Construction"}
                    </h2>
                    <p>
                      {locale === "de" ? "Mit Blick auf die Zukunft erwarten wir noch größere Innovationen in der Branche. Unternehmen, die diese Trends frühzeitig übernehmen, werden gut positioniert sein, um in der sich entwickelnden Marktlandschaft zu führen." :
                       locale === "fr" ? "En regardant vers l'avenir, nous anticipons des innovations encore plus importantes dans l'industrie. Les entreprises qui adoptent ces tendances tôt seront bien positionnées pour diriger dans le paysage du marché en évolution." :
                       locale === "tr" ? "Geleceğe baktığımızda, sektörde daha da büyük yeniliklerin olmasını bekliyoruz. Bu trendleri erken benimseyen şirketler, gelişen pazar ortamında liderlik etmek için iyi konumlanmış olacaklar." :
                       "Looking ahead, we anticipate even greater innovations in the industry. Companies that adopt these trends early will be well-positioned to lead in the evolving market landscape."}
                    </p>
                  </>
                )}

                {article.category === "projects" && (
                  <>
                    <p>
                      {locale === "de" ? "Dieses Projekt repräsentiert den Höhepunkt jahrelanger Planung, Ingenieurskunst und Handwerkskunst. Es steht als Zeugnis für das, was möglich ist, wenn Vision auf Ausführung trifft." :
                       locale === "fr" ? "Ce projet représente l'aboutissement d'années de planification, d'ingénierie et d'artisanat. Il témoigne de ce qui est possible lorsque la vision rencontre l'exécution." :
                       locale === "tr" ? "Bu proje, yıllarca süren planlama, mühendislik ve işçiliğin doruk noktasını temsil ediyor. Vizyon ile uygulamanın buluştuğunda nelerin mümkün olduğunun bir kanıtı olarak duruyor." :
                       "This project represents the culmination of years of planning, engineering, and craftsmanship. It stands as a testament to what is possible when vision meets execution."}
                    </p>
                    <h2>
                      {locale === "de" ? "Nachhaltige Innovation" :
                       locale === "fr" ? "Innovation Durable" :
                       locale === "tr" ? "Sürdürülebilir İnovasyon" :
                       "Sustainable Innovation"}
                    </h2>
                    <p>
                      {locale === "de" ? "Das Projekt integriert modernste nachhaltige Technologien, darunter Solarpaneele, Regenwassernutzung und energieeffiziente HVAC-Systeme. Diese Merkmale reduzieren nicht nur die Umweltauswirkungen, sondern senken auch die Betriebskosten für die Bewohner." :
                       locale === "fr" ? "Le projet intègre des technologies durables de pointe, notamment des panneaux solaires, la récupération des eaux de pluie et des systèmes CVC écoénergétiques. Ces caractéristiques réduisent non seulement l'impact environnemental, mais diminuent également les coûts d'exploitation pour les occupants." :
                       locale === "tr" ? "Proje, güneş panelleri, yağmur suyu hasadı ve enerji verimli HVAC sistemleri dahil olmak üzere son teknoloji sürdürülebilir teknolojileri entegre ediyor. Bu özellikler sadece çevresel etkiyi azaltmakla kalmıyor, aynı zamanda sakinler için işletme maliyetlerini de düşürüyor." :
                       "The project integrates cutting-edge sustainable technologies, including solar panels, rainwater harvesting, and energy-efficient HVAC systems. These features not only reduce environmental impact but also lower operational costs for occupants."}
                    </p>
                    <h2>
                      {locale === "de" ? "Anerkennung & Zertifizierung" :
                       locale === "fr" ? "Reconnaissance & Certification" :
                       locale === "tr" ? "Tanınma & Sertifikasyon" :
                       "Recognition & Certification"}
                    </h2>
                    <p>
                      {locale === "de" ? "Die Erreichung dieser renommierten Zertifizierung bestätigt unser Engagement für höchste Nachhaltigkeitsstandards. Es spiegelt die harte Arbeit unseres gesamten Teams wider, von Architekten und Ingenieuren bis hin zu Bauspezialisten." :
                       locale === "fr" ? "L'obtention de cette certification prestigieuse valide notre engagement envers les plus hautes normes de durabilité. Elle reflète le travail acharné de toute notre équipe, des architectes et ingénieurs aux spécialistes de la construction." :
                       locale === "tr" ? "Bu prestijli sertifikayı almak, en yüksek sürdürülebilirlik standartlarına olan bağlılığımızı doğruluyor. Mimarlardan ve mühendislerden inşaat uzmanlarına kadar tüm ekibimizin sıkı çalışmasını yansıtıyor." :
                       "Achieving this prestigious certification validates our commitment to the highest sustainability standards. It reflects the hard work of our entire team, from architects and engineers to construction specialists."}
                    </p>
                  </>
                )}

                {(article.category === "awards" || article.category === "events" || article.category === "sustainability") && (
                  <>
                    <p>
                      {locale === "de" ? "Diese Entwicklung unterstreicht Bonteras anhaltendes Engagement für Exzellenz und Innovation in allem, was wir tun." :
                       locale === "fr" ? "Ce développement souligne l'engagement continu de Bontera envers l'excellence et l'innovation dans tout ce que nous faisons." :
                       locale === "tr" ? "Bu gelişme, Bontera'nın yaptığımız her şeyde mükemmellik ve yeniliğe olan süregelen bağlılığının altını çiziyor." :
                       "This development underscores Bontera's continued commitment to excellence and innovation in everything we do."}
                    </p>
                    <h2>
                      {locale === "de" ? "Unser Ansatz" :
                       locale === "fr" ? "Notre Approche" :
                       locale === "tr" ? "Yaklaşımımız" :
                       "Our Approach"}
                    </h2>
                    <p>
                      {locale === "de" ? "Bei Bontera glauben wir daran, Grenzen zu verschieben und Industriestandards herauszufordern. Unser Ansatz kombiniert bewährte Methoden mit innovativen Techniken, um außergewöhnliche Ergebnisse zu liefern." :
                       locale === "fr" ? "Chez Bontera, nous croyons en repoussant les limites et en défiant les normes de l'industrie. Notre approche combine des méthodes éprouvées avec des techniques innovantes pour obtenir des résultats exceptionnels." :
                       locale === "tr" ? "Bontera olarak sınırları zorlamaya ve sektör standartlarını sorgulamaya inanıyoruz. Yaklaşımımız, olağanüstü sonuçlar elde etmek için kanıtlanmış yöntemleri yenilikçi tekniklerle birleştiriyor." :
                       "At Bontera, we believe in pushing boundaries and challenging industry norms. Our approach combines proven methods with innovative techniques to deliver exceptional results."}
                    </p>
                    <h2>
                      {locale === "de" ? "Blick nach vorn" :
                       locale === "fr" ? "Regard vers l'Avenir" :
                       locale === "tr" ? "İleriye Bakış" :
                       "Looking Forward"}
                    </h2>
                    <p>
                      {locale === "de" ? "Während wir weiter wachsen und uns weiterentwickeln, bleibt unser Fokus darauf, den Gemeinschaften, die wir bedienen, einen Mehrwert zu bieten und gleichzeitig nachhaltige Praktiken in der gesamten Branche voranzutreiben." :
                       locale === "fr" ? "Alors que nous continuons à croître et à évoluer, notre objectif reste de créer de la valeur pour les communautés que nous servons tout en faisant progresser les pratiques durables dans l'ensemble de l'industrie." :
                       locale === "tr" ? "Büyümeye ve gelişmeye devam ederken, odağımız hizmet ettiğimiz topluluklara değer sunmak ve aynı zamanda tüm sektörde sürdürülebilir uygulamaları ilerletmek olmaya devam ediyor." :
                       "As we continue to grow and evolve, our focus remains on delivering value to the communities we serve while advancing sustainable practices across the industry."}
                    </p>
                  </>
                )}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-bontera-grey-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-bontera-grey-900">
                      {locale === "de" ? "Teilen:" :
                       locale === "fr" ? "Partager:" :
                       locale === "tr" ? "Paylaş:" :
                       "Share:"}
                    </span>
                    <div className="flex items-center gap-2">
                      {["linkedin", "twitter", "facebook"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="w-10 h-10 flex items-center justify-center bg-bontera-grey-100 text-bontera-grey-600 hover:bg-bontera-navy-600 hover:text-white transition-colors"
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            {social === "linkedin" && (
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            )}
                            {social === "twitter" && (
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            )}
                            {social === "facebook" && (
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            )}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/${locale}/news`}
                    className="inline-flex items-center gap-2 text-bontera-navy-600 font-semibold hover:text-bontera-navy-700 transition-colors"
                  >
                    <svg className={`w-5 h-5 ${isRTL ? "" : "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    {locale === "de" ? "Zurück zu Neuigkeiten" :
                     locale === "fr" ? "Retour aux actualités" :
                     locale === "tr" ? "Haberlere Dön" :
                     "Back to News"}
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-8 space-y-8">
                {/* Newsletter CTA */}
                <div className="bg-bontera-navy-900 p-8 text-white">
                  <h3 className="text-xl font-semibold mb-4">
                    {t("newsletter.title")}
                  </h3>
                  <p className="text-bontera-grey-300 text-sm mb-6">
                    {t("newsletter.description")}
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder={t("newsletter.placeholder")}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold uppercase tracking-wider text-sm transition-colors"
                    >
                      {t("newsletter.subscribe")}
                    </button>
                  </form>
                </div>

                {/* Contact CTA */}
                <div className="bg-bontera-grey-100 p-8 border border-bontera-grey-200">
                  <h3 className="text-xl font-semibold text-bontera-grey-900 mb-4">
                    {locale === "de" ? "Haben Sie Fragen?" :
                     locale === "fr" ? "Vous avez des questions?" :
                     locale === "tr" ? "Sorularınız mı var?" :
                     "Have Questions?"}
                  </h3>
                  <p className="text-bontera-grey-600 text-sm mb-6">
                    {locale === "de" ? "Unser Team steht bereit, Ihre Anfragen zu beantworten." :
                     locale === "fr" ? "Notre équipe est prête à répondre à vos demandes." :
                     locale === "tr" ? "Ekibimiz sorularınızı yanıtlamak için hazır." :
                     "Our team is ready to answer your inquiries."}
                  </p>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 text-bontera-navy-600 font-semibold hover:text-bontera-navy-700 transition-colors"
                  >
                    {locale === "de" ? "Kontaktieren Sie uns" :
                     locale === "fr" ? "Contactez-nous" :
                     locale === "tr" ? "Bize Ulaşın" :
                     "Contact Us"}
                    <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          RELATED ARTICLES
      ═══════════════════════════════════════════════════════════════════ */}
      {allRelated.length > 0 && (
        <section className="relative py-20 lg:py-28 bg-bontera-grey-100">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <div>
                <span className="inline-flex items-center gap-3 text-bontera-navy-600 text-xs uppercase tracking-[0.3em] font-semibold">
                  <span className="w-8 h-px bg-bontera-navy-600" />
                  {locale === "de" ? "Weiterlesen" :
                   locale === "fr" ? "Lire la suite" :
                   locale === "tr" ? "Okumaya Devam Et" :
                   "Continue Reading"}
                </span>
                <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-bontera-grey-900 leading-[1.1] tracking-tight">
                  {locale === "de" ? "Ähnliche Artikel" :
                   locale === "fr" ? "Articles Similaires" :
                   locale === "tr" ? "İlgili Makaleler" :
                   "Related Articles"}
                </h2>
              </div>
              <Link
                href={`/${locale}/news`}
                className="group inline-flex items-center gap-3 text-bontera-navy-600 hover:text-bontera-navy-700 text-sm uppercase tracking-wider font-semibold transition-colors"
              >
                {t("allNews.title")}
                <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {allRelated.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/${locale}/news/${relatedArticle.slug}`}
                  className="group bg-white border border-bontera-grey-200 hover:border-bontera-grey-300 hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={relatedArticle.image || "/images/placeholder.jpg"}
                      alt={relatedArticle.title[loc] || relatedArticle.title.en}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bontera-navy-900/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-bontera-navy-600 text-xs font-semibold">
                        {t(`categories.${relatedArticle.category}`)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-bontera-grey-500 mb-3">
                      <span>
                        {new Date(relatedArticle.date).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{t("minRead", { minutes: relatedArticle.readTime })}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-bontera-grey-900 group-hover:text-bontera-navy-600 transition-colors line-clamp-2 leading-tight">
                      {relatedArticle.title[loc] || relatedArticle.title.en}
                    </h3>
                    <div className="mt-4 pt-4 border-t border-bontera-grey-200 flex items-center gap-2 text-sm font-semibold text-bontera-navy-600 group-hover:text-bontera-navy-700">
                      {t("readMore")}
                      <svg className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
