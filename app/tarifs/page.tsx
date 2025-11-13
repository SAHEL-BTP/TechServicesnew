import { Check, Smartphone, Monitor, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TarifsPage() {
  const plans = [
    {
      name: "Gratuit",
      price: "0",
      description: "Pour découvrir TechServices Pro",
      icon: Smartphone,
      features: [
        "Accès à l'application mobile",
        "Profil professionnel basique",
        "3 devis par mois",
        "Messagerie limitée",
        "Support par email",
      ],
      cta: "Télécharger gratuitement",
      popular: false,
    },
    {
      name: "Pro",
      price: "15 000",
      description: "Pour les professionnels actifs",
      icon: Zap,
      features: [
        "Tout du plan Gratuit",
        "Devis illimités",
        "Messagerie illimitée",
        "Profil vérifié avec badge",
        "Statistiques avancées",
        "Priorité dans les recherches",
        "Support prioritaire",
      ],
      cta: "Commencer l'essai gratuit",
      popular: true,
    },
    {
      name: "Entreprise",
      price: "Sur devis",
      description: "Pour les entreprises et bureaux d'étude",
      icon: Monitor,
      features: [
        "Tout du plan Pro",
        "Dashboard web complet",
        "Gestion d'équipe illimitée",
        "Multi-utilisateurs",
        "API et intégrations",
        "Formation personnalisée",
        "Account manager dédié",
        "Support 24/7",
      ],
      cta: "Nous contacter",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Des tarifs adaptés à votre activité</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Choisissez le plan qui correspond à vos besoins. Tous les plans incluent 14 jours d'essai gratuit.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <div
                  key={index}
                  className={`relative bg-card border rounded-3xl p-8 ${
                    plan.popular
                      ? "border-primary shadow-xl scale-105 md:scale-110"
                      : "border-border hover:shadow-lg transition-shadow"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.price !== "Sur devis" && (
                        <>
                          <span className="text-5xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">FCFA/mois</span>
                        </>
                      )}
                      {plan.price === "Sur devis" && <span className="text-3xl font-bold">{plan.price}</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="bg-success/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-success" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href={plan.name === "Entreprise" ? "/contact" : "/app-mobile"}>{plan.cta}</a>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Questions fréquentes</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Puis-je changer de plan à tout moment ?</h3>
                <p className="text-muted-foreground">
                  Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements sont effectifs
                  immédiatement.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Comment fonctionne l'essai gratuit ?</h3>
                <p className="text-muted-foreground">
                  Tous les plans payants incluent 14 jours d'essai gratuit. Aucune carte bancaire n'est requise pour
                  commencer. Vous ne serez facturé qu'à la fin de la période d'essai.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Quels moyens de paiement acceptez-vous ?</h3>
                <p className="text-muted-foreground">
                  Nous acceptons les cartes bancaires (Visa, Mastercard), Mobile Money (MTN, Orange) et les virements
                  bancaires pour les plans Entreprise.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Y a-t-il des frais cachés ?</h3>
                <p className="text-muted-foreground">
                  Non, nos tarifs sont transparents. Le prix affiché est le prix que vous payez. Aucun frais caché ou
                  surprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de professionnels qui font confiance à TechServices Pro
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="/app-mobile">Commencer gratuitement</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <a href="/contact">Parler à un expert</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
