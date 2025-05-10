export const METADATA = {
  creator: "Feri Adrian",
  description: "Personal website, portfolio, blog",
  keyword: "feri, feri adrian",
  metadataBase: new URL(process.env.DOMAIN || 'https://feriadrian.site.vercel.app'),
  authors: {
    name: "Feri Adrian",
    url: process.env.DOMAIN || "https://feriadrian.site.vercel.app",  // Ganti dengan URL default
  },
  openGraph: {
    url: process.env.DOMAIN || "https://feriadrian.site.vercel.app",  // Ganti dengan URL default
    siteName: "Feri Adrian",
    locale: "id-ID",
  },
  exTitle: "| Feri Adrian",
  profile: "/images/Feri-Adrian.jpeg.jpg",
};
