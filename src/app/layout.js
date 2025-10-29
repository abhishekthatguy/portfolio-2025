import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SocialWidget from "@/components/widget/SocialWidget";
import DateTimeWidget from "@/components/widget/DateTimeWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Structured data for Person
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abhishek Singh",
  "jobTitle": "Senior Software Developer",
  "url": "https://abhishekthatguy.in",
  "sameAs": [
    "https://github.com/abhishekthatguy",
    "https://linkedin.com/in/abhishekthatguy",
    "https://twitter.com/abhishekthatguy",
    "https://www.facebook.com/abhishekthatguy"
  ],
  "knowsAbout": [
    "Vue.js",
    "React",
    "JavaScript",
    "AngularJS",
    "DevOps",
    "ERP",
    "CMS"
  ],
  "description": "Senior Software Developer specializing in Vue, React, JavaScript, AngularJS, DevOps, ERP, and CMS development."
};

export const metadata = {
  title: "Abhishek Singh - Senior Software Developer Portfolio",
  description: "Portfolio of Abhishek Singh, a Senior Software Developer specializing in Vue, React, JavaScript, AngularJS, DevOps, ERP, and CMS development.",
  keywords: "Abhishek Singh, Software Developer, Vue.js, React, JavaScript, AngularJS, DevOps, ERP, CMS, Web Development",
  authors: [{ name: "Abhishek Singh" }],
  creator: "Abhishek Singh",
  publisher: "Abhishek Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abhishekthatguy.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Abhishek Singh - Senior Software Developer Portfolio",
    description: "Portfolio of Abhishek Singh, a Senior Software Developer specializing in Vue, React, JavaScript, AngularJS, DevOps, ERP, and CMS development.",
    url: 'https://abhishekthatguy.in',
    siteName: 'Abhishek Singh Portfolio',
    images: [
      {
        url: '/opengraph-image.png', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Abhishek Singh - Senior Software Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Abhishek Singh - Senior Software Developer Portfolio",
    description: "Portfolio of Abhishek Singh, a Senior Software Developer specializing in Vue, React, JavaScript, AngularJS, DevOps, ERP, and CMS development.",
    images: ['/twitter-image.png'], // Add your Twitter image
    creator: '@abhishekthatguy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3GB11NJ1S"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q3GB11NJ1S');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <SocialWidget />
        <DateTimeWidget />
      </body>
    </html>
  );
}
