/* French — the default locale, and the type that `en` and `ar` must satisfy.
   Deliberately not `as const`: literal types would force the other locales to
   repeat the French strings. */

export const fr = {
  localeName: 'Français',
  localeShort: 'FR',

  nav: {
    adAccounts: 'Comptes publicitaires',
    services: 'Services',
    work: 'Réalisations',
    pricing: 'Tarifs',
    resources: 'Ressources',
    about: 'À propos',
    cta: 'Demander un compte',
    menu: 'Menu',
    language: 'Langue',
    breadcrumb: "Fil d'Ariane",
    home: 'Accueil',
  },

  common: {
    requestAccount: 'Demander un compte publicitaire',
    bookAudit: 'Réserver un audit de 20 min',
    whatsappLine: 'Ou écrivez-nous sur WhatsApp —',
    from: 'À partir de',
    perMonth: '/mois',
    setup: 'Mise en place',
    minBudget: 'Budget média minimum',
    fee: 'Frais de compte',
    under24h: 'Moins de 24 h',
    h24to48: '24 à 48 h',
    mostRequested: 'Le plus demandé',
    platformsLabel: 'Comptes disponibles sur',
    heroImages: 'Images de présentation',
    readMore: 'En savoir plus',
    allPlatforms: 'Les cinq plateformes',
  },

  notFound: {
    metaTitle: 'Page introuvable (404) | eGrowth',
    title: 'Cette page n’existe pas.',
    lead:
      "Soit l'adresse a changé, soit nous avons cassé un lien. Dans les deux cas, voici les endroits où vous alliez probablement.",
    backHome: 'Retour à l’accueil',
    popular: 'Pages principales',
  },

  form: {
    title: 'Demander un compte',
    lead: 'Trois champs. Une personne nommée vous répond sur WhatsApp sous deux heures ouvrées.',
    product: 'Que vendez-vous ?',
    productPh: 'Cosmétiques, paiement à la livraison, Casablanca',
    budget: 'Budget publicitaire mensuel',
    budgetOptions: [
      'Moins de 4 000 MAD',
      '4 000 – 15 000 MAD',
      '15 000 – 50 000 MAD',
      'Plus de 50 000 MAD',
    ],
    whatsapp: 'Numéro WhatsApp',
    platform: 'Plateformes',
    platformNotSure: 'Pas encore sûr — conseillez-moi',
    optional: '— facultatif',
    submit: 'Demander le compte',
    note: "Pas de carte bancaire, aucun engagement à cette étape. Nous vous dirons pendant l'appel si nous pensons que vous ne devriez pas encore faire de publicité.",
  },

  footer: {
    tagline: 'Tech et marketing pour les marques et vendeurs e-commerce marocains.',
    morocco: 'Maroc',
    adAccounts: 'Comptes publicitaires',
    services: 'Services',
    build: 'Développement',
    resources: 'Ressources',
    company: 'Entreprise',
    disclaimer:
      "eGrowth est une agence indépendante et n'est pas affiliée à Meta, TikTok, Snap, Google ou LinkedIn. Les marques des plateformes appartiennent à leurs propriétaires.",
  },

  footerLinks: {
    metaAds: 'Gestion Meta Ads',
    googleAds: 'Gestion Google Ads',
    tiktokAds: 'Gestion TikTok Ads',
    ugc: 'Production vidéo UGC',
    cro: 'CRO et landing pages',
    tracking: 'Tracking et Conversions API',
    ecommerce: 'Boutique e-commerce',
    apps: 'Application mobile',
    websites: 'Site web et landing pages',
    vat: 'TVA sur les publicités Meta et TikTok',
    costs: 'Coûts publicitaires au Maroc',
    restricted: 'Compte publicitaire restreint',
    glossary: 'Glossaire',
    contact: 'Contact',
    terms: 'Conditions générales',
    privacy: 'Confidentialité (loi 09-08)',
  },

  home: {
    metaTitle: 'eGrowth — Comptes publicitaires agence et gestion Meta Ads au Maroc',
    metaDescription:
      'Comptes publicitaires agence sur Meta, TikTok, Snapchat, Google et LinkedIn pour les marques et vendeurs e-commerce marocains. Actifs en moins de 24 h, facturés en dirhams.',

    heroBadge: 'Comptes agence actifs en moins de 24 heures',
    heroTitle: 'Lancez vos publicités au Maroc sans les problèmes de compte.',
    heroLead:
      'eGrowth met à disposition des marques et des vendeurs e-commerce marocains des comptes publicitaires agence sur Meta, TikTok, Snapchat, Google et LinkedIn — puis construit la boutique, les créas et les campagnes qui transforment ce budget en commandes.',
    heroNote:
      'Vous gardez le Business Manager, le pixel et les données. Nous intervenons comme partenaire, pas comme propriétaire.',

    statAdSpend: 'de budget publicitaire géré pour des annonceurs marocains',
    statAccounts: 'comptes agence ouverts depuis',
    statRoas: 'ROAS médian sur nos clients e-commerce',
    statActivation: 'entre le brief signé et un compte actif qui dépense',

    servicesEyebrow: 'Ce que nous faisons',
    servicesTitle: 'Quatre choses, faites correctement.',
    servicesLead:
      "La plupart des annonceurs marocains perdent de l'argent à l'un de ces quatre endroits : ils n'arrivent pas à garder un compte actif, ils ne mesurent pas ce qui convertit vraiment, leur boutique ne tient pas le trafic, ou ils n'ont rien de bon à mettre dans la publicité. Nous couvrons les quatre — et c'est le but, parce que c'est en réalité le même problème.",

    svcAccountsTitle: 'Comptes publicitaires agence',
    svcAccountsBody:
      "Comptes Meta, TikTok, Snapchat, Google et LinkedIn facturés en dirhams, avec l'identifiant fiscal renseigné pour que la TVA de 20 % soit traitée correctement. Nous rejoignons votre Business Manager comme partenaire : le pixel, les audiences et le catalogue restent à vous.",
    svcAccountsLink: 'Comment fonctionnent les comptes',

    svcMediaTitle: 'Acquisition payante et conversion',
    svcMediaBody:
      'Structure de campagnes, tests créatifs en darija et en français, tracking côté serveur via la Conversions API, et landing pages conçues pour le paiement à la livraison. Reporting hebdomadaire sur les commandes confirmées, pas sur les impressions.',
    svcMediaChecks: [
      'Le taux de confirmation COD traité comme un KPI',
      'Aucune commission prélevée sur votre budget média',
      'Dépenses et marge sur un seul tableau de bord',
    ],

    svcBuildTitle: 'Boutique, application et site',
    svcBuildBody:
      "Le volet logiciel de la croissance. Une boutique e-commerce, une application mobile, un site vitrine ou les outils internes de votre équipe — construits par ceux qui achètent aussi le média, donc le tracking et la vitesse sont décidés dès le premier jour au lieu d'être rattrapés après.",
    svcBuildChecks: [
      'Shopify, WooCommerce ou développement sur mesure',
      'iOS et Android depuis une seule base de code',
      'Livraison documentée, sans dépendance imposée',
    ],
    svcBuildLink: 'Ce que nous construisons',

    svcUgcTitle: 'UGC et production créative',
    svcUgcBody:
      "Des créateurs marocains filment votre produit en darija, en français ou en arabe — puis la même équipe met ces vidéos dans le compte publicitaire et les juge au coût par commande. Nous ne vous vendons pas des vidéos. Nous cherchons celle qui vend.",
    svcUgcChecks: [
      'Format vertical, tourné au téléphone, adapté à chaque plateforme',
      "Droits d'utilisation publicitaire inclus, par écrit",
      'Les gagnantes remontées, les autres coupées, chaque semaine',
    ],
    svcUgcLink: 'Comment fonctionne UGC',

    bandEyebrow: 'Les comptes, en clair',
    bandTitle: 'Un compte que vous pouvez scaler, avec des conditions lisibles.',
    bandLead:
      "Personne ne vous vend un compte ici. Vous obtenez un accès à la diffusion via la structure agence d'eGrowth, avec un contrat qui précise ce qu'il advient de vos actifs, de votre solde et de vos données si vous partez. C'est toute la différence.",
    bandCta: 'Lire comment ça marche',
    bandCard1Title: 'Les actifs sont à vous',
    bandCard1Body: 'Pixel, catalogue, audiences et Page restent dans votre Business Manager.',
    bandCard2Title: 'Un plafond écrit',
    bandCard2Body:
      "Votre limite est écrite et relevée selon votre historique de dépenses — jamais promise comme « illimitée ».",
    bandCard3Title: 'Revue des politiques',
    bandCard3Body:
      'Nous vérifions les créas et les landing pages au regard des règles des plateformes avant le lancement.',
    bandCard4Title: 'TVA et facturation',
    bandCard4Body:
      'Factures marocaines en dirhams, avec la TVA de 20 % sur les publicités Meta et TikTok traitée correctement.',

    buildEyebrow: 'Développement',
    buildTitle: 'Votre boutique, votre application, votre site.',
    buildLead:
      "Vous ne devriez pas avoir à briefer une société pour les publicités et une autre pour ce vers quoi elles pointent. Nous construisons la destination, et comme la même équipe achète le média, elle est construite pour convertir et pour charger vite — pas seulement pour avoir l'air finie.",
    buildCta: 'Cadrer un projet',
    buildNote:
      "Pour situer : les agences marocaines annoncent entre 15 000 et 150 000 MAD pour une application mobile, et presque aucune n'explique ce qui fait la différence. Nous cadrons par écrit — écrans, back end, intégrations, comptes développeurs, maintenance — avant de donner un chiffre.",
    buildStore: 'Boutique e-commerce',
    buildStoreBody:
      "Shopify ou WooCommerce, pensée pour le paiement à la livraison marocain : un checkout en une page qui fonctionne sur un Android d'entrée de gamme, des textes en darija, l'intégration du transporteur, et le pixel plus la Conversions API vérifiés sur de vraies commandes test avant le lancement.",
    buildApp: 'Application mobile',
    buildAppBody:
      "iOS et Android depuis une seule base de code Flutter ou React Native, back-office, notifications push et publication sur les stores inclus. La mesure mobile est câblée dès la première version, pour que vous puissiez réellement faire de la publicité dessus.",
    buildSite: 'Site web et landing pages',
    buildSiteBody:
      "Le site vitrine en français, arabe et anglais, plus des landing pages de campagne que vous pouvez dupliquer vous-même. Statique, mis en cache à la périphérie, au vert sur les Core Web Vitals — ce site est la référence.",
    buildTools: 'Outils internes et automatisation',
    buildToolsBody:
      "Confirmation de commande sur WhatsApp pour réduire votre taux de refus COD, synchronisation CRM qui indique à la plateforme quels leads étaient réels, tableaux de bord stock et livraison, et les petits outils que votre équipe acquisition réclame.",
    buildWeeks: 'Délai courant',
    buildMvp: 'Première version',
    buildWeeksUnit: 'semaines',

    ugcEyebrow: 'UGC et créa',
    ugcTitle: 'La créa est devenue le ciblage.',
    ugcLead:
      "Meta et TikTok décident qui voit votre publicité à partir de la créa elle-même : la vidéo n'est plus ce qu'on fait après la stratégie, elle *est* la stratégie. Nous animons un réseau de créateurs marocains, nous le briefons sur votre offre réelle, puis nous testons le résultat dans votre propre compte.",
    ugcStep1: 'Brief et casting',
    ugcStep1Body:
      "Nous écrivons les angles, pas le créateur. Trois à cinq hypothèses sur les raisons d'acheter votre produit, puis nous castons des créateurs marocains qui ressemblent à l'acheteur — en darija, en français ou en arabe standard.",
    ugcStep2: 'Tournage et montage',
    ugcStep2Body:
      "Vertical, filmé au téléphone, adapté à la plateforme — en studio ou chez le créateur, selon ce qu'exige l'angle. Livré avec les accroches montées en trois versions, les sous-titres incrustés et les droits publicitaires par écrit.",
    ugcStep3: 'Tester, couper, scaler',
    ugcStep3Body:
      "C'est la partie qu'un studio vidéo ne peut pas faire. Chaque asset part en diffusion dans votre compte, est jugé au coût par commande confirmée et non aux vues, et l'accroche gagnante est remontée en quatre variantes la semaine suivante.",
    ugcStep3Badge: 'Dans votre compte',
    ugcCompareTitle: 'Pourquoi ne pas recruter un créateur directement ?',
    ugcCompareBody:
      "Vous pouvez, et les plateformes marocaines vous vendront une vidéo à partir d'environ 300 MAD, ou 900 à 1 200 MAD pour une production d'agence. Ce que vous achetez là, c'est un fichier. Ce dont vous avez besoin, c'est d'une accroche qui baisse votre coût par commande — et on ne la trouve qu'en en faisant tourner quinze les unes contre les autres dans un compte actif, en acceptant d'en jeter douze.",
    ugcStatVideos: 'vidéos par mois en formule growth',
    ugcStatCreators: 'créateurs dans le réseau marocain',
    ugcStatSpeed: 'du brief au premier montage, en formule growth',
    ugcStatPrice: 'par vidéo, à l’unité',

    processEyebrow: 'Comment on démarre',
    processTitle: 'Quatre étapes, une semaine.',
    step1: 'Appel de cadrage',
    step1Body:
      "Vingt minutes sur ce que vous vendez, votre marge et vos chiffres actuels. Vous repartez avec un budget chiffré, que vous signiez ou non.",
    step2: 'Compte et tracking',
    step2Body:
      "Compte actif, accès partenaire accordé, pixel et Conversions API vérifiés sur de vraies commandes test avant qu'un dirham ne soit dépensé.",
    step3: 'Créa et lancement',
    step3Body:
      "Trois à cinq angles UGC sur une seule offre, avec un budget calibré pour atteindre une lecture statistique plutôt que pour avoir l'air occupé.",
    step4: 'Scaler et rendre compte',
    step4Body:
      'Rapport hebdomadaire sur les dépenses, les commandes confirmées et la marge sur coûts variables. Revue mensuelle de ce qui est coupé et de ce qui est doublé.',
    stepDay1: 'Jour 1',
    stepDay2: 'Jour 2',
    stepDay37: 'Jours 3 à 7',
    stepOngoing: 'En continu',

    resultsEyebrow: 'Résultats',
    resultsTitle: 'Des chiffres avec la méthode qui va avec.',
    resultsAnonymised: 'Client sous accord de confidentialité',

    pricingEyebrow: 'Tarifs',
    pricingTitle: 'Publiés, en dirhams.',
    pricingLead:
      "Au Maroc, les frais de gestion vont de 2 000 à 25 000 MAD par mois, et presque personne ne dit lesquels. Nous publions les nôtres, et nous ne prenons jamais de commission sur votre budget média.",
    pricingCta: 'Voir tous les tarifs',
    tierAccount: 'Compte seul',
    tierAccountNote: 'Vous gérez les publicités vous-même',
    tierManaged: 'Compte et gestion',
    tierManagedNote: 'Nous gérons, vous validez',
    tierGrowth: 'Formule growth',
    tierGrowthNote: 'Publicités, UGC, CRO et tech',
    tierBuild: 'Projets de développement',
    tierBuildNote: 'Boutique, application ou site, au forfait',
    pricingNote:
      "Le budget média est payé à la plateforme, en votre nom, et n'est jamais inclus ci-dessus. Budget média de départ recommandé pour un test e-commerce : 4 000 à 8 000 MAD par mois.",

    faqTitle: 'Les questions qu’on nous pose vraiment',
    faq: [
      {
        q: 'Suis-je propriétaire du compte publicitaire ?',
        a: "Vous êtes propriétaire de tout ce qui compte : le Business Manager, la Page, le pixel, le catalogue et les audiences. Le compte publicitaire lui-même se trouve dans la structure agence d'eGrowth, parce que c'est ainsi que les plateformes autorisent une agence à diffuser pour le compte d'un client. Si vous partez, vos actifs restent les vôtres et nous retirons notre accès — les conditions sont écrites dans le contrat, pas laissées à la bonne volonté.",
      },
      {
        q: 'Pouvez-vous aussi construire la boutique, en plus de gérer les publicités ?',
        a: "Oui, et c'est généralement moins cher que de séparer les deux. Nous construisons des boutiques e-commerce, des applications mobiles, des sites vitrines et des outils internes — et comme la même équipe achète votre média, le tracking, la vitesse de page et le checkout sont conçus autour de la campagne au lieu d'être ajoutés après. Si vous avez déjà une boutique qui vous convient, nous l'auditons et la corrigeons plutôt que de vous vendre une refonte.",
      },
      {
        q: 'Pouvez-vous aussi produire les vidéos ?',
        a: "Oui. Nous animons un réseau de créateurs UGC marocains qui filment en darija, en français et en arabe, en studio ou chez eux. La différence avec une place de marché vidéo, c'est ce qui vient ensuite : chaque asset part en diffusion dans votre compte, est jugé au coût par commande confirmée, et l'accroche qui fonctionne est remontée en plusieurs variantes. Vous pouvez aussi acheter des vidéos à l'unité si vous ne voulez que les fichiers.",
      },
      {
        q: 'Qu’en est-il de la nouvelle TVA de 20 % sur les publicités Meta et TikTok au Maroc ?',
        a: "TikTok Ads applique une TVA de 20 % aux annonceurs marocains depuis le 1er août 2026, et Meta depuis le 1er octobre 2026. Elle s'applique lorsque le Maroc est le pays de vente du compte et qu'aucun identifiant fiscal n'est renseigné. Nos comptes disposent d'un identifiant fiscal valide, vous recevez une facture marocaine en dirhams, et nous expliquons à votre comptable le traitement en autoliquidation. Faites confirmer votre situation par votre comptable — nous ne sommes pas conseillers fiscaux.",
      },
      {
        q: 'Quel budget faut-il pour démarrer ?',
        a: "Pour un test e-commerce au Maroc, prévoyez 4 000 à 8 000 MAD de média par mois en plus des frais de gestion. Aux tarifs marocains actuels — environ 25 à 60 MAD de CPM et 1 à 3,5 MAD de CPC — cela achète assez de volume pour distinguer une créa qui fonctionne d'une créa qui échoue en deux semaines. En dessous d'environ 3 000 MAD par mois, vous payez pour deviner.",
      },
      {
        q: 'Mon compte a été restreint. Pouvez-vous le débloquer ?',
        a: "Parfois. Nous commençons par chercher pourquoi, parce qu'une restriction causée par la créa ou la landing page vous suivra sur n'importe quel nouveau compte. Nous vérifions l'offre au regard des règles de la plateforme, nous corrigeons la cause, et seulement ensuite nous vous installons sur un compte propre. Quiconque vous promet une immunité définitive contre les suspensions vous vend quelque chose qu'il ne peut pas livrer.",
      },
      {
        q: 'Quelles plateformes, et quels pays puis-je cibler ?',
        a: 'Meta, TikTok, Snapchat, Google et LinkedIn. Le ciblage ne se limite pas au Maroc — nous gérons des comptes pour des vendeurs marocains qui expédient vers d’autres marchés, avec des créas et des landing pages localisées pour chacun.',
      },
    ],

    ctaTitle: 'Dites-nous ce que vous vendez. Nous vous dirons ce que coûtent les 100 premières commandes.',
    ctaLead:
      "Un appel de vingt minutes, un chiffre réel, pas de présentation. Si nous ne sommes pas les bons, nous vous le dirons pendant l'appel.",
  },

  adAccounts: {
    metaTitle: 'Compte publicitaire agence au Maroc — Meta, TikTok, Snapchat, Google | eGrowth',
    metaDescription:
      "Comptes publicitaires agence vérifiés pour annonceurs marocains sur Meta, TikTok, Snapchat, Google et LinkedIn. Facture marocaine en dirhams, identifiant fiscal renseigné, actif en moins de 24 h.",
    heroTitle: 'Comptes publicitaires agence vérifiés pour annonceurs marocains',
    heroLead:
      "Diffusez sur Meta, TikTok, Snapchat, Google et LinkedIn via la structure agence d'eGrowth. Facturation en dirhams, facture émise au Maroc, identifiant fiscal renseigné pour que la TVA de 20 % soit traitée correctement. Actif en moins de 24 heures.",
    heroChecks: [
      'Votre Business Manager, votre Page, votre pixel — nous rejoignons comme partenaire',
      "Un plafond de dépenses écrit, relevé selon votre propre historique",
      'Facture marocaine, TVA de 20 % sur le média traitée correctement',
      'Un responsable de compte nommé sur WhatsApp, pas un formulaire de ticket',
    ],
    statAccounts: 'comptes ouverts',
    statActivation: "délai médian d'activation",
    statRetention: 'encore actifs après 12 mois',

    ownEyebrow: 'Ce que personne ne met par écrit',
    ownTitle: 'Ce qui vous appartient, et ce que nous détenons',
    ownLead:
      "Un compte publicitaire n'est pas une chose qu'on peut acheter. Ce qu'une agence peut légitimement faire, c'est vous laisser diffuser via sa structure. Voici exactement où passe la limite, et c'est la même limite que dans votre contrat.",
    ownYoursTag: 'À vous, toujours',
    ownYoursTitle: 'Vous en êtes pleinement propriétaire',
    ownOursTag: 'À nous, sous contrat',
    ownOursTitle: 'Nous les détenons pour vous',
    ownYours: [
      {
        t: 'Business Manager et Page',
        d: "Créés au nom de votre société. Nous y sommes partenaire et vous pouvez nous retirer à tout moment.",
      },
      {
        t: 'Pixel, CAPI et jeux de données',
        d: "Votre historique de conversions est l'actif le plus précieux que vous construisez. Il reste dans votre portefeuille, donc il survit à tout changement d'agence.",
      },
      {
        t: 'Audiences et catalogue',
        d: 'Les audiences personnalisées et similaires construites sur vos données, et le catalogue produits qui alimente vos publicités.',
      },
      {
        t: 'Fichiers créatifs',
        d: "Chaque asset que nous produisons vous est livré en format source, avec licence complète, à la fin du mois de sa production.",
      },
    ],
    ownOurs: [
      {
        t: 'Le compte publicitaire lui-même',
        d: "Il se trouve dans le portefeuille agence d'eGrowth. C'est le seul montage que les plateformes autorisent, et nous ne prétendrons pas le contraire.",
      },
      {
        t: 'La relation de facturation',
        d: 'La plateforme nous facture et nous vous facturons en dirhams avec la TVA indiquée. Vous recevez chaque semaine le rapport de dépenses de la plateforme elle-même.',
      },
      {
        t: 'Le plafond de dépenses',
        d: "Fixé par écrit à l'onboarding et revu chaque mois selon ce que vous avez réellement dépensé et payé.",
      },
      {
        t: 'La responsabilité vis-à-vis des règles',
        d: "C'est pourquoi nous examinons d'abord votre offre et vos landing pages, et pourquoi nous refusons les dossiers qui, selon nous, feront restreindre le compte.",
      },
    ],
    caution:
      "**Si un prestataire vous propose un « budget illimité » ou « zéro suspension », passez votre chemin.** Aucune agence ne contrôle ni l'un ni l'autre. Les conditions des plateformes encadrent le transfert de comptes, et un compte vendu pour contourner une limite de dépenses peut être fermé avec votre solde dedans. Tout ce qui est sur cette page est écrit pour que vous puissiez le vérifier dans la documentation des plateformes.",

    platformsTitle: 'Cinq plateformes, cinq pages',
    platformsLead:
      "Chaque plateforme a sa propre page, avec ses règles d'éligibilité, son délai de mise en place et ses frais. Voici les grandes lignes.",
    platformsUnsureTitle: 'Vous ne savez pas laquelle choisir ?',
    platformsUnsureBody:
      "Dites-nous le produit et la marge. Pour la plupart des e-commerces marocains, la réponse est Meta d'abord, TikTok ensuite, et Google seulement quand il y a de la recherche de marque à capter.",
    platformsUnsureCta: 'Demandez-nous par où commencer',

    noTitle: 'Qui nous refusons',
    noLead:
      "Un compte restreint pénalise tous les annonceurs de notre portefeuille. Nous sommes donc sélectifs à l'entrée plutôt que désolés après coup. Nous refusons :",
    noItems: [
      "Les produits qui ne peuvent pas être annoncés : compléments avec allégations santé, contrefaçons, tout ce qui exige une licence que vous n'avez pas.",
      'Les landing pages avec faux comptes à rebours, faux avis ou un prix qui change au checkout.',
      'Les annonceurs qui veulent continuer à diffuser la créa qui a fait bannir leur compte précédent.',
      "Quiconque refuse de mettre un vrai nom de société et un vrai process de livraison derrière l'offre.",
    ],

    faqTitle: 'Questions sur les comptes publicitaires',
    faq: [
      {
        q: 'Puis-je acheter un compte publicitaire chez vous ?',
        a: "Non, et personne d'autre ne peut vous en vendre un. Les conditions des plateformes encadrent la vente et le transfert de comptes publicitaires. Ce que nous fournissons, c'est un accès géré à la diffusion via notre structure agence, encadré par un contrat de service. Si un concurrent dit vous vendre un compte, il décrit une chose que la plateforme peut lui reprendre sans préavis.",
      },
      {
        q: 'Qu’advient-il de mon solde et de mes données si je pars ?',
        a: "Le solde prépayé non dépensé est remboursé après le règlement de votre dernière facture. Votre pixel, vos audiences, votre catalogue et vos créas sont déjà dans votre propre Business Manager : il n'y a rien à migrer, nous retirons simplement notre accès partenaire. Les termes exacts figurent dans les conditions de compte, que vous pouvez lire avant de signer quoi que ce soit.",
      },
      {
        q: 'Comment la TVA de 20 % est-elle traitée ?',
        a: "TikTok Ads facture 20 % de TVA aux annonceurs marocains depuis le 1er août 2026 et Meta depuis le 1er octobre 2026, lorsque le Maroc est le pays de vente et qu'aucun identifiant fiscal n'est renseigné. Nos comptes disposent d'un identifiant fiscal valide. Vous recevez une facture marocaine en dirhams avec la TVA indiquée, que votre comptable peut récupérer si vous êtes assujetti. Nous ne sommes pas conseillers fiscaux — faites confirmer le traitement applicable à votre entité.",
      },
      {
        q: 'Quelle est ma limite de dépenses ?',
        a: "Elle démarre à un montant aligné sur votre premier prépaiement et augmente avec votre historique de dépenses et de paiements — revue typiquement tous les 30 jours. Le chiffre est écrit dans votre document d'onboarding dès le premier jour. Personne ne peut vous donner un compte sans plafond ; un prestataire qui l'affirme ment ou va perdre le compte.",
      },
      {
        q: 'Puis-je utiliser le compte pour des marchés hors Maroc ?',
        a: "Oui. Le ciblage n'est pas limité au Maroc, et plusieurs de nos clients expédient depuis ici vers d'autres marchés. Chaque marché reçoit ses propres créas et sa propre landing page dans la bonne langue ; diffuser un seul ad set marocain vers une audience européenne, c'est la façon de gaspiller un budget.",
      },
    ],

    ctaTitle: 'Trois champs, et une réponse en deux heures.',
    ctaLead:
      "Si nous ne sommes pas adaptés à ce que vous vendez, nous vous le dirons et nous vous orienterons.",
  },

  platformPages: {
    metaTitlePattern: 'Compte publicitaire agence {platform} au Maroc | eGrowth',
    metaDescriptionPattern:
      'Compte publicitaire agence {platform} pour annonceurs marocains. Facturé en dirhams, identifiant fiscal renseigné, responsable de compte nommé. {setup}.',
    titlePattern: 'Compte publicitaire agence {platform}',
    whyTitle: 'Pourquoi cette plateforme',
    bestForTitle: 'À qui ça convient',
    eligibilityTitle: 'Éligibilité et mise en place',
    backToAll: 'Voir les cinq plateformes',

    meta: {
      tagline: 'Facebook et Instagram. Le défaut pour l’e-commerce marocain.',
      why: "Meta reste le point de départ de presque tous les e-commerces marocains : le volume est là, le ciblage par la créa fonctionne, et le paiement à la livraison se convertit bien dans le fil. C'est aussi la plateforme où les problèmes de compte font le plus mal — un Business Manager restreint arrête toute l'activité du jour au lendemain, et c'est la raison première pour laquelle les annonceurs nous appellent.",
      bestFor: [
        'E-commerce en paiement à la livraison avec une offre claire',
        'Marques qui ont déjà un historique de pixel à exploiter',
        'Toute activité qui a besoin de volume de test rapide sur plusieurs créas',
      ],
      eligibility:
        "Nous avons besoin de votre Business Manager (ou nous le créons à votre nom), de la Page, et d'un accès au domaine pour la vérification. Le pixel et la Conversions API sont vérifiés sur de vraies commandes test avant le premier dirham dépensé.",
    },
    tiktok: {
      tagline: 'La portée la moins chère au Maroc aujourd’hui, et la discipline créative la plus exigeante.',
      why: "TikTok offre actuellement le coût pour mille le plus bas du marché marocain, mais il ne pardonne pas une créa faible : sans accroche qui tient les trois premières secondes, le budget part sans rien produire. C'est une plateforme pour qui accepte de tourner beaucoup et de couper vite — ce qui est exactement la façon dont nous travaillons l'UGC. La TVA de 20 % s'y applique depuis le 1er août 2026.",
      bestFor: [
        'Produits qui se démontrent en vidéo courte',
        'Audiences de moins de 35 ans',
        'Annonceurs prêts à produire plusieurs créas par semaine',
      ],
      eligibility:
        "Compte ouvert dans notre Business Center avec accès partenaire pour vous. Spark Ads et catalogue sont pris en charge, ce qui suppose un compte TikTok de marque actif — nous vous aidons à le mettre en place si vous n'en avez pas.",
    },
    snapchat: {
      tagline: 'La meilleure portée sur les moins de 25 ans au Maroc, et régulièrement ignorée.',
      why: "Snapchat reste très utilisé par les jeunes Marocains et presque aucune agence locale ne le propose sérieusement, ce qui laisse un inventaire peu disputé et des coûts d'acquisition souvent inférieurs à Meta sur les mêmes audiences. C'est rarement la première plateforme d'un annonceur, mais c'est souvent la deuxième la plus rentable.",
      bestFor: [
        'Mode, cosmétique et accessoires visant les 16-25 ans',
        'Annonceurs qui saturent déjà leurs audiences Meta',
        'Lancements de produit avec un visuel fort',
      ],
      eligibility:
        'Mise en place en 24 à 48 heures : la vérification Snap prend un peu plus de temps que les autres. Il faut un domaine vérifié et le pixel Snap installé.',
    },
    google: {
      tagline: 'Search, Shopping et YouTube sous notre compte administrateur.',
      why: "Google capte une demande qui existe déjà au lieu de la créer, ce qui en fait la plateforme la plus rentable quand il y a du volume de recherche sur votre catégorie ou votre marque — et la plus décevante quand il n'y en a pas. Nous vérifions le volume réel avant de vous le recommander, plutôt que de vous vendre les trois plateformes par principe.",
      bestFor: [
        'Catégories où les gens cherchent déjà le produit',
        'Marques avec de la recherche de marque à capter',
        'Services B2B et activités à panier élevé',
      ],
      eligibility:
        "Compte ouvert sous notre MCC avec accès pour vous. Pour Shopping, il faut un flux produits valide et un Merchant Center — nous le configurons si besoin.",
    },
    linkedin: {
      tagline: 'Pour le B2B et le recrutement. Cher au clic, bon marché au rendez-vous qualifié.',
      why: "LinkedIn a le coût par clic le plus élevé des cinq plateformes et c'est sans importance si votre valeur client le justifie : le ciblage par fonction et par entreprise n'existe nulle part ailleurs. Il ne fonctionne qu'avec une définition unique et écrite du lead qualifié, et un CRM qui renvoie à la plateforme lesquels étaient réels.",
      bestFor: [
        'Services B2B avec un cycle de vente long',
        'Recrutement de profils spécialisés',
        'Logiciels et services professionnels',
      ],
      eligibility:
        'Mise en place en 24 à 48 heures. Il faut une Page entreprise LinkedIn et, idéalement, un CRM dans lequel nous pouvons renvoyer la qualification des leads.',
    },
  },

  servicesHub: {
    metaTitle: 'Services — acquisition payante, développement et UGC au Maroc | eGrowth',
    metaDescription:
      "Gestion Meta Ads, Google Ads et TikTok Ads, CRO, tracking côté serveur, boutiques e-commerce, applications mobiles, sites web et production vidéo UGC pour les annonceurs marocains.",
    title: 'Tout ce qui se trouve entre un budget et une commande.',
    lead:
      "Nous vendons trois choses, et elles se tiennent : l'achat média qui amène le trafic, le produit numérique vers lequel il arrive, et la créa qui le fait cliquer. La plupart des annonceurs achètent les trois séparément et paient la différence en commandes perdues.",
    groupTitle: {
      media: 'Acquisition et mesure',
      build: 'Ce que nous construisons',
      creative: 'Créa et contenu',
    },
    groupLead: {
      media:
        "Les campagnes, et l'infrastructure qui permet de savoir lesquelles ont réellement fonctionné.",
      build:
        'La destination de vos publicités, construite par ceux qui achètent le média — donc rapide et mesurée dès le premier jour.',
      creative:
        "Les vidéos et les visuels qui décident aujourd'hui de qui voit votre publicité.",
    },
    ctaTitle: 'Dites-nous où ça coince, et nous vous dirons par quoi commencer.',
    ctaLead:
      "Vous n'avez pas besoin des neuf. Vingt minutes suffisent généralement pour identifier les deux qui comptent pour vous.",
  },

  servicePages: {
    groupLabel: {
      media: 'Acquisition payante',
      build: 'Développement',
      creative: 'Créa',
    },
    whyTitle: 'Pourquoi ça compte',
    getTitle: 'Ce que vous obtenez',
    howTitle: 'Comment on démarre',
    relatedTitle: 'Voir aussi',
    allServices: 'Tous les services',

    metaAds: {
      title: 'Gestion Meta Ads',
      metaTitle: 'Agence Meta Ads Maroc — gestion Facebook et Instagram | eGrowth',
      metaDescription:
        'Agence Meta Ads au Maroc : structure de campagnes, créas en darija, tracking côté serveur et reporting sur les commandes confirmées. Tarifs publiés en dirhams.',
      tagline:
        'Facebook et Instagram gérés sur une seule question : combien coûte une commande confirmée ?',
      why: "Meta est la plateforme où la majorité des e-commerces marocains font leur chiffre, et aussi celle où l'on gaspille le plus. Les deux causes habituelles sont un compte trop fragmenté — quinze ad sets qui se disputent le même budget sans jamais sortir de la phase d'apprentissage — et un tracking qui remonte des « achats » que personne n'a confirmés au téléphone. Nous reconstruisons la structure autour de l'offre, pas autour du tableau de bord, et nous câblons la mesure sur la commande réellement livrée.",
      whatYouGet: [
        'Une structure de campagnes volontairement simple, avec un budget par ad set suffisant pour sortir de la phase d’apprentissage',
        'Trois à cinq angles créatifs testés par cycle, écrits en darija ou en français selon l’audience',
        'Pixel et Conversions API vérifiés sur de vraies commandes test, avec déduplication',
        'Un rapport hebdomadaire sur les commandes confirmées et la marge, pas sur le ROAS déclaré par la plateforme',
      ],
    },
    googleAds: {
      title: 'Gestion Google Ads',
      metaTitle: 'Agence Google Ads Maroc — Search, Shopping et YouTube | eGrowth',
      metaDescription:
        'Agence Google Ads au Maroc : Search, Shopping, Performance Max et YouTube. Nous vérifions le volume de recherche réel avant de vous recommander la plateforme.',
      tagline: 'Capter une demande qui existe déjà, au lieu de la créer.',
      why: "Google est la plateforme la plus rentable quand il y a du volume de recherche sur votre catégorie, et la plus décevante quand il n'y en a pas. Beaucoup d'annonceurs marocains paient pour des campagnes Search sur des mots-clés que personne ne tape, ou laissent Performance Max dépenser l'essentiel du budget sur du remarketing déguisé en acquisition. Nous commençons par mesurer le volume réel, puis nous séparons marque et hors-marque pour que vous sachiez ce que vous payez.",
      whatYouGet: [
        'Une vérification du volume de recherche réel avant tout engagement budgétaire',
        'Campagnes marque et hors-marque séparées, pour ne pas payer pour des clients déjà acquis',
        'Shopping avec un flux produits corrigé : titres, GTIN, disponibilité, prix',
        'Exclusions et termes de recherche revus chaque semaine, pas chaque trimestre',
      ],
    },
    tiktokAds: {
      title: 'Gestion TikTok Ads',
      metaTitle: 'Agence TikTok Ads Maroc — gestion de campagnes et créas | eGrowth',
      metaDescription:
        'Agence TikTok Ads au Maroc : production créative en continu, Spark Ads, catalogue et mesure sur la commande confirmée. La TVA de 20 % est traitée correctement.',
      tagline: 'La portée la moins chère du marché, à condition de produire assez de créas.',
      why: "TikTok offre aujourd'hui le coût pour mille le plus bas au Maroc, mais la plateforme ne pardonne pas une créa faible : sans accroche qui tient les trois premières secondes, le budget part sans rien produire. Ce n'est donc pas une plateforme qu'on « optimise », c'est une plateforme qu'on alimente. Nous la couplons systématiquement à la production UGC, parce que gérer TikTok sans flux créatif revient à gérer une campagne sans budget.",
      whatYouGet: [
        'Un flux créatif régulier plutôt que trois vidéos relancées pendant un trimestre',
        'Spark Ads depuis votre compte de marque, pour conserver les preuves sociales',
        'Catalogue et événements web configurés et vérifiés',
        'Les accroches gagnantes remontées en variantes, les perdantes coupées chaque semaine',
      ],
    },
    ugc: {
      title: 'Production vidéo UGC',
      metaTitle: 'UGC Maroc — créateurs vidéo pour TikTok, Reels et Snapchat | eGrowth',
      metaDescription:
        "Vidéos UGC au Maroc avec des créateurs locaux en darija, français et arabe. Droits publicitaires inclus, et chaque vidéo est testée dans votre compte au coût par commande.",
      tagline:
        'Des créateurs marocains, et surtout ce qui se passe après : le test dans votre compte.',
      why: "Le marché marocain de l'UGC vend des fichiers : entre 300 et 1 200 MAD la vidéo selon la plateforme ou l'agence. Le problème est qu'une vidéo n'a pas de valeur en soi — c'est l'accroche qui baisse votre coût par commande qui en a, et on ne la trouve qu'en faisant tourner une quinzaine de variantes les unes contre les autres dans un compte actif. C'est exactement ce qu'un studio vidéo ne peut pas faire pour vous, et c'est tout l'intérêt de l'acheter au même endroit que l'achat média.",
      whatYouGet: [
        'Casting de créateurs marocains correspondant à votre acheteur, en darija, français ou arabe',
        'Tournage en studio ou chez le créateur, selon ce qu’exige l’angle',
        'Chaque accroche montée en trois versions, sous-titres incrustés, formats verticaux',
        'Droits d’utilisation publicitaire écrits, et les fichiers sources livrés',
      ],
    },
    cro: {
      title: 'CRO et landing pages',
      metaTitle: 'CRO et landing pages au Maroc — paiement à la livraison | eGrowth',
      metaDescription:
        "Optimisation du taux de conversion pour le e-commerce marocain : checkout en une page, copie en darija, et travail sur le taux de confirmation des commandes COD.",
      tagline: 'Au Maroc, la conversion ne s’arrête pas au clic sur « commander ».',
      why: "Dans un modèle de paiement à la livraison, une commande passée n'est pas une vente : entre 20 et 40 % ne sont jamais confirmées au téléphone, et ce taux-là coûte bien plus cher que le taux de conversion de la page. Nous travaillons donc les deux bouts — la page qui fait commander, et le processus qui transforme la commande en livraison acceptée. C'est le travail que presque personne ne facture au Maroc, et c'est souvent celui qui rend une campagne rentable.",
      whatYouGet: [
        'Checkout en une page, testé sur un Android d’entrée de gamme et une connexion lente',
        'Copie et objections traitées en darija, pas une traduction du français',
        'Flux de confirmation WhatsApp pour récupérer les commandes hésitantes',
        'Tests mesurés sur la commande confirmée, jamais sur le clic',
      ],
    },
    tracking: {
      title: 'Tracking et Conversions API',
      metaTitle: 'Tracking publicitaire et Conversions API au Maroc | eGrowth',
      metaDescription:
        'Mise en place du pixel, de la Conversions API et du tracking côté serveur, vérifiée sur de vraies commandes test. Vous gardez la propriété du pixel et des données.',
      tagline: 'Si la mesure est fausse, tout ce qui en découle est faux.',
      why: "La majorité des comptes publicitaires que nous reprenons remontent des chiffres faux : événements comptés deux fois, achats déclenchés au chargement de la page de remerciement même quand le paiement a échoué, ou aucune remontée de ce qui s'est passé après la commande. L'algorithme optimise alors vers le mauvais signal, et vous payez pour du volume qui ne se livre pas. Nous reconstruisons la mesure côté serveur et nous la vérifions sur de vraies commandes avant de laisser une campagne tourner.",
      whatYouGet: [
        'Pixel et Conversions API en parallèle, avec déduplication par identifiant d’événement',
        'Événements vérifiés un par un sur de vraies commandes test',
        'Remontée des conversions hors ligne : commande confirmée, livrée, retournée',
        'Tout dans votre Business Manager, documenté, et transférable sans nous',
      ],
    },
    ecommerce: {
      title: 'Boutique e-commerce',
      metaTitle: 'Agence Shopify et WooCommerce au Maroc — boutiques COD | eGrowth',
      metaDescription:
        "Création de boutiques Shopify et WooCommerce pour le marché marocain : paiement à la livraison, checkout rapide, intégration transporteur et tracking vérifié.",
      tagline: 'Une boutique construite pour être annoncée, pas seulement pour être livrée.',
      why: "Une boutique e-commerce marocaine a des contraintes que les thèmes génériques ignorent : le paiement à la livraison comme mode principal, des téléphones Android modestes, des connexions lentes, et des acheteurs qui lisent la darija. Chaque seconde de chargement supplémentaire se paie en commandes perdues sur du trafic que vous avez acheté. Nous construisons la boutique en sachant ce que coûte ce trafic, parce que c'est nous qui l'achetons.",
      whatYouGet: [
        'Shopify ou WooCommerce, avec un thème allégé plutôt qu’un thème surchargé de modules',
        'Checkout COD en une page, champs réduits au strict nécessaire',
        'Intégration du transporteur et export des commandes',
        'Pixel, Conversions API et catalogue vérifiés avant le lancement',
      ],
    },
    apps: {
      title: 'Développement d’application mobile',
      metaTitle: 'Développement d’application mobile au Maroc — iOS et Android | eGrowth',
      metaDescription:
        'Développement d’applications iOS et Android au Maroc depuis une base de code Flutter ou React Native. Cadrage écrit, back-office, publication sur les stores et mesure mobile.',
      tagline: 'iOS et Android depuis une seule base de code, avec la mesure dès la première version.',
      why: "Les devis d'application au Maroc vont de 15 000 à 150 000 MAD et presque personne n'explique ce qui fait la différence : le nombre d'écrans, le back end à développer, les fonctions natives utilisées, et la maintenance. Nous cadrons tout cela par écrit avant de donner un chiffre. Et parce que nous achetons aussi du média, nous installons la mesure mobile dans la première version — sans quoi vous aurez une application que vous ne pouvez pas promouvoir.",
      whatYouGet: [
        'Une seule base de code Flutter ou React Native pour iOS et Android',
        'Back-office, notifications push et publication sur les deux stores',
        'Mesure mobile et attribution câblées dès la première version',
        'Un cadrage écrit avant le devis, et le code livré avec sa documentation',
      ],
    },
    websites: {
      title: 'Site web et landing pages',
      metaTitle: 'Création de site web multilingue au Maroc — français, arabe, anglais | eGrowth',
      metaDescription:
        'Sites vitrines et landing pages multilingues au Maroc : français, arabe et anglais, statiques, mis en cache à la périphérie, au vert sur les Core Web Vitals.',
      tagline: 'Statique, trilingue, et au vert sur les Core Web Vitals. Ce site en est la preuve.',
      why: "Un site d'entreprise marocain doit généralement vivre en trois langues, se charger sur une connexion mobile médiocre, et être trouvé par Google autant que par un assistant IA. Les trois exigences poussent vers la même réponse technique : des pages statiques, pré-rendues, sans JavaScript au premier affichage, avec un hreflang correct et un balisage lisible par une machine. C'est exactement la façon dont ce site est construit, et le code est public.",
      whatYouGet: [
        'Français, arabe et anglais, avec un vrai RTL et un hreflang réciproque',
        'Pages statiques mises en cache à la périphérie, sans JavaScript au premier affichage',
        'Des landing pages de campagne que votre équipe peut dupliquer seule',
        'Un budget de performance écrit, vérifié à chaque mise en production',
      ],
    },
  },

  resourcesHub: {
    metaTitle: 'Ressources — TVA, coûts publicitaires et comptes restreints au Maroc | eGrowth',
    metaDescription:
      "Guides pour les annonceurs marocains : la TVA de 20 % sur les publicités Meta et TikTok, les coûts réels d'acquisition au Maroc, et quoi faire quand un compte est restreint.",
    title: 'Les réponses que nous donnons de toute façon au téléphone.',
    lead:
      "Chaque guide répond à sa question dès les premières lignes, date ses chiffres et cite ses sources. Si vous repartez avec la réponse sans nous appeler, le guide a fait son travail.",
    guidesTitle: 'Les guides',
    glossaryTitle: 'Glossaire',
    glossaryLead:
      'Les termes qui reviennent dans un appel sur deux, définis en une phrase chacun.',
    ctaTitle: 'Une question qui n’est pas traitée ici ?',
    ctaLead: 'Écrivez-nous. Si la question revient trois fois, elle devient un guide.',
  },

  guides: {
    updatedLabel: 'Mis à jour le',
    summaryLabel: 'L’essentiel',
    sourcesLabel: 'Sources',
    moreLabel: 'Autres guides',

    vat: {
      title: 'La TVA de 20 % sur les publicités Meta et TikTok au Maroc',
      metaTitle: 'TVA 20 % sur les publicités Meta et TikTok au Maroc — guide 2026 | eGrowth',
      metaDescription:
        'TikTok applique une TVA de 20 % aux annonceurs marocains depuis le 1er août 2026, Meta depuis le 1er octobre 2026. Qui paie, comment renseigner son identifiant fiscal, et ce que change l’autoliquidation.',
      standfirst:
        "Depuis le 1er octobre 2026, Meta facture 20 % de TVA aux annonceurs marocains. TikTok le fait depuis le 1er août. Voici ce qui déclenche la taxe, comment l'éviter légalement, et ce que cela change réellement à votre coût par commande.",
      summary: [
        '**TikTok Ads : TVA de 20 % depuis le 1er août 2026. Meta : depuis le 1er octobre 2026.**',
        "La taxe s'applique lorsque **le Maroc est le pays de vente du compte et qu'aucun numéro d'identification fiscale n'est renseigné**.",
        "Renseigner votre identifiant fiscal dans les paramètres de paiement fait apparaître le numéro sur les reçus et, lorsque les conditions fiscales sont remplies, la TVA n'est plus ajoutée directement aux achats publicitaires.",
        "**Cela ne supprime pas la TVA.** Le mécanisme d'autoliquidation reste applicable : si vous êtes assujetti, vous calculez et déclarez la TVA vous-même dans votre déclaration périodique.",
        "Le dispositif s'inscrit dans le régime de taxation des services numériques entré en vigueur le 11 juin 2026.",
      ],
      sections: [
        {
          h: 'Qu’est-ce qui a changé exactement, et depuis quand ?',
          body: [
            "Deux dates comptent. **TikTok Ads applique une TVA de 20 % aux annonceurs marocains depuis le 1er août 2026.** **Meta a suivi le 1er octobre 2026.** Si vous avez vu votre facture publicitaire augmenter d'un cinquième ce mois-ci sans avoir touché à vos budgets, c'est l'explication.",
            "Les deux plateformes appliquent le même déclencheur : la taxe concerne les comptes publicitaires pour lesquels le Maroc est indiqué comme pays de vente et dont le numéro d'identification fiscale n'est pas renseigné. Dans cette configuration, la TVA est ajoutée au coût de vos achats publicitaires.",
            "Ce n'est pas une initiative des plateformes. Le changement découle du régime marocain de taxation des services numériques entré en vigueur le 11 juin 2026, qui oblige les entreprises étrangères sans établissement au Maroc à s'immatriculer auprès de la DGI pour collecter la TVA sur les services vendus à des clients marocains.",
          ],
        },
        {
          h: 'Qui paie, et dans quel cas ?',
          body: [
            "Si votre identifiant fiscal n'est pas renseigné sur le compte, la plateforme ajoute 20 % à chaque achat publicitaire. C'est le cas le plus coûteux, et c'est le cas par défaut pour la plupart des comptes ouverts avec une carte personnelle.",
            "Si votre identifiant fiscal est renseigné, le numéro apparaît sur les reçus et la plateforme n'ajoute pas directement la TVA à vos achats publicitaires lorsque les conditions fiscales prévues sont remplies. **Mais la charge fiscale ne disparaît pas pour autant.** Le mécanisme d'autoliquidation reste en jeu : en tant qu'assujetti marocain, c'est à vous de calculer la TVA à 20 % sur la facture hors taxe du prestataire étranger et de la déclarer dans votre déclaration périodique.",
            "La différence entre les deux situations n'est donc pas « payer ou ne pas payer ». C'est « payer immédiatement, en trésorerie, sans possibilité de récupération propre » contre « déclarer et, si vous êtes assujetti, récupérer ». Pour une entreprise structurée, l'écart est considérable.",
          ],
        },
        {
          h: 'Comment renseigner votre identifiant fiscal',
          body: [
            "Le champ se trouve dans les paramètres de paiement de votre compte publicitaire, chez Meta comme chez TikTok. Vous y saisissez votre identifiant fiscal marocain, celui qui figure sur vos déclarations.",
            "Une précision importante, et c'est là que beaucoup d'annonceurs se trompent : l'immatriculation des plateformes sur la plateforme « Taxation on Digital Services » de la DGI concerne **leur** identifiant fiscal, pas le vôtre. Les communications publiques ne précisent pas toujours quel numéro un annonceur doit saisir dans le champ prévu. Faites valider le numéro et le traitement par votre comptable avant de le renseigner.",
            "Si vous n'êtes pas assujetti à la TVA au Maroc — un auto-entrepreneur sous le régime forfaitaire, par exemple — votre situation est différente et l'autoliquidation ne s'applique pas de la même manière. C'est précisément le genre de cas où une réponse générique sur un blog vous coûte de l'argent.",
          ],
        },
        {
          h: 'Ce que ça change pour votre coût par commande',
          body: [
            "Faites le calcul avant de relancer vos campagnes. Sur un budget média de 10 000 MAD par mois, 20 % représentent 2 000 MAD. Si votre coût par commande confirmée était de 55 MAD, il passe mécaniquement à 66 MAD tant que la taxe s'ajoute sans être récupérée — soit 20 % de marge en moins sur chaque vente, sans qu'aucune de vos campagnes n'ait changé.",
            "Pour un e-commerce en paiement à la livraison, avec des marges déjà serrées par les retours et les refus, c'est souvent la différence entre une offre rentable et une offre qui ne l'est plus. Nous avons vu des annonceurs continuer à diffuser pendant des semaines en se demandant pourquoi leur rentabilité s'était effondrée.",
            "La bonne réaction n'est pas de couper les budgets. C'est de régulariser la situation fiscale du compte, puis de recalculer votre coût par commande cible avec la taxe intégrée, et d'ajuster vos prix ou votre offre en conséquence.",
          ],
        },
        {
          h: 'Ce que nous faisons à votre place',
          body: [
            "Les comptes publicitaires que nous mettons à disposition disposent d'un identifiant fiscal valide. Vous recevez une facture marocaine en dirhams, avec la TVA indiquée séparément, que votre comptable peut traiter normalement et récupérer si vous êtes assujetti.",
            "Nous ne sommes pas conseillers fiscaux et nous ne prétendons pas l'être. Ce que nous faisons, c'est éliminer la situation la plus coûteuse — un compte sans identifiant fiscal qui se fait taxer 20 % sans justificatif exploitable — et fournir à votre comptable des documents qu'il peut utiliser.",
          ],
        },
      ],
      faqTitle: 'Questions sur la TVA publicitaire',
      faq: [
        {
          q: 'La TVA de 20 % s’applique-t-elle aussi à Google Ads et Snapchat ?',
          a: "Le régime de taxation des services numériques marocain couvre les services numériques vendus à des clients marocains de façon générale, et plusieurs plateformes ont déjà annoncé leur mise en conformité. À la date de ce guide, les annonces publiques confirmées concernent TikTok Ads depuis le 1er août 2026 et Meta depuis le 1er octobre 2026. Vérifiez les paramètres de facturation de chaque compte que vous utilisez : le champ d'identifiant fiscal y est généralement déjà présent.",
        },
        {
          q: 'Puis-je récupérer la TVA déjà payée sur mes publicités ?',
          a: "Cela dépend de votre régime et de la nature des justificatifs dont vous disposez. Si vous êtes assujetti à la TVA au Maroc et que vous détenez des factures en règle, votre comptable peut normalement traiter la taxe en autoliquidation et la déduire. Si vous avez diffusé depuis un compte sans identifiant fiscal, avec des reçus au nom d'un particulier, c'est beaucoup plus difficile. Parlez-en à votre comptable avec vos relevés en main.",
        },
        {
          q: 'Faut-il arrêter les campagnes le temps de régulariser ?',
          a: "Non, dans la plupart des cas. Renseigner l'identifiant fiscal ne nécessite pas d'interrompre la diffusion. Ce qu'il faut faire en revanche, c'est recalculer immédiatement votre coût par commande cible en intégrant la taxe, pour ne pas continuer à scaler une offre devenue non rentable.",
        },
        {
          q: 'Un compte agence évite-t-il la TVA ?',
          a: "Non, et personne ne devrait vous le vendre comme tel. Un compte agence avec identifiant fiscal valide change la façon dont la taxe est facturée et justifiée — vous recevez une facture marocaine exploitable comptablement — mais il ne fait pas disparaître la TVA. Toute offre qui promet d'« échapper » à la taxe devrait vous faire fuir.",
        },
      ],
      disclaimer:
        "Ce guide est une synthèse d'informations publiques à la date indiquée, destinée aux annonceurs. Il ne constitue pas un conseil fiscal. La situation dépend de votre régime, de votre statut d'assujetti et de votre documentation : faites valider votre cas par votre comptable ou votre conseil fiscal.",
      ctaTitle: 'Nos comptes ont un identifiant fiscal valide et facturent en dirhams.',
      ctaLead:
        'Si votre compte actuel se fait taxer 20 % sans justificatif exploitable, c’est réparable. Vingt minutes suffisent pour faire le point.',
    },

    costs: {
      title: 'Ce que coûte réellement la publicité en ligne au Maroc',
      metaTitle: 'Prix de la publicité Facebook, Instagram et TikTok au Maroc — chiffres 2026 | eGrowth',
      metaDescription:
        'CPM, CPC, frais d’agence, budgets de départ et coût par commande au Maroc. Chiffres datés d’octobre 2026, avec les sources, et ce que les agences ne publient pas.',
      standfirst:
        "Des chiffres datés, avec leurs sources, et la distinction que presque personne ne fait clairement : ce que vous payez à la plateforme, ce que vous payez à l'agence, et ce que vous coûte réellement une commande livrée.",
      summary: [
        '**CPM au Maroc : environ 25 à 60 MAD. CPC : environ 1,0 à 3,5 MAD.** Mesuré en octobre 2026.',
        '**Frais de gestion d’agence : de 1 500 à 25 000 MAD par mois** selon les sources publiques. La fourchette la plus courante se situe entre 2 000 et 8 000 MAD.',
        '**Budget média de départ recommandé pour un test e-commerce : 4 000 à 8 000 MAD par mois.** En dessous d’environ 3 000 MAD, vous payez pour deviner.',
        '**Application mobile : de 15 000 à 150 000 MAD** selon le périmètre. **Vidéo UGC : de 300 à 1 200 MAD** l’unité.',
        'Le chiffre qui compte vraiment n’est aucun de ceux-là : c’est votre **coût par commande confirmée**, et presque personne ne le publie.',
      ],
      sections: [
        {
          h: 'Ce que coûte atteindre un Marocain',
          body: [
            "Au Maroc, les coûts d'inventaire publicitaire se situent actuellement autour de **25 à 60 MAD pour mille impressions** et **1,0 à 3,5 MAD par clic**, selon la plateforme, la saison et surtout la qualité de votre créa. Ces chiffres ont été relevés en octobre 2026 ; traitez-les comme un ordre de grandeur, pas comme un tarif.",
            "La variation à l'intérieur de ces fourchettes dépend moins de votre « optimisation » que de votre contenu. Une accroche qui retient l'attention fait baisser le coût pour mille parce que la plateforme la distribue plus volontiers ; une créa faible se paie deux fois, en diffusion plus chère et en taux de clic plus bas.",
            "TikTok offre en général le coût pour mille le plus bas du marché, Meta le meilleur équilibre entre volume et intention d'achat, Snapchat le meilleur accès aux moins de 25 ans, et Google le coût par clic le plus élevé mais la meilleure intention.",
          ],
        },
        {
          h: 'Ce que facture une agence marocaine',
          body: [
            "Les frais de gestion publiés par les agences marocaines vont de **1 500 à 25 000 MAD par mois**, hors budget publicitaire. La fourchette la plus fréquemment annoncée se situe entre **2 000 et 8 000 MAD par mois** pour la gestion de campagnes, et les packs SEO tournent souvent autour de 3 900 à 5 900 MAD mensuels.",
            "Cette dispersion n'a presque aucun rapport avec la qualité. Elle reflète surtout le nombre de plateformes gérées, le volume de créa produit, et la présence ou non d'un vrai travail de mesure. Un prestataire à 2 000 MAD qui ne produit pas de créa et ne vérifie pas le tracking vous coûtera plus cher qu'un prestataire à 8 000 MAD qui fait les deux.",
            "**La question à poser n'est pas le prix, c'est le périmètre :** combien de créas par mois, qui les produit, qui vérifie le tracking, et sur quel indicateur le rapport mensuel est construit.",
          ],
        },
        {
          h: 'La commission cachée sur le budget média',
          body: [
            "C'est la pratique la plus coûteuse du marché et la plus difficile à repérer. Certaines agences prélèvent une commission de 10 à 20 % sur votre budget publicitaire, en plus de leurs frais de gestion, sans que cela apparaisse clairement.",
            "Le test est simple. **Demandez que le budget média reste à votre nom et soit payé directement à la plateforme, et demandez à voir le rapport de dépenses de la plateforme elle-même, pas un tableau reconstitué par l'agence.** Si l'une des deux demandes pose problème, vous avez votre réponse.",
            "Nous ne prenons aucune commission sur le budget média, et le rapport hebdomadaire que vous recevez contient les chiffres de la plateforme.",
          ],
        },
        {
          h: 'Ce que coûte ce vers quoi pointent vos publicités',
          body: [
            "Une boutique e-commerce, une application ou un site n'ont pas de prix de marché lisible au Maroc, parce que presque personne ne publie ce qui fait varier le devis. Les fourchettes observées : **de 15 000 à 150 000 MAD pour une application mobile** selon le nombre d'écrans, le back end à développer et les fonctions natives utilisées, et de l'ordre de 2 000 à 5 000 MAD par mois pour la maintenance.",
            "Pour une vidéo UGC, le marché marocain va de **300 MAD** pour un créateur débutant sur une place de marché à **900 à 1 200 MAD** pour une production d'agence en studio. Ces prix achètent un fichier, pas un résultat.",
          ],
        },
        {
          h: 'Le seul chiffre qui décide de tout',
          body: [
            "Aucun des chiffres ci-dessus ne vous dit si votre activité est rentable. Le seul qui le fasse est votre **coût par commande confirmée et livrée**, comparé à votre marge sur cette commande.",
            "C'est aussi le chiffre que presque aucune agence marocaine ne met dans ses rapports, parce qu'il suppose de connecter la publicité à ce qui se passe après : le taux de confirmation au téléphone, les refus à la livraison, les retours. Sur un modèle en paiement à la livraison, entre 20 et 40 % des commandes passées ne se confirment jamais. Un ROAS de 3 affiché par la plateforme peut parfaitement correspondre à une perte.",
            "Si vous ne retenez qu'une chose de ce guide : exigez que votre reporting soit construit sur la commande confirmée, et renégociez tout prestataire qui ne sait pas vous la donner.",
          ],
        },
      ],
      faqTitle: 'Questions sur les coûts',
      faq: [
        {
          q: 'Quel budget minimum pour commencer sérieusement ?',
          a: "Pour un test e-commerce au Maroc, comptez 4 000 à 8 000 MAD de budget média par mois, en plus des frais de gestion. Aux coûts actuels, cela achète assez de volume pour distinguer une créa qui fonctionne d'une créa qui échoue en deux semaines environ. En dessous de 3 000 MAD par mois, les données sont trop faibles pour décider quoi que ce soit : vous payez pour deviner.",
        },
        {
          q: 'Pourquoi mon CPM est-il plus élevé que ces chiffres ?',
          a: "Trois causes, dans cet ordre de fréquence : une créa qui ne retient pas l'attention, donc une distribution plus chère ; une audience trop étroite, qui fait monter l'enchère ; et une saisonnalité défavorable (fin d'année, Ramadan, soldes) où tout le marché enchérit en même temps. L'optimisation du compte arrive loin derrière la créa dans les causes réelles.",
        },
        {
          q: 'Les frais d’agence incluent-ils la production des créas ?',
          a: "Rarement, et c'est la première chose à vérifier. Beaucoup d'offres à bas prix couvrent le pilotage du compte mais pas la production de contenu, ce qui laisse l'annonceur relancer les mêmes trois vidéos pendant un trimestre. Demandez explicitement combien de créas sont incluses par mois et qui les produit.",
        },
        {
          q: 'Vos tarifs sont-ils publiés ?',
          a: 'Oui, en dirhams, sur la page Tarifs. Le budget média y est toujours présenté séparément et payé à la plateforme en votre nom.',
        },
      ],
      disclaimer:
        "Les fourchettes de ce guide proviennent de nos propres comptes et de tarifs publiés par des prestataires marocains, relevés à la date indiquée. Elles ne sont ni auditées ni représentatives de l'ensemble du marché, et évoluent. Demandez toujours plusieurs devis détaillés.",
      ctaTitle: 'Nous publions nos tarifs, et nous ne prenons rien sur votre budget média.',
      ctaLead:
        'Dites-nous ce que vous vendez et votre marge. Vous repartez avec un chiffre, que vous signiez ou non.',
    },

    restricted: {
      title: 'Compte publicitaire restreint : quoi faire, dans quel ordre',
      metaTitle: 'Compte publicitaire restreint ou bloqué au Maroc — que faire | eGrowth',
      metaDescription:
        'Votre compte Meta ou TikTok est restreint ? Diagnostiquer la cause avant de migrer, ce qu’il ne faut surtout pas faire, et quand un compte agence règle réellement le problème.',
      standfirst:
        "Un compte restreint se répare en diagnostiquant la cause, pas en ouvrant un compte neuf. Si la cause est votre créa ou votre page de destination, elle vous suivra partout — et la manœuvre la plus courante pour s'en sortir est aussi celle qui rend la sanction définitive.",
      summary: [
        "**Ne créez pas immédiatement un nouveau compte ou un nouveau Business Manager.** Multiplier les comptes pour contourner une restriction est traité comme un contournement du système, et la sanction devient beaucoup plus difficile à lever.",
        "**Commencez par lire la politique précise citée dans la notification.** Elle désigne presque toujours un élément concret : une allégation dans la créa, une page de destination, un produit interdit, ou une vérification d'entreprise incomplète.",
        "Une restriction causée par l'offre elle-même **vous suivra sur n'importe quel compte**, y compris un compte agence.",
        '**Faites un seul appel, documenté et précis.** Les appels répétés et génériques réduisent vos chances.',
        "Un compte agence règle un problème de plafond, de facturation ou d'historique. Il ne règle pas un problème de conformité.",
      ],
      sections: [
        {
          h: 'D’abord : qu’est-ce qui a été restreint, exactement ?',
          body: [
            "Les notifications des plateformes sont vagues, mais la portée de la sanction ne l'est pas, et elle change tout. Un **compte publicitaire** restreint se remplace. Un **Business Manager** restreint bloque tous les actifs qu'il contient. Un **compte personnel** restreint empêche la personne de gérer quoi que ce soit, et c'est fréquent quand une seule personne administre tout.",
            "Chez Meta, les standards publicitaires sont explicites sur un point : lorsqu'un compte professionnel ou l'un de ses actifs — compte publicitaire, Page, compte utilisateur — est restreint, cet actif ne peut plus servir à diffuser. La restriction se propage donc selon l'actif touché, pas selon vos intentions.",
            "Identifiez le niveau avant d'agir. C'est ce qui détermine si vous avez un problème réparable en deux jours ou une reconstruction à planifier.",
          ],
        },
        {
          h: 'Les causes réelles, par fréquence',
          body: [
            "**La créa et la page de destination arrivent largement en tête.** Allégations de santé ou de résultats (« perdez 10 kg », « guérit »), avant/après sur le corps, faux comptes à rebours, faux avis, prix qui change au checkout, page de destination qui ne correspond pas à la publicité. Ce sont des causes de fond : elles ne disparaissent pas en changeant de compte.",
            "**Ensuite, les problèmes de paiement et de vérification.** Carte refusée à répétition, incohérence entre le nom de l'entreprise et le moyen de paiement, vérification d'entreprise jamais terminée. Ce sont les plus faciles à corriger.",
            "**Enfin, le contournement du système.** Plusieurs Business Managers créés après une sanction, comptes au nom de proches, contenu modifié après approbation. C'est la catégorie la plus grave, et la plus souvent déclenchée par une réaction de panique après la première restriction.",
          ],
        },
        {
          h: 'La séquence à suivre',
          body: [
            "**Un.** Lisez la politique citée et trouvez l'élément exact qui la déclenche. Si la notification ne le dit pas, passez vos cinq dernières publicités et votre page de destination au crible des standards publicitaires, ligne par ligne.",
            "**Deux.** Corrigez la cause avant de faire appel. Un appel déposé alors que la publicité fautive est toujours en ligne échoue presque systématiquement.",
            "**Trois.** Faites appel une fois, en citant ce que vous avez corrigé et où. Pas de message générique, pas de relance quotidienne.",
            "**Quatre.** Pendant ce temps, mettez à l'abri ce qui a de la valeur : votre pixel, vos audiences, votre catalogue. Si ces actifs sont dans un Business Manager à votre nom, vous pouvez changer de compte publicitaire sans perdre votre historique de conversions — c'est précisément pour cette raison que nous insistons pour que ces actifs restent chez vous.",
          ],
        },
        {
          h: 'Quand un compte agence règle le problème, et quand il ne règle rien',
          body: [
            "Un compte agence résout réellement trois situations : un plafond de dépenses trop bas pour votre niveau d'activité, une facturation impossible depuis le Maroc avec vos moyens de paiement, et un compte neuf sans historique qui n'arrive pas à sortir de la phase d'apprentissage.",
            "Il ne résout rien du tout si votre offre, votre créa ou votre page de destination enfreignent les règles. Dans ce cas, le compte agence sera restreint à son tour — et vous aurez perdu du temps et de l'argent en plus.",
            "C'est la raison pour laquelle nous examinons l'offre et les pages de destination avant d'ouvrir un compte, et pourquoi nous refusons certains dossiers. Un compte restreint dans notre portefeuille pénalise tous les autres annonceurs qui s'y trouvent.",
          ],
        },
      ],
      faqTitle: 'Questions sur les comptes restreints',
      faq: [
        {
          q: 'Combien de temps prend un appel ?',
          a: "C'est variable et aucune plateforme ne s'engage sur un délai. Comptez quelques jours dans les cas simples, bien plus pour une vérification d'entreprise ou une sanction au niveau du Business Manager. Pendant ce temps, travaillez sur la correction de fond plutôt que sur des relances.",
        },
        {
          q: 'Puis-je diffuser depuis le compte de quelqu’un d’autre en attendant ?',
          a: "C'est exactement la manœuvre qui transforme une restriction temporaire en sanction définitive. Diffuser la même offre depuis le compte d'un proche après une restriction est traité comme un contournement du système. Ne le faites pas.",
        },
        {
          q: 'Mon pixel est-il perdu ?',
          a: "Pas si votre Business Manager est à votre nom et que la restriction porte sur le compte publicitaire seulement. Le pixel, les audiences et le catalogue appartiennent au portefeuille, pas au compte publicitaire — vous pouvez donc reprendre la diffusion ailleurs avec votre historique de conversions intact. Si c'est le Business Manager lui-même qui est restreint, c'est une autre affaire.",
        },
        {
          q: 'Vous reprenez les comptes restreints ?',
          a: "Nous commençons toujours par chercher la cause, gratuitement, pendant l'appel de cadrage. Si la cause est structurelle — plafond, facturation, historique — nous pouvons vous installer rapidement. Si la cause est votre offre ou votre créa, nous vous dirons quoi corriger, et nous n'ouvrirons pas de compte avant que ce soit fait.",
        },
      ],
      disclaimer:
        "Ce guide décrit des pratiques observées et s'appuie sur les politiques publiques des plateformes à la date indiquée. Ces politiques et leurs procédures d'appel changent régulièrement : vérifiez toujours la version en vigueur dans le centre d'aide de la plateforme concernée.",
      ctaTitle: 'Commençons par trouver pourquoi, avant de parler de compte.',
      ctaLead:
        'Vingt minutes sur votre offre, votre créa et votre page de destination. Si le problème est réparable sans changer de compte, nous vous le dirons.',
    },
  },

  glossary: {
    metaTitle: 'Glossaire de la publicité en ligne au Maroc | eGrowth',
    metaDescription:
      'Les termes de la publicité en ligne définis simplement : compte agence, Business Manager, pixel, Conversions API, ROAS, CPM, autoliquidation, taux de confirmation.',
    title: 'Glossaire',
    lead:
      "Les termes qui reviennent dans un appel sur deux. Une phrase chacun, sans jargon, et avec la précision qui compte réellement au Maroc.",
    ctaTitle: 'Un terme vous échappe encore ?',
    ctaLead: 'Posez la question pendant l’appel de cadrage. Personne ne vous jugera.',
    terms: [
      {
        term: 'Compte publicitaire agence',
        def: "Un compte publicitaire qui se trouve dans le portefeuille d'une agence, et auquel un annonceur a accès pour diffuser. **Il ne s'achète pas et ne se transfère pas** : les conditions des plateformes encadrent la vente de comptes. Ce qu'une agence peut fournir légitimement, c'est un accès géré à la diffusion, encadré par un contrat de service.",
      },
      {
        term: 'Business Manager (portefeuille professionnel)',
        def: "Le conteneur qui détient vos actifs Meta : Pages, pixels, catalogues, audiences et accès des personnes. **C'est le seul élément qui doit absolument être à votre nom.** Tant qu'il l'est, changer de compte publicitaire ou d'agence ne vous fait rien perdre.",
      },
      {
        term: 'Pixel',
        def: "Un bout de code sur votre site qui signale à la plateforme ce que font les visiteurs : page vue, ajout au panier, commande. Il appartient au Business Manager, pas au compte publicitaire — c'est pourquoi un compte restreint ne détruit pas votre historique si le portefeuille est à vous.",
      },
      {
        term: 'Conversions API (CAPI)',
        def: "L'envoi des conversions depuis votre serveur plutôt que depuis le navigateur du visiteur. Plus fiable que le pixel seul, puisque ni un bloqueur de publicités ni une coupure de réseau ne l'empêchent. Les deux fonctionnent en parallèle, avec une déduplication par identifiant d'événement.",
      },
      {
        term: 'ROAS',
        def: "Le chiffre d'affaires attribué divisé par la dépense publicitaire. **Attention : le ROAS affiché par la plateforme compte les commandes passées, pas les commandes livrées.** En paiement à la livraison, un ROAS de 3 peut parfaitement correspondre à une perte.",
      },
      {
        term: 'CPM',
        def: 'Le coût pour mille impressions. Au Maroc, il se situe actuellement autour de 25 à 60 MAD selon la plateforme et la qualité de la créa. Une bonne accroche fait baisser le CPM, parce que la plateforme distribue plus volontiers ce qui retient l’attention.',
      },
      {
        term: 'CPC',
        def: 'Le coût par clic, actuellement autour de 1,0 à 3,5 MAD au Maroc. Utile pour diagnostiquer une créa, inutile comme objectif : un clic bon marché qui ne commande jamais coûte plus cher qu’un clic cher qui convertit.',
      },
      {
        term: 'Paiement à la livraison (COD)',
        def: "Le client paie au livreur, pas en ligne. Mode de paiement dominant au Maroc, et la raison pour laquelle une commande passée n'est pas une vente : il reste à la confirmer au téléphone, puis à la faire accepter à la porte.",
      },
      {
        term: 'Taux de confirmation',
        def: "La part des commandes passées qui sont confirmées au téléphone. **Entre 20 et 40 % ne le sont jamais.** C'est l'indicateur le plus rentable à travailler au Maroc, et presque aucun prestataire ne le facture ni ne le rapporte.",
      },
      {
        term: 'Coût par commande confirmée',
        def: "La dépense publicitaire divisée par le nombre de commandes réellement confirmées. **Le seul chiffre qui dit si votre activité est rentable**, et celui sur lequel nos rapports hebdomadaires sont construits.",
      },
      {
        term: 'Plafond de dépenses',
        def: "La limite que la plateforme impose à un compte sur une période. Elle augmente avec l'historique de dépenses et de paiements. Personne ne peut vous fournir un compte sans plafond : une offre « budget illimité » décrit une chose qui n'existe pas.",
      },
      {
        term: 'Phase d’apprentissage',
        def: "La période pendant laquelle la plateforme cherche à qui montrer vos publicités, avant que les performances se stabilisent. Un compte découpé en trop d'ad sets n'en sort jamais, parce qu'aucun ne reçoit assez de conversions. C'est la cause la plus courante de gaspillage silencieux.",
      },
      {
        term: 'Autoliquidation (reverse charge)',
        def: "Le mécanisme par lequel c'est vous, et non le fournisseur étranger, qui calculez et déclarez la TVA sur un service acheté hors du Maroc. Il reste applicable même lorsque la plateforme n'ajoute pas la TVA à vos achats publicitaires.",
      },
      {
        term: 'UGC',
        def: "Du contenu au format « créateur » : vertical, filmé au téléphone, qui ressemble à une recommandation plutôt qu'à une publicité. Sur Meta et TikTok, la créa détermine aujourd'hui qui voit votre annonce — c'est donc devenu un levier de ciblage, pas de décoration.",
      },
    ],
  },

  pricing: {
    metaTitle: 'Tarifs — comptes publicitaires, gestion et développement au Maroc | eGrowth',
    metaDescription:
      'Tarifs publiés en dirhams : frais de compte par plateforme, formules de gestion, projets de développement et vidéos UGC. Aucune commission sur votre budget média.',
    title: 'Nos tarifs, publiés, en dirhams.',
    lead:
      "Au Maroc, les frais de gestion vont de 1 500 à 25 000 MAD par mois selon les sources, et presque personne ne dit lesquels. Voici les nôtres. Si vous trouvez moins cher, demandez simplement ce qui est inclus.",
    mediaNote:
      "**Le budget média n'est jamais inclus dans ces montants.** Il est payé directement à la plateforme, en votre nom, et nous ne prenons aucune commission dessus. Budget média de départ recommandé pour un test e-commerce : 4 000 à 8 000 MAD par mois.",

    retainersTitle: 'Formules mensuelles',
    tierAccount: 'Compte seul',
    tierAccountNote: 'Vous gérez les campagnes vous-même',
    tierAccountIncludes: [
      'Un compte agence sur la plateforme de votre choix, actif en moins de 24 h',
      'Accès partenaire sur votre Business Manager',
      'Facture marocaine en dirhams, TVA traitée correctement',
      'Un responsable de compte nommé, joignable sur WhatsApp',
    ],
    tierManaged: 'Compte et gestion',
    tierManagedNote: 'Nous gérons les campagnes, vous validez',
    tierManagedIncludes: [
      'Tout ce qui précède, sur une plateforme',
      'Structure de campagnes, pilotage quotidien et tests créatifs',
      'Pixel et Conversions API vérifiés sur de vraies commandes test',
      'Rapport hebdomadaire sur les commandes confirmées et la marge',
    ],
    tierGrowth: 'Formule growth',
    tierGrowthNote: 'Publicités, UGC, CRO et tech',
    tierGrowthIncludes: [
      'Jusqu’à trois plateformes gérées en parallèle',
      'Production UGC continue avec notre réseau de créateurs',
      'Travail CRO sur la landing page et le taux de confirmation',
      'Temps de développement inclus pour les correctifs techniques',
    ],

    platformsTitle: 'Frais de compte par plateforme',
    platformsLead:
      "Si vous ne prenez que le compte, voici le tarif par plateforme, avec le budget média minimum en dessous duquel le test ne produit pas de données exploitables.",
    colPlatform: 'Plateforme',

    buildsTitle: 'Projets de développement',
    buildsLead:
      'Au forfait, après un cadrage écrit. Les délais sont ceux que nous tenons réellement, pas les plus optimistes.',

    ugcTitle: 'Vidéos UGC',
    ugcLead:
      "À l'unité si vous ne voulez que les fichiers, ou incluses dans la formule growth avec le test en compte.",
    ugcStandalone: 'À l’unité',
    ugcStandaloneNote: 'Droits publicitaires inclus, fichiers sources livrés',
    ugcIncluded: 'En formule growth',
    ugcIncludedNote: 'Production continue, testée dans votre compte',
    ugcIncludedPrice: 'Incluse',

    neverTitle: 'Ce que nous ne facturons jamais',
    neverItems: [
      'Aucune commission sur votre budget média, à aucun pourcentage',
      "Aucuns frais de mise en place sur les formules mensuelles",
      'Aucun engagement de durée : un mois de préavis suffit',
      "Aucun frais de sortie, et vos actifs sont déjà chez vous",
      "L'appel de cadrage et l'audit de compte, qui restent gratuits même si vous ne signez pas",
    ],

    faqTitle: 'Questions sur les tarifs',
    faq: [
      {
        q: 'Pourquoi facturez-vous moins que certaines agences et plus que d’autres ?',
        a: "Parce que le prix suit le périmètre, pas le positionnement. Une offre à 2 000 MAD par mois qui ne produit aucune créa et ne vérifie pas le tracking vous coûtera plus cher au final qu'une offre plus chère qui fait les deux. Comparez le nombre de créas incluses par mois, qui les produit, et sur quel indicateur le rapport est construit.",
      },
      {
        q: 'Y a-t-il un engagement de durée ?',
        a: "Non. Un mois de préavis, et vos actifs — Business Manager, pixel, audiences, catalogue — sont déjà dans votre portefeuille, donc il n'y a rien à récupérer. C'est volontairement construit comme ça : une agence qui a besoin d'un engagement de douze mois pour vous garder a un problème de résultats, pas de contrat.",
      },
      {
        q: 'Que se passe-t-il si je veux ajouter une plateforme en cours de route ?',
        a: "Les frais de compte de la plateforme ajoutée s'appliquent au prorata du mois en cours. Nous vous dirons franchement si l'ajout a du sens : dans la plupart des cas, concentrer le budget sur une plateforme qui fonctionne bat la dispersion sur trois.",
      },
      {
        q: 'Le budget média peut-il passer par vous ?',
        a: "Non, et c'est délibéré. Le budget est payé directement à la plateforme, en votre nom. C'est la seule configuration dans laquelle vous pouvez vérifier vous-même, dans l'interface de la plateforme, exactement ce qui a été dépensé.",
      },
    ],
    ctaTitle: 'Un chiffre réel, en vingt minutes.',
    ctaLead:
      "Dites-nous ce que vous vendez et votre marge. Vous repartez avec un budget chiffré et la formule qui correspond, que vous signiez ou non.",
  },

  contact: {
    metaTitle: 'Contact — eGrowth, agence tech et marketing au Maroc',
    metaDescription:
      'Contactez eGrowth : WhatsApp, téléphone, e-mail et adresse. Réponse sous deux heures ouvrées, par une personne nommée.',
    title: 'Parlons-en.',
    lead:
      "WhatsApp est le canal le plus rapide, et c'est une personne nommée qui vous répond — pas un formulaire de ticket ni un robot.",
    whatsappTitle: 'WhatsApp',
    whatsappNote: 'Réponse sous deux heures ouvrées',
    phoneTitle: 'Téléphone',
    hours: 'Du lundi au vendredi, 9h – 18h',
    emailTitle: 'E-mail',
    emailNote: 'Réponse sous un jour ouvré',
    addressTitle: 'Adresse',
    entityTitle: 'Informations légales',
    legalName: 'Raison sociale',
    taxId: 'Identifiant fiscal',
  },

  audit: {
    metaTitle: 'Audit gratuit de compte publicitaire au Maroc | eGrowth',
    metaDescription:
      'Vingt minutes sur votre compte, votre offre et vos chiffres. Vous repartez avec un budget chiffré et les deux choses à corriger en premier. Gratuit, sans engagement.',
    eyebrow: 'Gratuit, sans engagement',
    title: 'Vingt minutes, et un chiffre réel.',
    lead:
      "Ce n'est pas un appel commercial déguisé. Nous regardons votre compte, votre offre et vos chiffres, et nous vous disons ce que coûteraient vos cent premières commandes — ou pourquoi vous ne devriez pas encore faire de publicité.",
    note: 'Si nous ne sommes pas les bons pour ce que vous vendez, nous vous le dirons pendant l’appel et nous vous orienterons.',

    lookTitle: 'Ce que nous regardons',
    lookItems: [
      'La structure de votre compte, et si vos ad sets sortent de la phase d’apprentissage',
      'Vos créas actuelles, et combien d’angles différents ont réellement été testés',
      'Votre tracking : le pixel double-compte-t-il, et la Conversions API remonte-t-elle les bonnes commandes',
      'Votre landing page sur un Android d’entrée de gamme et une connexion lente',
      'Votre taux de confirmation COD, s’il est mesuré — et sinon, c’est souvent là que tout se joue',
      'Votre situation fiscale sur le compte, depuis l’arrivée de la TVA de 20 %',
    ],
    getTitle: 'Ce que vous repartez avec',
    getItems: [
      'Un coût par commande cible chiffré, calculé sur votre marge réelle',
      'Un budget média de départ réaliste, en dirhams',
      'Les deux choses à corriger en premier, dans l’ordre',
      'Une réponse franche sur l’opportunité de faire de la publicité maintenant',
      'Rien à signer, et aucune relance si vous ne donnez pas suite',
    ],

    bringTitle: 'Ce qu’il faut avoir sous la main',
    bringLead:
      "Rien d'obligatoire, mais l'appel est beaucoup plus utile avec ces éléments. Un accès en lecture au compte suffit, nous ne demandons jamais de mot de passe.",
    bringItems: [
      'Votre marge brute par produit, même approximative',
      'Vos dépenses publicitaires et vos commandes des trois derniers mois',
      'Un accès en lecture à votre compte publicitaire, ou simplement des captures d’écran',
      'Votre taux de confirmation et votre taux de retour, si vous les suivez',
    ],

    faqTitle: 'Questions sur l’audit',
    faq: [
      {
        q: 'C’est vraiment gratuit ?',
        a: "Oui, et sans contrepartie. Nous le faisons parce que c'est la façon la plus rapide de savoir si nous pouvons vous être utiles, et parce qu'un annonceur qui démarre sur de mauvaises bases coûte plus de temps à tout le monde qu'un appel de vingt minutes.",
      },
      {
        q: 'Faut-il vous donner accès à mon compte ?',
        a: "Non. Un accès en lecture rend l'appel plus précis, mais des captures d'écran suffisent, et nous ne demandons jamais de mot de passe. Aucune agence sérieuse ne devrait vous en demander un.",
      },
      {
        q: 'Et si mon compte est actuellement restreint ?',
        a: "C'est précisément un bon moment pour appeler. Nous commençons par chercher la cause, parce qu'une restriction due à la créa ou à la landing page vous suivra sur n'importe quel nouveau compte, y compris un compte agence.",
      },
    ],
    ctaTitle: 'Réservez les vingt minutes.',
    ctaLead: 'Un créneau, une personne nommée, et un chiffre à la fin.',
  },

  work: {
    metaTitle: 'Réalisations — résultats clients au Maroc | eGrowth',
    metaDescription:
      'Résultats de campagnes au Maroc, avec la méthode qui va avec : e-commerce en paiement à la livraison, acquisition B2B, et ce que nous avons réellement changé.',
    title: 'Des chiffres, avec la méthode qui va avec.',
    lead:
      "Un chiffre sans méthode ne vaut rien : il est impossible à vérifier et impossible à reproduire. Pour chaque dossier ci-dessous, nous disons ce que nous avons changé, pas seulement ce qui s'est amélioré.",
    cases: {
      'cosmetics-cod':
        "Sorti d'un compte personnel restreint deux fois, tracking reconstruit côté serveur, puis créas ramenées aux deux seuls angles qui tenaient la distance.",
      'home-goods-shopify':
        "Boutique reconstruite pour la vitesse, flux de confirmation WhatsApp en darija ajouté, et budget réaffecté de la portée TikTok vers les conversions Meta.",
      'b2b-leadgen':
        "Search et LinkedIn structurés autour d'une seule définition écrite du lead qualifié, avec un CRM qui renvoie à la plateforme lesquels étaient réels.",
    },
    methodNote:
      "Ces clients sont sous accord de confidentialité : nous publions les chiffres et la méthode, pas les noms. Nous pouvons organiser un appel de référence avec un client du même secteur si vous en avez besoin pour décider.",

    howTitle: 'Comment nous mesurons',
    howLead:
      "Les règles que nous appliquons à nos propres chiffres, pour qu'ils veuillent dire quelque chose.",
    howItems: [
      'Nous comptons les commandes confirmées, jamais les commandes passées',
      'Les fenêtres de comparaison sont de même durée et de même saisonnalité',
      'Le ROAS est calculé sur le chiffre d’affaires livré, pas sur l’attribution de la plateforme',
      'Nous disons ce qui a changé en même temps : prix, offre, boutique, transporteur',
      'Quand un résultat vient d’un facteur hors publicité, nous l’écrivons',
    ],
    industriesTitle: 'Par secteur',
    ctaTitle: 'Votre secteur est-il là-dedans ?',
    ctaLead:
      "Dites-nous ce que vous vendez. Si nous avons déjà fait tourner une offre comparable, nous vous dirons ce qui a marché et ce qui n'a pas marché.",
  },

  industries: {
    cod: {
      metaTitle: 'E-commerce et paiement à la livraison au Maroc — acquisition | eGrowth',
      metaDescription:
        'Acquisition pour le e-commerce en paiement à la livraison au Maroc : taux de confirmation, coût par commande livrée, créas en darija et tracking côté serveur.',
      title: 'E-commerce et paiement à la livraison',
      lead:
        "Au Maroc, le taux de confirmation décide de la rentabilité plus sûrement que le taux de conversion. C'est le secteur que nous connaissons le mieux, et celui où les erreurs coûtent le plus vite.",
      sections: [
        {
          h: 'Le vrai problème n’est pas le coût par clic',
          body: [
            "Un e-commerce marocain en paiement à la livraison peut afficher un ROAS de 3 sur la plateforme et perdre de l'argent. La raison est simple : entre 20 et 40 % des commandes passées ne sont jamais confirmées au téléphone, et une partie de celles qui le sont est refusée à la porte ou retournée.",
            "Tant que votre reporting s'arrête à la commande passée, vous optimisez vers un chiffre qui n'existe pas. **Le seul indicateur qui compte est le coût par commande livrée et encaissée**, et c'est celui sur lequel nous construisons nos rapports.",
          ],
        },
        {
          h: 'Ce que nous changeons en premier',
          body: [
            "Presque toujours la même chose : le tracking, puis le flux de confirmation. Nous reconstruisons la mesure côté serveur pour que la plateforme reçoive le bon signal, puis nous ajoutons un flux de confirmation WhatsApp en darija qui récupère les commandes hésitantes avant qu'elles ne deviennent des refus.",
            "Ensuite seulement vient la créa, et là le levier est le volume d'angles testés, pas la qualité de production. Un e-commerce qui teste cinq angles par mois bat systématiquement celui qui relance trois vidéos soignées pendant un trimestre.",
          ],
        },
        {
          h: 'Ce qui ne marche pas, et que nous refusons',
          body: [
            "Les fausses urgences, les faux avis, les prix qui changent au checkout et les allégations de résultats. Ce ne sont pas seulement des causes de restriction de compte : elles font monter votre taux de refus à la livraison, parce que le client qui a commandé sous pression change d'avis en voyant le livreur.",
            "Un taux de refus élevé est presque toujours un symptôme de l'offre, pas de la logistique.",
          ],
        },
      ],
      playbookTitle: 'Le playbook COD',
      playbook: [
        'Mesure côté serveur avant toute augmentation de budget',
        'Flux de confirmation WhatsApp en darija dans les deux heures',
        'Checkout en une page, testé sur un Android d’entrée de gamme',
        'Cinq angles créatifs par mois minimum, les perdants coupés chaque semaine',
        'Rapport construit sur la commande livrée, pas sur la commande passée',
      ],
      faqTitle: 'Questions e-commerce et COD',
      faq: [
        {
          q: 'Quel taux de confirmation est normal au Maroc ?',
          a: "Nous observons le plus souvent entre 60 et 80 % selon le produit, le prix et surtout la rapidité de l'appel de confirmation. En dessous de 60 %, le problème est presque toujours dans l'offre ou dans le délai de rappel, pas dans la publicité.",
        },
        {
          q: 'Faut-il proposer le paiement en ligne aussi ?',
          a: "Oui, en complément, jamais en remplacement. Une part des acheteurs marocains paie volontiers en ligne et ces commandes ne se refusent pas, ce qui améliore votre marge moyenne. Mais retirer le paiement à la livraison fait chuter le volume.",
        },
        {
          q: 'Combien de produits faut-il pour commencer ?',
          a: "Un seul, avec une offre claire. Les comptes qui démarrent avec quinze références dispersent le budget et n'apprennent rien sur aucune. Nous préférons prouver une offre, puis élargir.",
        },
      ],
      ctaTitle: 'Dites-nous votre marge, et nous vous dirons si ça tient.',
      ctaLead:
        'Vingt minutes sur votre produit, votre taux de confirmation et vos coûts logistiques.',
    },
    b2b: {
      metaTitle: 'Acquisition B2B et génération de leads au Maroc | eGrowth',
      metaDescription:
        'Acquisition B2B au Maroc : Google Search et LinkedIn structurés autour d’une définition unique du lead qualifié, avec retour CRM vers la plateforme.',
      title: 'B2B et services',
      lead:
        "En B2B, le volume de leads est le mauvais objectif. Ce qui compte est le nombre de rendez-vous qualifiés, et le seul moyen d'y arriver est de renvoyer la qualification vers la plateforme.",
      sections: [
        {
          h: 'Pourquoi la plupart des campagnes B2B échouent',
          body: [
            "Elles optimisent vers le formulaire rempli. La plateforme fait alors exactement ce qu'on lui demande : elle trouve les gens qui remplissent des formulaires, ce qui n'est pas la même population que les gens qui achètent.",
            "**La correction est toujours la même : une définition unique et écrite du lead qualifié, et un retour depuis le CRM vers la plateforme** indiquant lesquels l'étaient. À partir de là, l'algorithme travaille pour vous au lieu de travailler contre vous.",
          ],
        },
        {
          h: 'Search d’abord, LinkedIn ensuite',
          body: [
            "Pour un service B2B au Maroc, Google Search capte une intention qui existe déjà et coûte beaucoup moins cher par rendez-vous qualifié que n'importe quelle plateforme sociale. Nous commençons presque toujours par vérifier s'il y a du volume de recherche réel sur votre catégorie.",
            "LinkedIn vient ensuite, pour atteindre des fonctions et des entreprises précises qu'aucune autre plateforme ne permet de cibler. Son coût par clic est le plus élevé des cinq plateformes, et c'est sans importance si votre valeur client le justifie.",
          ],
        },
        {
          h: 'Le cycle de vente change le reporting',
          body: [
            "Avec un cycle de trois à six mois, juger une campagne sur le mois en cours n'a aucun sens. Nous suivons les cohortes par mois d'arrivée du lead et nous rapportons l'avancement du pipeline, pas seulement le coût par lead.",
            "Cela suppose un CRM tenu correctement. Quand il ne l'est pas, c'est la première chose que nous construisons — souvent avant de toucher aux campagnes.",
          ],
        },
      ],
      playbookTitle: 'Le playbook B2B',
      playbook: [
        'Une définition écrite du lead qualifié, validée par le commercial',
        'Vérification du volume de recherche avant tout budget Search',
        'Retour CRM vers la plateforme sur la qualification réelle',
        'Suivi par cohorte, aligné sur la durée du cycle de vente',
        'LinkedIn seulement quand la valeur client le justifie',
      ],
      faqTitle: 'Questions B2B',
      faq: [
        {
          q: 'Quel budget minimum en B2B ?',
          a: "Plus élevé qu'en e-commerce, parce que les clics coûtent plus cher et que les volumes sont plus faibles : comptez au minimum 8 000 MAD de média par mois sur LinkedIn, moins sur Search selon votre catégorie. En dessous, le délai pour obtenir une lecture statistique dépasse votre patience.",
        },
        {
          q: 'LinkedIn fonctionne-t-il au Maroc ?',
          a: "Pour certaines cibles, oui : cadres, secteur financier, industrie, services aux entreprises, recrutement de profils spécialisés. Pour des cibles TPE ou commerçants, non, et nous vous le dirons plutôt que de vous vendre la plateforme.",
        },
        {
          q: 'Et si nous n’avons pas de CRM ?',
          a: "Nous en mettons un en place, ou nous connectons celui que vous avez. C'est rarement le travail qu'un client imagine en appelant une agence publicitaire, mais sans lui vous payez pour des leads que personne ne peut qualifier.",
        },
      ],
      ctaTitle: 'Combien vaut un client pour vous ?',
      ctaLead:
        'Avec ce chiffre, nous pouvons vous dire en vingt minutes si les plateformes payantes ont du sens dans votre cas.',
    },
  },

  about: {
    metaTitle: 'À propos — eGrowth, agence tech et marketing au Maroc',
    metaDescription:
      'eGrowth : comptes publicitaires agence, acquisition payante, développement et UGC pour les marques et vendeurs e-commerce marocains. Informations légales et positions.',
    title: 'Ce que nous sommes, et ce que nous refusons d’être.',
    lead:
      "eGrowth est une agence tech et marketing basée au Maroc. Nous fournissons des comptes publicitaires agence, nous gérons les campagnes qui tournent dessus, nous construisons les boutiques et les applications vers lesquelles elles pointent, et nous produisons les vidéos qu'elles contiennent.",
    sections: [
      {
        h: 'Pourquoi les quatre ensemble',
        body: [
          "Un annonceur marocain qui brief une société pour les publicités, une autre pour la boutique et une troisième pour les vidéos paie la coordination entre les trois, et personne n'est responsable du résultat. Quand la boutique est lente, l'agence média dit que c'est la boutique ; quand les publicités ne convertissent pas, le développeur dit que c'est la publicité.",
          "Nous faisons les quatre parce que ce sont les quatre faces du même problème : **le coût pour obtenir une commande livrée**. C'est le seul chiffre sur lequel nous acceptons d'être jugés.",
        ],
      },
      {
        h: 'Sur les comptes publicitaires, soyons précis',
        body: [
          "Un compte publicitaire ne s'achète pas et ne se vend pas : les conditions des plateformes encadrent le transfert de comptes. Nous ne vous en vendrons donc jamais un, et nous ne prétendrons pas le contraire pour conclure.",
          "Ce que nous fournissons est un accès géré à la diffusion via notre structure agence, encadré par un contrat qui dit ce qu'il advient de vos actifs, de votre solde et de vos données si vous partez. **Votre Business Manager, votre pixel, vos audiences et votre catalogue restent à vous**, ce qui veut dire que vous pouvez nous quitter sans rien perdre. C'est volontaire.",
        ],
      },
      {
        h: 'Ce que nous publions, et pourquoi',
        body: [
          "Nos tarifs sont publiés en dirhams. Nos guides citent leurs sources et datent leurs chiffres. Le code de ce site est public. Et quand nous ne savons pas, nous l'écrivons — la page sur la TVA dit explicitement ce que les sources ne précisent pas.",
          "Ce n'est pas de la transparence pour la vitrine. Dans un marché où les offres les plus bruyantes promettent un « budget illimité » et « zéro suspension », la chose la plus différenciante qu'une agence puisse faire est de mettre ses conditions par écrit et de s'y tenir.",
        ],
      },
    ],
    entityTitle: 'L’entreprise',
    legalName: 'Raison sociale',
    taxId: 'Identifiant fiscal',
    founded: 'Créée en',
    addressTitle: 'Siège',
    entityNote:
      'eGrowth est une agence indépendante et n’est pas affiliée à Meta, TikTok, Snap, Google ou LinkedIn.',

    refuseTitle: 'Ce que nous refusons',
    refuseLead:
      "Un compte restreint pénalise tous les annonceurs de notre portefeuille, et une promesse intenable finit toujours par se payer. Nous disons donc non à :",
    refuseItems: [
      'Promettre un budget illimité ou une immunité contre les suspensions — personne ne contrôle ni l’un ni l’autre',
      'Prendre une commission sur un budget média sans le dire',
      'Publier un chiffre de résultat sans la méthode qui permet de le vérifier',
      'Les produits qui ne peuvent pas être annoncés, et les offres qui reposent sur de fausses urgences',
      'Garder un client qui ne gagne pas d’argent avec nous, simplement parce qu’un contrat le retient',
    ],
    ctaTitle: 'Le plus simple reste de nous parler vingt minutes.',
    ctaLead: 'Vous saurez à la fin de l’appel si nous sommes utiles dans votre cas.',
  },

  legal: {
    updated: '2026-10-08',
    tocLabel: 'Sommaire',
    terms: {
      metaTitle: 'Conditions générales de service | eGrowth',
      metaDescription:
        'Conditions générales de service d’eGrowth : accès aux comptes publicitaires, propriété des actifs, plafonds de dépenses, facturation, résiliation et responsabilités.',
      title: 'Conditions générales de service',
      lead:
        "Ces conditions encadrent l'accès aux comptes publicitaires et les prestations de services. Elles sont la contrepartie écrite de ce que nous affirmons sur le reste du site : si une clause ci-dessous contredit une promesse commerciale, c'est la clause qui vaut.",
      clauses: [
        {
          h: 'Objet et définitions',
          body: '[[TODO: clause « Objet et définitions » — à rédiger par votre conseil juridique]]',
        },
        {
          h: 'Accès au compte publicitaire',
          body: "[[TODO: clause « Accès au compte publicitaire » — doit indiquer explicitement que le compte reste dans le portefeuille agence d'eGrowth et qu'aucune vente ni transfert de compte n'a lieu]]",
        },
        {
          h: 'Propriété des actifs du client',
          body: '[[TODO: clause « Propriété des actifs » — Business Manager, Page, pixel, jeux de données, audiences, catalogue et fichiers créatifs]]',
        },
        {
          h: 'Plafond de dépenses et prépaiement',
          body: '[[TODO: clause « Plafond de dépenses et prépaiement » — fixation, révision et notification du plafond]]',
        },
        {
          h: 'Facturation, TVA et remboursement du solde',
          body: '[[TODO: clause « Facturation, TVA et remboursement du solde » — y compris le délai de remboursement du solde non dépensé]]',
        },
        {
          h: 'Conformité aux politiques des plateformes',
          body: '[[TODO: clause « Conformité aux politiques des plateformes » — responsabilités respectives et conséquences d’une restriction]]',
        },
        {
          h: 'Durée, préavis et résiliation',
          body: '[[TODO: clause « Durée, préavis et résiliation » — y compris le retrait des accès et la restitution des actifs]]',
        },
        {
          h: 'Responsabilité et droit applicable',
          body: '[[TODO: clause « Responsabilité et droit applicable » — limitation de responsabilité, droit marocain et juridiction compétente]]',
        },
      ],
      contact:
        '**Une question sur ces conditions ?** Écrivez-nous avant de signer, pas après. Nous préférons une question gênante maintenant à un désaccord dans six mois.',
    },
    privacy: {
      metaTitle: 'Politique de confidentialité et protection des données | eGrowth',
      metaDescription:
        'Politique de confidentialité d’eGrowth : données collectées, finalités, base légale, durée de conservation, sous-traitants et vos droits au titre de la loi 09-08.',
      title: 'Confidentialité et protection des données',
      lead:
        "Comment nous traitons les données que vous nous confiez, et celles de vos clients lorsque nous intervenons sur vos outils de mesure. Rédigée au regard de la loi marocaine 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.",
      clauses: [
        {
          h: 'Responsable du traitement',
          body: '[[TODO: clause « Responsable du traitement » — identité, coordonnées et, le cas échéant, déclaration CNDP]]',
        },
        {
          h: 'Données collectées et finalités',
          body: '[[TODO: clause « Données collectées et finalités » — formulaire de demande de compte, échanges WhatsApp, données de mesure]]',
        },
        {
          h: 'Base légale du traitement',
          body: '[[TODO: clause « Base légale du traitement » — consentement, exécution du contrat, intérêt légitime]]',
        },
        {
          h: 'Durée de conservation',
          body: '[[TODO: clause « Durée de conservation » — par catégorie de données]]',
        },
        {
          h: 'Sous-traitants et transferts hors du Maroc',
          body: '[[TODO: clause « Sous-traitants et transferts » — hébergement, plateformes publicitaires, outils de mesure, et transferts hors du Maroc]]',
        },
        {
          h: 'Cookies et mesure d’audience',
          body: '[[TODO: clause « Cookies et mesure d’audience » — ce site n’utilise aucun cookie publicitaire ; décrire précisément la mesure utilisée]]',
        },
        {
          h: 'Vos droits et comment les exercer',
          body: '[[TODO: clause « Vos droits » — accès, rectification, opposition, suppression, et la procédure pour les exercer]]',
        },
      ],
      contact:
        '**Pour exercer vos droits ou poser une question sur vos données**, écrivez-nous. Nous répondons sous un jour ouvré.',
    },
  },
};
