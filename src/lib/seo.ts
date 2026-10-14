export const SITE_URL = (import.meta.env?.["VITE_SITE_URL"] as string | undefined)?.replace(/\/$/, "") ?? "https://ternoae.web.id";
export const SITE_NAME = "TernoAE";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SERVICE_AREAS = [
  "Jepara",
  "Kudus",
  "Demak",
  "Pati",
  "Semarang",
  "Rembang",
  "Kecamatan Mlonggo",
  "Kecamatan Tahunan",
  "Kecamatan Jepara Kota",
] as const;

export function canonicalLink(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p === "/" ? "/" : p.replace(/\/$/, "")}`;
}

export function socialMeta(opts: { title: string; description: string; ogImage?: string; path: string }) {
  const url = canonicalLink(opts.path);
  const image = opts.ogImage?.startsWith("http") ? opts.ogImage : `${SITE_URL}${opts.ogImage ?? "/og-image.png"}`;
  return [
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: image },
  ];
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data);
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "TernoAE - Ojek Termurah Jepara",
    alternateName: "TernoAE Ojek Online Jepara",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: DEFAULT_OG_IMAGE,
    description: "TernoAE ojek asli Jepara, termurah, ojek online 24 jam antar jemput se-Jawa Tengah. Tarif mulai Rp5.000.",
    priceRange: "Rp 5000 - Rp 100000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, QRIS",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jepara",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    geo: { "@type": "GeoCoordinates", latitude: -6.5848, longitude: 110.668 },
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
    openingHours: "Mo-Su 06:00-22:00",
    telephone: "+6285155145788",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "TernoAE Ojek Online Jepara",
    url: SITE_URL,
    inLanguage: "id-ID",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime: string;
  image: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalLink(`/blog/${opts.slug}`) },
    datePublished: opts.publishedTime,
    dateModified: opts.modifiedTime,
    keywords: opts.keywords.join(", "),
    inLanguage: "id-ID",
  };
}

export function faqSchema(faqs: readonly (readonly [string, string])[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function itemListSchema(posts: { title: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: canonicalLink(`/blog/${p.slug}`),
    })),
  };
}
