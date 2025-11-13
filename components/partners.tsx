"use client"

import { useState, useEffect, useRef } from "react"

const partners = [
  { name: "Ciment du Cameroun", logo: "/cement-company-logo.jpg" },
  { name: "Quincaillerie Moderne", logo: "/hardware-store-logo.png" },
  { name: "BTP Équipements", logo: "/construction-equipment-logo.jpg" },
  { name: "Architectes Associés", logo: "/architecture-firm-logo.jpg" },
  { name: "Matériaux Pro", logo: "/building-materials-logo.jpg" },
  { name: "Laboratoire BTP", logo: "/laboratory-logo.jpg" },
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

export function Partners() {
  const animation = useScrollAnimation()

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={animation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Nos Partenaires</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Ils nous font confiance pour digitaliser le secteur BTP
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-4 md:p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-500 group ${
                  animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: animation.isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
