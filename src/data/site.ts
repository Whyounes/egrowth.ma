/* ---------------------------------------------------------------------------
   site.ts — EVERY fact about the business lives here, and nowhere else.

   Anything we do not yet know is wrapped in TODO(). `npm run check:content`
   scans the built HTML and fails while any TODO marker is still in it, so an
   unfilled placeholder cannot reach production.
   --------------------------------------------------------------------------- */

/** Marks a value that must be filled before deploy. */
const TODO = (hint: string): string => `[[TODO: ${hint}]]`;

export const site = {
  /* --- Identity --------------------------------------------------------- */
  url: 'https://egrowth.ma',
  brandName: 'eGrowth',
  legalName: TODO('registered company name, e.g. "eGrowth SARL"'),
  rcNumber: TODO('Registre de Commerce number'),
  iceNumber: TODO('ICE number'),
  taxId: TODO('Identifiant Fiscal (IF) — the TIN used on the ad accounts'),
  foundingYear: TODO('year the company was founded, e.g. 2022'),

  /* --- Contact ---------------------------------------------------------- */
  city: TODO('city, e.g. Casablanca'),
  addressLine: TODO('street address'),
  postalCode: TODO('postal code'),
  phone: TODO('landline or mobile in +212 format'),
  whatsapp: TODO('WhatsApp number in +212 format'),
  whatsappLink: TODO('wa.me link, e.g. https://wa.me/2126XXXXXXXX'),
  email: TODO('public contact email'),
  bookingUrl: TODO('calendar link for the 20-minute audit call'),
  /** Where the account-request form POSTs. Any static form service works
      (Formspree, Basin, a Cloudflare Worker). Must accept a plain POST. */
  formEndpoint: TODO('form POST endpoint for the account request'),

  /* --- Social (used for Schema.org sameAs and the footer) --------------- */
  social: {
    facebook: TODO('Facebook page URL'),
    instagram: TODO('Instagram profile URL'),
    tiktok: TODO('TikTok profile URL'),
    linkedin: TODO('LinkedIn company page URL'),
  },

  /* --- Headline numbers -------------------------------------------------
     Every one of these appears on the home page. They must be real and we
     should be able to show the working if a client asks. */
  stats: {
    adSpendManaged: TODO('total ad spend managed, e.g. "48M"'),
    accountsProvisioned: TODO('number of agency accounts provisioned, e.g. "230"'),
    medianRoas: TODO('median ROAS across e-commerce clients, e.g. "4.1"'),
    activationMedian: TODO('median time from signed brief to first impression, e.g. "18h 40m"'),
    stillActiveAt12Months: TODO('share of accounts still active after 12 months, e.g. "87"'),
  },

  /* --- Pricing, in MAD, excluding media budget -------------------------- */
  pricing: {
    accountOnly: TODO('monthly fee, account only, e.g. "900"'),
    accountPlusManagement: TODO('monthly fee, account + management, e.g. "6500"'),
    growthRetainerFrom: TODO('monthly floor for the growth retainer, e.g. "18000"'),
    buildFrom: TODO('floor for a one-off build project, e.g. "9000"'),
    storeFrom: TODO('floor for an e-commerce store build, e.g. "22000"'),
    appFrom: TODO('floor for a mobile app MVP, e.g. "52000"'),
    websiteFrom: TODO('floor for a website build, e.g. "9000"'),
    toolsFrom: TODO('floor for internal tools, e.g. "6000"'),
    ugcPerVideo: TODO('standalone price per UGC video, e.g. "750"'),
    refundDays: TODO('working days to refund unspent balance, e.g. "10"'),
  },

  /* --- Per-platform account fees. Minimum media budgets are market figures
         we already verified and can stay as they are. ---------------------- */
  platforms: {
    meta: { fee: TODO('Meta account monthly fee'), minBudget: '4,000', setup: 'under24h' },
    tiktok: { fee: TODO('TikTok account monthly fee'), minBudget: '3,000', setup: 'under24h' },
    snapchat: { fee: TODO('Snapchat account monthly fee'), minBudget: '3,000', setup: '24to48h' },
    google: { fee: TODO('Google Ads account monthly fee'), minBudget: '5,000', setup: 'under24h' },
    linkedin: { fee: TODO('LinkedIn account monthly fee'), minBudget: '8,000', setup: '24to48h' },
  },

  /* --- Market benchmarks. Verified October 2026; re-check each quarter and
         move the date with them, because a dated number is the whole point. */
  benchmarks: {
    cpmLow: '25',
    cpmHigh: '60',
    cpcLow: '1.0',
    cpcHigh: '3.5',
    testBudgetLow: '4,000',
    testBudgetHigh: '8,000',
    measuredOn: '2026-10-01',
  },

  /* --- UGC ---------------------------------------------------------------- */
  ugc: {
    videosPerMonth: TODO('videos a month on a growth retainer, e.g. "20"'),
    creatorsInNetwork: TODO('creators in the Moroccan network, e.g. "40"'),
  },

  /* --- Reach -------------------------------------------------------------- */
  targetMarkets: TODO('markets clients ship into besides Morocco, e.g. "France, Spain and the Gulf"'),

  /* --- The person in hero image 4 and on the account-manager promise ----- */
  accountManager: {
    firstName: TODO('first name of the account manager shown in the hero'),
    role: TODO('their role, e.g. "Account manager"'),
  },
} as const;

/* --- Case studies ---------------------------------------------------------
   Three on the home page. Each needs written client permission before the
   name or the numbers go live; use `anonymised: true` until you have it. */

export type CaseStudy = {
  slug: string;
  client: string;
  anonymised: boolean;
  platform: 'meta' | 'tiktok' | 'snapchat' | 'google' | 'linkedin';
  accentKey: 'green' | 'blue' | 'clay' | 'ochre';
  metrics: { value: string; label: Record<'fr' | 'en' | 'ar', string> }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'cosmetics-cod',
    client: TODO('client 1 name, or keep anonymised'),
    anonymised: true,
    platform: 'meta',
    accentKey: 'green',
    metrics: [
      {
        value: TODO('client 1 — lift in confirmed orders, e.g. "+64%"'),
        label: { fr: 'commandes confirmées', en: 'confirmed orders', ar: 'طلبات مؤكَّدة' },
      },
      {
        value: TODO('client 1 — ROAS at 90 days, e.g. "4.3×"'),
        label: { fr: 'ROAS à 90 jours', en: 'ROAS at 90 days', ar: 'العائد عند 90 يومًا' },
      },
    ],
  },
  {
    slug: 'home-goods-shopify',
    client: TODO('client 2 name, or keep anonymised'),
    anonymised: true,
    platform: 'tiktok',
    accentKey: 'clay',
    metrics: [
      {
        value: TODO('client 2 — lift in COD confirmation rate, e.g. "+31%"'),
        label: { fr: 'taux de confirmation', en: 'COD confirmation', ar: 'نسبة تأكيد الطلبات' },
      },
      {
        value: TODO('client 2 — fall in cost per order, e.g. "-38%"'),
        label: { fr: 'coût par commande', en: 'cost per order', ar: 'تكلفة الطلب' },
      },
    ],
  },
  {
    slug: 'b2b-leadgen',
    client: TODO('client 3 name, or keep anonymised'),
    anonymised: true,
    platform: 'linkedin',
    accentKey: 'blue',
    metrics: [
      {
        value: TODO('client 3 — lift in qualified leads, e.g. "+120%"'),
        label: { fr: 'leads qualifiés', en: 'qualified leads', ar: 'عملاء محتملون مؤهَّلون' },
      },
      {
        value: TODO('client 3 — cost per SQL in MAD, e.g. "MAD 340"'),
        label: { fr: 'coût par lead qualifié', en: 'cost per SQL', ar: 'تكلفة العميل المؤهَّل' },
      },
    ],
  },
];

/* --- Hero images ----------------------------------------------------------
   Drop the files in src/assets/hero/ and set `src` to the import. While a
   slide has no file it renders as a labelled placeholder — the page still
   builds and still passes the budget, it just shows the brief instead of the
   photo. Shot list and art direction: the "Hero image directions" artboard. */

export type HeroSlide = {
  key: string;
  accentKey: 'green' | 'ochre' | 'blue' | 'clay';
  src: string | null;
  alt: Record<'fr' | 'en' | 'ar', string>;
  caption: Record<'fr' | 'en' | 'ar', string>;
};

export const heroSlides: HeroSlide[] = [
  {
    key: 'packing',
    accentKey: 'green',
    src: null,
    alt: {
      fr: "Un vendeur e-commerce marocain prépare ses commandes dans son atelier",
      en: 'A Moroccan e-commerce seller packing the day’s orders in their workspace',
      ar: 'بائع مغربي في التجارة الإلكترونية يُجهّز طلبات اليوم في مشغله',
    },
    caption: {
      fr: TODO('hero slide 1 caption — real name and volume, e.g. "Rachid expédie 300 commandes par semaine depuis Derb Omar."'),
      en: TODO('hero slide 1 caption in English'),
      ar: TODO('hero slide 1 caption in Arabic'),
    },
  },
  {
    key: 'creator',
    accentKey: 'ochre',
    src: null,
    alt: {
      fr: 'Une créatrice marocaine filme une vidéo UGC avec son téléphone sur trépied',
      en: 'A Moroccan creator filming a UGC video on a phone tripod',
      ar: 'صانعة محتوى مغربية تُصوّر فيديو UGC بهاتف على حامل',
    },
    caption: {
      fr: TODO('hero slide 2 caption — creator name and the result'),
      en: TODO('hero slide 2 caption in English'),
      ar: TODO('hero slide 2 caption in Arabic'),
    },
  },
  {
    key: 'infeed',
    accentKey: 'blue',
    src: null,
    alt: {
      fr: "Une main tient un téléphone affichant une publicité client dans le fil Instagram",
      en: 'A hand holding a phone showing a client ad live in the Instagram feed',
      ar: 'يد تحمل هاتفًا يظهر فيه إعلان عميل مباشرةً في موجز إنستغرام',
    },
    caption: {
      fr: TODO('hero slide 3 caption — which client ad is shown'),
      en: TODO('hero slide 3 caption in English'),
      ar: TODO('hero slide 3 caption in Arabic'),
    },
  },
  {
    key: 'manager',
    accentKey: 'clay',
    src: null,
    alt: {
      fr: "Un responsable de compte eGrowth répond à un client sur WhatsApp",
      en: 'An eGrowth account manager answering a client on WhatsApp',
      ar: 'مسؤول حساب في eGrowth يُجيب عميلًا على واتساب',
    },
    caption: {
      fr: TODO('hero slide 4 caption — the account manager’s first name and role'),
      en: TODO('hero slide 4 caption in English'),
      ar: TODO('hero slide 4 caption in Arabic'),
    },
  },
];

export const TODO_MARKER = '[[TODO:';
