import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site, socialLinks } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const title = "Chidozie Portfolio";

export const metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.fullName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};

const emailLink = socialLinks.find((link) => link.href.startsWith("mailto:"));

// schema.org Person data — invisible to visitors, read by search engines.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  url: site.url,
  jobTitle: `${site.tagline.field} ${site.tagline.role}`,
  ...(emailLink ? { email: emailLink.href.replace("mailto:", "") } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressCountry: "IE",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: site.education.school,
  },
  sameAs: socialLinks.filter((link) => link.external).map((link) => link.href),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-black antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          {/* If JS is off, reveal wrappers (which start hidden) are forced visible. */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
