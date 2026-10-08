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
};
