const domain = "https://feriadrian.site.vercel.app"; // sementara abaikan process.env

export const METADATA = {
  // ...
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
  // ...
};
