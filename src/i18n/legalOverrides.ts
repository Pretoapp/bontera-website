import type { Locale } from "@/lib/i18n/config";

type MessageTree = Record<string, unknown>;

export const legalOverrides: Partial<Record<Locale, MessageTree>> = {
  fr: {
    footer: {
      legal: {
        impressum: "Mentions légales",
      },
    },
    legalShared: {
      sidebar: {
        tocTitle: "Sur cette page",
        officeLabel: "Siège social",
        phoneLabel: "Téléphone",
        emailLabel: "E-mail",
        supportTitle: "Besoin d'assistance ?",
        supportBody:
          "Pour toute question juridique, demande liée à la confidentialité ou précision sur un document, contactez directement notre équipe.",
      },
      labels: {
        company: "Entreprise",
        representative: "Représentant",
        phone: "Téléphone",
        email: "E-mail",
        commercialRegister: "Registre du commerce",
        registrationCourt: "Tribunal d'immatriculation",
        vatId: "N° TVA",
      },
    },
    legalPage: {
      hero: {
        landingTitle: "Centre légal",
        landingSubtitle:
          "Accédez à l'ensemble des documents relatifs aux mentions légales, à la confidentialité, aux cookies et aux conditions d'utilisation dans une présentation claire et structurée.",
        contactLine: "Pour toute demande juridique ou liée à la confidentialité, écrivez à",
      },
      nav: {
        impressum: "Mentions légales",
      },
      documents: {
        eyebrow: "Documents de conformité",
        title: "Choisissez le document souhaité",
        description:
          "Accédez à nos mentions légales, à notre politique de confidentialité, à nos conditions d'utilisation et à notre politique relative aux cookies dans une expérience plus claire et plus professionnelle.",
      },
      impressum: {
        title: "Mentions légales",
        body: "Informations sur la société, données d'immatriculation et mentions obligatoires de Bontera GmbH.",
      },
      faqBlock: {
        eyebrow: "Assistance",
      },
      cta: {
        title: "Vous avez encore besoin d'une précision ?",
        description:
          "Si vous avez une question relative au droit, à la confidentialité ou à la conformité, notre équipe peut vous orienter vers le bon document ou répondre directement à votre demande.",
        primary: "Nous contacter",
        secondary: "Écrire à l'équipe juridique",
      },
    },
    impressumPage: {
      meta: {
        title: "Mentions légales | Bontera GmbH",
        description: "Mentions légales de BONTERA GmbH - informations conformément au § 5 DDG.",
      },
      breadcrumb: {
        home: "Accueil",
        legal: "Centre légal",
        impressum: "Mentions légales",
      },
      hero: {
        eyebrow: "Centre légal",
        title: "Mentions légales",
        subtitle: "Informations conformément au § 5 DDG",
      },
      content: {
        representedBy: "Représentée par le gérant",
        registrationTitle: "Registre du commerce",
        registrationValue: "Société en cours de constitution (sera complété dès réception)",
        courtValue: "Société en cours de constitution (sera complété dès réception)",
        taxIdTitle: "N° TVA",
        taxIdDescription:
          "Numéro d'identification à la TVA conformément au § 27 a de la loi allemande sur la TVA :",
        taxIdValue: "Société en cours de constitution (sera complété dès réception)",
        supervisoryTitle: "Autorités de contrôle",
        supervisoryBody2: "Société en cours de constitution (sera complété dès réception)",
        editorialTitle: "Responsable éditorial",
        euDisputeTitle: "Règlement en ligne des litiges de l'UE",
        euDisputeBody:
          "La Commission européenne met à disposition une plateforme de règlement en ligne des litiges (RLL) :",
        euDisputeEmail:
          "Vous trouverez notre adresse e-mail ci-dessus dans les mentions légales.",
        consumerDisputeTitle:
          "Règlement des litiges de consommation / organisme universel de médiation",
        consumerDisputeBody:
          "Nous ne sommes ni disposés ni obligés de participer à une procédure de règlement des litiges devant un organisme de médiation des consommateurs.",
        liabilityContentTitle: "Responsabilité relative aux contenus",
        liabilityContentBody1:
          "En tant que prestataire de services, nous sommes responsables de nos propres contenus sur ces pages conformément au § 7 al. 1 DDG et aux lois générales.",
        liabilityContentBody2:
          "Conformément aux §§ 8 à 10 DDG, nous ne sommes toutefois pas tenus de surveiller les informations de tiers transmises ou stockées.",
        liabilityLinksTitle: "Responsabilité relative aux liens",
        liabilityLinksBody1:
          "Notre offre contient des liens vers des sites externes de tiers dont nous ne contrôlons pas le contenu.",
        liabilityLinksBody2:
          "Nous ne pouvons donc assumer aucune garantie pour ces contenus externes.",
        copyrightTitle: "Droit d'auteur",
        copyrightBody1:
          "Les contenus et œuvres créés par les exploitants du site sur ces pages sont soumis au droit d'auteur allemand.",
        copyrightBody2: "Les contributions de tiers sont signalées comme telles.",
      },
      backToLegal: "Retour au centre légal",
    },
    datenschutzPage: {
      meta: {
        title: "Politique de confidentialité | Bontera GmbH",
        description:
          "Politique de confidentialité de BONTERA GmbH - informations sur la protection de vos données personnelles.",
      },
      breadcrumb: {
        home: "Accueil",
        legal: "Centre légal",
        datenschutz: "Confidentialité",
      },
      hero: {
        eyebrow: "Centre légal",
        title: "Politique de confidentialité",
        subtitle: "Informations sur la protection de vos données personnelles conformément au RGPD.",
      },
      sections: {
        general: {
          title: "Informations générales",
          p1: "La protection de vos données personnelles est particulièrement importante pour nous. Nous traitons vos données personnelles de manière confidentielle, conformément aux réglementations applicables et à la présente politique de confidentialité.",
          p2: "Ce site web traite des données personnelles conformément au Règlement général sur la protection des données (RGPD).",
        },
        responsible: {
          title: "Responsable du traitement des données",
        },
        serverLogs: {
          title: "Collecte de données lors de la visite du site",
          p1: "Lorsque vous consultez notre site web, certaines informations sont automatiquement enregistrées par le serveur web. Ces fichiers journaux du serveur comprennent notamment :",
          items: {
            ip: "Adresse IP",
            browser: "Type et version du navigateur",
            os: "Système d'exploitation utilisé",
            referrer: "URL de provenance",
            hostname: "Nom d'hôte de l'appareil accédant au site",
            time: "Heure de la requête serveur",
          },
          p2: "Le traitement est effectué sur la base de l'article 6, paragraphe 1, point f du RGPD afin de garantir le bon fonctionnement technique du site.",
        },
        cookies: {
          title: "Cookies",
          p1: "Notre site web utilise des cookies. Les cookies sont de petits fichiers texte enregistrés sur votre terminal.",
          p2: "Certains cookies sont techniquement nécessaires, tandis que d'autres servent à analyser ou à améliorer notre offre.",
        },
        contact: {
          title: "Prise de contact",
          p1: "Si vous nous contactez par e-mail ou via un formulaire, les informations transmises sont enregistrées afin de traiter votre demande.",
          p2: "La base juridique est l'article 6, paragraphe 1, point b du RGPD (contrat ou mesures précontractuelles).",
        },
        rights: {
          title: "Vos droits en tant que personne concernée",
          p1: "Vous disposez des droits suivants conformément au RGPD :",
          items: {
            access: "Droit d'accès (article 15 RGPD)",
            rectification: "Droit de rectification (article 16 RGPD)",
            erasure: "Droit à l'effacement (article 17 RGPD)",
            restriction: "Droit à la limitation du traitement (article 18 RGPD)",
            portability: "Droit à la portabilité des données (article 20 RGPD)",
            objection: "Droit d'opposition (article 21 RGPD)",
          },
        },
        complaint: {
          title: "Droit de réclamation auprès d'une autorité de contrôle",
          p1: "En cas de violation du droit de la protection des données, vous disposez d'un droit de réclamation auprès d'une autorité de contrôle compétente.",
          p2: "L'autorité compétente est celle du Land dans lequel notre société a son siège.",
        },
        ssl: {
          title: "Chiffrement SSL ou TLS",
          p1: "Pour des raisons de sécurité et afin de protéger la transmission de contenus confidentiels, ce site utilise un chiffrement SSL ou TLS.",
          p2: "Vous pouvez reconnaître une connexion chiffrée lorsque la ligne d'adresse du navigateur passe de « http:// » à « https:// ».",
        },
        retention: {
          title: "Durée de conservation des données",
          p1: "Les données personnelles ne sont conservées que pendant la durée nécessaire à la finalité du traitement ou pendant les délais légaux de conservation.",
        },
      },
      backToLegal: "Retour au centre légal",
    },
    nutzungsbedingungenPage: {
      meta: {
        title: "Conditions d'utilisation | Bontera GmbH",
        description: "Conditions d'utilisation du site web de BONTERA GmbH.",
      },
      breadcrumb: {
        home: "Accueil",
        legal: "Centre légal",
        terms: "Conditions d'utilisation",
      },
      hero: {
        eyebrow: "Centre légal",
        title: "Conditions d'utilisation",
        subtitle: "Conditions applicables à l'utilisation de notre site web et de nos services.",
      },
      sections: {
        scope: {
          title: "Champ d'application",
          p1: "Les présentes conditions d'utilisation s'appliquent à l'utilisation du site web de BONTERA GmbH et de tous les services qui y sont associés.",
          p2: "En accédant à ce site web, vous acceptez les présentes conditions d'utilisation.",
        },
        usage: {
          title: "Utilisation du site web",
          p1: "L'utilisation de ce site web n'est autorisée qu'à des fins licites. Vous vous engagez à ne pas l'utiliser d'une manière susceptible d'en perturber ou d'en compromettre le fonctionnement.",
          p2: "Il est interdit d'utiliser des systèmes automatisés ou des logiciels pour extraire des données de ce site web.",
        },
        intellectualProperty: {
          title: "Propriété intellectuelle",
          p1: "Tous les contenus de ce site web (textes, images, graphiques, logos, vidéos) sont protégés par le droit d'auteur et appartiennent à BONTERA GmbH ou à ses concédants.",
          p2: "Toute reproduction, diffusion ou autre utilisation des contenus est interdite sans autorisation écrite expresse.",
        },
        liability: {
          title: "Limitation de responsabilité",
          p1: "Le contenu de ce site web est élaboré avec le plus grand soin possible. BONTERA GmbH ne garantit toutefois pas l'exactitude, l'exhaustivité ou l'actualité des informations fournies.",
          p2: "L'utilisation des contenus se fait à vos propres risques. Toute demande de dommages-intérêts à l'encontre de BONTERA GmbH est exclue, sauf en cas de faute intentionnelle ou de négligence grave.",
        },
        changes: {
          title: "Modification des conditions d'utilisation",
          p1: "BONTERA GmbH se réserve le droit de modifier les présentes conditions d'utilisation à tout moment. La version en vigueur est toujours consultable sur cette page.",
        },
        applicableLaw: {
          title: "Droit applicable",
          p1: "Le droit de la République fédérale d'Allemagne s'applique. Le tribunal compétent est Halle Westfalen, dans la mesure où la loi l'autorise.",
        },
      },
      backToLegal: "Retour au centre légal",
    },
    cookiePage: {
      meta: {
        title: "Politique relative aux cookies | Bontera GmbH",
        description: "Politique relative aux cookies de BONTERA GmbH - informations sur l'utilisation des cookies sur notre site web.",
      },
      breadcrumb: {
        home: "Accueil",
        legal: "Centre légal",
        cookies: "Politique relative aux cookies",
      },
      hero: {
        eyebrow: "Centre légal",
        title: "Politique relative aux cookies",
        subtitle: "Informations sur l'utilisation des cookies sur notre site web.",
      },
      sections: {
        whatAreCookies: {
          title: "Que sont les cookies ?",
          p1: "Les cookies sont de petits fichiers texte enregistrés sur votre appareil lorsque vous consultez un site web. Ils contribuent au bon fonctionnement du site, à l'analyse de son usage et à l'amélioration de l'expérience utilisateur.",
          p2: "Les cookies ne contiennent pas de données personnelles et ne peuvent ni exécuter de programmes ni transmettre de virus à votre ordinateur.",
        },
        typesOfCookies: {
          title: "Types de cookies",
          p1: "Nous utilisons les types de cookies suivants sur notre site web :",
          necessary: {
            label: "Cookies nécessaires",
            description: "Ces cookies sont indispensables au fonctionnement de base du site et ne peuvent pas être désactivés.",
          },
          analytics: {
            label: "Cookies d'analyse",
            description: "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site en collectant des informations de manière anonyme.",
          },
          preferences: {
            label: "Cookies de préférence",
            description: "Ces cookies permettent au site de mémoriser les réglages que vous avez effectués, par exemple votre langue.",
          },
        },
        manageCookies: {
          title: "Gérer les cookies",
          p1: "Vous pouvez gérer vos préférences relatives aux cookies à tout moment dans les paramètres de votre navigateur. La plupart des navigateurs vous permettent de bloquer ou de supprimer les cookies.",
          p2: "Veuillez noter que la désactivation de certains cookies peut affecter le bon fonctionnement de ce site web.",
        },
        thirdParty: {
          title: "Cookies tiers",
          p1: "Notre site web peut déposer des cookies tiers, notamment à des fins d'analyse. Le traitement réalisé par ces tiers est régi par leurs propres politiques de confidentialité.",
        },
        contact: {
          title: "Contact",
          p1: "Si vous avez des questions concernant l'utilisation des cookies, contactez-nous à l'adresse suivante :",
        },
      },
      backToLegal: "Retour au centre légal",
    },
  },
  it: {
    footer: {
      legal: {
        impressum: "Note legali",
      },
    },
    legalShared: {
      sidebar: {
        tocTitle: "In questa pagina",
        officeLabel: "Sede legale",
        phoneLabel: "Telefono",
        emailLabel: "Email",
        supportTitle: "Hai bisogno di assistenza?",
        supportBody:
          "Per domande legali, richieste sulla privacy o chiarimenti sui documenti, contatta direttamente il nostro team.",
      },
      labels: {
        company: "Azienda",
        representative: "Rappresentante",
        phone: "Telefono",
        email: "Email",
        commercialRegister: "Registro delle imprese",
        registrationCourt: "Tribunale di registrazione",
        vatId: "Partita IVA",
      },
    },
    legalPage: {
      hero: {
        landingTitle: "Centro legale",
        landingSubtitle:
          "Consulta tutti i documenti relativi a note legali, privacy, cookie e termini di utilizzo in una presentazione più chiara e strutturata.",
        contactLine: "Per richieste legali o relative alla privacy scrivi a",
      },
      nav: {
        impressum: "Note legali",
      },
      documents: {
        eyebrow: "Documenti di conformità",
        title: "Scegli il documento di cui hai bisogno",
        description:
          "Accedi a note legali, informativa sulla privacy, termini di utilizzo e informativa sui cookie in un'esperienza più ordinata e professionale.",
      },
      impressum: {
        title: "Note legali",
        body: "Dati societari, informazioni di registrazione e indicazioni obbligatorie di Bontera GmbH.",
      },
      faqBlock: {
        eyebrow: "Supporto",
      },
      cta: {
        title: "Hai ancora bisogno di chiarimenti?",
        description:
          "Se hai una domanda legale, sulla privacy o sulla conformità, il nostro team può indicarti il documento corretto o rispondere direttamente alla tua richiesta.",
        primary: "Contattaci",
        secondary: "Scrivi al team legale",
      },
    },
    impressumPage: {
      meta: {
        title: "Note legali | Bontera GmbH",
        description: "Note legali di BONTERA GmbH - informazioni ai sensi del § 5 DDG.",
      },
      breadcrumb: {
        home: "Home",
        legal: "Centro legale",
        impressum: "Note legali",
      },
      hero: {
        eyebrow: "Centro legale",
        title: "Note legali",
        subtitle: "Informazioni ai sensi del § 5 DDG",
      },
      content: {
        representedBy: "Rappresentata dall'amministratore",
        registrationTitle: "Registro delle imprese",
        registrationValue: "Società in fase di costituzione (sarà integrato al ricevimento)",
        courtValue: "Società in fase di costituzione (sarà integrato al ricevimento)",
        taxIdTitle: "Partita IVA",
        taxIdDescription:
          "Numero di identificazione IVA ai sensi del § 27 a della legge tedesca sull'IVA:",
        taxIdValue: "Società in fase di costituzione (sarà integrato al ricevimento)",
        supervisoryTitle: "Autorità di vigilanza",
        supervisoryBody2: "Società in fase di costituzione (sarà integrato al ricevimento)",
        editorialTitle: "Responsabile editoriale",
        euDisputeTitle: "Risoluzione delle controversie nell'UE",
        euDisputeBody:
          "La Commissione europea mette a disposizione una piattaforma per la risoluzione online delle controversie (ODR):",
        euDisputeEmail:
          "Il nostro indirizzo e-mail è riportato sopra nelle presenti note legali.",
        consumerDisputeTitle:
          "Risoluzione delle controversie dei consumatori / organismo universale di conciliazione",
        consumerDisputeBody:
          "Non siamo disposti né obbligati a partecipare a procedure di risoluzione delle controversie dinanzi a un organismo di conciliazione dei consumatori.",
        liabilityContentTitle: "Responsabilità per i contenuti",
        liabilityContentBody1:
          "In qualità di prestatore di servizi siamo responsabili, ai sensi del § 7 comma 1 DDG e delle leggi generali, dei nostri contenuti presenti in queste pagine.",
        liabilityContentBody2:
          "Ai sensi dei §§ 8-10 DDG, tuttavia, non siamo tenuti a monitorare informazioni di terzi trasmesse o memorizzate.",
        liabilityLinksTitle: "Responsabilità per i link",
        liabilityLinksBody1:
          "La nostra offerta contiene link a siti esterni di terzi sui cui contenuti non abbiamo alcun controllo.",
        liabilityLinksBody2:
          "Per questo motivo non possiamo assumere alcuna garanzia per tali contenuti esterni.",
        copyrightTitle: "Diritto d'autore",
        copyrightBody1:
          "I contenuti e le opere creati dai gestori del sito su queste pagine sono soggetti al diritto d'autore tedesco.",
        copyrightBody2: "I contributi di terzi sono contrassegnati come tali.",
      },
      backToLegal: "Torna al centro legale",
    },
    datenschutzPage: {
      meta: {
        title: "Informativa sulla privacy | Bontera GmbH",
        description:
          "Informativa sulla privacy di BONTERA GmbH - informazioni sulla protezione dei tuoi dati personali.",
      },
      breadcrumb: {
        home: "Home",
        legal: "Centro legale",
        datenschutz: "Privacy",
      },
      hero: {
        eyebrow: "Centro legale",
        title: "Informativa sulla privacy",
        subtitle: "Informazioni sulla protezione dei tuoi dati personali ai sensi del GDPR.",
      },
      sections: {
        general: {
          title: "Informazioni generali",
          p1: "La protezione dei tuoi dati personali è per noi particolarmente importante. Trattiamo i tuoi dati personali in modo riservato, nel rispetto delle norme applicabili e della presente informativa sulla privacy.",
          p2: "Questo sito web tratta dati personali in conformità al Regolamento generale sulla protezione dei dati (GDPR).",
        },
        responsible: {
          title: "Titolare del trattamento",
        },
        serverLogs: {
          title: "Raccolta dati durante la visita del sito",
          p1: "Quando accedi al nostro sito, alcune informazioni vengono registrate automaticamente dal server web. Questi cosiddetti log del server includono in particolare:",
          items: {
            ip: "Indirizzo IP",
            browser: "Tipo e versione del browser",
            os: "Sistema operativo utilizzato",
            referrer: "URL di provenienza",
            hostname: "Hostname del dispositivo che accede al sito",
            time: "Ora della richiesta al server",
          },
          p2: "Il trattamento avviene sulla base dell'articolo 6, paragrafo 1, lettera f del GDPR per garantire il corretto funzionamento tecnico del sito.",
        },
        cookies: {
          title: "Cookie",
          p1: "Il nostro sito web utilizza i cosiddetti cookie. I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo.",
          p2: "Alcuni cookie sono tecnicamente necessari, mentre altri vengono utilizzati per analizzare o migliorare la nostra offerta.",
        },
        contact: {
          title: "Contatti",
          p1: "Se ci contatti via e-mail o tramite modulo, i dati forniti verranno memorizzati per elaborare la tua richiesta.",
          p2: "La base giuridica è l'articolo 6, paragrafo 1, lettera b del GDPR (contratto o misure precontrattuali).",
        },
        rights: {
          title: "I tuoi diritti come interessato",
          p1: "Ai sensi del GDPR hai i seguenti diritti:",
          items: {
            access: "Diritto di accesso (articolo 15 GDPR)",
            rectification: "Diritto di rettifica (articolo 16 GDPR)",
            erasure: "Diritto alla cancellazione (articolo 17 GDPR)",
            restriction: "Diritto alla limitazione del trattamento (articolo 18 GDPR)",
            portability: "Diritto alla portabilità dei dati (articolo 20 GDPR)",
            objection: "Diritto di opposizione (articolo 21 GDPR)",
          },
        },
        complaint: {
          title: "Diritto di reclamo presso un'autorità di controllo",
          p1: "In caso di violazioni della normativa sulla protezione dei dati hai il diritto di presentare reclamo a un'autorità di controllo competente.",
          p2: "L'autorità competente è quella del Land tedesco in cui la nostra azienda ha la propria sede.",
        },
        ssl: {
          title: "Crittografia SSL o TLS",
          p1: "Per motivi di sicurezza e per proteggere la trasmissione di contenuti riservati, questo sito utilizza la crittografia SSL o TLS.",
          p2: "Puoi riconoscere una connessione crittografata quando la barra degli indirizzi del browser passa da \"http://\" a \"https://\".",
        },
        retention: {
          title: "Durata della conservazione dei dati",
          p1: "I dati personali vengono conservati solo per il tempo necessario allo scopo del trattamento oppure per i periodi di conservazione previsti dalla legge.",
        },
      },
      backToLegal: "Torna al centro legale",
    },
    nutzungsbedingungenPage: {
      meta: {
        title: "Termini di utilizzo | Bontera GmbH",
        description: "Termini di utilizzo del sito web di BONTERA GmbH.",
      },
      breadcrumb: {
        home: "Home",
        legal: "Centro legale",
        terms: "Termini di utilizzo",
      },
      hero: {
        eyebrow: "Centro legale",
        title: "Termini di utilizzo",
        subtitle: "Condizioni per l'utilizzo del nostro sito web e dei nostri servizi.",
      },
      sections: {
        scope: {
          title: "Ambito di applicazione",
          p1: "I presenti termini di utilizzo si applicano all'uso del sito web di BONTERA GmbH e di tutti i servizi ad esso collegati.",
          p2: "Accedendo a questo sito web dichiari di accettare i presenti termini di utilizzo.",
        },
        usage: {
          title: "Uso del sito web",
          p1: "L'utilizzo di questo sito è consentito esclusivamente per scopi leciti. Ti impegni a non utilizzare il sito in modo tale da comprometterne o ostacolarne il funzionamento.",
          p2: "È vietato utilizzare sistemi automatizzati o software per estrarre dati da questo sito web.",
        },
        intellectualProperty: {
          title: "Proprietà intellettuale",
          p1: "Tutti i contenuti di questo sito web (testi, immagini, grafica, loghi, video) sono protetti da copyright e appartengono a BONTERA GmbH o ai relativi licenzianti.",
          p2: "La riproduzione, la distribuzione o qualsiasi altro utilizzo dei contenuti non è consentito senza espressa autorizzazione scritta.",
        },
        liability: {
          title: "Limitazione di responsabilità",
          p1: "I contenuti di questo sito web sono realizzati con la massima cura possibile. BONTERA GmbH non garantisce tuttavia l'esattezza, la completezza o l'attualità delle informazioni fornite.",
          p2: "L'utilizzo dei contenuti avviene a proprio rischio. Sono escluse richieste di risarcimento danni nei confronti di BONTERA GmbH, salvo dolo o colpa grave.",
        },
        changes: {
          title: "Modifiche ai termini di utilizzo",
          p1: "BONTERA GmbH si riserva il diritto di modificare i presenti termini di utilizzo in qualsiasi momento. La versione aggiornata è sempre consultabile in questa pagina.",
        },
        applicableLaw: {
          title: "Legge applicabile",
          p1: "Si applica il diritto della Repubblica Federale di Germania. Il foro competente è Halle Westfalen, nella misura consentita dalla legge.",
        },
      },
      backToLegal: "Torna al centro legale",
    },
    cookiePage: {
      meta: {
        title: "Informativa sui cookie | Bontera GmbH",
        description:
          "Informativa sui cookie di BONTERA GmbH - informazioni sull'uso dei cookie sul nostro sito web.",
      },
      breadcrumb: {
        home: "Home",
        legal: "Centro legale",
        cookies: "Informativa sui cookie",
      },
      hero: {
        eyebrow: "Centro legale",
        title: "Informativa sui cookie",
        subtitle: "Informazioni sull'uso dei cookie sul nostro sito web.",
      },
      sections: {
        whatAreCookies: {
          title: "Che cosa sono i cookie?",
          p1: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Aiutano a garantire il corretto funzionamento del sito, ad analizzarne l'utilizzo e a migliorare l'esperienza utente.",
          p2: "I cookie non contengono dati personali e non possono eseguire programmi né trasferire virus al tuo computer.",
        },
        typesOfCookies: {
          title: "Tipi di cookie",
          p1: "Sul nostro sito web utilizziamo i seguenti tipi di cookie:",
          necessary: {
            label: "Cookie necessari",
            description: "Questi cookie sono indispensabili per il funzionamento di base del sito e non possono essere disattivati.",
          },
          analytics: {
            label: "Cookie analitici",
            description: "Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni in forma anonima.",
          },
          preferences: {
            label: "Cookie di preferenza",
            description: "Questi cookie permettono al sito di ricordare le impostazioni da te scelte, come ad esempio la lingua.",
          },
        },
        manageCookies: {
          title: "Gestione dei cookie",
          p1: "Puoi gestire le preferenze relative ai cookie in qualsiasi momento tramite le impostazioni del browser. La maggior parte dei browser consente di bloccare o eliminare i cookie.",
          p2: "Tieni presente che la disattivazione di alcuni cookie potrebbe compromettere il corretto funzionamento di questo sito web.",
        },
        thirdParty: {
          title: "Cookie di terze parti",
          p1: "Il nostro sito web può utilizzare cookie di terze parti, ad esempio per finalità analitiche. Il trattamento effettuato da tali soggetti è disciplinato dalle loro rispettive informative sulla privacy.",
        },
        contact: {
          title: "Contatto",
          p1: "Se hai domande sull'utilizzo dei cookie, contattaci all'indirizzo:",
        },
      },
      backToLegal: "Torna al centro legale",
    },
  },
  nl: {
    footer: {
      legal: {
        impressum: "Juridische kennisgeving",
      },
    },
    legalShared: {
      sidebar: {
        tocTitle: "Op deze pagina",
        officeLabel: "Statutaire zetel",
        phoneLabel: "Telefoon",
        emailLabel: "E-mail",
        supportTitle: "Hulp nodig?",
        supportBody:
          "Neem voor juridische vragen, privacyverzoeken of toelichting op documenten rechtstreeks contact op met ons team.",
      },
      labels: {
        company: "Bedrijf",
        representative: "Vertegenwoordiger",
        phone: "Telefoon",
        email: "E-mail",
        commercialRegister: "Handelsregister",
        registrationCourt: "Registratierechtbank",
        vatId: "Btw-nummer",
      },
    },
    legalPage: {
      hero: {
        landingTitle: "Juridisch centrum",
        landingSubtitle:
          "Raadpleeg alle documenten over juridische kennisgeving, privacy, cookies en gebruiksvoorwaarden in een duidelijke en meer professionele presentatie.",
        contactLine: "Voor juridische of privacygerelateerde verzoeken schrijft u naar",
      },
      nav: {
        impressum: "Juridische kennisgeving",
      },
      documents: {
        eyebrow: "Conformiteitsdocumenten",
        title: "Kies het document dat u nodig hebt",
        description:
          "Bekijk onze juridische kennisgeving, het privacybeleid, de gebruiksvoorwaarden en het cookiebeleid via een duidelijkere en professionelere documentervaring.",
      },
      impressum: {
        title: "Juridische kennisgeving",
        body: "Bedrijfsgegevens, registratie-informatie en wettelijk verplichte vermeldingen van Bontera GmbH.",
      },
      faqBlock: {
        eyebrow: "Ondersteuning",
      },
      cta: {
        title: "Nog een verduidelijking nodig?",
        description:
          "Als u een vraag hebt over juridische zaken, privacy of naleving, helpt ons team u met het juiste document of een rechtstreeks antwoord.",
        primary: "Neem contact op",
        secondary: "Mail het juridische team",
      },
    },
    impressumPage: {
      meta: {
        title: "Juridische kennisgeving | Bontera GmbH",
        description: "Juridische kennisgeving van BONTERA GmbH - informatie overeenkomstig § 5 DDG.",
      },
      breadcrumb: {
        home: "Home",
        legal: "Juridisch centrum",
        impressum: "Juridische kennisgeving",
      },
      hero: {
        eyebrow: "Juridisch centrum",
        title: "Juridische kennisgeving",
        subtitle: "Informatie overeenkomstig § 5 DDG",
      },
      content: {
        representedBy: "Vertegenwoordigd door de directeur",
        registrationTitle: "Handelsregister",
        registrationValue: "Vennootschap in oprichting (wordt na ontvangst aangevuld)",
        courtValue: "Vennootschap in oprichting (wordt na ontvangst aangevuld)",
        taxIdTitle: "Btw-nummer",
        taxIdDescription:
          "Btw-identificatienummer overeenkomstig § 27 a van de Duitse omzetbelastingwet:",
        taxIdValue: "Vennootschap in oprichting (wordt na ontvangst aangevuld)",
        supervisoryTitle: "Toezichthoudende autoriteiten",
        supervisoryBody2: "Vennootschap in oprichting (wordt na ontvangst aangevuld)",
        editorialTitle: "Redactioneel verantwoordelijke",
        euDisputeTitle: "EU-geschillenbeslechting",
        euDisputeBody:
          "De Europese Commissie biedt een platform voor onlinegeschillenbeslechting (ODR) aan:",
        euDisputeEmail:
          "Ons e-mailadres vindt u hierboven in deze juridische kennisgeving.",
        consumerDisputeTitle:
          "Consumentengeschillenbeslechting / universele arbitrage-instantie",
        consumerDisputeBody:
          "Wij zijn niet bereid of verplicht deel te nemen aan geschillenbeslechtingsprocedures voor een consumenten-arbitragecommissie.",
        liabilityContentTitle: "Aansprakelijkheid voor inhoud",
        liabilityContentBody1:
          "Als dienstverlener zijn wij overeenkomstig § 7 lid 1 DDG en de algemene wetgeving verantwoordelijk voor onze eigen inhoud op deze pagina's.",
        liabilityContentBody2:
          "Volgens §§ 8 tot en met 10 DDG zijn wij echter niet verplicht om doorgegeven of opgeslagen informatie van derden te controleren.",
        liabilityLinksTitle: "Aansprakelijkheid voor links",
        liabilityLinksBody1:
          "Onze website bevat links naar externe websites van derden waarop wij geen invloed hebben.",
        liabilityLinksBody2:
          "Daarom kunnen wij voor deze externe inhoud geen garantie aanvaarden.",
        copyrightTitle: "Auteursrecht",
        copyrightBody1:
          "De door de exploitanten van deze website gecreëerde inhoud en werken op deze pagina's vallen onder het Duitse auteursrecht.",
        copyrightBody2: "Bijdragen van derden worden als zodanig aangeduid.",
      },
      backToLegal: "Terug naar het juridisch centrum",
    },
    datenschutzPage: {
      meta: {
        title: "Privacybeleid | Bontera GmbH",
        description:
          "Privacybeleid van BONTERA GmbH - informatie over de bescherming van uw persoonsgegevens.",
      },
      breadcrumb: {
        home: "Home",
        legal: "Juridisch centrum",
        datenschutz: "Privacybeleid",
      },
      hero: {
        eyebrow: "Juridisch centrum",
        title: "Privacybeleid",
        subtitle: "Informatie over de bescherming van uw persoonsgegevens volgens de AVG.",
      },
      sections: {
        general: {
          title: "Algemene informatie",
          p1: "De bescherming van uw persoonsgegevens is voor ons bijzonder belangrijk. Wij behandelen uw persoonsgegevens vertrouwelijk en in overeenstemming met de toepasselijke regelgeving en dit privacybeleid.",
          p2: "Deze website verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).",
        },
        responsible: {
          title: "Verwerkingsverantwoordelijke",
        },
        serverLogs: {
          title: "Gegevensverzameling bij bezoek aan de website",
          p1: "Wanneer u onze website bezoekt, worden automatisch gegevens geregistreerd door de webserver. Deze zogenaamde serverlogbestanden bevatten onder meer:",
          items: {
            ip: "IP-adres",
            browser: "Type en versie van de browser",
            os: "Gebruikt besturingssysteem",
            referrer: "Referrer-URL",
            hostname: "Hostnaam van het apparaat dat toegang krijgt",
            time: "Tijdstip van de serveraanvraag",
          },
          p2: "De verwerking vindt plaats op basis van artikel 6, lid 1, onder f AVG om de technische werking van de website te waarborgen.",
        },
        cookies: {
          title: "Cookies",
          p1: "Onze website gebruikt zogenoemde cookies. Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen.",
          p2: "Sommige cookies zijn technisch noodzakelijk, terwijl andere worden gebruikt om ons aanbod te analyseren of te verbeteren.",
        },
        contact: {
          title: "Contactopname",
          p1: "Wanneer u contact met ons opneemt via e-mail of formulier, worden uw gegevens opgeslagen om uw verzoek te verwerken.",
          p2: "De rechtsgrond hiervoor is artikel 6, lid 1, onder b AVG (overeenkomst of precontractuele maatregelen).",
        },
        rights: {
          title: "Uw rechten als betrokkene",
          p1: "U hebt de volgende rechten op grond van de AVG:",
          items: {
            access: "Recht op inzage (artikel 15 AVG)",
            rectification: "Recht op rectificatie (artikel 16 AVG)",
            erasure: "Recht op wissen (artikel 17 AVG)",
            restriction: "Recht op beperking van de verwerking (artikel 18 AVG)",
            portability: "Recht op gegevensoverdraagbaarheid (artikel 20 AVG)",
            objection: "Recht van bezwaar (artikel 21 AVG)",
          },
        },
        complaint: {
          title: "Recht om een klacht in te dienen bij een toezichthouder",
          p1: "Bij schendingen van de gegevensbeschermingswetgeving hebt u het recht een klacht in te dienen bij een bevoegde toezichthoudende autoriteit.",
          p2: "Bevoegd is de toezichthouder van de Duitse deelstaat waarin onze onderneming is gevestigd.",
        },
        ssl: {
          title: "SSL- of TLS-versleuteling",
          p1: "Deze website maakt om veiligheidsredenen en ter bescherming van vertrouwelijke inhoud gebruik van SSL- of TLS-versleuteling.",
          p2: "Een versleutelde verbinding herkent u doordat de adresregel van de browser verandert van \"http://\" naar \"https://\".",
        },
        retention: {
          title: "Bewaartermijn van gegevens",
          p1: "Persoonsgegevens worden alleen bewaard zolang dit nodig is voor het betreffende doel of zolang wettelijke bewaartermijnen gelden.",
        },
      },
      backToLegal: "Terug naar het juridisch centrum",
    },
    nutzungsbedingungenPage: {
      meta: {
        title: "Gebruiksvoorwaarden | Bontera GmbH",
        description: "Gebruiksvoorwaarden van de website van BONTERA GmbH.",
      },
      breadcrumb: {
        home: "Home",
        legal: "Juridisch centrum",
        terms: "Gebruiksvoorwaarden",
      },
      hero: {
        eyebrow: "Juridisch centrum",
        title: "Gebruiksvoorwaarden",
        subtitle: "Voorwaarden voor het gebruik van onze website en diensten.",
      },
      sections: {
        scope: {
          title: "Toepassingsgebied",
          p1: "Deze gebruiksvoorwaarden zijn van toepassing op het gebruik van de website van BONTERA GmbH en alle daaraan verbonden diensten.",
          p2: "Door deze website te bezoeken, verklaart u zich akkoord met deze gebruiksvoorwaarden.",
        },
        usage: {
          title: "Gebruik van de website",
          p1: "Het gebruik van deze website is uitsluitend toegestaan voor wettige doeleinden. U verbindt zich ertoe de website niet te gebruiken op een manier die de werking verstoort of belemmert.",
          p2: "Het is verboden geautomatiseerde systemen of software te gebruiken om gegevens van deze website te extraheren.",
        },
        intellectualProperty: {
          title: "Intellectuele eigendom",
          p1: "Alle inhoud van deze website (teksten, afbeeldingen, grafieken, logo's, video's) is auteursrechtelijk beschermd en eigendom van BONTERA GmbH of haar licentiegevers.",
          p2: "Vermenigvuldiging, verspreiding of enig ander gebruik van de inhoud is zonder uitdrukkelijke schriftelijke toestemming niet toegestaan.",
        },
        liability: {
          title: "Beperking van aansprakelijkheid",
          p1: "De inhoud van deze website is met de grootst mogelijke zorg samengesteld. BONTERA GmbH geeft echter geen garantie voor de juistheid, volledigheid of actualiteit van de verstrekte informatie.",
          p2: "Het gebruik van de inhoud gebeurt op eigen risico. Schadeclaims tegen BONTERA GmbH zijn uitgesloten, tenzij sprake is van opzet of grove nalatigheid.",
        },
        changes: {
          title: "Wijzigingen van de gebruiksvoorwaarden",
          p1: "BONTERA GmbH behoudt zich het recht voor deze gebruiksvoorwaarden op elk moment te wijzigen. De actuele versie kan altijd op deze pagina worden geraadpleegd.",
        },
        applicableLaw: {
          title: "Toepasselijk recht",
          p1: "Het recht van de Bondsrepubliek Duitsland is van toepassing. Bevoegde rechtbank is Halle Westfalen, voor zover wettelijk toegestaan.",
        },
      },
      backToLegal: "Terug naar het juridisch centrum",
    },
    cookiePage: {
      meta: {
        title: "Cookiebeleid | Bontera GmbH",
        description: "Cookiebeleid van BONTERA GmbH - informatie over het gebruik van cookies op onze website.",
      },
      breadcrumb: {
        home: "Home",
        legal: "Juridisch centrum",
        cookies: "Cookiebeleid",
      },
      hero: {
        eyebrow: "Juridisch centrum",
        title: "Cookiebeleid",
        subtitle: "Informatie over het gebruik van cookies op onze website.",
      },
      sections: {
        whatAreCookies: {
          title: "Wat zijn cookies?",
          p1: "Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt. Ze helpen de website correct te laten functioneren, het gebruik te analyseren en de ervaring te verbeteren.",
          p2: "Cookies bevatten geen persoonsgegevens en kunnen geen programma's uitvoeren of virussen naar uw computer overbrengen.",
        },
        typesOfCookies: {
          title: "Soorten cookies",
          p1: "Wij gebruiken de volgende soorten cookies op onze website:",
          necessary: {
            label: "Noodzakelijke cookies",
            description: "Deze cookies zijn nodig voor de basisfunctionaliteit van de website en kunnen niet worden uitgeschakeld.",
          },
          analytics: {
            label: "Analytische cookies",
            description: "Deze cookies helpen ons te begrijpen hoe bezoekers met de website omgaan door anoniem informatie te verzamelen.",
          },
          preferences: {
            label: "Voorkeurscookies",
            description: "Deze cookies zorgen ervoor dat de website door u gekozen instellingen kan onthouden, zoals uw taalvoorkeur.",
          },
        },
        manageCookies: {
          title: "Cookies beheren",
          p1: "U kunt uw cookievoorkeuren op elk moment beheren via de instellingen van uw browser. De meeste browsers bieden de mogelijkheid cookies te blokkeren of te verwijderen.",
          p2: "Houd er rekening mee dat het uitschakelen van bepaalde cookies de werking van deze website kan beïnvloeden.",
        },
        thirdParty: {
          title: "Cookies van derden",
          p1: "Onze website kan cookies van derden gebruiken, bijvoorbeeld voor analytische doeleinden. De verwerking door deze derden valt onder hun eigen privacybeleid.",
        },
        contact: {
          title: "Contact",
          p1: "Als u vragen hebt over het gebruik van cookies, neem dan contact met ons op via:",
        },
      },
      backToLegal: "Terug naar het juridisch centrum",
    },
  },
  ku: {
    footer: {
      legal: {
        impressum: "Agahdariya qanûnî",
      },
    },
    legalShared: {
      sidebar: {
        tocTitle: "Li ser vê rûpelê",
        officeLabel: "Navenda qeydkirî",
        phoneLabel: "Telefon",
        emailLabel: "Email",
        supportTitle: "Pêdiviya we bi alîkariyê heye?",
        supportBody:
          "Ji bo pirsên qanûnî, daxwazên nepenîtiyê an ravekirina belgeyan, rasterast bi tîmê me re têkilî daynin.",
      },
      labels: {
        company: "Şîrket",
        representative: "Nûner",
        phone: "Telefon",
        email: "Email",
        commercialRegister: "Qeyda bazirganî",
        registrationCourt: "Dadgeha qeydkirinê",
        vatId: "Nasnameya VAT",
      },
    },
    legalPage: {
      hero: {
        landingTitle: "Navenda qanûnî",
        landingSubtitle:
          "Hemû belgeyên li ser agahdariya qanûnî, nepenîtiyê, cookie û mercên bikaranînê di rûxandinek zelal û profesyonel de bibîne.",
        contactLine: "Ji bo daxwazên qanûnî an nepenîtiyê ji",
      },
      nav: {
        impressum: "Agahdariya qanûnî",
      },
      documents: {
        eyebrow: "Belgeyên rêkûpêkî",
        title: "Belgeya ku hewce dikin hilbijêrin",
        description:
          "Bi rûxandinek profesyonel bigihîje agahdariya qanûnî, polîtîkaya nepenîtiyê, mercên bikaranînê û polîtîkaya cookie.",
      },
      impressum: {
        title: "Agahdariya qanûnî",
        body: "Agahiyên şîrketê, agahiyên qeydkirinê û hemû danasînên qanûnî yên Bontera GmbH.",
      },
      faqBlock: {
        eyebrow: "Piştgirî",
      },
      cta: {
        title: "Hêj ravekirinek hewce dikin?",
        description:
          "Heke we pirsên qanûnî, nepenîtiyê an rêkûpêkî hebe, tîmê me dikare we ber bi belgeya rast bike an bersiva rasterast bide.",
        primary: "Bi me re têkilî daynin",
        secondary: "Ji tîmê qanûnî re binivîsin",
      },
    },
    impressumPage: {
      meta: {
        title: "Agahdariya qanûnî | Bontera GmbH",
        description: "Agahdariya qanûnî ya BONTERA GmbH - agahî li gorî § 5 DDG.",
      },
      breadcrumb: {
        home: "Destpêk",
        legal: "Navenda qanûnî",
        impressum: "Agahdariya qanûnî",
      },
      hero: {
        eyebrow: "Navenda qanûnî",
        title: "Agahdariya qanûnî",
        subtitle: "Agahî li gorî § 5 DDG",
      },
      content: {
        representedBy: "Ji aliyê rêveberê giştî ve tê nûnerandin",
        registrationTitle: "Qeyda bazirganî",
        registrationValue: "Şîrket di qonaxa damezrandinê de ye (dê piştî wergirtinê were zêdekirin)",
        courtValue: "Şîrket di qonaxa damezrandinê de ye (dê piştî wergirtinê were zêdekirin)",
        taxIdTitle: "Nasnameya VAT",
        taxIdDescription:
          "Hejmara nasnameya VAT li gorî § 27 a ya qanûna VAT a Almanyayê:",
        taxIdValue: "Şîrket di qonaxa damezrandinê de ye (dê piştî wergirtinê were zêdekirin)",
        supervisoryTitle: "Desthilatdarên çavdêriyê",
        supervisoryBody2: "Şîrket di qonaxa damezrandinê de ye (dê piştî wergirtinê were zêdekirin)",
        editorialTitle: "Berpirsiyarê edîtoryal",
        euDisputeTitle: "Çareseriya nakokiya EU",
        euDisputeBody:
          "Komîsyona Ewropî platformek ji bo çareseriya nakokiya online (ODR) peyda dike:",
        euDisputeEmail:
          "Navnîşana emaila me li jor di vê agahdariya qanûnî de heye.",
        consumerDisputeTitle:
          "Çareseriya nakokiya xerîdaran / saziya giştî ya arbitrajê",
        consumerDisputeBody:
          "Em ne amade ne û ne jî mecbûr in ku beşdarî pêvajoyên çareseriya nakokiyê li pêş saziyek arbitrajê ya xerîdaran bibin.",
        liabilityContentTitle: "Berpirsiyariya naverokê",
        liabilityContentBody1:
          "Wekî peydakera xizmetê, em li gorî § 7 bend 1 DDG û qanûnên giştî ji bo naveroka xwe ya li ser van rûpelan berpirsiyar in.",
        liabilityContentBody2:
          "Li gorî §§ 8 heta 10 DDG, em lê ne mecbûr in ku agahiyên derveyî yên hatine şandin an hilanîn şop bikin.",
        liabilityLinksTitle: "Berpirsiyariya girêdanan",
        liabilityLinksBody1:
          "Pêşkêşa me girêdanên malperên derveyî yên aliyên sêyem dihewîne, ku em li ser naveroka wan kontrol nîne.",
        liabilityLinksBody2:
          "Ji ber vê yekê, em nikarin ji bo wê naveroka derveyî garansî bidin.",
        copyrightTitle: "Mafê çapemeniyê",
        copyrightBody1:
          "Naverok û berhemên ku ji aliyê rêveberên malperê ve li ser van rûpelan hatine çêkirin, li gorî mafê çapemeniyê yê Almanyayê tên parastin.",
        copyrightBody2: "Beşdarîyên aliyê sêyem wekî wusa tên nîşankirin.",
      },
      backToLegal: "Vegere navenda qanûnî",
    },
    datenschutzPage: {
      meta: {
        title: "Polîtîkaya nepenîtiyê | Bontera GmbH",
        description:
          "Polîtîkaya nepenîtiyê ya BONTERA GmbH - agahî li ser parastina daneyên kesane yên we.",
      },
      breadcrumb: {
        home: "Destpêk",
        legal: "Navenda qanûnî",
        datenschutz: "Nepenîtiyê",
      },
      hero: {
        eyebrow: "Navenda qanûnî",
        title: "Polîtîkaya nepenîtiyê",
        subtitle: "Agahî li ser parastina daneyên kesane yên we li gorî GDPR.",
      },
      sections: {
        general: {
          title: "Agahiyên giştî",
          p1: "Parastina daneyên kesane yên we ji bo me pir girîng e. Em daneyên kesane yên we bi awayek veşartî û li gorî rêzikên nepenîtiyê yên heyî û vê polîtîkayê pêk tînin.",
          p2: "Ev malper dane kesane li gorî Rêziknameya Giştî ya Parastina Daneyan (GDPR) pêk tîne.",
        },
        responsible: {
          title: "Berpirsiyarê pêvajoya daneyan",
        },
        serverLogs: {
          title: "Berhevkirina daneyan dema serdana malperê",
          p1: "Dema ku hûn malpera me vedikin, hinek agahî bi awayek xweber ji aliyê serverê webê ve tên tomar kirin. Ev pelên logê yên serverê bi taybetî evan tiştan dihewînin:",
          items: {
            ip: "Navnîşana IP",
            browser: "Cure û guhertoya browserê",
            os: "Pergala xebatê ya tê bikaranîn",
            referrer: "URL-ya çavkanî",
            hostname: "Navê hostê yê amûra ku têkeve malperê",
            time: "Demjimêra daxwaza serverê",
          },
          p2: "Ev pêvajoyek li ser bingeha xala 6 bend 1 tîpa f ya GDPR tê kirin da ku xebata teknîkî ya malperê were parastin.",
        },
        cookies: {
          title: "Cookie",
          p1: "Malpera me cookie bikar tîne. Cookie pelên nivîskî yên biçûk in ku li ser amûra we tên hilanîn.",
          p2: "Hin cookie ji bo xebata bingehîn pêwîstin, hinên din jî ji bo analîz an başkirina pêşkêşiyê tên bikaranîn.",
        },
        contact: {
          title: "Têkilî",
          p1: "Heke hûn bi email an forma têkiliyê bi me re têkilî daynin, agahiyên ku hûn didin ji bo pêvajoya daxwaza we tên hilanîn.",
          p2: "Bingeha qanûnî xala 6 bend 1 tîpa b ya GDPR e (peyman an tedbîrên pêş-peymanî).",
        },
        rights: {
          title: "Mafên we wekî kesê têkildar",
          p1: "Li gorî GDPR hûn ev mafan hene:",
          items: {
            access: "Mafê gihîştinê (xala 15 GDPR)",
            rectification: "Mafê sererastkirinê (xala 16 GDPR)",
            erasure: "Mafê jêbirinê (xala 17 GDPR)",
            restriction: "Mafê sînorkirina pêvajoyê (xala 18 GDPR)",
            portability: "Mafê veguhestina daneyan (xala 20 GDPR)",
            objection: "Mafê nerazîbûnê (xala 21 GDPR)",
          },
        },
        complaint: {
          title: "Mafê gilîkirinê li bal saziyek çavdêriyê",
          p1: "Heke bêparêziya nepenîtiyê hebe, hûn mafê gilîkirinê li bal saziyek çavdêriya parastina daneyan hene.",
          p2: "Saziya berpirsiyar ew saziya çavdêriyê ye ya eyaleta Almanyayê ku şîrketa me li wir qeydkirî ye.",
        },
        ssl: {
          title: "Şîfrekirina SSL an TLS",
          p1: "Ji bo ewlehî û ji bo parastina veguhastina naveroka veşartî, ev malper şîfrekirina SSL an TLS bikar tîne.",
          p2: "Hûn têkiliyek şîfrekirî ji wê yekê nas dikin ku xeta navnîşanê ya browserê ji \"http://\" veguherî \"https://\".",
        },
        retention: {
          title: "Demeya hilanîna daneyan",
          p1: "Dane kesane tenê heta dema ku ji bo armanca pêvajoyê pêwîst bin an li gorî demên hilanînê yên qanûnî tên hilanîn.",
        },
      },
      backToLegal: "Vegere navenda qanûnî",
    },
    nutzungsbedingungenPage: {
      meta: {
        title: "Mercên bikaranînê | Bontera GmbH",
        description: "Mercên bikaranînê yên malpera BONTERA GmbH.",
      },
      breadcrumb: {
        home: "Destpêk",
        legal: "Navenda qanûnî",
        terms: "Mercên bikaranînê",
      },
      hero: {
        eyebrow: "Navenda qanûnî",
        title: "Mercên bikaranînê",
        subtitle: "Mercên bikaranîna malpera me û xizmetên me.",
      },
      sections: {
        scope: {
          title: "Qada sepandinê",
          p1: "Ev mercên bikaranînê ji bo bikaranîna malpera BONTERA GmbH û hemû xizmetên pê ve girêdayî têne sepandin.",
          p2: "Bi têketina vê malperê, hûn ev mercên bikaranînê qebûl dikin.",
        },
        usage: {
          title: "Bikaranîna malperê",
          p1: "Bikaranîna vê malperê tenê ji bo armancên qanûnî destûrdayî ye. Hûn qebûl dikin ku malperê bi awayekî ku xebata wê teng bike an bişewitîne nebin.",
          p2: "Bikaranîna pergal an nivîsbarên otomatîk ji bo derxistina daneyan ji vê malperê qedexe ye.",
        },
        intellectualProperty: {
          title: "Mafê mîlkê hizrî",
          p1: "Hemû naveroka vê malperê (nivîs, wêne, grafîk, logo, vîdyo) bi mafê çapemeniyê tê parastin û milkê BONTERA GmbH an peydakara destûrê ye.",
          p2: "Bêyî destûra nivîskî ya eşkere, dubarekirin, belavkirin an her bikaranînek din a naverokê destûr nayê.",
        },
        liability: {
          title: "Sînorkirina berpirsiyariyê",
          p1: "Naveroka vê malperê bi xebata herî pir tê amadekirin. Lê BONTERA GmbH nikare ji bo rastî, temamî an nûbûna agahiyên hatine pêşkêşkirin temenat bide.",
          p2: "Bikaranîna naverokê li ser xetera we ye. Daxwazên biyanî li dijî BONTERA GmbH têne red kirin, heke qesda an xeletiya giran tune be.",
        },
        changes: {
          title: "Guhertinên mercên bikaranînê",
          p1: "BONTERA GmbH mafê xwe digire ku ev mercên bikaranînê di her demê de biguherîne. Guhertoya heyî her dem li ser vê rûpelê tê dîtin.",
        },
        applicableLaw: {
          title: "Qanûna tê sepandin",
          p1: "Qanûna Komara Federal a Almanyayê tê sepandin. Dadgeha berpirsiyar Halle Westfalen e, heya ku qanûn destûr bide.",
        },
      },
      backToLegal: "Vegere navenda qanûnî",
    },
    cookiePage: {
      meta: {
        title: "Polîtîkaya cookie | Bontera GmbH",
        description: "Polîtîkaya cookie ya BONTERA GmbH - agahî li ser bikaranîna cookie li ser malpera me.",
      },
      breadcrumb: {
        home: "Destpêk",
        legal: "Navenda qanûnî",
        cookies: "Polîtîkaya cookie",
      },
      hero: {
        eyebrow: "Navenda qanûnî",
        title: "Polîtîkaya cookie",
        subtitle: "Agahî li ser bikaranîna cookie li ser malpera me.",
      },
      sections: {
        whatAreCookies: {
          title: "Cookie çi ne?",
          p1: "Cookie pelên nivîskî yên biçûk in ku dema hûn serdana malperekê dikin li ser amûra we tên hilanîn. Ew alîkarî dikin ku malper bi rastî bixebite, bikaranîn were analîz kirin û tecrûbe were başkirin.",
          p2: "Cookie dane kesane nahewîne û nikare bername bixebitîne an jî vîrusan veguhezîne kompîtura we.",
        },
        typesOfCookies: {
          title: "Cureyên cookie",
          p1: "Em li ser malpera xwe ev cureyên cookie bikar tînin:",
          necessary: {
            label: "Cookie yên pêwîst",
            description: "Ev cookie ji bo fonksiyona bingehîn a malperê pêwîstin û nayên neçalak kirin.",
          },
          analytics: {
            label: "Cookie yên analîzê",
            description: "Ev cookie alîkarî dikin ku em fam bikin mêvan çawa bi malperê re tevdigerin, bi berhevkirina agahiyan bi awayek anonîm.",
          },
          preferences: {
            label: "Cookie yên tercîhê",
            description: "Ev cookie dihêlin ku malper mîhengên ku hûn hilbijartine, wek ziman, bîr bîne.",
          },
        },
        manageCookies: {
          title: "Rêvebirina cookieyan",
          p1: "Hûn dikarin di her demê de cookie li ser mîhengên browsera xwe rêve bibin. Gelek browser dikarin cookieyan bloke bikin an jê bibin.",
          p2: "Ji kerema xwe zanibin ku girtina hin cookieyan dikare karûbarê vê malperê bandor bike.",
        },
        thirdParty: {
          title: "Cookie yên aliyê sêyem",
          p1: "Malpera me dikare cookie yên aliyên sêyem bikar bîne, mînak ji bo armancên analîtîk. Pêvajoya ku ev aliyên sêyem dikin li gorî polîtîkayên wan yên nepenîtiyê tê rêvebirin.",
        },
        contact: {
          title: "Têkilî",
          p1: "Heke pirsên we li ser bikaranîna cookieyan hebe, bi me re li vê navnîşanê têkilî daynin:",
        },
      },
      backToLegal: "Vegere navenda qanûnî",
    },
  },
  tr: {
    footer: {
      legal: {
        impressum: "Yasal bildirim",
      },
    },
    legalShared: {
      sidebar: {
        tocTitle: "Bu sayfada",
        officeLabel: "Kayıtlı merkez",
        phoneLabel: "Telefon",
        emailLabel: "E-posta",
        supportTitle: "Yardıma mı ihtiyacınız var?",
        supportBody:
          "Hukuki sorular, gizlilik talepleri veya belge açıklamaları için doğrudan ekibimizle iletişime geçin.",
      },
      labels: {
        company: "Şirket",
        representative: "Temsilci",
        phone: "Telefon",
        email: "E-posta",
        commercialRegister: "Ticaret sicili",
        registrationCourt: "Kayıt mahkemesi",
        vatId: "KDV numarası",
      },
    },
    legalPage: {
      hero: {
        landingTitle: "Yasal merkez",
        landingSubtitle:
          "Yasal bildirim, gizlilik, çerezler ve kullanım şartlarıyla ilgili tüm belgelere daha net ve profesyonel bir sunumla erişin.",
        contactLine: "Hukuki veya gizlilikle ilgili talepler için şuraya yazın",
      },
      nav: {
        impressum: "Yasal bildirim",
      },
      documents: {
        eyebrow: "Uyum belgeleri",
        title: "İhtiyacınız olan belgeyi seçin",
        description:
          "Yasal bildirim, gizlilik politikası, kullanım şartları ve çerez politikasına daha temiz ve profesyonel bir belge deneyimiyle erişin.",
      },
      impressum: {
        title: "Yasal bildirim",
        body: "Bontera GmbH'nin şirket bilgileri, kayıt bilgileri ve yasal olarak zorunlu açıklamaları.",
      },
      faqBlock: {
        eyebrow: "Destek",
      },
      cta: {
        title: "Hâlâ açıklamaya mı ihtiyacınız var?",
        description:
          "Hukuk, gizlilik veya uyumlulukla ilgili bir sorunuz varsa ekibimiz sizi doğru belgeye yönlendirebilir veya talebinizi doğrudan yanıtlayabilir.",
        primary: "İletişime geçin",
        secondary: "Hukuk ekibine yazın",
      },
    },
    impressumPage: {
      meta: {
        title: "Yasal bildirim | Bontera GmbH",
        description: "BONTERA GmbH yasal bildirimi - § 5 DDG uyarınca bilgiler.",
      },
      breadcrumb: {
        home: "Ana sayfa",
        legal: "Yasal merkez",
        impressum: "Yasal bildirim",
      },
      hero: {
        eyebrow: "Yasal merkez",
        title: "Yasal bildirim",
        subtitle: "§ 5 DDG uyarınca bilgiler",
      },
      content: {
        representedBy: "Genel müdür tarafından temsil edilmektedir",
        registrationTitle: "Ticaret sicili",
        registrationValue: "Şirket kuruluş aşamasındadır (alındığında eklenecektir)",
        courtValue: "Şirket kuruluş aşamasındadır (alındığında eklenecektir)",
        taxIdTitle: "KDV numarası",
        taxIdDescription:
          "Alman KDV Kanunu'nun § 27 a maddesi uyarınca KDV kimlik numarası:",
        taxIdValue: "Şirket kuruluş aşamasındadır (alındığında eklenecektir)",
        supervisoryTitle: "Denetleyici kurumlar",
        supervisoryBody2: "Şirket kuruluş aşamasındadır (alındığında eklenecektir)",
        editorialTitle: "Editoryal sorumlu",
        euDisputeTitle: "AB uyuşmazlık çözümü",
        euDisputeBody:
          "Avrupa Komisyonu çevrim içi uyuşmazlık çözümü (ODR) için bir platform sunmaktadır:",
        euDisputeEmail:
          "E-posta adresimizi yukarıda bu yasal bildirim içinde bulabilirsiniz.",
        consumerDisputeTitle:
          "Tüketici uyuşmazlık çözümü / evrensel tahkim kurulu",
        consumerDisputeBody:
          "Bir tüketici hakem heyeti önündeki uyuşmazlık çözüm süreçlerine katılmaya ne istekliyiz ne de yükümlüyüz.",
        liabilityContentTitle: "İçerik için sorumluluk",
        liabilityContentBody1:
          "Hizmet sağlayıcı olarak § 7 paragraf 1 DDG ve genel mevzuat uyarınca bu sayfalardaki kendi içeriklerimizden sorumluyuz.",
        liabilityContentBody2:
          "Bununla birlikte §§ 8 ila 10 DDG uyarınca iletilen veya depolanan üçüncü taraf bilgilerini izlemekle yükümlü değiliz.",
        liabilityLinksTitle: "Bağlantılar için sorumluluk",
        liabilityLinksBody1:
          "Teklifimiz, içerikleri üzerinde herhangi bir kontrolümüz olmayan üçüncü taraf dış web sitelerine bağlantılar içermektedir.",
        liabilityLinksBody2:
          "Bu nedenle söz konusu harici içerikler için herhangi bir garanti üstlenemeyiz.",
        copyrightTitle: "Telif hakkı",
        copyrightBody1:
          "Bu sayfalarda site işletmecileri tarafından oluşturulan içerik ve eserler Alman telif hakkı hukukuna tabidir.",
        copyrightBody2: "Üçüncü taraf katkıları bu şekilde işaretlenir.",
      },
      backToLegal: "Yasal merkeze dön",
    },
    datenschutzPage: {
      meta: {
        title: "Gizlilik politikası | Bontera GmbH",
        description:
          "BONTERA GmbH gizlilik politikası - kişisel verilerinizin korunmasına ilişkin bilgiler.",
      },
      breadcrumb: {
        home: "Ana sayfa",
        legal: "Yasal merkez",
        datenschutz: "Gizlilik",
      },
      hero: {
        eyebrow: "Yasal merkez",
        title: "Gizlilik politikası",
        subtitle: "Kişisel verilerinizin GDPR uyarınca korunmasına ilişkin bilgiler.",
      },
      sections: {
        general: {
          title: "Genel bilgiler",
          p1: "Kişisel verilerinizin korunması bizim için özellikle önemlidir. Kişisel verilerinizi gizli şekilde, yürürlükteki veri koruma kurallarına ve bu gizlilik politikasına uygun olarak işleriz.",
          p2: "Bu web sitesi kişisel verileri Genel Veri Koruma Tüzüğü'ne (GDPR) uygun şekilde işlemektedir.",
        },
        responsible: {
          title: "Veri işlemeden sorumlu taraf",
        },
        serverLogs: {
          title: "Web sitesi ziyareti sırasında veri toplama",
          p1: "Web sitemizi ziyaret ettiğinizde bazı bilgiler web sunucusu tarafından otomatik olarak kaydedilir. Bu sunucu günlük dosyaları özellikle şunları içerir:",
          items: {
            ip: "IP adresi",
            browser: "Tarayıcı türü ve sürümü",
            os: "Kullanılan işletim sistemi",
            referrer: "Yönlendiren URL",
            hostname: "Erişen cihazın ana makine adı",
            time: "Sunucu isteğinin zamanı",
          },
          p2: "Bu işleme, web sitesinin teknik işleyişini sağlamak amacıyla GDPR madde 6 paragraf 1 bent f kapsamında yapılmaktadır.",
        },
        cookies: {
          title: "Çerezler",
          p1: "Web sitemiz çerez kullanır. Çerezler cihazınızda saklanan küçük metin dosyalarıdır.",
          p2: "Bazı çerezler teknik olarak gereklidir; bazıları ise hizmetimizi analiz etmek veya geliştirmek için kullanılır.",
        },
        contact: {
          title: "İletişim",
          p1: "Bize e-posta veya iletişim formu aracılığıyla ulaştığınızda, verdiğiniz bilgiler talebinizi işlemek için saklanır.",
          p2: "Bunun hukuki dayanağı GDPR madde 6 paragraf 1 bent b'dir (sözleşme veya sözleşme öncesi önlemler).",
        },
        rights: {
          title: "İlgili kişi olarak haklarınız",
          p1: "GDPR kapsamında aşağıdaki haklara sahipsiniz:",
          items: {
            access: "Erişim hakkı (GDPR madde 15)",
            rectification: "Düzeltme hakkı (GDPR madde 16)",
            erasure: "Silme hakkı (GDPR madde 17)",
            restriction: "İşlemenin kısıtlanması hakkı (GDPR madde 18)",
            portability: "Veri taşınabilirliği hakkı (GDPR madde 20)",
            objection: "İtiraz hakkı (GDPR madde 21)",
          },
        },
        complaint: {
          title: "Bir denetim makamına şikâyette bulunma hakkı",
          p1: "Veri koruma ihlalleri durumunda yetkili bir veri koruma denetim makamına şikâyette bulunma hakkınız vardır.",
          p2: "Yetkili makam, şirketimizin kayıtlı bulunduğu Alman eyaletindeki denetim makamıdır.",
        },
        ssl: {
          title: "SSL veya TLS şifreleme",
          p1: "Bu site, güvenlik nedenleriyle ve gizli içeriklerin iletimini korumak amacıyla SSL veya TLS şifreleme kullanır.",
          p2: "Şifreli bağlantıyı, tarayıcı adres satırının \"http://\" yerine \"https://\" ile başlamasından anlayabilirsiniz.",
        },
        retention: {
          title: "Veri saklama süresi",
          p1: "Kişisel veriler yalnızca ilgili amaç için gerekli olduğu sürece veya yasal saklama süreleri boyunca tutulur.",
        },
      },
      backToLegal: "Yasal merkeze dön",
    },
    nutzungsbedingungenPage: {
      meta: {
        title: "Kullanım şartları | Bontera GmbH",
        description: "BONTERA GmbH web sitesi kullanım şartları.",
      },
      breadcrumb: {
        home: "Ana sayfa",
        legal: "Yasal merkez",
        terms: "Kullanım şartları",
      },
      hero: {
        eyebrow: "Yasal merkez",
        title: "Kullanım şartları",
        subtitle: "Web sitemizin ve hizmetlerimizin kullanımına ilişkin koşullar.",
      },
      sections: {
        scope: {
          title: "Kapsam",
          p1: "Bu kullanım şartları, BONTERA GmbH web sitesinin ve buna bağlı tüm hizmetlerin kullanımına uygulanır.",
          p2: "Bu web sitesine erişerek bu kullanım şartlarını kabul etmiş olursunuz.",
        },
        usage: {
          title: "Web sitesinin kullanımı",
          p1: "Bu web sitesi yalnızca hukuka uygun amaçlarla kullanılabilir. Siteyi işleyişini bozacak veya engelleyecek şekilde kullanmamayı kabul edersiniz.",
          p2: "Bu web sitesinden veri çıkarmak amacıyla otomatik sistemler veya yazılımlar kullanmak yasaktır.",
        },
        intellectualProperty: {
          title: "Fikri mülkiyet",
          p1: "Bu web sitesindeki tüm içerikler (metinler, görseller, grafikler, logolar, videolar) telif hakkıyla korunur ve BONTERA GmbH veya lisans sağlayıcılarının mülkiyetindedir.",
          p2: "İçeriğin çoğaltılması, dağıtılması veya başka şekilde kullanılması, açık yazılı izin olmadan yasaktır.",
        },
        liability: {
          title: "Sorumluluğun sınırlandırılması",
          p1: "Bu web sitesindeki içerikler mümkün olan en yüksek özenle hazırlanmıştır. Ancak BONTERA GmbH sağlanan bilgilerin doğruluğu, eksiksizliği veya güncelliği konusunda garanti vermez.",
          p2: "İçeriğin kullanımı kullanıcının kendi sorumluluğundadır. Kasıt veya ağır ihmal olmadığı sürece BONTERA GmbH'ye karşı tazminat talepleri hariç tutulur.",
        },
        changes: {
          title: "Kullanım şartlarında değişiklikler",
          p1: "BONTERA GmbH bu kullanım şartlarını her zaman değiştirme hakkını saklı tutar. Güncel sürüm her zaman bu sayfada görüntülenebilir.",
        },
        applicableLaw: {
          title: "Uygulanacak hukuk",
          p1: "Almanya Federal Cumhuriyeti hukuku uygulanır. Yasal olarak izin verildiği ölçüde yetkili mahkeme Halle Westfalen'dir.",
        },
      },
      backToLegal: "Yasal merkeze dön",
    },
    cookiePage: {
      meta: {
        title: "Çerez politikası | Bontera GmbH",
        description: "BONTERA GmbH çerez politikası - web sitemizde çerez kullanımına ilişkin bilgiler.",
      },
      breadcrumb: {
        home: "Ana sayfa",
        legal: "Yasal merkez",
        cookies: "Çerez politikası",
      },
      hero: {
        eyebrow: "Yasal merkez",
        title: "Çerez politikası",
        subtitle: "Web sitemizde çerez kullanımına ilişkin bilgiler.",
      },
      sections: {
        whatAreCookies: {
          title: "Çerezler nedir?",
          p1: "Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin doğru çalışmasına, kullanımın analiz edilmesine ve deneyimin iyileştirilmesine yardımcı olurlar.",
          p2: "Çerezler kişisel veri içermez ve bilgisayarınıza program çalıştırmaz veya virüs taşımaz.",
        },
        typesOfCookies: {
          title: "Çerez türleri",
          p1: "Web sitemizde aşağıdaki çerez türlerini kullanıyoruz:",
          necessary: {
            label: "Zorunlu çerezler",
            description: "Bu çerezler sitenin temel işlevleri için gereklidir ve devre dışı bırakılamaz.",
          },
          analytics: {
            label: "Analitik çerezler",
            description: "Bu çerezler ziyaretçilerin siteyle nasıl etkileşime geçtiğini anonim bilgiler toplayarak anlamamıza yardımcı olur.",
          },
          preferences: {
            label: "Tercih çerezleri",
            description: "Bu çerezler, dil tercihi gibi yaptığınız ayarların site tarafından hatırlanmasını sağlar.",
          },
        },
        manageCookies: {
          title: "Çerezleri yönetme",
          p1: "Çerez tercihlerinizi istediğiniz zaman tarayıcı ayarlarınız üzerinden yönetebilirsiniz. Çoğu tarayıcı çerezleri engellemenize veya silmenize olanak tanır.",
          p2: "Bazı çerezleri devre dışı bırakmanın bu web sitesinin işlevselliğini etkileyebileceğini lütfen unutmayın.",
        },
        thirdParty: {
          title: "Üçüncü taraf çerezleri",
          p1: "Web sitemiz, örneğin analiz amaçlarıyla üçüncü taraf çerezleri kullanabilir. Bu üçüncü tarafların yaptığı veri işleme kendi gizlilik politikalarına tabidir.",
        },
        contact: {
          title: "İletişim",
          p1: "Çerezlerin kullanımıyla ilgili sorularınız varsa bizimle şu adresten iletişime geçin:",
        },
      },
      backToLegal: "Yasal merkeze dön",
    },
  },
};
