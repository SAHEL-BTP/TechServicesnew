import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background border-t border-border/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <div className="w-128 h-16 flex items-center justify-center">
                <img src="logoTS.png" alt="logo TechServices" />
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              La solution complète pour digitaliser vos services BTP. Application mobile et dashboard professionnel.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/17Tp6HajCT/"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {/* <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/app-mobile" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Application Mobile
                </Link>
              </li>
              <li>
                <Link href="/volet-web" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Dashboard Web Pro
                </Link>
              </li>
              <li>
                <Link
                  href="/fonctionnalites"
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="text-background/70 hover:text-primary text-sm transition-colors">
                  CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Douala, Cameroun</span>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+237123456789" className="hover:text-primary transition-colors">
                  +237 622 000 000
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:TechServices@gmail.com" className="hover:text-primary transition-colors">
                  TechServices@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/60 text-sm">
          <p>&copy; {currentYear} TechServices. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
