export const SITE = {
  name: "GMC Tourism",
  title: "GMC Tourism · Explore Bhutan with Confidence",
  description:
    "Lightning-fast tourism starter kit showcasing destinations, itineraries, and travel stories with Astro, Tailwind CSS, and MDX.",
  url: "https://gmctourism.com",
  language: "en",
  ogImage: "/assets/logo.svg",
  themeColor: "#0f172a",
  author: {
    name: "GMC Tourism",
    email: "hello@gmctourism.com",
  },
  social: {
    twitter: "https://x.com/gmctourism",
    facebook: "https://facebook.com/gmctourism",
    instagram: "https://instagram.com/gmctourism",
  },
};

export type StructuredData =
  | Record<string, unknown>
  | Record<string, unknown>[];

export const siteStructuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  logo: `${SITE.url}/assets/logo.svg`,
  sameAs: [
    SITE.social.twitter,
    SITE.social.facebook,
    SITE.social.instagram,
  ].filter(Boolean),
};
