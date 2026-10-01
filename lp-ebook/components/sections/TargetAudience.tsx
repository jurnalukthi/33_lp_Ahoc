import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Scale, Building2 } from "lucide-react"

export function TargetAudience() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Mahasiswa Hukum",
      benefits: [
        "Persiapan ujian hukum pidana & tipikor",
        "Referensi skripsi dan tesis",
        "Pemahaman KUHP Nasional 2026",
        "Latihan soal komprehensif"
      ]
    },
    {
      icon: Scale,
      title: "Advokat & Praktisi Hukum",
      benefits: [
        "Referensi praktis penanganan kasus",
        "Update regulasi terkini 2026",
        "Argumentasi yuridis dengan diagram",
        "Analisis unsur delik detail"
      ]
    },
    {
      icon: Building2,
      title: "Calon Hakim Ad Hoc Tipikor",
      benefits: [
        "Persiapan seleksi hakim ad hoc",
        "Strategi menjawab ujian metode IRAC",
        "Pemahaman mendalam seluruh aspek",
        "Simulasi ujian dengan 300 soal"
      ]
    }
  ]
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Untuk Siapa Buku Ini?
          </h2>
          <p className="text-lg text-[var(--color-foreground)] opacity-80 max-w-2xl mx-auto">
            Dirancang khusus untuk tiga kelompok profesional dan calon profesional hukum
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <Card key={index} className="border-2 hover:border-[var(--color-primary)] transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {audience.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--color-primary)] mt-1">•</span>
                        <span className="text-[var(--color-foreground)] opacity-90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
