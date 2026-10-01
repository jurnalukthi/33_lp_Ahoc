import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { features } from "@/data/features"
import { ShieldCheck, GitBranch, Workflow, Map, Gift } from "lucide-react"

const iconMap = {
  "shield-check": ShieldCheck,
  "git-branch": GitBranch,
  "workflow": Workflow,
  "map": Map,
  "gift": Gift
}

export function Features() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-muted)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keunggulan Buku
          </h2>
          <p className="text-lg text-[var(--color-foreground)] opacity-80 max-w-2xl mx-auto">
            Lima pilar utama yang membuat buku ini menjadi referensi terpercaya untuk memahami hukum pidana korupsi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <Card key={feature.id} className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <CardHeader>
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
