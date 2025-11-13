"use client"

import { ArrowRight, Smartphone, CheckCircle, Zap, Shield, Users, Clock, BarChart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroCarousel } from "@/components/hero-carousel"
import { Testimonials } from "@/components/testimonials"
import { Partners } from "@/components/partners"
import { useEffect, useRef, useState } from "react"

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, hasAnimated])

  return <div ref={ref}>{count}+</div>
}

export default function HomePage() {
  const featuresAnim = useScrollAnimation()
  const whyDownloadAnim = useScrollAnimation()
  const statsAnim = useScrollAnimation()
  const ctaAnim = useScrollAnimation()

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      {/* Key Features */}
      <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            ref={featuresAnim.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              featuresAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Fonctionnalités Principales
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Tout ce dont vous avez besoin pour gérer efficacement vos projets BTP
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Réseau de Professionnels",
                description:
                  "Accédez à un réseau qualifié de techniciens, artisans et entreprises du BTP vérifiés et notés par la communauté.",
                delay: "0ms",
              },
              {
                icon: BarChart,
                title: "Gestion de Chantiers",
                description:
                  "Suivez vos projets en temps réel, gérez les équipes, les matériaux et les délais depuis une interface intuitive.",
                delay: "100ms",
              },
              {
                icon: Bell,
                title: "Notifications Instantanées",
                description:
                  "Recevez des alertes en temps réel pour les nouvelles opportunités, messages et mises à jour de chantiers.",
                delay: "200ms",
              },
              {
                icon: Zap,
                title: "Devis Rapides",
                description:
                  "Créez et envoyez des devis professionnels en quelques clics. Suivez leur statut et convertissez-les en projets.",
                delay: "300ms",
              },
              {
                icon: Shield,
                title: "Paiements Sécurisés",
                description:
                  "Transactions protégées avec système de paiement intégré. Factures automatiques et suivi des paiements.",
                delay: "400ms",
              },
              {
                icon: Clock,
                title: "Disponible 24/7",
                description:
                  "Accédez à vos projets et communiquez avec votre équipe à tout moment, depuis n'importe où.",
                delay: "500ms",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`group bg-card border border-border rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${
                    featuresAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: featuresAnim.isVisible ? feature.delay : "0ms" }}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-balance">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-balance">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Download Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div ref={whyDownloadAnim.ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div
                className={`transition-all duration-1000 ${
                  whyDownloadAnim.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
                  Pourquoi télécharger{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    TechServices Pro
                  </span>{" "}
                  ?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Gagnez du temps",
                      description:
                        "Trouvez rapidement les bons professionnels et gérez tous vos projets depuis une seule application.",
                    },
                    {
                      title: "Augmentez votre chiffre d'affaires",
                      description:
                        "Accédez à de nouvelles opportunités et développez votre réseau professionnel dans le BTP.",
                    },
                    {
                      title: "Simplifiez votre gestion",
                      description:
                        "Centralisez devis, factures, planning et communication dans un seul outil professionnel.",
                    },
                    {
                      title: "Travaillez en toute confiance",
                      description: "Profils vérifiés, avis clients, paiements sécurisés et support client réactif.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-br from-success/20 to-success/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-6 w-6 text-success" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  whyDownloadAnim.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20 group-hover:scale-105 transition-all duration-500">
                    <img
                      src="/modern-mobile-app-mockup-construction-btp.jpg"
                      alt="TechServices App"
                      className="rounded-2xl shadow-2xl mx-auto w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsAnim.ref}
        className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { end: 1000, label: "Professionnels Inscrits", delay: "0ms" },
              { end: 5000, label: "Projets Réalisés", delay: "100ms" },
              { end: 4.8, label: "Note Moyenne", delay: "200ms", suffix: "/5" },
              { end: 24, label: "Support Disponible", delay: "300ms", suffix: "/7" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 hover:scale-110 ${
                  statsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: statsAnim.isVisible ? stat.delay : "0ms" }}
              >
                <div className="text-5xl lg:text-6xl font-bold mb-3">
                  {stat.suffix ? (
                    <>
                      {stat.end}
                      {stat.suffix}
                    </>
                  ) : (
                    <AnimatedCounter end={stat.end} />
                  )}
                </div>
                <div className="text-primary-foreground/90 text-lg lg:text-xl font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Partners Section */}
      <Partners />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            ref={ctaAnim.ref}
            className={`bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-12 md:p-16 lg:p-20 text-center max-w-5xl mx-auto border border-primary/20 relative overflow-hidden transition-all duration-1000 ${
              ctaAnim.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative inline-block mb-8 animate-float">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              <Smartphone className="h-16 w-16 lg:h-20 lg:w-20 text-primary relative z-10" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Prêt à transformer votre activité BTP ?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
              Rejoignez des milliers de professionnels qui font confiance à TechServices Pro pour développer leur
              business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <Button size="lg" asChild className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <a href="https://app.techservices-cm.com" target="_blank" rel="noopener noreferrer">
                  Accéder à l'App Web <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <div className="flex gap-3 flex-wrap justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base px-6 py-6 bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform"
                >
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                   <img 
                      src="playstore.png"
                      alt="App Store" 
                      className="h-[1.2em] w-auto object-contain mr-2 flex-shrink-0"
                    />
                    Play Store
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base px-6 py-6 bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform"
                >
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="appstore.png"
                      alt="App Store" 
                      className="h-[1.2em] w-auto object-contain mr-2 flex-shrink-0"
                    />
                    App Store
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
