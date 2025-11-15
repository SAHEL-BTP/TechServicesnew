"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Gérez vos projets BTP",
    subtitle: "avec TechServices",
    description: "L'application tout-en-un pour les professionnels du bâtiment",
    image: "/hero/slide1.jpg", 
    cta: "Télécharger l'App",
    ctaLink: "/app-mobile",
    icon: Smartphone,
  },
  {
    title: "Dashboard Web Professionnel",
    subtitle: "Pilotez votre activité",
    description: "Tableau de bord complet pour gérer vos équipes et projets",
    image: "/hero/slide2.jpg", 
    cta: "Découvrir le Dashboard",
    ctaLink: "/volet-web",
    icon: Monitor,
  },
  {
    title: "Trouvez des techniciens qualifiés",
    subtitle: "en quelques clics",
    description: "Réseau vérifié de professionnels du BTP à votre disposition",
    image: "/hero/slide3.jpg", 
    cta: "Voir les fonctionnalités",
    ctaLink: "/fonctionnalites",
    icon: Zap,
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) nextSlide()
      else prevSlide()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-20 btp-pattern">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse-subtle"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="relative">

          {/* Slides Container */}
          <div
            ref={carouselRef}
            className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px] touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => {
              const Icon = slide.icon
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0 z-10"
                      : index < currentSlide
                      ? "opacity-0 -translate-x-full z-0"
                      : "opacity-0 translate-x-full z-0"
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">

                    {/* Content */}
                    <div className="space-y-6 lg:space-y-8">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full border border-primary/20 hover:scale-105 transition-transform">
                        <Icon className="h-4 w-4 animate-pulse" />
                        <span className="text-sm font-semibold">Solution BTP Professionnelle</span>
                      </div>

                      <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                          {slide.title}
                        </h1>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent animate-gradient block text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                          {slide.subtitle}
                        </span>
                      </div>

                      <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                        <Button size="lg" asChild className="text-base md:text-lg px-6 md:px-8 py-6 hover:scale-105 hover:shadow-xl transition-all">
                          <a href={slide.ctaLink}>{slide.cta}</a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-base md:text-lg px-6 md:px-8 py-6 bg-background/50 backdrop-blur-sm hover:scale-105 hover:shadow-xl transition-all">
                          <a href="/contact">Nous contacter</a>
                        </Button>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative hidden lg:block">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10 group-hover:scale-105 transition-all duration-500">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-[500px] lg:h-[600px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm hover:bg-background border border-border rounded-full p-3 lg:p-4 transition-all hover:scale-110 shadow-lg z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm hover:bg-background border border-border rounded-full p-3 lg:p-4 transition-all hover:scale-110 shadow-lg z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          {/* Dots */}
          <div className="absolute -bottom-2 lg:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
