import { Monitor, BarChart, Users, FileText, Calendar, Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VoletWebPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Monitor className="h-4 w-4" />
              <span className="text-sm font-semibold">Dashboard Web Professionnel</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
              Pilotez votre entreprise BTP depuis votre bureau
            </h1>

            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Un tableau de bord complet pour gérer vos équipes, projets, finances et développer votre activité.
            </p>

            <Button size="lg" asChild className="text-lg px-8">
              <a href="https://web.techservices-cm.com" target="_blank" rel="noopener noreferrer">
                Accéder au Dashboard <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
              <img
                src="/hero/page.jpg"
                alt="Dashboard TechServices"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fonctionnalités du Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tous les outils dont vous avez besoin pour gérer efficacement votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Tableaux de bord analytiques</h3>
              <p className="text-muted-foreground">
                Visualisez vos KPIs, chiffre d'affaires, projets en cours et performances en temps réel
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Gestion d'équipe</h3>
              <p className="text-muted-foreground">
                Gérez vos techniciens, leurs disponibilités, compétences et affectations aux projets
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Devis & Factures</h3>
              <p className="text-muted-foreground">
                Créez, envoyez et suivez vos devis et factures avec génération automatique de documents
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Planning & Calendrier</h3>
              <p className="text-muted-foreground">
                Planifiez vos chantiers, gérez les disponibilités et évitez les conflits de planning
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Suivi de projets</h3>
              <p className="text-muted-foreground">
                Suivez l'avancement de tous vos chantiers avec rapports, photos et documents centralisés
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Paramètres avancés</h3>
              <p className="text-muted-foreground">
                Personnalisez votre espace, gérez les permissions et configurez vos préférences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Pour qui ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Entreprises BTP</h3>
                <p className="text-muted-foreground">Gérez vos équipes, chantiers et finances depuis un seul outil</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bureaux d'étude</h3>
                <p className="text-muted-foreground">Suivez vos projets et collaborez avec les équipes terrain</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Architectes</h3>
                <p className="text-muted-foreground">Pilotez vos réalisations et coordonnez les intervenants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à digitaliser votre entreprise ?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Demandez une démonstration personnalisée ou accédez directement au dashboard
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <a href="/contact">Demander une démo</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="https://web.techservices-cm.com" target="_blank" rel="noopener noreferrer">
                  Accéder au Dashboard
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
