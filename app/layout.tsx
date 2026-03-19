import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merit Automobile | Brand New Cars in Lagos | Affordable Factory-Fresh Vehicles | Perfect 5.0★",
  description: "Perfect 5.0★ rated dealer of BRAND NEW cars in Alakuko, Lagos. Affordable brand new Toyota, Honda, Hyundai, Kia & more. Stress-free process. Open until 8 PM. Call 0816 926 4568",
  keywords: "brand new cars Lagos, affordable new cars Nigeria, Merit Automobile, new car dealer Alakuko, factory fresh cars, Toyota new car, Honda new car, new car financing Lagos, Baale Animashaun Road car dealer",
  openGraph: {
    title: "Merit Automobile | Brand New Cars in Lagos",
    description: "Perfect 5.0★ rated dealer of BRAND NEW cars in Alakuko, Lagos. Affordable prices. Stress-free process.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Merit Automobile",
              "description": "Home of Affordable Brand New Cars in Lagos, Nigeria",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "98 Baale Animashaun Road",
                "addressLocality": "Alakuko, Lagos",
                "postalCode": "101232",
                "addressCountry": "NG"
              },
              "telephone": "+2348169264568",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "10",
                "bestRating": "5"
              },
              "openingHours": "Mo-Su 00:00-20:00",
              "priceRange": "₦₦₦"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
