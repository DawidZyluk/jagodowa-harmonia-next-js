import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.scss";
import Navbar from "./components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jagodowa-harmonia.pl"),
  title: {
    default: "Jagodowa Harmonia | Dietetyczka kliniczna online",
    template: "%s | Jagodowa Harmonia",
  },
  description:
    "Konsultacje dietetyczne online, indywidualne jadłospisy i wsparcie w insulinooporności, PCOS oraz chorobach tarczycy. Empatyczna opieka dietetyczna – bez restrykcji.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  applicationName: "Jagodowa Harmonia",
  keywords: [
    "dietetyk online",
    "konsultacja dietetyczna online",
    "jadłospis online",
    "insulinooporność dieta",
    "PCOS dieta",
    "choroby tarczycy dieta",
    "dietetyk kliniczny",
    "plan żywieniowy",
  ],
  authors: [{ name: "Jagoda", url: "https://jagodowa-harmonia.pl" }],
  creator: "Jagodowa Harmonia",
  publisher: "Jagodowa Harmonia",
  alternates: {
    canonical: "https://jagodowa-harmonia.pl/",
    languages: {
      "pl-PL": "https://jagodowa-harmonia.pl/",
      // "en-US": "https://jagodowa-harmonia.pl/en" // jeśli kiedyś dodasz EN
    },
  },
  openGraph: {
    title: "Jagodowa Harmonia | Dietetyczka kliniczna online",
    description:
      "Indywidualne konsultacje dietetyczne, jadłospisy i diet coaching online dla kobiet z insulinoopornością, PCOS i chorobami tarczycy.",
    url: "https://jagodowa-harmonia.pl",
    siteName: "Jagodowa Harmonia",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://jagodowa-harmonia.pl/logo.png",
        width: 600,
        height: 600,
        alt: "Jagodowa Harmonia – logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagodowa Harmonia | Dietetyczka kliniczna online",
    description:
      "Konsultacje dietetyczne i jadłospisy online: insulinooporność, PCOS, tarczyca. Empatyczne wsparcie bez restrykcji.",
    images: ["https://jagodowa-harmonia.pl/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // opcjonalnie:
  // themeColor: "#8abf9e",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://jagodowa-harmonia.pl/#organization",
  name: "Jagodowa Harmonia",
  description:
    "Dietetyczka kliniczna online. Konsultacje, indywidualne jadłospisy, diet coaching. Wsparcie w insulinooporności, PCOS i chorobach tarczycy.",
  url: "https://jagodowa-harmonia.pl",
  logo: "https://jagodowa-harmonia.pl/logo.png",
  image: "https://jagodowa-harmonia.pl/logo.png",
  telephone: "+48 789 162 740",
  areaServed: "PL",
  sameAs: [
    // dodaj social media, jeśli masz
  ],
  offers: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Konsultacje dietetyczne online" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Indywidualne jadłospisy online" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diet coaching i wsparcie nawyków" } },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://jagodowa-harmonia.pl/#person",
  name: "Jagoda",
  jobTitle: "Dietetyczka certifikowana kliniczna",
  url: "https://jagodowa-harmonia.pl",
  image: "https://jagodowa-harmonia.pl/logo.png",
  worksFor: { "@id": "https://jagodowa-harmonia.pl/#organization" },
  sameAs: [],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://jagodowa-harmonia.pl/#website",
  url: "https://jagodowa-harmonia.pl",
  name: "Jagodowa Harmonia",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://jagodowa-harmonia.pl/szukaj?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={poppins.variable}>
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="person-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(personJsonLd)}
        </Script>
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(webSiteJsonLd)}
        </Script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
