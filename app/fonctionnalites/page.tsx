import {
  Smartphone,
  Users,
  FileText,
  Calendar,
  Bell,
  Shield,
  Zap,
  BarChart,
  MessageSquare,
  MapPin,
  CreditCard,
  Star,
} from "lucide-react"

export default function FonctionnalitesPage() {
  const features = [
    {
      icon: Users,
      title: "Réseau de professionnels",
      description:
        "Accédez à un réseau vérifié de +1000 techniciens, artisans et entreprises BTP. Profils détaillés avec avis et réalisations.",
    },
    {
      icon: FileText,
      title: "Devis & Factures",
      description:
        "Créez, envoyez et gérez vos devis et factures professionnels. Génération automatique de documents PDF personnalisés.",
    },
    {
      icon: Calendar,
      title: "Planning intelligent",
      description:
        "Planifiez vos chantiers, gérez les disponibilités de vos équipes et évitez les conflits de planning avec notre calendrier intelligent.",
    },
    {
      icon: Bell,
      title: "Notifications en temps réel",
      description:
        "Recevez des alertes instantanées pour les nouvelles opportunités, messages, mises à jour de projets et paiements.",
    },
    {
      icon: Shield,
      title: "Paiements sécurisés",
      description:
        "Système de paiement intégré et sécurisé. Transactions protégées, traçables avec historique complet.",
    },
    {
      icon: Zap,
      title: "Réponse rapide",
      description:
        "Répondez aux demandes de clients en quelques minutes. Envoyez des devis instantanés et augmentez votre taux de conversion.",
    },
    {
      icon: BarChart,
      title: "Tableaux de bord analytiques",
      description:
        "Visualisez vos performances, chiffre d'affaires, projets en cours et KPIs sur des dashboards personnalisables.",
    },
    {
      icon: MessageSquare,
      title: "Messagerie intégrée",
      description:
        "Communiquez directement avec vos clients et équipes. Chat en temps réel, partage de fichiers et photos de chantier.",
    },
    {
      icon: MapPin,
      title: "Géolocalisation",
      description:
        "Trouvez des professionnels près de chez vous ou de votre chantier. Optimisez vos déplacements et réduisez vos coûts.",
    },
    {
      icon: CreditCard,
      title: "Gestion financière",
      description:
        "Suivez vos revenus, dépenses et marges. Exportez vos données comptables et simplifiez votre gestion administrative.",
    },
    {
      icon: Star,
      title: "Système d'avis",
      description:
        "Notez et soyez noté par vos clients. Construisez votre réputation et gagnez en visibilité grâce aux avis positifs.",
    },
    {
      icon: Smartphone,
      title: "Multi-plateforme",
      description:
        "Accédez à vos projets depuis votre mobile (iOS/Android) ou votre ordinateur. Synchronisation automatique en temps réel.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
              Toutes les fonctionnalités pour réussir dans le BTP
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              TechServices Pro vous offre tous les outils nécessaires pour gérer efficacement votre activité et
              développer votre business
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Application Mobile & Dashboard Web</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Application Mobile</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Disponible sur iOS et Android</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Accès terrain en temps réel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Notifications push instantanées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Mode hors ligne disponible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Géolocalisation et navigation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Dashboard Web</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Interface bureau complète</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Tableaux de bord analytiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Gestion d'équipe avancée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Exports et rapports détaillés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-success/10 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-success rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Gestion multi-projets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
