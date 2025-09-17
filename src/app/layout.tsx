import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wyre Innovations - Clean Energy Solutions",
  description:
    "Leading OEM provider of sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS solutions for clean energy storage.",
  keywords: [
    "sine wave inverter",
    "solar inverter",
    "MPPT controller",
    "Li-ion BMS",
    "Wyre Innovations",
    "battery management system",
    "clean energy products",
    "solar energy India",
    "energy storage solutions",
    "OEM provider",
  ],
  authors: [{ name: "Wyre Innovations" }],
  creator: "Wyre Innovations",
  publisher: "Wyre Innovations",
  metadataBase: new URL("https://wyreinnovations.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wyreinnovations.com",
    title: "Wyre Innovations - Clean Energy Solutions",
    description:
      "Leading OEM provider of sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS solutions.",
    siteName: "Wyre Innovations",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Wyre Innovations Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wyre Innovations - Clean Energy Solutions",
    description:
      "Leading OEM provider of sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS solutions.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "M3vxZblk4YyJzovJ04ghIyGNmC3mTEijTZYGKhUj7bQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wyre Innovations",
              description:
                "Leading OEM provider of sine wave inverters, solar inverters, MPPT controllers, and Li-ion BMS solutions for clean energy storage.",
              url: "https://wyreinnovations.com",
              logo: "https://wyreinnovations.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+91-9034169378",
                email: "contact@wyreinnovations.com",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "B-122, Shiv Bux Park, Old Gangaram School Building, Nangloi",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110041",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/Wyre-Innovations/",
                "https://www.crunchbase.com/organization/wyre-innovations",
                "https://www.linkedin.com/company/wyre-innovations",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-primary-50/30">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
