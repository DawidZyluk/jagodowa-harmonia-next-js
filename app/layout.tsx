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
    default: "Jagodowa Harmonia | Dietetyk kliniczny w Warszawie i online",
    template: "%s | Jagodowa Harmonia",
  },
  description:
    "Jagodowa Harmonia to gabinet dietetyczny Jagody – dietetyczki klinicznej wspierającej w insulinooporności, PCOS, chorobach tarczycy i zdrowej redukcji masy ciała. Konsultacje online i stacjonarnie w Warszawie.",
  icons: {
    icon: "/favicon.png",
  },
  applicationName: "Jagodowa Harmonia",
  keywords: [
    "dietetyk Warszawa",
    "dietetyk online",
    "insulinooporność dieta",
    "PCOS jadłospis",
    "dietetyk kliniczny",
    "plan żywieniowy",
    "jadłospis redukcyjny",
    "coaching żywieniowy",
  ],
  authors: [{ name: "Jagoda – Jagodowa Harmonia", url: "https://jagodowa-harmonia.pl" }],
  creator: "Jagodowa Harmonia",
  publisher: "Jagodowa Harmonia",
  category: "health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jagodowa Harmonia | Dietetyk kliniczny w Warszawie i online",
    description:
      "Indywidualne konsultacje dietetyczne, jadłospisy i diet coaching dla osób z insulinoopornością, PCOS, chorobami tarczycy oraz w trakcie zdrowej redukcji.",
    url: "https://jagodowa-harmonia.pl",
    siteName: "Jagodowa Harmonia",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "Jagodowa Harmonia – logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagodowa Harmonia | Dietetyk kliniczny w Warszawie i online",
    description:
      "Indywidualne konsultacje dietetyczne, jadłospisy i diet coaching dla osób z insulinoopornością, PCOS oraz chorób tarczycy.",
    images: ["/logo.png"],
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
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://jagodowa-harmonia.pl/#organization",
  name: "Jagodowa Harmonia",
  description:
    "Dietetyk kliniczny w Warszawie i online. Konsultacje, indywidualne jadłospisy, diet coaching, wsparcie w insulinooporności, PCOS i chorobach tarczycy.",
  url: "https://jagodowa-harmonia.pl",
  logo: "https://jagodowa-harmonia.pl/logo.png",
  image: "https://jagodowa-harmonia.pl/logo.png",
  telephone: "+48 789 162 740",
  address: {
    "@type": "PostalAddress",
    streetAddress: "al. Solidarności 117",
    addressLocality: "Warszawa",
    postalCode: "00-140",
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Polska",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+48 789 162 740",
      contactType: "customer service",
      areaServed: "PL",
      availableLanguage: ["pl-PL"],
    },
  ],
  offers: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Konsultacje dietetyczne online i stacjonarne",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Indywidualne jadłospisy",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Diet coaching i wsparcie nawyków żywieniowych",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.variable}>
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
