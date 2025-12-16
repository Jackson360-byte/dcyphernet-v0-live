import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { JotFormChatbot } from "@/components/jotform-chatbot"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dcyphernet.com"),
  title: {
    default: "DCYPHERNET | Digital Solutions & AI Business Automation",
    template: "%s | DCYPHERNET",
  },
  description:
    "Premium digital solutions and AI business automation. We design systems that grow businesses through automation, web development, and strategic consulting. Book a free 30-minute strategy call today.",
  keywords: [
    "AI automation",
    "business automation",
    "web development",
    "digital solutions",
    "branding",
    "DCYPHERNET",
    "AI agents",
    "workflow automation",
    "digital transformation",
    "business growth",
    "web design",
    "digital marketing",
  ],
  authors: [{ name: "DCYPHERNET", url: "https://dcyphernet.com" }],
  creator: "DCYPHERNET",
  publisher: "DCYPHERNET",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dcyphernet.com",
    siteName: "DCYPHERNET",
    title: "DCYPHERNET | Digital Solutions & AI Business Automation",
    description:
      "Premium digital solutions and AI business automation. We design systems that grow businesses through automation, web development, and strategic consulting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DCYPHERNET | Digital Solutions & AI Business Automation",
    description: "Premium digital solutions and AI business automation. We design systems that grow businesses.",
    creator: "@dcyphernet",
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
  alternates: {
    canonical: "https://dcyphernet.com",
  },
  category: "technology",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DCYPHERNET",
  description:
    "Premium digital solutions and AI business automation. We design systems that grow businesses through automation, web development, and strategic consulting.",
  url: "https://dcyphernet.com",
  logo: "https://dcyphernet.com/logo.png",
  sameAs: ["https://twitter.com/dcyphernet", "https://linkedin.com/company/dcyphernet"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://calendly.com/dcyphernet/30min",
  },
  offers: {
    "@type": "AggregateOffer",
    description: "Digital Solutions & AI Business Automation Services",
    priceCurrency: "USD",
    offerCount: 6,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://dcyphernet.com" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <div className="noise-overlay" />
          {children}
          <JotFormChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
