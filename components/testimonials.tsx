"use client"

import { useState, useEffect, useRef } from "react"
import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Jean-Pierre Kamga",
    role: "Directeur Général",
    company: "BTP Solutions Cameroun",
    content:
      "TechServices a révolutionné notre façon de gérer les chantiers. L'application est intuitive et le dashboard web nous permet de suivre tous nos projets en temps réel. Un gain de temps considérable !",
    rating: 5,
    image: "/african-businessman.png",
  },
  {
    name: "Marie Ngo",
    role: "Architecte",
    company: "Studio Architecture Moderne",
    content:
      "Enfin une plateforme qui comprend les besoins des professionnels du BTP au Cameroun. La mise en relation avec les techniciens qualifiés est rapide et efficace. Je recommande vivement !",
    rating: 5,
    image: "/african-businesswoman-architect.jpg",
  },
  {
    name: "Paul Mbida",
    role: "Chef de Chantier",
    company: "Constructions Modernes",
    content:
      "Grâce à TechServices, j'ai pu développer mon réseau et trouver de nouveaux clients. L'application mobile est parfaite pour gérer mes interventions sur le terrain. Un outil indispensable !",
    rating: 5,
    image: "/african-construction-worker.jpg",
  },
]

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

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const animation = useScrollAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={animation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Ce que disent nos clients</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Des milliers de professionnels nous font confiance
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[400px] md:min-h-[350px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`p-8 md:p-12 transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 scale-100 relative"
                    : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                }`}
              >
                <Quote className="h-12 w-12 text-primary/20 mb-6" />
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-balance">{testimonial.content}</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role} - {testimonial.company}
                    </div>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
