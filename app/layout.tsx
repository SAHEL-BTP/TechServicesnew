import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TechServices - Solution BTP Professionnelle | Application Mobile & Web",
  description:
    "TechServices révolutionne le secteur BTP avec une application mobile pour clients et techniciens, et un dashboard web professionnel pour entreprises, architectes et bureaux d'étude.",
  keywords:
    "BTP, construction, application mobile, dashboard professionnel, techniciens, entreprises BTP, architectes, bureaux d'étude",
  authors: [{ name: "TechServices" }],
  openGraph: {
    title: "TechServices - Solution BTP Professionnelle",
    description: "Application mobile et dashboard web pour le secteur BTP",
    url: "https://techservices-cm.com",
    siteName: "TechServices",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechServices - Solution BTP Professionnelle",
    description: "Application mobile et dashboard web pour le secteur BTP",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <div className="watermark" aria-hidden="true">
          TECHSERVICES PRO
        </div>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
