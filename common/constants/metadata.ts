const domain = process.env.DOMAIN?.startsWith("http")
  ? process.env.DOMAIN
  : `https://${process.env.DOMAIN || "https://feriadrian.site.vercel.app"}`;

export const METADATA = {
  creator: "Feri Adrian",
  description: "Personal website, portfolio, blog",
  keyword: "feri, feri adrian",
  metadataBase: new URL(domain),
  authors: {
    name: "Feri Adrian",
    url: domain,
  },
  openGraph: {
    url: domain,
    siteName: "Feri Adrian",
    locale: "id-ID",
  },
  exTitle: "| Feri Adrian",
  profile: "/images/Feri-Adrian.jpeg.jpg",
};
