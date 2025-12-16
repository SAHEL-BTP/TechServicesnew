import { Smartphone, CheckCircle, Star, Users, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AppMobilePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-semibold">Application Mobile iOS & Android</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">L'application BTP dans votre poche</h1>

            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Téléchargez TechServices et accédez à tous vos projets, trouvez des professionnels qualifiés et gérez
              votre activité où que vous soyez.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="playstore.png"
                    alt="Play Store" 
                    className="h-[1.2em] w-auto object-contain mr-2 flex-shrink-0"
                  />
                  Télécharger sur Play Store
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="appstore.png"
                    alt="App Store" 
                    className="h-[1.2em] w-auto object-contain mr-2 flex-shrink-0"
                  />
                  Télécharger sur App Store
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Tabs - Clients vs Pros */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="clients" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="clients" className="text-lg">Pour les Clients</TabsTrigger>
              <TabsTrigger value="pros" className="text-lg">Pour les Techniciens</TabsTrigger>
            </TabsList>

            <TabsContent value="clients" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Trouvez le bon professionnel pour votre projet</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Recherche simplifiée</h3>
                        <p className="text-muted-foreground">Trouvez rapidement des techniciens qualifiés par métier, localisation et disponibilité</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Profils vérifiés</h3>
                        <p className="text-muted-foreground">Consultez les avis, notes et réalisations des professionnels avant de choisir</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Devis instantanés</h3>
                        <p className="text-muted-foreground">Recevez plusieurs devis et comparez les offres en quelques clics</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Suivi de projet</h3>
                        <p className="text-muted-foreground">Suivez l'avancement de vos travaux en temps réel avec photos et rapports</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img src="/screenmockup2.jpg" alt="App pour clients" className="rounded-3xl shadow-2xl mx-auto"/>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pros" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                  <img src="/screenmockup1.jpg" alt="App pour professionnels" className="rounded-3xl shadow-2xl mx-auto"/>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-4xl font-bold mb-6">Développez votre activité BTP</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Nouvelles opportunités</h3>
                        <p className="text-muted-foreground">Recevez des demandes de clients qualifiés correspondant à vos compétences</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Gestion simplifiée</h3>
                        <p className="text-muted-foreground">Gérez vos devis, factures, planning et équipes depuis une seule app</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visibilité accrue</h3>
                        <p className="text-muted-foreground">Créez votre profil professionnel et mettez en avant vos réalisations</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Paiements sécurisés</h3>
                        <p className="text-muted-foreground">Recevez vos paiements rapidement avec notre système de transaction sécurisé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fonctionnalités de l'application</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tout ce dont vous avez besoin pour réussir vos projets BTP</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Réseau professionnel</h3>
              <p className="text-muted-foreground">Accédez à un réseau de +1000 professionnels vérifiés</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Devis rapides</h3>
              <p className="text-muted-foreground">Créez et envoyez des devis professionnels en quelques minutes</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Paiements sécurisés</h3>
              <p className="text-muted-foreground">Transactions protégées et traçables pour votre sécurité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-sm text-muted-foreground">Note moyenne</div>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Professionnels</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Téléchargements</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
              {/* Logo TechServices */}
              <img 
                src="/logoTS.png" 
                alt="" 
                className="h-24 w-auto mx-auto mb-4" 
              />

              <h2 className="text-3xl font-bold mb-4">Téléchargez l'application maintenant</h2>
              <p className="text-muted-foreground mb-6">
                Gratuit sur iOS et Android. Commencez à gérer vos projets BTP dès aujourd'hui.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                {/* Play Store */}
                <Button size="lg" asChild>
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="playstore.png"
                      alt="Play Store" 
                      className="h-[1.2em] w-auto object-contain mr-2 flex-shrink-0"
                    />
                    Play Store
                  </a>
                </Button>

                {/* App Store */}
                <Button size="lg" variant="outline" asChild>
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="appstore.png"
                      alt="App Store" 
                      className="h-[1.2em] w-auto object-contain mr-2 flex-shrink-0"
                    />
                    App Store
                  </a>
                </Button>

                {/* Téléchargement direct */}
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="https://expo.dev/artifacts/eas/8dZNupYiLcyhKkXEqeSrCW.apk"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <img 
                      src="/logoTS2.png" 
                      alt="" 
                      className="h-10 w-auto mr-0 flex-shrink-0"
                    />
                    Télécharger ici
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-3">
                Téléchargement direct recommandé uniquement si Play Store n’est pas disponible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

